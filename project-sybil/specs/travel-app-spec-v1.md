# Project Sybil: Travel Request App Specification

> The original Sybil benchmark used a deliberately simple Travel Request app to compare vibe coding approaches. This expanded specification covers **every scoped application object type** to serve as the definitive build brief for future Sybil iterations.

**Scope name:** `x_demo_travel`
**App name:** Travel Request Management
**Use case:** Employees submit travel requests with destination, dates, estimated costs, and purpose. Managers approve or reject. Finance reviews high-cost requests. Travelers log expenses post-trip. The app tracks budget compliance per department.

---

## 1. Tables & Columns

### x_demo_travel_request (extends task)
| Column | Type | Notes |
|--------|------|-------|
| traveler | Reference (sys_user) | Who is traveling |
| destination_city | String (100) | |
| destination_country | String (100) | |
| departure_date | Date | |
| return_date | Date | |
| estimated_cost | Currency | |
| actual_cost | Currency | Populated post-trip |
| purpose | Choice (Conference, Client Meeting, Training, Internal, Other) | |
| department | Reference (cmn_department) | Auto-populated from traveler |
| approval_status | Choice (Pending, Approved, Rejected, Finance Review) | Default: Pending |
| travel_type | Choice (Domestic, International) | Derived from destination_country vs traveler's country |
| requires_visa | Boolean | |
| notes | Journal | |
| attachments | File attachment | Receipts, itinerary docs |

### x_demo_travel_expense (extends task)
| Column | Type | Notes |
|--------|------|-------|
| travel_request | Reference (x_demo_travel_request) | Parent request |
| expense_type | Choice (Airfare, Hotel, Meals, Transport, Visa, Other) | |
| amount | Currency | |
| receipt | File attachment | |
| expense_date | Date | |
| vendor | String (200) | |
| reimbursement_status | Choice (Submitted, Approved, Paid, Rejected) | Default: Submitted |

### x_demo_travel_policy (standalone)
| Column | Type | Notes |
|--------|------|-------|
| policy_name | String (200) | |
| max_daily_hotel | Currency | Per-country ceiling |
| max_daily_meals | Currency | |
| max_flight_class | Choice (Economy, Premium Economy, Business) | |
| applies_to_country | String (100) | Wildcard "*" for global default |
| requires_finance_approval_above | Currency | Threshold for finance escalation |
| active | Boolean | |

### x_demo_travel_delegation (standalone)
| Column | Type | Notes |
|--------|------|-------|
| delegator | Reference (sys_user) | Manager who delegates |
| delegate | Reference (sys_user) | Person who approves on their behalf |
| start_date | Date | |
| end_date | Date | |
| active | Boolean | |

---

## 2. Access Control Lists (ACLs)

| Table | Operation | Role | Condition |
|-------|-----------|------|-----------|
| x_demo_travel_request | Read | x_demo_travel.user | Traveler sees own requests; manager sees direct reports |
| x_demo_travel_request | Write | x_demo_travel.user | Only if approval_status = Pending or Rejected |
| x_demo_travel_request | Create | x_demo_travel.user | Any authenticated user in scope |
| x_demo_travel_request | Delete | x_demo_travel.admin | Admin only |
| x_demo_travel_request.approval_status | Write | x_demo_travel.approver | Manager or delegate only |
| x_demo_travel_expense | Read | x_demo_travel.user | Traveler sees own; finance sees all |
| x_demo_travel_expense | Write | x_demo_travel.user | Only if reimbursement_status = Submitted or Rejected |
| x_demo_travel_policy | Read | x_demo_travel.user | All authenticated |
| x_demo_travel_policy | Write | x_demo_travel.admin | Admin only |
| x_demo_travel_delegation | Read | x_demo_travel.approver | Approvers see own delegations |
| x_demo_travel_delegation | Write | x_demo_travel.approver | Delegator only |

---

## 3. Roles

