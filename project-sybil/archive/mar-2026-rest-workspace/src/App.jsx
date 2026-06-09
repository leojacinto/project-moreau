import React, { useState, useEffect, useCallback } from 'react';
import schema from '../build-agent/schema.json';

const { app, fields, states, actions, validation, listConfig } = schema;

// --- Mock seed data ---
const MOCK_SEED = [
  { sys_id: 'm1', number: 'TRV0001', destination: 'Tokyo, Japan', departure_date: '2026-04-15', return_date: '2026-04-22', purpose: 'Q2 partner summit and vendor negotiations', estimated_cost: 4200, state: 'approved', notes: '' },
  { sys_id: 'm2', number: 'TRV0002', destination: 'London, UK', departure_date: '2026-05-01', return_date: '2026-05-05', purpose: 'EMEA customer success kickoff', estimated_cost: 3800, state: 'submitted', notes: '' },
  { sys_id: 'm3', number: 'TRV0003', destination: 'Sydney, Australia', departure_date: '2026-06-10', return_date: '2026-06-14', purpose: 'APAC regional conference keynote', estimated_cost: 5100, state: 'draft', notes: 'Awaiting budget approval' },
  { sys_id: 'm4', number: 'TRV0004', destination: 'Berlin, Germany', departure_date: '2026-04-28', return_date: '2026-04-30', purpose: 'Engineering offsite sprint planning', estimated_cost: 2900, state: 'completed', notes: '' },
  { sys_id: 'm5', number: 'TRV0005', destination: 'San Francisco, CA', departure_date: '2026-05-20', return_date: '2026-05-22', purpose: 'Knowledge 2026 conference', estimated_cost: 1500, state: 'rejected', rejection_reason: 'Budget freeze Q2', notes: '' },
];

let mockCounter = 6;
let localMode = false;

