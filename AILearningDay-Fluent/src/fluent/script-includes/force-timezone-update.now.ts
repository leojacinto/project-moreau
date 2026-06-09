import '@servicenow/sdk/global';
import { ScriptInclude } from '@servicenow/sdk/core';

export const ForceTimezoneUpdate = ScriptInclude({
  $id: Now.ID['ForceTimezoneUpdate'],
  name: 'ForceTimezoneUpdate',
  script: Now.include('../../server/field-update/force-timezone-update.js'),
  description: 'Force update timezone field to mandatory using direct GlideRecord',
  apiName: 'x_snc_ai_learnin_4.ForceTimezoneUpdate',
  callerAccess: 'tracking',
  clientCallable: true,
  mobileCallable: false,
  sandboxCallable: false,
  accessibleFrom: 'public',
  active: true
});