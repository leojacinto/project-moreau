import '@servicenow/sdk/global'
import { CrossScopePrivilege } from '@servicenow/sdk/core'

// Grant this scope permission to execute sn_fd.FlowAPI (required for subflow calls)
CrossScopePrivilege({
    $id: Now.ID['csp_sn_fd_flow_api'],
    status: 'allowed',
    operation: 'execute',
    targetName: 'sn_fd.FlowAPI',
    targetScope: 'sn_fd',
    targetType: 'scriptable',
});

// Grant write access to sn_hr_core_case for closing HRSD cases
CrossScopePrivilege({
    $id: Now.ID['csp_hr_core_case_write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'sn_hr_core_case',
    targetScope: 'sn_hr_core',
    targetType: 'sys_db_object',
});

// Grant write access to PA tables for KPI indicators
CrossScopePrivilege({
    $id: Now.ID['csp_pa_indicators_write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'pa_indicators',
    targetScope: 'global',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp_pa_cubes_write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'pa_cubes',
    targetScope: 'global',
    targetType: 'sys_db_object',
});

// Grant write access to pa_scores for populating indicator scorecard data
CrossScopePrivilege({
    $id: Now.ID['csp_pa_scores_write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'pa_scores',
    targetScope: 'global',
    targetType: 'sys_db_object',
});

// Grant delete access to pa_scores for resetting demo data
CrossScopePrivilege({
    $id: Now.ID['csp_pa_scores_delete'],
    status: 'allowed',
    operation: 'delete',
    targetName: 'pa_scores',
    targetScope: 'global',
    targetType: 'sys_db_object',
});
