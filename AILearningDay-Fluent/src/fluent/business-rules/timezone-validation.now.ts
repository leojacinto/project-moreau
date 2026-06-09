import '@servicenow/sdk/global';
import { BusinessRule } from '@servicenow/sdk/core';
import { validateTimezone } from '../../server/validation/timezone-validation.js';

export const timezoneValidationRule = BusinessRule({
  $id: Now.ID['timezone_validation'],
  name: 'Timezone Validation',
  table: 'x_snc_ai_learnin_4_ai_sessions',
  when: 'before',
  action: ['insert', 'update'],
  script: validateTimezone,
  order: 100,
  active: true,
  description: 'Enforces timezone as a mandatory field for AI Learning Day sessions'
});