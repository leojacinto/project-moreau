import { CrossScopePrivilege } from '@servicenow/sdk/core'

export const cspSysUser = CrossScopePrivilege({
  $id: Now.ID['csp-sys-user'],
  targetScope: 'global',
  targetName: 'sys_user',
  targetType: 'sys_db_object',
  operation: 'read',
  status: 'allowed',
})

export const cspCmnDepartment = CrossScopePrivilege({
  $id: Now.ID['csp-cmn-department'],
  targetScope: 'global',
  targetName: 'cmn_department',
  targetType: 'sys_db_object',
  operation: 'read',
  status: 'allowed',
})

export const cspCoreCountry = CrossScopePrivilege({
  $id: Now.ID['csp-core-country'],
  targetScope: 'global',
  targetName: 'core_country',
  targetType: 'sys_db_object',
  operation: 'read',
  status: 'allowed',
})

export const cspSysUserHasRole = CrossScopePrivilege({
  $id: Now.ID['csp-sys-user-has-role'],
  targetScope: 'global',
  targetName: 'sys_user_has_role',
  targetType: 'sys_db_object',
  operation: 'read',
  status: 'allowed',
})
