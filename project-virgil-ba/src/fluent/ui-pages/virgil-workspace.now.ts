import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';
import virgilWorkspace from './../../client/index.html';

export const virgil_workspace = UiPage({
  $id: Now.ID['virgil-workspace'],
  endpoint: 'x_snc_virgil_workspace.do',
  html: virgilWorkspace,
  direct: true
});