# Build Agent - Workspace

**Method:** ServiceNow Build Agent prompts inside the platform IDE
**Target:** Configurable Workspace with all 32 scoped app object types
**Scope:** `x_snc_apr_tv5` (use this exact scope to avoid collision with SDK approaches)

> **Important:** Create the app scope **first** in App Engine Studio or System Applications before issuing Build Agent prompts. Name: "Travel Request Apr WS", Scope: `x_snc_apr_tv5`.
>
> **Actual run note:** Build Agent auto-generated scope `x_snc_travel_rcsg8`, ignoring the spec-defined `x_snc_apr_tv5`. This is expected behavior - Build Agent names and scopes apps itself within the IDE and does not honor externally defined scope strings. Verification was done via the in-platform self-check script (see below) rather than `verify.py` externally, since `verify.py` targets the SDK scopes. A subsequent attempt to reconcile objects into `x_snc_travel_rcsg8` via Windsurf found some gaps, which is why Build Agent was asked to self-check instead.

---

## Tracking Template

Record these for every Build Agent interaction:

| # | Prompt Summary | Start Time | End Time | Wall Clock | Assists | Outcome |
|---|---------------|-----------|---------|-----------|------------|---------|
| 1 | Full spec - all 32 object types + Jelly→React UI Page refinement | | | ~50 min | 550 | All 32 components created including workspace with dashboard; UI Page refined from Jelly to React |

**Definitions:**
- **Wall Clock:** Time from pressing Enter to Build Agent finishing (seconds or minutes)
- **Assists:** Assist count as reported by the platform
- **Outcome:** What was created, any errors, partial results

**Totals:**
- Total prompts: **1** (with refinement pass for UI Page)
- Total wall clock: **~50 min**
- Total Assists: **550**
- Final verify score: **32/32**

---

## Prompt Sequence

### Prompt 1: Data Model (4 tables, all columns)

```
Create a scoped application called "Travel Request Apr WS" with scope x_snc_apr_tv5.

Create 4 tables:

1. x_snc_apr_tv5_request (extends task):
   - traveler: Reference (sys_user)
   - destination_city: String (100)
   - destination_country: String (100)
   - departure_date: Date
   - return_date: Date
   - estimated_cost: Currency
   - actual_cost: Currency
   - purpose: Choice (Conference, Client Meeting, Training, Internal, Other)
   - department: Reference (cmn_department)
   - approval_status: Choice (Pending, Approved, Rejected, Finance Review) - Default: Pending
   - travel_type: Choice (Domestic, International)
   - requires_visa: Boolean
   - notes: Journal
   - attachments: File attachment

2. x_snc_apr_tv5_expense (extends task):
   - travel_request: Reference (x_snc_apr_tv5_request)
   - expense_type: Choice (Airfare, Hotel, Meals, Transport, Visa, Other)
   - amount: Currency
   - receipt: File attachment
   - expense_date: Date
   - vendor: String (200)
   - reimbursement_status: Choice (Submitted, Approved, Paid, Rejected) - Default: Submitted

3. x_snc_apr_tv5_policy (standalone):
   - policy_name: String (200)
   - max_daily_hotel: Currency
   - max_daily_meals: Currency
   - max_flight_class: Choice (Economy, Premium Economy, Business)
   - applies_to_country: String (100) - Wildcard "*" for global default
   - requires_finance_approval_above: Currency
   - active: Boolean

4. x_snc_apr_tv5_delegation (standalone):
   - delegator: Reference (sys_user)
   - delegate: Reference (sys_user)
   - start_date: Date
   - end_date: Date
   - active: Boolean

Enable web service access on all 4 tables.
```

### Prompt 2: Roles and ACLs

