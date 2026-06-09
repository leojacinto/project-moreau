import { Property } from '@servicenow/sdk/core'

export const financeThreshold = Property({
    $id: Now.ID['prop_finance_threshold'],
    name: 'x_snc_apr_trv.finance_threshold',
    type: 'string',
    value: '5000',
    description: 'Requests above this amount require finance approval',
})

export const defaultFlightClass = Property({
    $id: Now.ID['prop_default_flight_class'],
    name: 'x_snc_apr_trv.default_flight_class',
    type: 'string',
    value: 'Economy',
    description: 'Default allowed flight class',
})

export const maxAdvanceBookingDays = Property({
    $id: Now.ID['prop_max_advance_booking'],
    name: 'x_snc_apr_trv.max_advance_booking_days',
    type: 'integer',
    value: '180',
    description: 'Maximum days in advance a request can be submitted',
})

export const autoApproveBelow = Property({
    $id: Now.ID['prop_auto_approve_below'],
    name: 'x_snc_apr_trv.auto_approve_below',
    type: 'string',
    value: '500',
    description: 'Requests below this amount auto-approve',
})

export const expenseReceiptRequiredAbove = Property({
    $id: Now.ID['prop_receipt_required_above'],
    name: 'x_snc_apr_trv.expense_receipt_required_above',
    type: 'string',
    value: '50',
    description: 'Expenses above this amount require receipt attachment',
})
