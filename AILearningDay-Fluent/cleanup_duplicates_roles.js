// One-time cleanup script for duplicate role choices
// Run this in Background Scripts to clean up duplicates

var gr = new GlideRecord('x_snc_ai_learnin_4_role_choices');
gr.query();

var seen = {};
var duplicates = [];

while (gr.next()) {
    var name = gr.getValue('name');
    
    if (seen[name]) {
        // This is a duplicate - mark for deletion
        duplicates.push(gr.getUniqueValue());
        gs.info('Duplicate found: ' + name + ' (sys_id: ' + gr.getUniqueValue() + ')');
    } else {
        // First occurrence - keep it
        seen[name] = gr.getUniqueValue();
        gs.info('Keeping: ' + name + ' (sys_id: ' + gr.getUniqueValue() + ')');
    }
}

// Delete duplicates
duplicates.forEach(function(sysId) {
    var deleteGr = new GlideRecord('x_snc_ai_learnin_4_role_choices');
    if (deleteGr.get(sysId)) {
        gs.info('Deleting duplicate: ' + deleteGr.getValue('name') + ' (' + sysId + ')');
        deleteGr.deleteRecord();
    }
});

gs.info('Cleanup complete. Deleted ' + duplicates.length + ' duplicate records.');