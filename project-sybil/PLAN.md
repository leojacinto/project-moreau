# Project Sybil - April 2026 Implementation Plan

## Context

- **Instance:** `demoxyz` (login verified, credentials in `.env`)
- **Scope:** `x_snc_apr_trv` (instance uses `x_snc_` vendor prefix)
- **Spec:** [specs/travel-app-spec-v1.md](specs/travel-app-spec-v1.md) - 32 object types
- **Existing travel apps on instance:** `x_snc_travel`, `x_snc_travel_a2b`, `x_snc_travel_rl4by`, `x_snc_travel_romlk`

### Scope-to-Spec Mapping

| Spec reference | Implementation name |
|---|---|
| `x_demo_travel` | `x_snc_apr_trv` |
| `x_demo_travel_request` | `x_snc_apr_trv_request` |
| `x_demo_travel_expense` | `x_snc_apr_trv_expense` |
| `x_demo_travel_policy` | `x_snc_apr_trv_policy` |
| `x_demo_travel_delegation` | `x_snc_apr_trv_delegation` |
| `x_demo_travel.user` | `x_snc_apr_trv.user` |
| `x_demo_travel.approver` | `x_snc_apr_trv.approver` |
| `x_demo_travel.finance` | `x_snc_apr_trv.finance` |
| `x_demo_travel.admin` | `x_snc_apr_trv.admin` |

---

## Shared Prerequisites (Approaches 1–3)

Approaches 1–3 are driven from Windsurf (external). They share the same first step: **create the `sys_app` record on the instance** so all subsequent records land in the `x_snc_apr_trv` scope.

### Step 0: Create the scoped app via REST

1. Set `apps.current_app` user preference to ensure scope context
2. Create `sys_app` record: name="Travel Request Apr", scope=`x_snc_apr_trv`
3. Verify scope is active

> **IMPORTANT:** ServiceNow demo instances assign scope names based on the vendor prefix (`x_snc_`). The REST API may append a random suffix. We must verify the actual scope name returned and adapt all subsequent calls accordingly. Do NOT create global-scope objects.

---

## REST Custom UI

**Folder:** `apr-2026-rest-custom-ui/`
**Method:** REST API calls from Windsurf (Cascade) to instance
**Target deliverable:** Jelly XML UI Page with full CRUD

### Phase 1 - Data Foundation
1. Create `sys_app` (shared step 0, or reuse if already created)
2. Create 4 tables (request extends task, expense extends task, policy standalone, delegation standalone)
3. Create all columns per spec §1
4. Create 4 roles per spec §3
5. Create 11 ACLs per spec §2
6. Create 7 business rules per spec §4
7. Create 3 client scripts per spec §5
8. Create 3 UI policies per spec §6
9. Create 5 system properties per spec §23
10. Create application menu + 9 modules per spec §19
11. Create 4 list layouts per spec §20
12. Create 4 views + view rules per spec §22
13. Create seed data per spec §25 (5 policies, 5 requests, 10 expenses, 2 delegations)

### Phase 2 - Scripted REST API
14. Create scripted REST API resource per spec §14 (6 endpoints)
15. Create 3 script includes per spec §13

### Phase 3 - UI Page
16. Create Jelly XML UI Page (`direct=false`) with:
    - Travel request summary dashboard (stats cards)
    - List view with filtering
    - Create/edit form (modal or inline)
    - Approval actions (Approve/Reject buttons)
    - Expense breakdown chart
17. Use `<g:evaluate>` for server-side data, form POST for writes
18. Include `sysparm_ck` for CSRF protection

### Phase 4 - Flows & Notifications
19. Create 3 flows per spec §7 (approval, finance escalation, reimbursement)
20. Create 5 email notifications per spec §8

### Phase 5 - Catalog
21. Create catalog item per spec §9
22. Create 2 variable sets per spec §10
23. Create 3 catalog client scripts per spec §11
24. Create 2 catalog UI policies per spec §12

### Phase 6 - Advanced
25. Create UI actions per spec §15 (5 actions)
26. Create relationships per spec §24
27. Create cross-scope privileges per spec §27
28. Create security data filters per spec §29
29. Create data source + import map per spec §26

### Phase 7 - Testing
30. Create ATF test suite with 11 tests per spec §32

### Deliverables
- All REST payloads saved in approach folder
- Iteration log (what worked, what broke, what was retried)
- Final screenshot/verification

---

## REST Workspace

**Folder:** `apr-2026-rest-workspace/`
**Method:** REST API calls from Windsurf (Cascade) to instance
**Target deliverable:** Native configurable workspace

### Phases 1–6 - Same as REST Custom UI
(Data foundation, REST API, flows, catalog, etc. are identical)

