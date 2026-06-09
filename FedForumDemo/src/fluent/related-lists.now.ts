import { List, Record, default_view } from "@servicenow/sdk/core";

// Process Flow stages for orchestration
export const pfDraft = Record({
  $id: Now.ID["pf_orch_draft"],
  table: "sys_process_flow",
  data: {
    name: "Onboarding - Draft",
    table: "x_snc_fed_forum_on_orchestration",
    label: "Draft",
    condition: "state=draft^EQ",
    order: 100,
    active: true,
  },
});

export const pfClearance = Record({
  $id: Now.ID["pf_orch_clearance"],
  table: "sys_process_flow",
  data: {
    name: "Onboarding - Clearance Verified",
    table: "x_snc_fed_forum_on_orchestration",
    label: "Clearance Verified",
    condition: "state=clearance_verified^EQ",
    order: 200,
    active: true,
  },
});

export const pfProvisioning = Record({
  $id: Now.ID["pf_orch_provisioning"],
  table: "sys_process_flow",
  data: {
    name: "Onboarding - Provisioning",
    table: "x_snc_fed_forum_on_orchestration",
    label: "Provisioning",
    condition: "state=provisioning^EQ",
    order: 300,
    active: true,
  },
});

export const pfInProgress = Record({
  $id: Now.ID["pf_orch_in_progress"],
  table: "sys_process_flow",
  data: {
    name: "Onboarding - In Progress",
    table: "x_snc_fed_forum_on_orchestration",
    label: "In Progress",
    condition: "state=in_progress^EQ",
    order: 400,
    active: true,
  },
});

export const pfComplete = Record({
  $id: Now.ID["pf_orch_complete"],
  table: "sys_process_flow",
  data: {
    name: "Onboarding - Complete",
    table: "x_snc_fed_forum_on_orchestration",
    label: "Complete",
    condition: "state=complete^EQ",
    order: 500,
    active: true,
  },
});

// Process Flow formatter on the form
export const processFlowElement = Record({
  $id: Now.ID["process_flow_orch"],
  table: "sys_ui_element",
  data: {
    sys_ui_section: "f20c614c47780314f9de91ef016d43c9",
    element: "process_flow",
    type: "formatter",
    position: 0,
  },
});

// Add work_notes input field to the orchestration form
export const workNotesElement = Record({
  $id: Now.ID["work_notes_element_orch"],
  table: "sys_ui_element",
  data: {
    sys_ui_section: "f20c614c47780314f9de91ef016d43c9",
    element: "work_notes",
    position: 98,
  },
});

// Add Activity formatter to the orchestration form section
export const activityFormatterElement = Record({
  $id: Now.ID["activity_formatter_orch"],
  table: "sys_ui_element",
  data: {
    sys_ui_section: "f20c614c47780314f9de91ef016d43c9",
    element: "activity.xml",
    type: "formatter",
    position: 99,
  },
});

// Add Integration Activity Log as a related list on the Orchestration form
export const integrationLogRelatedListConfig = Record({
  $id: Now.ID["related_list_integration_log"],
  table: "sys_ui_related_list",
  data: {
    name: "x_snc_fed_forum_on_orchestration",
    related_list: "x_snc_fed_forum_on_integration_log.orchestration",
    position: 0,
  },
});

// Configure the columns shown in the related list
export const integrationLogRelatedList = List({
  table: "x_snc_fed_forum_on_integration_log",
  view: default_view,
  parent: "x_snc_fed_forum_on_orchestration",
  columns: [
    { element: "sequence", position: 0 },
    { element: "target_system", position: 1 },
    { element: "action", position: 2 },
    { element: "status", position: 3 },
    { element: "detail", position: 4 },
    { element: "duration_ms", position: 5 },
    { element: "timestamp", position: 6 },
  ],
});
