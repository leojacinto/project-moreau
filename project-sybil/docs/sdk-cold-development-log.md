# SDK Cold (Cold Spec) - Development Log

> Detailed session-by-session breakdown of Cascade token usage, wall-clock time, and findings for the cold-start SDK approach to building the Travel Request Management scoped app. Unlike SDK Primed, this run started with **no prior context** - the AI received only the spec file and SDK access, simulating a cold handoff.

---

## Summary

| Metric | Value |
|--------|-------|
| **Final Score** | 32/32 |
| **Total Sessions** | 3 |
| **Total Wall Clock (active)** | ~125 min |
| **Total Tokens (est.)** | ~450k |
| **Deploy Iterations** | 3 (31/32 → 31/32 → 32/32) |
| **SDK Version** | 4.4.0 (`@servicenow/sdk`) |
| **Fluent Files Written** | 23 `.now.ts` files in flat `src/fluent/` directory |

---

## Session Log

### Session 1 - Setup + Core Components (~60 min, ~200k tokens)

**Date:** 2026-04-03
**Objective:** Read spec, set up project, discover SDK APIs by reading type definitions, write core `.now.ts` files.

**Project Setup:**
- Read [travel-app-spec-v1.md](../specs/travel-app-spec-v1.md) (508 lines)
- Created `package.json` and `now.config.json` targeting scope `x_snc_apr_trv`
- Copied `node_modules/` from `apr-2026-sdk-primed/` (which had the private `@servicenow/sdk-cli` pre-resolved from the March archive)
- Chose flat file structure: all `.now.ts` files in `src/fluent/` (vs SDK Primed's 15+ subdirectories)

**SDK API Discovery (on-demand, not pre-read):**
Unlike SDK Primed which pre-read all SDK docs in a dedicated session, SDK Cold discovered APIs as needed by reading `.d.ts` type definitions from the `node_modules/@servicenow/sdk-core/dist/` directory. Key type files consulted:
- `Role.d.ts` - discovered `containsRoles` (not `assignableRoles`)
- `BusinessRule.d.ts` - discovered `action: ['insert']` array (not boolean `insert: true`)
- `Acl.d.ts` - discovered operation types, `adminOverrides` property
- `CrossScopePrivilege.d.ts`, `ImportSet.d.ts`, `Property.d.ts`
- `ApplicationMenu.d.ts` - discovered modules are **not** a property of `ApplicationMenu`
- `flow/index.d.ts`, `TriggerDefinition.d.ts` - discovered `wfa.trigger` is a function, not an object with nested methods
- `flow/built-ins/triggers/` - discovered trigger definitions like `trigger.record.created`
- `Test.d.ts` - discovered ATF step APIs (`navigateToModule`, `setFieldValue`, `moduleVisibility`)

**Files Created (16):**

| File | Object Types |
|------|----------------|
| `tables.now.ts` | 4 tables (request, expense, policy, delegation) |
| `roles.now.ts` | 4 roles (user, approver, finance, admin) |
| `acls.now.ts` | 11 ACLs (CRUD per table + field-level) |
| `business-rules.now.ts` | 7 business rules |
| `client-scripts.now.ts` | 3 client scripts |
| `ui-policies.now.ts` | 3 UI policies |
| `properties.now.ts` | 5 system properties |
| `notifications.now.ts` | 5 email notifications |
| `script-includes.now.ts` | 3 script includes |
| `rest-api.now.ts` | Scripted REST API (6 endpoints) |
| `ui-actions.now.ts` | 5 UI actions |
| `ui-pages.now.ts` | 2 UI pages (Jelly XML) |
| `flows.now.ts` | 3 flows (initial version, later rewritten) |
| `catalog.now.ts` | Catalog item + 2 variable sets + 3 catalog scripts + 2 catalog UI policies |
| `workspace.now.ts` | Workspace config |
| `lists.now.ts` | 4 list layouts |

**TypeScript Errors Fixed During Session 1:**

| File | Error | Fix |
|------|-------|-----|
| `roles.now.ts` | `assignableRoles` not in type | Changed to `containsRoles` |
| `business-rules.now.ts` | Boolean `insert`/`update` not valid | Changed to `action: ['insert']` array |
| `ui-actions.now.ts` | Invalid visibility properties | Changed to `showButton`, `showLink`, `showContextMenu` |
| `ui-pages.now.ts` | Endpoint missing `.do` suffix | Added `.do` |
| `ui-pages.now.ts` | `name` not in `UiPage` type | Removed property |
| `flows.now.ts` | Wrong import path | Changed to `@servicenow/sdk/automation` |
| `flows.now.ts` | `wfa.trigger.record.created()` wrong API | Deferred to Session 2 |
| `navigation.now.ts` | `Module` import doesn't exist | Deferred to Session 2 |

### Session 2 - Remaining Components + Build Fix (~40 min, ~150k tokens)

**Date:** 2026-04-03
**Objective:** Fix navigation, create all remaining files, resolve all build errors.

**Navigation Fix:**
- Rewrote `navigation.now.ts` - removed invalid `Module` import and nested modules from `ApplicationMenu`
- Created modules as `Record()` entries targeting `sys_app_module` table in `misc-records.now.ts`

**Files Created (7):**

| File | Object Types |
|------|----------------|
| `cross-scope.now.ts` | 4 cross-scope privileges |
| `records.now.ts` | 22 seed data records (5 policies, 5 requests, 10 expenses, 2 delegations) |
| `atf-tests.now.ts` | 11 ATF tests (navigate, form, catalog, visibility) |
| `data-sources.now.ts` | 2 data sources + 2 import set transform maps |
| `misc-records.now.ts` | 2 formatters, 3 list controls, 3 views, 4 relationships, 1 security attribute, 2 JS modules, 1 external connection, 9 app modules |
| `security-data-filters.now.ts` | 2 security data filter ACLs |
| `navigation.now.ts` | Rewritten - ApplicationMenu only (modules in misc-records) |

**Build Errors Fixed:**

| File | Error | Fix |
|------|-------|-----|
| `records.now.ts` (×33) | String values for decimal/boolean columns | Changed `'200'` → `200`, `'true'` → `true` for all 22 seed records |
| `flows.now.ts` (×3) | `wfa.trigger.record` doesn't exist | Rewrote to `wfa.trigger(trigger.record.created, config, inputs)` pattern |
| `atf-tests.now.ts` (×8) | `application` not valid on `navigateToModule` | Removed; `navigateToModule` takes only `{ module }` |
| `atf-tests.now.ts` (×1) | `fieldName`/`value` not valid on `setFieldValue` | Changed to `{ table, fieldValues: { field: value } }` |
| `atf-tests.now.ts` (×1) | `application`/`visible` not valid on `moduleVisibility` | Changed to `{ visibleModules: [...], assertVisible }` |
| `catalog.now.ts` (×1) | `variableSets` needs objects, not array of refs | Changed to `[{ variableSet: ref, order: 100 }]` |
| `misc-records.now.ts` (×11) | `active: 'true'` string not boolean | Changed to `active: true` |
| `data-sources.now.ts` (×2) | `header_row: '1'` string not number | Changed to `header_row: 1` |

**First successful build:** `npx now-sdk build` → completed with 2 non-fatal VariableSetPlugin warnings.

### Session 3 - Deploy + Iterative Fixes to 32/32 (~25 min, ~100k tokens)

**Date:** 2026-04-04
**Objective:** Deploy, verify, and fix remaining gaps.

#### Run 1 - 31/32

First successful deploy via `npx now-sdk install`. Verification showed 31/32 - only seed data failed:

| Failed Component | Found | Expected | Root Cause |
|-----------------|------:|--------:|------------|
| Records (seed data) | 0 | 22 | REST API returned HTTP 403 "Failed API level ACL Validation" on all 4 custom tables |

**Root cause analysis:** Scoped app custom tables default to blocking web service access. The verification script queries tables via REST API, but scoped tables require explicit `allowWebServiceAccess: true` on the table definition.

#### Run 2 - 31/32

Added `adminOverrides: true` to all 10 record-level ACLs. Redeployed. Still 31/32.

**Root cause:** The 403 was at the **API level**, not the record-ACL level. `adminOverrides` on record ACLs doesn't help because the block happens before record ACLs are evaluated. The actual fix needed to be on the table definition itself.

#### Run 3 - 32/32

Added `allowWebServiceAccess: true` to all 4 table definitions in `tables.now.ts`. Rebuilt and redeployed.

| Fix | Detail |
|-----|--------|
| Tables | Added `allowWebServiceAccess: true` to all 4 tables |
| ACLs | Added `adminOverrides: true` to all 10 ACLs (kept from Run 2) |

All 32 object types verified. Seed data showed 44 found (vs 22 expected) because the scope already contained SDK Primed's 22 records.

---

## Key Findings

### What Worked Well
1. **Cold start is viable** - Without any prior SDK knowledge, the AI reached 32/32 in ~125 min by reading `.d.ts` type definitions on-demand. The type system is self-documenting enough to guide correct usage.
2. **Flat file structure is simpler** - 23 files in a single `src/fluent/` directory (vs SDK Primed's 30 files across 15+ directories) is easier to reason about and produces the same result.
3. **`Record()` API is the universal fallback** - Components without dedicated SDK functions (formatters, list controls, views, relationships, security attributes, JS modules, connections, app modules) were all created via `Record()` targeting the correct ServiceNow table. This worked first try.
4. **Verify script as feedback loop** - The `verify.py` script's explicit table names and expected counts made it trivial to target exactly what was needed.

### What Didn't Work
1. **Flow trigger API is non-obvious** - The correct pattern `wfa.trigger(trigger.record.created, config, inputs)` is a 3-argument function call, not the method-chain `wfa.trigger.record.created({...})` that the namespace structure suggests. Required reading 3 separate type files to understand.
2. **ApplicationMenu has no modules** - The `ApplicationMenu` type explicitly excludes a `modules` property. Modules must be created as separate `Record()` entries on `sys_app_module`. This isn't documented in the type's JSDoc.
3. **Custom table REST access is opt-in** - `allowWebServiceAccess: true` is required but not the default. Without it, even admin users get "Failed API level ACL Validation" via REST. This was the only issue that required iterative deploys.
4. **Shared scope causes inflated counts** - Both SDK Primed and SDK Cold deployed to the same `x_snc_apr_trv` scope. The verification script counts all records in scope, so SDK Cold's "found" counts include SDK Primed's records (e.g., 26 ACLs found when SDK Cold only created ~13). This doesn't affect pass/fail but makes raw counts misleading for comparison.

### SDK Primed vs SDK Cold Comparison

| Dimension | SDK Primed | SDK Cold |
|-----------|:-------------------:|:--------------:|
| **Final score** | 32/32 | 32/32 |
| **Sessions** | 5 | 3 |
| **Wall clock** | ~135 min | ~125 min |
| **Tokens (est.)** | ~500k | ~450k |
| **Deploy iterations** | 3 (25→30→32) | 3 (31→31→32) |
| **Files** | 30 (15+ dirs) | 23 (1 dir) |
| **SDK doc pre-read** | Dedicated session (~25 min) | On-demand as needed |
| **First deploy score** | 25/32 | 31/32 |
| **Flow implementation** | `Record` API fallback (TS conflict) | Native `Flow` + `wfa.trigger` API |
| **Table mismatches** | 5 (formatters, JS modules, security, data sources) | 0 |

**Key insight:** Context priming (SDK Primed) did not produce a faster or cheaper result than cold start (SDK Cold). The cold start actually achieved a higher first-deploy score (31/32 vs 25/32) because it benefited from a better-structured verify script that explicitly listed target tables, allowing the AI to target the right tables from the start. The prior context in SDK Primed sometimes led to assumptions that needed correction (e.g., wrong table names for formatters, JS modules, security attributes).

### Error Catalog

| # | File | Error Type | Description |
|---|------|-----------|-------------|
| 1 | `roles.now.ts` | Wrong property | `assignableRoles` → `containsRoles` |
| 2 | `business-rules.now.ts` | Wrong property type | Boolean `insert`/`update` → `action: ['insert']` array |
| 3 | `ui-actions.now.ts` | Wrong property names | Form/list display → `showButton`, `showLink`, `showContextMenu` |
| 4 | `ui-pages.now.ts` | Missing suffix | Endpoint missing `.do` |
| 5 | `ui-pages.now.ts` | Invalid property | `name` doesn't exist on `UiPage` |
| 6 | `flows.now.ts` | Wrong import | `@servicenow/sdk/core` → `@servicenow/sdk/automation` |
| 7 | `flows.now.ts` | Wrong trigger API | `wfa.trigger.record.created()` → `wfa.trigger(trigger.record.created, ...)` |
| 8 | `navigation.now.ts` | Non-existent export | `Module` not exported from SDK; modules are `Record()` entries |
| 9 | `navigation.now.ts` | Invalid property | `ApplicationMenu` has no `modules` property |
| 10 | `records.now.ts` | Type mismatch (×33) | String values for decimal/boolean columns |
| 11 | `atf-tests.now.ts` | Invalid property (×8) | `application` not in `navigateToModule` type |
| 12 | `atf-tests.now.ts` | Wrong API shape | `fieldName`/`value` → `table`/`fieldValues` |
| 13 | `atf-tests.now.ts` | Wrong API shape | `moduleVisibility` takes `visibleModules` array |
| 14 | `catalog.now.ts` | Wrong type shape | `variableSets` needs `{ variableSet, order }` objects |
| 15 | `misc-records.now.ts` | Type mismatch (×11) | `active: 'true'` string → boolean |
| 16 | `data-sources.now.ts` | Type mismatch (×2) | `header_row: '1'` string → number |
| 17 | `tables.now.ts` | Missing property | `allowWebServiceAccess: true` needed for REST API |
| 18 | `acls.now.ts` | Missing property | `adminOverrides: true` needed for admin access |

### Token Cost Breakdown (Estimated)

| Phase | Tokens | % of Total |
|-------|-------:|:----------:|
| Setup + core components (16 files) | ~200k | 44% |
| Remaining components + build fix (7 files) | ~150k | 33% |
| Deploy + iterative fixes (3 deploys) | ~100k | 22% |
| **Total** | **~450k** | **100%** |

> **Note:** Token estimates are approximate. Cascade does not expose exact token counts. Estimates are based on conversation complexity, number of tool calls (file reads, searches, edits, commands), and output volume per session.

### Wall Clock Breakdown

| Phase | Time | Cumulative |
|-------|-----:|:----------:|
| Setup + core components | ~60 min | 60 min |
| Remaining components + build fix | ~40 min | 100 min |
| Deploy + iterative fixes | ~25 min | 125 min |

> Wall clock measures active Cascade execution time only, excluding user AFK time between sessions.
