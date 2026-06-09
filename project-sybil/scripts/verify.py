#!/usr/bin/env python3
"""
Project Sybil — Component Verification Script

Queries a ServiceNow instance to check which of the 32 scoped app component
types have been successfully created for a given approach run.

Usage:
    python scripts/verify.py --approach 1 [--scope x_snc_apr_trv]
    python scripts/verify.py --approach 1 --tokens 52000 --wall-clock 3600

Results are appended to results.yaml and the README.md results section is updated.
Optional --tokens and --wall-clock flags record development cost per iteration.
"""

import argparse
import datetime
import json
import os
import re
import sys
import time
from pathlib import Path

import requests
import yaml


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

APPROACH_NAMES = {
    "1": "rest-custom-ui",
    "2": "rest-workspace",
    "3": "sdk-primed",
    "3b": "sdk-cold",
    "4": "buildagent-custom-ui",
    "5": "buildagent",
}

APPROACH_LABELS = {
    "1": "REST Custom UI",
    "2": "REST Workspace",
    "3": "SDK Primed",
    "3b": "SDK Cold",
    "4": "Build Agent Custom UI",
    "5": "Build Agent",
}

APPROACH_ORDER = ["3", "3b", "5"]

# Seed data tables (suffix after scope) and expected minimum counts
SEED_TABLES = {
    "policy": 5,
    "request": 5,
    "expense": 10,
    "delegation": 2,
}

# Component checks: (key, label, table, query_type, expected_min)
#
# query_type:
#   "scope"   — sys_scope.scope=<scope>
#   "name"    — nameLIKE<scope>
#   "seed"    — count records across custom tables
#   "acl_df"  — ACLs with operation=record (security data filters)
COMPONENT_CHECKS = [
    ("tables_and_columns",          "Tables & columns",              "sys_db_object",           "scope", 4),
    ("acls",                        "Access control lists (ACLs)",   "sys_security_acl",        "scope", 11),
    ("roles",                       "Roles",                         "sys_user_role",           "scope", 4),
    ("business_rules",              "Business rules",                "sys_script",              "scope", 7),
    ("client_scripts",              "Client scripts",                "sys_script_client",       "scope", 3),
    ("ui_policies",                 "UI policies",                   "sys_ui_policy",           "scope", 3),
    ("flows",                       "Flows (Workflow Automation)",   "sys_hub_flow",            "scope", 3),
    ("email_notifications",         "Email notifications",           "sysevent_email_action",   "scope", 5),
    ("service_catalog_items",       "Service catalog items",         "sc_cat_item",             "scope", 1),
    ("variables_and_variable_sets", "Variables & variable sets",     "item_option_new_set",     "scope", 2),
    ("catalog_client_scripts",      "Catalog client scripts",        "catalog_script_client",   "scope", 3),
    ("catalog_ui_policies",         "Catalog UI policies",           "catalog_ui_policy",       "scope", 2),
    ("script_includes",             "Script includes",               "sys_script_include",      "scope", 3),
    ("scripted_rest_apis",          "Scripted REST APIs",            "sys_ws_definition",       "scope", 1),
    ("ui_actions",                  "UI actions",                    "sys_ui_action",           "scope", 5),
    ("ui_pages",                    "UI pages (React)",              "sys_ui_page",             "scope", 2),
    ("ui_formatters",               "UI formatters (built-in)",      "sys_ui_formatter",        "scope", 2),
    ("workspaces",                  "Workspaces",                    "sys_ux_app_config",       "scope", 1),
    ("app_menus_and_modules",       "Application menus & modules",   "sys_app_application",     "scope", 1),
    ("lists",                       "Lists",                         "sys_ui_list",             "scope", 4),
    ("list_controls",               "List controls",                 "sys_ui_list_control",     "scope", 3),
    ("views_and_view_rules",        "Views & view rules",            "sys_ui_view",             "scope", 3),
    ("properties",                  "Properties",                    "sys_properties",          "scope", 5),
    ("relationships",               "Relationships",                 "sys_relationship",        "scope", 4),
    ("records_seed_data",           "Records (seed data)",           None,                      "seed",  22),
    ("data_sources_and_import_maps","Data sources & import maps",    "sys_data_source",         "scope", 2),
    ("cross_scope_privileges",      "Cross-scope privileges",        "sys_scope_privilege",     "scope", 4),
    ("security_attributes",         "Security attributes",           "sys_security_type",       "scope", 1),
    ("security_data_filters",       "Security data filters",         "sys_security_acl",        "acl_df",2),
    ("js_modules",                  "JS modules",                    "sys_ux_lib_source_script","scope", 2),
    ("external_connections",        "LDAP / external connections",   "sys_alias",               "scope", 1),
    ("atf_tests",                   "ATF tests (11 categories)",     "sys_atf_test",            "scope", 11),
]


