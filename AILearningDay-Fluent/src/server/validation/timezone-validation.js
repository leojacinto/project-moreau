import { gs } from '@servicenow/glide';

export function validateTimezone(current, previous) {
  // Validate that timezone is provided
  if (!current.timezone || current.timezone.toString().trim() === '') {
    gs.addErrorMessage('Timezone is required and cannot be empty.');
    current.setAbortAction(true);
  }
}