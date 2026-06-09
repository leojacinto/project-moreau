# 🇦🇺 Federal Cleared Starter Onboarding Demo

**App Name:** Fed Forum Onboarding demo  
**Scope:** `x_snc_fed_forum_on`  
**SDK Version:** 4.6.0  
**Target Audience:** Fed Forum 2026 — ServiceNow for Government

---

## What This Demo Shows

A fully integrated onboarding orchestration solution for Australian Government cleared starters:

1. **Cross-system orchestration** — Coordinating SAP HCM, AGSVA (via RPA — no API available), Entra ID, and Facilities
2. **RPA integration for legacy systems** — AGSVA clearance verification uses an RPA bot to authenticate and scrape the AGSVA portal (no API exists)
2. **Zero Copy Connector pattern** — SAP employee data visible without replication
3. **AI Agent for Self-Service** — Conversational onboarding assistant powered by Now Assist (5 CRUD tools, guardrails)
4. **Workspace-driven operations** — Purpose-built workspace with dashboard, list categories, and real-time integration activity log
5. **Knowledge Base** — 7 published articles for onboarding self-service and AI Agent retrieval
6. **Screenshot capture** — Each workflow step attaches a visual record to the orchestration

---

## Architecture

```
UI Action Button Click (Workspace)
        │
        ▼
┌─────────────────────────────────────────┐
│         UI Action Server Script           │
├─────────────────────────────────────────┤
│  1. Write multi-step work_notes           │
│     (simulates integration flow output)   │
│  2. Update record state                   │
│  3. current.update()                      │
│  4. try { subflow.run() } catch(e) {}     │
│     (subflows optional — may not exist)   │
│  5. Copy phase screenshot as attachment   │
│     (getContentStream/writeContentStream) │
└─────────────────────────────────────────┘
        │
        ▼
Activity Panel shows detailed integration story:
  [AGSVA] Initiating clearance verification...
  [AGSVA] Querying reference CLR-2026-08841...
  [AGSVA] Clearance Level: NV1 — Status: Active
  [AGSVA] ✓ Clearance verification complete
```

---

## Tables

| Table | Label | Purpose |
|-------|-------|---------|
| `x_snc_fed_forum_on_sap_employee` | SAP HCM Employee Master | Zero Copy pattern — SAP employee data |
| `x_snc_fed_forum_on_agsva_clearance` | AGSVA Clearance Status | Security clearance records |
| `x_snc_fed_forum_on_entra_account` | Entra ID Account Provisioning | Microsoft Entra ID account state |
| `x_snc_fed_forum_on_facility_access` | Facilities Access Control | Building access & badges |
| `x_snc_fed_forum_on_orchestration` | Onboarding Orchestration | Central orchestration record (ONB prefix, auto-numbered) |
| `x_snc_fed_forum_on_integration_log` | Integration Activity Log | Audit log for all integration steps |
| `x_snc_fed_forum_on_demo_screenshot` | Demo Screenshot | Stores one screenshot image per workflow phase (attachment) |

---

## Subflows (Flow Designer)

All subflows are published on the instance. Each accepts `orchestration_sys_id` (String) as input.

| Subflow | Internal Name | What It Does |
|---------|---------------|--------------|
| Log Integration Step | `log_integration_step` | Creates a log record, waits ~2s, updates status. Called by all other subflows. |
| AGSVA Clearance Verification | `agsva_clearance_verification` | Launches RPA bot to verify clearance on AGSVA portal (no API available) |
| Initiate Cleared Starter Onboarding | `initiate_cleared_starter_onboarding` | Validates SAP record, creates HRSD lifecycle event |
| Entra ID Account Provisioning | `entra_id_account_provisioning` | Creates Entra account, assigns E5 license, enrolls MFA |
| Facilities Access Request | `facilities_access_request` | Requests badge, assigns access zones |
| Readiness Check | `readiness_check` | Cross-system verification across all 4 external systems |

---

## UI Actions (Workspace Buttons)

Each button produces **detailed multi-step work notes** that simulate the full integration story in the Activity panel, then optionally triggers a subflow (wrapped in try-catch — subflows may not exist on all instances), and attaches the phase screenshot.

