// One-time script to update APAC choice label
// Execute this manually or integrate into existing Script Include

var updateChoiceLabel = function() {
  gs.info('=== MANUAL UPDATING APAC Choice Label ===');
  
  try {
    // Update the sys_choice record directly
    var choiceGR = new GlideRecord('sys_choice');
    choiceGR.addQuery('name', 'x_snc_ai_learnin_4_ai_sessions');
    choiceGR.addQuery('element', 'geo_major_area');
    choiceGR.addQuery('value', 'apac_general');
    choiceGR.query();
    
    if (choiceGR.next()) {
      gs.info('Found choice record with current label: ' + choiceGR.getValue('label'));
      
      // Update the label
      choiceGR.setValue('label', 'APAC All');
      var updated = choiceGR.update();
      
      if (updated) {
        gs.info('✅ Successfully updated choice label to: APAC All');
        return true;
      } else {
        gs.error('❌ Failed to update choice label');
        return false;
      }
    } else {
      gs.error('❌ Choice record not found');
      return false;
    }
  } catch (e) {
    gs.error('❌ Exception: ' + e.message);
    return false;
  }
};

// Execute the update
var success = updateChoiceLabel();
gs.info('Update result: ' + success);