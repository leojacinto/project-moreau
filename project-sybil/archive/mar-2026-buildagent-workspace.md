# Approach 5: Build Agent Workspace (5 Prompts)

Everything built inside ServiceNow IDE using Build Agent prompts. No REST API, no SDK, no external code. This is the control group.

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
   - **Name:** `Travel Request Approach 5`
   - **Description:** `Build Agent workspace - entire app created via 5 AI prompts`
4. Click **Continue** → **Go to app**

---

## Step 2: Prompt Build Agent - Create the Data Model

Open Build Agent (the AI chat in ServiceNow IDE) and paste:

```
Create a new table called "Travel Request" that extends the Task table. Add these fields:

1. destination (String, 200 chars, mandatory) - travel destination city and country
2. departure_date (Date, mandatory) - when the trip starts
3. return_date (Date, mandatory) - when the trip ends
4. purpose (String, 1000 chars, mandatory) - business justification for the travel
5. estimated_cost (Currency, mandatory) - estimated trip cost in USD
6. travel_type (Choice field, mandatory) - choices: "Domestic", "International"
7. traveler (Reference to sys_user) - the person traveling
8. approval_status (Choice field) - choices: "Not Requested", "Requested", "Approved", "Rejected"

Set the number prefix to TRV. Make the table accessible from the left navigation under a new module group called "Travel Management".
```

Wait for Build Agent to finish. Verify the table appears in your app's tables list.

---

## Step 3: Prompt Build Agent - Create the UI (Workspace)

Paste this next:

```
Create a configurable workspace for the Travel Request table with:

1. A list view showing columns: Number, Destination, Departure Date, Return Date, Estimated Cost, State, Traveler
2. Default sort by created date, newest first
3. A record form with all custom fields organized in sections:
   - Section "Trip Details": destination, departure_date, return_date, travel_type
   - Section "Business Case": purpose, estimated_cost
   - Section "People": traveler, approval_status
4. State should show as colored indicators
5. Enable filtering and search on the list
```

---

## Step 4: Prompt Build Agent - Create Business Logic

Paste this:

```
Add these business rules to the Travel Request table:

1. "Set Default State" - Before Insert: if state is empty, set it to "Draft" (value: 1)
2. "Auto-set Traveler" - Before Insert: if traveler is empty, set it to the current user
3. "Validate Dates" - Before Insert/Update: if return_date is before departure_date, abort with message "Return date must be after departure date"
4. "Validate Cost" - Before Insert/Update: if estimated_cost is 0 or negative, abort with message "Estimated cost must be positive"
5. "Set Submitted" - Before Update: when state changes to "Submitted" (value: 2), set approval_status to "Requested"
```

---

## Step 5: Prompt Build Agent - Create UI Actions

Paste this:

```
Create these UI Actions for the Travel Request table:

1. "Submit Request" - visible when state is Draft. Sets state to "Submitted". Button style: primary.
2. "Approve" - visible when state is Submitted. Sets state to "Approved" and approval_status to "Approved". Button style: success. Requires role: approver_user.
3. "Reject" - visible when state is Submitted. Sets state to "Rejected" and approval_status to "Rejected". Should prompt for a rejection reason in the work notes. Button style: destructive.
4. "Mark Complete" - visible when state is Approved. Sets state to "Completed". Button style: default.
```

---

## Step 6: Prompt Build Agent - Seed Sample Data

Paste this:

```
Create 5 sample Travel Request records with realistic data:

1. TRV0001 - Tokyo, Japan, Apr 15–22 2026, "Q2 partner summit and vendor negotiations", $4,200, International, State: Approved
2. TRV0002 - London, UK, May 1–5 2026, "EMEA customer success kickoff", $3,800, International, State: Submitted  
3. TRV0003 - Sydney, Australia, Jun 10–14 2026, "APAC regional conference keynote", $5,100, International, State: Draft
4. TRV0004 - Berlin, Germany, Apr 28–30 2026, "Engineering offsite sprint planning", $2,900, International, State: Completed
5. TRV0005 - San Francisco, CA, May 20–22 2026, "Knowledge 2026 conference", $1,500, Domestic, State: Rejected
```

---

## Step 7: Verify

After all prompts are executed:

1. Open the workspace Build Agent created
2. Confirm 5 records appear in the list
3. Open TRV0003 (Draft) → click "Submit Request" → verify state changes
4. Open TRV0002 (Submitted) → click "Approve" → verify state changes
5. Try creating a new request with return date before departure → verify validation fires

---

## What to Compare

See [README.md](README.md) for the full side-by-side across all four approaches.
