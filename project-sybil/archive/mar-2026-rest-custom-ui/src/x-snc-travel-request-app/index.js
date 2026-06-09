import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import { createHttpEffect } from '@servicenow/ui-effect-http';
import styles from './styles.scss';

const TABLE = 'x_snc_travel_req_request';
const VIEWS = { LIST: 'list', FORM: 'form' };
const STATES = {
  draft: { label: 'Draft', cls: 'state-draft' },
  submitted: { label: 'Submitted', cls: 'state-submitted' },
  approved: { label: 'Approved', cls: 'state-approved' },
  rejected: { label: 'Rejected', cls: 'state-rejected' },
  completed: { label: 'Completed', cls: 'state-completed' }
};
const EMPTY_FORM = { destination: '', departure_date: '', return_date: '', purpose: '', estimated_cost: '', notes: '', state: 'draft' };

const view = (state, { updateState, dispatch }) => {
  const { currentView, requests, loading, error, formData, filterState, searchQuery } = state;
  return (
    <div className="travel-app">
      <header className="app-header">
        <div className="header-left">
          <span className="header-icon">✈️</span>
          <h1>Travel Requests</h1>
          <span className="approach-badge">SDK Pure</span>
        </div>
        <div className="header-right">
          {currentView === VIEWS.LIST
            ? <button className="btn btn-primary" on-click={() => updateState({ currentView: VIEWS.FORM, formData: { ...EMPTY_FORM }, editId: null })}>+ New Request</button>
            : <button className="btn btn-secondary" on-click={() => updateState({ currentView: VIEWS.LIST })}>← Back</button>}
        </div>
      </header>

      {error && <div className="alert alert-error">{error}</div>}

      {currentView === VIEWS.LIST
        ? renderList(state, { updateState, dispatch })
        : renderForm(state, { updateState, dispatch })}
    </div>
  );
};

