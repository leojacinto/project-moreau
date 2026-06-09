import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Create a simplified Service Portal page
export const simple_ai_learning_page = Record({
  $id: Now.ID['simple_ai_learning_page'],
  table: 'sp_page',
  data: {
    id: 'ai_agenda',
    title: 'AI Learning Day Agenda',
    public: true, // CRITICAL: Makes the page publicly accessible without login
    roles: []     // Empty roles = available to all
  }
});

// Create the page content directly using a simple HTML approach
export const simple_ai_learning_content = Record({
  $id: Now.ID['simple_ai_learning_content'],  
  table: 'sp_instance',
  data: {
    sp_widget: 'ai_sessions_list',
    page: 'ai_agenda',
    title: 'AI Learning Sessions',
    order: 1
  }
});