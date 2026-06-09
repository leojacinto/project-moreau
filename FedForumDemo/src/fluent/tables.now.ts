import {
    Table,
    StringColumn,
    DateColumn,
    DateTimeColumn,
    ChoiceColumn,
    BooleanColumn,
    ReferenceColumn,
    IntegerColumn,
    EmailColumn,
    GenericColumn,
} from '@servicenow/sdk/core'

// ============================================================
// TABLE 1: SAP HCM Employee Master
// ============================================================
export const x_snc_fed_forum_on_sap_employee = Table({
    name: 'x_snc_fed_forum_on_sap_employee',
    label: 'SAP HCM Employee Master',
    allow_web_service_access: true,
    schema: {
        sap_employee_id: StringColumn({ label: 'SAP Employee ID', maxLength: 8 }),
        first_name: StringColumn({ label: 'First Name', maxLength: 40 }),
        last_name: StringColumn({ label: 'Last Name', maxLength: 40 }),
        preferred_name: StringColumn({ label: 'Preferred Name', maxLength: 40 }),
        date_of_birth: DateColumn({ label: 'Date of Birth' }),
        nationality: StringColumn({ label: 'Nationality', maxLength: 40 }),
        gender: ChoiceColumn({
            label: 'Gender',
            choices: {
                male: { label: 'Male', sequence: 0 },
                female: { label: 'Female', sequence: 1 },
                other: { label: 'Other', sequence: 2 },
                prefer_not_to_say: { label: 'Prefer not to say', sequence: 3 },
            },
            dropdown: 'dropdown_with_none',
        }),
        email_work: EmailColumn({ label: 'Work Email' }),
        email_personal: EmailColumn({ label: 'Personal Email' }),
        mobile: StringColumn({ label: 'Mobile', maxLength: 20 }),
        position_title: StringColumn({ label: 'Position Title', maxLength: 60 }),
        position_id: StringColumn({ label: 'Position ID', maxLength: 8 }),
        org_unit: StringColumn({ label: 'Organisational Unit', maxLength: 80 }),
        department: StringColumn({ label: 'Department', maxLength: 80 }),
        cost_centre: StringColumn({ label: 'Cost Centre', maxLength: 20 }),
        personnel_area: StringColumn({ label: 'Personnel Area', maxLength: 40 }),
        manager_name: StringColumn({ label: 'Manager Name', maxLength: 80 }),
        manager_email: EmailColumn({ label: 'Manager Email' }),
        employment_status: ChoiceColumn({
            label: 'Employment Status',
            choices: {
                pending: { label: 'Pending', sequence: 0 },
                active: { label: 'Active', sequence: 1 },
                terminated: { label: 'Terminated', sequence: 2 },
            },
            dropdown: 'dropdown_with_none',
        }),
        start_date: DateColumn({ label: 'Start Date' }),
        company_code: StringColumn({ label: 'Company Code', maxLength: 4 }),
    },
    display: 'last_name',
})

// ============================================================
// TABLE 2: AGSVA Clearance Status
// ============================================================
export const x_snc_fed_forum_on_agsva_clearance = Table({
    name: 'x_snc_fed_forum_on_agsva_clearance',
    label: 'AGSVA Clearance Status',
    allow_web_service_access: true,
    schema: {
        agsva_reference: StringColumn({ label: 'AGSVA Reference', maxLength: 20 }),
        subject_first_name: StringColumn({ label: 'First Name', maxLength: 40 }),
        subject_last_name: StringColumn({ label: 'Last Name', maxLength: 40 }),
        date_of_birth: DateColumn({ label: 'Date of Birth' }),
        clearance_level: ChoiceColumn({
            label: 'Clearance Level',
            choices: {
                baseline: { label: 'Baseline', sequence: 0 },
                nv1: { label: 'NV1', sequence: 1 },
                nv2: { label: 'NV2', sequence: 2 },
                pv: { label: 'PV', sequence: 3 },
            },
            dropdown: 'dropdown_with_none',
        }),
        clearance_status: ChoiceColumn({
            label: 'Clearance Status',
            choices: {
                active: { label: 'Active', sequence: 0 },
                pending: { label: 'Pending', sequence: 1 },
                lapsed: { label: 'Lapsed', sequence: 2 },
                cancelled: { label: 'Cancelled', sequence: 3 },
            },
            dropdown: 'dropdown_with_none',
        }),
        issuing_date: DateColumn({ label: 'Date Issued' }),
        expiry_date: DateColumn({ label: 'Expiry Date' }),
        sponsoring_entity: StringColumn({ label: 'Sponsoring Entity', maxLength: 80 }),
        transfer_status: ChoiceColumn({
            label: 'Transfer Status',
            choices: {
                not_required: { label: 'Not Required', sequence: 0 },
                requested: { label: 'Requested', sequence: 1 },
                in_progress: { label: 'In Progress', sequence: 2 },
                complete: { label: 'Complete', sequence: 3 },
            },
            dropdown: 'dropdown_with_none',
        }),
        transfer_to_entity: StringColumn({ label: 'Transfer To Entity', maxLength: 80 }),
        last_verified: DateTimeColumn({ label: 'Last Verified' }),
    },
    display: 'agsva_reference',
})

