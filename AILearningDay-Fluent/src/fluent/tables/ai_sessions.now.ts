import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    ChoiceColumn,
    DateTimeColumn,
    IntegerColumn,
    BooleanColumn,
    ListColumn,
} from '@servicenow/sdk/core'

export const x_snc_ai_learnin_4_ai_sessions = Table({
    name: 'x_snc_ai_learnin_4_ai_sessions',
    label: 'AI Learning Day Sessions',
    schema: {
        title: StringColumn({
            label: 'Session Title',
            maxLength: 200,
            mandatory: true,
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 1000,
            mandatory: true,
            default: '', // Force field update
        }),
        target_roles: ListColumn({
            label: 'Target Role',
            mandatory: true,
            referenceTable: 'x_snc_ai_learnin_4_role_choices',
            attributes: {
                slushbucket_ref_no_expand: true,
                no_sort: true,
                array: 'denormalized',
            },
        }),
        geo_major_area: ChoiceColumn({
            label: 'Geo / Major Area',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                asia_korea: {
                    label: 'Asia and Korea',
                    sequence: 0,
                },
                anz: {
                    label: 'ANZ',
                    sequence: 1,
                },
                india: {
                    label: 'India',
                    sequence: 2,
                },
                japan: {
                    label: 'Japan',
                    sequence: 3,
                },
                apac_general: {
                    label: 'APAC All',
                    sequence: 4, // Adding description to force update
                },
            },
        }),
        session_type: ChoiceColumn({
            label: 'Modality',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                ma_kickoff: {
                    label: 'MA Kickoff',
                    sequence: 1,
                },
                webinar_live: {
                    label: 'Webinar (Live)',
                    sequence: 2,
                },
                elearning_self_paced: {
                    label: 'ELearning (Self-Paced)',
                    sequence: 3,
                },
                colab: {
                    label: 'CoLab',
                    sequence: 4,
                },
                in_person_discussion: {
                    label: 'In Person Discussion',
                    sequence: 5,
                },
                blocked_learning_time: {
                    label: 'Blocked Learning Time',
                    sequence: 6,
                },
                hybrid: {
                    label: 'Hybrid',
                    sequence: 7,
                },
                all_session_types: {
                    label: 'All Session Types',
                    sequence: 0,
                },
            },
            maxLength: 80,
        }),
        presenter: StringColumn({
            label: 'Presenter/Speaker',
            maxLength: 100,
            mandatory: false,
        }),
        start_time: DateTimeColumn({
            label: 'Start Time',
            mandatory: true,
        }),
        end_time: DateTimeColumn({
            label: 'End Time',
            mandatory: true,
        }),
        timezone: StringColumn({
            label: 'Timezone',
            maxLength: 50,
            mandatory: true, // Force mandatory again
            default: '', // Change default to force update
            choices: {
                utc: { label: 'UTC', sequence: 0 },
                aest: { label: 'AEST (UTC+10)', sequence: 1 },
                aedt: { label: 'AEDT (UTC+11)', sequence: 2 },
                jst: { label: 'JST (UTC+9)', sequence: 3 },
                kst: { label: 'KST (UTC+9)', sequence: 4 },
                ist: { label: 'IST (UTC+5:30)', sequence: 5 },
                hkt: { label: 'HKT (UTC+8)', sequence: 6 },
                sgt: { label: 'SGT (UTC+8)', sequence: 7 },
                pst: { label: 'PST (UTC-8)', sequence: 8 },
                est: { label: 'EST (UTC-5)', sequence: 9 },
            },
            dropdown: 'dropdown_with_none',
        }),
        duration_minutes: IntegerColumn({
            label: 'Duration (Minutes)',
            mandatory: false,
        }),
        location: StringColumn({
            label: 'Location/Room',
            maxLength: 100,
            mandatory: false,
        }),
        virtual_link: StringColumn({
            label: 'Virtual Meeting Link',
            maxLength: 500,
            mandatory: false,
        }),
        max_attendees: IntegerColumn({
            label: 'Maximum Attendees',
            mandatory: false,
        }),
        prerequisites: StringColumn({
            label: 'Prerequisites',
            maxLength: 500,
            mandatory: false,
        }),
        tags: StringColumn({
            label: 'Tags (comma-separated)',
            maxLength: 300,
            mandatory: false,
        }),
        is_featured: BooleanColumn({
            label: 'Featured Session',
            default: false,
            mandatory: false,
        }),
        requestor: StringColumn({
            label: 'Requested By',
            maxLength: 100,
            mandatory: true,
        }),
        required_level: ChoiceColumn({
            label: 'Required?',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                essential: {
                    label: 'Essential',
                    sequence: 1,
                },
                elect: {
                    label: 'Elect',
                    sequence: 2,
                },
                elevate: {
                    label: 'Elevate',
                    sequence: 3,
                },
            },
        }),
        learning_category: ChoiceColumn({
            label: 'Learning Category',
            mandatory: false,
            dropdown: 'dropdown_with_none',
            choices: {
                products_solutions_industry: {
                    label: 'Products, Solutions & Industry',
                    sequence: 1,
                },
                ai_tools_process_ops: {
                    label: 'AI, Tools, Process, Ops',
                    sequence: 2,
                },
                onboarding: {
                    label: 'Onboarding',
                    sequence: 3,
                },
                partner_programs: {
                    label: 'Partner Programs',
                    sequence: 4,
                },
                skills: {
                    label: 'Skills',
                    sequence: 5,
                },
                other: {
                    label: 'Other',
                    sequence: 6,
                },
            },
        }),
        program_name: StringColumn({
            label: 'Program Name',
            maxLength: 80,
            mandatory: false,
        }),
        project_name: StringColumn({
            label: 'Project Name',
            maxLength: 80,
            mandatory: false,
        }),
        status: ChoiceColumn({
            label: 'Status',
            mandatory: true,
            default: 'planning',
            dropdown: 'dropdown_with_none',
            choices: {
                planning: {
                    label: 'Planning',
                    sequence: 1,
                },
                confirmed: {
                    label: 'Confirmed',
                    sequence: 2,
                },
                completed: {
                    label: 'Completed',
                    sequence: 3,
                },
                requested: {
                    label: 'Requested',
                    sequence: 4,
                },
            },
        }),
    },
    display: 'title',
    actions: ['read', 'update', 'create'],
    accessibleFrom: 'public',
    allowWebServiceAccess: true,
    extensible: false,
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
})
