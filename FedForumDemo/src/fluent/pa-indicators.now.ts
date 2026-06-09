import { Record } from "@servicenow/sdk/core";

// ============================================================
// Performance Analytics — Cubes (Data Sources)
// These define which tables the PA indicators aggregate from
// ============================================================

Record({
  table: "pa_cubes",
  $id: Now.ID["pa_cube_procurement"],
  data: {
    name: "Procurement Cases",
    facts_table: "sn_spend_psd_procurement_request",
    frequency: "5",
  },
});

Record({
  table: "pa_cubes",
  $id: Now.ID["pa_cube_finance"],
  data: {
    name: "Finance Service Requests",
    facts_table: "sn_spend_sdc_service_request",
    frequency: "5",
  },
});

Record({
  table: "pa_cubes",
  $id: Now.ID["pa_cube_hrsd"],
  data: {
    name: "HR Cases",
    facts_table: "sn_hr_core_case",
    frequency: "5",
  },
});

Record({
  table: "pa_cubes",
  $id: Now.ID["pa_cube_integration"],
  data: {
    name: "Integration Operations",
    facts_table: "x_snc_fed_forum_on_integration_log",
    frequency: "5",
  },
});

// ============================================================
// Performance Analytics — Indicators
// IMPORTANT: cube field must use actual sys_ids (Now.ID doesn't
// resolve inside Record data objects)
// ============================================================

// Cube sys_ids (from instance query)
const CUBE_PROCUREMENT = "63f43b4878d7464fbadec3530ad26719";
const CUBE_FINANCE = "7b3b6da84cc14f5e8ed23ace5b3b236f";
const CUBE_HRSD = "ef29558eb2164d5289c0a074fa02d0a6";
const CUBE_INTEGRATION = "cf06968626684ffbafd217d816da8782";

// --- Procurement ---
Record({
  table: "pa_indicators",
  $id: Now.ID["pa_ind_procurement_active"],
  data: {
    name: "Active Procurement Cases",
    cube: CUBE_PROCUREMENT,
    aggregate: "1",
    frequency: "5",
    type: "1",
    direction: "2",
    conditions: "active=true",
    show_realtime_score: "0",
    default_chart_type: "line",
    precision: "0",
    visible_to: "2",
    display: "1",
    scores_modified_at: "2026-05-01 00:00:00",
  },
});

Record({
  table: "pa_indicators",
  $id: Now.ID["pa_ind_procurement_total"],
  data: {
    name: "Total Procurement Cases",
    cube: CUBE_PROCUREMENT,
    aggregate: "1",
    frequency: "5",
    type: "1",
    direction: "3",
    conditions: "",
    show_realtime_score: "0",
    default_chart_type: "line",
    precision: "0",
    visible_to: "2",
    display: "1",
    scores_modified_at: "2026-05-01 00:00:00",
  },
});

// --- Finance ---
Record({
  table: "pa_indicators",
  $id: Now.ID["pa_ind_finance_active"],
  data: {
    name: "Active Finance Cases",
    cube: CUBE_FINANCE,
    aggregate: "1",
    frequency: "5",
    type: "1",
    direction: "2",
    conditions: "active=true",
    show_realtime_score: "0",
    default_chart_type: "line",
    precision: "0",
    visible_to: "2",
    display: "1",
    scores_modified_at: "2026-05-01 00:00:00",
  },
});

Record({
  table: "pa_indicators",
  $id: Now.ID["pa_ind_finance_total"],
  data: {
    name: "Total Finance Cases",
    cube: CUBE_FINANCE,
    aggregate: "1",
    frequency: "5",
    type: "1",
    direction: "3",
    conditions: "",
    show_realtime_score: "0",
    default_chart_type: "line",
    precision: "0",
    visible_to: "2",
    display: "1",
    scores_modified_at: "2026-05-01 00:00:00",
  },
});

// --- HRSD ---
Record({
  table: "pa_indicators",
  $id: Now.ID["pa_ind_hrsd_active"],
  data: {
    name: "Active HR Cases",
    cube: CUBE_HRSD,
    aggregate: "1",
    frequency: "5",
    type: "1",
    direction: "2",
    conditions: "active=true",
    show_realtime_score: "0",
    default_chart_type: "line",
    precision: "0",
    visible_to: "2",
    display: "1",
    scores_modified_at: "2026-05-01 00:00:00",
  },
});

Record({
  table: "pa_indicators",
  $id: Now.ID["pa_ind_hrsd_total"],
  data: {
    name: "Total HR Cases",
    cube: CUBE_HRSD,
    aggregate: "1",
    frequency: "5",
    type: "1",
    direction: "3",
    conditions: "",
    show_realtime_score: "0",
    default_chart_type: "line",
    precision: "0",
    visible_to: "2",
    display: "1",
    scores_modified_at: "2026-05-01 00:00:00",
  },
});

// --- Integration Operations ---
Record({
  table: "pa_indicators",
  $id: Now.ID["pa_ind_integration_total"],
  data: {
    name: "Total Integration Operations",
    cube: CUBE_INTEGRATION,
    aggregate: "1",
    frequency: "5",
    type: "1",
    direction: "3",
    conditions: "",
    show_realtime_score: "0",
    default_chart_type: "line",
    precision: "0",
    visible_to: "2",
    display: "1",
    scores_modified_at: "2026-05-01 00:00:00",
  },
});

Record({
  table: "pa_indicators",
  $id: Now.ID["pa_ind_integration_success"],
  data: {
    name: "Successful Integrations",
    cube: CUBE_INTEGRATION,
    aggregate: "1",
    frequency: "5",
    type: "1",
    direction: "1",
    conditions: "status=success",
    show_realtime_score: "0",
    default_chart_type: "line",
    precision: "0",
    visible_to: "2",
    display: "1",
    scores_modified_at: "2026-05-01 00:00:00",
  },
});