# ---------------------------------------------------------------------------
# ServiceNow REST helpers
# ---------------------------------------------------------------------------

def load_env(project_root):
    """Load .env file into a dict."""
    env_path = project_root / ".env"
    env = {}
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            line = line.strip()
            if "=" in line and not line.startswith("#"):
                key, val = line.split("=", 1)
                env[key.strip()] = val.strip()
    return env


def sn_query(instance, auth, table, query, fields="sys_id", limit=1000):
    """Query a ServiceNow table. Returns (count, data_or_error)."""
    url = f"{instance}/api/now/table/{table}"
    params = {
        "sysparm_query": query,
        "sysparm_fields": fields,
        "sysparm_limit": limit,
    }
    headers = {"Accept": "application/json"}
    try:
        r = requests.get(url, params=params, auth=auth, headers=headers, timeout=30)
        if r.status_code == 200:
            data = r.json().get("result", [])
            return len(data), data
        else:
            return -1, f"HTTP {r.status_code}"
    except Exception as e:
        return -1, str(e)


# ---------------------------------------------------------------------------
# Component checkers
# ---------------------------------------------------------------------------

def check_component(instance, auth, scope, check):
    """Check a single component type. Returns (found_count, pass_bool)."""
    key, label, table, qtype, expected = check

    if qtype == "scope":
        count, _ = sn_query(instance, auth, table, f"sys_scope.scope={scope}")
        return count, count >= expected

    elif qtype == "name":
        count, _ = sn_query(instance, auth, table, f"nameLIKE{scope}")
        return count, count >= expected

    elif qtype == "seed":
        total = 0
        for suffix, _ in SEED_TABLES.items():
            tbl = f"{scope}_{suffix}"
            cnt, _ = sn_query(instance, auth, tbl, "", limit=500)
            total += max(cnt, 0)
        return total, total >= expected

    elif qtype == "acl_df":
        count, _ = sn_query(
            instance, auth, table,
            f"sys_scope.scope={scope}^operation=record"
        )
        return count, count >= expected

    return 0, False


# ---------------------------------------------------------------------------
# Core verification
# ---------------------------------------------------------------------------

def run_verification(project_root, approach_num, scope):
    """Run all 32 checks. Returns results dict."""
    t_start = time.monotonic()
    env = load_env(project_root)
    instance = env.get("SN_INSTANCE", "").rstrip("/")
    user = env.get("SN_USER", "admin")
    password = env.get("SN_PASSWORD", "")

    if not instance or not password:
        print("ERROR: .env missing SN_INSTANCE or SN_PASSWORD")
        sys.exit(1)

    auth = (user, password)

    # Connectivity check
    count, resp = sn_query(instance, auth, "sys_properties", "name=instance_name", "value")
    if count < 0:
        print(f"ERROR: Cannot connect to instance: {resp}")
        sys.exit(1)

    print(f"Instance:  {instance}")
    print(f"Scope:     {scope}")
    print(f"Approach:  {approach_num} ({APPROACH_NAMES[str(approach_num)]})")
    print("─" * 65)

    results = {}
    passed = 0
    total = len(COMPONENT_CHECKS)

    for check in COMPONENT_CHECKS:
        key, label, table, qtype, expected = check
        found, ok = check_component(instance, auth, scope, check)
        status = "pass" if ok else "fail"
        results[key] = {
            "label": label,
            "status": status,
            "found": found,
            "expected": expected,
        }
        if ok:
            passed += 1
        icon = "✅" if ok else "❌"
        found_str = str(found) if found >= 0 else "err"
        print(f"  {icon} {label:<42} {found_str:>4} / {expected}")

    verify_secs = round(time.monotonic() - t_start, 1)
    print("─" * 65)
    print(f"  Score: {passed}/{total}  (verified in {verify_secs}s)")

    return {
        "results": results,
        "score": f"{passed}/{total}",
        "passed": passed,
        "total": total,
        "verify_duration_seconds": verify_secs,
    }


