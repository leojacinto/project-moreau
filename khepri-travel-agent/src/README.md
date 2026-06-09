# Corporate Travel Policy Agent

A ServiceNow AI Agent that manages corporate travel requests end-to-end: policy guidance, request creation, automated policy evaluation, and status tracking. Built with Now SDK Fluent API.

## Quick Links

| Resource | URL |
|----------|-----|
| **Agent Playground** | `/now/agent-studio/agent-setup/{agent_sys_id}` |
| **Workspace** | `/now/travel-management/home` |
| **UI Builder** | `/now/builder/ui/experience/{workspace_sys_id}` |
| **Travel Requests** | `/x_snc_travel_a7t2p_travel_request_list.do` |
| **Policy Sections** | `/x_snc_travel_a7t2p_travel_policy_section_list.do` |
| **Approval Rules** | `/x_snc_travel_a7t2p_travel_approval_rule_list.do` |

> **Agent name on instance**: `Corporate Travel Policy Agent` (renamed from "Travel Approval Agent" to avoid collision — see Lessons Learned)

---

## Architecture

```
User ──► AI Agent (sn_aia) ──► 4 Tools
                                  │
                   ┌──────────────┼──────────────┐──────────────┐
                   ▼              ▼              ▼              ▼
            Search Policy    Create Request  Evaluate Request  Lookup Request
            (RAG / AIS)     (inline script) (inline script)   (inline script)
                   │              │              │              │
                   ▼              ▼              ▼              ▼
         travel_policy_    travel_request   travel_approval_  travel_request
         section (read)    (insert)         rule (read) +     (read)
                                            travel_request
                                            (update)
```

### Tables
- **travel_policy_section** — 15 policy sections for RAG retrieval
- **travel_request** — Travel requests created/evaluated by the agent
- **travel_approval_rule** — 8 structured rules for automated evaluation
- **travel_expense_category** — 10 per-diem rates and non-reimbursable items

### Tools
1. **Search Travel Policy** — RAG tool backed by AI Search semantic index
2. **Create Travel Request** — Creates record, calculates costs, returns link
3. **Evaluate Travel Request** — Evaluates against all rules, updates record
4. **Look Up Travel Request** — Queries by request number or email

---

## Test Prompts

Use these in the **Corporate Travel Policy Agent** playground to validate all capabilities end-to-end.

### Prompt 1: Full Lifecycle (Create → Evaluate → Report)
Tests: Create tool, Evaluate tool, policy rule matching, record creation

> I need to submit a travel request. My name is Alex Rivera, email alex.rivera@company.com. International trip to Munich, Germany from 2026-09-15 to 2026-09-19 for the SAP Integration Summit. Airfare $5,200, requesting business class, 18-hour flight. Hotel $260/night for 4 nights. Public transport $80. Meals $600. No client entertainment. Create the request and evaluate it against policy.

**Expected behavior**: Creates TR0011+. Evaluate flags: international → VP required, business class → VP required, accommodation $260 > $250 cap → flagged. Should show record link and detailed findings.

---

### Prompt 2: Policy Question Before Submitting
Tests: Search Travel Policy RAG tool, policy retrieval accuracy

> I'm planning a trip to New York next month for a client meeting. The flight is about 16 hours. Can I fly business class? And what's the accommodation cap for international travel?

**Expected behavior**: Agent searches policy, returns Air Travel section (business class = VP approval, premium economy auto-eligible for 6hr+ flights) and Accommodation section ($250 USD international cap). Should advise before asking for request details.

---

### Prompt 3: Simple Domestic Within Policy
Tests: Create tool with all-green evaluation, manager routing

> Submit a travel request for me. Name: Lisa Chang, email lisa.chang@company.com. Domestic trip to Sydney from 2026-10-01 to 2026-10-03. Team planning workshop. Airfare $350, economy, 1.5 hours. Hotel $200/night, 2 nights. Rideshare $70. Meals $250. No entertainment. Create and evaluate.

**Expected behavior**: Creates record. Evaluate returns all within policy — no flags, manager routing. Approval status = pending_manager.

