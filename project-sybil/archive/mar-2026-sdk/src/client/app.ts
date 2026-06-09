const API_BASE = '/api/x_snc_travel/x_snc_travel_api/requests';
const STATES: Record<string, { label: string; cls: string }> = {
  draft: { label: 'Draft', cls: 'badge-draft' },
  submitted: { label: 'Submitted', cls: 'badge-submitted' },
  approved: { label: 'Approved', cls: 'badge-approved' },
  rejected: { label: 'Rejected', cls: 'badge-rejected' },
  completed: { label: 'Completed', cls: 'badge-completed' },
};

interface TravelRequest {
  sys_id: string;
  number: string;
  x_snc_travel_destination: string;
  x_snc_travel_departure_date: string;
  x_snc_travel_return_date: string;
  x_snc_travel_purpose: string;
  x_snc_travel_estimated_cost: string;
  x_snc_travel_travel_type: string;
  x_snc_travel_state: string;
}

let allRecords: TravelRequest[] = [];

async function api(method: string, path: string, body?: object): Promise<any> {
  const opts: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(path, opts);
  return res.json();
}

async function loadRecords(): Promise<TravelRequest[]> {
  const data = await api('GET', API_BASE);
  return (data.result || []).map((r: any) => ({
    sys_id: r.sys_id,
    number: r.number || '',
    x_snc_travel_destination: r.x_snc_travel_destination || '',
    x_snc_travel_departure_date: r.x_snc_travel_departure_date || '',
    x_snc_travel_return_date: r.x_snc_travel_return_date || '',
    x_snc_travel_purpose: r.x_snc_travel_purpose || '',
    x_snc_travel_estimated_cost: r.x_snc_travel_estimated_cost || '',
    x_snc_travel_travel_type: r.x_snc_travel_travel_type || '',
    x_snc_travel_state: r.x_snc_travel_state || 'draft',
  }));
}

async function createRecord(data: object): Promise<void> {
  await api('POST', API_BASE, data);
}

async function updateState(sysId: string, state: string): Promise<void> {
  await api('PATCH', `${API_BASE}/${sysId}`, { x_snc_travel_state: state });
}

async function deleteRecord(sysId: string): Promise<void> {
  await api('DELETE', `${API_BASE}/${sysId}`);
}

function val(r: TravelRequest, field: string): string {
  return (r as any)[field] || '';
}

function renderStats(): string {
  const counts: Record<string, number> = { draft: 0, submitted: 0, approved: 0, rejected: 0, completed: 0 };
  allRecords.forEach(r => { counts[r.x_snc_travel_state] = (counts[r.x_snc_travel_state] || 0) + 1; });
  return `<div class="stats">${Object.entries(STATES).map(([k, v]) =>
    `<div class="stat"><div class="label">${v.label}</div><div class="value">${counts[k]}</div></div>`
  ).join('')}</div>`;
}

function badge(state: string): string {
  const s = STATES[state] || { label: state, cls: '' };
  return `<span class="badge ${s.cls}">${s.label}</span>`;
}

function actions(r: TravelRequest): string {
  const st = r.x_snc_travel_state;
  let h = '<div class="actions">';
  if (st === 'draft') h += `<button class="btn btn-sm btn-primary" onclick="doState('${r.sys_id}','submitted')">Submit</button>`;
  if (st === 'submitted') {
    h += `<button class="btn btn-sm btn-success" onclick="doState('${r.sys_id}','approved')">Approve</button>`;
    h += `<button class="btn btn-sm btn-danger" onclick="doState('${r.sys_id}','rejected')">Reject</button>`;
  }
  if (st === 'approved') h += `<button class="btn btn-sm btn-complete" onclick="doState('${r.sys_id}','completed')">Complete</button>`;
  if (st === 'draft') h += `<button class="btn btn-sm btn-danger" onclick="doDelete('${r.sys_id}')">Delete</button>`;
  h += '</div>';
  return h;
}

