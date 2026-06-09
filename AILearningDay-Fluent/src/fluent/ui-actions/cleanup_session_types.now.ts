import '@servicenow/sdk/global'
import { UiAction } from '@servicenow/sdk/core'

export const cleanupSessionTypes = UiAction({
    $id: Now.ID['cleanup_session_types'],
    name: 'Cleanup Session Types',
    actionName: 'cleanup_session_types',
    table: 'x_snc_ai_learnin_4_ai_sessions',
    hint: 'Remove unwanted session type choices to match filter interface',
    script: `
// Import and run the cleanup function
var cleaner = new x_snc_ai_learnin_4.SessionTypeCleanup();
var result = cleaner.cleanupSessionTypeChoices();
gs.addInfoMessage('Session type cleanup completed: ' + result);
action.setRedirectURL(current.getLink());
`,
    condition: 'gs.hasRole("admin")', // Only show to admins
    client: {
        isClient: false
    },
    form: {
        showButton: true,
        style: 'primary'
    },
    list: {
        showButton: true,
        style: 'primary'
    },
    order: 100,
    active: true,
    showUpdate: true,
    showInsert: true
})