import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Create an Application Menu module that links to the public Service Portal page
export const ai_learning_agenda_menu_module = Record({
  $id: Now.ID['ai_learning_agenda_menu_module'],
  table: 'sys_app_module',
  data: {
    title: 'Public Agenda (Service Portal)',
    active: true,
    link_type: 'DIRECT',
    query: 'sp?id=ai_learning_agenda', // Link to our Service Portal page
    hint: 'Public AI Learning Day Agenda - accessible without login',
    roles: [], // Available to all authenticated users
    order: 50
  }
});