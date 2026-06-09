var D = TRV_DATA;
var SC = {draft:{l:'Draft',c:'sd'},submitted:{l:'Submitted',c:'ss'},approved:{l:'Approved',c:'sa'},rejected:{l:'Rejected',c:'sr'},completed:{l:'Completed',c:'sc'}};
var MSG = TRV_MSG;

function gel(id){return document.getElementById(id);}

if (MSG) {
  gel('tMsg').innerHTML = '<div class="ok">Record ' + MSG + ' successfully.</div>';
  setTimeout(function(){ gel('tMsg').innerHTML = ''; }, 3000);
}

function tR(){
  var q = gel('tQ').value.toLowerCase(), f = gel('tF').value, rows = D;
  if (f) rows = rows.filter(function(r){return r.state === f;});
  if (q) rows = rows.filter(function(r){return (r.destination + r.purpose).toLowerCase().indexOf(q) >= 0;});
  var ct = {total: D.length};
  Object.keys(SC).forEach(function(s){ct[s] = D.filter(function(r){return r.state === s;}).length;});
  gel('tS').innerHTML = '<div class="tsc"><span class="n">' + ct.total + '</span><span class="l">Total</span></div>' + Object.keys(SC).map(function(s){return '<div class="tsc"><span class="n" style="color:' + ({draft:'#9e9e9e',submitted:'#1a73e8',approved:'#34a853',rejected:'#ea4335',completed:'#9334e6'}[s]) + '">' + ct[s] + '</span><span class="l">' + SC[s].l + '</span></div>';}).join('');
  if (!rows.length) { gel('tG').innerHTML = '<div class="em">No travel requests found</div>'; return; }
  gel('tG').innerHTML = '<table class="tt"><thead><tr><th>Number</th><th>Destination</th><th>Dates</th><th>Cost</th><th>State</th><th>Actions</th></tr></thead><tbody>' + rows.map(function(r){
    var s = r.state, si = SC[s] || {l:s,c:'sd'};
    return '<tr><td>' + (r.number || '\u2014') + '</td><td><strong>' + r.destination + '</strong><br/><small style="color:#999">' + r.purpose.substring(0,60) + '</small></td><td>' + r.departure_date + ' \u2192 ' + r.return_date + '</td><td>$' + Number(r.estimated_cost || 0).toLocaleString() + '</td><td><span class="sb ' + si.c + '">' + si.l + '</span></td><td>' + ab(s, r.sys_id) + '</td></tr>';
  }).join('') + '</tbody></table>';
}

function ab(s, id) {
  var h = '';
  var ck = TRV_CK;
  if (s === 'draft') h = '<form method="POST" style="display:inline"><input type="hidden" name="trv_action" value="update_state"/><input type="hidden" name="sysparm_ck" value="' + ck + '"/><input type="hidden" name="trv_id" value="' + id + '"/><input type="hidden" name="trv_state" value="submitted"/><button class="btn bp bsm" type="submit">Submit</button></form> <form method="POST" style="display:inline" onsubmit="return confirm(\'Delete?\')"><input type="hidden" name="trv_action" value="delete"/><input type="hidden" name="sysparm_ck" value="' + ck + '"/><input type="hidden" name="trv_id" value="' + id + '"/><button class="btn br bsm" type="submit">Delete</button></form>';
  if (s === 'submitted') h = '<form method="POST" style="display:inline"><input type="hidden" name="trv_action" value="update_state"/><input type="hidden" name="sysparm_ck" value="' + ck + '"/><input type="hidden" name="trv_id" value="' + id + '"/><input type="hidden" name="trv_state" value="approved"/><button class="btn bg bsm" type="submit">Approve</button></form> <form method="POST" style="display:inline"><input type="hidden" name="trv_action" value="update_state"/><input type="hidden" name="sysparm_ck" value="' + ck + '"/><input type="hidden" name="trv_id" value="' + id + '"/><input type="hidden" name="trv_state" value="rejected"/><button class="btn br bsm" type="submit">Reject</button></form>';
  if (s === 'approved') h = '<form method="POST" style="display:inline"><input type="hidden" name="trv_action" value="update_state"/><input type="hidden" name="sysparm_ck" value="' + ck + '"/><input type="hidden" name="trv_id" value="' + id + '"/><input type="hidden" name="trv_state" value="completed"/><button class="btn bv bsm" type="submit">Complete</button></form>';
  return h;
}

function tVal() {
  var d = gel('fD').value, dp = gel('fP').value, rt = gel('fR').value;
  if (rt < dp) { gel('tFE').innerHTML = '<div class="fe">Return date must be after departure</div>'; return false; }
  return true;
}

tR();
