import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Update the existing auto-generated geo_major_area element (don't create new)
Record({
  $id: Now.ID['update_geo_major_area_element'],
  table: 'sys_ui_element',
  data: {
    element: 'geo_major_area',
    position: 1,
    type: 'element'
  },
  $update: {
    sys_id: 'af26f49c93c043588381f8bcdd03d66e'
  }
})

// Update the existing auto-generated session_type element (don't create new)
Record({
  $id: Now.ID['update_session_type_element'],
  table: 'sys_ui_element',
  data: {
    element: 'session_type',
    position: 2,
    type: 'element'
  },
  $update: {
    sys_id: '6b26f49c93c043588381f8bcdd03d66f'
  }
})

// Update target_roles positioning if it exists
Record({
  $id: Now.ID['update_target_roles_element'],
  table: 'sys_ui_element',
  data: {
    element: 'target_roles',
    position: 3,
    type: 'element'
  },
  $update: {
    sys_id: '73965e67e61645f49ff6af98893a3589'
  }
})

// Add Status field to the form
Record({
  $id: Now.ID['add_status_element'],
  table: 'sys_ui_element',
  data: {
    table: 'x_snc_ai_learnin_4_ai_sessions',
    element: 'status',
    position: 4,
    type: 'element',
    active: true,
    mandatory: true
  }
})

// Add Requestor field to the form  
Record({
  $id: Now.ID['add_requestor_element'],
  table: 'sys_ui_element',
  data: {
    table: 'x_snc_ai_learnin_4_ai_sessions',
    element: 'requestor',
    position: 5,
    type: 'element',
    active: true,
    mandatory: true
  }
})

// Add Required Level field to the form
Record({
  $id: Now.ID['add_required_level_element'],
  table: 'sys_ui_element',
  data: {
    table: 'x_snc_ai_learnin_4_ai_sessions',
    element: 'required_level',
    position: 6,
    type: 'element',
    active: true,
    mandatory: true
  }
})

// Add Learning Category field to the form
Record({
  $id: Now.ID['add_learning_category_element'],
  table: 'sys_ui_element',
  data: {
    table: 'x_snc_ai_learnin_4_ai_sessions',
    element: 'learning_category',
    position: 7,
    type: 'element',
    active: true,
    mandatory: false
  }
})

// Add Program Name field to the form
Record({
  $id: Now.ID['add_program_name_element'],
  table: 'sys_ui_element',
  data: {
    table: 'x_snc_ai_learnin_4_ai_sessions',
    element: 'program_name',
    position: 8,
    type: 'element',
    active: true,
    mandatory: false
  }
})

// Add Project Name field to the form
Record({
  $id: Now.ID['add_project_name_element'],
  table: 'sys_ui_element',
  data: {
    table: 'x_snc_ai_learnin_4_ai_sessions',
    element: 'project_name',
    position: 9,
    type: 'element',
    active: true,
    mandatory: false
  }
})