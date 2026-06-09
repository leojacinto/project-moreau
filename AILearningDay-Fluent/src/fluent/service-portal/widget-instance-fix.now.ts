import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Fix the widget instance by linking it to our simple test widget
Record({
  $id: Now.ID['widget-instance-fix'],
  table: 'sp_instance',
  data: {
    sp_widget: '9497046d1f834739af9d27d62bf79384' // The simple test widget sys_id
  },
  $update: {
    sys_id: '7ab3e7c1df5941649c823026e964c6c7' // The existing instance sys_id
  }
});