### Phase 3 - Workspace (replaces UI Page)
16. Create `sys_ux_app_config` with landing_path="home"
17. Create `sys_ux_page_registry` with path, root_macroponent (workspace shell)
18. Create 4x `sys_ux_screen_type` (dashboard, simple list, list, record)
19. Create 4x `sys_ux_app_route` (home, simplelist, list, record)
20. Create 4x `sys_ux_screen` linking screen types to OOB macroponents
21. Create 7x `sys_ux_page_property` (view, chrome components, list config)
22. Create `sys_ux_list_menu_config`
23. Configure workspace dashboard per spec §18

### Deliverables
- All REST payloads saved in approach folder
- Workspace assembly iteration log
- Screenshot/verification

---

## SDK

**Folder:** `apr-2026-sdk-primed/`
**Method:** ServiceNow SDK (`now-sdk`) Fluent TypeScript
**Target deliverable:** SDK-bundled UI Page + Workspace

### Phase 1 - SDK Project Setup
1. Initialize SDK project targeting instance
2. Create `sys_app` on instance (SDK requires this)
3. Run `now-sdk install` to link

### Phase 2 - Fluent TypeScript (single app.ts)
4. Define all 4 tables with columns using Fluent API
5. Define roles, ACLs, business rules, client scripts, UI policies
6. Define script includes, properties
7. Define application menu + modules
8. Define seed data
9. Build and deploy data foundation

### Phase 3 - UI Page
10. Create SDK-bundled UI Page with client app
11. Use Scripted REST API (Fluent `RestApi`) to avoid CSRF issues
12. Build and deploy

### Phase 4 - Workspace
13. Use `Workspace` Fluent API for native workspace
14. Use `UxListMenuConfig` for list configuration
15. Use `Dashboard` Fluent API for dashboard widgets
16. Build and deploy

### Phase 5 - Remaining Components
17. Define flows (if SDK supports, otherwise REST fallback)
18. Define email notifications
19. Define catalog item + variables
20. Define ATF tests (if SDK supports, otherwise REST fallback)

### Deliverables
- Full SDK project in approach folder
- Build log, deploy log
- List of what SDK handled vs what needed REST fallback

---

## Build Agent Custom UI (collapsed into Build Agent)

**Folder:** `apr-2026-buildagent-custom-ui/`
**Method:** Build Agent prompts inside ServiceNow IDE
**Target deliverable:** React UI Page

### Execution
1. Create new app in SN IDE: "Travel Request Apr UI", scope `x_snc_apr_trv_ui` (or reuse scope if allowed)
2. Feed spec sections as Build Agent prompts
3. Record each prompt, response, and outcome
4. Capture screenshots

### Prompt Strategy
- **Prompt 1:** Create data model (4 tables, all columns)
- **Prompt 2:** Create roles, ACLs, business rules
- **Prompt 3:** Create React UI Page (summary dashboard + CRUD)
- **Prompt 4:** Create flows, notifications, catalog
- **Prompt 5:** Create seed data and verify

### Deliverables
- Prompt transcript (markdown)
- Screenshots of each stage
- Final working app screenshot

---

## Build Agent Workspace

**Folder:** `apr-2026-buildagent/`
**Method:** Build Agent prompts inside ServiceNow IDE
**Target deliverable:** Native configurable workspace

### Execution
1. Create workspace in SN IDE: "Travel Request Apr WS"
2. Feed spec sections as Build Agent prompts
3. Record each prompt, response, and outcome
4. Capture screenshots

### Prompt Strategy
- **Prompt 1:** Create data model (4 tables, all columns)
- **Prompt 2:** Create configurable workspace with list/record/dashboard pages
- **Prompt 3:** Create business logic (BRs, client scripts, UI policies, ACLs)
- **Prompt 4:** Create flows, notifications, catalog, UI actions
- **Prompt 5:** Create seed data and verify

### Deliverables
- Prompt transcript (markdown)
- Screenshots of each stage
- Final working app screenshot

---

## Execution Order

Recommended execution order to maximize learning and minimize rework:

1. **REST Custom UI** - Establishes the data foundation and scope. Learn what the REST API can/can’t do with the expanded spec.
2. **REST Workspace** - Reuse data foundation learnings, focus on workspace assembly.
3. **SDK** - Apply learnings from REST approaches to the SDK path.
4. **Build Agent** - Quick win, workspace is Build Agent’s strength. Custom UI variant collapsed into this single run since the spec covers both UI Pages and Workspaces.

> Build Agent can be run in parallel with REST/SDK since it's independent (different tool, manual prompts).

---

## Success Criteria

For each approach, measure:
- **Component coverage:** How many of the 32 object types were successfully created?
- **Wall-clock time:** Total time from first action to working app
- **Iteration count:** How many retries/fixes were needed?
- **Working UI:** Does the UI actually function (CRUD, navigation, approval flow)?
- **Fidelity to spec:** How closely does the implementation match the spec?
