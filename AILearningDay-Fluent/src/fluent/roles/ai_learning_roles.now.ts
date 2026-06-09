import '@servicenow/sdk/global';
import { Role } from '@servicenow/sdk/core';

// Base role for viewing AI Learning Day sessions
export const ai_learning_viewer = Role({
  $id: Now.ID['ai_learning_viewer'],
  name: 'x_snc_ai_learnin_4.viewer',
  description: 'Can view AI Learning Day sessions',
  canDelegate: false,
  grantable: true
});

// Role for contributing sessions (creating and editing own sessions)
export const ai_learning_contributor = Role({
  $id: Now.ID['ai_learning_contributor'], 
  name: 'x_snc_ai_learnin_4.contributor',
  description: 'Can create and edit their own AI Learning Day sessions',
  containsRoles: [ai_learning_viewer],
  canDelegate: false,
  grantable: true
});

// Admin role with full access to all sessions
export const ai_learning_admin = Role({
  $id: Now.ID['ai_learning_admin'],
  name: 'x_snc_ai_learnin_4.admin', 
  description: 'Full administrative access to AI Learning Day sessions',
  containsRoles: [ai_learning_contributor],
  canDelegate: true,
  grantable: true,
  scopedAdmin: true
});