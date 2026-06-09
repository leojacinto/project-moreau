# Approach 2 - REST Workspace

**Method:** REST API (via Cascade / Claude Opus)
**Delivery:** React components + workspace assembly attempt (incomplete)

## What This Is

An external AI agent (Claude Opus via Cascade) attempted to build a native ServiceNow workspace using REST API calls. Cascade produced functional **React components** (forms, tables, state machine, validation) but the workspace framework itself could not be assembled via REST.

The workspace framework coordinates ~20 records across multiple tables (`sys_ux_app_config`, `sys_ux_page_registry`, `sys_ux_screen_type`, `sys_ux_app_route`, `sys_ux_screen`, `sys_ux_page_property`). This level of orchestration is purpose-built for platform-native tooling (Build Agent, SDK) rather than external REST calls.

## What's Included

- **React UI components** - schema-driven form, table, action buttons, state machine, validation
- **Vite dev server** - local preview with ServiceNow API proxy
- **Schema config** - `build-agent/schema.json` defines fields, columns, states, and validation rules
- **UI Page** - `ui-page.html` contains the rendered output

## Run (local preview)

```bash
npm install
npm run dev
# Opens at http://localhost:3002
```

## Features (React components only)

- ✅ Schema-driven form generation
- ✅ Schema-driven table/list rendering
- ✅ Schema-driven state machine + action buttons
- ✅ Schema-driven validation rules
- ✅ Search & filter
- ✅ Stats dashboard
- ✅ Full CRUD against ServiceNow Table API

## Outcome

The React components work locally but the workspace could not be deployed to ServiceNow. REST API calls cannot practically orchestrate the ~20 interdependent `sys_ux_*` records required for a native workspace. This was later achieved in Approach 3 using the SDK's `Workspace` Fluent API.

## Limitations

- Workspace assembly via REST was incomplete after ~3 hours
- Requires Vite proxy for CORS (local preview only)
- Not Polaris, not mobile-ready, not upgrade-safe