// ============================================================
// TABLE 3: Entra ID / AD Account Provisioning
// ============================================================
export const x_snc_fed_forum_on_entra_account = Table({
    name: 'x_snc_fed_forum_on_entra_account',
    label: 'Entra ID Account Provisioning',
    allow_web_service_access: true,
    schema: {
        upn: StringColumn({ label: 'User Principal Name', maxLength: 80 }),
        display_name: StringColumn({ label: 'Display Name', maxLength: 80 }),
        sap_employee_id: StringColumn({ label: 'SAP Employee ID', maxLength: 8 }),
        account_status: ChoiceColumn({
            label: 'Account Status',
            choices: {
                not_created: { label: 'Not Created', sequence: 0 },
                provisioning: { label: 'Provisioning', sequence: 1 },
                active: { label: 'Active', sequence: 2 },
                disabled: { label: 'Disabled', sequence: 3 },
            },
            dropdown: 'dropdown_with_none',
        }),
        mfa_enrolled: BooleanColumn({ label: 'MFA Enrolled', default: false }),
        assigned_licenses: StringColumn({ label: 'Assigned Licenses', maxLength: 200 }),
        provisioned_date: DateTimeColumn({ label: 'Provisioned Date' }),
        provisioned_by: StringColumn({ label: 'Provisioned By', maxLength: 40 }),
        entra_object_id: StringColumn({ label: 'Entra Object ID', maxLength: 36 }),
    },
    display: 'upn',
})

// ============================================================
// TABLE 4: Facilities Access Control
// ============================================================
export const x_snc_fed_forum_on_facility_access = Table({
    name: 'x_snc_fed_forum_on_facility_access',
    label: 'Facilities Access Control',
    allow_web_service_access: true,
    schema: {
        badge_number: StringColumn({ label: 'Badge Number', maxLength: 12 }),
        employee_name: StringColumn({ label: 'Employee Name', maxLength: 80 }),
        sap_employee_id: StringColumn({ label: 'SAP Employee ID', maxLength: 8 }),
        building: StringColumn({ label: 'Building', maxLength: 80 }),
        access_zones: StringColumn({ label: 'Access Zones', maxLength: 200 }),
        after_hours: BooleanColumn({ label: 'After Hours Access', default: false }),
        pass_status: ChoiceColumn({
            label: 'Pass Status',
            choices: {
                not_requested: { label: 'Not Requested', sequence: 0 },
                requested: { label: 'Requested', sequence: 1 },
                issued: { label: 'Issued', sequence: 2 },
                collected: { label: 'Collected', sequence: 3 },
            },
            dropdown: 'dropdown_with_none',
        }),
        issued_date: DateColumn({ label: 'Issued Date' }),
        photo_id_verified: BooleanColumn({ label: 'Photo ID Verified', default: false }),
    },
    display: 'employee_name',
})

