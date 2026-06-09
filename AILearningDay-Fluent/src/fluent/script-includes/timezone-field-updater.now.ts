import '@servicenow/sdk/global';
import { ScriptInclude } from '@servicenow/sdk/core';

export const TimezoneFieldUpdater = ScriptInclude({
  $id: Now.ID['TimezoneFieldUpdater'],
  name: 'TimezoneFieldUpdater',
  script: Now.include('../../server/field-update/timezone-updater.js'),
  description: 'Script Include to update timezone field mandatory settings',
  apiName: 'x_snc_ai_learnin_4.TimezoneFieldUpdater',
  callerAccess: 'tracking',
  clientCallable: true,
  mobileCallable: false,
  sandboxCallable: false,
  accessibleFrom: 'public',
  active: true
});