---

### Prompt 4: Status Check by Email (Multiple Results)
Tests: Lookup tool with email search, multi-record response

> Can you look up all travel requests for sarah.chen@company.com?

**Expected behavior**: Returns 2 requests (TR0001 Melbourne + TR0009 Jakarta) with summary of each including status, destination, cost, and individual record links.

---

### Prompt 5: Status Check by Request Number (Single Result)
Tests: Lookup tool with request number, full detail response

> What's the status of travel request TR0006?

**Expected behavior**: Returns Marcus Thompson's San Francisco trip with full details — $9,780, business class, pending_vp, policy assessment showing all flags.

---

### Prompt 6: Entertainment Policy Edge Case
Tests: Search tool + policy nuance, entertainment rules

> We're hosting a dinner for 3 clients in Tokyo. Budget is about $350. Is that within our entertainment policy? What approvals do I need?

**Expected behavior**: Searches entertainment policy. Returns: $100/person cap, 3 attendees × $100 = $300 cap, $350 exceeds it. Needs manager pre-approval. Should explain the per-person calculation.

---

### Prompt 7: Sustainability / Cost Consciousness
Tests: Search tool for sustainability policy, proactive guidance

> I need to fly to Perth for a 2-hour internal meeting. Is there any policy guidance on whether I should travel or do it virtually?

**Expected behavior**: Searches sustainability guidelines. Returns section about considering virtual meetings, carbon offset program, domestic travel sustainability recommendations.

---

### Prompt 8: Multi-Step Conversation (Gather → Advise → Create → Evaluate)
Tests: Full 5-step workflow in conversational mode

> I want to submit a travel request but I'm not sure about some things. I'm going to Singapore for a week-long partner engagement. Flight is about 8 hours. Should I go premium economy or business?

**Expected behavior**: Agent searches policy first (premium economy auto-eligible for 8hr flight, business requires VP). Then asks for remaining details (name, email, dates, costs). After user provides them, creates and evaluates the request.

---

## Verification Checklist

After running any Create prompt, verify at `/x_snc_travel_a7t2p_travel_request_list.do`:

- [ ] New record exists with correct request number
- [ ] `total_estimated_cost` is calculated correctly
- [ ] `policy_assessment` is populated after evaluation
- [ ] `approval_status` matches the expected routing (pending_manager, pending_vp)
- [ ] `approval_routing` is set correctly (manager, vp)
- [ ] Agent response includes record link
- [ ] Agent response shows cost breakdown and policy findings
- [ ] No raw JSON visible in the agent response

---

## Lessons Learned

Hard-won fixes from building and debugging this agent. Read these before rebuilding.

### 1. Duplicate Agent Names Will Silently Route to the Wrong Agent
**Problem**: The instance had a pre-existing "Travel Approval Agent" in scope `x_snc_trvl_bkg`. Our agent had the same name. Agent Studio silently routed conversations to the wrong one.
**Fix**: Renamed to "Corporate Travel Policy Agent". **Always use unique agent names.**

### 2. gs.dateDiff() Is Not Allowed in Scoped Apps
**Problem**: `gs.dateDiff()` throws `MethodNotAllowedException` at runtime in scoped app scripts.
**Fix**: Use `GlideDateTime.subtract()` instead:
```javascript
var duration = GlideDateTime.subtract(today, departure);
var daysUntil = Math.floor(duration.getNumericValue() / 86400000);
```

### 3. Inline Tool Scripts — Don't Call ScriptIncludes Cross-Scope
**Problem**: Tool scripts using `new x_snc_scope.ScriptIncludeName()` may fail silently when the tool executes in a different scope context.
**Fix**: Put all GlideRecord logic directly in the inline tool script (the `.server.js` file). Eliminate the cross-scope ScriptInclude call entirely. The ScriptIncludes can still exist for other callers, but the tool scripts should be self-contained.