| Role | Contains | Purpose |
|------|----------|---------|
| x_demo_travel.user | (base) | Submit requests, log expenses |
| x_demo_travel.approver | x_demo_travel.user | Approve/reject requests for direct reports |
| x_demo_travel.finance | x_demo_travel.user | Review high-cost requests, approve reimbursements |
| x_demo_travel.admin | x_demo_travel.finance, x_demo_travel.approver | Full configuration access |

---

## 4. Business Rules

| Name | Table | When | Order | Description |
|------|-------|------|-------|-------------|
| Set Department from Traveler | x_demo_travel_request | Before Insert | 100 | Auto-populate department from traveler's department field |
| Derive Travel Type | x_demo_travel_request | Before Insert/Update | 200 | Compare destination_country to traveler's country; set Domestic or International |
| Escalate to Finance | x_demo_travel_request | After Update | 100 | If estimated_cost exceeds policy threshold and approval_status changes to Approved, set to Finance Review |
| Calculate Actual Cost | x_demo_travel_request | Before Update | 300 | Sum all child expense records into actual_cost |
| Prevent Edit After Approval | x_demo_travel_request | Before Update | 50 | Abort if non-admin edits core fields when approval_status is Approved or Finance Review |
| Close Expenses on Request Close | x_demo_travel_request | After Update | 200 | When request state = Closed Complete, mark all Submitted expenses as Approved |
| Validate Expense Date Range | x_demo_travel_expense | Before Insert/Update | 100 | Expense date must fall between parent request departure and return dates |

---

## 5. Client Scripts

| Name | Table | Type | Description |
|------|-------|------|-------------|
| Show Visa Field | x_demo_travel_request | onChange (travel_type) | Show requires_visa field only when travel_type = International |
| Warn High Cost | x_demo_travel_request | onChange (estimated_cost) | If estimated_cost > policy threshold, show info message: "This request will require finance approval" |
| Confirm Submission | x_demo_travel_request | onSubmit | Confirm dialog before submit if estimated_cost is blank |

---

## 6. UI Policies

| Name | Table | Condition | Action |
|------|-------|-----------|--------|
| Read Only After Approval | x_demo_travel_request | approval_status = Approved OR Finance Review | Make destination_city, destination_country, departure_date, return_date, estimated_cost, purpose read-only |
| Hide Actual Cost Before Trip | x_demo_travel_request | departure_date > today | Hide actual_cost |
| Mandatory Purpose for International | x_demo_travel_request | travel_type = International | Make purpose mandatory |

---

## 7. Flows (Workflow Automation)

### Flow: Travel Request Approval
**Trigger:** Record updated on x_demo_travel_request where approval_status changes to Pending

**Steps:**
1. **Lookup** active delegation record for traveler's manager
2. **If** delegation exists and is within date range: set approver = delegate. **Else:** set approver = traveler's manager
3. **Ask for Approval** from the resolved approver
4. **If Approved:** update approval_status to Approved
5. **If Rejected:** update approval_status to Rejected, add journal entry with rejection reason
6. **If** estimated_cost > policy threshold: update approval_status to Finance Review, trigger subflow Finance Escalation

### Subflow: Finance Escalation
**Input:** travel_request sys_id
1. **Ask for Approval** from users with x_demo_travel.finance role
2. **If Approved:** update approval_status to Approved
3. **If Rejected:** update approval_status to Rejected

### Flow: Expense Reimbursement
**Trigger:** Record created on x_demo_travel_expense
1. **If** amount > max_daily threshold from policy for expense_type: flag for manual finance review
2. **Else:** auto-approve and update reimbursement_status to Approved

---

## 8. Email Notifications

