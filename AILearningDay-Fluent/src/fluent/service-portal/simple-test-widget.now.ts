import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Create a very simple test widget for debugging
export const simple_test_widget = Record({
  $id: Now.ID['simple-test-widget'],
  table: 'sp_widget',
  data: {
    id: 'simple_test',
    name: 'Simple Test Widget',
    template: `
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Simple Test Widget</h3>
        </div>
        <div class="panel-body">
          <p><strong>Server Script Status:</strong> {{data.status}}</p>
          <p><strong>Debug Info:</strong> {{data.debug}}</p>
          <p><strong>Session Count:</strong> {{data.count}}</p>
          <div ng-if="data.sessions">
            <h4>Sessions Found:</h4>
            <ul>
              <li ng-repeat="session in data.sessions">{{session.title.display_value || session.title}}</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    script: `
      (function() {
        data.status = 'Script Executed';
        data.debug = 'Starting...';
        data.count = 0;
        data.sessions = [];
        
        try {
          data.debug = 'Attempting to query table...';
          var gr = new GlideRecord('x_snc_ai_learnin_4_ai_sessions');
          gr.query();
          
          var count = gr.getRowCount();
          data.count = count;
          data.debug = 'Query executed, found ' + count + ' records';
          
          if (count > 0) {
            gr.query(); // Query again to iterate
            var sessions = [];
            var recordCount = 0;
            while (gr.next() && recordCount < 5) {
              sessions.push({
                title: {
                  display_value: gr.getDisplayValue('title') || 'No Title',
                  value: gr.getValue('title') || ''
                }
              });
              recordCount++;
            }
            data.sessions = sessions;
            data.debug = 'Successfully loaded ' + sessions.length + ' sessions';
          }
          
        } catch (error) {
          data.status = 'ERROR';
          data.debug = 'Error: ' + error.toString();
          data.count = -1;
        }
      })();
    `,
    public: true,
    roles: [],
    data_table: 'x_snc_ai_learnin_4_ai_sessions'
  }
});