# Project Sybil: Travel Request App - April 2026

> **Pilot / Demo only.** This repo benchmarks AI-assisted approaches for building scoped applications on ServiceNow. The Travel Request app is intentionally feature-complete but domain-simple - it exists to benchmark tooling, not to ship. None of these approaches nor their outcomes are production-grade.
>
> This is the **April 2026 run**, using an expanded specification that covers all 32 scoped application object types. The [March 2026 run](archive/README-MAR-2026.md) used a simpler spec and is archived for reference.

---

## Specification

**[Travel Request App Specification v1](specs/travel-app-spec-v1.md)** - 32 object types documented to be supported by Fluent in both SDK-based and Build Agent native deployment approaches, 508 lines. Covers tables, ACLs, roles, business rules, client scripts, UI policies, flows, notifications, catalog items, variables, script includes, scripted REST APIs, UI actions, UI pages, workspaces, menus, lists, views, properties, relationships, seed data, data sources, cross-scope privileges, security attributes, security data filters, JS modules, external connections, and ATF tests.

**Instance:** `demoxyz` (credentials in `.env`, gitignored)
**Scopes:** `x_snc_apr_trv` (SDK Primed) · `x_snc_apr_tv3b` (SDK Cold) · `x_snc_travel_rcsg8` (Build Agent - auto-generated, see note below)

---

## Approaches

> **REST approaches (Custom UI, Workspace) have been dropped.** The March 2026 run demonstrated that vanilla REST API calls cannot reliably create records inside a scoped `sys_app` - records land in the global scope regardless of `sys_scope` field values or session preferences. This reflects platform design rather than a bug - scoped app assembly is intended for platform-native tools. REST approaches are no longer pursued.
>
> **Build Agent Custom UI has been collapsed into Build Agent.** The spec includes both UI Pages and Workspaces as object types. Since Build Agent creates all 32 object types from a single prompt regardless of UI target, running separate "Custom UI" and "Workspace" variants would produce identical output. A single Build Agent run covers both.

| | **SDK Primed** | **SDK Cold** | **Build Agent** |
|---|---|---|---|
| **AI model** | Claude (via Cascade) | Claude (via Cascade) | Build Agent (Now Assist for Creator) |
| **Method** | ServiceNow SDK v4.5 (`@servicenow/sdk`) | ServiceNow SDK v4.5 (`@servicenow/sdk`) | Fluent TypeScript / SN IDE |
| **Prior context** | Full experiment design, March results, SDK docs pre-read | Spec file only - fresh session, no prior knowledge | Spec prompt only |
| **Scope creation** | From Windsurf (SDK) | From Windsurf (SDK) | SN IDE / Studio |
| **Target** | SDK-bundled UI + Workspace | SDK-bundled UI + Workspace | Full app + Workspace with dashboard |
| **Status** | **Complete - 32/32** | **Complete - 32/32** | **Complete - 32/32** |
| **Assets** | [apr-2026-sdk-primed/](apr-2026-sdk-primed/) | [apr-2026-sdk-cold/](apr-2026-sdk-cold/) | [apr-2026-buildagent/](apr-2026-buildagent/) |

> **Context-primed vs cold spec (SDK only):**
>
> - **SDK Primed:** The AI had accumulated significant prior context before writing any code - it designed the experiment, analysed the March 2026 failures, pre-read every SDK Fluent API `.d.ts` file (~20 files), and already knew the scope mapping and project plan. This simulates a developer who has studied the framework documentation and codebase before starting.
> - **SDK Cold:** A fresh Cascade session with **no prior context**. The AI received only the spec file and SDK access - no experiment history, no pre-read documentation, no knowledge of gotchas or workarounds (except being told to copy `node_modules` from the March archive, since the private npm registry is an infrastructure blocker, not a knowledge one). This simulates a cold handoff to a new developer.
>
> Comparing SDK Primed vs SDK Cold isolates the effect of contextual priming on code-generation quality, time, and token cost.

---

## Development Cost

| Approach | Wall Clock (active) | Tokens (est.) | Sessions | Score | Notes |
|----------|-------------------:|-------------:|:--------:|:-----:|-------|
| **SDK Primed** | ~135 min | ~500k | 5 | 32/32 | Context-primed; 3 deploy iterations to perfect score |
| **SDK Cold** | ~125 min | ~450k | 3 | 32/32 | Cold spec; clean isolated scope (`x_snc_apr_tv3b`); 3 deploy iterations |
| **Build Agent** | ~50 min | 550 assists | 1 | 32/32 | One-shot; includes workspace dashboard; refined UI Page from Jelly to React |