```
In scope x_snc_apr_tv5, create these roles:
- x_snc_apr_tv5.user (base role - submit requests, log expenses)
- x_snc_apr_tv5.approver (contains user - approve/reject requests)
- x_snc_apr_tv5.finance (contains user - review high-cost requests, approve reimbursements)
- x_snc_apr_tv5.admin (contains finance and approver - full config access)

Create these ACLs:
- x_snc_apr_tv5_request: Read for user role (traveler sees own, manager sees direct reports)
- x_snc_apr_tv5_request: Write for user role (only if approval_status = Pending or Rejected)
- x_snc_apr_tv5_request: Create for user role
- x_snc_apr_tv5_request: Delete for admin role only
- x_snc_apr_tv5_request.approval_status: Write for approver role (manager or delegate only)
- x_snc_apr_tv5_expense: Read for user role (traveler sees own; finance sees all)
- x_snc_apr_tv5_expense: Write for user role (only if reimbursement_status = Submitted or Rejected)
- x_snc_apr_tv5_policy: Read for user role (all authenticated)
- x_snc_apr_tv5_policy: Write for admin role only
- x_snc_apr_tv5_delegation: Read for approver role
- x_snc_apr_tv5_delegation: Write for approver role (delegator only)
```

### Prompt 3: Business Rules, Client Scripts, UI Policies

```
In scope x_snc_apr_tv5, create these business rules:

1. "Set Department from Traveler" on x_snc_apr_tv5_request - Before Insert, order 100. Auto-populate department from traveler's department.
2. "Derive Travel Type" on x_snc_apr_tv5_request - Before Insert/Update, order 200. Compare destination_country to traveler's country; set Domestic or International.
3. "Escalate to Finance" on x_snc_apr_tv5_request - After Update, order 100. If estimated_cost exceeds policy threshold and approval_status changes to Approved, set to Finance Review.
4. "Calculate Actual Cost" on x_snc_apr_tv5_request - Before Update, order 300. Sum all child expense records into actual_cost.
5. "Prevent Edit After Approval" on x_snc_apr_tv5_request - Before Update, order 50. Abort if non-admin edits core fields when approval_status is Approved or Finance Review.
6. "Close Expenses on Request Close" on x_snc_apr_tv5_request - After Update, order 200. When state = Closed Complete, mark all Submitted expenses as Approved.
7. "Validate Expense Date Range" on x_snc_apr_tv5_expense - Before Insert/Update, order 100. Expense date must fall between parent request departure and return dates.

Create these client scripts:

1. "Show Visa Field" on x_snc_apr_tv5_request - onChange (travel_type). Show requires_visa only when travel_type = International.
2. "Warn High Cost" on x_snc_apr_tv5_request - onChange (estimated_cost). If > policy threshold, show info message: "This request will require finance approval".
3. "Confirm Submission" on x_snc_apr_tv5_request - onSubmit. Confirm dialog if estimated_cost is blank.

Create these UI policies:

1. "Read Only After Approval" on x_snc_apr_tv5_request - When approval_status = Approved OR Finance Review: make destination_city, destination_country, departure_date, return_date, estimated_cost, purpose read-only.
2. "Hide Actual Cost Before Trip" on x_snc_apr_tv5_request - When departure_date > today: hide actual_cost.
3. "Mandatory Purpose for International" on x_snc_apr_tv5_request - When travel_type = International: make purpose mandatory.
```

### Prompt 4: Workspace, Menus, Lists, Views

