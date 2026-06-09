(function() {
  // Server-side script for AI Sessions widget
  
  if (input && input.action === 'get_sessions') {
    try {
      var sessions = [];
      var gr = new GlideRecord('x_snc_ai_learnin_4_ai_sessions');
      gr.query();
      
      while (gr.next()) {
        var session = {
          sys_id: gr.getUniqueValue(),
          title: gr.getValue('title') || '',
          description: gr.getValue('description') || '',
          presenter: gr.getValue('presenter') || '',
          start_time: gr.getDisplayValue('start_time') || '',
          end_time: gr.getDisplayValue('end_time') || '',
          room_location: gr.getValue('room_location') || '',
          session_type: {
            value: gr.getValue('session_type'),
            display_value: gr.getDisplayValue('session_type')
          },
          target_roles: {
            value: gr.getValue('target_roles'),
            display_value: gr.getDisplayValue('target_roles')
          },
          geo_major_area: {
            value: gr.getValue('geo_major_area'),
            display_value: gr.getDisplayValue('geo_major_area')
          }
        };
        sessions.push(session);
      }
      
      // Sort sessions by start time
      sessions.sort(function(a, b) {
        if (a.start_time < b.start_time) return -1;
        if (a.start_time > b.start_time) return 1;
        return 0;
      });
      
      data.sessions = sessions;
      
    } catch (e) {
      gs.error('Error loading AI sessions: ' + e.message);
      data.sessions = [];
      data.error = 'Failed to load sessions: ' + e.message;
    }
  }
  
})();