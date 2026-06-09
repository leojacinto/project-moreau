import { Workspace, Acl } from "@servicenow/sdk/core";
import { fedOnbListConfig } from "./list-menu.now";

// Workspace definition
export const fedOnboardingWorkspace = Workspace({
  $id: Now.ID["fed_onboarding_workspace"],
  title: "Agency Control Tower",
  path: "fed-onboarding",
  tables: [
    "x_snc_fed_forum_on_orchestration",
    "x_snc_fed_forum_on_integration_log",
    "x_snc_fed_forum_on_sap_employee",
    "x_snc_fed_forum_on_agsva_clearance",
    "x_snc_fed_forum_on_entra_account",
    "x_snc_fed_forum_on_facility_access",
  ],
  listConfig: fedOnbListConfig,
});

// ACL to secure the workspace route
Acl({
  $id: Now.ID["fed_onboarding_workspace_acl"],
  localOrExisting: "Existing",
  type: "ux_route",
  operation: "read",
  roles: ["x_snc_fed_forum_on.user", "x_snc_fed_forum_on.admin"],
  table: "now",
  field: "fed-onboarding.*",
});
