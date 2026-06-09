import '@servicenow/sdk/global';
import { Acl } from '@servicenow/sdk/core';
import { ai_learning_viewer, ai_learning_contributor, ai_learning_admin } from '../roles/ai_learning_roles.now';

// ACL for reading AI sessions - viewers and above can read
export const ai_sessions_read_acl = Acl({
  $id: Now.ID['ai_sessions_read_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_ai_sessions',
  operation: 'read',
  roles: [ai_learning_viewer],
  description: 'Allow viewers and above to read AI Learning Day sessions',
  active: true,
  adminOverrides: true
});

// ACL for anonymous/public read access to AI sessions
export const ai_sessions_public_read_acl = Acl({
  $id: Now.ID['ai_sessions_public_read_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_ai_sessions',
  operation: 'read',
  script: `answer = true;`, // Allow all read access - authenticated and anonymous
  description: 'Allow all users to read AI Learning Day sessions',
  active: true,
  adminOverrides: false
});

// ACL for creating AI sessions - contributors and above can create
export const ai_sessions_create_acl = Acl({
  $id: Now.ID['ai_sessions_create_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_ai_sessions',
  operation: 'create',
  roles: [ai_learning_contributor],
  description: 'Allow contributors and above to create AI Learning Day sessions',
  active: true,
  adminOverrides: true
});

// ACL for updating AI sessions - contributors can update their own, admins can update all
export const ai_sessions_write_contributor_acl = Acl({
  $id: Now.ID['ai_sessions_write_contributor_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_ai_sessions',
  operation: 'write',
  roles: [ai_learning_contributor],
  script: `
    // Contributors can only edit sessions they created
    var isCreator = (current.sys_created_by == gs.getUserName());
    answer = isCreator;
  `,
  description: 'Allow contributors to update their own AI Learning Day sessions',
  active: true,
  adminOverrides: true
});

// ACL for updating AI sessions - admins can update any session
export const ai_sessions_write_admin_acl = Acl({
  $id: Now.ID['ai_sessions_write_admin_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_ai_sessions',
  operation: 'write',
  roles: [ai_learning_admin],
  description: 'Allow admins to update any AI Learning Day session',
  active: true,
  adminOverrides: true
});

// ACL for deleting AI sessions - only admins can delete
export const ai_sessions_delete_acl = Acl({
  $id: Now.ID['ai_sessions_delete_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_ai_sessions',
  operation: 'delete',
  roles: [ai_learning_admin],
  description: 'Allow only admins to delete AI Learning Day sessions',
  active: true,
  adminOverrides: true
});

// ACL to allow authenticated users and anonymous access to the UI Page
export const agenda_page_access_acl = Acl({
  $id: Now.ID['agenda_page_access_acl'],
  type: 'ui_page',
  name: 'x_snc_ai_learnin_4_agenda',
  operation: 'execute',
  script: `answer = true;`, // Allow all access - both authenticated and anonymous
  description: 'Allow all users (authenticated and anonymous) to access the AI Learning Day agenda page',
  active: true,
  adminOverrides: false
});

// Field-level ACL for all fields - contributors can write to all fields they own, admins can write to any
export const ai_sessions_fields_write_contributor_acl = Acl({
  $id: Now.ID['ai_sessions_fields_write_contributor_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_ai_sessions',
  field: '*',
  operation: 'write',
  roles: [ai_learning_contributor],
  script: `
    // Contributors can only edit fields on sessions they created
    var isCreator = (current.sys_created_by == gs.getUserName());
    answer = isCreator;
  `,
  description: 'Allow contributors to edit all fields on their own AI Learning Day sessions',
  active: true,
  adminOverrides: true
});

// Field-level ACL for all fields - admins can write to any session's fields
export const ai_sessions_fields_write_admin_acl = Acl({
  $id: Now.ID['ai_sessions_fields_write_admin_acl'],
  type: 'record',
  table: 'x_snc_ai_learnin_4_ai_sessions',
  field: '*',
  operation: 'write',
  roles: [ai_learning_admin],
  description: 'Allow admins to edit all fields on any AI Learning Day session',
  active: true,
  adminOverrides: true
});