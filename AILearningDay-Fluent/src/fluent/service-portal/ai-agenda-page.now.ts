import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Create the Service Portal page
Record({
  $id: Now.ID['ai-agenda-page'],
  table: 'sp_page',
  data: {
    id: 'ai_agenda',
    title: 'AI Learning Day Agenda',
    public: true,
    roles: [],
    css: '',
    internal: false
  }
});

// Create the page container
Record({
  $id: Now.ID['ai-agenda-container'],
  table: 'sp_container',
  data: {
    name: 'AI Agenda Container',
    page: Now.ID['ai-agenda-page'],
    class_name: 'container-fluid',
    order: 0,
    width: 12,
    bootstrap_alt: false
  }
});

// Create the row
Record({
  $id: Now.ID['ai-agenda-row'],
  table: 'sp_row',
  data: {
    name: 'AI Agenda Row',
    container: Now.ID['ai-agenda-container'],
    class_name: 'row',
    order: 0
  }
});

// Create the column
Record({
  $id: Now.ID['ai-agenda-column'],
  table: 'sp_column',
  data: {
    name: 'AI Agenda Column',
    row: Now.ID['ai-agenda-row'],
    class_name: 'col-md-12',
    size: 'md',
    order: 0
  }
});

// Create widget instance linking our widget to the column
Record({
  $id: Now.ID['ai-agenda-widget-instance'],
  table: 'sp_instance',
  data: {
    sp_widget: Now.ID['ai-sessions-widget'], // Reference the widget we'll create
    sp_column: Now.ID['ai-agenda-column'],
    order: 0,
    color: 'default',
    size: 'md',
    title: 'AI Learning Day Sessions',
    options: JSON.stringify({
      title: 'AI Learning Day Sessions',
      show_filters: true
    })
  }
});