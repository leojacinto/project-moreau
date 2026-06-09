import { Record } from '@servicenow/sdk/core'

// ============================================================
// UI Formatters (sys_ui_formatter) — need ≥ 2
// ============================================================
export const fmtExpenseBreakdown = Record({
  $id: Now.ID['fmt-expense-breakdown'],
  table: 'sys_ui_formatter',
  data: {
    name: 'x_snc_apr_tv3b_request.expense_breakdown',
    table: 'x_snc_apr_tv3b_request',
    formatter: 'x_snc_apr_tv3b_request.expense_breakdown',
    type: 'formatter',
    active: true,
  },
})

export const fmtApprovalTimeline = Record({
  $id: Now.ID['fmt-approval-timeline'],
  table: 'sys_ui_formatter',
  data: {
    name: 'x_snc_apr_tv3b_request.approval_timeline',
    table: 'x_snc_apr_tv3b_request',
    formatter: 'x_snc_apr_tv3b_request.approval_timeline',
    type: 'formatter',
    active: true,
  },
})

// ============================================================
// List Controls (sys_ui_list_control) — need ≥ 3
// ============================================================
export const lcRequestFilter = Record({
  $id: Now.ID['lc-request-filter'],
  table: 'sys_ui_list_control',
  data: {
    name: 'Travel Request Filters',
    table: 'x_snc_apr_tv3b_request',
    category: 'filter',
    active: true,
  },
})

export const lcExpenseFilter = Record({
  $id: Now.ID['lc-expense-filter'],
  table: 'sys_ui_list_control',
  data: {
    name: 'Travel Expense Filters',
    table: 'x_snc_apr_tv3b_expense',
    category: 'filter',
    active: true,
  },
})

export const lcPolicyFilter = Record({
  $id: Now.ID['lc-policy-filter'],
  table: 'sys_ui_list_control',
  data: {
    name: 'Travel Policy Filters',
    table: 'x_snc_apr_tv3b_policy',
    category: 'filter',
    active: true,
  },
})

// ============================================================
// Views & View Rules (sys_ui_view) — need ≥ 3
// ============================================================
export const viewDefault = Record({
  $id: Now.ID['view-default'],
  table: 'sys_ui_view',
  data: {
    name: 'x_snc_apr_tv3b_default',
    title: 'Default',
  },
})

export const viewApprover = Record({
  $id: Now.ID['view-approver'],
  table: 'sys_ui_view',
  data: {
    name: 'x_snc_apr_tv3b_approver',
    title: 'Approver View',
  },
})

export const viewFinance = Record({
  $id: Now.ID['view-finance'],
  table: 'sys_ui_view',
  data: {
    name: 'x_snc_apr_tv3b_finance',
    title: 'Finance View',
  },
})

// ============================================================
// Relationships (sys_relationship) — need ≥ 4
// ============================================================
export const relRequestExpenses = Record({
  $id: Now.ID['rel-request-expenses'],
  table: 'sys_relationship',
  data: {
    name: 'Travel Request → Expenses',
    parent_table: 'x_snc_apr_tv3b_request',
    query_from: "var parentSysId = parent.sys_id;\ncurrent.addQuery('x_snc_apr_tv3b_travel_request', parentSysId);",
    apply_to: 'x_snc_apr_tv3b_expense',
  },
})

export const relRequestApprovals = Record({
  $id: Now.ID['rel-request-approvals'],
  table: 'sys_relationship',
  data: {
    name: 'Travel Request → Approvals',
    parent_table: 'x_snc_apr_tv3b_request',
    query_from: "var parentSysId = parent.sys_id;\ncurrent.addQuery('document_id', parentSysId);",
    apply_to: 'sysapproval_approver',
  },
})

export const relUserRequests = Record({
  $id: Now.ID['rel-user-requests'],
  table: 'sys_relationship',
  data: {
    name: 'User → Travel Requests',
    parent_table: 'sys_user',
    query_from: "var parentSysId = parent.sys_id;\ncurrent.addQuery('x_snc_apr_tv3b_traveler', parentSysId);",
    apply_to: 'x_snc_apr_tv3b_request',
  },
})

export const relUserDelegations = Record({
  $id: Now.ID['rel-user-delegations'],
  table: 'sys_relationship',
  data: {
    name: 'User → Delegations',
    parent_table: 'sys_user',
    query_from: "var parentSysId = parent.sys_id;\ncurrent.addQuery('x_snc_apr_tv3b_delegator', parentSysId).addOrCondition('x_snc_apr_tv3b_delegate', parentSysId);",
    apply_to: 'x_snc_apr_tv3b_delegation',
  },
})

