import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Create a simple test page
export const test_page = Record({
  $id: Now.ID['test-page'],
  table: 'sp_page',
  data: {
    id: 'test_debug',
    title: 'Test Debug Page',
    public: true,
    roles: []
  }
});

// Create container for test page
export const test_container = Record({
  $id: Now.ID['test-container'],
  table: 'sp_container',
  data: {
    sp_page: Now.ID['test-page'],
    name: 'test_container',
    title: 'Test Container',
    order: 0,
    width: 12,
    class_name: 'container-fluid'
  }
});

// Create row for test
export const test_row = Record({
  $id: Now.ID['test-row'],
  table: 'sp_row',
  data: {
    sp_container: Now.ID['test-container'],
    order: 0
  }
});

// Create column for test
export const test_column = Record({
  $id: Now.ID['test-column'],
  table: 'sp_column',
  data: {
    sp_row: Now.ID['test-row'],
    class_name: 'col-md-12',
    order: 0
  }
});

// Create widget instance for test
export const test_widget_instance = Record({
  $id: Now.ID['test-widget-instance'],
  table: 'sp_instance',
  data: {
    sp_widget: Now.ID['simple-test-widget'],
    sp_column: Now.ID['test-column'],
    title: 'Test Widget',
    order: 0
  }
});