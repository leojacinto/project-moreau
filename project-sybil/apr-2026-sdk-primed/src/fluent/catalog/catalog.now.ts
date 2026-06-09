import {
    CatalogItem,
    VariableSet,
    SingleLineTextVariable,
    ReferenceVariable,
    DateVariable,
    SelectBoxVariable,
    CheckboxVariable,
    MultiLineTextVariable,
    CatalogClientScript,
    CatalogUiPolicy,
} from '@servicenow/sdk/core'

// --- §10 Variable Set: Traveler Info (read-only, auto-populated) ---
export const travelerInfoVarSet = VariableSet({
    $id: Now.ID['traveler_info_varset'],
    title: 'Traveler Information',
    description: 'Auto-populated traveler details',
    internalName: 'traveler_info',
    type: 'singleRow',
    layout: 'normal',
    order: 100,
    displayTitle: true,
    name: 'Traveler Information',
    variables: {
        traveler_name: SingleLineTextVariable({
            question: 'Traveler Name',
            order: 100,
            readOnly: true,
        }),
        traveler_department: SingleLineTextVariable({
            question: 'Department',
            order: 200,
            readOnly: true,
        }),
        traveler_manager: SingleLineTextVariable({
            question: 'Manager',
            order: 300,
            readOnly: true,
        }),
    },
})

// --- §10 Variable Set: Travel Details ---
export const travelDetailsVarSet = VariableSet({
    $id: Now.ID['travel_details_varset'],
    title: 'Travel Details',
    description: 'Travel request details including destination, dates, and cost',
    internalName: 'travel_details',
    type: 'singleRow',
    layout: 'normal',
    order: 200,
    displayTitle: true,
    name: 'Travel Details',
    variables: {
        destination_city: SingleLineTextVariable({
            question: 'Destination City',
            mandatory: true,
            order: 100,
        }),
        destination_country: ReferenceVariable({
            question: 'Destination Country',
            referenceTable: 'core_country',
            mandatory: true,
            order: 200,
        }),
        departure_date: DateVariable({
            question: 'Departure Date',
            mandatory: true,
            order: 300,
        }),
        return_date: DateVariable({
            question: 'Return Date',
            mandatory: true,
            order: 400,
        }),
        purpose: SelectBoxVariable({
            question: 'Purpose',
            mandatory: true,
            order: 500,
            choices: {
                conference: { label: 'Conference', sequence: 1, inactive: false },
                client_meeting: { label: 'Client Meeting', sequence: 2, inactive: false },
                training: { label: 'Training', sequence: 3, inactive: false },
                internal: { label: 'Internal', sequence: 4, inactive: false },
                other: { label: 'Other', sequence: 5, inactive: false },
            },
        }),
        estimated_cost: SingleLineTextVariable({
            question: 'Estimated Cost',
            mandatory: true,
            order: 600,
        }),
        requires_visa: CheckboxVariable({
            question: 'Requires Visa',
            order: 700,
        }),
        additional_notes: MultiLineTextVariable({
            question: 'Additional Notes',
            order: 800,
        }),
    },
})

// --- §9 Catalog Item: Submit Travel Request ---
export const submitTravelRequest = CatalogItem({
    $id: Now.ID['submit_travel_request_item'],
    name: 'Submit Travel Request',
    shortDescription: 'Submit a new travel request for approval',
    description: 'Use this form to submit a travel request. Your request will be routed to your manager for approval. High-cost requests will be escalated to finance.',
    active: true,
    variables: {},
    variableSets: [
        { variableSet: travelerInfoVarSet, order: 100 },
        { variableSet: travelDetailsVarSet, order: 200 },
    ],
})

// --- §11 Catalog Client Scripts ---
export const autoPopulateTravelerInfo = CatalogClientScript({
    $id: Now.ID['cat_cs_auto_populate'],
    name: 'Auto-populate Traveler Info',
    type: 'onLoad',
    catalogItem: submitTravelRequest,
    active: true,
    script: script`function onLoad() {
        var userName = g_user.getFullName();
        g_form.setValue('traveler_name', userName);
        var ga = new GlideAjax('x_snc_apr_trv.TravelCostCalculator');
        ga.addParam('sysparm_name', 'getUserInfo');
        ga.getXMLAnswer(function(answer) {
            var info = JSON.parse(answer);
            g_form.setValue('traveler_department', info.department);
            g_form.setValue('traveler_manager', info.manager);
        });
    }`,
})

export const validateDateRange = CatalogClientScript({
    $id: Now.ID['cat_cs_validate_dates'],
    name: 'Validate Date Range',
    type: 'onChange',
    catalogItem: submitTravelRequest,
    active: true,
    variableName: 'return_date',
    script: script`function onChange(control, oldValue, newValue, isLoading) {
        if (isLoading) return;
        var departure = g_form.getValue('departure_date');
        if (departure && newValue && newValue <= departure) {
            g_form.addErrorMessage('Return date must be after departure date');
            g_form.setValue('return_date', '');
        }
    }`,
})

export const showVisaReminder = CatalogClientScript({
    $id: Now.ID['cat_cs_visa_reminder'],
    name: 'Show Visa Reminder',
    type: 'onChange',
    catalogItem: submitTravelRequest,
    active: true,
    variableName: 'destination_country',
    script: script`function onChange(control, oldValue, newValue, isLoading) {
        if (isLoading) return;
        if (newValue) {
            g_form.addInfoMessage('Please check visa requirements for your destination country');
            g_form.setVisible('requires_visa', true);
        }
    }`,
})

// --- §12 Catalog UI Policies ---
export const showVisaForInternational = CatalogUiPolicy({
    $id: Now.ID['cat_uip_visa_international'],
    shortDescription: 'Show Visa for International',
    catalogItem: submitTravelRequest,
    active: true,
    onLoad: true,
    reverseIfFalse: true,
    catalogCondition: 'destination_country!=',
    actions: [
        { variableName: 'requires_visa', visible: true, mandatory: false, readOnly: false },
    ],
})

export const requireNotesForHighCost = CatalogUiPolicy({
    $id: Now.ID['cat_uip_notes_high_cost'],
    shortDescription: 'Require Notes for High Cost',
    catalogItem: submitTravelRequest,
    active: true,
    onLoad: true,
    reverseIfFalse: true,
    catalogCondition: 'estimated_cost>5000',
    actions: [
        { variableName: 'additional_notes', mandatory: true, visible: true, readOnly: false },
    ],
})