| Button | Visible When | Work Notes | State After |
|--------|-------------|------------|-------------|
| Verify Clearance | state = draft | 6 notes: RPA bot launch → portal auth → query clearance ref → extracted level/status/expiry → transfer status → ✓ RPA complete | clearance_verified |
| Initiate Onboarding | state = clearance_verified | 6 notes: SAP retrieval → employee details → cost centre/manager → HRSD creation → lifecycle assigned → ✓ initiated | in_progress |
| Provision Identity | state = in_progress AND entra not active | 5 notes: initiating → UPN/object ID → licenses → MFA → ✓ provisioned | — |
| Request Building Access | state = in_progress AND pass not issued/collected | 5 notes: initiating → building → badge/photo ID → zones → ✓ issued | — |
| Mark Ready | state = in_progress AND entra active AND pass issued/collected | 6 notes: readiness check → AGSVA ✓ → Entra ✓ → Facilities ✓ → SAP ✓ → all verified | complete |
| Reset Demo Data | list banner (admin only) | — | Deletes all & reseeds (incl. 26 integration log records) |

**Workspace button registration:** Each UI Action has a corresponding `sys_ux_form_action` record at specificity 20 to ensure buttons appear correctly in workspace forms.

**Subflow handling:** All subflow calls are wrapped in `try { } catch(e) {}`. If subflows don't exist on the instance, buttons still work — state changes, work notes, and screenshot attachment all execute regardless.

**Screenshot attachment:** Uses `GlideSysAttachment.getContentStream()` / `writeContentStream()` to copy images from the `demo_screenshot` table to the orchestration record (more reliable than `.copy()` in scoped apps).

---

## Demo Script (Quick Version)

1. Navigate to `/now/fed-onboarding/home`
2. Open an orchestration record in Draft state (e.g. Priya Sharma)
3. Click buttons in order: **Verify Clearance → Initiate Onboarding → Provision Identity → Request Building Access → Mark Ready**
4. After each click, wait ~5 seconds and refresh — watch the Integration Activity Log populate and screenshots attach
5. State progresses: Draft → Clearance Verified → In Progress → Complete
6. Process Flow bar at top of form shows progress visually

---

## AI Agent

| Property | Value |
|----------|-------|
| Name | Federal Onboarding Assistant |
| Record Type | Custom |
| Trigger | None (manual in Employee Center) |
| Auth | Runs as admin user (demo only) |
| ACL | Any authenticated user |

### Tools (5 CRUD lookups)

| Tool | Table | Purpose |
|------|-------|---------|
| Lookup Onboarding Tasks | sn_hr_core_task | Active HR tasks for the employee |
| Lookup Employee Profile | sys_user | Identify user by username/email/sys_id |
| Lookup SAP Employee Data | x_snc_fed_forum_on_sap_employee | Role, team, manager, start date |
| Lookup Entra Account Status | x_snc_fed_forum_on_entra_account | Network account, MFA, licenses |
| Lookup Facilities Access | x_snc_fed_forum_on_facility_access | Building, badge, zones, pass status |

### Guardrails
- No pay/classification/EBA — deflects to HR Shared Services
- No clearance timeline speculation — deflects to HR Security Team
- No other-employee data — only current logged-in user
- Never calls external systems — all data from ServiceNow platform records

---

## Knowledge Base

**Knowledge Base:** Federal Onboarding Knowledge Base (owner: Sarah Mitchell)

| # | Article | Content |
|---|---------|---------|
| 1 | Security Clearance Transfer Process | Clearance levels, transfer steps, timeline |
| 2 | Entra ID Account Provisioning | What gets provisioned, timeline, Day 1 actions |
| 3 | Building Access and Security Pass | Access zones, after-hours, Day 1 collection |
| 4 | New Starter Day One Checklist | Before arriving, morning, afternoon steps |
| 5 | IT Equipment and Software | Standard issue, available software, support |
| 6 | Mandatory Training for New Starters | Week 1 & 2 courses, how to access LMS |
| 7 | Key Contacts and Support Channels | IT, HR, Facilities, Security contacts |

---

## Workspace

