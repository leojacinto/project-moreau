# Federal Cleared Starter Onboarding Demo — Agent Context

## Application Identity

| Property | Value |
|---|---|
| App Name | Fed Forum Onboarding demo |
| Scope | x_snc_fed_forum_on |
| SDK Version | 4.6.0 |
| Platform | ServiceNow Now SDK Fluent API |
| Purpose | Fed Forum 2026 demo — onboarding orchestration for cleared starters |

---

## Architecture Overview

```
UI Actions (workspace buttons)
  → write detailed multi-step work_notes (simulates integration flow output)
  → update state
  → try { subflow.run() } catch(e) {}  (subflows optional)
  → copy phase screenshot attachment (getContentStream/writeContentStream)
```

Key design decisions:
- **Work notes tell the full story** — each button writes 5-6 sequential work_notes entries that simulate real integration API calls (e.g., `[AGSVA] Querying clearance reference CLR-2026-08841...`)
- State changes and work notes happen BEFORE subflow calls (instant feedback in Activity panel)
- All subflow calls wrapped in `try { } catch(e) {}` — subflows may not exist on all instances
- No business rules are used — previous duplicates are cleaned up by Reset Demo Data
- Screenshot attachments are copied from `x_snc_fed_forum_on_demo_screenshot` using `GlideSysAttachment.getContentStream()`/`writeContentStream()` (NOT `.copy()` which fails in scoped apps)
- Workspace buttons use `sys_ux_form_action` records at specificity 20
- Reset Demo Data reseeds ALL data including 26 integration log records

---

## Source Files Map

| File | What It Contains | Key Exports/IDs |
|---|---|---|
| `src/fluent/tables.now.ts` | 7 table definitions | sap_employee, agsva_clearance, entra_account, facility_access, orchestration, integration_log, demo_screenshot |
| `src/fluent/ui-actions.now.ts` | 6 UI Actions + 5 sys_ux_form_action Records | ua_verify_clearance, ua_initiate_onboarding, ua_provision_identity, ua_request_building_access, ua_mark_ready, ua_reset_demo + fa_verify/initiate/provision/building/ready |
| `src/fluent/ai-agent.now.ts` | AI Agent with 5 CRUD tools | federal_onboarding_assistant |
| `src/fluent/knowledge-articles.now.ts` | KB base + 7 articles | fed_onb_kb, kb_clearance_transfer, kb_entra_provisioning, kb_building_access, kb_day_one_checklist, kb_it_equipment, kb_mandatory_training, kb_key_contacts |
| `src/fluent/related-lists.now.ts` | Process Flow stages (5), form elements (process_flow, work_notes, activity.xml), related list config | pf_orch_draft/clearance/provisioning/in_progress/complete, process_flow_orch, work_notes_element_orch, activity_formatter_orch, related_list_integration_log |
| `src/fluent/seed-data.now.ts` | 2 sys_user records | user-david-chen, user-sarah-mitchell |
| `src/fluent/business-rules.now.ts` | Empty (intentional — no BRs) | — |
| `src/fluent/cross-scope-privileges.now.ts` | 1 cross-scope privilege | csp_sn_fd_flow_api (execute sn_fd.FlowAPI) |
| `src/fluent/script-includes/reset-demo-data-ajax.now.ts` | ResetDemoDataAjax script include | ResetDemoDataAjax (client-callable, GlideAjax) |
| `src/fluent/workspaces/fed-onboarding/workspace.now.ts` | Workspace + route ACL | fed_onboarding_workspace, fed_onboarding_workspace_acl |
| `src/fluent/workspaces/fed-onboarding/list-menu.now.ts` | Roles, Applicability, List Menu Config | fed_onb_user_role, fed_onb_admin_role, fed_onb_applicability, fed_onb_list_config |
| `src/fluent/workspaces/fed-onboarding/dashboard.now.ts` | Dashboard with 3 widgets | fed_onboarding_dashboard |
| `src/fluent/.nowignore` | Excludes `generated/` and `flows/` from build | — |

