import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

export const SessionTypeCleanup = ScriptInclude({
    $id: Now.ID['SessionTypeCleanup'],
    name: 'SessionTypeCleanup',
    script: Now.include('../../server/choice-cleanup/session-type-cleanup.js'),
    description: 'Utility to clean up session type choices to match filter interface',
    apiName: 'x_snc_ai_learnin_4.SessionTypeCleanup',
    callerAccess: 'tracking',
    clientCallable: true,
    mobileCallable: false,
    sandboxCallable: true,
    accessibleFrom: 'public',
    active: true,
})