import { ImportSet, Record } from '@servicenow/sdk/core'

// Data Sources (sys_data_source) via Record
export const dsExpenseImport = Record({
  $id: Now.ID['ds-expense-import'],
  table: 'sys_data_source',
  data: {
    name: 'Travel Expense Import',
    import_set_table_name: 'u_import_travel_expenses',
    type: 'File',
    format: 'CSV',
    header_row: 1,
  },
})

export const dsRequestImport = Record({
  $id: Now.ID['ds-request-import'],
  table: 'sys_data_source',
  data: {
    name: 'Travel Request Import',
    import_set_table_name: 'u_import_travel_requests',
    type: 'File',
    format: 'CSV',
    header_row: 1,
  },
})

// Import Sets / Transform Maps
export const importExpenses = ImportSet({
  $id: Now.ID['import-expenses'],
  name: 'Travel Expense Transform',
  targetTable: 'x_snc_apr_tv3b_expense',
  sourceTable: 'u_import_travel_expenses',
  active: true,
  order: 100,
  fields: {
    x_snc_apr_tv3b_expense_type: 'u_expense_type',
    x_snc_apr_tv3b_amount: 'u_amount',
    x_snc_apr_tv3b_vendor: 'u_vendor',
    x_snc_apr_tv3b_expense_date: 'u_expense_date',
    short_description: 'u_description',
  },
})

export const importRequests = ImportSet({
  $id: Now.ID['import-requests'],
  name: 'Travel Request Transform',
  targetTable: 'x_snc_apr_tv3b_request',
  sourceTable: 'u_import_travel_requests',
  active: true,
  order: 100,
  fields: {
    x_snc_apr_tv3b_destination_city: 'u_destination_city',
    x_snc_apr_tv3b_destination_country: 'u_destination_country',
    x_snc_apr_tv3b_departure_date: 'u_departure_date',
    x_snc_apr_tv3b_return_date: 'u_return_date',
    x_snc_apr_tv3b_estimated_cost: 'u_estimated_cost',
    x_snc_apr_tv3b_purpose: 'u_purpose',
    short_description: 'u_description',
  },
})