---

## Tables Schema Summary

### x_snc_fed_forum_on_orchestration (central record)
- **Display:** number (auto-numbered ONB prefix)
- **References:** sap_record, agsva_record, entra_record, facility_record, hrsd_lifecycle_event, initiated_by
- **State choices:** draft, clearance_verified, provisioning, in_progress, complete
- **Readiness choices:** not_ready, partially_ready, ready
- **Special fields:** work_notes (journal_input)
- **Indexes:** on all reference fields

### x_snc_fed_forum_on_integration_log
- **Display:** action
- **References:** orchestration → x_snc_fed_forum_on_orchestration
- **Key fields:** sequence (Integer), target_system (choice: agsva/sap_hcm/entra_id/facilities/hrsd), action, status (pending/in_flight/success/failed), detail, timestamp, duration_ms

### x_snc_fed_forum_on_sap_employee
- **Display:** last_name
- **Key fields:** sap_employee_id, employment_status (pending/active/terminated), gender, start_date

### x_snc_fed_forum_on_agsva_clearance
- **Display:** agsva_reference
- **Key fields:** clearance_level (baseline/nv1/nv2/pv), clearance_status (active/pending/lapsed/cancelled), transfer_status (not_required/requested/in_progress/complete)

### x_snc_fed_forum_on_entra_account
- **Display:** upn
- **Key fields:** account_status (not_created/provisioning/active/disabled), mfa_enrolled (boolean)

### x_snc_fed_forum_on_facility_access
- **Display:** employee_name
- **Key fields:** pass_status (not_requested/requested/issued/collected), photo_id_verified (boolean), after_hours (boolean)

### x_snc_fed_forum_on_demo_screenshot
- **Display:** phase
- **Key fields:** phase (choice: verify_clearance/initiate_onboarding/provision_identity/request_building_access/mark_ready), description

---

## UI Action Logic Pattern

All 5 workflow buttons follow this pattern:
```javascript
// 1. Write detailed multi-step work_notes (simulates integration output)
current.work_notes = '[System] Initiating action for ' + current.employee_name + '...';
current.update();
current.work_notes = '[System] Step detail with dynamic data from related records...';
current.update();
current.work_notes = '[System] ✓ Action complete — summary';

// 2. Update state (where applicable)
current.state = '<new_state>';
current.update();

// 3. Trigger subflow in background (wrapped in try-catch — may not exist)
try {
  sn_fd.FlowAPI.getRunner()
    .subflow('x_snc_fed_forum_on.<subflow_name>')
    .inBackground()
    .withInputs({ orchestration_sys_id: current.sys_id.toString() })
    .run();
} catch(e) {}

// 4. Copy phase screenshot as attachment (stream-based for scoped apps)
var ss = new GlideRecord('x_snc_fed_forum_on_demo_screenshot');
ss.addQuery('phase', '<phase_value>');
ss.query();
if (ss.next()) {
  var sa = new GlideSysAttachment();
  var attGr = new GlideRecord('sys_attachment');
  attGr.addQuery('table_name', 'x_snc_fed_forum_on_demo_screenshot');
  attGr.addQuery('table_sys_id', ss.getUniqueValue());
  attGr.query();
  while (attGr.next()) {
    var stream = sa.getContentStream(attGr.getUniqueValue());
    sa.writeContentStream(current, attGr.getValue('file_name'),
      attGr.getValue('content_type'), stream);
  }
}

// 5. Info message
gs.addInfoMessage('...');
```

### Work Notes Per Button

| Button | # Notes | Systems Referenced |
|---|---|---|
| Verify Clearance | 6 | AGSVA via RPA bot (portal auth, clearance lookup, level/status/expiry extraction, transfer) |
| Initiate Onboarding | 6 | SAP HCM (employee, position, cost centre), HRSD (lifecycle event) |
| Provision Identity | 5 | Entra ID (UPN, object ID, licenses, MFA) |
| Request Building Access | 5 | Facilities (building, badge, photo ID, zones) |
| Mark Ready | 6 | Cross-system check (AGSVA ✓, Entra ✓, Facilities ✓, SAP ✓) |

