# Federal Cleared Starter Onboarding Demo: Build Agent Prompt

## Context for the Builder

This is a 5-to-7-minute live demo for Australian Federal Government executive leadership at Federal Forum. The narrative: ServiceNow orchestrates the onboarding of a security-cleared starter across four sovereign systems, without owning or duplicating their data.

The four integration points (all simulated with seed tables, no live integrations):

1. **AGSVA clearance verification** — AGSVA has no public API today. myClearance is a web portal. Simulated as a seed record with clearance status.
2. **SAP HR employee master** — In production this uses Zero Copy Connector for ERP (published BAPI/OData). Simulated as a seed table.
3. **Identity provisioning (Microsoft Entra ID)** — In production this uses the Entra ID spoke. Simulated as a seed record with provisioning status.
4. **Facilities access control** — Building access pass system. Simulated as a seed record with pass issuance status.

HRSD product owners (Core Business Services) will be in the room. Use existing HRSD capabilities (Lifecycle Events, Activity Sets, Employee Center). Supplement only with seed data, a Configurable Workspace for the HR/Security Officer view, and a trigger flow.

Two personas in the demo:
1. **HR Operations / Security Officer** — Uses a Configurable Workspace to initiate and monitor the onboarding. This is the primary demo view.
2. **New Starter (Priya Sharma)** — Brief switch to Employee Center to show the employee experience and the AI Agent. Secondary view, 60 seconds max.

---

## Paste Below Into Build Agent

---

### What I Need

A scoped ServiceNow application for a Federal Government cleared-starter onboarding demo. Two main deliverables:

1. **Seed data tables** simulating four external systems (AGSVA, SAP HCM, Entra ID, Facilities)
2. **A Configurable Workspace** for the HR Operations / Security Officer to initiate onboarding, see integration status across all four systems, and monitor task progress

Plus a trigger flow that bridges the seed data into an HRSD Lifecycle Event, and an AI Agent skill scoped to the employee side.

---

### Scoped Application

| Property | Value |
|---|---|
| App Name | Federal Cleared Starter Onboarding Demo |
| Scope | x_fed_onb |
| Description | Demo: onboarding orchestration for a cleared starter across AGSVA, SAP HCM, Entra ID, and Facilities. Seed data only, no live integrations. |

---

### Seed Data Tables

All tables inside the x_fed_onb scope. These simulate external system records. Static demo data. No APIs, no scheduled syncs.

#### 1. x_fed_onb_sap_employee — SAP HCM Employee Master

Single table combining key SAP infotype fields for demo simplicity.

| Field Name | Label | Type | Max Length | Notes |
|---|---|---|---|---|
| sap_employee_id | SAP Employee ID | String | 8 | |
| first_name | First Name | String | 40 | |
| last_name | Last Name | String | 40 | |
| preferred_name | Preferred Name | String | 40 | |
| date_of_birth | Date of Birth | Date | | |
| nationality | Nationality | String | 40 | |
| gender | Gender | Choice | | Male / Female / Other / Prefer not to say |
| email_work | Work Email | Email | | |
| email_personal | Personal Email | Email | | |
| mobile | Mobile | Phone | | |
| position_title | Position Title | String | 60 | |
| position_id | Position ID | String | 8 | |
| org_unit | Organisational Unit | String | 80 | |
| department | Department | String | 80 | |
| cost_centre | Cost Centre | String | 20 | |
| personnel_area | Personnel Area | String | 40 | |
| manager_name | Manager Name | String | 80 | |
| manager_email | Manager Email | Email | | |
| employment_status | Employment Status | Choice | | Pending / Active / Terminated |
| start_date | Start Date | Date | | |
| company_code | Company Code | String | 4 | |

#### 2. x_fed_onb_agsva_clearance — AGSVA Clearance Status

Simulates a clearance record as it would appear if AGSVA had an API. One record per person.

| Field Name | Label | Type | Max Length | Notes |
|---|---|---|---|---|
| agsva_reference | AGSVA Reference | String | 20 | e.g. CLR-2026-08841 |
| subject_first_name | First Name | String | 40 | |
| subject_last_name | Last Name | String | 40 | |
| date_of_birth | Date of Birth | Date | | Used for matching |
| clearance_level | Clearance Level | Choice | | Baseline / NV1 / NV2 / PV |
| clearance_status | Clearance Status | Choice | | Active / Pending / Lapsed / Cancelled |
| issuing_date | Date Issued | Date | | |
| expiry_date | Expiry Date | Date | | |
| sponsoring_entity | Sponsoring Entity | String | 80 | The department currently sponsoring |
| transfer_status | Transfer Status | Choice | | Not Required / Requested / In Progress / Complete |
| transfer_to_entity | Transfer To Entity | String | 80 | The new department requesting sponsorship |
| last_verified | Last Verified | Date/Time | | Timestamp of last status check |

#### 3. x_fed_onb_entra_account — Entra ID / AD Account Provisioning

Simulates identity provisioning status.

| Field Name | Label | Type | Max Length | Notes |
|---|---|---|---|---|
| upn | User Principal Name | String | 80 | e.g. priya.sharma@agency.gov.au |
| display_name | Display Name | String | 80 | |
| sap_employee_id | SAP Employee ID | String | 8 | Foreign key for matching |
| account_status | Account Status | Choice | | Not Created / Provisioning / Active / Disabled |
| mfa_enrolled | MFA Enrolled | True/False | | |
| assigned_licenses | Assigned Licenses | String | 200 | e.g. "M365 E5 Gov, GovTeams" |
| provisioned_date | Provisioned Date | Date/Time | | |
| provisioned_by | Provisioned By | String | 40 | e.g. "ServiceNow Flow" or "Manual" |
| entra_object_id | Entra Object ID | String | 36 | Simulated GUID |

