import '@servicenow/sdk/global';
import { ScriptInclude } from '@servicenow/sdk/core';

export const UpdateApacChoiceLabel = ScriptInclude({
  $id: Now.ID['UpdateApacChoiceLabel'],
  name: 'UpdateApacChoiceLabel',
  script: Now.include('../../server/choice-cleanup/update-apac-label.js'),
  description: 'Update APAC General choice label to APAC All',
  apiName: 'x_snc_ai_learnin_4.UpdateApacChoiceLabel',
  callerAccess: 'tracking',
  clientCallable: true,
  mobileCallable: false,
  sandboxCallable: false,
  accessibleFrom: 'public',
  active: true
});