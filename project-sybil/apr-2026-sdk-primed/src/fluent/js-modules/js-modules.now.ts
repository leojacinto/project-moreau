import { Record } from '@servicenow/sdk/core'

// --- §30 JS Modules ---

export const travelUtilsModule = Record({
    $id: Now.ID['js_module_travel_utils'],
    table: 'sys_ux_lib_source_script',
    data: {
        name: 'x_snc_apr_trv.travelUtils',
        description: 'Shared client-side utility module: date validation helpers, currency formatting, policy limit lookups via GlideAjax',
        active: true,
        script: `var travelUtils = (function() {
    function isValidDateRange(departureDate, returnDate) {
        if (!departureDate || !returnDate) return false;
        return new Date(returnDate) > new Date(departureDate);
    }

    function formatCurrency(amount, currency) {
        currency = currency || 'USD';
        var num = parseFloat(amount) || 0;
        return '$' + num.toFixed(2);
    }

    function getPolicyLimit(country, callback) {
        var ga = new GlideAjax('x_snc_apr_trv.TravelCostCalculator');
        ga.addParam('sysparm_name', 'getPolicyLimit');
        ga.addParam('sysparm_country', country);
        ga.getXMLAnswer(function(answer) {
            callback(parseFloat(answer) || 5000);
        });
    }

    function getDailyRate(country, expenseType, callback) {
        var ga = new GlideAjax('x_snc_apr_trv.TravelCostCalculator');
        ga.addParam('sysparm_name', 'getEstimatedDailyRate');
        ga.addParam('sysparm_country', country);
        ga.addParam('sysparm_expense_type', expenseType);
        ga.getXMLAnswer(function(answer) {
            callback(parseFloat(answer) || 0);
        });
    }

    function daysBetween(startDate, endDate) {
        var start = new Date(startDate);
        var end = new Date(endDate);
        var diff = end.getTime() - start.getTime();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    return {
        isValidDateRange: isValidDateRange,
        formatCurrency: formatCurrency,
        getPolicyLimit: getPolicyLimit,
        getDailyRate: getDailyRate,
        daysBetween: daysBetween
    };
})();`,
    },
})

export const travelChartsModule = Record({
    $id: Now.ID['js_module_travel_charts'],
    table: 'sys_ux_lib_source_script',
    data: {
        name: 'x_snc_apr_trv.travelCharts',
        description: 'Chart rendering helpers for workspace dashboard: config generators for donut, bar, and line charts',
        active: true,
        script: `var travelCharts = (function() {
    function donutConfig(title, data, labels) {
        return {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#4CAF50', '#F44336', '#FF9800', '#2196F3', '#9C27B0']
                }]
            },
            options: {
                responsive: true,
                plugins: { title: { display: true, text: title } }
            }
        };
    }

    function barConfig(title, data, labels, xLabel, yLabel) {
        return {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: title,
                    data: data,
                    backgroundColor: '#2196F3'
                }]
            },
            options: {
                responsive: true,
                plugins: { title: { display: true, text: title } },
                scales: {
                    x: { title: { display: true, text: xLabel || '' } },
                    y: { title: { display: true, text: yLabel || '' } }
                }
            }
        };
    }

    function lineConfig(title, data, labels) {
        return {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: title,
                    data: data,
                    borderColor: '#4CAF50',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                plugins: { title: { display: true, text: title } }
            }
        };
    }

    return {
        donutConfig: donutConfig,
        barConfig: barConfig,
        lineConfig: lineConfig
    };
})();`,
    },
})