#### 4. x_fed_onb_facility_access — Facilities Access Control

Simulates building access pass provisioning.

| Field Name | Label | Type | Max Length | Notes |
|---|---|---|---|---|
| badge_number | Badge Number | String | 12 | e.g. FAC-20260519-001 |
| employee_name | Employee Name | String | 80 | |
| sap_employee_id | SAP Employee ID | String | 8 | Foreign key for matching |
| building | Building | String | 80 | e.g. "50 Marcus Clarke Street, Canberra" |
| access_zones | Access Zones | String | 200 | e.g. "Level 4, Kitchen, Meeting Rooms, End-of-trip" |
| after_hours | After Hours Access | True/False | | |
| pass_status | Pass Status | Choice | | Not Requested / Requested / Issued / Collected |
| issued_date | Issued Date | Date | | |
| photo_id_verified | Photo ID Verified | True/False | | |

#### 5. x_fed_onb_integration_log — Integration Activity Log

This table captures every simulated integration step as it executes. It is the "bouncing ball." Each flow writes log entries here in sequence so the workspace shows the orchestration happening in real time.

| Field Name | Label | Type | Max Length | Notes |
|---|---|---|---|---|
| orchestration | Orchestration | Reference | | Reference to x_fed_onb_orchestration |
| sequence | Sequence | Integer | | Auto-incrementing order within one flow run |
| target_system | Target System | Choice | | AGSVA / SAP HCM / Entra ID / Facilities / HRSD |
| action | Action | String | 200 | e.g. "Querying AGSVA myClearance for clearance CLR-2026-08841" |
| status | Status | Choice | | Pending / In Flight / Success / Failed |
| detail | Detail | String | 500 | e.g. "NV1 clearance active. Transfer status: Complete. Sponsoring entity updated." |
| timestamp | Timestamp | Date/Time | | When this step executed |
| duration_ms | Duration (ms) | Integer | | Simulated duration for realism (e.g. 1200, 800, 2400) |

---

#### 6. x_fed_onb_orchestration — Onboarding Orchestration Record

This is the central record that ties together the four seed tables for one onboarding event. It is the primary record the workspace displays.

| Field Name | Label | Type | Max Length | Notes |
|---|---|---|---|---|
| number | Number | String | 20 | Auto-numbered, prefix ONB |
| employee_name | Employee Name | String | 80 | |
| sap_record | SAP Employee Record | Reference | | Reference to x_fed_onb_sap_employee |
| agsva_record | AGSVA Clearance Record | Reference | | Reference to x_fed_onb_agsva_clearance |
| entra_record | Entra ID Account Record | Reference | | Reference to x_fed_onb_entra_account |
| facility_record | Facility Access Record | Reference | | Reference to x_fed_onb_facility_access |
| hrsd_lifecycle_event | HRSD Lifecycle Event | Reference | | Reference to sn_hr_le_lifecycle_event (filled after trigger) |
| state | State | Choice | | Draft / Clearance Verification / Provisioning / In Progress / Complete |
| initiated_by | Initiated By | Reference | | Reference to sys_user (the HR officer / Security Officer) |
| initiated_date | Initiated Date | Date/Time | | |
| target_start_date | Target Start Date | Date | | The employee's intended first day |
| overall_readiness | Overall Readiness | Choice | | Not Ready / Partially Ready / Ready |

---

### Seed Data Records

Create one complete set of demo records.

#### The New Starter: Priya Sharma

**x_fed_onb_sap_employee:**
- SAP Employee ID: 10045821
- First Name: Priya, Last Name: Sharma, Preferred Name: Priya
- DOB: 1991-03-14, Nationality: Australian, Gender: Female
- Work Email: priya.sharma@agency.gov.au, Personal Email: priya.s@gmail.com, Mobile: +61 412 345 678
- Position Title: APS6 Policy Officer, Position ID: 50012345
- Org Unit: Digital Policy Branch, Department: Department of Digital Transformation
- Cost Centre: 4410-2200, Personnel Area: Canberra
- Manager Name: David Chen, Manager Email: david.chen@agency.gov.au
- Employment Status: Pending, Start Date: 2026-05-25
- Company Code: 1000

**x_fed_onb_agsva_clearance:**
- AGSVA Reference: CLR-2026-08841
- First Name: Priya, Last Name: Sharma, DOB: 1991-03-14
- Clearance Level: NV1, Clearance Status: Active
- Issuing Date: 2024-06-15, Expiry Date: 2034-06-15
- Sponsoring Entity: Department of Home Affairs
- Transfer Status: In Progress
- Transfer To Entity: Department of Digital Transformation
- Last Verified: (leave empty; updated during demo)

**x_fed_onb_entra_account:**
- UPN: priya.sharma@agency.gov.au
- Display Name: Priya Sharma
- SAP Employee ID: 10045821
- Account Status: Not Created
- MFA Enrolled: false
- Assigned Licenses: (empty)
- Provisioned Date: (empty)
- Provisioned By: (empty)
- Entra Object ID: (empty)

**x_fed_onb_facility_access:**
- Badge Number: (empty)
- Employee Name: Priya Sharma
- SAP Employee ID: 10045821
- Building: 50 Marcus Clarke Street, Canberra ACT 2601
- Access Zones: (empty)
- After Hours Access: false
- Pass Status: Not Requested
- Issued Date: (empty)
- Photo ID Verified: false

**x_fed_onb_orchestration:**
- Number: ONB0001
- Employee Name: Priya Sharma
- SAP Record: (reference to the record above)
- AGSVA Record: (reference to the record above)
- Entra Record: (reference to the record above)
- Facility Record: (reference to the record above)
- HRSD Lifecycle Event: (empty; filled by trigger flow)
- State: Draft
- Initiated By: (empty; filled when HR officer triggers)
- Initiated Date: (empty)
- Target Start Date: 2026-05-25
- Overall Readiness: Not Ready

