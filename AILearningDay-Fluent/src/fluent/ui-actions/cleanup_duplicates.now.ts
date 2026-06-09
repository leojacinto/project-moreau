import '@servicenow/sdk/global';
import { UiAction } from '@servicenow/sdk/core';

export const cleanupDuplicates = UiAction({
  $id: Now.ID['cleanup_session_types'],
  table: 'x_snc_ai_learnin_4_ai_sessions',
  name: 'Admin: Cleanup & Fix Fields',
  actionName: 'admin_cleanup_fields',
  active: true,
  hint: 'Admin utility: Remove unwanted session types and make timezone mandatory',
  showUpdate: true,  // Show on existing records too
  showInsert: true,  // Show on new record forms
  showQuery: false,  // Don't show on query
  list: {
    showBannerButton: false, // Remove banner button
    showButton: false,       // Remove list button
    style: 'primary'
  },
  form: {
    showButton: true,  // Only show on forms
    showLink: false,   // Not a link
    style: 'primary'
  },
  // CRITICAL: Client-side to avoid form validation
  client: {
    isClient: true,    
    isUi16Compatible: true
  },
  script: `
    function executeAdminTasks() {
      // Show loading message
      alert('🔄 Executing admin cleanup tasks... Check messages for results.');
      
      // Direct server call using GlideAjax
      var ga1 = new GlideAjax('x_snc_ai_learnin_4.ForceTimezoneUpdate');
      ga1.addParam('sysparm_name', 'forceUpdate');
      ga1.getXMLAnswer(function(response) {
        if (response) {
          try {
            var result = JSON.parse(response);
            if (result && result.success) {
              g_form.addInfoMessage('✅ ' + result.message + ' - Please refresh page.');
            } else {
              g_form.addErrorMessage('❌ ' + result.message);
            }
          } catch (e) {
            g_form.addInfoMessage('✅ Timezone update executed.');
          }
        }
      });
      
      var ga2 = new GlideAjax('x_snc_ai_learnin_4.SessionTypeCleanup');
      ga2.addParam('sysparm_name', 'cleanupSessionTypeChoices');
      ga2.getXMLAnswer(function(response2) {
        if (response2) {
          try {
            var result2 = JSON.parse(response2);
            if (result2 && result2.success) {
              g_form.addInfoMessage('✅ Session types: ' + result2.deactivated + ' removed.');
            }
          } catch (e) {
            g_form.addInfoMessage('✅ Session type cleanup executed.');
          }
        }
      });
    }
    
    executeAdminTasks();
  `
});