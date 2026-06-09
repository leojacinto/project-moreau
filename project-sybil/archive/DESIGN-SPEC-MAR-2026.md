# Travel Request App - Shared Design Specification

## Data Model (Consistent Across All 3 Approaches)

**Table**: `x_snc_travel_req_request`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `number` | string (auto) | Yes | Auto-generated (TRV0001000) |
| `traveler` | reference (sys_user) | Yes | Who is traveling |
| `destination` | string(256) | Yes | City/Country |
| `departure_date` | glide_date | Yes | |
| `return_date` | glide_date | Yes | |
| `purpose` | string(1000) | Yes | Business justification |
| `estimated_cost` | decimal | Yes | In USD |
| `state` | choice | Yes | draft/submitted/approved/rejected/completed |
| `approval_manager` | reference (sys_user) | No | Auto-set or manual |
| `notes` | string(4000) | No | Additional info |

## State Machine

```
draft → submitted → approved → completed
                  ↘ rejected
```

- **draft**: Initial state. Editable by traveler.
- **submitted**: Locked for editing. Pending manager review.
- **approved**: Manager approved. Travel can proceed.
- **rejected**: Manager rejected. Traveler notified with reason.
- **completed**: Post-travel. Final state.

## Business Rules

1. **On Submit**: Validate all required fields populated, dates logical (return > departure)
2. **On Approve**: Set state=approved, log approval timestamp
3. **On Reject**: Set state=rejected, require rejection reason in notes
4. **Number Generation**: Auto-generate TRV prefix numbers

## API Endpoints (all use ServiceNow Table API)

- `GET /api/now/table/x_snc_travel_req_request` - List requests
- `POST /api/now/table/x_snc_travel_req_request` - Create request
- `PATCH /api/now/table/x_snc_travel_req_request/{sys_id}` - Update/approve/reject
- `DELETE /api/now/table/x_snc_travel_req_request/{sys_id}` - Delete draft

## Approach Summary

| | Approach 1: SDK Pure | Approach 2: SDK + Build Agent | Approach 3: JARVIS |
|---|---|---|---|
| **UI** | Hand-coded Now Experience components | Schema-driven auto-generated React UI | Native ServiceNow forms (configured via API) |
| **Backend** | ServiceNow Table API | ServiceNow Table API | ServiceNow platform (tables, business rules, flows) |
| **Dev Tool** | @servicenow/sdk v4.4.0 | @servicenow/sdk + Vite/React | Node.js REST scripts |
| **Deploy** | `snc deploy` to instance | `snc deploy` to instance | Direct instance config via API |
| **Skill Level** | Senior developer | Mid developer + AI assist | Admin/configurator |