#### Supporting Users (sys_user records)

Create or verify these sys_user records exist:

**David Chen** — Hiring Manager
- User ID: david.chen
- First Name: David, Last Name: Chen
- Title: Director, Digital Policy Branch
- Email: david.chen@agency.gov.au
- Role: manager (itil if needed for workspace access)

**Sarah Mitchell** — HR Operations / Security Officer (primary demo persona)
- User ID: sarah.mitchell
- First Name: Sarah, Last Name: Mitchell
- Title: HR Operations Officer
- Email: sarah.mitchell@agency.gov.au
- Roles: sn_hr_core.admin, itil (needs workspace and HRSD access)

**Priya Sharma** — New Starter (created during the demo flow or pre-created for the agent demo)
- User ID: priya.sharma
- First Name: Priya, Last Name: Sharma
- Title: APS6 Policy Officer
- Email: priya.sharma@agency.gov.au
- Manager: David Chen
- Department: Digital Policy Branch

---

### Configurable Workspace

Create a Configurable Workspace for the HR Operations / Security Officer.

**Workspace Name:** Federal Onboarding Operations
**URL slug:** fed-onboarding
**Description:** Operational workspace for managing cleared-starter onboarding across AGSVA, SAP, Identity, and Facilities.

**Landing Page — "Onboarding Queue":**

A list view of x_fed_onb_orchestration records. Columns: Number, Employee Name, State, Clearance Level (dot-walked from agsva_record.clearance_level), Target Start Date, Overall Readiness. Default sort: Target Start Date ascending.

**Record Page — Orchestration Record Detail:**

When the operator opens an orchestration record (e.g. ONB0001), they see a record page with the following layout:

**Top section: record header**
- Employee Name, State, Target Start Date, Overall Readiness

**Section 1: "Integration Status" — Four status cards side by side (or a 4-column related list layout)**

Each card shows the current status of one external system integration:

| Card | Source Table | Key Fields Shown | Status Field |
|---|---|---|---|
| SAP HCM | x_fed_onb_sap_employee | Position Title, Org Unit, Department, Start Date | employment_status |
| AGSVA Clearance | x_fed_onb_agsva_clearance | Clearance Level, Clearance Status, Transfer Status, Sponsoring Entity | transfer_status |
| Entra ID | x_fed_onb_entra_account | UPN, Account Status, MFA Enrolled, Assigned Licenses | account_status |
| Facilities | x_fed_onb_facility_access | Building, Pass Status, Photo ID Verified | pass_status |

If Configurable Workspace does not support card-style layout natively, use four related lists or four embedded form sections with the referenced records displayed inline. The goal is that the operator can see all four system statuses on one screen without clicking through.

**Section 2: "Onboarding Tasks" — HRSD Activity/Task list**

Once the HRSD Lifecycle Event is created (after trigger), show the related HR tasks from the onboarding case. This should be a related list of sn_hr_core_task records where the parent case is linked to this orchestration record's HRSD Lifecycle Event.

Columns: Task number, Short description, Assignment group, State, Due date.

**Section 3: "Integration Activity Log"**

A related list of x_fed_onb_integration_log records where orchestration = current record. Columns: Sequence, Target System, Action, Status, Detail, Timestamp, Duration (ms). Sort by Sequence ascending. This list populates in real time as flows execute. It is the bouncing ball: the audience watches rows appear as ServiceNow reaches out to each system.

**Section 4: "Actions"**

UI Action buttons on the orchestration record that trigger Flow Designer flows. The buttons themselves do nothing except kick off the flow. The flow does the work and writes the integration log entries. This distinction matters for the demo: the audience sees the workspace update as the flow executes, not as an instant field flip.

1. **"Verify Clearance"** — Triggers flow: AGSVA Clearance Verification
2. **"Initiate Onboarding"** — Triggers flow: Initiate Cleared Starter Onboarding (only available when state = Clearance Verified)
3. **"Provision Identity"** — Triggers flow: Entra ID Account Provisioning
4. **"Request Building Access"** — Triggers flow: Facilities Access Request
5. **"Mark Ready"** — Triggers flow: Readiness Check (only available when state = In Progress)

---

### Flow Designer Flows

All flows live inside the x_fed_onb scope. Each flow simulates an integration by: writing log entries to x_fed_onb_integration_log at each step, pausing briefly between steps (1-3 seconds per step using Flow Designer wait/timer), and updating the relevant seed table and orchestration record. The pauses are deliberate. They make the demo feel like real integration round-trips, not instant database updates.

---

#### Flow 1: AGSVA Clearance Verification

**Trigger:** UI Action "Verify Clearance" on x_fed_onb_orchestration

**Input:** Orchestration record sys_id

**Steps:**

| Step | Log Entry (action) | Log Entry (target_system) | What the flow does | Simulated duration |
|---|---|---|---|---|
| 1 | Connecting to AGSVA myClearance | AGSVA | Write log entry with status "In Flight". Wait 2 seconds. | 2000 ms |
| 2 | Querying clearance record CLR-2026-08841 | AGSVA | Lookup x_fed_onb_agsva_clearance by orchestration reference. Write log with status "In Flight". Wait 1 second. | 1200 ms |
| 3 | Validating clearance level and expiry | AGSVA | Read clearance_level, clearance_status, expiry_date. Verify clearance_status = Active and expiry_date > now(). Write log with status "In Flight". Wait 1 second. | 800 ms |
| 4 | Requesting sponsorship transfer to Department of Digital Transformation | AGSVA | Update transfer_status from "In Progress" to "Complete". Update transfer_to_entity. Set last_verified = now(). Write log with detail: "NV1 clearance active. Expiry 2034-06-15. Transfer complete. Sponsoring entity updated to Dept of Digital Transformation." Status: "Success". | 1500 ms |
| 5 | Updating orchestration record | HRSD | Update orchestration state from "Draft" to "Clearance Verified". Write log. Status: "Success". | 500 ms |

