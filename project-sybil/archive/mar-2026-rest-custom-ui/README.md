# Approach 1 - REST Custom UI

**Method:** REST API (via Cascade / Claude Opus)
**Delivery:** Jelly XML UI Page on ServiceNow

## What This Is

An external AI agent (Claude Opus via Cascade) used ServiceNow's REST API to create a custom UI Page for the Travel Request app. The final working version uses **Jelly XML** with server-side `<g:evaluate>` blocks for data loading and form POST for writes.

This approach required 4 failed iterations over ~2 hours before landing on the correct pattern. The iteration artifacts are preserved in this folder.

## Iteration Artifacts

| File | Iteration | Outcome |
|---|---|---|
| `a1-html.xml` | Raw HTML attempt | Blank page (UI Pages require Jelly XML) |
| `a1-client.js` | Client-side XHR | 401 (CSRF enforcement on `direct=true` pages) |
| `a1-client-ajax.js` | GlideAjax attempt | Blocked (cross-scope Script Include access) |
| `a1-jelly.xml` | Jelly XML partial | Vars not injecting (`client_script` field not Jelly-processed) |
| `a1-final-html.xml` | **Final: Jelly XML + `<g:evaluate>` + form POST** | **Working** |
| `a1-final-client.js` | Final client script | Paired with final HTML |
| `ui-page.html` | Deployed UI Page | As rendered on instance |

The `src/` directory and `now-ui.json` contain an initial SDK component scaffold that was superseded by the REST/Jelly XML approach.

## How It Works

1. The UI Page is created via REST API (`POST /api/now/table/sys_ui_page`)
2. The HTML field contains Jelly XML with `<g:evaluate>` blocks that query data server-side
3. Form POST with `sysparm_ck` handles write operations (create, update, delete)
4. No external JavaScript frameworks - all rendering is inline Jelly + vanilla JS

## Standalone Preview

Open `standalone-preview.html` in a browser to see the UI locally. Enter instance credentials in the connection bar. Note: CORS must be enabled on the instance.

## Features

- ✅ Create travel request (draft)
- ✅ Submit for approval
- ✅ Approve / Reject with reason
- ✅ Delete draft requests
- ✅ Search & filter
- ✅ Stats dashboard
- ✅ Client-side validation

## Limitations

- Took ~2 hours and 4 failed iterations to find the correct Jelly XML pattern
- No server-side business rules (those are in Approach 3)
- Not Polaris, not mobile-ready, partially upgrade-safe
