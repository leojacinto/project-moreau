import '@servicenow/sdk/global';
import { 
  Table, 
  StringColumn 
} from '@servicenow/sdk/core';

// Create a reference table for role choices
export const x_snc_ai_learnin_4_role_choices = Table({
  name: 'x_snc_ai_learnin_4_role_choices',
  label: 'AI Learning Day Role Choices',
  schema: {
    name: StringColumn({
      label: 'Role Name',
      maxLength: 50,
      mandatory: true
    }),
    label: StringColumn({
      label: 'Display Label', 
      maxLength: 100,
      mandatory: true
    })
  },
  display: 'label',
  actions: ['read'],
  accessible_from: 'public'
});