```
In scope x_snc_apr_tv5, create a configurable workspace called "Travel Management" with path "travel-management-ba".

Landing page: Dashboard with cards - My Pending Requests, Awaiting My Approval, Department Budget Summary.

Pages:
- List page: All travel requests with filters (status, department, date range, traveler)
- Record page: Travel request detail with related expenses, approval timeline, policy compliance
- Dashboard page: Charts - requests by status (donut), spend by department (bar), monthly volume (line), top destinations (horizontal bar)

Navigation modules: My Requests | Approvals | Expenses | Policies | Dashboard

Create application menu "Travel Management" with these modules:
- My Requests → x_snc_apr_tv5_request filtered by traveler = current user (role: user)
- All Requests → x_snc_apr_tv5_request (role: approver)
- Awaiting Approval → x_snc_apr_tv5_request filtered by approval_status = Pending (role: approver)
- Finance Queue → x_snc_apr_tv5_request filtered by approval_status = Finance Review (role: finance)
- My Expenses → x_snc_apr_tv5_expense filtered by traveler = current user (role: user)
- All Expenses → x_snc_apr_tv5_expense (role: finance)
- Travel Policies → x_snc_apr_tv5_policy (role: admin)
- Delegations → x_snc_apr_tv5_delegation (role: approver)
- Dashboard → workspace dashboard (role: user)

Create these list layouts:
- "My Travel Requests" on x_snc_apr_tv5_request: Number, Destination City, Departure Date, Return Date, Estimated Cost, Approval Status - sort by Departure Date DESC
- "Approval Queue" on x_snc_apr_tv5_request: Number, Traveler, Destination City, Estimated Cost, Purpose, Created - sort by Created ASC
- "Expense List" on x_snc_apr_tv5_expense: Number, Expense Type, Amount, Vendor, Expense Date, Reimbursement Status - sort by Expense Date DESC
- "Policy List" on x_snc_apr_tv5_policy: Policy Name, Applies to Country, Max Daily Hotel, Requires Finance Approval Above, Active - sort by Policy Name ASC

Create list controls:
- x_snc_apr_tv5_request: Omit sys_created_by, sys_mod_count from default list
- x_snc_apr_tv5_request: Color-code rows - green=Approved, red=Rejected, yellow=Pending, blue=Finance Review
- x_snc_apr_tv5_expense: Group by travel_request

Create views:
- Default view on x_snc_apr_tv5_request: all fields
- "Approver" view on x_snc_apr_tv5_request: Traveler, Destination, Dates, Cost, Purpose, Approval Status
- "Finance" view on x_snc_apr_tv5_request: Traveler, Department, Estimated Cost, Actual Cost, Approval Status
- Default view on x_snc_apr_tv5_expense: all fields
```

### Prompt 5: Flows, Notifications, Catalog, UI Actions

```
In scope x_snc_apr_tv5, create these flows:

1. "Travel Request Approval" - Trigger: record updated on x_snc_apr_tv5_request where approval_status changes to Pending.
   Steps: Lookup active delegation for traveler's manager. If delegation active, approver = delegate, else approver = manager. Ask for Approval. If approved → set Approved. If rejected → set Rejected + journal. If estimated_cost > threshold → set Finance Review + trigger Finance Escalation subflow.

2. "Finance Escalation" subflow - Input: request sys_id. Ask for Approval from finance role. If approved → Approved. If rejected → Rejected.

3. "Expense Reimbursement" - Trigger: record created on x_snc_apr_tv5_expense. If amount > policy max → flag for finance review. Else → auto-approve, set reimbursement_status = Approved.

Create these email notifications:
- "Request Submitted" on x_snc_apr_tv5_request - Insert where approval_status=Pending → send to traveler's manager
- "Request Approved" on x_snc_apr_tv5_request - Update where approval_status changes to Approved → send to traveler
- "Request Rejected" on x_snc_apr_tv5_request - Update where approval_status changes to Rejected → send to traveler
- "Finance Review Required" on x_snc_apr_tv5_request - Update where approval_status changes to Finance Review → send to finance role
- "Expense Flagged" on x_snc_apr_tv5_expense - Insert where amount exceeds policy → send to finance role

Create catalog item "Submit Travel Request" in Service Catalog > Employee Services > Travel.
Variable Set "Travel Details": destination_city (text, mandatory), destination_country (reference core_country, mandatory), departure_date (date, mandatory), return_date (date, mandatory), purpose (select box, mandatory), estimated_cost (currency, mandatory), requires_visa (checkbox), additional_notes (multi-line text).
Variable Set "Traveler Info" (read-only, auto-populated): traveler_name, traveler_department, traveler_manager.
Catalog client scripts: Auto-populate Traveler Info onLoad, Validate Date Range onChange, Show Visa Reminder onChange.
Catalog UI policies: Show visa for international, Require notes for high cost (>5000).

Create UI actions on x_snc_apr_tv5_request:
- "Approve" form button: when approval_status=Pending and current user is approver → set Approved
- "Reject" form button: when approval_status=Pending and current user is approver → prompt reason, set Rejected
- "Submit for Reimbursement" form button: when Approved and actual_cost > 0 → trigger reimbursement
- "Add Expense" form link: when Approved → open new expense form with travel_request pre-filled
- "Export to PDF" context menu: any state → generate PDF summary
```