### Visibility Conditions

| Button | Condition |
|---|---|
| Verify Clearance | `current.state == 'draft'` |
| Initiate Onboarding | `current.state == 'clearance_verified'` |
| Provision Identity | `current.state == 'in_progress' && current.entra_record.account_status != 'active'` |
| Request Building Access | `current.state == 'in_progress' && current.facility_record.pass_status != 'issued' && current.facility_record.pass_status != 'collected'` |
| Mark Ready | `current.state == 'in_progress' && current.entra_record.account_status == 'active' && (current.facility_record.pass_status == 'issued' \|\| current.facility_record.pass_status == 'collected')` |
| Reset Demo Data | list banner, roles: admin |

---

## Reset Demo Data (Script Include)

**Name:** ResetDemoDataAjax  
**Client-callable:** Yes (GlideAjax pattern)  
**Cleanup actions:**
1. Truncates all 6 data tables in dependency order (logs first, orchestration, then supporting tables)
2. Reseeds 4 complete employee profiles with full cross-references
3. Reseeds 26 integration activity log records (across all 5 target systems)
4. Creates 50 padding orchestration records for dashboard density

The Reset Demo Data UI Action (ua_reset_demo) contains the same logic inline in its script field for use from the workspace list banner.

---

## AI Agent Configuration

**Name:** Federal Onboarding Assistant  
**Version:** V1 (published)  
**Execution mode:** autopilot (all tools)  
**Max auto executions:** 10 per tool

### Tool Query Patterns

| Tool | Table | Query Template |
|---|---|---|
| Lookup Onboarding Tasks | sn_hr_core_task | `employee={{employee_sys_id}}^active=true` |
| Lookup Employee Profile | sys_user | `user_name={{identifier}}^ORemail={{identifier}}^ORsys_id={{identifier}}` |
| Lookup SAP Employee Data | x_snc_fed_forum_on_sap_employee | `sap_employee_id={{identifier}}^ORemail_work={{identifier}}^ORlast_nameLIKE{{identifier}}` |
| Lookup Entra Account Status | x_snc_fed_forum_on_entra_account | `upn={{identifier}}^ORsap_employee_id={{identifier}}` |
| Lookup Facilities Access | x_snc_fed_forum_on_facility_access | `sap_employee_id={{identifier}}^ORemployee_nameLIKE{{identifier}}` |

### Agent Instructions Summary
1. Identify user (Lookup Employee Profile)
2. Categorize request (tasks, team/role, IT status, building, FAQ, deflection)
3. Handle deflections (pay → HR Shared Services, clearance timelines → HR Security Team, other employees → refuse)
4. Retrieve data using appropriate tool
5. Present in plain English, never show sys_ids

---

## Workspace Configuration

### Roles
- `x_snc_fed_forum_on.user` → contains `canvas_user`
- `x_snc_fed_forum_on.admin` → contains `canvas_admin`

### Applicability
- Name: "Federal Onboarding Users"
- Grants access to both user and admin roles

### List Categories
1. **Onboarding Queue** (order 10)
   - All Orchestrations (no filter)
   - Active (state!=complete)
   - Completed (state=complete)
2. **Integration Logs** (order 20)
   - All Activity (no filter)

### Dashboard Widgets
| Widget | Component | Data Source | Group By |
|---|---|---|---|
| Total Onboarding Cases | single-score | orchestration (COUNT) | — |
| Cases by State | vertical-bar | orchestration (COUNT) | state |
| Cases by Readiness | vertical-bar | orchestration (COUNT) | overall_readiness |

---

## Form Configuration (related-lists.now.ts)

