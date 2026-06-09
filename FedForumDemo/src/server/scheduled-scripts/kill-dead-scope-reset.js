// One-time cleanup: delete the old dead-scope "Reset Demo Data" UI action
// that has no integration log seeding and conflicts with the current one.
var oldReset = new GlideRecord('sys_ui_action');
if (oldReset.get('c325c434b05d4d07bae9f67a6e679312')) {
    oldReset.deleteRecord();
    gs.info('Deleted old dead-scope Reset Demo Data UI action (c325c434b05d4d07bae9f67a6e679312)');
}

// Also clean up any other UI actions from the dead scope on our table
var deadScope = new GlideRecord('sys_ui_action');
deadScope.addQuery('table', 'x_snc_fed_forum_on_orchestration');
deadScope.addQuery('sys_scope', '2036727747e04bd0f9de91ef016d43ea');
deadScope.query();
while (deadScope.next()) {
    gs.info('Deleting dead-scope UI action: ' + deadScope.getValue('name') + ' (' + deadScope.getUniqueValue() + ')');
    deadScope.deleteRecord();
}
