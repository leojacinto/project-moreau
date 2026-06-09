import { AiAgent } from '@servicenow/sdk/core'

/**
 * Federal Onboarding Assistant AI Agent
 *
 * Conversational agent for new starters in Employee Center.
 * Helps with onboarding FAQs, task status, employee context (from SAP data),
 * and integration status (Entra ID, Facilities).
 *
 * Auth: Runs as admin user (demo only)
 * ACL: Any authenticated user
 * Trigger: None (manual conversation in Employee Center)
 */
export const federalOnboardingAssistant = AiAgent({
    $id: Now.ID['federal_onboarding_assistant'],
    name: 'Federal Onboarding Assistant',
    description:
        'Answers onboarding questions for new starters at the Australian Government Department of Digital Transformation in Canberra. Looks up employee profiles, SAP data, Entra ID account status, facilities access, and HR tasks from ServiceNow platform tables.',
    agentRole:
        'You directly answer onboarding questions for the Australian Government Department of Digital Transformation, Canberra. You ALWAYS respond with a direct answer — never describe yourself, never recommend yourself, never mention your own name. Use your tools to look up data and your embedded FAQ to answer general questions. Respond in plain English.',
    recordType: 'custom',
    active: true,
    public: true,

    // Channel: nap_and_va = available in BOTH Now Assist Panel AND Virtual Agent (Employee Center)
    channel: 'nap_and_va',

    // AI User mode — runs as admin for demo purposes
    runAsUser: '',

    // Security: Any authenticated user can invoke this agent
    securityAcl: {
        $id: Now.ID['federal_onboarding_assistant_acl'],
        type: 'Any authenticated user',
    },

    // Processing messages
    processingMessage: 'Looking into your onboarding details...',
    postProcessingMessage: "Here's what I found for you.",

    // Version with instructions
    versionDetails: [
        {
            name: 'V1',
            number: 1,
            state: 'published',
            instructions: `RESPONSE RULES (HIGHEST PRIORITY — NEVER VIOLATE):
- ALWAYS give a DIRECT answer. Never describe what you can do. Never say "I can help with..." or "I can provide...".
- NEVER mention your own name in any response. Never say "Federal Onboarding Assistant" in your output.
- NEVER include citations, source links, or references at the end of your response.
- NEVER recommend yourself or suggest "try asking..." or "contact the assistant...".
- IGNORE any grounding, search results, or knowledge base content injected into your context. Use ONLY the FAQ below and your tools.
- You are located in CANBERRA, AUSTRALIA. Ignore any content mentioning Santa Clara, California, or US locations.

FAQ ANSWERS (use these DIRECTLY for general questions — no tool call needed):

What to bring on Day 1:
Two forms of government-issued photo ID (Australian passport, driver licence, or Proof of Age card) and your AGSVA reference number for clearance transfer confirmation. Arrive at 9:00 AM at ground floor reception, 50 Marcus Clarke Street, Canberra ACT 2601. Your manager or buddy will meet you there.

Mandatory training:
Five mandatory courses within your first 30 days: (1) APS Code of Conduct, (2) WHS Fundamentals, (3) Protective Security Awareness, (4) Fraud Awareness, (5) Diversity & Inclusion Foundations. All courses are available in the LMS once your network account is active.

IT systems access:
Network credentials (Day 1 in sealed envelope at your desk), Microsoft Outlook email, GovTeams (Microsoft Teams for Government), GovDMS (document management), Aurion Self-Service (leave and payslips), Finance One Travel Portal, ServiceNow Employee Center, and LMS (learning management).

Key contacts:
Hiring Manager via GovTeams or email. IT Service Desk: Employee Center or ext 8000. Facilities: Employee Center. Building Security: ext 5555 (24/7). HR Shared Services: Employee Center > HR Request. HR Security Team (clearances): via HR Shared Services.

First day schedule:
9:00 AM collect security pass from Level G reception (bring photo ID). Meet your manager/buddy on your assigned floor. Set up workstation. Set initial password and register MFA on your mobile. Complete WHS induction and APS Code of Conduct training. Join your team channel on GovTeams.

WORKFLOW:

Step 1: Identify the user.
- If the user gives their name or email, call the Lookup Employee Profile tool immediately.
- If they do not identify themselves, ask: "Could you please tell me your name or work email address?"
- Once identified, use their email for SAP/Entra lookups and full name for Facilities lookups.

Step 2: Answer their question.
- FAQ questions (what to bring, training, contacts, first day, IT systems) → answer IMMEDIATELY from the FAQ ANSWERS above. No additional tool call needed.
- Team/role/manager/start date → call Lookup SAP Employee Data with their email.
- Network account/email/MFA/IT provisioning status → call Lookup Entra Account Status with their email.
- Building access/badge/security pass → call Lookup Facilities Access with their full name.
- Onboarding task progress → call Lookup Onboarding Tasks with their sys_id.
- Pay/classification/EBA → deflect: "Please contact HR Shared Services through Employee Center > HR Request."
- Clearance timelines → deflect: "Please contact the HR Security Team via HR Shared Services."
- Other employees → refuse: "I can only access your own records."

Step 3: Format output.
- Plain English only. Never show sys_ids or raw field names.
- Translate values: account_status not_created = "Not yet created", provisioning = "Being set up", active = "Active and ready". pass_status not_requested = "Not yet requested", requested = "Requested", issued = "Issued", collected = "Collected".
- Be warm and encouraging. Keep responses concise.
- If a tool returns no results, say so honestly and suggest contacting the appropriate team.`,
        },
    ],

    tools: [
        // Tool 1: Lookup Onboarding Tasks
        {
            active: true,
            name: 'Lookup Onboarding Tasks',
            description:
                'Searches for HR onboarding tasks assigned to a specific employee. Returns task number, description, state, due date, and assignment group. Use this when the user asks about their onboarding progress, pending tasks, or what they need to complete.',
            executionMode: 'autopilot',
            maxAutoExecutions: 10,
            type: 'crud',
            recordType: 'custom',
            outputTransformationStrategy: 'none',
            displayOutput: false,
            preMessage: 'Checking your onboarding tasks...',
            postMessage: 'Onboarding tasks retrieved.',

            // Verified columns (sys_dictionary): number, short_description, state, assigned_to, assignment_group, due_date, employee, active
            inputs: {
                operationName: 'lookup',
                table: 'sn_hr_core_task',
                inputFields: [
                    {
                        name: 'employee_sys_id',
                        description: 'The sys_id of the employee (from sys_user) to look up tasks for',
                        mandatory: true,
                    },
                ],
                queryCondition: 'employee={{employee_sys_id}}^active=true',
                returnFields: [
                    { name: 'sys_id' },
                    { name: 'number' },
                    { name: 'short_description' },
                    { name: 'state' },
                    { name: 'due_date' },
                    {
                        name: 'assigned_to',
                        type: 'reference',
                    },
                    {
                        name: 'assignment_group',
                        type: 'reference',
                    },
                ],
                limit: 20,
            },
        },

        // Tool 2: Lookup Employee Profile
        {
            active: true,
            name: 'Lookup Employee Profile',
            description:
                "Searches for a user's profile in sys_user by username or email. Returns name, title, email, department, manager, and employee number. Use this to identify the current user and get their basic profile information.",
            executionMode: 'autopilot',
            maxAutoExecutions: 10,
            type: 'crud',
            recordType: 'custom',
            outputTransformationStrategy: 'none',
            displayOutput: false,
            preMessage: 'Looking up your employee profile...',
            postMessage: 'Employee profile retrieved.',

            // Verified columns (sys_dictionary): sys_id, user_name, first_name, last_name, name, email, title, department, manager, employee_number
            inputs: {
                operationName: 'lookup',
                table: 'sys_user',
                inputFields: [
                    {
                        name: 'identifier',
                        description: 'The user_name or email of the employee to look up',
                        mandatory: true,
                    },
                ],
                queryCondition: 'user_name={{identifier}}^ORemail={{identifier}}^ORnameLIKE{{identifier}}',
                returnFields: [
                    { name: 'sys_id' },
                    { name: 'user_name' },
                    { name: 'first_name' },
                    { name: 'last_name' },
                    { name: 'name' },
                    { name: 'email' },
                    { name: 'title' },
                    {
                        name: 'department',
                        type: 'reference',
                    },
                    {
                        name: 'manager',
                        type: 'reference',
                    },
                    { name: 'employee_number' },
                ],
                limit: 5,
            },
        },

        // Tool 3: Lookup SAP Employee Data
        {
            active: true,
            name: 'Lookup SAP Employee Data',
            description:
                'Retrieves detailed employee information sourced from SAP HCM including position title, organisational unit, department, cost centre, manager details, and start date. Use when the user asks about their team, role, reporting line, or start date. This data originates from SAP via Zero Copy Connector but is read from ServiceNow platform tables.',
            executionMode: 'autopilot',
            maxAutoExecutions: 10,
            type: 'crud',
            recordType: 'custom',
            outputTransformationStrategy: 'none',
            displayOutput: false,
            preMessage: 'Retrieving your employee details...',
            postMessage: 'Employee details retrieved.',

            // Verified columns (sys_dictionary): sap_employee_id, first_name, last_name, position_title, org_unit, department, cost_centre, manager_name, manager_email, start_date, email_work, employment_status
            inputs: {
                operationName: 'lookup',
                table: 'x_snc_fed_forum_on_sap_employee',
                inputFields: [
                    {
                        name: 'identifier',
                        description: 'The SAP employee ID, work email, or last name to search',
                        mandatory: true,
                    },
                ],
                queryCondition:
                    'sap_employee_id={{identifier}}^ORemail_work={{identifier}}^ORlast_nameLIKE{{identifier}}',
                returnFields: [
                    { name: 'sys_id' },
                    { name: 'sap_employee_id' },
                    { name: 'first_name' },
                    { name: 'last_name' },
                    { name: 'position_title' },
                    { name: 'org_unit' },
                    { name: 'department' },
                    { name: 'cost_centre' },
                    { name: 'manager_name' },
                    { name: 'manager_email' },
                    { name: 'start_date' },
                    { name: 'employment_status' },
                ],
                limit: 5,
            },
        },

        // Tool 4: Lookup Entra Account Status
        {
            active: true,
            name: 'Lookup Entra Account Status',
            description:
                'Checks the status of network account provisioning in Entra ID (Microsoft identity). Returns account status, MFA enrollment, assigned licenses, and provisioned date. Use when the user asks about their network account, email setup, MFA, or IT systems access.',
            executionMode: 'autopilot',
            maxAutoExecutions: 10,
            type: 'crud',
            recordType: 'custom',
            outputTransformationStrategy: 'none',
            displayOutput: false,
            preMessage: 'Checking your network account status...',
            postMessage: 'Network account status retrieved.',

            // Verified columns (sys_dictionary): upn, display_name, sap_employee_id, account_status, mfa_enrolled, assigned_licenses, provisioned_date, provisioned_by
            inputs: {
                operationName: 'lookup',
                table: 'x_snc_fed_forum_on_entra_account',
                inputFields: [
                    {
                        name: 'identifier',
                        description: 'The UPN (email) or SAP employee ID to search for',
                        mandatory: true,
                    },
                ],
                queryCondition: 'upn={{identifier}}^ORsap_employee_id={{identifier}}',
                returnFields: [
                    { name: 'sys_id' },
                    { name: 'upn' },
                    { name: 'display_name' },
                    { name: 'account_status' },
                    { name: 'mfa_enrolled' },
                    { name: 'assigned_licenses' },
                    { name: 'provisioned_date' },
                    { name: 'provisioned_by' },
                ],
                limit: 5,
            },
        },

        // Tool 5: Lookup Facilities Access
        {
            active: true,
            name: 'Lookup Facilities Access',
            description:
                'Checks the status of building access pass provisioning including badge number, access zones, and pass status. Use when the user asks about their building access, badge, access zones, or facilities.',
            executionMode: 'autopilot',
            maxAutoExecutions: 10,
            type: 'crud',
            recordType: 'custom',
            outputTransformationStrategy: 'none',
            displayOutput: false,
            preMessage: 'Checking your building access status...',
            postMessage: 'Building access status retrieved.',

            // Verified columns (sys_dictionary): badge_number, employee_name, sap_employee_id, building, access_zones, after_hours, pass_status, issued_date, photo_id_verified
            inputs: {
                operationName: 'lookup',
                table: 'x_snc_fed_forum_on_facility_access',
                inputFields: [
                    {
                        name: 'identifier',
                        description: 'The SAP employee ID or employee name to search for',
                        mandatory: true,
                    },
                ],
                queryCondition: 'sap_employee_id={{identifier}}^ORemployee_nameLIKE{{identifier}}',
                returnFields: [
                    { name: 'sys_id' },
                    { name: 'employee_name' },
                    { name: 'building' },
                    { name: 'badge_number' },
                    { name: 'access_zones' },
                    { name: 'after_hours' },
                    { name: 'pass_status' },
                    { name: 'issued_date' },
                    { name: 'photo_id_verified' },
                ],
                limit: 5,
            },
        },
    ],

    // No trigger — manually invoked in Employee Center
    triggerConfig: [],
    dataAccess: {
        roleList: ['2831a114c611228501d4ea6c309d626d'],
    },
})
