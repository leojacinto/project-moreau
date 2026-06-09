import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import { travelUser } from '../roles/roles.now'

export const travelMenu = ApplicationMenu({
    $id: Now.ID['travel_management_menu'],
    title: 'Travel Management',
    description: 'Travel request management application menu',
    hint: 'Submit and manage travel requests, expenses, and policies',
    active: true,
    order: 100,
    roles: [travelUser],
})

// --- Modules (as sys_app_module records via Record API) ---

export const myRequestsModule = Record({
    $id: Now.ID['mod_my_requests'],
    table: 'sys_app_module',
    data: {
        title: 'My Requests',
        application: travelMenu,
        order: 100,
        link_type: 'LIST',
        name: 'x_snc_apr_trv_request',
        filter: 'traveler=javascript:gs.getUserID()',
        roles: ['x_snc_apr_trv.user'],
        active: true,
    },
})

export const allRequestsModule = Record({
    $id: Now.ID['mod_all_requests'],
    table: 'sys_app_module',
    data: {
        title: 'All Requests',
        application: travelMenu,
        order: 200,
        link_type: 'LIST',
        name: 'x_snc_apr_trv_request',
        roles: ['x_snc_apr_trv.approver'],
        active: true,
    },
})

export const awaitingApprovalModule = Record({
    $id: Now.ID['mod_awaiting_approval'],
    table: 'sys_app_module',
    data: {
        title: 'Awaiting Approval',
        application: travelMenu,
        order: 300,
        link_type: 'LIST',
        name: 'x_snc_apr_trv_request',
        filter: 'approval_status=pending',
        roles: ['x_snc_apr_trv.approver'],
        active: true,
    },
})

export const financeQueueModule = Record({
    $id: Now.ID['mod_finance_queue'],
    table: 'sys_app_module',
    data: {
        title: 'Finance Queue',
        application: travelMenu,
        order: 400,
        link_type: 'LIST',
        name: 'x_snc_apr_trv_request',
        filter: 'approval_status=finance_review',
        roles: ['x_snc_apr_trv.finance'],
        active: true,
    },
})

export const myExpensesModule = Record({
    $id: Now.ID['mod_my_expenses'],
    table: 'sys_app_module',
    data: {
        title: 'My Expenses',
        application: travelMenu,
        order: 500,
        link_type: 'LIST',
        name: 'x_snc_apr_trv_expense',
        filter: 'travel_request.traveler=javascript:gs.getUserID()',
        roles: ['x_snc_apr_trv.user'],
        active: true,
    },
})

export const allExpensesModule = Record({
    $id: Now.ID['mod_all_expenses'],
    table: 'sys_app_module',
    data: {
        title: 'All Expenses',
        application: travelMenu,
        order: 600,
        link_type: 'LIST',
        name: 'x_snc_apr_trv_expense',
        roles: ['x_snc_apr_trv.finance'],
        active: true,
    },
})

export const policiesModule = Record({
    $id: Now.ID['mod_policies'],
    table: 'sys_app_module',
    data: {
        title: 'Travel Policies',
        application: travelMenu,
        order: 700,
        link_type: 'LIST',
        name: 'x_snc_apr_trv_policy',
        roles: ['x_snc_apr_trv.admin'],
        active: true,
    },
})

export const delegationsModule = Record({
    $id: Now.ID['mod_delegations'],
    table: 'sys_app_module',
    data: {
        title: 'Delegations',
        application: travelMenu,
        order: 800,
        link_type: 'LIST',
        name: 'x_snc_apr_trv_delegation',
        roles: ['x_snc_apr_trv.approver'],
        active: true,
    },
})

export const dashboardModule = Record({
    $id: Now.ID['mod_dashboard'],
    table: 'sys_app_module',
    data: {
        title: 'Dashboard',
        application: travelMenu,
        order: 900,
        link_type: 'DIRECT',
        name: '/now/travel-management/home',
        roles: ['x_snc_apr_trv.user'],
        active: true,
    },
})