| Name | Table | Event/Condition | Recipients | Content |
|------|-------|----------------|------------|---------|
| Request Submitted | x_demo_travel_request | Insert where approval_status = Pending | Traveler's manager (or delegate) | New travel request from ${traveler} to ${destination_city}, ${estimated_cost} |
| Request Approved | x_demo_travel_request | Update where approval_status changes to Approved | Traveler | Your travel request to ${destination_city} has been approved |
| Request Rejected | x_demo_travel_request | Update where approval_status changes to Rejected | Traveler | Your travel request was rejected. Reason in activity log. |
| Finance Review Required | x_demo_travel_request | Update where approval_status changes to Finance Review | x_demo_travel.finance role | Travel request from ${traveler} requires finance review. Estimated cost: ${estimated_cost} |
| Expense Flagged | x_demo_travel_expense | Insert where amount exceeds policy | x_demo_travel.finance role | Expense of ${amount} for ${expense_type} exceeds policy limit |

---

## 9. Service Catalog Items

### Catalog Item: Submit Travel Request
**Catalog:** Service Catalog > Employee Services > Travel
**Workflow:** Triggers Travel Request Approval flow

---

## 10. Variables & Variable Sets

### Variable Set: Travel Details
| Variable | Type | Mandatory | Notes |
|----------|------|-----------|-------|
| destination_city | Single Line Text | Yes | |
| destination_country | Reference (core_country) | Yes | |
| departure_date | Date | Yes | |
| return_date | Date | Yes | Must be after departure_date |
| purpose | Select Box | Yes | Conference, Client Meeting, Training, Internal, Other |
| estimated_cost | Currency | Yes | |
| requires_visa | Checkbox | No | Visible only when destination_country differs from user's country |
| additional_notes | Multi Line Text | No | |

### Variable Set: Traveler Info (read-only, auto-populated)
| Variable | Type | Notes |
|----------|------|-------|
| traveler_name | Single Line Text | From current user |
| traveler_department | Single Line Text | From current user's department |
| traveler_manager | Single Line Text | From current user's manager |

---

## 11. Catalog Client Scripts

| Name | Type | Description |
|------|------|-------------|
| Auto-populate Traveler Info | onLoad | Fill traveler_name, traveler_department, traveler_manager from current user |
| Validate Date Range | onChange (return_date) | Ensure return_date > departure_date |
| Show Visa Reminder | onChange (destination_country) | If international, show info message about visa requirements |

---

## 12. Catalog UI Policies

| Name | Condition | Action |
|------|-----------|--------|
| Show Visa for International | destination_country != user's country | Make requires_visa visible |
| Require Notes for High Cost | estimated_cost > 5000 | Make additional_notes mandatory |

---

## 13. Script Includes

| Name | Client Callable | Description |
|------|----------------|-------------|
| TravelPolicyUtil | No | Server-side utility: getPolicyForCountry(country), getFinanceThreshold(), isWithinPolicy(request) |
| TravelDelegationUtil | No | Server-side: getActiveDelegate(manager_sys_id), isDelegationActive(delegator, date) |
| TravelCostCalculator | Yes | Client-callable via GlideAjax: getEstimatedDailyRate(country, expense_type), getPolicyLimit(country) |

---

## 14. Scripted REST APIs

### API: Travel Request API
**Base path:** `/api/x_demo_travel/travel`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | /requests | x_demo_travel.user | List travel requests for authenticated user |
| GET | /requests/{sys_id} | x_demo_travel.user | Get single request detail with expenses |
| POST | /requests | x_demo_travel.user | Create travel request (JSON body maps to table fields) |
| PUT | /requests/{sys_id}/approve | x_demo_travel.approver | Approve a request |
| PUT | /requests/{sys_id}/reject | x_demo_travel.approver | Reject a request (requires reason in body) |
| GET | /policy/{country} | x_demo_travel.user | Get travel policy for a country |

---

## 15. UI Actions