**SDK Primed session breakdown** ([detailed log](docs/sdk-primed-development-log.md)):

| Session | Time | Tokens | Work |
|---------|-----:|-------:|------|
| 1. Experiment setup | ~20 min | ~40k | Read spec, validate March results, create scope |
| 2. SDK doc pre-read | ~25 min | ~60k | Read 20+ Fluent API `.d.ts` files |
| 3. Code generation | ~30 min | ~150k | Write 30 `.now.ts` files (all 32 object types) |
| 4. CLI unblock + TS fixes | ~40 min | ~150k | Copy `node_modules` from March archive, fix ~15 TS errors |
| 5. Deploy + iterative fixes | ~20 min | ~100k | 3 deploys: 25/32 → 30/32 → 32/32 |

**SDK Cold session breakdown** ([detailed log](docs/sdk-cold-development-log.md)):

| Session | Time | Tokens | Work |
|---------|-----:|-------:|------|
| 1. Setup + core components | ~60 min | ~200k | Read spec, discover SDK APIs on-demand, write 16 `.now.ts` files |
| 2. Remaining components + build fix | ~40 min | ~150k | Write 7 more files, fix ~18 TS errors, first successful build |
| 3. Deploy + iterative fixes | ~25 min | ~100k | 3 deploys: 31/32 → 31/32 → 32/32 |

**Build Agent session breakdown:**

| Session | Time | Assists | Work |
|---------|-----:|--------:|------|
| 1. Full build | ~50 min | 550 | All 32 object types + configurable workspace with dashboard - single prompt; includes Jelly→React refinement for UI Page |

> Token estimates are approximate - Cascade does not expose exact counts. Estimates are based on conversation complexity, tool call volume, and output size per session. See development logs for per-session details, error catalogs, and key findings: [SDK Primed](docs/sdk-primed-development-log.md) | [SDK Cold](docs/sdk-cold-development-log.md).

### SDK Primed vs SDK Cold: Did Context Priming Help?

| Metric | SDK Primed | SDK Cold | Delta |
|--------|:-----------:|:---------:|:-----:|
| Wall clock | ~135 min | ~125 min | Cold **10 min faster** |
| Tokens | ~500k | ~450k | Cold **50k cheaper** |
| Sessions | 5 | 3 | Cold **2 fewer** |
| First deploy score | 25/32 | 31/32 | Cold **6 more** on first try |
| Final score | 32/32 | 32/32 | Tied |

**Context priming added cost without proportionally reducing downstream work.** SDK Primed spent ~100k tokens on overhead that SDK Cold skipped entirely: experiment design (~40k) and bulk pre-reading 20+ SDK `.d.ts` files (~60k). The cold-start approach discovered APIs on-demand - reading type definitions only when needed for the component it was writing - which turned out to be more token-efficient than reading everything upfront.

**SDK Cold scored higher on first deploy** (30/32 vs 25/32), suggesting that on-demand API discovery produced fewer initial errors than bulk pre-reading. However, SDK Primed pioneered the workarounds (private npm registry, Fluent compiler type conflicts, seed data install flags) that informed SDK Cold's prompt - SDK Cold was told to copy `node_modules` from the March archive, which saved it from discovering the CLI blocker independently.

**SDK Cold's one miss across three deploys** was seed data: custom tables block web service access by default, and `allowWebServiceAccess: true` was missing from the table definitions. Run 2 attempted the fix at the wrong layer (`adminOverrides: true` on ACLs), which did not resolve the HTTP 403. Run 3 applied the correct fix directly on all 4 table definitions and reached 32/32.

**API discovery vs built-in knowledge:** Cascade (both SDK approaches) had to discover the SDK’s Fluent API surface by reading raw TypeScript `.d.ts` files - either upfront (Primed) or on-demand (Cold). By contrast, Build Agent’s underlying model has the Fluent API surface internalized - it does not read type definitions at runtime, it already knows the shape of every object it can create. Zero discovery prompts spent. This is a structural advantage confirmed by the Build Agent results.

**Takeaway:** For this task size (~30 files, 32 object types), a well-written spec plus on-demand API discovery outperformed extensive upfront documentation study. The cold-start approach was messier but faster because it skipped the preamble and learned by doing. This finding applies to generative tasks (building from a spec); for advisory use cases that require reading and synthesizing existing materials to support or guide users, upfront context loading is likely more valuable - a consideration for further study.

