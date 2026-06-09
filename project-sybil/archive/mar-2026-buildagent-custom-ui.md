# Approach 4: Build Agent Custom UI - Single Prompt

Everything built inside ServiceNow IDE using **one Build Agent prompt**. No REST API, no SDK, no external code. Tests whether Build Agent can deliver a custom UI Page (not Workspace) comparable to Approach 1 from a single natural-language description.

---

## Prerequisites

- Instance: (use .env)
- Login as **admin**
- Now Assist for Creator must be installed and activated (App id: `sn_now_creator`)

---

## Step 1: Create the App

1. Go to **ServiceNow IDE** → `/sn_glider_app/ide.do`
2. Click **Create Workspace**
3. Fill in:
   - **Name:** `Travel Request Approach 4`
   - **Description:** `Single-prompt Build Agent - custom UI Page from one prompt`
4. Click **Continue** → **Go to Build Agent Prompt**

---

## Step 2: Single Prompt - Paste Into Build Agent

```
Build a complete Travel Request application as a modern, dynamic UI Page (not Workspace) with the following:

TABLE - Create a table called "Travel Request" extending Task with:
- destination (String, 256 chars, mandatory) - city and country
- departure_date (Date, mandatory)
- return_date (Date, mandatory)
- purpose (String, 1000 chars, mandatory) - business justification
- estimated_cost (Currency, mandatory) - in USD
- travel_type (Choice: "Domestic", "International", mandatory)
- traveler (Reference to sys_user)
Number prefix: TRV

UI PAGE - Build a modern, single-page React UI (not Workspace) with:
- Dashboard landing section showing count breakdown by state (draft, submitted, approved, rejected, completed)
- List view: columns Number, Destination, Departure Date, Return Date, Estimated Cost, State, Traveler - sorted newest first
- "New Request" button above the list to create a new travel request
- Record form with sections:
  - "Trip Details": destination, departure_date, return_date, travel_type
  - "Business Case": purpose, estimated_cost
  - "People": traveler
- Search and filtering enabled on the list
- State shown as colored indicators
- All CRUD operations: user can create, view, edit, and delete requests from the UI

BUSINESS RULES:
- Before Insert: default state to Draft if empty
- Before Insert: set traveler to current user if empty
- Before Insert/Update: abort if return_date < departure_date - message "Return date must be after departure date"
- Before Insert/Update: abort if estimated_cost <= 0 - message "Estimated cost must be positive"

UI ACTIONS:
- "Submit Request" - visible when Draft, sets state to Submitted (primary style)
- "Approve" - visible when Submitted, sets state to Approved (success style)
- "Reject" - visible when Submitted, sets state to Rejected (destructive style), prompt for reason in work notes
- "Mark Complete" - visible when Approved, sets state to Completed

SAMPLE DATA - Create 5 records:
1. Tokyo, Japan - Apr 15–22 2026 - "Q2 partner summit" - $4,200 - International - Approved
2. London, UK - May 1–5 2026 - "EMEA customer success kickoff" - $3,800 - International - Submitted
3. Sydney, Australia - Jun 10–14 2026 - "APAC regional conference" - $5,100 - International - Draft
4. Berlin, Germany - Apr 28–30 2026 - "Engineering offsite" - $2,900 - International - Completed
5. San Francisco, CA - May 20–22 2026 - "Knowledge 2026" - $1,500 - Domestic - Rejected

REQUIREMENTS:
- Do NOT use Workspace or classic UI. Build as a modern UI Page using React and ServiceNow Horizon Design System.
- The UI must allow users to create, view, edit, and delete Travel Requests.
- All actions (submit, approve, reject, complete) must be available in the UI.
- The "New Request" action must be visible and accessible from the main UI.
- Use lucide-react icons for state indicators and dashboard.
- All logic, validation, and UI must be built in a single prompt.
```

---

## Step 3: Verify

After Build Agent finishes:

1. Open the UI Page it created
2. Confirm 5 records in the list
3. Click "New Request" → create a travel request → verify it appears
4. Open the Draft record → click "Submit Request" → verify state changes
5. Open the Submitted record → click "Approve" → verify
6. Create a new request with return date before departure → verify validation fires
7. Check the dashboard shows state counts
8. Delete a draft record → verify it's removed

---

## What This Tests

Approach 5 used 5 prompts and delivered a Workspace. Approach 4 uses 1 prompt and targets a custom UI Page - the same delivery method as Approach 1 (REST), but built entirely by Build Agent.

| | **Approach 1 (REST)** | **Approach 4 (Build Agent × 1)** | **Approach 5 (Build Agent × 5)** |
|---|---|---|---|
| **Prompts/iterations** | 4 failed + 1 working | 1 prompt | 5 prompts |
| **Delivery** | Jelly UI Page | React UI Page | Workspace |
| **UI author** | Claude Opus (hand-coded) | Build Agent (generated) | Build Agent (generated) |

If Approach 4 succeeds, Build Agent can match the REST route's custom UI output from a single prompt - making the multi-hour REST iteration path even harder to justify.
