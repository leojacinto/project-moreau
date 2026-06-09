import "@servicenow/sdk/global";
import { ScheduledScript } from "@servicenow/sdk/core";

// One-time scheduled script to close most HRSD cases
// Keeps ~103 active, closes the rest as "Closed Complete"
// Runs once immediately after install, then remains inactive
ScheduledScript({
    $id: Now.ID["close_hrsd_cases_once"],
    name: "One-Time HRSD Case Cleanup - Keep 103 Active",
    script: Now.include("../../server/scheduled-scripts/close-hrsd-cases.js"),
    frequency: "once",
    active: true,
});
