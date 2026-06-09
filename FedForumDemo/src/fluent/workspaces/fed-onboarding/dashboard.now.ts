import { Dashboard } from "@servicenow/sdk/core";
import { fedOnboardingWorkspace } from "./workspace.now";

// CEO Control Tower Dashboard
// Tab 1: Agency Control Tower (cross-domain KPIs — 4 widgets per row, trend charts)
// Tab 2: Onboarding Operations (detailed onboarding view)
Dashboard({
  $id: Now.ID["fed_onboarding_dashboard"],
  name: "Agency Operations Dashboard",
  tabs: [
    // ═══════════════════════════════════════════════════════════════════
    // TAB 1: AGENCY CONTROL TOWER
    // 5 rows × 4 widgets = 20 widgets (12 units wide each on 48-grid)
    // ═══════════════════════════════════════════════════════════════════
    {
      $id: Now.ID["ceo_control_tower_tab"],
      name: "Agency Control Tower",
      widgets: [
        // ──────────────────────────────────────────────────────────────
        // ROW 1: PROCURE TO PAY (y=0)
        // ──────────────────────────────────────────────────────────────
        // 1.1 Key Figure: Active Procurement Cases
        {
          $id: Now.ID["ceo_p2p_total_widget"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "Procurement Cases",
                sourceType: "table",
                tableOrViewName: "sn_spend_psd_procurement_request",
                filterQuery: "active=true",
                id: "ds_p2p_total",
              },
            ],
            headerTitle: "Procurement — Active Cases",
            metrics: [
              {
                dataSource: "ds_p2p_total",
                id: "m_p2p_total",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 0, y: 0 },
        },
        // 1.2 Trend: Procurement Cases Over Time (area — filled)
        {
          $id: Now.ID["ceo_p2p_trend_widget"],
          component: "area",
          componentProps: {
            dataSources: [
              {
                label: "Procurement Cases",
                sourceType: "table",
                tableOrViewName: "sn_spend_psd_procurement_request",
                filterQuery: "sys_created_on>=2025-01-01",
                id: "ds_p2p_trend",
              },
            ],
            headerTitle: "Procurement Trend",
            metrics: [
              {
                dataSource: "ds_p2p_trend",
                id: "m_p2p_trend",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            trendBy: {
              trendByFrequency: "month",
              trendByFields: [
                {
                  field: "sys_created_on",
                  metric: "m_p2p_trend",
                },
              ],
            },
          },
          height: 14,
          width: 12,
          position: { x: 12, y: 0 },
        },
        // 1.3 Vertical Bar: Procurement by Case Type
        {
          $id: Now.ID["ceo_p2p_type_widget"],
          component: "vertical-bar",
          componentProps: {
            dataSources: [
              {
                label: "Procurement Cases",
                sourceType: "table",
                tableOrViewName: "sn_spend_psd_procurement_request",
                filterQuery: "",
                id: "ds_p2p_type",
              },
            ],
            headerTitle: "Procurement by Type",
            metrics: [
              {
                dataSource: "ds_p2p_type",
                id: "m_p2p_type",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_p2p_type",
                    groupByField: "case_type",
                  },
                ],
                maxNumberOfGroups: 8,
                showOthers: true,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 24, y: 0 },
        },
        // 1.4 Donut: Procurement by State
        {
          $id: Now.ID["ceo_p2p_state_widget"],
          component: "donut",
          componentProps: {
            dataSources: [
              {
                label: "Procurement Cases",
                sourceType: "table",
                tableOrViewName: "sn_spend_psd_procurement_request",
                filterQuery: "",
                id: "ds_p2p_state",
              },
            ],
            headerTitle: "Procurement by State",
            metrics: [
              {
                dataSource: "ds_p2p_state",
                id: "m_p2p_state",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_p2p_state",
                    groupByField: "state",
                  },
                ],
                maxNumberOfGroups: 8,
                showOthers: true,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 36, y: 0 },
        },

        // ──────────────────────────────────────────────────────────────
        // ROW 2: FINANCE (y=14)
        // ──────────────────────────────────────────────────────────────
        // 2.1 Key Figure: Active Finance Cases
        {
          $id: Now.ID["ceo_fin_total_widget"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "Finance Cases",
                sourceType: "table",
                tableOrViewName: "sn_spend_sdc_service_request",
                filterQuery: "active=true^sys_created_on>=2026-01-01",
                id: "ds_fin_total",
              },
            ],
            headerTitle: "Finance — Active Cases",
            metrics: [
              {
                dataSource: "ds_fin_total",
                id: "m_fin_total",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 0, y: 14 },
        },
        // 2.2 Trend: Finance Cases Over Time (area — filled)
        {
          $id: Now.ID["ceo_fin_trend_widget"],
          component: "area",
          componentProps: {
            dataSources: [
              {
                label: "Finance Cases",
                sourceType: "table",
                tableOrViewName: "sn_spend_sdc_service_request",
                filterQuery: "sys_created_on>=2026-01-01",
                id: "ds_fin_trend",
              },
            ],
            headerTitle: "Finance Trend",
            metrics: [
              {
                dataSource: "ds_fin_trend",
                id: "m_fin_trend",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            trendBy: {
              trendByFrequency: "month",
              trendByFields: [
                {
                  field: "sys_created_on",
                  metric: "m_fin_trend",
                },
              ],
            },
          },
          height: 14,
          width: 12,
          position: { x: 12, y: 14 },
        },
        // 2.3 Vertical Bar: Finance by Priority
        {
          $id: Now.ID["ceo_fin_priority_widget"],
          component: "vertical-bar",
          componentProps: {
            dataSources: [
              {
                label: "Finance Cases",
                sourceType: "table",
                tableOrViewName: "sn_spend_sdc_service_request",
                filterQuery: "",
                id: "ds_fin_priority",
              },
            ],
            headerTitle: "Finance by Priority",
            metrics: [
              {
                dataSource: "ds_fin_priority",
                id: "m_fin_priority",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_fin_priority",
                    groupByField: "priority",
                  },
                ],
                maxNumberOfGroups: 5,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 24, y: 14 },
        },
        // 2.4 Donut: Finance by State
        {
          $id: Now.ID["ceo_fin_state_widget"],
          component: "donut",
          componentProps: {
            dataSources: [
              {
                label: "Finance Cases",
                sourceType: "table",
                tableOrViewName: "sn_spend_sdc_service_request",
                filterQuery: "",
                id: "ds_fin_state",
              },
            ],
            headerTitle: "Finance by State",
            metrics: [
              {
                dataSource: "ds_fin_state",
                id: "m_fin_state",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_fin_state",
                    groupByField: "state",
                  },
                ],
                maxNumberOfGroups: 8,
                showOthers: true,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 36, y: 14 },
        },

        // ──────────────────────────────────────────────────────────────
        // ROW 3: HRSD — HIRE TO RETIRE (y=28)
        // ──────────────────────────────────────────────────────────────
        // 3.1 Key Figure: Active HR Cases
        {
          $id: Now.ID["ceo_hr_total_widget"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "HR Cases",
                sourceType: "table",
                tableOrViewName: "sn_hr_core_case",
                filterQuery: "active=true",
                id: "ds_hr_total",
              },
            ],
            headerTitle: "HRSD — Active Cases",
            metrics: [
              {
                dataSource: "ds_hr_total",
                id: "m_hr_total",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 0, y: 28 },
        },
        // 3.2 Trend: HR Cases Over Time (area) — Apr 2025 to May 2026 only
        {
          $id: Now.ID["ceo_hr_trend_widget"],
          component: "area",
          componentProps: {
            dataSources: [
              {
                label: "HR Cases",
                sourceType: "table",
                tableOrViewName: "sn_hr_core_case",
                filterQuery: "sys_created_on>=2026-01-01^sys_created_on<=2026-05-31",
                id: "ds_hr_trend",
              },
            ],
            headerTitle: "HRSD Case Trend",
            metrics: [
              {
                dataSource: "ds_hr_trend",
                id: "m_hr_trend",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            trendBy: {
              trendByFrequency: "month",
              trendByFields: [
                {
                  field: "sys_created_on",
                  metric: "m_hr_trend",
                },
              ],
            },
          },
          height: 14,
          width: 12,
          position: { x: 12, y: 28 },
        },
        // 3.3 Donut: HR Cases by State
        {
          $id: Now.ID["ceo_hr_state_widget"],
          component: "donut",
          componentProps: {
            dataSources: [
              {
                label: "HR Cases",
                sourceType: "table",
                tableOrViewName: "sn_hr_core_case",
                filterQuery: "active=true^sys_created_on>=2026-01-01^sys_created_on<=2026-05-31",
                id: "ds_hr_state",
              },
            ],
            headerTitle: "HRSD by State",
            metrics: [
              {
                dataSource: "ds_hr_state",
                id: "m_hr_state",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_hr_state",
                    groupByField: "state",
                  },
                ],
                maxNumberOfGroups: 8,
                showOthers: true,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 24, y: 28 },
        },
        // 3.4 Semi-Donut: Onboarding Readiness Distribution
        {
          $id: Now.ID["ceo_hr_readiness_widget"],
          component: "semi-donut",
          componentProps: {
            dataSources: [
              {
                label: "Fed Onboarding",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_orchestration",
                filterQuery: "",
                id: "ds_hr_readiness",
              },
            ],
            headerTitle: "Onboarding Readiness",
            metrics: [
              {
                dataSource: "ds_hr_readiness",
                id: "m_hr_readiness",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_hr_readiness",
                    groupByField: "overall_readiness",
                  },
                ],
                maxNumberOfGroups: 5,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 36, y: 28 },
        },

        // ──────────────────────────────────────────────────────────────
        // ROW 4: ONBOARDING OPERATIONS (y=42)
        // ──────────────────────────────────────────────────────────────
        // 4.1 Key Figure: Active Onboarding Cases
        {
          $id: Now.ID["ceo_onb_total_widget"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "Fed Onboarding",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_orchestration",
                filterQuery: "state!=complete",
                id: "ds_onb_active",
              },
            ],
            headerTitle: "Onboarding — Active",
            metrics: [
              {
                dataSource: "ds_onb_active",
                id: "m_onb_active",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 0, y: 42 },
        },
        // 4.2 Vertical Bar: Onboarding by State
        {
          $id: Now.ID["ceo_onb_state_widget"],
          component: "vertical-bar",
          componentProps: {
            dataSources: [
              {
                label: "Fed Onboarding",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_orchestration",
                filterQuery: "",
                id: "ds_onb_state",
              },
            ],
            headerTitle: "Onboarding by State",
            metrics: [
              {
                dataSource: "ds_onb_state",
                id: "m_onb_state",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_onb_state",
                    groupByField: "state",
                  },
                ],
                maxNumberOfGroups: 6,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 18,
          position: { x: 12, y: 42 },
        },
        // 4.3 Donut: Onboarding Readiness
        {
          $id: Now.ID["ceo_onb_readiness_widget"],
          component: "donut",
          componentProps: {
            dataSources: [
              {
                label: "Fed Onboarding",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_orchestration",
                filterQuery: "",
                id: "ds_onb_readiness",
              },
            ],
            headerTitle: "Readiness Distribution",
            metrics: [
              {
                dataSource: "ds_onb_readiness",
                id: "m_onb_readiness",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_onb_readiness",
                    groupByField: "overall_readiness",
                  },
                ],
                maxNumberOfGroups: 5,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 18,
          position: { x: 30, y: 42 },
        },

        // ──────────────────────────────────────────────────────────────
        // ROW 5: INTEGRATION HEALTH (y=56)
        // ──────────────────────────────────────────────────────────────
        // 5.1 Key Figure: Total Integration Actions
        {
          $id: Now.ID["ceo_int_total_widget"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "Integration Log",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_integration_log",
                filterQuery: "",
                id: "ds_int_total",
              },
            ],
            headerTitle: "Integration — Total Actions",
            metrics: [
              {
                dataSource: "ds_int_total",
                id: "m_int_total",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 0, y: 56 },
        },
        // 5.2 Horizontal Bar: Integration by Target System
        {
          $id: Now.ID["ceo_int_system_widget"],
          component: "horizontal-bar",
          componentProps: {
            dataSources: [
              {
                label: "Integration Log",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_integration_log",
                filterQuery: "",
                id: "ds_int_system",
              },
            ],
            headerTitle: "Activity by System",
            metrics: [
              {
                dataSource: "ds_int_system",
                id: "m_int_system",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_int_system",
                    groupByField: "target_system",
                  },
                ],
                maxNumberOfGroups: 6,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 18,
          position: { x: 12, y: 56 },
        },
        // 5.3 Donut: Integration by Status
        {
          $id: Now.ID["ceo_int_status_widget"],
          component: "donut",
          componentProps: {
            dataSources: [
              {
                label: "Integration Log",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_integration_log",
                filterQuery: "",
                id: "ds_int_status",
              },
            ],
            headerTitle: "Integration Status",
            metrics: [
              {
                dataSource: "ds_int_status",
                id: "m_int_status",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_int_status",
                    groupByField: "status",
                  },
                ],
                maxNumberOfGroups: 5,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 18,
          position: { x: 30, y: 56 },
        },


      ],
    },

    // ═══════════════════════════════════════════════════════════════════
    // TAB 2: ONBOARDING OPERATIONS (Detailed)
    // ═══════════════════════════════════════════════════════════════════
    {
      $id: Now.ID["fed_onb_overview_tab"],
      name: "Onboarding Operations",
      widgets: [
        // Single Score: Total Orchestrations
        {
          $id: Now.ID["fed_onb_total_widget"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "Orchestration",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_orchestration",
                filterQuery: "",
                id: "data_source_1",
              },
            ],
            headerTitle: "Total Onboarding Cases",
            metrics: [
              {
                dataSource: "data_source_1",
                id: "metric_1",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 12,
          position: { x: 0, y: 0 },
        },
        // Vertical Bar: By State
        {
          $id: Now.ID["fed_onb_state_widget"],
          component: "vertical-bar",
          componentProps: {
            dataSources: [
              {
                label: "Orchestration",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_orchestration",
                filterQuery: "",
                id: "data_source_2",
              },
            ],
            headerTitle: "Cases by State",
            metrics: [
              {
                dataSource: "data_source_2",
                id: "metric_2",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "data_source_2",
                    groupByField: "state",
                  },
                ],
                maxNumberOfGroups: 10,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 18,
          position: { x: 12, y: 0 },
        },
        // Vertical Bar: By Overall Readiness
        {
          $id: Now.ID["fed_onb_readiness_widget"],
          component: "vertical-bar",
          componentProps: {
            dataSources: [
              {
                label: "Orchestration",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_orchestration",
                filterQuery: "",
                id: "data_source_3",
              },
            ],
            headerTitle: "Cases by Readiness",
            metrics: [
              {
                dataSource: "data_source_3",
                id: "metric_3",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "data_source_3",
                    groupByField: "overall_readiness",
                  },
                ],
                maxNumberOfGroups: 10,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 18,
          position: { x: 30, y: 0 },
        },
        // Integration Log Activity by System
        {
          $id: Now.ID["fed_onb_intlog_widget"],
          component: "horizontal-bar",
          componentProps: {
            dataSources: [
              {
                label: "Integration Log",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_integration_log",
                filterQuery: "",
                id: "ds_intlog",
              },
            ],
            headerTitle: "Integration Activity by System",
            metrics: [
              {
                dataSource: "ds_intlog",
                id: "m_intlog",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_intlog",
                    groupByField: "target_system",
                  },
                ],
                maxNumberOfGroups: 6,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 16,
          position: { x: 0, y: 14 },
        },
        // Integration Status Donut
        {
          $id: Now.ID["fed_onb_intstatus_widget"],
          component: "donut",
          componentProps: {
            dataSources: [
              {
                label: "Integration Log",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_integration_log",
                filterQuery: "",
                id: "ds_intstatus",
              },
            ],
            headerTitle: "Integration Status",
            metrics: [
              {
                dataSource: "ds_intstatus",
                id: "m_intstatus",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_intstatus",
                    groupByField: "status",
                  },
                ],
                maxNumberOfGroups: 5,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 16,
          position: { x: 16, y: 14 },
        },
        // Avg Duration by System (bar)
        {
          $id: Now.ID["fed_onb_intduration_widget"],
          component: "vertical-bar",
          componentProps: {
            dataSources: [
              {
                label: "Integration Log",
                sourceType: "table",
                tableOrViewName: "x_snc_fed_forum_on_integration_log",
                filterQuery: "",
                id: "ds_intduration",
              },
            ],
            headerTitle: "Avg Duration by System (ms)",
            metrics: [
              {
                dataSource: "ds_intduration",
                id: "m_intduration",
                aggregateFunction: "AVG",
                aggregateField: "duration_ms",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_intduration",
                    groupByField: "target_system",
                  },
                ],
                maxNumberOfGroups: 6,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 14,
          width: 16,
          position: { x: 32, y: 14 },
        },
      ],
    },
  ],
  visibilities: [
    {
      $id: Now.ID["fed_onb_dashboard_visibility"],
      experience: fedOnboardingWorkspace,
    },
  ],
  permissions: [],
});
