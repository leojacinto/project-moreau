import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Simple approach: Use sp_rect_config to directly place widget on page
// This is how ServiceNow typically associates widgets with pages

export const ai_agenda_rect_config = Record({
  $id: Now.ID['ai_agenda_rect_config'],
  table: 'sp_rect_config',
  data: {
    page: '2080c3abbb3e471eb9c8577a91f7ae21', // sys_id of ai_agenda page
    widget: '023602b733e643518ecc09712da96b61', // sys_id of ai_sessions_list widget
    x: '0',
    y: '0',
    width: '12',  // Bootstrap col-md-12 equivalent
    height: '1',
    order: '0'
  }
});