# Corporate Travel Policy Agent — Build Prompt (v2)

> **Usage:** Paste everything inside the `---` fences below as your FIRST message in a new Build Agent conversation. This is the corrected v2 that incorporates all lessons learned from the initial build.

---

First, search the instance for "KhepriAgentPlaybook" using keyword_search with contentMode "full" and read the entire content. This is the Khepri field guide for building AI Agents. Then follow its Build Agent Procedure to build me the agent described below.

## Agent: Corporate Travel Policy Agent

**New scoped app**: `x_snc_travel_agent`
**Agent name**: Corporate Travel Policy Agent
**Agent role**: You are the Corporate Travel Policy Agent. You help employees submit travel requests, check them against company travel policy, and route them for the correct level of approval. You are precise about policy rules, helpful with guidance, and you always create the request record before evaluating it.

> ⚠️ **CRITICAL**: Use a UNIQUE agent name. Do NOT use "Travel Approval Agent" — it may collide with pre-existing agents on the instance. Use "Corporate Travel Policy Agent" exactly.

---

### Tables (4 tables, all in app scope)

**Table 1: `travel_policy_section`**
Stores the travel policy as discrete, searchable sections for RAG retrieval. Each record is one policy topic. Fields:

| Column | Type | Max Length | Purpose |
|--------|------|-----------|---------|
| section_id | String | 40 | Unique section identifier (e.g. "AIR_TRAVEL", "MEALS_PER_DIEM") |
| title | String | 200 | Section heading (e.g. "Air Travel Policy") |
| policy_text | String | 8000 | Full policy text for this section |
| category | String | 100 | Grouping category: approval, booking, air, ground, accommodation, meals, entertainment, expenses, safety, sustainability, violations |
| effective_date | String | 40 | Date this section took effect |

Seed data: 15 records. Use the travel policy sections from the attached `TRAVEL_POLICY_AGENT.md` file below. Each section in that file maps to one record. The `section_id`, `title`, `policy_text`, and `category` values are defined in the file. Set `effective_date` to "2026-04-01" for all.

**Table 2: `travel_request`**
Stores travel approval requests created by the agent. Fields:

| Column | Type | Max Length | Purpose |
|--------|------|-----------|---------|
| request_number | String | 40 | Auto-generated request ID (format: TR0001, TR0002...) |
| requester_name | String | 200 | Employee name |
| requester_email | String | 200 | Employee email |
| travel_type | String | 40 | "domestic" or "international" |
| destination | String | 200 | City and country |
| departure_date | String | 40 | YYYY-MM-DD |
| return_date | String | 40 | YYYY-MM-DD |
| business_purpose | String | 2000 | Justification for travel |
| estimated_airfare | String | 40 | Dollar amount |
| flight_class_requested | String | 40 | "economy", "premium_economy", "business" |
| estimated_flight_hours | String | 40 | Numeric, used for class eligibility |
| estimated_accommodation_per_night | String | 40 | Dollar amount |
| estimated_accommodation_nights | String | 40 | Numeric |
| ground_transport_type | String | 100 | "rental_car", "rideshare", "public_transport", "personal_vehicle" |
| estimated_ground_transport | String | 40 | Dollar amount |
| estimated_meals_total | String | 40 | Dollar amount |
| client_entertainment_required | String | 10 | "true" or "false" |
| estimated_entertainment | String | 40 | Dollar amount |
| total_estimated_cost | String | 40 | Calculated total |
| approval_status | String | 40 | "pending_review", "pending_manager", "pending_vp", "approved", "rejected" |
| policy_assessment | String | 4000 | Agent's policy compliance notes |
| approval_routing | String | 200 | Who needs to approve: "manager", "vp", "finance" |
| created_by_agent | String | 10 | "true" — marks agent-created records |

Seed data: 10 records with diverse scenarios:

1. TR0001 — Sarah Chen, domestic, Melbourne, economy, $1,220, approved, manager
2. TR0002 — James Park, international, Tokyo, business, $9,180, pending_vp, vp
3. TR0003 — Priya Sharma, domestic, Perth, business, $2,475, pending_review, vp (flagged: business class for 5hr flight, accommodation over cap)
4. TR0004 — David Liu, domestic, Brisbane, economy, $1,085, approved, manager
5. TR0005 — Emma Wilson, international, London, premium_economy, $8,885, pending_vp, vp (conference + entertainment)
6. TR0006 — Marcus Thompson, international, San Francisco, business, $9,780, pending_vp, vp (entertainment over per-person cap)
7. TR0007 — Anika Patel, domestic, Adelaide, economy, $725, approved, manager
8. TR0008 — Tom Nguyen, international, Seoul, premium_economy, $6,665, approved, vp
9. TR0009 — Sarah Chen, international, Jakarta, economy, $4,355, pending_manager, vp (repeat requester)
10. TR0010 — James Park, domestic, Canberra, economy, $1,055, approved, manager (repeat requester)

**Table 3: `travel_approval_rule`**
Stores structured approval rules the Evaluate tool uses programmatically. Fields:

| Column | Type | Max Length | Purpose |
|--------|------|-----------|---------|
| rule_id | String | 40 | Unique rule identifier |
| rule_name | String | 200 | Human-readable rule name |
| condition_field | String | 100 | Which request field to evaluate |
| condition_operator | String | 40 | "equals", "greater_than", "less_than", "contains" |
| condition_value | String | 200 | Threshold or match value |
| action | String | 40 | "flag", "require_approval", "auto_approve", "block" |
| approval_level | String | 40 | "manager", "vp", "finance", "none" |
| policy_reference | String | 100 | Which policy section this rule implements |
| message | String | 1000 | Message to include in assessment |

Seed data: 8 rules (unchanged from v1 — see original for full details)

**Table 4: `travel_expense_category`**
Stores per-diem rates and non-reimbursable items. (10 seed records — unchanged from v1)

---

### Tools (4 tools)

**Tool 1: Search Travel Policy**
- TYPE: rag
- WIRING: Record() M2M (never inline)
- BACKING: RAG search pipeline against `travel_policy_section` table
- RAG INDEXED FIELDS: `title` (role: title), `policy_text` (role: text)
- displayOutput: true, outputTransformationStrategy: custom

**Tool 2: Create Travel Request**
- TYPE: script
- WIRING: inline in AiAgent tools[]
- displayOutput: true, outputTransformationStrategy: **custom** (NOT "none")
- SCRIPT: **Full GlideRecord logic inline** — do NOT call a ScriptInclude. Put all logic directly in the .server.js file.
- INPUTS: requester_name (mandatory), requester_email (mandatory), travel_type (mandatory), destination (mandatory), departure_date (mandatory), return_date (mandatory), business_purpose (mandatory), plus optional cost fields
- LOGIC:
  1. Generate next request_number by querying travel_request, **ordering by request_number DESC** (NOT sys_created_on)
  2. Calculate total_estimated_cost by summing all cost fields
  3. Set approval_status = "pending_review", created_by_agent = "true"
  4. Insert record
  5. Build record_link using `gs.getProperty('glide.servlet.uri')`
  6. Return JSON with request_number, sys_id, record_link, summary, cost_breakdown

**Tool 3: Evaluate Travel Request**
- TYPE: script
- WIRING: inline in AiAgent tools[]
- displayOutput: true, outputTransformationStrategy: **custom**
- SCRIPT: **Full GlideRecord logic inline**
- INPUTS: request_number (mandatory)
- LOGIC:
  1. Look up travel_request by request_number
  2. Query ALL records from travel_approval_rule
  3. Evaluate each rule condition against request fields
  4. **For date comparisons**: Use `GlideDateTime.subtract()` NOT `gs.dateDiff()` (gs.dateDiff is blocked in scoped apps)
  5. For accommodation rules, filter by matching travel_type (RULE_ACCOM_DOM for domestic, RULE_ACCOM_INTL for international)
  6. Determine highest approval level (vp > manager > none)
  7. Update request record with policy_assessment, approval_routing, approval_status
  8. Return JSON with record_link, detailed findings, next_steps

**Tool 4: Look Up Travel Request**
- TYPE: script
- WIRING: inline in AiAgent tools[]
- displayOutput: true, outputTransformationStrategy: **custom**
- SCRIPT: **Full GlideRecord logic inline**
- LOGIC: Return record_link, dollar-formatted amounts, full details

---

### Agent Instructions (versionDetails)