**Total simulated time:** ~6 seconds. Long enough to see the log entries appear one by one. Short enough to not bore an exec.

---

#### Flow 2: Initiate Cleared Starter Onboarding

**Trigger:** UI Action "Initiate Onboarding" on x_fed_onb_orchestration (only visible when state = "Clearance Verified")

**Input:** Orchestration record sys_id

**Steps:**

| Step | Log Entry (action) | Log Entry (target_system) | What the flow does | Simulated duration |
|---|---|---|---|---|
| 1 | Retrieving employee master from SAP HCM | SAP HCM | Lookup x_fed_onb_sap_employee by orchestration reference. Write log with status "In Flight". Wait 2 seconds. | 2000 ms |
| 2 | Validating SAP employee record 10045821 | SAP HCM | Read key fields (name, position, org unit, start date). Write log with detail: "Priya Sharma, APS6 Policy Officer, Digital Policy Branch, Start 2026-05-25. Record validated." Status: "Success". Wait 1 second. | 1200 ms |
| 3 | Creating ServiceNow user record | HRSD | Create sys_user for Priya Sharma using SAP seed data (first_name, last_name, email, phone, title, department, manager). Or update existing if pre-created. Write log with detail: "sys_user created. Employee number: 10045821. Manager: David Chen." Status: "Success". Wait 1 second. | 1000 ms |
| 4 | Updating SAP employment status | SAP HCM | Update x_fed_onb_sap_employee.employment_status from "Pending" to "Active". Write log. Status: "Success". | 800 ms |
| 5 | Creating HRSD Lifecycle Event | HRSD | Create sn_hr_le_lifecycle_event (type: Onboarding, subject_person: Priya Sharma sys_user). Link lifecycle event sys_id back to x_fed_onb_orchestration.hrsd_lifecycle_event. Write log with detail: "Lifecycle Event created. Activity Set: Federal Cleared Starter Onboarding. 13 tasks generated." Status: "Success". Wait 1 second. | 1500 ms |
| 6 | Notifying hiring manager | HRSD | (Optional) Send email/notification to David Chen. Write log with detail: "Notification sent to david.chen@agency.gov.au: Priya Sharma onboarding initiated." Status: "Success". | 500 ms |
| 7 | Updating orchestration record | HRSD | Update orchestration state to "In Progress". Update overall_readiness to "Partially Ready". Set initiated_by = current user, initiated_date = now(). Write log. Status: "Success". | 500 ms |

**Total simulated time:** ~8 seconds.

**Note on Step 5:** If Build Agent cannot create an HRSD Lifecycle Event programmatically (because Lifecycle Event Definitions are manually configured), then this step should: (a) attempt to create it if the definition exists, or (b) write a log entry saying "HRSD Lifecycle Event: [Manual trigger required]" and skip. Leo will wire this step manually if needed.

---

#### Flow 3: Entra ID Account Provisioning

**Trigger:** UI Action "Provision Identity" on x_fed_onb_orchestration

**Input:** Orchestration record sys_id

**Steps:**

| Step | Log Entry (action) | Log Entry (target_system) | What the flow does | Simulated duration |
|---|---|---|---|---|
| 1 | Connecting to Microsoft Entra ID tenant | Entra ID | Write log. Status: "In Flight". Wait 2 seconds. | 2000 ms |
| 2 | Creating user account priya.sharma@agency.gov.au | Entra ID | Update x_fed_onb_entra_account.account_status from "Not Created" to "Provisioning". Write log. Wait 1 second. | 1200 ms |
| 3 | Assigning licenses: M365 E5 Gov, GovTeams | Entra ID | Update assigned_licenses. Write log with detail. Wait 1 second. | 1000 ms |
| 4 | Enrolling MFA via Intune Company Portal | Entra ID | Update mfa_enrolled to true. Write log. Wait 1 second. | 1200 ms |
| 5 | Generating Entra Object ID | Entra ID | Set entra_object_id to a simulated GUID (e.g. "a3f1d2e4-5b6c-7d8e-9f0a-1b2c3d4e5f6a"). Update account_status to "Active". Set provisioned_date = now(). Set provisioned_by = "ServiceNow Flow". Write log with detail: "Account active. UPN: priya.sharma@agency.gov.au. MFA enrolled. Licenses: M365 E5 Gov, GovTeams." Status: "Success". | 800 ms |
| 6 | Updating orchestration record | HRSD | Write log. Status: "Success". | 500 ms |

**Total simulated time:** ~7 seconds.

---

#### Flow 4: Facilities Access Request

**Trigger:** UI Action "Request Building Access" on x_fed_onb_orchestration

**Input:** Orchestration record sys_id

**Steps:**

| Step | Log Entry (action) | Log Entry (target_system) | What the flow does | Simulated duration |
|---|---|---|---|---|
| 1 | Connecting to Facilities Access Control system | Facilities | Write log. Status: "In Flight". Wait 1 second. | 1500 ms |
| 2 | Requesting access pass for 50 Marcus Clarke Street | Facilities | Update x_fed_onb_facility_access.pass_status from "Not Requested" to "Requested". Write log. Wait 1 second. | 1200 ms |
| 3 | Allocating access zones: Level 4, Kitchen, Meeting Rooms, End-of-trip | Facilities | Update access_zones. Write log. Wait 1 second. | 1000 ms |
| 4 | Generating badge number FAC-20260525-001 | Facilities | Update badge_number. Write log with detail: "Badge FAC-20260525-001 allocated. Zones: Level 4, Kitchen, Meeting Rooms, End-of-trip. Collect on Day 1 with photo ID." Status: "Success". | 800 ms |
| 5 | Updating orchestration record | HRSD | Write log. Status: "Success". | 500 ms |