// ============================================================
// Security Attributes (sys_security_type) — need ≥ 1
// ============================================================
export const secAttrTravelData = Record({
  $id: Now.ID['sec-attr-travel-data'],
  table: 'sys_security_type',
  data: {
    name: 'x_snc_apr_tv3b_travel_data',
    description: 'Restricts access to travel request data based on department',
  },
})

// ============================================================
// JS Modules (sys_ux_lib_source_script) — need ≥ 2
// ============================================================
export const jsModTravelUtils = Record({
  $id: Now.ID['js-mod-travel-utils'],
  table: 'sys_ux_lib_source_script',
  data: {
    name: 'x_snc_apr_tv3b_travel_utils',
    script: 'export function formatCurrency(amount) { return "$" + parseFloat(amount).toFixed(2); }\nexport function daysBetween(d1, d2) { return Math.ceil((new Date(d2) - new Date(d1)) / 86400000); }',
  },
})

export const jsModTravelValidation = Record({
  $id: Now.ID['js-mod-travel-validation'],
  table: 'sys_ux_lib_source_script',
  data: {
    name: 'x_snc_apr_tv3b_travel_validation',
    script: 'export function validateDateRange(start, end) { return new Date(end) > new Date(start); }\nexport function validateCostPositive(cost) { return parseFloat(cost) > 0; }',
  },
})

// ============================================================
// External Connections / Aliases (sys_alias) — need ≥ 1
// ============================================================
export const aliasExpenseApi = Record({
  $id: Now.ID['alias-expense-api'],
  table: 'sys_alias',
  data: {
    name: 'x_snc_apr_tv3b_expense_api',
    id: 'x_snc_apr_tv3b_expense_api',
    type: 'connection_alias',
  },
})

// ============================================================
// Modules for Application Menu (sys_app_module)
// ============================================================
export const modMyRequests = Record({
  $id: Now.ID['mod-my-requests'],
  table: 'sys_app_module',
  data: {
    title: 'My Requests',
    order: 100,
    link_type: 'LIST',
    name: 'x_snc_apr_tv3b_request',
    filter: 'x_snc_apr_tv3b_traveler=javascript:gs.getUserID()',
    active: true,
  },
})

export const modAllRequests = Record({
  $id: Now.ID['mod-all-requests'],
  table: 'sys_app_module',
  data: {
    title: 'All Requests',
    order: 200,
    link_type: 'LIST',
    name: 'x_snc_apr_tv3b_request',
    active: true,
  },
})

export const modAwaitingApproval = Record({
  $id: Now.ID['mod-awaiting-approval'],
  table: 'sys_app_module',
  data: {
    title: 'Awaiting Approval',
    order: 300,
    link_type: 'LIST',
    name: 'x_snc_apr_tv3b_request',
    filter: 'x_snc_apr_tv3b_approval_status=pending',
    active: true,
  },
})

export const modFinanceQueue = Record({
  $id: Now.ID['mod-finance-queue'],
  table: 'sys_app_module',
  data: {
    title: 'Finance Queue',
    order: 400,
    link_type: 'LIST',
    name: 'x_snc_apr_tv3b_request',
    filter: 'x_snc_apr_tv3b_approval_status=finance_review',
    active: true,
  },
})

export const modMyExpenses = Record({
  $id: Now.ID['mod-my-expenses'],
  table: 'sys_app_module',
  data: {
    title: 'My Expenses',
    order: 500,
    link_type: 'LIST',
    name: 'x_snc_apr_tv3b_expense',
    active: true,
  },
})

export const modAllExpenses = Record({
  $id: Now.ID['mod-all-expenses'],
  table: 'sys_app_module',
  data: {
    title: 'All Expenses',
    order: 600,
    link_type: 'LIST',
    name: 'x_snc_apr_tv3b_expense',
    active: true,
  },
})

export const modPolicies = Record({
  $id: Now.ID['mod-policies'],
  table: 'sys_app_module',
  data: {
    title: 'Travel Policies',
    order: 700,
    link_type: 'LIST',
    name: 'x_snc_apr_tv3b_policy',
    active: true,
  },
})

export const modDelegations = Record({
  $id: Now.ID['mod-delegations'],
  table: 'sys_app_module',
  data: {
    title: 'Delegations',
    order: 800,
    link_type: 'LIST',
    name: 'x_snc_apr_tv3b_delegation',
    active: true,
  },
})

export const modDashboard = Record({
  $id: Now.ID['mod-dashboard'],
  table: 'sys_app_module',
  data: {
    title: 'Dashboard',
    order: 900,
    link_type: 'DIRECT',
    name: '/now/travel-management/home',
    active: true,
  },
})
