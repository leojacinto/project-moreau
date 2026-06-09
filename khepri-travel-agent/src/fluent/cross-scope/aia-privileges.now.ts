import '@servicenow/sdk/global';
import { CrossScopePrivilege } from '@servicenow/sdk/core';

// -- Cross-scope privileges for sn_aia (AI Agent) tables
// Our app creates agent, tool, and M2M records via Record() API

// sn_aia_agent
CrossScopePrivilege({
    $id: Now.ID['csp-aia-agent-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'sn_aia_agent',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-aia-agent-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'sn_aia_agent',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-aia-agent-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'sn_aia_agent',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});

// sn_aia_tool
CrossScopePrivilege({
    $id: Now.ID['csp-aia-tool-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'sn_aia_tool',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-aia-tool-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'sn_aia_tool',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-aia-tool-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'sn_aia_tool',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});

// sn_aia_agent_tool_m2m
CrossScopePrivilege({
    $id: Now.ID['csp-aia-agent-tool-m2m-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'sn_aia_agent_tool_m2m',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-aia-agent-tool-m2m-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'sn_aia_agent_tool_m2m',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-aia-agent-tool-m2m-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'sn_aia_agent_tool_m2m',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});

// sn_aia_agent_config (agent version/config)
CrossScopePrivilege({
    $id: Now.ID['csp-aia-config-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'sn_aia_agent_config',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-aia-config-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'sn_aia_agent_config',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-aia-config-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'sn_aia_agent_config',
    targetScope: 'sn_aia',
    targetType: 'sys_db_object',
});