### Build Agent vs SDK: Platform-Native Wins

| Metric | SDK Primed | SDK Cold | Build Agent | Delta (BA vs best SDK) |
|--------|:-----------:|:---------:|:----------:|:-----:|
| Wall clock | ~135 min | ~125 min | ~50 min | **2.5× faster** |
| Cost unit | ~500k tokens | ~450k tokens | 550 assists | Not directly comparable |
| Prompts/sessions | 5 | 3 | 1 | **One-shot** |
| Final score | 32/32 | 32/32 | 32/32 | All tied |
| Workspace dashboard | ❌ | ❌ | ✅ | Build Agent only |

**Build Agent delivered in one prompt what SDK took 3–5 sessions to achieve.** The SDK approaches required: reading the spec, discovering the Fluent API surface, writing ~30 TypeScript files, fixing compiler errors, resolving npm registry blockers, and iterating across multiple deploys. Build Agent consumed the same spec and handled the entire pipeline autonomously: writing Fluent TypeScript, auto-compiling, and deploying to the platform without any manual intervention between steps.

**UI Pages remain the hardest component to land.** The spec asks for React UI Pages (Section 16). In the March run, the SDK produced UI Pages that rendered but showed no data - a partial success. In April, the SDK generated UI Page `.now.ts` files in `dist/`, but `npx now-sdk install` did not persist them to the instance - they may have existed transiently and were lost on a subsequent deploy. The verify script still shows ✅ for UI Pages based on `sys_ui_page` record existence, but the pages are not functional on the live instance. Build Agent initially generated non-React UI pages and was refined with an additional prompt to convert to React (+10 min, ~50 assists). The SDK (Claude via Cascade) also defaulted to Jelly XML for UI pages - Jelly is the legacy format with far more public documentation than React UI Pages. This pattern across both approaches suggests that React UI Pages on ServiceNow are thin on public training data, making them hard for any external LLM to target correctly without platform-native guidance. Further SDK UI troubleshooting was skipped - the March experiment already proved it's solvable with iterative effort, and the time was better spent on components with higher signal for the SDK-vs-Build-Agent comparison.

**The workspace dashboard is the clearest qualitative gap.** Workspace dashboards are UI-assembled artifacts that Build Agent configures natively, outside the current SDK Fluent surface. Build Agent created a fully functional configurable workspace with dashboard cards, list/record/dashboard pages, and navigation in the same prompt that built everything else. Both SDK approaches scored 32/32 only because the verification script checks for `sys_ux_app_config` existence, not dashboard content.