| Name | Table | Type | Condition | Action |
|------|-------|------|-----------|--------|
| Approve | x_demo_travel_request | Form button | approval_status = Pending AND current user is approver or delegate | Set approval_status = Approved, add activity |
| Reject | x_demo_travel_request | Form button | approval_status = Pending AND current user is approver or delegate | Prompt for reason, set approval_status = Rejected |
| Submit for Reimbursement | x_demo_travel_request | Form button | approval_status = Approved AND actual_cost > 0 | Trigger reimbursement flow |
| Add Expense | x_demo_travel_request | Form link | approval_status = Approved | Open new expense form pre-populated with travel_request reference |
| Export to PDF | x_demo_travel_request | Form context menu | Any state | Generate PDF summary of request + expenses |

---

## 16. UI Pages (React)

### Travel Request Summary Page
- Single-page view showing request header, approval timeline, expense breakdown chart (bar chart by expense_type), and policy compliance indicator
- Used as the detail page in the workspace

### Expense Entry Form
- Inline form for quick expense entry from the request detail view
- File upload for receipt, auto-validates against policy limits

---

## 17. UI Formatters (built-in)

| Name | Table | Description |
|------|-------|-------------|
| Expense Summary | x_demo_travel_request | Embedded formatter on request form showing total expenses by type as a mini bar chart |
| Approval Timeline | x_demo_travel_request | Activity formatter showing approval chain with timestamps |

---

## 18. Workspaces

### Travel Management Workspace
**Landing page:** Dashboard with three cards: My Pending Requests, Awaiting My Approval, Department Budget Summary

**Pages:**
- **List page:** All travel requests with filters (status, department, date range, traveler)
- **Record page:** Travel request detail with related expenses list, approval timeline, policy compliance indicator
- **Dashboard page:** Charts: requests by status (donut), spend by department (bar), monthly travel volume (line), top destinations (horizontal bar)

**Navigation:** My Requests | Approvals | Expenses | Policies | Dashboard

---

## 19. Application Menus & Modules

| Menu | Module | Table/URL | Roles |
|------|--------|-----------|-------|
| Travel Management | My Requests | x_demo_travel_request (filtered: traveler = current user) | x_demo_travel.user |
| Travel Management | All Requests | x_demo_travel_request | x_demo_travel.approver |
| Travel Management | Awaiting Approval | x_demo_travel_request (filtered: approval_status = Pending, approver = current user) | x_demo_travel.approver |
| Travel Management | Finance Queue | x_demo_travel_request (filtered: approval_status = Finance Review) | x_demo_travel.finance |
| Travel Management | My Expenses | x_demo_travel_expense (filtered: travel_request.traveler = current user) | x_demo_travel.user |
| Travel Management | All Expenses | x_demo_travel_expense | x_demo_travel.finance |
| Travel Management | Travel Policies | x_demo_travel_policy | x_demo_travel.admin |
| Travel Management | Delegations | x_demo_travel_delegation | x_demo_travel.approver |
| Travel Management | Dashboard | Workspace dashboard URL | x_demo_travel.user |

---

## 20. Lists

| Name | Table | Columns | Default Sort |
|------|-------|---------|--------------|
| My Travel Requests | x_demo_travel_request | Number, Destination City, Departure Date, Return Date, Estimated Cost, Approval Status | Departure Date DESC |
| Approval Queue | x_demo_travel_request | Number, Traveler, Destination City, Estimated Cost, Purpose, Created | Created ASC |
| Expense List | x_demo_travel_expense | Number, Expense Type, Amount, Vendor, Expense Date, Reimbursement Status | Expense Date DESC |
| Policy List | x_demo_travel_policy | Policy Name, Applies to Country, Max Daily Hotel, Requires Finance Approval Above, Active | Policy Name ASC |

---

## 21. List Controls

| Table | Control | Description |
|-------|---------|-------------|
| x_demo_travel_request | Omit Fields | Hide internal fields (sys_created_by, sys_mod_count) from default list |
| x_demo_travel_request | Style | Color-code rows: green = Approved, red = Rejected, yellow = Pending, blue = Finance Review |
| x_demo_travel_expense | Hierarchical | Group by travel_request |

