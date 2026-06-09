export class SessionService {
  constructor() {
    this.tableName = "x_snc_ai_learnin_4_ai_sessions";
  }

  async list(filters = {}) {
    try {
      let query = `sysparm_display_value=all&sysparm_limit=100`;
      
      // Add filters to the query
      const conditions = [];
      if (filters.role && filters.role !== 'all') {
        conditions.push(`role=${filters.role}`);
      }
      if (filters.geography && filters.geography !== 'global') {
        conditions.push(`geo_major_area=${filters.geography}`);
      }
      if (filters.session_type) {
        conditions.push(`session_type=${filters.session_type}`);
      }
      
      if (conditions.length > 0) {
        query += `&sysparm_query=${conditions.join('^')}`;
      }
      
      query += `&sysparm_order_by=start_time`;

      const response = await fetch(`/api/now/table/${this.tableName}?${query}`, {
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck || '' // Include token if available (for authenticated users)
        }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch sessions');
      }

      const { result } = await response.json();
      return result || [];
    } catch (error) {
      console.error('SessionService.list error:', error);
      throw error;
    }
  }

  async getById(sysId) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}/${sysId}?sysparm_display_value=all`, {
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck || '' // Include token if available (for authenticated users)
        }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch session');
      }

      const { result } = await response.json();
      return result;
    } catch (error) {
      console.error('SessionService.getById error:', error);
      throw error;
    }
  }

  async create(data) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}?sysparm_display_value=all`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create session');
      }

      return response.json();
    } catch (error) {
      console.error('SessionService.create error:', error);
      throw error;
    }
  }

  async update(sysId, data) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}/${sysId}?sysparm_display_value=all`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update session');
      }

      return response.json();
    } catch (error) {
      console.error('SessionService.update error:', error);
      throw error;
    }
  }
}