| Property | Value |
|----------|-------|
| Title | Federal Onboarding Operations |
| URL | `/now/fed-onboarding/home` |
| Path | `fed-onboarding` |
| Roles | x_snc_fed_forum_on.user (contains canvas_user), x_snc_fed_forum_on.admin (contains canvas_admin) |
| ACL | ux_route read on `now/fed-onboarding.*` |

### Dashboard (Landing Page)
3 widgets on the Overview tab:
- **Total Onboarding Cases** — Single Score (COUNT of orchestrations)
- **Cases by State** — Vertical Bar (grouped by state)
- **Cases by Readiness** — Vertical Bar (grouped by overall_readiness)

### List Navigation
| Category | Lists |
|----------|-------|
| Onboarding Queue | All Orchestrations, Active (state≠complete), Completed (state=complete) |
| Integration Logs | All Activity |

### Orchestration Form Features
- **Process Flow** bar (Draft → Clearance Verified → Provisioning → In Progress → Complete)
- **Work Notes** input field + Activity Stream formatter
- **Integration Activity Log** as related list (columns: sequence, target_system, action, status, detail, duration_ms, timestamp)
- Workspace action buttons with conditional visibility

---

## Seed Data

**Fluent-managed (installed on build):**
- sys_user: David Chen (Director), Sarah Mitchell (HR Operations Officer)

**Populated via Reset Demo Data button (runtime):**

| Employee | State | Readiness | Clearance |
|----------|-------|-----------|-----------|
| Priya Sharma | Draft | Not Ready | NV1 (transfer in progress) |
| Marcus Johnson | Clearance Verified | Not Ready | NV2 (transfer complete) |
| Emily Nguyen | In Progress | Partially Ready | Baseline |
| James O'Brien | Complete | Ready | NV1 |

---

## Reset Demo

Click **"Reset Demo Data"** button on the Orchestration list view (red destructive button, admin only).

What it does:
1. Truncates all 6 data tables in dependency order
2. Reseeds all 4 employees with full cross-referenced data
3. Reseeds all 26 integration activity log records (across AGSVA, SAP HCM, Entra ID, Facilities, HRSD)
4. Creates 50 padding orchestration records for dashboard density

Also available via GlideAjax: `ResetDemoDataAjax` script include (client-callable).

---

## Cross-Scope Privileges

| Target | Operation | Purpose |
|--------|-----------|---------|
| sn_fd.FlowAPI | execute | Required for UI Actions to call subflows |

---

## File Structure

```
src/fluent/
├── tables.now.ts                    # 7 table definitions
├── ui-actions.now.ts                # 6 UI Actions + 5 sys_ux_form_action records
├── ai-agent.now.ts                  # AI Agent with 5 CRUD tools
├── knowledge-articles.now.ts        # KB base + 7 articles
├── related-lists.now.ts             # Process flow, work notes, activity, related list
├── seed-data.now.ts                 # sys_user records (David Chen, Sarah Mitchell)
├── business-rules.now.ts            # Empty (orphan cleanup note)
├── cross-scope-privileges.now.ts    # sn_fd.FlowAPI access
├── script-includes/
│   └── reset-demo-data-ajax.now.ts  # Client-callable reset + reseed
└── workspaces/fed-onboarding/
    ├── workspace.now.ts             # Workspace + ACL
    ├── list-menu.now.ts             # Roles, applicability, list categories
    └── dashboard.now.ts             # 3-widget dashboard
```

---

## Known Issues & Workarounds

| Issue | Workaround |
|-------|-----------|
| Generated flow `.now.ts` files have TS4111 type errors (SDK codegen) | Excluded via `.nowignore` (`generated/`, `flows/`). Flows work correctly on instance. |
| Subflows may not exist on fresh instances | All subflow calls wrapped in `try { } catch(e) {}`. UI Actions work fully without subflows — state changes, work notes, and screenshots all execute regardless. |
| `GlideSysAttachment.copy()` fails silently in scoped apps | Uses `getContentStream()`/`writeContentStream()` pattern instead for reliable attachment copying. |
| Demo screenshot images must be manually uploaded | Upload images as attachments to records in `x_snc_fed_forum_on_demo_screenshot` table (one per phase). Images are NOT code-managed. |

---

*Built with ServiceNow Now SDK Fluent API v4.6.0 | Fed Forum 2026*
