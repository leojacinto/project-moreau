import { Record } from '@servicenow/sdk/core'

// PA Collection Job
Record({
    table: 'sysauto_pa',
    $id: Now.ID['pa_collection_job'],
    data: {
        name: '[Fed Onboarding] KPI Data Collection',
        collect: 'scores',
        run_type: 'on_demand',
        active: 'true',
        description: 'On-demand collection job for Federal Onboarding KPI indicators',
        score_operator: 'relative',
        score_relative_start: '6',
        score_relative_end: '0',
        score_relative_start_interval: 'months',
        score_relative_end_interval: 'months',
        conditional: 'false',
        benchmarking: 'false',
        run_as: '6816f79cc0a8016401c5a33be04be441',
        advanced: 'false',
        kill_job: 'false',
        run_dayofmonth: '1',
        run_dayofweek: '1',
        run_time: '1970-01-01 04:00:00',
        score_fixed_end: '00000000',
        score_fixed_start: '00000000',
        sys_domain: 'global',
        sys_domain_path: '/',
        upgrade_safe: 'false',
    },
})

// PA Job Indicators — ALL VALUES HARDCODED (Record API does not resolve variables)
Record({
    table: 'pa_job_indicators',
    $id: Now.ID['pa_ji_proc_active'],
    data: {
        indicator: '5a9bf6fae11a45c289bbaef4cbaae892',
        job: '3559fd775c4843a2936f7429c3e5ea79',
        collect: '1',
        collect_indicator: '1',
        active: '1',
    },
})
Record({
    table: 'pa_job_indicators',
    $id: Now.ID['pa_ji_proc_total'],
    data: {
        indicator: 'f0acda6a024647f4873a1a7616b2f225',
        job: '3559fd775c4843a2936f7429c3e5ea79',
        collect: '1',
        collect_indicator: '1',
        active: '1',
    },
})
Record({
    table: 'pa_job_indicators',
    $id: Now.ID['pa_ji_fin_active'],
    data: {
        indicator: '36015ca23953493ba696d24176e865db',
        job: '3559fd775c4843a2936f7429c3e5ea79',
        collect: '1',
        collect_indicator: '1',
        active: '1',
    },
})
Record({
    table: 'pa_job_indicators',
    $id: Now.ID['pa_ji_fin_total'],
    data: {
        indicator: '8132819ee2a340ddb0457f3adc5156e6',
        job: '3559fd775c4843a2936f7429c3e5ea79',
        collect: '1',
        collect_indicator: '1',
        active: '1',
    },
})
Record({
    table: 'pa_job_indicators',
    $id: Now.ID['pa_ji_hr_active'],
    data: {
        indicator: '29c345848dbe4ba0985b7225bd08e632',
        job: '3559fd775c4843a2936f7429c3e5ea79',
        collect: '1',
        collect_indicator: '1',
        active: '1',
    },
})
Record({
    table: 'pa_job_indicators',
    $id: Now.ID['pa_ji_hr_total'],
    data: {
        indicator: 'b153c8d2932f40c19411f1ebd2c7c938',
        job: '3559fd775c4843a2936f7429c3e5ea79',
        collect: '1',
        collect_indicator: '1',
        active: '1',
    },
})

// Indicator Scorecard Widget
const scorecardProps = JSON.stringify({
    sourceType: '1',
    scorecardType: 'list',
    indicators: [
        { id: '5a9bf6fae11a45c289bbaef4cbaae892', label: 'Active Procurement Cases' },
        { id: '36015ca23953493ba696d24176e865db', label: 'Active Finance Cases' },
        { id: '29c345848dbe4ba0985b7225bd08e632', label: 'Active HR Cases' },
    ],
    breakdowns: [],
    showBreakdownsOnly: false,
    showBookmarkedOnly: false,
    swapBreakdownsAsColumns: false,
    nestedBreakdown: false,
    metrics: {
        fields: ['lastScore', 'multiScore', 'trend'],
        multiScore: { type: 'CUSTOM_INTERVAL', numberOfPeriods: 3, periodStep: 30 },
    },
    query: '',
    pageSize: '20',
    sortBy: 'score',
    sortDir: 'desc',
    followFilters: true,
    showFilterElement: true,
    showFavorite: true,
    showIndicatorInfo: true,
    showAlternateRowColors: false,
    showColumnDividers: false,
    showHeader: true,
    heading: 'Cross-Domain KPI Indicators',
    description: '',
    filterConfigurations: [],
    colorSchemeId: '',
})

Record({
    table: 'par_dashboard_widget',
    $id: Now.ID['ceo_indicator_scorecard_widget'],
    data: {
        canvas: '72d512fead65471fb3bf67284537aa43',
        component: '9d31ba4d773ce32ef350d4555b673f6e',
        component_props: scorecardProps,
        x: '0',
        y: '70',
        w: '48',
        h: '24',
    },
})
