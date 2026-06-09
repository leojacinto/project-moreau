import { CrossScopePrivilege } from '@servicenow/sdk/core'

// --- §27 Cross-Scope Privileges ---

export const readSysUser = CrossScopePrivilege({
    $id: Now.ID['csp_read_sys_user'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sys_user',
    targetScope: 'global',
    targetType: 'sys_db_object',
})

export const readCmnDepartment = CrossScopePrivilege({
    $id: Now.ID['csp_read_cmn_department'],
    operation: 'read',
    status: 'allowed',
    targetName: 'cmn_department',
    targetScope: 'global',
    targetType: 'sys_db_object',
})

export const readCoreCountry = CrossScopePrivilege({
    $id: Now.ID['csp_read_core_country'],
    operation: 'read',
    status: 'allowed',
    targetName: 'core_country',
    targetScope: 'global',
    targetType: 'sys_db_object',
})

export const readSysUserHasRole = CrossScopePrivilege({
    $id: Now.ID['csp_read_sys_user_has_role'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sys_user_has_role',
    targetScope: 'global',
    targetType: 'sys_db_object',
})
