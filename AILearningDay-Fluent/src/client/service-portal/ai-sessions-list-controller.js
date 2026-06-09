function($scope) {
  var c = this;
  
  c.sessions = [];
  c.filteredSessions = [];
  c.filters = {
    sessionType: '',
    targetRole: '',
    geoArea: '',
    search: ''
  };

  // Load sessions from server
  c.loadSessions = function() {
    c.server.get({
      action: 'get_sessions'
    }).then(function(response) {
      if (response && response.data && response.data.sessions) {
        c.sessions = response.data.sessions;
        c.filteredSessions = c.sessions.slice(); // Copy array
      }
    });
  };

  // Apply filters
  c.applyFilters = function() {
    c.filteredSessions = c.sessions.filter(function(session) {
      var matchesType = !c.filters.sessionType || 
        (session.session_type && (session.session_type.display_value || session.session_type).toLowerCase().indexOf(c.filters.sessionType.toLowerCase()) !== -1);
      
      var matchesRole = !c.filters.targetRole || 
        (session.target_roles && (session.target_roles.display_value || session.target_roles).toLowerCase().indexOf(c.filters.targetRole.toLowerCase()) !== -1);
      
      var matchesGeo = !c.filters.geoArea || 
        (session.geo_major_area && (session.geo_major_area.display_value || session.geo_major_area).toLowerCase().indexOf(c.filters.geoArea.toLowerCase()) !== -1);
      
      var matchesSearch = !c.filters.search || 
        (session.title && session.title.toLowerCase().indexOf(c.filters.search.toLowerCase()) !== -1) ||
        (session.description && session.description.toLowerCase().indexOf(c.filters.search.toLowerCase()) !== -1) ||
        (session.presenter && session.presenter.toLowerCase().indexOf(c.filters.search.toLowerCase()) !== -1);

      return matchesType && matchesRole && matchesGeo && matchesSearch;
    });
  };

  // Initialize
  c.loadSessions();
}