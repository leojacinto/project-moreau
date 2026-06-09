import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Create the Service Portal widget
Record({
  $id: Now.ID['ai-sessions-widget'],
  table: 'sp_widget',
  data: {
    id: 'ai_sessions_list',
    name: 'AI Sessions List',
    description: 'Display AI Learning Day sessions with filtering',
    template: Now.include('../../client/service-portal/ai-sessions-list.html'),
    client_script: Now.include('../../client/service-portal/ai-sessions-list-controller.js'),
    script: Now.include('../../client/service-portal/ai-sessions-server-script.js'),
    css: `
.session-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.session-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.session-details {
  color: #666;
  margin-bottom: 5px;
}

.session-description {
  color: #444;
  margin-top: 10px;
}

.filter-panel {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.no-sessions {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 40px;
}
    `,
    has_preview: false,
    servicenow: false,
    public: true,
    roles: [],
    data_table: 'x_snc_ai_learnin_4_ai_sessions'
  }
});