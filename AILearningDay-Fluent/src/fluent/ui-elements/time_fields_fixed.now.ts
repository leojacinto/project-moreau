import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Fix start_time element positioning
Record({
  $id: Now.ID['fix_start_time_position'],
  table: 'sys_ui_element',
  data: {
    sys_id: '4bd75156cbce46e1bb6fd56f5593bdd9', // Actual start_time sys_id
    position: 3, // Position 3 - Start Time first
    type: 'element',
    mandatory: true
  }
});

// Fix end_time element positioning  
Record({
  $id: Now.ID['fix_end_time_position'],
  table: 'sys_ui_element',
  data: {
    sys_id: '69f80e9696d842b2bb65e0d9865e6690', // Actual end_time sys_id
    position: 4, // Position 4 - End Time second
    type: 'element',
    mandatory: true
  }
});

// Fix timezone element positioning
Record({
  $id: Now.ID['fix_timezone_position'],
  table: 'sys_ui_element',
  data: {
    sys_id: '68be654976674ba5855418e749999879', // Actual timezone sys_id
    position: 5, // Position 5 - Timezone third (after .end_split which is at position 4)
    type: 'element',
    mandatory: true
  }
});