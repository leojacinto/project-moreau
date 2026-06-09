import '@servicenow/sdk/global';
import { Acl } from '@servicenow/sdk/core';
import { ai_learning_viewer, ai_learning_admin } from '../roles/ai_learning_roles.now';

// ACL for reading role choices - viewers and above can read 
export const role_choices_read_acl = Acl({
  $id: Now.ID['role_choices_read_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_role_choices',
  operation: 'read',
  roles: [ai_learning_viewer],
  description: 'Allow viewers and above to read role choices reference data',
  active: true,
  adminOverrides: true
});

// ACL for creating/updating role choices - only admins
export const role_choices_write_acl = Acl({
  $id: Now.ID['role_choices_write_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_role_choices',
  operation: 'write',
  roles: [ai_learning_admin],
  description: 'Allow only admins to modify role choices reference data',
  active: true,
  adminOverrides: true
});

// ACL for creating role choices - only admins
export const role_choices_create_acl = Acl({
  $id: Now.ID['role_choices_create_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_role_choices',
  operation: 'create',
  roles: [ai_learning_admin],
  description: 'Allow only admins to create role choices reference data',
  active: true,
  adminOverrides: true
});

// ACL for deleting role choices - only admins
export const role_choices_delete_acl = Acl({
  $id: Now.ID['role_choices_delete_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_role_choices',
  operation: 'delete',
  roles: [ai_learning_admin],
  description: 'Allow only admins to delete role choices reference data',
  active: true,
  adminOverrides: true
});