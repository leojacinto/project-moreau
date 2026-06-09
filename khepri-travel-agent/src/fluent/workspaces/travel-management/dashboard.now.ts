import '@servicenow/sdk/global';
import { Dashboard } from '@servicenow/sdk/core';
import { travelWorkspace } from './workspace.now';

// -- Dashboard for Travel Management Workspace
// Layout: Row 1 = 3 score cards across | Row 2 = 3 charts across (bar, bar, pie)
Dashboard({
    $id: Now.ID['travel-management-dashboard'],
    name: 'Travel Management Dashboard',
    tabs: [
        {
            $id: Now.ID['travel-dashboard-overview-tab'],
            name: 'Overview',
            widgets: [
                // --- ROW 1: Score cards (y=0) ---
                {
                    $id: Now.ID['travel-widget-total-requests'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_travel_a7t2p_travel_request',
                                filterQuery: '',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Total Requests',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 16,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['travel-widget-pending-count'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_travel_a7t2p_travel_request',
                                filterQuery: 'approval_statusINpending_review,pending_manager,pending_vp',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Pending Approval',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 16,
                    position: { x: 16, y: 0 },
                },
                // Domestic vs International — donut (top right)
                {
                    $id: Now.ID['travel-widget-by-type'],
                    component: 'donut',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_travel_a7t2p_travel_request',
                                filterQuery: '',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Domestic vs International',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'data_source_1',
                                        groupByField: 'travel_type',
                                    },
                                ],
                                maxNumberOfGroups: 5,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 16,
                    position: { x: 32, y: 0 },
                },

                // --- ROW 2: Charts (y=14) ---
                // Requests by approval status — vertical bar
                {
                    $id: Now.ID['travel-widget-by-status'],
                    component: 'vertical-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_travel_a7t2p_travel_request',
                                filterQuery: '',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Requests by Approval Status',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'data_source_1',
                                        groupByField: 'approval_status',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 16,
                    position: { x: 0, y: 14 },
                },
                // Requests by destination — vertical bar (NOT horizontal-bar or line)
                {
                    $id: Now.ID['travel-widget-by-destination'],
                    component: 'vertical-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_travel_a7t2p_travel_request',
                                filterQuery: '',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Top Destinations',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'data_source_1',
                                        groupByField: 'destination',
                                    },
                                ],
                                maxNumberOfGroups: 8,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 16,
                    position: { x: 16, y: 14 },
                },
                // Requests by flight class — pie
                {
                    $id: Now.ID['travel-widget-by-class'],
                    component: 'pie',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_travel_a7t2p_travel_request',
                                filterQuery: '',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Flight Class Breakdown',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'data_source_1',
                                        groupByField: 'flight_class_requested',
                                    },
                                ],
                                maxNumberOfGroups: 5,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 16,
                    position: { x: 32, y: 14 },
                },
            ],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['travel-dashboard-visibility'],
            experience: travelWorkspace,
        },
    ],
    permissions: [],
});
