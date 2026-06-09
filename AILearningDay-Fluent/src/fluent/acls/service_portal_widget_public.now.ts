import '@servicenow/sdk/global';
import { Acl } from '@servicenow/sdk/core';

// Allow public access to Service Portal widgets
export const service_portal_public_acl = Acl({
  $id: Now.ID['service-portal-public-acl'],
  name: '*',
  type: 'sp_widget',
  operation: 'read',
  condition: 'gs.hasRole("public")',
  script: '',
  active: true,
  admin_overrides: false,
  description: 'Allow public access to Service Portal widgets'
});