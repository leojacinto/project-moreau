# TRAVEL_POLICY_AGENT.md (v2)

# Corporate Travel Policy — Agent Knowledge Base

**Version:** 2.0
**Effective Date:** 2026-04-01
**Policy Owner:** Finance & Operations
**Agent Name:** Corporate Travel Policy Agent (NOT "Travel Approval Agent" — see implementation notes)
**Format:** Each section below maps to one `travel_policy_section` seed record. The agent's RAG pipeline indexes these sections so the agent can retrieve and cite specific policy rules when processing requests.

---

## Implementation Notes (v2 — Lessons from Production)

### Agent Naming
Use `Corporate Travel Policy Agent` as the agent name. Do NOT use "Travel Approval Agent" — it will collide with pre-existing agents on shared instances and cause silent routing failures.

### Tool Script Architecture
All 3 script tools (Create, Evaluate, Lookup) should contain **full GlideRecord logic inline** in their `.server.js` files. Do NOT call ScriptIncludes cross-scope via `new x_snc_scope.ClassName()` — this can fail silently in the tool execution context.

### Tool Output Configuration
All tools must use `displayOutput: true` + `outputTransformationStrategy: 'custom'`. This hides raw JSON and lets the LLM format a human-readable response. Using `'none'` dumps raw JSON. Using `displayOutput: false` shows nothing.

### Scoped App API Restrictions
- `gs.dateDiff()` is **blocked** in scoped apps. Use `GlideDateTime.subtract()` instead.
- Always return `record_link` from tools using `gs.getProperty('glide.servlet.uri')`.
- Order request number generation by `request_number DESC`, not `sys_created_on DESC`.

### Agent Instructions Must Include Anti-Hallucination Rules
Add a CRITICAL RULES section at the top of the agent's versionDetails instructions:
```
CRITICAL RULES:
- You MUST use your tools. NEVER fabricate results.
- If a tool returns an error, report the error. Do NOT make up a success.
- Always include the record_link from tool output in your response.
- Show actual data: request numbers, dollar amounts, policy flags. Do not summarize vaguely.
```

### Seed Data
Use 10+ travel request seed records with diversity across: travel types, statuses, destinations, flight classes, cost ranges, and repeat requesters. This makes dashboard charts meaningful.

### Workspace
Always create a workspace with dashboard (required for workspace to function), list-menu, roles (canvas_user/canvas_admin), and route ACL matching `{path}.*`.

---

## Section Map

| # | section_id | category | title |
|---|-----------|----------|-------|
| 1 | PURPOSE_AND_SCOPE | approval | Purpose and Scope |
| 2 | TRAVEL_APPROVAL | approval | Travel Approval Requirements |
| 3 | BOOKING_PROCEDURES | booking | Booking Procedures |
| 4 | AIR_TRAVEL | air | Air Travel Policy |
| 5 | GROUND_TRANSPORT | ground | Ground Transportation Policy |
| 6 | ACCOMMODATION | accommodation | Accommodation Policy |
| 7 | MEALS_PER_DIEM | meals | Meals and Daily Expense Allowances |
| 8 | CLIENT_ENTERTAINMENT | entertainment | Client Entertainment Policy |
| 9 | EXPENSE_REPORTING | expenses | Expense Reporting Requirements |
| 10 | NON_REIMBURSABLE | expenses | Non-Reimbursable Expenses |
| 11 | TRAVEL_SAFETY | safety | Travel Safety and Insurance |
| 12 | SUSTAINABILITY | sustainability | Sustainability Guidelines |
| 13 | POLICY_VIOLATIONS | violations | Policy Violations |
| 14 | EXTENDED_STAY | accommodation | Extended Stay and Serviced Apartments |
| 15 | APPROVAL_ROUTING | approval | Approval Routing Matrix |

---

## SECTION 1: PURPOSE_AND_SCOPE
**category:** approval
**title:** Purpose and Scope

This policy establishes guidelines and procedures for all business-related travel to ensure employee safety, cost efficiency, and consistent practices across the organisation. It applies to all full-time, part-time, and contract employees travelling on company business, whether domestic or international. All travel must comply with this policy. Exceptions require written pre-approval from the appropriate authority as defined in the Approval Routing Matrix section. The Travel Approval Agent uses this policy as its authoritative source when processing travel requests.

---

## SECTION 2: TRAVEL_APPROVAL
**category:** approval
**title:** Travel Approval Requirements

All business travel must be pre-approved before any bookings are made. Domestic travel requires direct manager approval. International travel requires VP-level approval or above. Conference or event attendance requires manager approval and a brief justification outlining expected business value. Approval requests must be submitted at least 10 business days in advance for domestic travel and 20 business days for international travel. Late submissions may still be processed but are flagged for review and may experience delays. Emergency travel (unplanned, business-critical) may be submitted with less notice but requires same-day manager notification and retrospective approval documentation within 3 business days.