---

## 22. Views & View Rules

| Table | View Name | Condition | Fields Shown |
|-------|-----------|-----------|--------------|
| x_demo_travel_request | Default | None | All fields |
| x_demo_travel_request | Approver | Current user has x_demo_travel.approver | Traveler, Destination, Dates, Cost, Purpose, Approval Status (approval-focused layout) |
| x_demo_travel_request | Finance | Current user has x_demo_travel.finance | Traveler, Department, Estimated Cost, Actual Cost, Approval Status, Policy compliance fields |
| x_demo_travel_expense | Default | None | All fields |

---

## 23. Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| x_demo_travel.finance_threshold | Currency | 5000 | Requests above this amount require finance approval |
| x_demo_travel.default_flight_class | String | Economy | Default allowed flight class |
| x_demo_travel.max_advance_booking_days | Integer | 180 | Maximum days in advance a request can be submitted |
| x_demo_travel.auto_approve_below | Currency | 500 | Requests below this amount auto-approve |
| x_demo_travel.expense_receipt_required_above | Currency | 50 | Expenses above this amount require receipt attachment |

---

## 24. Relationships

| Parent Table | Child Table | Relationship | Description |
|-------------|-------------|--------------|-------------|
| x_demo_travel_request | x_demo_travel_expense | One-to-Many | A request has many expenses |
| sys_user | x_demo_travel_request | One-to-Many | A user has many travel requests |
| x_demo_travel_policy | x_demo_travel_request | Lookup | Request references applicable policy by destination country |
| sys_user | x_demo_travel_delegation | One-to-Many (delegator) | A manager can set multiple delegations |

---

## 25. Records (Seed Data)

### Travel Policies (5 records)
| Policy Name | Country | Max Hotel | Max Meals | Flight Class | Finance Threshold |
|-------------|---------|-----------|-----------|-------------|-------------------|
| Global Default | * | 200 | 75 | Economy | 5000 |
| USA | United States | 300 | 100 | Economy | 5000 |
| Japan | Japan | 350 | 120 | Premium Economy | 8000 |
| United Kingdom | United Kingdom | 280 | 90 | Economy | 5000 |
| Australia | Australia | 250 | 85 | Economy | 5000 |

### Sample Travel Requests (5 records)
Mix of Pending, Approved, Rejected, Finance Review statuses with realistic data across departments.

### Sample Expenses (10 records)
Linked to approved travel requests. Mix of expense types, some exceeding policy, some within.

### Sample Delegations (2 records)
One active, one expired.

---

## 26. Data Sources & Import Maps

| Data Source | Type | Target Table | Description |
|-------------|------|-------------|-------------|
| Travel Policy Import | CSV | x_demo_travel_policy | Bulk load/update travel policies from corporate finance export |
| Historical Requests Import | CSV | x_demo_travel_request | One-time migration of historical travel data |

**Import Map:** Field mappings for each data source, including coalesce on policy_name (policy) and traveler + departure_date (requests).

---

## 27. Cross-Scope Privileges

| Source Scope | Target Scope | Table | Operation | Description |
|-------------|-------------|-------|-----------|-------------|
| x_demo_travel | global | sys_user | Read | Lookup traveler details, manager |
| x_demo_travel | global | cmn_department | Read | Department reference |
| x_demo_travel | global | core_country | Read | Country reference for policy matching |
| x_demo_travel | global | sys_user_has_role | Read | Role checks for delegation logic |

---

## 28. Security Attributes

| Attribute | Table | Description |
|-----------|-------|-------------|
| x_demo_travel.department_restricted | x_demo_travel_request | Used with security data filters to restrict request visibility by department |

---

## 29. Security Data Filters

| Name | Table | Role | Filter | Description |
|------|-------|------|--------|-------------|
| Department Scope | x_demo_travel_request | x_demo_travel.user | department = current user's department OR traveler = current user | Users see own requests or requests from their department |
| Finance Full View | x_demo_travel_request | x_demo_travel.finance | (none) | Finance sees all requests |

