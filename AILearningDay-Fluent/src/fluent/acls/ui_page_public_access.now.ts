import '@servicenow/sdk/global';
import { Acl } from '@servicenow/sdk/core';

// Allow public access to the agenda UI page - must use * operation and answer = true
export const agenda_ui_page_public_acl = Acl({
  $id: Now.ID['agenda-ui-page-public-acl'],
  name: 'x_snc_ai_learnin_4_agenda',
  type: 'ui_page',
  operation: '*',
  script: 'answer = true;',  // Allow all access including anonymous
  active: true,
  admin_overrides: false,
  description: 'Allow public access to the AI Learning Day agenda page'
});