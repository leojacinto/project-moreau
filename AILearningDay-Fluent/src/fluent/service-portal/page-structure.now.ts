import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Create a container for the Service Portal page
export const ai_agenda_container = Record({
  $id: Now.ID['ai-agenda-container'],
  table: 'sp_container',
  data: {
    sp_page: '2080c3abbb3e471eb9c8577a91f7ae21', // ai_agenda page sys_id
    name: 'main_container',
    title: 'Main Container',
    order: 0,
    width: 12, // Full width
    class_name: 'container-fluid'
  }
});

// Create a row within the container
export const ai_agenda_row = Record({
  $id: Now.ID['ai-agenda-row'],
  table: 'sp_row',
  data: {
    sp_container: '6335108c28894863b9d1b20b3db3a8ec', // Use the actual container sys_id
    order: 0
  }
});

// Create a column within the row
export const ai_agenda_column = Record({
  $id: Now.ID['ai-agenda-column'],
  table: 'sp_column',
  data: {
    sp_row: 'f48385173bba4496a278e1b628999173', // Use the actual row sys_id
    class_name: 'col-md-12',
    size: 'md',
    order: 0
  }
});

// Connect the widget instance to the column
export const ai_agenda_widget_instance = Record({
  $id: Now.ID['ai-agenda-widget-instance'],
  table: 'sp_instance',
  data: {
    sp_widget: '023602b733e643518ecc09712da96b61', // ai_sessions_list widget sys_id
    sp_column: 'befc4c30b09740f3a5c8b1c5ce47e788', // Use the actual column sys_id
    title: 'AI Learning Sessions',
    order: 0,
    size: 'md'
  }
});