---

## 30. JS Modules

| Name | Description |
|------|-------------|
| travelUtils | Shared client-side utility module: date validation helpers, currency formatting, policy limit lookups via GlideAjax |
| travelCharts | Chart rendering helpers for workspace dashboard: config generators for donut, bar, and line charts |

---

## 31. LDAP / External Connections

| Connection | Type | Purpose |
|-----------|------|---------|
| Corporate Directory Sync | LDAP (simulated) | Sync traveler cost center and department data from corporate HR system |
| Currency Exchange API | REST (connection alias) | Fetch live exchange rates for international travel cost estimates |

**Connection Alias:** `x_demo_travel_currency_api` (allows environment-specific endpoint wiring without update set credential exposure)

---

## 32. ATF Tests (11 categories)

| Category | Test Name | Description |
|----------|-----------|-------------|
| Server | Policy Lookup | TravelPolicyUtil.getPolicyForCountry returns correct policy for "Japan" |
| Server | Finance Escalation | Request with estimated_cost > threshold triggers Finance Review status |
| Server | Department Auto-populate | New request auto-fills department from traveler |
| Server | Expense Date Validation | Expense with date outside travel dates is rejected |
| Client | Visa Field Visibility | requires_visa appears when travel_type = International |
| Client | High Cost Warning | Info message shows when estimated_cost > threshold |
| Security | ACL Traveler Own Records | User can read own requests but not others' |
| Security | ACL Approver Access | Approver can write approval_status for direct reports |
| Security | ACL Finance Access | Finance role can read all requests |
| Flow | Approval Flow Happy Path | Request moves from Pending to Approved when approver approves |
| Flow | Delegation Reroute | Approval routes to delegate when delegation is active |

---

## 33. Component Coverage Matrix

Every object type from the ServiceNow scoped app inventory mapped to this spec:

| Object Type | Covered | Section |
|---------------|---------|---------|
| Access control lists (ACLs) | Yes | 2 |
| Application menus & modules | Yes | 19 |
| ATF tests (11 categories) | Yes | 32 |
| Business rules | Yes | 4 |
| Catalog client scripts | Yes | 11 |
| Catalog UI policies | Yes | 12 |
| Client scripts | Yes | 5 |
| Cross-scope privileges | Yes | 27 |
| Data sources & import maps | Yes | 26 |
| Email notifications | Yes | 8 |
| Flows (Workflow Automation) | Yes | 7 |
| JS modules | Yes | 30 |
| LDAP / external connections | Yes | 31 |
| List controls | Yes | 21 |
| Lists | Yes | 20 |
| Properties | Yes | 23 |
| Records (seed data) | Yes | 25 |
| Relationships | Yes | 24 |
| Roles | Yes | 3 |
| Script includes | Yes | 13 |
| Scripted REST APIs | Yes | 14 |
| Security attributes | Yes | 28 |
| Security data filters | Yes | 29 |
| Service catalog items | Yes | 9 |
| Tables & columns | Yes | 1 |
| UI actions | Yes | 15 |
| UI formatters (built-in) | Yes | 17 |
| UI pages (React) | Yes | 16 |
| UI policies | Yes | 6 |
| Variables & variable sets | Yes | 10 |
| Views & view rules | Yes | 22 |
| Workspaces | Yes | 18 |

**32 of 32 object types covered.**

---

## Notes

- The app is intentionally feature-complete but domain-simple. It exists to benchmark tooling, not to ship as a production travel system.
- Every object type from the ServiceNow scoped application inventory is exercised at least once.
- The Scripted REST API enables external consumption testing (relevant for Sybil Approaches 1-3).
- Seed data ensures the app is immediately demonstrable after deployment.
- Connection aliases are used for external connections to support promotion across instances without credential exposure.