**Total simulated time:** ~5 seconds.

---

#### Flow 5: Readiness Check

**Trigger:** UI Action "Mark Ready" on x_fed_onb_orchestration (only visible when state = "In Progress")

**Input:** Orchestration record sys_id

**Steps:**

| Step | Log Entry (action) | Log Entry (target_system) | What the flow does | Simulated duration |
|---|---|---|---|---|
| 1 | Running cross-system readiness check | HRSD | Write log. Status: "In Flight". Wait 1 second. | 1000 ms |
| 2 | Checking AGSVA clearance: transfer_status | AGSVA | Read agsva_record.transfer_status. Write log with detail: "AGSVA: Transfer Complete. PASS." Status: "Success". Wait 500ms. | 800 ms |
| 3 | Checking SAP HCM: employment_status | SAP HCM | Read sap_record.employment_status. Write log with detail: "SAP HCM: Active. PASS." Status: "Success". Wait 500ms. | 800 ms |
| 4 | Checking Entra ID: account_status | Entra ID | Read entra_record.account_status. Write log with detail: "Entra ID: Active. MFA enrolled. PASS." Status: "Success". Wait 500ms. | 800 ms |
| 5 | Checking Facilities: pass_status | Facilities | Read facility_record.pass_status. Write log with detail: "Facilities: Badge allocated. PASS." Status: "Success". Wait 500ms. | 800 ms |
| 6 | All systems verified. Employee ready to start. | HRSD | Update overall_readiness to "Ready". Update state to "Complete". Write log with detail: "4/4 systems green. Priya Sharma cleared to commence 2026-05-25." Status: "Success". | 500 ms |

**Total simulated time:** ~5 seconds.

---

### How the Integration Log Looks During the Demo

As the presenter clicks each button, the Integration Activity Log related list on the workspace populates in real time. After all five flows, the log contains approximately 25-30 entries, each with a timestamp, target system, action description, and status. The audience sees ServiceNow reaching out to AGSVA, then SAP, then Entra, then Facilities, then doing a final cross-check. That is the bouncing ball.

The log should auto-refresh in the workspace. If Configurable Workspace does not auto-refresh related lists during flow execution, add a manual refresh button or use a UI Action "Refresh" that simply reloads the form.

---

### Subflow: Write Integration Log Entry

Create a reusable subflow that all five flows call at each step. This avoids duplicating the log-writing logic.

**Subflow Name:** Log Integration Step

**Inputs:**
- orchestration_sys_id (Reference)
- target_system (String: AGSVA / SAP HCM / Entra ID / Facilities / HRSD)
- action (String)
- status (String: Pending / In Flight / Success / Failed)
- detail (String, optional)
- simulated_duration_ms (Integer)

**Steps:**
1. Look up the current max sequence number on x_fed_onb_integration_log where orchestration = orchestration_sys_id. Set new sequence = max + 1.
2. Create x_fed_onb_integration_log record with all input values. Set timestamp = now().
3. Wait for (simulated_duration_ms / 1000) seconds using a Flow Designer timer step.
4. Update the log record status from "In Flight" to the final status value (Success or Failed).

This subflow is called repeatedly by each parent flow. The wait step inside the subflow creates the visible delay between log entries appearing in the workspace.

---

### Demo Flow Sequence (the order the operator clicks)

This is the order the buttons are clicked during the live demo. After each click, the Integration Activity Log populates row by row as the flow executes. The audience watches the bouncing ball: "Connecting to AGSVA myClearance... Querying clearance record... Validating... Transfer complete." Each row appears with a 1-2 second gap. The status cards update when the flow completes.

| Step | Button Clicked | Integration Log Shows | Cards Update | Narrative |
|---|---|---|---|---|
| 1 | (Open ONB0001) | Empty log. All four cards in initial state. | AGSVA: In Progress. Entra: Not Created. Facilities: Not Requested. SAP: Pending. | "Priya Sharma is joining us from Home Affairs. Her employee record is in SAP. Her NV1 clearance is active but needs to transfer sponsorship. Nothing is provisioned yet. Four systems, all waiting." |
| 2 | Verify Clearance | 5 log entries appear over ~6 seconds: Connecting to AGSVA... Querying clearance CLR-2026-08841... Validating level and expiry... Requesting sponsorship transfer... Updating orchestration. All entries land as Success. | AGSVA card: Transfer Status flips to Complete. Last Verified timestamp appears. Orchestration state: Clearance Verified. | "We confirm with AGSVA that Priya's NV1 clearance transfers to our department. Watch the activity log: ServiceNow is querying, validating, and confirming. This is the gate. Nothing else starts until clearance is green." |
| 3 | Initiate Onboarding | 7 log entries over ~8 seconds: Retrieving employee master from SAP... Validating SAP record 10045821... Creating ServiceNow user record... Updating SAP status... Creating HRSD Lifecycle Event... Notifying hiring manager... Updating orchestration. | SAP card: employment_status flips to Active. HRSD task list populates with onboarding activities. State: In Progress. | "Clearance is green, so we pull Priya's details from SAP and create her employee record. The lifecycle event fires. Every team that needs to act now has a task. No emails sent. No one chased. The platform routed the work." |
| 4 | Provision Identity | 6 log entries over ~7 seconds: Connecting to Entra ID... Creating user account... Assigning licenses... Enrolling MFA... Generating Entra Object ID... Updating orchestration. | Entra card: Account Status flips to Active. MFA: true. Licenses appear. | "Network account, email, GovTeams, MFA: all provisioned in one flow. In production this is an automated call to Entra ID." |
| 5 | Request Building Access | 5 log entries over ~5 seconds: Connecting to Facilities... Requesting access pass... Allocating access zones... Generating badge number... Updating orchestration. | Facilities card: Pass Status flips to Requested. Badge number and zones appear. | "Building access requested. Facilities know the zones. Badge allocated. She collects on Day 1 with photo ID." |
| 6 | Mark Ready | 6 log entries over ~5 seconds: Running cross-system readiness check... Checking AGSVA: PASS... Checking SAP HCM: PASS... Checking Entra ID: PASS... Checking Facilities: PASS... All systems verified. | Overall Readiness: Ready. State: Complete. | "Final readiness check. ServiceNow queries all four systems one more time. Four out of four green. Priya can start Monday. Every step in that log is auditable." |