# ---------------------------------------------------------------------------
# YAML persistence
# ---------------------------------------------------------------------------

def update_yaml(project_root, approach_num, scope, verification,
                token_count=None, wall_clock_seconds=None, yaml_file=None):
    """Append a run entry to results.yaml. Returns run number."""
    yaml_path = project_root / (yaml_file or "results.yaml")

    if yaml_path.exists():
        with open(yaml_path) as f:
            data = yaml.safe_load(f) or {}
    else:
        data = {}

    if "approaches" not in data:
        data["approaches"] = {}

    approach_key = APPROACH_NAMES[str(approach_num)]
    if approach_key not in data["approaches"]:
        data["approaches"][approach_key] = {"runs": []}

    runs = data["approaches"][approach_key]["runs"]
    run_num = len(runs) + 1

    run_entry = {
        "run": run_num,
        "timestamp": datetime.datetime.now().isoformat(),
        "scope": scope,
        "score": verification["score"],
        "passed": verification["passed"],
        "total": verification["total"],
        "token_count": token_count,
        "wall_clock_seconds": wall_clock_seconds,
        "verify_duration_seconds": verification["verify_duration_seconds"],
        "components": {},
    }

    for key, info in verification["results"].items():
        run_entry["components"][key] = {
            "label": info["label"],
            "status": info["status"],
            "found": info["found"],
            "expected": info["expected"],
        }

    runs.append(run_entry)

    with open(yaml_path, "w") as f:
        yaml.dump(data, f, default_flow_style=False, sort_keys=False, allow_unicode=True)

    print(f"\nResults saved \u2192 results.yaml (approach {approach_num} / {APPROACH_LABELS.get(str(approach_num), approach_num)}, run {run_num})")
    return run_num


# ---------------------------------------------------------------------------

START_MARKER = "<!-- RESULTS:START - Auto-generated by scripts/verify.py -->"
END_MARKER = "<!-- RESULTS:END -->"


def generate_results_markdown(data):
    """Build the markdown block from results.yaml data."""
    approaches = data.get("approaches", {})
    lines = [START_MARKER, ""]

    # Summary table
    lines.append("| Approach | Latest Run | Score | Tokens | Wall Clock | Trend |")
    lines.append("|----------|-----------|-------|-------:|------------|-------|")

    for i in APPROACH_ORDER:
        key = APPROACH_NAMES[i]
        label = APPROACH_LABELS[i]
        if key in approaches and approaches[key].get("runs"):
            runs = approaches[key]["runs"]
            latest = runs[-1]
            score = latest["score"]
            run_num = latest["run"]
            trend = " → ".join(r["score"] for r in runs)
            tokens = latest.get("token_count")
            wall = latest.get("wall_clock_seconds")
            tok_str = f"{tokens:,}" if tokens else "—"
            wall_str = _fmt_duration(wall) if wall else "—"
            # Cumulative totals
            cum_tok = sum(r.get("token_count") or 0 for r in runs)
            cum_wall = sum(r.get("wall_clock_seconds") or 0 for r in runs)
            cum_tok_str = f" ({cum_tok:,} total)" if cum_tok and len(runs) > 1 else ""
            cum_wall_str = f" ({_fmt_duration(cum_wall)} total)" if cum_wall and len(runs) > 1 else ""
            lines.append(
                f"| **{label}** | Run {run_num} | **{score}** "
                f"| {tok_str}{cum_tok_str} | {wall_str}{cum_wall_str} | {trend} |"
            )
        else:
            lines.append(f"| **{label}** | — | — | — | — | — |")


    lines.append("")

    # Collapsible detail per approach (latest run only)
    for i in APPROACH_ORDER:
        key = APPROACH_NAMES[i]
        label = APPROACH_LABELS[i]
        if key not in approaches or not approaches[key].get("runs"):
            continue

        latest = approaches[key]["runs"][-1]
        tokens = latest.get("token_count")
        wall = latest.get("wall_clock_seconds")
        meta_parts = [latest["score"], f"Run {latest['run']}"]
        if tokens:
            meta_parts.append(f"{tokens:,} tokens")
        if wall:
            meta_parts.append(_fmt_duration(wall))
        lines.append("<details>")
        lines.append(
            f"<summary><strong>{label}</strong> — "
            f"{' | '.join(meta_parts)}</summary>"
        )
        lines.append("")
        lines.append("| Component | Status | Found | Expected |")
        lines.append("|-----------|--------|------:|--------:|")

        for comp_key, comp in latest["components"].items():
            icon = "✅" if comp["status"] == "pass" else "❌"
            found = comp["found"] if comp["found"] >= 0 else "err"
            comp_label = comp.get("label", comp_key)
            lines.append(f"| {comp_label} | {icon} | {found} | {comp['expected']} |")

        lines.append("")
        lines.append("</details>")
        lines.append("")

    lines.append(END_MARKER)
    return "\n".join(lines)


