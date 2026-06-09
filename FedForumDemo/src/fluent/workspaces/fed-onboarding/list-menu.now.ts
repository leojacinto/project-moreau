import { UxListMenuConfig, Applicability, Role } from "@servicenow/sdk/core";

// Define roles for workspace access
export const fedOnbUserRole = Role({
  $id: Now.ID["fed_onb_user_role"],
  name: "x_snc_fed_forum_on.user",
  containsRoles: ["canvas_user"],
});

export const fedOnbAdminRole = Role({
  $id: Now.ID["fed_onb_admin_role"],
  name: "x_snc_fed_forum_on.admin",
  containsRoles: ["canvas_admin"],
});

// Define applicability
export const fedOnbApplicability = Applicability({
  $id: Now.ID["fed_onb_applicability"],
  name: "Federal Onboarding Users",
  roles: [fedOnbUserRole, fedOnbAdminRole],
});

// List Menu Configuration
export const fedOnbListConfig = UxListMenuConfig({
  $id: Now.ID["fed_onb_list_config"],
  name: "Federal Onboarding List Configuration",
  description: "Navigation for Federal Onboarding Operations Workspace",
  categories: [
    {
      $id: Now.ID["onb_queue_category"],
      title: "Onboarding Queue",
      order: 10,
      lists: [
        {
          $id: Now.ID["onb_all_list"],
          title: "All Orchestrations",
          order: 10,
          condition: "",
          table: "x_snc_fed_forum_on_orchestration",
          columns:
            "number,employee_name,state,target_start_date,overall_readiness",
          applicabilities: [
            {
              $id: Now.ID["onb_all_list_app"],
              applicability: fedOnbApplicability,
            },
          ],
        },
        {
          $id: Now.ID["onb_active_list"],
          title: "Active",
          order: 20,
          condition: "state!=complete^EQ",
          table: "x_snc_fed_forum_on_orchestration",
          columns:
            "number,employee_name,state,target_start_date,overall_readiness",
          applicabilities: [
            {
              $id: Now.ID["onb_active_list_app"],
              applicability: fedOnbApplicability,
            },
          ],
        },
        {
          $id: Now.ID["onb_complete_list"],
          title: "Completed",
          order: 30,
          condition: "state=complete^EQ",
          table: "x_snc_fed_forum_on_orchestration",
          columns:
            "number,employee_name,state,target_start_date,overall_readiness",
          applicabilities: [
            {
              $id: Now.ID["onb_complete_list_app"],
              applicability: fedOnbApplicability,
            },
          ],
        },
      ],
    },
    {
      $id: Now.ID["integration_log_category"],
      title: "Integration Logs",
      order: 20,
      lists: [
        {
          $id: Now.ID["int_log_all_list"],
          title: "All Activity",
          order: 10,
          condition: "",
          table: "x_snc_fed_forum_on_integration_log",
          columns: "sequence,target_system,action,status,detail,timestamp",
          applicabilities: [
            {
              $id: Now.ID["int_log_all_list_app"],
              applicability: fedOnbApplicability,
            },
          ],
        },
      ],
    },
  ],
});