function renderList(state, { updateState, dispatch }) {
  const { requests, loading, filterState, searchQuery } = state;
  let filtered = requests;
  if (filterState !== 'all') filtered = filtered.filter(r => r.state === filterState);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(r =>
      (r.destination || '').toLowerCase().includes(q) ||
      (r.purpose || '').toLowerCase().includes(q)
    );
  }

  const counts = { total: requests.length, draft: 0, submitted: 0, approved: 0, rejected: 0 };
  requests.forEach(r => { if (counts[r.state] !== undefined) counts[r.state]++; });

  return (
    <div className="list-view">
      <div className="stats-row">
        {Object.entries(counts).map(([k, v]) => (
          <div className={`stat-card stat-${k}`}>
            <span className="stat-num">{v}</span>
            <span className="stat-label">{k}</span>
          </div>
        ))}
      </div>

      <div className="toolbar">
        <input className="search-input" type="text" placeholder="Search destinations or purpose..."
          value={searchQuery} on-input={e => updateState({ searchQuery: e.target.value })} />
        <select className="filter-select" on-change={e => updateState({ filterState: e.target.value })}>
          <option value="all">All States</option>
          {Object.entries(STATES).map(([k, v]) => <option value={k}>{v.label}</option>)}
        </select>
        <button className="btn btn-secondary" on-click={() => dispatch('FETCH_REQUESTS')}>↻</button>
      </div>

      {loading
        ? <div className="loading">Loading travel requests...</div>
        : filtered.length === 0
          ? <div className="empty-state">No travel requests found</div>
          : <table className="data-table">
              <thead>
                <tr><th>Number</th><th>Destination</th><th>Dates</th><th>Cost</th><th>State</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {filtered.map(r => (
                  <tr>
                    <td>{r.number || '—'}</td>
                    <td>
                      <strong>{r.destination}</strong>
                      <br /><small className="text-muted">{(r.purpose || '').slice(0, 60)}</small>
                    </td>
                    <td>{r.departure_date} → {r.return_date}</td>
                    <td>${Number(r.estimated_cost || 0).toLocaleString()}</td>
                    <td><span className={`state-badge ${STATES[r.state]?.cls || ''}`}>{STATES[r.state]?.label || r.state}</span></td>
                    <td className="actions-cell">
                      {r.state === 'draft' && <button className="btn btn-primary btn-sm" on-click={() => dispatch('UPDATE_STATE', { sys_id: r.sys_id, state: 'submitted' })}>Submit</button>}
                      {r.state === 'submitted' && <button className="btn btn-success btn-sm" on-click={() => dispatch('UPDATE_STATE', { sys_id: r.sys_id, state: 'approved' })}>Approve</button>}
                      {r.state === 'submitted' && <button className="btn btn-danger btn-sm" on-click={() => {
                        const reason = prompt('Rejection reason:');
                        if (reason) dispatch('UPDATE_STATE', { sys_id: r.sys_id, state: 'rejected', rejection_reason: reason });
                      }}>Reject</button>}
                      {r.state === 'draft' && <button className="btn btn-danger btn-sm" on-click={() => { if (confirm('Delete?')) dispatch('DELETE_REQUEST', { sys_id: r.sys_id }); }}>🗑</button>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>}
    </div>
  );
}

function renderForm(state, { updateState, dispatch }) {
  const { formData } = state;
  const setField = (field) => (e) => updateState({ formData: { ...formData, [field]: e.target.value } });

  return (
    <div className="form-view">
      <div className="form-card">
        <h2>✈️ {state.editId ? 'Edit' : 'New'} Travel Request</h2>
        <div className="form-group">
          <label>Destination</label>
          <input type="text" value={formData.destination} on-input={setField('destination')} placeholder="e.g. Tokyo, Japan" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Departure Date</label>
            <input type="date" value={formData.departure_date} on-input={setField('departure_date')} />
          </div>
          <div className="form-group">
            <label>Return Date</label>
            <input type="date" value={formData.return_date} on-input={setField('return_date')} />
          </div>
        </div>
        <div className="form-group">
          <label>Purpose</label>
          <textarea value={formData.purpose} on-input={setField('purpose')} placeholder="Business justification..." />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Estimated Cost (USD)</label>
            <input type="number" step="0.01" value={formData.estimated_cost} on-input={setField('estimated_cost')} placeholder="0.00" />
          </div>
          <div className="form-group">
            <label>Notes (optional)</label>
            <input type="text" value={formData.notes} on-input={setField('notes')} placeholder="Additional info" />
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn-secondary" on-click={() => updateState({ currentView: VIEWS.LIST })}>Cancel</button>
          <button className="btn btn-primary" on-click={() => dispatch('SAVE_REQUEST')}>Create Request</button>
        </div>
      </div>
    </div>
  );
}

createCustomElement('x-snc-travel-request-app', {
  renderer: { type: snabbdom },
  initialState: {
    currentView: VIEWS.LIST,
    requests: [],
    loading: true,
    error: null,
    formData: { ...EMPTY_FORM },
    editId: null,
    filterState: 'all',
    searchQuery: ''
  },
  view,
  styles,
  actionHandlers: {
    // Lifecycle
    COMPONENT_BOOTSTRAPPED: ({ dispatch }) => { dispatch('FETCH_REQUESTS'); },

    // Fetch all requests
    FETCH_REQUESTS: createHttpEffect(`/api/now/table/${TABLE}`, {
      method: 'GET',
      queryParams: { sysparm_display_value: 'true', sysparm_limit: 100, sysparm_orderby: 'sys_created_onDESC' },
      successActionType: 'FETCH_REQUESTS_SUCCESS',
      errorActionType: 'FETCH_REQUESTS_ERROR'
    }),
    FETCH_REQUESTS_SUCCESS: ({ action, updateState }) => {
      updateState({ requests: action.payload.result || [], loading: false, error: null });
    },
    FETCH_REQUESTS_ERROR: ({ action, updateState }) => {
      updateState({ loading: false, error: 'Failed to load travel requests: ' + (action.payload?.message || 'Unknown error') });
    },

    // Save new request
    SAVE_REQUEST: ({ state, dispatch, updateState }) => {
      const f = state.formData;
      if (!f.destination || !f.departure_date || !f.return_date || !f.purpose || !f.estimated_cost) {
        updateState({ error: 'All fields except notes are required' });
        return;
      }
      if (f.return_date < f.departure_date) {
        updateState({ error: 'Return date must be after departure date' });
        return;
      }
      dispatch('CREATE_REQUEST_HTTP', { body: f });
    },
    CREATE_REQUEST_HTTP: createHttpEffect(`/api/now/table/${TABLE}`, {
      method: 'POST',
      dataParam: 'body',
      successActionType: 'SAVE_SUCCESS',
      errorActionType: 'SAVE_ERROR',
      headers: { 'Content-Type': 'application/json' }
    }),
    SAVE_SUCCESS: ({ dispatch, updateState }) => {
      updateState({ currentView: VIEWS.LIST, error: null });
      dispatch('FETCH_REQUESTS');
    },
    SAVE_ERROR: ({ action, updateState }) => {
      updateState({ error: 'Save failed: ' + (action.payload?.message || 'Unknown error') });
    },

    // Update state (submit/approve/reject)
    UPDATE_STATE: ({ action, dispatch }) => {
      const { sys_id, state, rejection_reason } = action.payload;
      const body = { state };
      if (rejection_reason) body.rejection_reason = rejection_reason;
      dispatch('UPDATE_REQUEST_HTTP', { sys_id, body });
    },
    UPDATE_REQUEST_HTTP: createHttpEffect(`/api/now/table/${TABLE}/{sys_id}`, {
      method: 'PATCH',
      dataParam: 'body',
      pathParams: ['sys_id'],
      successActionType: 'SAVE_SUCCESS',
      errorActionType: 'SAVE_ERROR',
      headers: { 'Content-Type': 'application/json' }
    }),

    // Delete
    DELETE_REQUEST: ({ action, dispatch }) => {
      dispatch('DELETE_REQUEST_HTTP', { sys_id: action.payload.sys_id });
    },
    DELETE_REQUEST_HTTP: createHttpEffect(`/api/now/table/${TABLE}/{sys_id}`, {
      method: 'DELETE',
      pathParams: ['sys_id'],
      successActionType: 'SAVE_SUCCESS',
      errorActionType: 'SAVE_ERROR'
    })
  }
});
