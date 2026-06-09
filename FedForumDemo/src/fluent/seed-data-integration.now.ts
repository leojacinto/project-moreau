import { Record } from "@servicenow/sdk/core";

// ============================================================
// Integration Activity Log — Seed Data
// Fabricated integration events across all target systems
// to populate the Agency Control Tower dashboard
// ============================================================

// --- AGSVA Clearance Verification Events (RPA — no API available) ---
Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_agsva_01"],
  data: {
    sequence: 1,
    target_system: "agsva",
    action: "RPA bot: Verify clearance status for Priya Sharma",
    status: "success",
    detail: "RPA authenticated to AGSVA portal. NV1 clearance confirmed active. Expiry 2034-06-15.",
    duration_ms: 1240,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_agsva_02"],
  data: {
    sequence: 1,
    target_system: "agsva",
    action: "RPA bot: Verify clearance status for Marcus Johnson",
    status: "success",
    detail: "RPA authenticated to AGSVA portal. NV2 clearance confirmed active. Transfer complete.",
    duration_ms: 980,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_agsva_03"],
  data: {
    sequence: 1,
    target_system: "agsva",
    action: "RPA bot: Verify clearance status for Emily Nguyen",
    status: "success",
    detail: "RPA authenticated to AGSVA portal. Baseline clearance active. No transfer required.",
    duration_ms: 1102,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_agsva_04"],
  data: {
    sequence: 1,
    target_system: "agsva",
    action: "RPA bot: Verify clearance status for James O Brien",
    status: "success",
    detail: "RPA authenticated to AGSVA portal. NV1 clearance active. No transfer required.",
    duration_ms: 875,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_agsva_05"],
  data: {
    sequence: 1,
    target_system: "agsva",
    action: "RPA bot: Transfer clearance sponsorship request",
    status: "in_flight",
    detail: "RPA submitted transfer form on AGSVA portal. Awaiting acknowledgement.",
    duration_ms: 3200,
  },
});

// --- SAP HCM Events ---
Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_sap_01"],
  data: {
    sequence: 2,
    target_system: "sap_hcm",
    action: "Retrieve employee master for 10045821",
    status: "success",
    detail: "Priya Sharma record retrieved. Status: Pending.",
    duration_ms: 2150,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_sap_02"],
  data: {
    sequence: 2,
    target_system: "sap_hcm",
    action: "Retrieve employee master for 10045822",
    status: "success",
    detail: "Marcus Johnson record retrieved. Status: Pending.",
    duration_ms: 1980,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_sap_03"],
  data: {
    sequence: 2,
    target_system: "sap_hcm",
    action: "Retrieve employee master for 10045823",
    status: "success",
    detail: "Emily Nguyen record retrieved. Status: Pending.",
    duration_ms: 2340,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_sap_04"],
  data: {
    sequence: 2,
    target_system: "sap_hcm",
    action: "Update employment status to Active for 10045819",
    status: "success",
    detail: "James O Brien status updated in SAP HCM.",
    duration_ms: 3100,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_sap_05"],
  data: {
    sequence: 2,
    target_system: "sap_hcm",
    action: "Retrieve cost centre allocation for 10045821",
    status: "failed",
    detail: "SAP RFC timeout after 30s. Cost centre CC-4520 unavailable.",
    duration_ms: 30000,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_sap_06"],
  data: {
    sequence: 3,
    target_system: "sap_hcm",
    action: "Retry cost centre allocation for 10045821",
    status: "success",
    detail: "Cost centre CC-4520 confirmed on retry.",
    duration_ms: 2800,
  },
});

// --- Entra ID Provisioning Events (SCIM + Intune + Conditional Access) ---
Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_entra_01"],
  data: {
    sequence: 3,
    target_system: "entra_id",
    action: "SCIM: Provision UPN priya.sharma@agency.gov.au",
    status: "pending",
    detail: "Account creation queued via SCIM. Group memberships pending.",
    duration_ms: 450,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_entra_02"],
  data: {
    sequence: 3,
    target_system: "entra_id",
    action: "SCIM: Provision UPN marcus.johnson@agency.gov.au",
    status: "pending",
    detail: "Account creation queued via SCIM. Group memberships pending.",
    duration_ms: 420,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_entra_03"],
  data: {
    sequence: 3,
    target_system: "entra_id",
    action: "SCIM: Provision UPN emily.nguyen@agency.gov.au",
    status: "in_flight",
    detail: "SCIM provisioning in progress. Awaiting license assignment via group membership.",
    duration_ms: 5600,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_entra_04"],
  data: {
    sequence: 3,
    target_system: "entra_id",
    action: "SCIM: Activate UPN james.obrien@agency.gov.au",
    status: "success",
    detail: "Account active via SCIM. E5 license inherited from group. Conditional Access policy applied.",
    duration_ms: 8200,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_entra_05"],
  data: {
    sequence: 4,
    target_system: "entra_id",
    action: "Intune: Push Authenticator to managed device",
    status: "success",
    detail: "Authenticator app deployed via Intune Company Portal pre-Day 1.",
    duration_ms: 1500,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_entra_06"],
  data: {
    sequence: 4,
    target_system: "entra_id",
    action: "Conditional Access: MFA policy assigned",
    status: "success",
    detail: "MFA enforcement via Conditional Access. User prompted on first sign-in.",
    duration_ms: 920,
  },
});

// --- Facilities Access Events ---
Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_fac_01"],
  data: {
    sequence: 4,
    target_system: "facilities",
    action: "Request building pass for Priya Sharma",
    status: "pending",
    detail: "Pass request submitted for 50 Marcus Clarke St.",
    duration_ms: 680,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_fac_02"],
  data: {
    sequence: 4,
    target_system: "facilities",
    action: "Request building pass for Emily Nguyen",
    status: "in_flight",
    detail: "Pass request processing for 477 Pitt St. Photo ID pending.",
    duration_ms: 1450,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_fac_03"],
  data: {
    sequence: 4,
    target_system: "facilities",
    action: "Issue building pass for James O Brien",
    status: "success",
    detail: "Badge #B-4421 issued. Zones: Level 3, Server Room, Carpark.",
    duration_ms: 2100,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_fac_04"],
  data: {
    sequence: 5,
    target_system: "facilities",
    action: "Activate after-hours access for James O Brien",
    status: "success",
    detail: "After-hours access enabled for Badge #B-4421.",
    duration_ms: 750,
  },
});

// --- HRSD Lifecycle Events ---
Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_hrsd_01"],
  data: {
    sequence: 5,
    target_system: "hrsd",
    action: "Create lifecycle event for Priya Sharma",
    status: "success",
    detail: "Onboarding lifecycle event created in HRSD.",
    duration_ms: 1800,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_hrsd_02"],
  data: {
    sequence: 5,
    target_system: "hrsd",
    action: "Create lifecycle event for Marcus Johnson",
    status: "success",
    detail: "Onboarding lifecycle event created in HRSD.",
    duration_ms: 1650,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_hrsd_03"],
  data: {
    sequence: 5,
    target_system: "hrsd",
    action: "Create lifecycle event for Emily Nguyen",
    status: "success",
    detail: "Onboarding lifecycle event created in HRSD.",
    duration_ms: 1720,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_hrsd_04"],
  data: {
    sequence: 5,
    target_system: "hrsd",
    action: "Complete lifecycle event for James O Brien",
    status: "success",
    detail: "All onboarding activities marked complete.",
    duration_ms: 2200,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_hrsd_05"],
  data: {
    sequence: 6,
    target_system: "hrsd",
    action: "Trigger Day 1 welcome notification",
    status: "success",
    detail: "Welcome email and checklist sent to James O Brien.",
    duration_ms: 560,
  },
});

Record({
  table: "x_snc_fed_forum_on_integration_log",
  $id: Now.ID["intlog_hrsd_06"],
  data: {
    sequence: 6,
    target_system: "hrsd",
    action: "Assign mandatory training modules",
    status: "failed",
    detail: "LMS integration timeout. Training assignment deferred.",
    duration_ms: 30000,
  },
});
