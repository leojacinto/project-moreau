var ForceTimezoneUpdate = Class.create();
ForceTimezoneUpdate.prototype = {
  initialize: function() {},
  
  forceUpdate: function() {
    gs.info('=== FORCE UPDATE Timezone Mandatory Field ===');
    
    try {
      // Get the dictionary entry
      var gr = new GlideRecord('sys_dictionary');
      gr.addQuery('name', 'x_snc_ai_learnin_4_ai_sessions');
      gr.addQuery('element', 'timezone');
      gr.query();
      
      if (gr.next()) {
        gs.info('Current mandatory value: ' + gr.getValue('mandatory'));
        
        // Force update
        gr.setValue('mandatory', 'true'); // Use string value
        var updated = gr.update();
        
        if (updated) {
          gs.info('✅ Dictionary updated successfully');
          
          // Also update default value to force re-sync
          gr.setValue('default_value', 'utc');
          gr.update();
          
          return { success: true, message: 'Timezone field updated to mandatory' };
        } else {
          gs.error('❌ Failed to update dictionary');
          return { success: false, message: 'Failed to update dictionary' };
        }
      } else {
        gs.error('❌ Timezone dictionary entry not found');
        return { success: false, message: 'Dictionary entry not found' };
      }
    } catch (e) {
      gs.error('❌ Exception: ' + e.message);
      return { success: false, message: 'Exception: ' + e.message };
    }
  },
  
  type: 'ForceTimezoneUpdate'
};