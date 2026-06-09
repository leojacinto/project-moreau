var T='x_snc_trv_request',P='x_snc_virgil_',D=[],SC={draft:{l:'Draft',c:'sd'},submitted:{l:'Submitted',c:'ss'},approved:{l:'Approved',c:'sa'},rejected:{l:'Rejected',c:'sr'},completed:{l:'Completed',c:'sc'}};
function k(n){return P+n;}
function v(r,n){var x=r[k(n)];if(!x)return'\u2014';return typeof x==='object'?(x.display_value||x.value||'\u2014'):x;}
function sv(r,n){var x=r[k(n)];if(!x)return'';return typeof x==='object'?(x.value||''):x;}
function api(m,u,b){var x=new XMLHttpRequest();x.open(m,u,false);x.setRequestHeader('Accept','application/json');x.setRequestHeader('Content-Type','application/json');x.setRequestHeader('X-UserToken',TRV_CK);if(b)x.send(JSON.stringify(b));else x.send();if(x.status>=200&&x.status<300)return x.responseText?JSON.parse(x.responseText):{};throw new Error(x.status+' '+x.statusText);}
function tL(){try{var r=api('GET','/api/now/table/'+T+'?sysparm_display_value=all&sysparm_limit=100&sysparm_orderby=sys_created_onDESC');D=r.result||[];tR();}catch(e){document.getElementById('tG').innerHTML='<div class="em">Error loading: '+e.message+'</div>';}}
function tR(){var q=document.getElementById('tQ').value.toLowerCase(),f=document.getElementById('tF').value,rows=D;
if(f)rows=rows.filter(function(r){return sv(r,'state')===f;});
if(q)rows=rows.filter(function(r){return(v(r,'destination')+v(r,'purpose')).toLowerCase().indexOf(q)>=0;});
var ct={total:D.length};Object.keys(SC).forEach(function(s){ct[s]=D.filter(function(r){return sv(r,'state')===s;}).length;});
document.getElementById('tS').innerHTML='<div class="tsc"><span class="n">'+ct.total+'</span><span class="l">Total</span></div>'+Object.keys(SC).map(function(s){return'<div class="tsc"><span class="n" style="color:'+({draft:'#9e9e9e',submitted:'#1a73e8',approved:'#34a853',rejected:'#ea4335',completed:'#9334e6'}[s])+'">'+ct[s]+'</span><span class="l">'+SC[s].l+'</span></div>';}).join('');
if(!rows.length){document.getElementById('tG').innerHTML='<div class="em">No travel requests found</div>';return;}
document.getElementById('tG').innerHTML='<table class="tt"><thead><tr><th>Number</th><th>Destination</th><th>Dates</th><th>Cost</th><th>State</th><th>Actions</th></tr></thead><tbody>'+rows.map(function(r){var s=sv(r,'state'),si=SC[s]||{l:s,c:'sd'};return'<tr><td>'+v(r,'number')+'</td><td><strong>'+v(r,'destination')+'</strong><br/><small style="color:#999">'+v(r,'purpose').substring(0,60)+'</small></td><td>'+v(r,'departure_date')+' \u2192 '+v(r,'return_date')+'</td><td>$'+Number(sv(r,'estimated_cost')||0).toLocaleString()+'</td><td><span class="sb '+si.c+'">'+si.l+'</span></td><td>'+ab(s,r.sys_id)+'</td></tr>';}).join('')+'</tbody></table>';}
function ab(s,id){var h='';if(s==='draft')h='<button class="btn bp bsm" onclick="tAct(\''+id+'\',\'submitted\')">Submit</button> <button class="btn br bsm" onclick="tDel(\''+id+'\')">Delete</button>';if(s==='submitted')h='<button class="btn bg bsm" onclick="tAct(\''+id+'\',\'approved\')">Approve</button> <button class="btn br bsm" onclick="tRej(\''+id+'\')">Reject</button>';if(s==='approved')h='<button class="btn bv bsm" onclick="tAct(\''+id+'\',\'completed\')">Complete</button>';return h;}
function tAct(id,s){var b={};b[k('state')]=s;api('PATCH','/api/now/table/'+T+'/'+id,b);tL();}
function tDel(id){if(!confirm('Delete this request?'))return;api('DELETE','/api/now/table/'+T+'/'+id);tL();}
function tRej(id){var r=prompt('Rejection reason:');if(!r)return;var b={};b[k('state')]='rejected';api('PATCH','/api/now/table/'+T+'/'+id,b);tL();}
function tShow(){document.getElementById('tMB').style.display='flex';document.getElementById('tFE').innerHTML='';}
function tHide(){document.getElementById('tMB').style.display='none';}
function tSave(){try{var d=document.getElementById('fD').value,dp=document.getElementById('fP').value,rt=document.getElementById('fR').value,p=document.getElementById('fU').value,c=document.getElementById('fC').value,t=document.getElementById('fT').value;
if(!d||!dp||!rt||!p||!c){document.getElementById('tFE').innerHTML='<div class="fe">All * fields are required</div>';return;}
if(rt<dp){document.getElementById('tFE').innerHTML='<div class="fe">Return date must be after departure</div>';return;}
var b={};b[k('destination')]=d;b[k('departure_date')]=dp;b[k('return_date')]=rt;b[k('purpose')]=p;b[k('estimated_cost')]=c;b[k('travel_type')]=t;b[k('state')]='draft';
api('POST','/api/now/table/'+T,b);tHide();document.getElementById('fD').value='';document.getElementById('fP').value='';document.getElementById('fR').value='';document.getElementById('fU').value='';document.getElementById('fC').value='';tL();}catch(e){document.getElementById('tFE').innerHTML='<div class="fe">Error: '+e.message+'</div>';}}
addLoadEvent(function(){tL();});