---

## SECTION 3: BOOKING_PROCEDURES
**category:** booking
**title:** Booking Procedures

All travel must be booked through the company's designated travel management platform. Personal booking outside the platform will not be reimbursed unless pre-approved in writing by the Finance team. Employees should book the most cost-effective options that reasonably meet business needs. Loyalty programme preferences are permitted provided they do not result in materially higher costs. Flights should be booked at least 14 days in advance when possible to secure lower fares. Corporate discount codes and preferred supplier agreements should be used where available.

---

## SECTION 4: AIR_TRAVEL
**category:** air
**title:** Air Travel Policy

Flights under 6 hours: Economy class only. Flights 6 hours or longer: Premium economy is permitted without additional approval. Business class: Requires VP-level approval and is generally reserved for executive leadership or client-facing obligations where arrival condition materially affects business outcomes. First class: Not permitted under any circumstances. Employees should book flights at least 14 days in advance when possible to secure lower fares. Preferred airlines and corporate discount codes should be used where available. Seat selection and standard checked baggage fees are reimbursable. Excess baggage fees require justification. Flight change fees are reimbursable when changes are business-driven; personal convenience changes are not reimbursable.

---

## SECTION 5: GROUND_TRANSPORT
**category:** ground
**title:** Ground Transportation Policy

Rental cars: Mid-size category or below. Full insurance coverage must be selected. Fuel-efficient or electric vehicles are preferred. Premium or luxury vehicles are not permitted without VP approval. Rideshare and taxis: Permitted for airport transfers and local business travel. Standard service tiers only. Premium tiers (e.g. Black, Lux) require written justification and manager approval. Personal vehicles: Reimbursed at the current government-published mileage rate. Toll and parking costs are reimbursable with receipts. Public transport: Encouraged where practical and fully reimbursable. This includes trains, buses, metro, and airport shuttles. Always the preferred option where time-practical.

---

## SECTION 6: ACCOMMODATION
**category:** accommodation
**title:** Accommodation Policy

Nightly rate cap: Up to $250 AUD per night for domestic travel, or $250 USD equivalent per night for international travel, excluding taxes and mandatory resort fees. Hotels should be selected based on proximity to the business venue, safety rating, and value. Preferred hotel chains with corporate rates should be used where available. Incidentals such as minibar, in-room entertainment, and laundry are not reimbursable unless the trip exceeds 5 consecutive nights, at which point a reasonable laundry allowance applies. Room service is permitted but counts against the daily meal per-diem. Rate exceptions above the cap require manager pre-approval with documented justification (e.g. conference hotel block, safety considerations in the area, no alternatives within cap radius).

---

## SECTION 7: MEALS_PER_DIEM
**category:** meals
**title:** Meals and Daily Expense Allowances

Daily meal and incidental allowances follow a per-diem model. Breakfast: $25 AUD domestic, $25 USD international. Lunch: $30 AUD domestic, $30 USD international. Dinner: $50 AUD domestic, $50 USD international. Incidentals: $20 AUD domestic, $20 USD international. Daily total: $125 AUD domestic, $125 USD international. The per-diem is a daily cap, not an entitlement. Employees claim actual spend up to the cap. Receipts are required for individual items over $25. Alcohol is not reimbursable except during pre-approved client entertainment. When meals are provided by the event, conference, or client, the per-diem for that meal is not claimable. Team meals where multiple employees are present should be claimed by the most senior attendee to avoid duplicate claims.

---

## SECTION 8: CLIENT_ENTERTAINMENT
**category:** entertainment
**title:** Client Entertainment Policy

Client entertainment expenses require prior manager approval and must include: business purpose of the meeting, names and titles of all attendees (both company and client), itemised receipt, and clear connection to a business opportunity or relationship. A per-person cap of $100 applies unless a specific exception is approved by a VP or above. Entertainment venues should be professional and appropriate. Alcohol may be reimbursed as part of client entertainment only, within the per-person cap, and only when the primary purpose of the event is a business meal or meeting. Entertainment of prospects where no existing relationship exists requires VP pre-approval. Internal-only entertainment (team dinners, celebrations) is not covered under this policy and falls under the separate team events budget.

---

## SECTION 9: EXPENSE_REPORTING
**category:** expenses
**title:** Expense Reporting Requirements

