import { Property } from '@servicenow/sdk/core'

export const propFinanceThreshold = Property({
  $id: Now.ID['prop-finance-threshold'],
  name: 'x_snc_apr_tv3b.finance_threshold',
  type: 'string',
  value: '5000',
  description: 'Requests above this amount require finance approval',
})

export const propDefaultFlightClass = Property({
  $id: Now.ID['prop-default-flight-class'],
  name: 'x_snc_apr_tv3b.default_flight_class',
  type: 'string',
  value: 'Economy',
  description: 'Default allowed flight class',
})

export const propMaxAdvanceBooking = Property({
  $id: Now.ID['prop-max-advance-booking'],
  name: 'x_snc_apr_tv3b.max_advance_booking_days',
  type: 'integer',
  value: '180',
  description: 'Maximum days in advance a request can be submitted',
})

export const propAutoApproveBelow = Property({
  $id: Now.ID['prop-auto-approve-below'],
  name: 'x_snc_apr_tv3b.auto_approve_below',
  type: 'string',
  value: '500',
  description: 'Requests below this amount auto-approve',
})

export const propExpenseReceiptRequired = Property({
  $id: Now.ID['prop-expense-receipt-required'],
  name: 'x_snc_apr_tv3b.expense_receipt_required_above',
  type: 'string',
  value: '50',
  description: 'Expenses above this amount require receipt attachment',
})
