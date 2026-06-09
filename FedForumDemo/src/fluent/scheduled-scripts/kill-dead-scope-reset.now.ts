import "@servicenow/sdk/global";
import { ScheduledScript } from "@servicenow/sdk/core";

// One-time cleanup: delete the old dead-scope "Reset Demo Data" UI action
// from scope 2036727747e04bd0f9de91ef016d43ea that has no integration log seeding.
// This runs once immediately on install, then self-deactivates.
ScheduledScript({
    $id: Now.ID["kill_dead_scope_reset"],
    name: "One-Time Cleanup - Kill Dead Scope Reset Button",
    script: Now.include("../../server/scheduled-scripts/kill-dead-scope-reset.js"),
    frequency: "once",
    active: true,
});