---

### HRSD Configuration (Manual, Not Build Agent)

Build Agent should NOT attempt to configure these. The builder (Leo) will configure them manually using existing HRSD product features:

- **Lifecycle Event Definition** for "Federal Cleared Starter Onboarding"
- **Activity Set** with onboarding activities (security confirmation, IT provisioning, mandatory training enrolment, buddy assignment, Day 1 welcome, etc.)
- **Activity assignments** to correct groups
- **Employee Center** enablement and widget configuration
- **AI Agent skill** for the employee-facing onboarding assistant

Build Agent creates the scoped app, seed tables, seed data, orchestration table, integration log, workspace, flows, subflow, and UI Actions. Leo handles HRSD configuration.

---

### AI Agent (Manual Configuration, Spec Only)

The AI Agent lives in Employee Center only. Employee asks onboarding questions, agent retrieves from Knowledge Base and checks live task status.

**Agent Skill Name:** Federal Onboarding Assistant

**Capabilities:**
- Answer onboarding FAQs from published Knowledge Articles (pre-commencement checklist, Day 1 schedule, mandatory training, building info, IT systems, key contacts)
- Check onboarding task status: query sn_hr_core_task where parent case subject_person = current user
- Surface SAP-sourced employee context: query the sys_user record and the x_fed_onb_sap_employee seed record (via orchestration reference) to answer questions about role, team, org unit, manager, start date. The agent reads ServiceNow platform data. It never calls SAP.
- Check integration status: query x_fed_onb_entra_account and x_fed_onb_facility_access (via orchestration reference) for provisioning status
- Deflect pay/classification/EBA questions to HR Shared Services
- Deflect clearance timeline questions to HR Security Team (do not speculate)

**Architectural note (SAP API Policy v4/2026 compliance):**

SAP's API Policy v4/2026 explicitly prohibits API use for "interaction or integration with (semi-)autonomous or generative AI systems that plan, select, or execute sequences of API calls" outside SAP-endorsed architectures. This means pointing an AI agent directly at SAP APIs to answer employee questions is now a policy violation.

ServiceNow's architecture avoids this entirely:
1. Employee data is brought into the platform via Zero Copy Connector for ERP, which uses SAP's published BAPI and OData endpoints (listed in SAP Business Accelerator Hub). This is the SAP-endorsed integration pattern.
2. Once the data is in ServiceNow (as platform records or data fabric tables), the AI Agent reads it as platform data. The agent never makes API calls to SAP.
3. The agent's knowledge retrieval (Knowledge Base articles) and record queries (sys_user, HRSD tasks, seed tables) are all internal ServiceNow operations.

The result: the agent can answer "What team am I joining?" with data that originated in SAP HCM, without the agent ever touching SAP. This is compliant by architecture, not by workaround.

In the demo, this is demonstrated by Exchange 3 below (the SAP-sourced question). The presenter can optionally narrate: "That answer came from SAP data. But the agent did not call SAP. The data was already here via Zero Copy. Under SAP's new API policy, that distinction matters."

**Demo conversation (60-90 seconds, 4 exchanges):**

> **Exchange 1 — Onboarding FAQ:**
> Priya: "I start next Monday. What do I need to bring?"
> Agent: [retrieves Pre-Commencement KB article] Two forms of photo ID for building access, and your AGSVA reference number for clearance transfer confirmation.

> **Exchange 2 — Live integration status:**
> Priya: "Has my network account been set up?"
> Agent: [queries x_fed_onb_entra_account] "Your network account is active. MFA has been enrolled. Your credentials will be in a sealed envelope at your desk on Day 1."

> **Exchange 3 — SAP-sourced data (the policy beat):**
> Priya: "What team am I joining and who is my manager?"
> Agent: [queries sys_user or x_fed_onb_sap_employee] "You are joining the Digital Policy Branch in the Department of Digital Transformation as an APS6 Policy Officer. Your manager is David Chen, Director of the branch."
> *Presenter narrates: "That answer came from SAP employee master data. But the agent never called SAP. The data was brought into the platform via Zero Copy Connector. Under SAP's new API policy, that distinction is not cosmetic, it is compliance."*

> **Exchange 4 — Mandatory training:**
> Priya: "What mandatory training do I need to complete?"
> Agent: [retrieves Training KB article] Five courses within 30 days: APS Code of Conduct, WHS Fundamentals, Protective Security Awareness, Fraud Awareness, Diversity & Inclusion Foundations.

**Agent guardrails:**
- The agent does NOT answer questions about pay, classification reviews, or EBA entitlements. It deflects to HR Shared Services.
- The agent does NOT answer questions about other employees. It only returns data for the current logged-in user.
- The agent does NOT speculate on clearance timelines. It returns current status only and directs to HR Security Team.
- The agent does NOT call any external API or endpoint. All data retrieval is from ServiceNow platform tables. This is a design constraint, not a limitation.

---

### Knowledge Articles to Publish

Create the following Knowledge Articles in the HR Knowledge Base, category "Onboarding". These are the agent's source of truth and are also visible to the employee in Employee Center.

