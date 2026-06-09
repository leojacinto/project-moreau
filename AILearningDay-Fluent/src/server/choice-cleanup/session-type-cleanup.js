import { gs, GlideRecord } from '@servicenow/glide'

export function cleanupSessionTypeChoices() {
    // Define the session types we want to keep (matching the filter interface)
    const keepChoices = [
        'ma_kickoff',
        'webinar_live', 
        'elearning_self_paced',
        'colab',
        'in_person_discussion',
        'blocked_learning_time'
    ];
    
    const tableName = 'x_snc_ai_learnin_4_ai_sessions';
    const elementName = 'session_type';
    
    // Find and delete unwanted choices
    const gr = new GlideRecord('sys_choice');
    gr.addQuery('name', tableName);
    gr.addQuery('element', elementName);
    gr.addQuery('value', 'NOT IN', keepChoices.join(','));
    gr.query();
    
    let deletedCount = 0;
    while (gr.next()) {
        gs.info(`Deleting choice: ${gr.getValue('value')} - ${gr.getValue('label')}`);
        gr.deleteRecord();
        deletedCount++;
    }
    
    gs.info(`Cleanup complete. Deleted ${deletedCount} unwanted session type choices.`);
    return `Deleted ${deletedCount} unwanted choices`;
}