import '@servicenow/sdk/global';
import { Table, StringColumn, Record } from '@servicenow/sdk/core';

// -- Travel Approval Rule table
// Stores structured approval rules the Evaluate tool uses programmatically
export const x_snc_travel_a7t2p_travel_approval_rule = Table({
    name: 'x_snc_travel_a7t2p_travel_approval_rule',
    label: 'Travel Approval Rule',
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete'],
    allow_web_service_access: true,
    display: 'rule_name',
    schema: {
        rule_id: StringColumn({ label: 'Rule ID', maxLength: 40 }),
        rule_name: StringColumn({ label: 'Rule Name', maxLength: 200 }),
        condition_field: StringColumn({ label: 'Condition Field', maxLength: 100 }),
        condition_operator: StringColumn({ label: 'Condition Operator', maxLength: 40 }),
        condition_value: StringColumn({ label: 'Condition Value', maxLength: 200 }),
        action: StringColumn({ label: 'Action', maxLength: 40 }),
        approval_level: StringColumn({ label: 'Approval Level', maxLength: 40 }),
        policy_reference: StringColumn({ label: 'Policy Reference', maxLength: 100 }),
        message: StringColumn({ label: 'Message', maxLength: 1000 }),
    },
});

// -- Seed data: 8 approval rules

export const rule_1 = Record({
    $id: Now.ID['rule-dom-mgr'],
    table: 'x_snc_travel_a7t2p_travel_approval_rule',
    data: {
        rule_id: 'RULE_DOM_MGR',
        rule_name: 'Domestic travel requires manager approval',
        condition_field: 'travel_type',
        condition_operator: 'equals',
        condition_value: 'domestic',
        action: 'require_approval',
        approval_level: 'manager',
        policy_reference: 'TRAVEL_APPROVAL',
        message: 'Domestic travel requires direct manager approval.',
    },
});

export const rule_2 = Record({
    $id: Now.ID['rule-intl-vp'],
    table: 'x_snc_travel_a7t2p_travel_approval_rule',
    data: {
        rule_id: 'RULE_INTL_VP',
        rule_name: 'International travel requires VP approval',
        condition_field: 'travel_type',
        condition_operator: 'equals',
        condition_value: 'international',
        action: 'require_approval',
        approval_level: 'vp',
        policy_reference: 'TRAVEL_APPROVAL',
        message: 'International travel requires VP-level approval or above.',
    },
});

export const rule_3 = Record({
    $id: Now.ID['rule-biz-class'],
    table: 'x_snc_travel_a7t2p_travel_approval_rule',
    data: {
        rule_id: 'RULE_BIZ_CLASS',
        rule_name: 'Business class requires VP approval',
        condition_field: 'flight_class_requested',
        condition_operator: 'equals',
        condition_value: 'business',
        action: 'require_approval',
        approval_level: 'vp',
        policy_reference: 'AIR_TRAVEL',
        message: 'Business class requires VP-level approval and is generally reserved for executive leadership or client-facing obligations.',
    },
});

export const rule_4 = Record({
    $id: Now.ID['rule-prem-econ'],
    table: 'x_snc_travel_a7t2p_travel_approval_rule',
    data: {
        rule_id: 'RULE_PREM_ECON',
        rule_name: 'Premium economy auto-eligible for 6hr+ flights',
        condition_field: 'estimated_flight_hours',
        condition_operator: 'greater_than',
        condition_value: '6',
        action: 'auto_approve',
        approval_level: 'none',
        policy_reference: 'AIR_TRAVEL',
        message: 'Premium economy is permitted for flights 6 hours or longer.',
    },
});

export const rule_5 = Record({
    $id: Now.ID['rule-accom-dom'],
    table: 'x_snc_travel_a7t2p_travel_approval_rule',
    data: {
        rule_id: 'RULE_ACCOM_DOM',
        rule_name: 'Domestic accommodation cap $250 AUD',
        condition_field: 'estimated_accommodation_per_night',
        condition_operator: 'greater_than',
        condition_value: '250',
        action: 'flag',
        approval_level: 'manager',
        policy_reference: 'ACCOMMODATION',
        message: 'Nightly rate exceeds the $250 AUD domestic cap. Exception approval required.',
    },
});

export const rule_6 = Record({
    $id: Now.ID['rule-accom-intl'],
    table: 'x_snc_travel_a7t2p_travel_approval_rule',
    data: {
        rule_id: 'RULE_ACCOM_INTL',
        rule_name: 'International accommodation cap $250 USD',
        condition_field: 'estimated_accommodation_per_night',
        condition_operator: 'greater_than',
        condition_value: '250',
        action: 'flag',
        approval_level: 'manager',
        policy_reference: 'ACCOMMODATION',
        message: 'Nightly rate exceeds the $250 USD international cap. Exception approval required.',
    },
});

export const rule_7 = Record({
    $id: Now.ID['rule-entertain-cap'],
    table: 'x_snc_travel_a7t2p_travel_approval_rule',
    data: {
        rule_id: 'RULE_ENTERTAIN_CAP',
        rule_name: 'Client entertainment per-person cap $100',
        condition_field: 'estimated_entertainment',
        condition_operator: 'greater_than',
        condition_value: '0',
        action: 'require_approval',
        approval_level: 'manager',
        policy_reference: 'CLIENT_ENTERTAINMENT',
        message: 'Client entertainment requires prior manager approval with attendee names and business purpose.',
    },
});

export const rule_8 = Record({
    $id: Now.ID['rule-advance-dom'],
    table: 'x_snc_travel_a7t2p_travel_approval_rule',
    data: {
        rule_id: 'RULE_ADVANCE_DOM',
        rule_name: 'Domestic advance booking 10 days',
        condition_field: 'departure_date',
        condition_operator: 'less_than',
        condition_value: '10',
        action: 'flag',
        approval_level: 'none',
        policy_reference: 'TRAVEL_APPROVAL',
        message: 'Domestic travel should be submitted at least 10 business days in advance. Late submissions may delay approval.',
    },
});
