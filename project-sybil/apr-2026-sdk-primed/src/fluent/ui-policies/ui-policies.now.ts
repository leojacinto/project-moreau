import { UiPolicy } from '@servicenow/sdk/core'

export const readOnlyAfterApproval = UiPolicy({
    $id: Now.ID['uip_readonly_after_approval'],
    table: 'x_snc_apr_trv_request',
    shortDescription: 'Read Only After Approval',
    conditions: 'approval_status=approved^ORapproval_status=finance_review',
    active: true,
    global: true,
    onLoad: true,
    reverseIfFalse: true,
    actions: [
        { field: 'destination_city', readOnly: true, visible: 'ignore', mandatory: 'ignore' },
        { field: 'destination_country', readOnly: true, visible: 'ignore', mandatory: 'ignore' },
        { field: 'departure_date', readOnly: true, visible: 'ignore', mandatory: 'ignore' },
        { field: 'return_date', readOnly: true, visible: 'ignore', mandatory: 'ignore' },
        { field: 'estimated_cost', readOnly: true, visible: 'ignore', mandatory: 'ignore' },
        { field: 'purpose', readOnly: true, visible: 'ignore', mandatory: 'ignore' },
    ],
})

export const hideActualCostBeforeTrip = UiPolicy({
    $id: Now.ID['uip_hide_actual_cost'],
    table: 'x_snc_apr_trv_request',
    shortDescription: 'Hide Actual Cost Before Trip',
    conditions: 'departure_date>javascript:gs.beginningOfToday()',
    active: true,
    global: true,
    onLoad: true,
    reverseIfFalse: true,
    actions: [
        { field: 'actual_cost', visible: false, readOnly: 'ignore', mandatory: 'ignore' },
    ],
})

export const mandatoryPurposeForInternational = UiPolicy({
    $id: Now.ID['uip_mandatory_purpose_intl'],
    table: 'x_snc_apr_trv_request',
    shortDescription: 'Mandatory Purpose for International',
    conditions: 'travel_type=international',
    active: true,
    global: true,
    onLoad: true,
    reverseIfFalse: true,
    actions: [
        { field: 'purpose', mandatory: true, visible: 'ignore', readOnly: 'ignore' },
    ],
})