All travel expenses must be submitted within 10 business days of trip completion via the company expense management system. Submissions must include: original itemised receipts (digital copies accepted), currency conversion documentation for international expenses (use the exchange rate on the date of the transaction), and the approved travel request reference number linking back to the pre-approved request. Late submissions beyond 30 days may not be reimbursed without VP-level exception approval. Expenses submitted without a matching pre-approved travel request will be returned for correction. Managers must review and approve expense reports within 5 business days of submission.

---

## SECTION 10: NON_REIMBURSABLE
**category:** expenses
**title:** Non-Reimbursable Expenses

The following expenses are not eligible for reimbursement under any circumstances: personal entertainment, sightseeing, or excursions; airline lounge memberships (unless pre-approved for frequent travellers completing more than 12 flights per quarter); travel insurance purchased independently (the company provides coverage); fines, penalties, or parking violations; upgrades beyond policy guidelines without prior approval; expenses for accompanying family members or companions; loss or theft of personal belongings; gym or spa facilities at hotels; in-room movies or entertainment (unless trip exceeds 5 nights); personal phone calls beyond reasonable business communication; gifts for clients (covered under a separate gifts policy); charitable donations made during travel.

---

## SECTION 11: TRAVEL_SAFETY
**category:** safety
**title:** Travel Safety and Insurance

The company provides comprehensive travel insurance covering medical emergencies, trip cancellation, and lost luggage for all approved business travel. Employees must: register all international trips with the company's travel security provider at least 5 business days before departure; review destination-specific safety advisories before departure; carry emergency contact details for the company's 24/7 travel assistance line; comply with all government travel advisories. Travel to regions under a government "Do Not Travel" advisory is prohibited without CEO-level exception. Travel to regions under "Reconsider Your Need to Travel" advisories requires VP approval and completion of a risk assessment form. Employees must maintain communication with their manager during international travel and report any safety concerns immediately through the travel assistance line.

---

## SECTION 12: SUSTAINABILITY
**category:** sustainability
**title:** Sustainability Guidelines

The company is committed to reducing the environmental impact of business travel. Before booking travel, employees should consider whether a virtual meeting could achieve the same business outcome. If travel is necessary: choose direct flights over connections where cost-comparable (direct flights typically produce fewer emissions); select hotels with recognised sustainability certifications; opt for electric or hybrid rental vehicles when available at comparable rates; use public transport where time-practical; combine multiple meetings into a single trip where possible to reduce total travel frequency. For domestic trips under 4 hours by train, rail travel is preferred over flying where schedules permit. The company tracks aggregate travel emissions quarterly and publishes departmental comparisons to encourage awareness.

---

## SECTION 13: POLICY_VIOLATIONS
**category:** violations
**title:** Policy Violations

Non-compliance with this policy may result in: first instance — denial of expense reimbursement for the non-compliant items and a documented conversation with the employee's manager; repeated violations — formal performance management action and temporary suspension of travel approval privileges; wilful or fraudulent violations — immediate disciplinary action up to and including termination, and potential referral for legal review. Disputes should be raised with the employee's manager in the first instance and escalated to Finance if unresolved within 5 business days. Employees may also raise concerns through the company's anonymous ethics hotline. This policy is reviewed annually by Finance and Operations.

---

## SECTION 14: EXTENDED_STAY
**category:** accommodation
**title:** Extended Stay and Serviced Apartments

For trips of 5 or more consecutive nights, employees should explore serviced apartments or extended-stay hotel options, which typically offer significant cost savings over standard hotel rates for longer durations. Extended stay accommodation often includes kitchen facilities, which can reduce meal costs. When an extended-stay option is selected at a rate below the nightly cap, the cost savings are noted in the travel request assessment. Sharing arrangements are not required but are encouraged for team travel where appropriate and where both parties agree. For relocations or temporary assignments exceeding 30 days, the corporate housing policy applies instead of this travel policy.

---

## SECTION 15: APPROVAL_ROUTING
**category:** approval
**title:** Approval Routing Matrix

This matrix defines the minimum approval authority required for each travel scenario. Domestic travel under $2000 total: Manager approval. Domestic travel $2000-$5000 total: Manager approval, Finance notification. Domestic travel over $5000 total: VP approval. International travel under $5000 total: VP approval. International travel $5000-$15000 total: VP approval, Finance review. International travel over $15000 total: SVP approval. Business class air travel (any amount): VP approval. Client entertainment over $100 per person: VP approval. Conference attendance over $3000 total: VP approval, L&D notification. Emergency travel (retroactive): Manager approval within 3 business days. Group travel (3+ employees, same destination, same dates): VP approval required regardless of individual amounts, with group travel justification form. When multiple rules apply, the highest approval level governs. The Travel Approval Agent evaluates all applicable rules and routes to the highest required authority.
