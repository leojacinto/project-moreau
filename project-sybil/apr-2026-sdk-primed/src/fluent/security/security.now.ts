import { Record } from '@servicenow/sdk/core'

// --- §28 Security Attributes ---

export const departmentRestrictedAttr = Record({
    $id: Now.ID['sec_attr_dept_restricted'],
    table: 'sys_security_type',
    data: {
        name: 'x_snc_apr_trv.department_restricted',
        description: 'Used with security data filters to restrict request visibility by department',
        active: true,
    },
})

// --- §29 Security Data Filters ---

export const departmentScopeFilter = Record({
    $id: Now.ID['sec_filter_dept_scope'],
    table: 'sys_security_acl',
    data: {
        name: 'x_snc_apr_trv_request',
        operation: 'record',
        type: 'record',
        description: 'Users see own requests or requests from their department',
        active: true,
        condition: 'department=javascript:gs.getUser().getDepartmentID()^ORtraveler=javascript:gs.getUserID()',
    },
})

export const financeFullViewFilter = Record({
    $id: Now.ID['sec_filter_finance_full'],
    table: 'sys_security_acl',
    data: {
        name: 'x_snc_apr_trv_expense',
        operation: 'record',
        type: 'record',
        description: 'Finance sees all expenses - no filter applied',
        active: true,
    },
})
