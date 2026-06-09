import {
  Table,
  StringColumn,
  DateColumn,
  ChoiceColumn,
  ReferenceColumn,
  DecimalColumn,
} from '@servicenow/sdk/core'

export const x_snc_travel_request = Table({
  name: 'x_snc_travel_request',
  label: 'Travel Request',
  extends: 'task',
  schema: {
    x_snc_travel_destination: StringColumn({
      label: 'Destination',
      maxLength: 256,
      mandatory: true,
    }),
    x_snc_travel_departure_date: DateColumn({
      label: 'Departure Date',
      mandatory: true,
    }),
    x_snc_travel_return_date: DateColumn({
      label: 'Return Date',
      mandatory: true,
    }),
    x_snc_travel_purpose: StringColumn({
      label: 'Purpose',
      maxLength: 1000,
      mandatory: true,
    }),
    x_snc_travel_estimated_cost: DecimalColumn({
      label: 'Estimated Cost',
      scale: 2,
      mandatory: true,
    }),
    x_snc_travel_travel_type: ChoiceColumn({
      label: 'Travel Type',
      choices: {
        domestic: { label: 'Domestic' },
        international: { label: 'International' },
      },
      mandatory: true,
    }),
    x_snc_travel_traveler: ReferenceColumn({
      label: 'Traveler',
      referenceTable: 'sys_user',
    }),
    x_snc_travel_state: ChoiceColumn({
      label: 'State',
      choices: {
        draft: { label: 'Draft' },
        submitted: { label: 'Submitted' },
        approved: { label: 'Approved' },
        rejected: { label: 'Rejected' },
        completed: { label: 'Completed' },
      },
      defaultValue: 'draft',
    }),
  },
})