**Article 1: "Pre-Commencement Checklist"**
Before your first day, complete: TFN declaration (link in offer email), superannuation fund choice (default: AustralianSuper), emergency contact details, bank account details. Bring two forms of photo ID on Day 1 (Australian passport, driver's licence, Proof of Age card, or ImmiCard). If transferring an existing security clearance, bring your AGSVA reference number. Review the onboarding guidebook before Day 1. Your building is 50 Marcus Clarke Street, Canberra ACT 2601. Arrive 9:00 AM at ground floor reception. Your manager or buddy will meet you.

**Article 2: "Your First Day"**
9:00 AM: Reception, meet manager/buddy, collect visitor pass. 9:15: Building tour. 9:45: Desk setup, IT equipment collection. 10:15: IT setup (network login, email, MFA via Intune Company Portal; credentials in sealed envelope at your desk). 11:00: Welcome meeting with manager. 11:30: Meet onboarding buddy. 12:00: Team lunch. 1:30 PM: GovTeams walkthrough. 2:00: Systems access check (GovDMS, Aurion, Finance One). 2:30: Employee Center orientation. 3:00: Start APS Code of Conduct training. 4:00: End-of-day check-in.

**Article 3: "Mandatory Training Requirements"**
Complete within 30 calendar days. Non-negotiable. APS Code of Conduct (45 min, online LMS). WHS Fundamentals (30 min). Protective Security Awareness (40 min). Fraud Awareness (30 min). Diversity & Inclusion Foundations (30 min). Courses are pre-assigned in the LMS once your network account is active. If not visible within 48 hours, contact HR Learning Team via Employee Center.

**Article 4: "Building Access and Facilities"**
50 Marcus Clarke Street, Canberra ACT 2601. Building hours: 7:00 AM to 7:00 PM weekdays. After-hours access by arrangement with your manager. Access pass issued on Day 1 by Facilities (bring two forms of photo ID). If delayed, you receive a temporary visitor pass. Kitchen on your floor (fridge cleaned Fridays 4 PM). Meeting rooms booked via intranet. Quiet room on Level 3. End-of-trip facilities on ground floor (showers, lockers, bicycle storage). Building security: ext 7000 or 02 6100 7000. Emergency assembly: Marcus Clarke Street forecourt (north side).

**Article 5: "IT Systems and Tools"**
Departmental network (credentials Day 1). Email via Outlook. GovTeams (Microsoft Teams for Government). GovDMS (document management). Aurion Self-Service (leave, payslips). Finance One Travel Portal. ServiceNow Employee Center (onboarding, HR/IT requests). LMS (mandatory training). If any system is inaccessible within 48 hours of start date, ask the Onboarding Assistant or contact IT Service Desk (ext 8000).

**Article 6: "Key Contacts"**
Hiring Manager: David Chen, Director, Digital Policy Branch (GovTeams or david.chen@agency.gov.au). Onboarding Buddy: assigned before start date (you will receive email). HR Shared Services: Employee Center > HR Request. IT Service Desk: Employee Center > IT Request or ext 8000. Facilities: Employee Center > Facilities Request. Building Security: ext 7000. HR Security Team (clearances): via HR Shared Services, do not contact AGSVA directly. HR Learning Team: Employee Center > HR Request, category Training.

**Article 7: "Frequently Asked Questions"**
When will I get my first pay? Depends on pay cycle; submit TFN and bank details before start date to avoid a one-cycle delay. Payslips in Aurion Self-Service.
What if my clearance transfer is not complete? You may be able to start under temporary access conditions set by the Security Officer and HR Security Team. Some system access may be restricted until transfer is confirmed.
Can I work from home in my first week? No. On-site for the first two weeks for onboarding, IT setup, and team integration. Flexible work discussed with your manager after that.
What if I need a workplace adjustment? Contact HR Shared Services before or on Day 1. Reasonable adjustments arranged confidentially.
What if I do not complete mandatory training within 30 days? Escalated to your manager and recorded in your onboarding case. Extensions only in exceptional circumstances.

---

### What Build Agent Creates vs What Is Manual

**Build Agent creates:**
- Scoped app (x_fed_onb)
- All 6 tables with fields (sap_employee, agsva_clearance, entra_account, facility_access, integration_log, orchestration)
- Seed data records for Priya Sharma across all tables
- sys_user records for David Chen, Sarah Mitchell, Priya Sharma
- Assignment groups if not present (HR Security Team, IT Service Desk, Facilities Management, HR Learning Team, HR Shared Services)
- Configurable Workspace (Federal Onboarding Operations) with landing page list and record page layout including Integration Activity Log related list
- 5 UI Actions on x_fed_onb_orchestration (Verify Clearance, Initiate Onboarding, Provision Identity, Request Building Access, Mark Ready)
- 5 Flow Designer flows (AGSVA Clearance Verification, Initiate Cleared Starter Onboarding, Entra ID Account Provisioning, Facilities Access Request, Readiness Check)
- 1 Reusable subflow (Log Integration Step)
- Knowledge Articles (7 articles in HR Knowledge Base)

**Manual configuration (Leo builds by hand):**
- HRSD Lifecycle Event Definition and Activity Set
- Activity assignments to groups with due date offsets
- Employee Center / Manager Hub enablement
- AI Agent skill (intents, knowledge source binding, guardrails)
- Workspace visual tuning (column widths, card styling, status indicators)

---

### Limitations to Acknowledge If Asked During Demo

| Question | Honest Answer |
|---|---|
| "Is AGSVA integrated?" | No. AGSVA does not currently expose a public API. myClearance is a web portal. This demo simulates what clearance verification would look like if an API existed. In production, this step is currently a manual check with the Security Officer confirming status in myClearance and updating ServiceNow. |
| "Is SAP integrated?" | Not in this demo. In production, ServiceNow connects to SAP using Zero Copy Connector for ERP, which uses SAP's published BAPI and OData endpoints. This is compliant with SAP's API Policy v4/2026, which restricts integration to published interfaces only. |
| "What about SAP's new API policy?" | SAP's API Policy v4/2026 (published April 2026) restricts all integration to published APIs listed in the SAP Business Accelerator Hub. It explicitly prohibits third-party AI agent access outside SAP-endorsed architectures. ServiceNow's Zero Copy Connector for ERP uses published BAPI and OData interfaces, which are SAP-endorsed. Our integration approach aligns with the policy by design. |
| "Can the AI agent access SAP data?" | Yes, but not by calling SAP. The data is brought into ServiceNow via Zero Copy Connector using SAP's published APIs. Once it is platform data, the agent reads it like any other ServiceNow record. The agent never makes API calls to SAP. Under SAP's API Policy v4/2026, this matters: the policy prohibits AI agents from directly calling SAP APIs outside SAP-endorsed architectures. An agent that reads platform data sourced via a compliant integration pattern is not in scope of that prohibition. That is an architectural choice, not a workaround. |
| "How is this different from pointing Copilot at SAP?" | A third-party AI agent calling SAP APIs directly to answer questions would fall under Section 2.2.2 of SAP's API Policy: prohibited use for autonomous or generative AI systems that plan, select, or execute sequences of API calls. ServiceNow's approach separates the integration layer (Zero Copy Connector, published APIs, SAP-endorsed) from the AI layer (agent reads platform data). The integration is compliant. The agent never sees SAP. |
| "Is Entra ID integrated?" | Not in this demo. In production, ServiceNow uses the Entra ID / Azure AD spoke to provision accounts, assign licenses, and manage lifecycle events. The spoke is a pre-built integration available on the ServiceNow Store. |
| "Does the employee see all this?" | The employee sees their onboarding checklist and the AI Agent in Employee Center. They do not see the integration status workspace. They see outcomes: "your account is active," "your building pass is ready." The operational detail stays with HR. |
| "What about Machinery of Government changes?" | MOG changes are mass transfer events affecting hundreds of employees simultaneously. The same orchestration pattern applies, but with a bulk trigger and department-level clearance transfer coordination with AGSVA. That is a separate demo. |
| "Can this work with other ERP systems?" | Yes. The orchestration layer and HRSD capabilities are ERP-agnostic. Zero Copy Connector also supports Oracle, SAP SuccessFactors, and other ERP platforms. The seed data structure would change but the workflow does not. |

---

### Narrative Arc for 5-to-7-Minute Demo

| Time | What is on screen | What the presenter says |
|---|---|---|
| 0:00-0:30 | Slide: "Onboarding a cleared starter: current state versus future" (the slide Leo already has) | "Today, when a cleared starter joins your department, what happens? An email chain. A spreadsheet. Someone logs into myClearance. Someone logs into SAP. Someone calls Facilities. Someone emails the IT team. And the new starter waits. No one has a single view of whether this person is ready to start on Monday." |
| 0:30-1:00 | Open Workspace: Federal Onboarding Operations. Show ONB0001. All four cards in initial state. Integration Activity Log is empty. | "This is what the future looks like. One workspace. Four systems. Every integration status on one screen. And this log at the bottom: every time ServiceNow reaches out to an external system, it is recorded here. Watch." |
| 1:00-1:45 | Click "Verify Clearance". Integration log populates row by row over ~6 seconds. AGSVA card updates when flow completes. | "We verify Priya's NV1 clearance with AGSVA. Watch the activity log: connecting, querying her clearance record, validating the level and expiry, confirming the sponsorship transfer. Five steps, six seconds, fully auditable. This is the gate. Nothing else starts until clearance is green." |
| 1:45-2:45 | Click "Initiate Onboarding". 7 more log entries appear over ~8 seconds. SAP card updates. HRSD task list populates. | "Clearance is green. Now ServiceNow pulls Priya's details from SAP, creates her employee record, and triggers the onboarding lifecycle. Watch the log: retrieving from SAP, validating, creating the user, firing the lifecycle event. Every team that needs to act now has a task with a due date and an owner." |
| 2:45-3:30 | Click "Provision Identity". 6 more log entries. Entra card updates. | "Network account, email, GovTeams, MFA: provisioned in one flow to Entra ID. You can see each step in the log: account creation, license assignment, MFA enrolment." |
| 3:30-4:00 | Click "Request Building Access". 5 more log entries. Facilities card updates. | "Building access requested. Badge allocated. Zones assigned. She collects on Day 1." |
| 4:00-4:30 | Click "Mark Ready". 6 more log entries: cross-system readiness check. All green. | "Final check. ServiceNow queries all four systems one more time. AGSVA: pass. SAP: pass. Entra: pass. Facilities: pass. Four out of four. Priya can start Monday." |
| 4:30-5:45 | Switch persona to Priya Sharma. Open Employee Center. Show onboarding checklist. Open AI Agent. Run 4 exchanges. On Exchange 3 ("What team am I joining?"), pause and narrate the SAP policy point. | "Now let us switch to Priya. She sees her checklist. She has questions." [Exchanges 1-2: FAQ and network status.] Exchange 3: "Watch this. She asks what team she is joining and who her manager is. That answer comes from SAP employee master data. But the agent never called SAP. The data was brought into the platform via Zero Copy Connector, using SAP's published APIs. Under SAP's new API policy, that is not a detail. That is compliance." [Exchange 4: mandatory training.] |
| 5:45-6:15 | Back to the slide or workspace. Gesture at the integration log: ~30 entries. | "Same systems. Same data. Same sovereignty. Different experience layer. ServiceNow never owns the data. SAP stays the system of record. AGSVA stays the authority. Entra stays the identity provider. The AI agent answers employee questions using data from all four systems, without calling any of them directly. Under SAP's new API policy, that architecture is not optional. It is required." |
| 6:15-7:00 | Q&A | Take questions. Use the Limitations table for honest answers. |
