import {
  Table,
  StringColumn,
  DateColumn,
  ChoiceColumn,
  ReferenceColumn,
  DecimalColumn,
  BooleanColumn,
} from '@servicenow/sdk/core'

export const x_snc_apr_tv3b_request = Table({
  name: 'x_snc_apr_tv3b_request',
  label: 'Travel Request',
  extends: 'task',
  allowWebServiceAccess: true,
  autoNumber: { prefix: 'TRVL', number: 1000000, numberOfDigits: 7 },
  schema: {
    x_snc_apr_tv3b_traveler: ReferenceColumn({
      label: 'Traveler',
      referenceTable: 'sys_user',
    }),
    x_snc_apr_tv3b_destination_city: StringColumn({
      label: 'Destination City',
      maxLength: 100,
    }),
    x_snc_apr_tv3b_destination_country: StringColumn({
      label: 'Destination Country',
      maxLength: 100,
    }),
    x_snc_apr_tv3b_departure_date: DateColumn({
      label: 'Departure Date',
      mandatory: true,
    }),
    x_snc_apr_tv3b_return_date: DateColumn({
      label: 'Return Date',
      mandatory: true,
    }),
    x_snc_apr_tv3b_estimated_cost: DecimalColumn({
      label: 'Estimated Cost',
      scale: 2,
    }),
    x_snc_apr_tv3b_actual_cost: DecimalColumn({
      label: 'Actual Cost',
      scale: 2,
    }),
    x_snc_apr_tv3b_purpose: ChoiceColumn({
      label: 'Purpose',
      choices: {
        conference: { label: 'Conference' },
        client_meeting: { label: 'Client Meeting' },
        training: { label: 'Training' },
        internal: { label: 'Internal' },
        other: { label: 'Other' },
      },
    }),
    x_snc_apr_tv3b_department: ReferenceColumn({
      label: 'Department',
      referenceTable: 'cmn_department',
    }),
    x_snc_apr_tv3b_approval_status: ChoiceColumn({
      label: 'Approval Status',
      choices: {
        pending: { label: 'Pending' },
        approved: { label: 'Approved' },
        rejected: { label: 'Rejected' },
        finance_review: { label: 'Finance Review' },
      },
      default: 'pending',
    }),
    x_snc_apr_tv3b_travel_type: ChoiceColumn({
      label: 'Travel Type',
      choices: {
        domestic: { label: 'Domestic' },
        international: { label: 'International' },
      },
    }),
    x_snc_apr_tv3b_requires_visa: BooleanColumn({
      label: 'Requires Visa',
    }),
  },
})

export const x_snc_apr_tv3b_expense = Table({
  name: 'x_snc_apr_tv3b_expense',
  label: 'Travel Expense',
  extends: 'task',
  allowWebServiceAccess: true,
  autoNumber: { prefix: 'TEXP', number: 1000000, numberOfDigits: 7 },
  schema: {
    x_snc_apr_tv3b_travel_request: ReferenceColumn({
      label: 'Travel Request',
      referenceTable: 'x_snc_apr_tv3b_request',
    }),
    x_snc_apr_tv3b_expense_type: ChoiceColumn({
      label: 'Expense Type',
      choices: {
        airfare: { label: 'Airfare' },
        hotel: { label: 'Hotel' },
        meals: { label: 'Meals' },
        transport: { label: 'Transport' },
        visa: { label: 'Visa' },
        other: { label: 'Other' },
      },
    }),
    x_snc_apr_tv3b_amount: DecimalColumn({
      label: 'Amount',
      scale: 2,
    }),
    x_snc_apr_tv3b_expense_date: DateColumn({
      label: 'Expense Date',
    }),
    x_snc_apr_tv3b_vendor: StringColumn({
      label: 'Vendor',
      maxLength: 200,
    }),
    x_snc_apr_tv3b_reimbursement_status: ChoiceColumn({
      label: 'Reimbursement Status',
      choices: {
        submitted: { label: 'Submitted' },
        approved: { label: 'Approved' },
        paid: { label: 'Paid' },
        rejected: { label: 'Rejected' },
      },
      default: 'submitted',
    }),
  },
})

export const x_snc_apr_tv3b_policy = Table({
  name: 'x_snc_apr_tv3b_policy',
  label: 'Travel Policy',
  allowWebServiceAccess: true,
  schema: {
    x_snc_apr_tv3b_policy_name: StringColumn({
      label: 'Policy Name',
      maxLength: 200,
    }),
    x_snc_apr_tv3b_max_daily_hotel: DecimalColumn({
      label: 'Max Daily Hotel',
      scale: 2,
    }),
    x_snc_apr_tv3b_max_daily_meals: DecimalColumn({
      label: 'Max Daily Meals',
      scale: 2,
    }),
    x_snc_apr_tv3b_max_flight_class: ChoiceColumn({
      label: 'Max Flight Class',
      choices: {
        economy: { label: 'Economy' },
        premium_economy: { label: 'Premium Economy' },
        business: { label: 'Business' },
      },
    }),
    x_snc_apr_tv3b_applies_to_country: StringColumn({
      label: 'Applies to Country',
      maxLength: 100,
    }),
    x_snc_apr_tv3b_finance_threshold: DecimalColumn({
      label: 'Requires Finance Approval Above',
      scale: 2,
    }),
    x_snc_apr_tv3b_active: BooleanColumn({
      label: 'Active',
      default: true,
    }),
  },
})

export const x_snc_apr_tv3b_delegation = Table({
  name: 'x_snc_apr_tv3b_delegation',
  label: 'Travel Delegation',
  allowWebServiceAccess: true,
  schema: {
    x_snc_apr_tv3b_delegator: ReferenceColumn({
      label: 'Delegator',
      referenceTable: 'sys_user',
    }),
    x_snc_apr_tv3b_delegate: ReferenceColumn({
      label: 'Delegate',
      referenceTable: 'sys_user',
    }),
    x_snc_apr_tv3b_start_date: DateColumn({
      label: 'Start Date',
    }),
    x_snc_apr_tv3b_end_date: DateColumn({
      label: 'End Date',
    }),
    x_snc_apr_tv3b_active: BooleanColumn({
      label: 'Active',
      default: true,
    }),
  },
})
