import "@servicenow/sdk/global";
import { Form, default_view, Formatter } from "@servicenow/sdk/core";

// Explicit form layout for Orchestration — shows ONE work_notes + Activity Stream
Form({
  table: "x_snc_fed_forum_on_orchestration",
  view: default_view,
  sections: [
    {
      caption: "Onboarding Details",
      content: [
        {
          layout: "two-column",
          leftElements: [
            { field: "number", type: "table_field" },
            { field: "employee_name", type: "table_field" },
            { field: "state", type: "table_field" },
            { field: "overall_readiness", type: "table_field" },
          ],
          rightElements: [
            { field: "target_start_date", type: "table_field" },
            { field: "initiated_by", type: "table_field" },
            { field: "initiated_date", type: "table_field" },
            { field: "hrsd_lifecycle_event", type: "table_field" },
          ],
        },
      ],
    },
    {
      caption: "Linked Records",
      content: [
        {
          layout: "two-column",
          leftElements: [
            { field: "sap_record", type: "table_field" },
            { field: "agsva_record", type: "table_field" },
          ],
          rightElements: [
            { field: "entra_record", type: "table_field" },
            { field: "facility_record", type: "table_field" },
          ],
        },
      ],
    },
    {
      caption: "Work Notes",
      content: [
        {
          layout: "one-column",
          elements: [
            { field: "work_notes", type: "table_field" },
          ],
        },
      ],
    },
    {
      caption: "Activity",
      content: [
        {
          layout: "one-column",
          elements: [
            { type: "formatter", formatterRef: Formatter.Activities_Filtered },
          ],
        },
      ],
    },
  ],
});