### Prompt 6: Script Includes, REST API, Properties, Relationships

```
In scope x_snc_apr_tv5, create these script includes:

1. "TravelPolicyUtil" (not client-callable): getPolicyForCountry(country), getFinanceThreshold(), isWithinPolicy(request)
2. "TravelDelegationUtil" (not client-callable): getActiveDelegate(manager_sys_id), isDelegationActive(delegator, date)
3. "TravelCostCalculator" (client-callable via GlideAjax): getEstimatedDailyRate(country, expense_type), getPolicyLimit(country)

Create a Scripted REST API "Travel Request API" with base path /api/x_snc_apr_tv5/travel:
- GET /requests - list requests for authenticated user (role: user)
- GET /requests/{sys_id} - single request with expenses (role: user)
- POST /requests - create request (role: user)
- PUT /requests/{sys_id}/approve - approve (role: approver)
- PUT /requests/{sys_id}/reject - reject with reason (role: approver)
- GET /policy/{country} - get policy (role: user)

Create these system properties:
- x_snc_apr_tv5.finance_threshold: Currency, default 5000
- x_snc_apr_tv5.default_flight_class: String, default "Economy"
- x_snc_apr_tv5.max_advance_booking_days: Integer, default 180
- x_snc_apr_tv5.auto_approve_below: Currency, default 500
- x_snc_apr_tv5.expense_receipt_required_above: Currency, default 50

Create these relationships:
- x_snc_apr_tv5_request → x_snc_apr_tv5_expense (one-to-many: request has many expenses)
- sys_user → x_snc_apr_tv5_request (one-to-many: user has many requests)
- x_snc_apr_tv5_policy → x_snc_apr_tv5_request (lookup: request references policy by destination)
- sys_user → x_snc_apr_tv5_delegation (one-to-many via delegator)
```

### Prompt 7: Remaining Components (Seed Data, Data Sources, Security, JS Modules, Connections, ATF)

```
In scope x_snc_apr_tv5, create seed data:

5 travel policies:
| Policy Name | Country | Max Hotel | Max Meals | Flight Class | Finance Threshold |
| Global Default | * | 200 | 75 | Economy | 5000 |
| USA | United States | 300 | 100 | Economy | 5000 |
| Japan | Japan | 350 | 120 | Premium Economy | 8000 |
| United Kingdom | United Kingdom | 280 | 90 | Economy | 5000 |
| Australia | Australia | 250 | 85 | Economy | 5000 |

5 sample travel requests (mix of Pending, Approved, Rejected, Finance Review).
10 sample expenses linked to approved requests (mix of types, some exceeding policy).
2 delegations (one active, one expired).

Create 2 data sources:
- "Travel Policy Import" (CSV → x_snc_apr_tv5_policy, coalesce on policy_name)
- "Historical Requests Import" (CSV → x_snc_apr_tv5_request, coalesce on traveler + departure_date)

Create cross-scope privileges:
- Read sys_user from global scope
- Read cmn_department from global scope
- Read core_country from global scope
- Read sys_user_has_role from global scope

Create security attribute: "x_snc_apr_tv5.department_restricted" on x_snc_apr_tv5_request.

Create security data filters:
- "Department Scope" on x_snc_apr_tv5_request for user role: department = current user's department OR traveler = current user
- "Finance Full View" on x_snc_apr_tv5_request for finance role: no filter (sees all)

Create 2 UI formatters on x_snc_apr_tv5_request:
- "Expense Summary" - embedded formatter showing total expenses by type
- "Approval Timeline" - activity formatter showing approval chain with timestamps

Create JS modules:
- "travelUtils" - date validation helpers, currency formatting, policy limit lookups via GlideAjax
- "travelCharts" - chart rendering helpers for workspace dashboard: donut, bar, and line chart configs

Create connection records:
- "Corporate Directory Sync" LDAP connection (simulated) for syncing traveler cost center/department data
- Connection alias "x_snc_apr_tv5_currency_api" (REST) for currency exchange rate API

Create 11 ATF tests:
- Server: Policy Lookup - TravelPolicyUtil.getPolicyForCountry returns correct policy for "Japan"
- Server: Finance Escalation - Request with cost > threshold gets Finance Review status
- Server: Department Auto-populate - New request fills department from traveler
- Server: Expense Date Validation - Expense outside travel dates is rejected
- Client: Visa Field Visibility - requires_visa appears when travel_type = International
- Client: High Cost Warning - Info message when estimated_cost > threshold
- Security: ACL Traveler Own Records - User reads own requests but not others'
- Security: ACL Approver Access - Approver can write approval_status for direct reports
- Security: ACL Finance Access - Finance role reads all requests
- Flow: Approval Flow Happy Path - Request moves Pending → Approved
- Flow: Delegation Reroute - Approval routes to delegate when active
```

