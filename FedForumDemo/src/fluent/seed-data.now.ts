import { Record } from "@servicenow/sdk/core";

// ============================================================
// Seed users required for the demo
// Use "Reset Demo Data" button on the orchestration list to
// populate full demo data with proper cross-table references
// ============================================================

// David Chen — Hiring Manager / Branch Director
export const seed_user_david_chen = Record({
  table: "sys_user",
  $id: Now.ID["user-david-chen"],
  data: {
    user_name: "david.chen",
    first_name: "David",
    last_name: "Chen",
    title: "Director, Digital Policy Branch",
    email: "david.chen@agency.gov.au",
    active: true,
  },
});

// Sarah Mitchell — HR Operations / Security Officer (primary demo persona)
export const seed_user_sarah_mitchell = Record({
  table: "sys_user",
  $id: Now.ID["user-sarah-mitchell"],
  data: {
    user_name: "sarah.mitchell",
    first_name: "Sarah",
    last_name: "Mitchell",
    title: "HR Operations Officer",
    email: "sarah.mitchell@agency.gov.au",
    active: true,
  },
});

// Priya Sharma — New Starter (AI Agent demo persona)
// The AI Agent's "Lookup Employee Profile" tool queries sys_user
// to identify the logged-in user. The agent chains to SAP/Entra/Facilities
// using Priya's EMAIL (priya.sharma@agency.gov.au) as the lookup key.
export const seed_user_priya_sharma = Record({
  table: "sys_user",
  $id: Now.ID["user-priya-sharma"],
  data: {
    user_name: "priya.sharma",
    first_name: "Priya",
    last_name: "Sharma",
    name: "Priya Sharma",
    title: "APS6 Policy Officer",
    email: "priya.sharma@agency.gov.au",
    active: true,
  },
});
