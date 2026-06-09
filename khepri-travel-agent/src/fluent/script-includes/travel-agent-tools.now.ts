import '@servicenow/sdk/global';
import { ScriptInclude } from '@servicenow/sdk/core';

// -- ScriptInclude definitions for Travel Agent tools
// Each definition creates a sys_script_include record on the instance
// accessibleFrom: 'public' is required for cross-scope safety (agent runs in sn_aia scope)

export const TravelAgentCreateRequest = ScriptInclude({
    $id: Now.ID['si-travel-agent-create-request'],
    name: 'TravelAgentCreateRequest',
    description: 'Creates a new travel request record with auto-generated request number and cost calculation. Called by the Travel Approval Agent Create Travel Request tool.',
    script: Now.include('../../server/script-includes/travel-agent-create-request.js'),
    accessibleFrom: 'public',
    active: true,
});

export const TravelAgentEvaluateRequest = ScriptInclude({
    $id: Now.ID['si-travel-agent-evaluate-request'],
    name: 'TravelAgentEvaluateRequest',
    description: 'Evaluates a travel request against all approval rules and determines routing. Called by the Travel Approval Agent Evaluate Travel Request tool.',
    script: Now.include('../../server/script-includes/travel-agent-evaluate-request.js'),
    accessibleFrom: 'public',
    active: true,
});

export const TravelAgentLookupRequest = ScriptInclude({
    $id: Now.ID['si-travel-agent-lookup-request'],
    name: 'TravelAgentLookupRequest',
    description: 'Looks up travel request(s) by request number or requester email. Called by the Travel Approval Agent Look Up Travel Request tool.',
    script: Now.include('../../server/script-includes/travel-agent-lookup-request.js'),
    accessibleFrom: 'public',
    active: true,
});