// ============================================================
// TABLE 5: Onboarding Orchestration Record (central record)
// ============================================================
export const x_snc_fed_forum_on_orchestration = Table({
    name: 'x_snc_fed_forum_on_orchestration',
    label: 'Onboarding Orchestration',
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'ONB',
        number: 1,
        numberOfDigits: 7,
    },
    schema: {
        number: StringColumn({
            label: 'Number',
            maxLength: 20,
            default: 'javascript:global.getNextObjNumberPadded();',
        }),
        employee_name: StringColumn({ label: 'Employee Name', maxLength: 80 }),
        sap_record: ReferenceColumn({
            label: 'SAP Employee Record',
            referenceTable: 'x_snc_fed_forum_on_sap_employee',
            attributes: {
                encode_utf8: false,
            },
        }),
        agsva_record: ReferenceColumn({
            label: 'AGSVA Clearance Record',
            referenceTable: 'x_snc_fed_forum_on_agsva_clearance',
            attributes: {
                encode_utf8: false,
            },
        }),
        entra_record: ReferenceColumn({
            label: 'Entra ID Account Record',
            referenceTable: 'x_snc_fed_forum_on_entra_account',
            attributes: {
                encode_utf8: false,
            },
        }),
        facility_record: ReferenceColumn({
            label: 'Facility Access Record',
            referenceTable: 'x_snc_fed_forum_on_facility_access',
            attributes: {
                encode_utf8: false,
            },
        }),
        hrsd_lifecycle_event: ReferenceColumn({
            label: 'HRSD Lifecycle Event',
            referenceTable: 'sn_hr_le_lifecycle_event',
            attributes: {
                encode_utf8: false,
            },
        }),
        state: ChoiceColumn({
            label: 'State',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                clearance_verified: { label: 'Clearance Verified', sequence: 1 },
                provisioning: { label: 'Provisioning', sequence: 2 },
                in_progress: { label: 'In Progress', sequence: 3 },
                complete: { label: 'Complete', sequence: 4 },
            },
            dropdown: 'dropdown_with_none',
            default: 'draft',
        }),
        initiated_by: ReferenceColumn({
            label: 'Initiated By',
            referenceTable: 'sys_user',
            attributes: {
                encode_utf8: false,
            },
        }),
        initiated_date: DateTimeColumn({ label: 'Initiated Date' }),
        target_start_date: DateColumn({ label: 'Target Start Date' }),
        overall_readiness: ChoiceColumn({
            label: 'Overall Readiness',
            choices: {
                not_ready: { label: 'Not Ready', sequence: 0 },
                partially_ready: { label: 'Partially Ready', sequence: 1 },
                ready: { label: 'Ready', sequence: 2 },
            },
            dropdown: 'dropdown_with_none',
            default: 'not_ready',
        }),
        work_notes: GenericColumn({
            columnType: 'journal_input',
            label: 'Work notes',
            maxLength: 40,
        }),
    },
    display: 'number',
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    index: [
        {
            name: 'index',
            unique: false,
            element: 'agsva_record',
        },
        {
            name: 'index2',
            unique: false,
            element: 'entra_record',
        },
        {
            name: 'index3',
            unique: false,
            element: 'facility_record',
        },
        {
            name: 'index4',
            unique: false,
            element: 'hrsd_lifecycle_event',
        },
        {
            name: 'index5',
            unique: false,
            element: 'initiated_by',
        },
        {
            name: 'index6',
            unique: false,
            element: 'sap_record',
        },
    ],
})

// ============================================================
// TABLE 6: Integration Activity Log
// ============================================================
export const x_snc_fed_forum_on_integration_log = Table({
    name: 'x_snc_fed_forum_on_integration_log',
    label: 'Integration Activity Log',
    allow_web_service_access: true,
    schema: {
        orchestration: ReferenceColumn({
            label: 'Orchestration',
            referenceTable: 'x_snc_fed_forum_on_orchestration',
        }),
        sequence: IntegerColumn({ label: 'Sequence' }),
        target_system: ChoiceColumn({
            label: 'Target System',
            choices: {
                agsva: { label: 'AGSVA', sequence: 0 },
                sap_hcm: { label: 'SAP HCM', sequence: 1 },
                entra_id: { label: 'Entra ID', sequence: 2 },
                facilities: { label: 'Facilities', sequence: 3 },
                hrsd: { label: 'HRSD', sequence: 4 },
            },
            dropdown: 'dropdown_with_none',
        }),
        action: StringColumn({ label: 'Action', maxLength: 200 }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                pending: { label: 'Pending', sequence: 0 },
                in_flight: { label: 'In Flight', sequence: 1 },
                success: { label: 'Success', sequence: 2 },
                failed: { label: 'Failed', sequence: 3 },
            },
            dropdown: 'dropdown_with_none',
        }),
        detail: StringColumn({ label: 'Detail', maxLength: 500 }),
        timestamp: DateTimeColumn({ label: 'Timestamp' }),
        duration_ms: IntegerColumn({ label: 'Duration (ms)' }),
    },
    display: 'action',
})

// ============================================================
// TABLE 7: Demo Screenshots (upload one image per phase)
// ============================================================
export const x_snc_fed_forum_on_demo_screenshot = Table({
    name: 'x_snc_fed_forum_on_demo_screenshot',
    label: 'Demo Screenshot',
    allow_web_service_access: true,
    schema: {
        phase: ChoiceColumn({
            label: 'Phase',
            choices: {
                verify_clearance: { label: 'Verify Clearance', sequence: 0 },
                initiate_onboarding: { label: 'Initiate Onboarding', sequence: 1 },
                provision_identity: { label: 'Provision Identity', sequence: 2 },
                request_building_access: { label: 'Request Building Access', sequence: 3 },
                mark_ready: { label: 'Mark Ready', sequence: 4 },
            },
            dropdown: 'dropdown_with_none',
        }),
        description: StringColumn({ label: 'Description', maxLength: 200 }),
    },
    display: 'phase',
})