### Process Flow Stages (sys_process_flow records)
| Order | Label | Condition |
|---|---|---|
| 100 | Draft | state=draft |
| 200 | Clearance Verified | state=clearance_verified |
| 300 | Provisioning | state=provisioning |
| 400 | In Progress | state=in_progress |
| 500 | Complete | state=complete |

### Form Elements (sys_ui_element on section f20c614c47780314f9de91ef016d43c9)
| Element | Type | Position |
|---|---|---|
| process_flow | formatter | 0 |
| work_notes | field | 98 |
| activity.xml | formatter | 99 |

### Related List
- `x_snc_fed_forum_on_integration_log.orchestration` on x_snc_fed_forum_on_orchestration
- Columns: sequence, target_system, action, status, detail, duration_ms, timestamp

---

## Subflows (Instance-Side, Optional)

Subflows are referenced by UI Action scripts but **may not exist** on all instances. All calls are wrapped in `try { } catch(e) {}` so buttons work fully without them. Their internal names (used in UI Action scripts):

- `x_snc_fed_forum_on.agsva_clearance_verification`
- `x_snc_fed_forum_on.initiate_cleared_starter_onboarding`
- `x_snc_fed_forum_on.entra_id_account_provisioning`
- `x_snc_fed_forum_on.facilities_access_request`
- `x_snc_fed_forum_on.readiness_check`
- `x_snc_fed_forum_on.log_integration_step`

Each subflow accepts a single String input: `orchestration_sys_id`.

**Note:** Without subflows, the demo still works perfectly — state changes, detailed work notes, record updates, and screenshot attachments are all handled directly in the UI Action scripts. Subflows add additional async logging if present.

---

## Known Issues & Constraints

| Issue | Impact | Resolution |
|---|---|---|
| Generated flow `.now.ts` have TS4111 errors | Build noise only | `.nowignore` excludes `generated/` and `flows/` |
| Subflows may not exist on fresh instances | No impact — buttons work without them | All subflow calls wrapped in `try { } catch(e) {}` |
| `GlideSysAttachment.copy()` fails in scoped apps | Screenshots not copied | Uses `getContentStream()`/`writeContentStream()` instead |
| Demo screenshot images are manual uploads | Images must be uploaded to `x_snc_fed_forum_on_demo_screenshot` records | Upload as attachments (paperclip icon) — one per phase |
| Integration log data wiped by Reset | Dashboard widgets empty | Reset now reseeds all 26 integration log records |

---

## Important Notes for AI Agents

1. **DO NOT create business rules** for this app. The file is intentionally empty.
2. **DO NOT modify the `.nowignore`** — it intentionally excludes flow-generated code that has SDK type errors.
3. **When adding new UI Actions**, follow the pattern: write multi-step work_notes, update state, wrap subflow call in try-catch, copy screenshot with getContentStream/writeContentStream, and create a `sys_ux_form_action` Record at specificity 20.
4. **DO NOT use `GlideSysAttachment.copy()`** — it fails silently in scoped apps. Use `getContentStream()`/`writeContentStream()` instead.
5. **Subflows are optional** — all UI Action logic works without them. They only add async integration logging if present on the instance.
6. **Cross-scope privilege** is required for `sn_fd.FlowAPI` — already configured.
7. **Demo data** is NOT managed by Fluent seed-data (only 2 sys_user records + 26 integration logs are). Full demo data including employee records is created at runtime via the Reset Demo Data button because cross-table references require sequential insert.
8. **The orchestration form section sys_id** is `f20c614c47780314f9de91ef016d43c9` — this is hardcoded in related-lists.now.ts form element records.
9. **Reset Demo Data reseeds integration logs** — the 26 records covering all 5 target systems are re-created inline in the Reset script so dashboard widgets always have data.
10. **Demo screenshots** are manually uploaded as attachments to `x_snc_fed_forum_on_demo_screenshot` records (one per phase). They are NOT code-managed.
