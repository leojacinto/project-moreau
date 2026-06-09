import '@servicenow/sdk/global';
import { Acl } from '@servicenow/sdk/core';

// Allow public access to execute Service Portal widget server scripts
export const service_portal_widget_execute_acl = Acl({
  $id: Now.ID['service-portal-widget-execute-acl'],
  name: '*',
  type: 'sp_widget',
  operation: 'execute',
  condition: 'gs.hasRole("public")',
  script: '',
  active: true,
  admin_overrides: false,
  description: 'Allow public access to execute Service Portal widget server scripts'
});

// Allow public access to Service Portal pages
export const service_portal_page_read_acl = Acl({
  $id: Now.ID['service-portal-page-read-acl'],
  name: '*',
  type: 'sp_page',
  operation: 'read',
  condition: 'gs.hasRole("public")',
  script: '',
  active: true,
  admin_overrides: false,
  description: 'Allow public access to Service Portal pages'
});

// Allow public access to read from ai_sessions table through Service Portal
export const ai_sessions_portal_read_acl = Acl({
  $id: Now.ID['ai-sessions-portal-read-acl'],
  name: 'x_snc_ai_learnin_4_ai_sessions',
  type: 'record',
  operation: 'read',
  condition: 'gs.hasRole("public")',
  script: '',
  active: true,
  admin_overrides: false,
  description: 'Allow public read access to ai_sessions through Service Portal'
});