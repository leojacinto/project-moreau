var UpdateApacChoiceLabel = Class.create();
UpdateApacChoiceLabel.prototype = {
  initialize: function() {
    // Auto-run update on instantiation
    this.updateLabel();
  },
  
  updateLabel: function() {
    gs.info('=== UPDATING APAC Choice Label ===');
    
    try {
      // Update the sys_choice record directly
      var choiceGR = new GlideRecord('sys_choice');
      choiceGR.addQuery('name', 'x_snc_ai_learnin_4_ai_sessions');
      choiceGR.addQuery('element', 'geo_major_area');
      choiceGR.addQuery('value', 'apac_general');
      choiceGR.query();
      
      if (choiceGR.next()) {
        gs.info('Found choice record with current label: ' + choiceGR.getValue('label'));
        
        // Only update if it's still "APAC General"
        if (choiceGR.getValue('label') === 'APAC General') {
          // Update the label
          choiceGR.setValue('label', 'APAC All');
          var updated = choiceGR.update();
          
          if (updated) {
            gs.info('✅ Successfully updated choice label to: APAC All');
            return { success: true, message: 'Choice label updated from "APAC General" to "APAC All"' };
          } else {
            gs.error('❌ Failed to update choice label');
            return { success: false, message: 'Failed to update choice label' };
          }
        } else {
          gs.info('✅ Choice label is already "' + choiceGR.getValue('label') + '"');
          return { success: true, message: 'Choice label already updated to "' + choiceGR.getValue('label') + '"' };
        }
      } else {
        gs.error('❌ Choice record not found');
        return { success: false, message: 'Choice record not found' };
      }
    } catch (e) {
      gs.error('❌ Exception: ' + e.message);
      return { success: false, message: 'Exception: ' + e.message };
    }
  },
  
  type: 'UpdateApacChoiceLabel'
};