// --- API Layer (with local fallback) ---
async function api(method, path, body) {
  const opts = { method, headers: { Accept: 'application/json', 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const r = await fetch(path, opts);
  if (!r.ok) throw new Error(`${r.status}`);
  if (r.status === 204) return {};
  return r.json();
}

const tableApi = {
  list: () => api('GET', `/api/now/table/${app.table}?sysparm_display_value=true&sysparm_limit=${listConfig.pageSize}&sysparm_orderby=${listConfig.defaultSort}`),
  create: (data) => api('POST', `/api/now/table/${app.table}`, data),
  update: (id, data) => api('PATCH', `/api/now/table/${app.table}/${id}`, data),
  delete: (id) => api('DELETE', `/api/now/table/${app.table}/${id}`),
};

// --- Schema-Driven Validation ---
function validate(formData) {
  for (const rule of validation) {
    if (rule.rule === 'required') {
      for (const f of rule.fields) {
        if (!formData[f]) return rule.message;
      }
    }
    if (rule.rule === 'dateAfter') {
      if (formData[rule.field] && formData[rule.afterField] && formData[rule.field] < formData[rule.afterField]) {
        return rule.message;
      }
    }
    if (rule.rule === 'positive') {
      if (formData[rule.field] && Number(formData[rule.field]) <= 0) return rule.message;
    }
  }
  return null;
}

// --- Schema-Driven Components ---

function StateBadge({ value }) {
  const cfg = states.values.find(s => s.value === value) || { label: value, color: '#475569' };
  return <span className="state-badge" style={{ backgroundColor: cfg.color }}>{cfg.label}</span>;
}

function StatsBar({ data }) {
  const counts = { total: data.length };
  states.values.forEach(s => { counts[s.value] = data.filter(r => r[states.field] === s.value).length; });
  return (
    <div className="stats">
      <div className="stat"><div className="num">{counts.total}</div><span className="lbl">Total</span></div>
      {states.values.map(s => (
        <div className="stat" key={s.value}>
          <div className="num" style={{ color: s.color }}>{counts[s.value]}</div>
          <span className="lbl">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function ActionButtons({ record, onAction }) {
  const recordState = record[states.field];
  const available = actions.filter(a => a.fromState === recordState);
  if (!available.length) return null;
  return (
    <div className="actions-cell">
      {available.map(a => (
        <button key={a.name} className={`btn btn-${a.style} btn-sm`}
          onClick={() => {
            if (a.confirm && a.promptField) {
              const val = prompt(a.promptMessage);
              if (!val) return;
              onAction(a, record, { [a.promptField]: val });
            } else if (a.confirm) {
              if (!confirm(a.confirmMessage)) return;
              onAction(a, record);
            } else {
              onAction(a, record);
            }
          }}>
          {a.label}
        </button>
      ))}
    </div>
  );
}

function SchemaTable({ data, onAction, search, filter }) {
  let rows = data;
  if (filter) rows = rows.filter(r => r[states.field] === filter);
  if (search) {
    const q = search.toLowerCase();
    rows = rows.filter(r => listConfig.searchFields.some(f => (r[f] || '').toLowerCase().includes(q)));
  }

  if (!rows.length) return <div className="empty">No travel requests found</div>;

  const gridFields = fields.filter(f => f.gridVisible);

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Number</th>
          {gridFields.map(f => <th key={f.name}>{f.label}</th>)}
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.sys_id}>
            <td>{r.number || '—'}</td>
            {gridFields.map(f => (
              <td key={f.name}>
                {f.type === 'currency' ? `$${Number(r[f.name] || 0).toLocaleString()}` :
                 f.type === 'textarea' && f.truncate ? <><strong>{r.destination}</strong><br/><span className="text-muted">{(r[f.name] || '').slice(0, f.truncate)}</span></> :
                 f.type === 'date' ? (r[f.name] || '—') :
                 (r[f.name] || '—')}
              </td>
            ))}
            <td><StateBadge value={r[states.field]} /></td>
            <td><ActionButtons record={r} onAction={onAction} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function SchemaForm({ onSave, onCancel }) {
  const formFields = fields.filter(f => !f.showOnReject);
  const [formData, setFormData] = useState(() => {
    const init = {};
    formFields.forEach(f => { init[f.name] = ''; });
    init[states.field] = states.default;
    return init;
  });
  const [error, setError] = useState(null);

  const set = (name, value) => setFormData(prev => ({ ...prev, [name]: value }));

  const handleSave = () => {
    const err = validate(formData);
    if (err) { setError(err); return; }
    setError(null);
    onSave(formData);
  };

  const renderField = (f) => {
    if (f.type === 'textarea') {
      return <textarea value={formData[f.name]} onChange={e => set(f.name, e.target.value)} placeholder={f.placeholder || ''} />;
    }
    const inputType = f.type === 'currency' ? 'number' : f.type === 'date' ? 'date' : 'text';
    return <input type={inputType} step={f.type === 'currency' ? '0.01' : undefined}
      value={formData[f.name]} onChange={e => set(f.name, e.target.value)} placeholder={f.placeholder || ''} />;
  };

  // Group date fields side by side
  const dateFields = formFields.filter(f => f.type === 'date');
  const otherFields = formFields.filter(f => f.type !== 'date');

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onCancel(); }}>
      <div className="modal">
        <h2>{app.icon} New {app.name}</h2>
        {error && <div className="alert alert-error">{error}</div>}

        {otherFields.filter(f => f.name !== 'notes').slice(0, 1).map(f => (
          <div className="form-group" key={f.name}>
            <label>{f.label}{f.required && ' *'}</label>
            {renderField(f)}
          </div>
        ))}

        {dateFields.length > 0 && (
          <div className="form-row">
            {dateFields.map(f => (
              <div className="form-group" key={f.name}>
                <label>{f.label}{f.required && ' *'}</label>
                {renderField(f)}
              </div>
            ))}
          </div>
        )}

        {otherFields.filter(f => f.type === 'textarea').map(f => (
          <div className="form-group" key={f.name}>
            <label>{f.label}{f.required && ' *'}</label>
            {renderField(f)}
          </div>
        ))}

        <div className="form-row">
          {otherFields.filter(f => f.type === 'currency').map(f => (
            <div className="form-group" key={f.name}>
              <label>{f.label}{f.required && ' *'}</label>
              {renderField(f)}
            </div>
          ))}
          {otherFields.filter(f => f.name === 'notes').map(f => (
            <div className="form-group" key={f.name}>
              <label>{f.label}</label>
              {renderField(f)}
            </div>
          ))}
        </div>

        <div className="form-actions">
          <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Create {app.name}</button>
        </div>
      </div>
    </div>
  );
}

// --- Main App ---

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const load = useCallback(async () => {
    try {
      setLoading(true);
      if (localMode) {
        setData([...data.length ? data : MOCK_SEED]);
        setError(null);
        return;
      }
      const res = await tableApi.list();
      const records = res.result || [];
      if (records.length === 0) {
        localMode = true;
        setData([...MOCK_SEED]);
        setError(null);
      } else {
        setData(records);
        setError(null);
      }
    } catch (e) {
      localMode = true;
      setData([...MOCK_SEED]);
      setError(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleAction = async (action, record, extra = {}) => {
    if (localMode) {
      if (action.isDelete) {
        setData(prev => prev.filter(r => r.sys_id !== record.sys_id));
      } else {
        setData(prev => prev.map(r => r.sys_id === record.sys_id ? { ...r, [states.field]: action.toState, ...extra } : r));
      }
      return;
    }
    try {
      if (action.isDelete) {
        await tableApi.delete(record.sys_id);
      } else {
        await tableApi.update(record.sys_id, { [states.field]: action.toState, ...extra });
      }
      load();
    } catch (e) {
      alert(`${action.label} failed: ${e.message}`);
    }
  };

  const handleSave = async (formData) => {
    if (localMode) {
      const newRec = { ...formData, sys_id: `m${mockCounter}`, number: `TRV${String(mockCounter).padStart(4, '0')}` };
      mockCounter++;
      setData(prev => [newRec, ...prev]);
      setShowForm(false);
      return;
    }
    try {
      await tableApi.create(formData);
      setShowForm(false);
      load();
    } catch (e) {
      alert('Create failed: ' + e.message);
    }
  };

  return (
    <>
      <div className="header">
        <div className="header-left">
          <span style={{ fontSize: '1.5rem' }}>{app.icon}</span>
          <h1>{app.name}s</h1>
          <span className="badge" style={{ background: app.badgeColor }}>{app.badge}</span>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>+ New Request</button>
      </div>

      <div className="container">
        {error && <div className="alert alert-error">{error}</div>}

        <div className="alert alert-info" style={{ marginBottom: '1rem' }}>
          <strong>Build Agent Pattern</strong> — This entire UI is auto-generated from <code>build-agent/schema.json</code>. Change the schema → UI updates automatically. {localMode && <><br/><em>Running in local demo mode (mock data) — connect to ServiceNow instance for live data.</em></>}
        </div>

        <StatsBar data={data} />

        <div className="toolbar">
          <input type="text" placeholder={`Search ${listConfig.searchFields.join(', ')}...`}
            value={search} onChange={e => setSearch(e.target.value)} />
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="">All States</option>
            {states.values.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
          <button className="btn btn-secondary" onClick={load}>↻ Refresh</button>
        </div>

        {loading
          ? <div className="loading">Loading travel requests...</div>
          : <SchemaTable data={data} onAction={handleAction} search={search} filter={filter} />}
      </div>

      {showForm && <SchemaForm onSave={handleSave} onCancel={() => setShowForm(false)} />}
    </>
  );
}