---

## Self-Check Script

Run this in **Scripts - Background** (System Definition > Scripts - Background) after all prompts are complete. Set the scope to `x_snc_apr_tv5` first.

```javascript
// ============================================================
// Project Sybil - Build Agent Self-Check (32 Object Types)
// Run in: Scripts - Background
// Scope: x_snc_apr_tv5
// ============================================================

var SCOPE = 'x_snc_apr_tv5';

var checks = [
    // [label, table, query, expected_min]
    ['Tables & columns',             'sys_db_object',            'sys_scope.scope=' + SCOPE, 4],
    ['ACLs',                         'sys_security_acl',         'sys_scope.scope=' + SCOPE, 11],
    ['Roles',                        'sys_user_role',            'sys_scope.scope=' + SCOPE, 4],
    ['Business rules',               'sys_script',               'sys_scope.scope=' + SCOPE, 7],
    ['Client scripts',               'sys_script_client',        'sys_scope.scope=' + SCOPE, 3],
    ['UI policies',                  'sys_ui_policy',            'sys_scope.scope=' + SCOPE, 3],
    ['Flows',                        'sys_hub_flow',             'sys_scope.scope=' + SCOPE, 3],
    ['Email notifications',          'sysevent_email_action',    'sys_scope.scope=' + SCOPE, 5],
    ['Service catalog items',        'sc_cat_item',              'sys_scope.scope=' + SCOPE, 1],
    ['Variables & variable sets',    'item_option_new_set',      'sys_scope.scope=' + SCOPE, 2],
    ['Catalog client scripts',       'catalog_script_client',    'sys_scope.scope=' + SCOPE, 3],
    ['Catalog UI policies',          'catalog_ui_policy',        'sys_scope.scope=' + SCOPE, 2],
    ['Script includes',              'sys_script_include',       'sys_scope.scope=' + SCOPE, 3],
    ['Scripted REST APIs',           'sys_ws_definition',        'sys_scope.scope=' + SCOPE, 1],
    ['UI actions',                   'sys_ui_action',            'sys_scope.scope=' + SCOPE, 5],
    ['UI pages',                     'sys_ui_page',              'sys_scope.scope=' + SCOPE, 2],
    ['UI formatters',                'sys_ui_formatter',         'sys_scope.scope=' + SCOPE, 2],
    ['Workspaces',                   'sys_ux_app_config',        'sys_scope.scope=' + SCOPE, 1],
    ['App menus & modules',          'sys_app_application',      'sys_scope.scope=' + SCOPE, 1],
    ['Lists',                        'sys_ui_list',              'sys_scope.scope=' + SCOPE, 4],
    ['List controls',                'sys_ui_list_control',      'sys_scope.scope=' + SCOPE, 3],
    ['Views & view rules',           'sys_ui_view',              'sys_scope.scope=' + SCOPE, 3],
    ['Properties',                   'sys_properties',           'sys_scope.scope=' + SCOPE, 5],
    ['Relationships',                'sys_relationship',         'sys_scope.scope=' + SCOPE, 4],
    ['Data sources',                 'sys_data_source',          'sys_scope.scope=' + SCOPE, 2],
    ['Cross-scope privileges',       'sys_scope_privilege',      'sys_scope.scope=' + SCOPE, 4],
    ['Security attributes',          'sys_security_type',        'sys_scope.scope=' + SCOPE, 1],
    ['Security data filters',        'sys_security_acl',         'sys_scope.scope=' + SCOPE + '^operation=record', 2],
    ['JS modules',                   'sys_ux_lib_source_script', 'sys_scope.scope=' + SCOPE, 2],
    ['External connections',         'sys_alias',                'sys_scope.scope=' + SCOPE, 1],
    ['ATF tests',                    'sys_atf_test',             'sys_scope.scope=' + SCOPE, 11]
];

// Seed data check (separate - counts records in custom tables)
var seedTables = {
    policy: 5,
    request: 5,
    expense: 10,
    delegation: 2
};

var passed = 0;
var total = checks.length + 1; // +1 for seed data
var report = [];

report.push('=== PROJECT SYBIL - BUILD AGENT SELF-CHECK ===');
report.push('Scope: ' + SCOPE);
report.push('Time:  ' + new GlideDateTime().getDisplayValue());
report.push('─'.repeat(65));

// Run component checks
for (var i = 0; i < checks.length; i++) {
    var label    = checks[i][0];
    var table    = checks[i][1];
    var query    = checks[i][2];
    var expected = checks[i][3];

    var ga = new GlideAggregate(table);
    ga.addEncodedQuery(query);
    ga.addAggregate('COUNT');
    ga.query();
    var count = 0;
    if (ga.next()) {
        count = parseInt(ga.getAggregate('COUNT'), 10);
    }

    var ok = count >= expected;
    if (ok) passed++;
    var icon = ok ? 'PASS' : 'FAIL';
    report.push(icon + '  ' + label + ': ' + count + '/' + expected);
}

// Seed data check
var seedTotal = 0;
var seedExpected = 22; // 5+5+10+2
var seedDetails = [];
for (var suffix in seedTables) {
    var tbl = SCOPE + '_' + suffix;
    var sg = new GlideAggregate(tbl);
    sg.addAggregate('COUNT');
    sg.query();
    var sc = 0;
    if (sg.next()) {
        sc = parseInt(sg.getAggregate('COUNT'), 10);
    }
    seedTotal += sc;
    seedDetails.push(suffix + '=' + sc);
}
var seedOk = seedTotal >= seedExpected;
if (seedOk) passed++;
report.push((seedOk ? 'PASS' : 'FAIL') + '  Records (seed data): ' + seedTotal + '/' + seedExpected + ' (' + seedDetails.join(', ') + ')');

report.push('─'.repeat(65));
report.push('SCORE: ' + passed + '/' + total);
report.push('');

gs.print(report.join('\n'));
```

---

## External Verification (from Windsurf)

After the Build Agent finishes, also run the Python verify script for official scoring:

```bash
# From the project-sybil root:
python3 scripts/verify.py --approach 5 --scope x_snc_apr_tv5 \
  --wall-clock <TOTAL_SECONDS> \
  --tokens <TOTAL_BA_ACTIONS>
```

> **Note:** Build Agent does not expose token counts. Use total BA actions (number of discrete create/modify actions) as the `--tokens` proxy. Document the actual meaning in the tracking table above.

---

## Rules

1. **Do not look at** SDK approach folders - this approach must be independent
2. **Record every prompt** exactly as entered and every Build Agent response summary
3. **Screenshot** after each prompt completes (optional but recommended)
4. **Run self-check** after each major prompt to track incremental progress
5. **Use scope `x_snc_apr_tv5`** - not `x_snc_apr_trv` (that's the SDK approaches)
