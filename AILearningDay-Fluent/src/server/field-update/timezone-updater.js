var TimezoneFieldUpdater = Class.create();
TimezoneFieldUpdater.prototype = {
  initialize: function() {},
  
  updateTimezoneMandatory: function() {
    gs.info('=== Starting Timezone Mandatory Field Update ===');
    
    var successCount = 0;
    
    // Update sys_dictionary directly
    var dictGr = new GlideRecord('sys_dictionary');
    if (dictGr.get('dbbcd3f8937bba908381f8bcdd03d677')) { // timezone field sys_id
      gs.info('Found timezone dictionary entry: ' + dictGr.getValue('column_label'));
      dictGr.setValue('mandatory', true);
      dictGr.update();
      successCount++;
      gs.info('✅ Updated sys_dictionary mandatory field');
    } else {
      gs.warn('⚠️ Timezone dictionary entry not found');
    }
    
    // Update sys_ui_element directly
    var uiGr = new GlideRecord('sys_ui_element');
    if (uiGr.get('68be654976674ba5855418e749999879')) { // timezone UI element sys_id
      gs.info('Found timezone UI element');
      uiGr.setValue('mandatory', true);
      uiGr.update();
      successCount++;
      gs.info('✅ Updated sys_ui_element mandatory field');
    } else {
      gs.warn('⚠️ Timezone UI element not found');
    }
    
    gs.info('=== Update Complete: ' + successCount + ' records updated ===');
    return {
      success: true,
      updated: successCount
    };
  },
  
  type: 'TimezoneFieldUpdater'
};