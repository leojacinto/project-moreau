import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Create AI Sessions Test Page
export const ai_sessions_test_page = Record({
  $id: Now.ID['ai-sessions-test-page'],
  table: 'sp_page',
  data: {
    id: 'ai_sessions_test',
    title: 'AI Sessions Test Page',
    public: true,
    roles: []
  }
});

// Create container for AI sessions test page
export const ai_sessions_test_container = Record({
  $id: Now.ID['ai-sessions-test-container'],
  table: 'sp_container',
  data: {
    sp_page: Now.ID['ai-sessions-test-page'],
    name: 'ai_sessions_test_container',
    title: 'AI Sessions Container',
    order: 0,
    width: 12,
    class_name: 'container-fluid'
  }
});

// Create row for AI sessions test
export const ai_sessions_test_row = Record({
  $id: Now.ID['ai-sessions-test-row'],
  table: 'sp_row',
  data: {
    sp_container: Now.ID['ai-sessions-test-container'],
    order: 0
  }
});

// Create column for AI sessions test
export const ai_sessions_test_column = Record({
  $id: Now.ID['ai-sessions-test-column'],
  table: 'sp_column',
  data: {
    sp_row: Now.ID['ai-sessions-test-row'],
    class_name: 'col-md-12',
    order: 0
  }
});

// Create widget instance for AI sessions
export const ai_sessions_test_widget_instance = Record({
  $id: Now.ID['ai-sessions-test-widget-instance'],
  table: 'sp_instance',
  data: {
    sp_widget: Now.ID['ai_sessions_list_widget'],
    sp_column: Now.ID['ai-sessions-test-column'],
    title: 'AI Sessions List Widget',
    order: 0
  }
});