def update_readme(project_root, yaml_file=None, readme_file=None):
    """Regenerate the Results section in README.md from results.yaml."""
    yaml_path = project_root / (yaml_file or "results.yaml")
    readme_path = project_root / (readme_file or "README.md")

    if not yaml_path.exists() or not readme_path.exists():
        return

    with open(yaml_path) as f:
        data = yaml.safe_load(f) or {}

    if not data.get("approaches"):
        return

    results_block = generate_results_markdown(data)
    readme_text = readme_path.read_text()

    if START_MARKER in readme_text:
        # Replace existing block
        before = readme_text[: readme_text.index(START_MARKER)]
        after = readme_text[readme_text.index(END_MARKER) + len(END_MARKER) :]
        readme_text = before + results_block + after
    else:
        # Insert after ## Results heading, replacing placeholder text
        pattern = r"(## Results\s*\n)(\s*>.*?\n)*"
        match = re.search(pattern, readme_text)
        if match:
            insert_point = match.end()
            readme_text = (
                readme_text[:insert_point]
                + "\n"
                + results_block
                + "\n"
                + readme_text[insert_point:]
            )

    readme_path.write_text(readme_text)
    print("README.md results section updated.")


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def _fmt_duration(seconds):
    """Format seconds as human-readable duration."""
    if not seconds:
        return "—"
    seconds = int(seconds)
    if seconds < 60:
        return f"{seconds}s"
    m, s = divmod(seconds, 60)
    if m < 60:
        return f"{m}m {s}s"
    h, m = divmod(m, 60)
    return f"{h}h {m}m"


def main():
    parser = argparse.ArgumentParser(
        description="Verify ServiceNow component deployment for Project Sybil"
    )
    parser.add_argument(
        "--approach", "-a",
        type=str, required=True, choices=["1", "2", "3", "3b", "4", "5"],
        help="Approach identifier (1, 2, 3, 3b, 4, 5)",
    )
    parser.add_argument(
        "--scope", "-s",
        type=str, default="x_snc_apr_trv",
        help="App scope (default: x_snc_apr_trv)",
    )
    parser.add_argument(
        "--tokens", "-t",
        type=int, default=None,
        help="Token count used during this development iteration",
    )
    parser.add_argument(
        "--wall-clock", "-w",
        type=int, default=None,
        help="Wall-clock seconds spent on this development iteration",
    )
    parser.add_argument(
        "--yaml-file",
        type=str, default=None,
        help="Custom YAML output path relative to project root (default: results.yaml)",
    )
    parser.add_argument(
        "--readme-file",
        type=str, default=None,
        help="Custom README output path relative to project root (default: README.md)",
    )
    args = parser.parse_args()

    project_root = Path(__file__).resolve().parent.parent

    verification = run_verification(project_root, args.approach, args.scope)
    update_yaml(project_root, args.approach, args.scope, verification,
                token_count=args.tokens, wall_clock_seconds=args.wall_clock,
                yaml_file=args.yaml_file)
    if args.readme_file:
        update_readme(project_root, yaml_file=args.yaml_file, readme_file=args.readme_file)
    else:
        update_readme(project_root, yaml_file=args.yaml_file)


if __name__ == "__main__":
    main()
