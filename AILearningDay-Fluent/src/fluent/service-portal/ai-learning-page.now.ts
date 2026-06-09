import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Create the Service Portal page for AI Learning Day Agenda
export const ai_learning_agenda_page = Record({
  $id: Now.ID['ai_learning_agenda_page'],
  table: 'sp_page',
  data: {
    id: 'ai_learning_agenda',
    title: 'AI Learning Day Agenda',
    short_description: 'Browse and filter AI Learning Day sessions',
    public: true, // CRITICAL: Makes the page publicly accessible without login
    roles: [], // Empty roles array = available to all
    css: `
      .container-fluid {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
      
      .page-header {
        text-align: center;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid #e7e7e7;
      }
      
      .page-header h1 {
        color: #333;
        margin-bottom: 10px;
      }
      
      .page-header p {
        color: #666;
        font-size: 16px;
      }
    `,
    internal: false
  }
});

// Create a container for the page layout
export const ai_learning_agenda_container = Record({
  $id: Now.ID['ai_learning_agenda_container'],
  table: 'sp_container',
  data: {
    name: 'AI Learning Agenda Container',
    title: 'AI Learning Day Agenda',
    class_name: 'container-fluid',
    background_color: '',
    color: '',
    bootstrap_alt: false,
    subheader: 'Browse and explore all AI Learning Day sessions',
    order: 1,
    sp_page: ai_learning_agenda_page.$id
  }
});

// Create a row for the layout
export const ai_learning_agenda_row = Record({
  $id: Now.ID['ai_learning_agenda_row'],
  table: 'sp_row',
  data: {
    class_name: 'row',
    background_color: '',
    color: '',
    order: 1,
    sp_container: ai_learning_agenda_container.$id
  }
});

// Create a column that contains our widget
export const ai_learning_agenda_column = Record({
  $id: Now.ID['ai_learning_agenda_column'],
  table: 'sp_column',
  data: {
    class_name: 'col-md-12',
    size: 12,
    order: 1,
    sp_row: ai_learning_agenda_row.$id
  }
});

// Create the widget instance on the page
export const ai_learning_agenda_widget_instance = Record({
  $id: Now.ID['ai_learning_agenda_widget_instance'],
  table: 'sp_instance',
  data: {
    sp_widget: 'ai_sessions_list', // Reference by widget id
    sp_column: ai_learning_agenda_column.$id,
    order: 1,
    title: 'AI Learning Day Sessions',
    color: 'default',
    bootstrap_color: 'default',
    glyph: 'calendar',
    simple_list: false,
    list_control: false,
    show_refresh: false,
    show_help: false,
    size: 'md',
    options: JSON.stringify({
      display_mode: 'full',
      show_filters: true,
      auto_refresh: false
    })
  }
});