function renderTable(records: TravelRequest[]): string {
  const rows = records.map(r => `<tr>
    <td>${r.number}</td>
    <td>${r.x_snc_travel_destination}</td>
    <td>${r.x_snc_travel_departure_date}</td>
    <td>${r.x_snc_travel_return_date}</td>
    <td>$${r.x_snc_travel_estimated_cost}</td>
    <td>${r.x_snc_travel_travel_type}</td>
    <td>${badge(r.x_snc_travel_state)}</td>
    <td>${actions(r)}</td>
  </tr>`).join('');
  return `<table>
    <thead><tr><th>Number</th><th>Destination</th><th>Departure</th><th>Return</th><th>Cost</th><th>Type</th><th>State</th><th>Actions</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function render(): void {
  const search = (document.getElementById('search') as HTMLInputElement)?.value?.toLowerCase() || '';
  const filtered = allRecords.filter(r =>
    r.x_snc_travel_destination.toLowerCase().includes(search) ||
    r.x_snc_travel_purpose.toLowerCase().includes(search) ||
    r.number.toLowerCase().includes(search) ||
    r.x_snc_travel_state.includes(search)
  );

  const app = document.getElementById('app')!;
  app.innerHTML = `
    <div class="container">
      <h1>Travel Requests</h1>
      ${renderStats()}
      <div class="toolbar">
        <input type="text" class="search" id="search" placeholder="Search requests..." value="${search}" />
        <button class="btn btn-primary" id="newBtn">+ New Request</button>
      </div>
      ${renderTable(filtered)}
    </div>
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal">
        <h2>New Travel Request</h2>
        <form id="trvForm">
          <div class="form-group"><label>Destination</label><input type="text" id="f_dest" required /></div>
          <div class="form-group"><label>Departure Date</label><input type="date" id="f_dep" required /></div>
          <div class="form-group"><label>Return Date</label><input type="date" id="f_ret" required /></div>
          <div class="form-group"><label>Travel Type</label><select id="f_type"><option value="domestic">Domestic</option><option value="international">International</option></select></div>
          <div class="form-group"><label>Purpose</label><textarea id="f_purpose" rows="3" required></textarea></div>
          <div class="form-group"><label>Estimated Cost (USD)</label><input type="number" id="f_cost" min="1" step="0.01" required /></div>
          <div style="display:flex;gap:8px;margin-top:16px;">
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-cancel" id="cancelBtn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.getElementById('search')?.addEventListener('input', () => render());
  document.getElementById('newBtn')?.addEventListener('click', () => {
    document.getElementById('modalOverlay')!.classList.add('active');
  });
  document.getElementById('cancelBtn')?.addEventListener('click', () => {
    document.getElementById('modalOverlay')!.classList.remove('active');
  });
  document.getElementById('trvForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await createRecord({
      x_snc_travel_destination: (document.getElementById('f_dest') as HTMLInputElement).value,
      x_snc_travel_departure_date: (document.getElementById('f_dep') as HTMLInputElement).value,
      x_snc_travel_return_date: (document.getElementById('f_ret') as HTMLInputElement).value,
      x_snc_travel_travel_type: (document.getElementById('f_type') as HTMLSelectElement).value,
      x_snc_travel_purpose: (document.getElementById('f_purpose') as HTMLTextAreaElement).value,
      x_snc_travel_estimated_cost: (document.getElementById('f_cost') as HTMLInputElement).value,
      x_snc_travel_state: 'draft',
    });
    document.getElementById('modalOverlay')!.classList.remove('active');
    allRecords = await loadRecords();
    render();
  });
}

(window as any).doState = async (id: string, state: string) => {
  await updateState(id, state);
  allRecords = await loadRecords();
  render();
};

(window as any).doDelete = async (id: string) => {
  if (!confirm('Delete this request?')) return;
  await deleteRecord(id);
  allRecords = await loadRecords();
  render();
};

async function init(): Promise<void> {
  allRecords = await loadRecords();
  render();
}

// Inject styles
const style = document.createElement('style');
style.textContent = `
  :root { --primary: #0354a5; --success: #22c55e; --warning: #f59e0b; --danger: #ef4444; --muted: #6b7280; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f3f4f6; color: #1f2937; }
  .container { max-width: 1200px; margin: 0 auto; padding: 24px; }
  h1 { font-size: 24px; margin-bottom: 16px; }
  .stats { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
  .stat { background: #fff; border-radius: 8px; padding: 16px 20px; flex: 1; min-width: 120px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  .stat .label { font-size: 12px; color: var(--muted); text-transform: uppercase; }
  .stat .value { font-size: 28px; font-weight: 700; }
  .toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .btn { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500; }
  .btn-primary { background: var(--primary); color: #fff; }
  .btn-success { background: var(--success); color: #fff; }
  .btn-danger { background: var(--danger); color: #fff; }
  .btn-complete { background: #f3e8ff; color: #7c3aed; }
  .btn-cancel { background: #e5e7eb; }
  .btn-sm { padding: 4px 10px; font-size: 12px; }
  table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  th { background: #f9fafb; text-align: left; padding: 10px 12px; font-size: 12px; text-transform: uppercase; color: var(--muted); border-bottom: 1px solid #e5e7eb; }
  td { padding: 10px 12px; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
  tr:hover { background: #f9fafb; }
  .badge { display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600; }
  .badge-draft { background: #e5e7eb; color: #374151; }
  .badge-submitted { background: #dbeafe; color: #1d4ed8; }
  .badge-approved { background: #dcfce7; color: #15803d; }
  .badge-rejected { background: #fee2e2; color: #b91c1c; }
  .badge-completed { background: #f3e8ff; color: #7c3aed; }
  .modal-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 100; align-items: center; justify-content: center; }
  .modal-overlay.active { display: flex; }
  .modal { background: #fff; border-radius: 12px; padding: 24px; width: 500px; max-height: 80vh; overflow-y: auto; }
  .form-group { margin-bottom: 12px; }
  .form-group label { display: block; font-size: 13px; font-weight: 500; margin-bottom: 4px; }
  .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; }
  .search { padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; width: 280px; }
  .actions { display: flex; gap: 4px; }
`;
document.head.appendChild(style);

init();
