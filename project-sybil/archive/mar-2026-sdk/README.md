# Approach 3: Claude Opus + ServiceNow SDK (Custom UI + Workspace)

Uses Claude Opus (via Cascade) to author Fluent TypeScript, then deploys via the ServiceNow SDK v4.4.0 (`now-sdk`). Delivers **both** a custom UI Page and a native Workspace from the same codebase using the SDK's Fluent APIs.

---

## What's Included

```
mar-2026-sdk/
├── now.config.json                          # Scope config (update scopeId)
├── package.json                             # SDK 4.4.0 dependencies
├── .env.example                             # Credential template
├── .gitignore
└── src/
    ├── fluent/
    │   ├── tables/
    │   │   └── travel-request.now.ts            # Table: x_snc_travel_request (extends task)
    │   ├── business-rules/
    │   │   └── travel-request-rules.now.ts      # 4 BRs: default state, default traveler, date/cost validation
    │   ├── acls/
    │   │   └── travel-request-acls.now.ts       # 4 ACLs: read/write/create/delete
    │   ├── navigation/
    │   │   └── application-menu.now.ts          # App menu
    │   ├── records/
    │   │   └── sample-data.now.ts               # 5 sample travel requests
    │   ├── ui/
    │   │   └── travel-request-page.now.ts       # Custom UI Page (UiPage Fluent API)
    │   ├── workspace/
    │   │   └── travel-request-workspace.now.ts  # Native Workspace (Workspace + UxListMenuConfig Fluent APIs)
    │   └── index.now.ts                         # Barrel exports
    └── client/
        ├── index.html                           # UI Page entry point
        └── app.ts                               # React-style SPA (dashboard, list, form, actions)
```

---

## Two Delivery Modes

### Custom UI Page (`src/fluent/ui/`)
Uses `UiPage` Fluent API to deploy a bundled HTML/JS page at `x_snc_travel_request_ui.do`. The client app uses the Table API (`/api/now/table/`) with `window.g_ck` for CSRF - the same pattern as ServiceNow's official SDK React example.

### Native Workspace (`src/fluent/workspace/`)
Uses `Workspace` + `UxListMenuConfig` Fluent APIs to deploy a full workspace at `/now/travel-requests/home`. The SDK orchestrates all ~20 `sys_ux_*` records (app config, page registry, screen types, routes, screens) - workspace assembly is purpose-built for platform-native tooling like the SDK and Build Agent.

Workspace includes 4 pre-configured list views:
- **All Travel Requests** - full table view
- **Draft Requests** - filtered to `state=draft`
- **Submitted for Approval** - filtered to `state=submitted`
- **Approved Requests** - filtered to `state=approved`

---

## Table Schema

**Table:** `x_snc_travel_request` (extends `task`)

| Field | Type | Required |
|---|---|---|
| `x_snc_travel_destination` | String (256) | Yes |
| `x_snc_travel_departure_date` | Date | Yes |
| `x_snc_travel_return_date` | Date | Yes |
| `x_snc_travel_purpose` | String (1000) | Yes |
| `x_snc_travel_estimated_cost` | Decimal | Yes |
| `x_snc_travel_travel_type` | Choice (domestic/international) | Yes |
| `x_snc_travel_traveler` | Reference (sys_user) | No |
| `x_snc_travel_state` | Choice (draft/submitted/approved/rejected/completed) | No (defaults to draft) |

---

## Business Rules

| Rule | When | What |
|---|---|---|
| Default State to Draft | Before Insert | Sets state to `draft` if empty |
| Default Traveler | Before Insert | Sets traveler to current user if empty |
| Validate Return Date | Before Insert/Update | Aborts if return date < departure date |
| Validate Cost | Before Insert/Update | Aborts if estimated cost <= 0 |

---

## ACLs

| Operation | Roles |
|---|---|
| Read | admin, itil |
| Write | admin, itil |
| Create | admin, itil |
| Delete | admin |

---

## Setup

1. Copy `.env.example` to `.env` and fill in your instance credentials
2. Update `now.config.json` with your app's `scopeId` (sys_id from sys_app)
3. Install dependencies:
   ```bash
   npm install
   ```
4. Generate types:
   ```bash
   npm run types
   ```
5. Build:
   ```bash
   npm run build
   ```
6. Deploy:
   ```bash
   npm run deploy
   ```

---

## What This Proves

SDK v4.4.0's Fluent APIs can deliver **both** a custom UI Page and a native Workspace from the same codebase. The `Workspace` Fluent API abstracts away the ~20 interdependent `sys_ux_*` records that blocked Approach 2 (REST Workspace). Claude Opus authors the Fluent TypeScript; the SDK compiles and deploys everything - tables, business rules, ACLs, UI Page, Workspace, list configurations - in a single `now-sdk install`.

| | Approach 2 (REST Workspace) | Approach 3 (SDK Workspace) |
|---|---|---|
| Workspace records | Manual (~20 records, 10+ tables) | 1 Fluent function call |
| List configuration | Manual JSON | `UxListMenuConfig` Fluent API |
| Scope management | Session headers, race conditions | SDK-managed |
| Outcome | Incomplete after 3 hours | Single deploy |