```
You are the Corporate Travel Policy Agent. You help employees submit and manage corporate travel requests.

CRITICAL RULES:
- You MUST use your tools to perform actions. NEVER fabricate results, approval statuses, or record details.
- If a tool returns an error, report the error to the user. Do NOT make up a successful result.
- Every tool response contains a record_link field. ALWAYS include this link in your response so the user can open the record directly.
- Show the actual data returned by tools: request numbers, dollar amounts, policy flags, approval routing. Do not summarize vaguely.

STEP 1 — GATHER DETAILS:
[... same as v1 ...]

STEP 2 — SEARCH POLICY FOR GUIDANCE:
[... same as v1 ...]

STEP 3 — CREATE THE REQUEST:
Once you have all details, run Create Travel Request. From the tool response:
- Show the request_number, total_estimated_cost, and the full cost_breakdown
- Include the record_link so the user can click to open the record
- Show the request summary (destination, dates, flight class, etc.)

STEP 4 — EVALUATE AGAINST POLICY:
Immediately after creating, run Evaluate Travel Request. From the tool response:
- List each flagged_item with its rule_name, message, and field value vs threshold
- Show the final approval_status and approval_routing
- Include the record_link
- Clearly categorize: within policy (green), flagged (amber), requires exception (red)

STEP 5 — STATUS CHECKS:
- For single results: show full details including record_link
- For list results: show a summary table with individual record_links
```

---

### Workspace

Create a workspace at path `travel-management`:
- Tables: travel_request, travel_policy_section, travel_approval_rule, travel_expense_category
- List menu: 2 categories ("Travel Requests" with All/Pending/Approved/Flagged views, "Policy & Rules" with Policy Sections/Approval Rules/Expense Categories)
- Dashboard: 6 widgets (Total Requests, Pending Approval, Domestic vs International donut, By Status bar, Top Destinations bar, Flight Class pie)
- Roles: x_snc_scope.user (canvas_user), x_snc_scope.admin (canvas_admin)
- ACL: ux_route read on travel-management.*

---

### Build Order

```
1. Tables: travel_policy_section (15 seed records from TRAVEL_POLICY_AGENT.md)
2. Tables: travel_request (10 seed records)
3. Tables: travel_approval_rule (8 seed records)
4. Tables: travel_expense_category (10 seed records)
5. ScriptIncludes: TravelAgentCreateRequest, TravelAgentEvaluateRequest, TravelAgentLookupRequest
6. RAG pipeline: datasource + field attributes + semantic index + snippet config + search source + search profile + search application + profile-source M2M + auto-publish tag
7. RAG tool record: sn_aia_tool (type: rag)
8. Cross-scope privileges: sn_aia tables AND sn_ais tables
9. AiAgent definition: Corporate Travel Policy Agent with 3 inline script tools
   - Tool scripts contain FULL logic inline (no ScriptInclude calls)
   - displayOutput: true, outputTransformationStrategy: 'custom' on ALL tools
   - executionMode: 'autopilot', maxAutoExecutions: 10
10. Record() M2M: RAG tool wiring to agent
11. Workspace: list-menu + workspace + dashboard
12. Build + Install + Verify
```

---

### Critical Build Gotchas (v2 additions)

| Issue | Wrong | Right |
|-------|-------|-------|
| Agent name | "Travel Approval Agent" | Use a unique name like "Corporate Travel Policy Agent" |
| Date comparison in scoped app | `gs.dateDiff()` | `GlideDateTime.subtract()` → `.getNumericValue() / 86400000` |
| Tool script architecture | `new x_snc_scope.ScriptInclude()` | Full GlideRecord logic inline in .server.js |
| Tool output display | `displayOutput: true` + `outputTransformationStrategy: 'none'` | `displayOutput: true` + `outputTransformationStrategy: 'custom'` |
| Request number generation | `orderByDesc('sys_created_on')` | `orderByDesc('request_number')` |
| Tool output content | Return minimal JSON | Include `record_link`, `cost_breakdown`, dollar formatting |
| Agent instructions | Generic steps | Add CRITICAL RULES anti-hallucination section |

---

### Post-Install Manual Steps

1. **Define user access + data access** on the agent record
2. **Set proficiency** on the agent record (recommend: "Expert in corporate travel policy. Evaluates requests against structured approval rules.")
3. **Trigger reindex** in AI Search Admin Console for the travel_policy_section datasource
4. **Configure indexed source field selection** — ensure title and policy_text are selected
5. **Assign roles** to test users: x_snc_scope.user or x_snc_scope.admin
6. **Test the agent** using prompts from README.md
