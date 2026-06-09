import { Acl } from '@servicenow/sdk/core'

Acl({
  $id: Now.ID['travel_request_read_acl'],
  type: 'record',
  table: 'x_snc_travel_request',
  operation: 'read',
  roles: ['admin', 'itil'],
  active: true,
})

Acl({
  $id: Now.ID['travel_request_write_acl'],
  type: 'record',
  table: 'x_snc_travel_request',
  operation: 'write',
  roles: ['admin', 'itil'],
  active: true,
})

Acl({
  $id: Now.ID['travel_request_create_acl'],
  type: 'record',
  table: 'x_snc_travel_request',
  operation: 'create',
  roles: ['admin', 'itil'],
  active: true,
})

Acl({
  $id: Now.ID['travel_request_delete_acl'],
  type: 'record',
  table: 'x_snc_travel_request',
  operation: 'delete',
  roles: ['admin'],
  active: true,
})