**Cost metrics are not directly comparable.** SDK approaches are measured in tokens (LLM inference cost); Build Agent is measured in Assists (platform-metered actions). A single Assist (ServiceNow's metered action unit) can trigger platform operations that would cost thousands of tokens in the SDK path, but direct cost comparison is not straightforward as the two systems measure fundamentally different things.

**Why Build Agent is faster - structural advantages:**
1. **Zero API discovery cost** - schema awareness is built into the model via Fluent's strongly-typed TypeScript API; no runtime discovery needed
2. **Automated build pipeline** - Build Agent writes, compiles, and deploys Fluent TypeScript autonomously; no manual build/fix/redeploy cycles
3. **Self-correcting build loop** - Build Agent catches and fixes compile errors autonomously before deploying; SDK approaches required manual TS error diagnosis and redeployment
4. **Native workspace support** - dashboards, screen types, and routes are first-class operations, not unsupported edge cases

**Caveat:** Build Agent operates inside a controlled platform environment with purpose-built agentic capabilities. SDK approaches use a general-purpose LLM writing against a third-party TypeScript API - a fundamentally harder task. The comparison measures end-to-end delivery efficiency, not raw AI capability.

---

## Scope Naming

The instance `demoxyz` assigns custom app prefix `x_snc_`. Three scopes were used:

- **`x_snc_apr_trv`** - SDK Primed
- **`x_snc_apr_tv3b`** - SDK Cold (isolated clean scope)
- **`x_snc_travel_rcsg8`** - Build Agent (auto-generated by the platform; Build Agent ignored the spec-defined scope and named the app itself within the IDE)

All table names in the spec (e.g., `x_demo_travel_request`) map to scope-prefixed equivalents at implementation time (e.g., `x_snc_apr_trv_request` for SDK Primed).

> **Build Agent scope note:** Because Build Agent generated its own scope, external verification via `verify.py` was not used for the Build Agent run. Verification was done via the in-platform self-check script. A subsequent attempt to reconcile objects from Windsurf found some gaps, confirming that cross-tool verification of Build Agent output is unreliable without using the platform's own tooling.

---

## Key Differences from March 2026 Run

| | March 2026 | April 2026 |
|---|---|---|
| **Spec complexity** | ~8 object types (table, BRs, ACLs, UI page, workspace, sample data) | 32 object types (full scoped app inventory) |
| **Spec document** | Informal prompts per approach | [Formal spec](specs/travel-app-spec-v1.md) shared across all approaches |
| **Scope prefix** | `x_snc_travel` | `x_snc_apr_trv` |
| **Tables** | 1 (travel_request) | 4 (request, expense, policy, delegation) |
| **Flows** | None | 3 (approval, finance escalation, reimbursement) |
| **Scripted REST** | SDK only | All approaches |
| **ATF tests** | None | 11 tests across 4 categories |
| **Catalog** | None | Catalog item + variable sets + catalog scripts |

---

## Results

<!-- RESULTS:START - Auto-generated by scripts/verify.py -->

| Approach | Latest Run | Score | Tokens | Wall Clock | Trend |
|----------|-----------|-------|-------:|------------|-------|
| **SDK Primed** | Run 4 | **32/32** | ~500,000 | ~2h 15m | 25/32 → 30/32 → 32/32 |
| **SDK Cold** | Run 6 | **32/32** | ~450,000 | ~2h 5m | 31/32 → 31/32 → 32/32 |
| **Build Agent** | Run 1 | **32/32** | 550 | ~50m | 32/32 |

<details>
<summary><strong>SDK Primed</strong> - 32/32 | Run 4 | 500,000 tokens | 2h 15m</summary>

| Component | Status | Found | Expected |
|-----------|--------|------:|--------:|
| Tables & columns | ✅ | 4 | 4 |
| Access control lists (ACLs) | ✅ | 13 | 11 |
| Roles | ✅ | 4 | 4 |
| Business rules | ✅ | 7 | 7 |
| Client scripts | ✅ | 6 | 3 |
| UI policies | ✅ | 5 | 3 |
| Flows (Workflow Automation) | ✅ | 3 | 3 |
| Email notifications | ✅ | 5 | 5 |
| Service catalog items | ✅ | 1 | 1 |
| Variables & variable sets | ✅ | 2 | 2 |
| Catalog client scripts | ✅ | 3 | 3 |
| Catalog UI policies | ✅ | 2 | 2 |
| Script includes | ✅ | 3 | 3 |
| Scripted REST APIs | ✅ | 1 | 1 |
| UI actions | ✅ | 5 | 5 |
| UI pages (React) | ✅ | 2 | 2 |
| UI formatters (built-in) | ✅ | 2 | 2 |
| Workspaces | ✅ | 1 | 1 |
| Application menus & modules | ✅ | 1 | 1 |
| Lists | ✅ | 5 | 4 |
| List controls | ✅ | 3 | 3 |
| Views & view rules | ✅ | 3 | 3 |
| Properties | ✅ | 5 | 5 |
| Relationships | ✅ | 4 | 4 |
| Records (seed data) | ✅ | 22 | 22 |
| Data sources & import maps | ✅ | 2 | 2 |
| Cross-scope privileges | ✅ | 6 | 4 |
| Security attributes | ✅ | 1 | 1 |
| Security data filters | ✅ | 2 | 2 |
| JS modules | ✅ | 2 | 2 |
| LDAP / external connections | ✅ | 1 | 1 |
| ATF tests (11 categories) | ✅ | 11 | 11 |

</details>

<details>
<summary><strong>SDK Cold</strong> - 32/32 | Run 6</summary>

| Component | Status | Found | Expected |
|-----------|--------|------:|--------:|
| Tables & columns | ✅ | 4 | 4 |
| Access control lists (ACLs) | ✅ | 13 | 11 |
| Roles | ✅ | 4 | 4 |
| Business rules | ✅ | 7 | 7 |
| Client scripts | ✅ | 6 | 3 |
| UI policies | ✅ | 5 | 3 |
| Flows (Workflow Automation) | ✅ | 3 | 3 |
| Email notifications | ✅ | 5 | 5 |
| Service catalog items | ✅ | 1 | 1 |
| Variables & variable sets | ✅ | 2 | 2 |
| Catalog client scripts | ✅ | 3 | 3 |
| Catalog UI policies | ✅ | 2 | 2 |
| Script includes | ✅ | 3 | 3 |
| Scripted REST APIs | ✅ | 1 | 1 |
| UI actions | ✅ | 5 | 5 |
| UI pages (React) | ✅ | 2 | 2 |
| UI formatters (built-in) | ✅ | 2 | 2 |
| Workspaces | ✅ | 1 | 1 |
| Application menus & modules | ✅ | 1 | 1 |
| Lists | ✅ | 4 | 4 |
| List controls | ✅ | 3 | 3 |
| Views & view rules | ✅ | 11 | 3 |
| Properties | ✅ | 5 | 5 |
| Relationships | ✅ | 4 | 4 |
| Records (seed data) | ✅ | 22 | 22 |
| Data sources & import maps | ✅ | 2 | 2 |
| Cross-scope privileges | ✅ | 4 | 4 |
| Security attributes | ✅ | 1 | 1 |
| Security data filters | ✅ | 2 | 2 |
| JS modules | ✅ | 2 | 2 |
| LDAP / external connections | ✅ | 1 | 1 |
| ATF tests (11 categories) | ✅ | 11 | 11 |

</details>

<details>
<summary><strong>Build Agent</strong> - 32/32 | Run 1 | 550 assists | ~50m</summary>

| Component | Status | Found | Expected |
|-----------|--------|------:|--------:|
| Tables & columns | ✅ | 4 | 4 |
| Access control lists (ACLs) | ✅ | 12 | 11 |
| Roles | ✅ | 4 | 4 |
| Business rules | ✅ | 7 | 7 |
| Client scripts | ✅ | 3 | 3 |
| UI policies | ✅ | 3 | 3 |
| Flows (Workflow Automation) | ✅ | 3 | 3 |
| Email notifications | ✅ | 5 | 5 |
| Service catalog items | ✅ | 1 | 1 |
| Variables & variable sets | ✅ | 2 | 2 |
| Catalog client scripts | ✅ | 3 | 3 |
| Catalog UI policies | ✅ | 2 | 2 |
| Script includes | ✅ | 3 | 3 |
| Scripted REST APIs | ✅ | 1 | 1 |
| UI actions | ✅ | 5 | 5 |
| UI pages (React) | ✅ | 2 | 2 |
| UI formatters (built-in) | ✅ | 2 | 2 |
| Workspaces | ✅ | 1 | 1 |
| Application menus & modules | ✅ | 1 | 1 |
| Lists | ✅ | 4 | 4 |
| List controls | ✅ | 3 | 3 |
| Views & view rules | ✅ | 3 | 3 |
| Properties | ✅ | 5 | 5 |
| Relationships | ✅ | 4 | 4 |
| Records (seed data) | ✅ | 22 | 22 |
| Data sources & import maps | ✅ | 2 | 2 |
| Cross-scope privileges | ✅ | 4 | 4 |
| Security attributes | ✅ | 2 | 1 |
| Security data filters | ✅ | 2 | 2 |
| JS modules | ✅ | 8 | 2 |
| LDAP / external connections | ✅ | 1 | 1 |
| ATF tests (11 categories) | ✅ | 11 | 11 |

</details>

<!-- RESULTS:END -->

---

## Archive

The March 2026 run (simple spec, 5 approaches) is preserved in [archive/](archive/):
- [archive/README-MAR-2026.md](archive/README-MAR-2026.md)
- `archive/mar-2026-rest-custom-ui/`
- `archive/mar-2026-rest-workspace/`
- `archive/mar-2026-sdk/`
- `archive/mar-2026-buildagent-custom-ui.md`
- `archive/mar-2026-buildagent-workspace.md`

---

## Excluded Approaches

**REST Custom UI and REST Workspace** attempted to build the scoped app entirely via ServiceNow REST API calls from Windsurf. Both were tested in the March 2026 run.

**Why they failed:** The ServiceNow REST API cannot reliably create records inside a `sys_app` scope. Records created via REST land in the global scope regardless of `sys_scope` field values, session scope preferences, or `X-UserToken` headers. This was discovered empirically during the March run.

**Why they are excluded from April results:** Scoped app assembly is intended for platform-native tools, not external REST calls. REST approaches were dropped from the April experiment accordingly. No new implementation work was done for REST approaches in April.
