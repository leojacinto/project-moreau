(function () {
    // Close most active HRSD cases, keeping only ~103 open
    // State 3 = "Closed Complete", active = false
    var KEEP_OPEN = 103;

    // First count how many are currently active
    var countGr = new GlideAggregate('sn_hr_core_case');
    countGr.addQuery('active', true);
    countGr.addAggregate('COUNT');
    countGr.query();
    var totalActive = 0;
    if (countGr.next()) {
        totalActive = parseInt(countGr.getAggregate('COUNT'), 10);
    }

    if (totalActive <= KEEP_OPEN) {
        gs.info('[HRSD Cleanup] Only ' + totalActive + ' active cases found, no action needed (target: ' + KEEP_OPEN + ')');
        return;
    }

    var toClose = totalActive - KEEP_OPEN;
    gs.info('[HRSD Cleanup] Closing ' + toClose + ' of ' + totalActive + ' active HR cases (keeping ' + KEEP_OPEN + ' open)');

    // Query active cases ordered by oldest first — close the oldest ones
    var gr = new GlideRecord('sn_hr_core_case');
    gr.addQuery('active', true);
    gr.orderBy('sys_created_on'); // oldest first
    gr.setLimit(toClose);
    gr.query();

    var closed = 0;
    while (gr.next()) {
        gr.setValue('state', '3'); // Closed Complete
        gr.setValue('active', false);
        gr.setValue('closed_at', new GlideDateTime().toString());
        gr.setWorkflow(false); // suppress business rules for speed
        gr.autoSysFields(false);
        gr.update();
        closed++;
    }

    gs.info('[HRSD Cleanup] Done. Closed ' + closed + ' HR cases. Approximately ' + KEEP_OPEN + ' remain active.');
})();
