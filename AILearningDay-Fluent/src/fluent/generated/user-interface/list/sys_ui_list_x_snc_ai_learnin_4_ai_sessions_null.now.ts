import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_snc_ai_learnin_4_ai_sessions',
    view: default_view,
    columns: [
        'title',
        'session_type',
        'description',
        'target_roles',
        'duration_minutes',
        'start_time',
        'end_time',
        'is_featured',
        'location',
        'max_attendees',
        'prerequisites',
        'presenter',
    ],
})