### 4. displayOutput + outputTransformationStrategy Must Be Paired Correctly
**Problem**: `displayOutput: true` + `outputTransformationStrategy: 'none'` dumps raw JSON to the user. `displayOutput: false` shows nothing at all.
**Fix**: Use `displayOutput: true` + `outputTransformationStrategy: 'custom'`. The agent LLM receives the tool output and transforms it into a formatted response.

### 5. Request Number Generation — Order by the Right Field
**Problem**: Ordering by `sys_created_on DESC` found seed records created in the wrong order, causing duplicate request numbers (two TR0002s).
**Fix**: Order by `request_number DESC` to always find the highest existing number.

### 6. Cross-Scope Privileges Are Needed for sn_aia and sn_ais Tables
**Problem**: The app creates records in `sn_aia` (agent, tool, M2M) and `sn_ais` (datasource, search source, profile) tables at install time.
**Fix**: Create explicit `CrossScopePrivilege` records for create/read/write on all target tables in both scopes.

### 7. Agent Instructions Must Include Anti-Hallucination Rules
**Problem**: Without explicit instructions, the LLM may fabricate results instead of using tools, especially when tools fail silently.
**Fix**: Add a CRITICAL RULES section at the top of instructions:
- "You MUST use your tools. NEVER fabricate results."
- "If a tool returns an error, report the error. Do NOT make up a success."
- "Always include the record_link from tool output."

### 8. Tool Output Should Include Instance Links
**Problem**: The agent couldn't provide clickable record links because the tool output didn't include URLs.
**Fix**: Use `gs.getProperty('glide.servlet.uri')` in tool scripts to build full record URLs. Return `record_link` in every tool response.

### 9. Seed Data Matters for Dashboard Charts
**Problem**: 3 seed records produce boring dashboard charts. All the same status, minimal variety.
**Fix**: Use 10+ seed records with diversity across: travel types (domestic/international), statuses (approved/pending_manager/pending_vp/pending_review), destinations, flight classes, cost ranges, and repeat requesters.

### 10. Workspace Requires Both Roles AND Dashboard
**Problem**: Workspace won't function without a dashboard, even though the Workspace plugin doesn't reference it directly.
**Fix**: Always create the dashboard with `visibilities` referencing the workspace. Also create roles with `canvas_user`/`canvas_admin` containment and an ACL matching `{path}.*`.

---

## File Structure

```
src/
├── README.md                                    ← You are here
├── build_agent_prompt.md                        ← One-shot build prompt
├── travel_policy_agent.md                       ← Policy content reference
├── fluent/
│   ├── agents/
│   │   ├── travel-approval-agent.now.ts         AiAgent definition + 3 inline tools
│   │   └── scripts/
│   │       ├── create-travel-request.server.js  Inline tool: full GlideRecord logic
│   │       ├── evaluate-travel-request.server.js
│   │       ├── lookup-travel-request.server.js
│   │       ├── travel-applicability.server.js
│   │       └── travel-context-processing.server.js
│   ├── cross-scope/
│   │   ├── aia-privileges.now.ts                sn_aia tables (agent, tool, M2M, config)
│   │   └── ais-privileges.now.ts                sn_ais tables + global search config
│   ├── script-includes/
│   │   └── travel-agent-tools.now.ts            ScriptInclude definitions (backup callers)
│   ├── search/
│   │   └── travel-policy-pipeline.now.ts        RAG pipeline + tool + M2M wiring
│   ├── tables/
│   │   ├── travel-policy-section.now.ts         15 policy sections
│   │   ├── travel-request.now.ts                Travel requests + 10 seed records
│   │   ├── travel-approval-rule.now.ts          8 approval rules
│   │   └── travel-expense-category.now.ts       10 expense categories
│   └── workspaces/
│       └── travel-management/
│           ├── workspace.now.ts                 Workspace + route ACL
│           ├── list-menu.now.ts                 Nav: 2 categories, 7 lists
│           └── dashboard.now.ts                 6 widgets (scores, bars, donut, pie)
└── server/
    └── script-includes/
        ├── travel-agent-create-request.js       Standalone ScriptInclude
        ├── travel-agent-evaluate-request.js
        └── travel-agent-lookup-request.js
```
