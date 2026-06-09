var D=[],SC={draft:{l:'Draft',c:'sd'},submitted:{l:'Submitted',c:'ss'},approved:{l:'Approved',c:'sa'},rejected:{l:'Rejected',c:'sr'},completed:{l:'Completed',c:'sc'}};
function gel(id){return document.getElementById(id);}
function tL(){var ga=new GlideAjax('TravelRequestAjax');ga.addParam('sysparm_name','getRequests');ga.getXMLAnswer(function(ans){try{D=JSON.parse(ans)||[];}catch(e){D=[];}tR();});}
function tR(){var q=gel('tQ').value.toLowerCase(),f=gel('tF').value,rows=D;
if(f)rows=rows.filter(function(r){return r.state===f;});
if(q)rows=rows.filter(function(r){return(r.destination+r.purpose).toLowerCase().indexOf(q)>=0;});
var ct={total:D.length};Object.keys(SC).forEach(function(s){ct[s]=D.filter(function(r){return r.state===s;}).length;});
gel('tS').innerHTML='<div class="tsc"><span class="n">'+ct.total+'</span><span class="l">Total</span></div>'+Object.keys(SC).map(function(s){return'<div class="tsc"><span class="n" style="color:'+({draft:'#9e9e9e',submitted:'#1a73e8',approved:'#34a853',rejected:'#ea4335',completed:'#9334e6'}[s])+'">'+ct[s]+'</span><span class="l">'+SC[s].l+'</span></div>';}).join('');
if(!rows.length){gel('tG').innerHTML='<div class="em">No travel requests found</div>';return;}
gel('tG').innerHTML='<table class="tt"><thead><tr><th>Number</th><th>Destination</th><th>Dates</th><th>Cost</th><th>State</th><th>Actions</th></tr></thead><tbody>'+rows.map(function(r){var s=r.state,si=SC[s]||{l:s,c:'sd'};return'<tr><td>'+(r.number||'\u2014')+'</td><td><strong>'+r.destination+'</strong><br/><small style="color:#999">'+r.purpose.substring(0,60)+'</small></td><td>'+r.departure_date+' \u2192 '+r.return_date+'</td><td>$'+Number(r.estimated_cost||0).toLocaleString()+'</td><td><span class="sb '+si.c+'">'+si.l+'</span></td><td>'+ab(s,r.sys_id)+'</td></tr>';}).join('')+'</tbody></table>';}
function ab(s,id){var h='';if(s==='draft')h='<button class="btn bp bsm" onclick="tAct(\''+id+'\',\'submitted\')">Submit</button> <button class="btn br bsm" onclick="tDel(\''+id+'\')">Delete</button>';if(s==='submitted')h='<button class="btn bg bsm" onclick="tAct(\''+id+'\',\'approved\')">Approve</button> <button class="btn br bsm" onclick="tRej(\''+id+'\')">Reject</button>';if(s==='approved')h='<button class="btn bv bsm" onclick="tAct(\''+id+'\',\'completed\')">Complete</button>';return h;}
function tAct(id,s){var ga=new GlideAjax('TravelRequestAjax');ga.addParam('sysparm_name','updateState');ga.addParam('sysparm_id',id);ga.addParam('sysparm_state',s);ga.getXMLAnswer(function(){tL();});}
function tDel(id){if(!confirm('Delete this request?'))return;var ga=new GlideAjax('TravelRequestAjax');ga.addParam('sysparm_name','deleteRequest');ga.addParam('sysparm_id',id);ga.getXMLAnswer(function(){tL();});}
function tRej(id){var r=prompt('Rejection reason:');if(!r)return;tAct(id,'rejected');}
function tShow(){gel('tMB').style.display='flex';gel('tFE').innerHTML='';}
function tHide(){gel('tMB').style.display='none';}
function tSave(){try{var d=gel('fD').value,dp=gel('fP').value,rt=gel('fR').value,p=gel('fU').value,c=gel('fC').value,t=gel('fT').value;
if(!d||!dp||!rt||!p||!c){gel('tFE').innerHTML='<div class="fe">All * fields are required</div>';return;}
if(rt<dp){gel('tFE').innerHTML='<div class="fe">Return date must be after departure</div>';return;}
var ga=new GlideAjax('TravelRequestAjax');ga.addParam('sysparm_name','createRequest');ga.addParam('sysparm_destination',d);ga.addParam('sysparm_departure',dp);ga.addParam('sysparm_return',rt);ga.addParam('sysparm_purpose',p);ga.addParam('sysparm_cost',c);ga.addParam('sysparm_type',t);ga.getXMLAnswer(function(id){if(id){tHide();gel('fD').value='';gel('fP').value='';gel('fR').value='';gel('fU').value='';gel('fC').value='';tL();}else{gel('tFE').innerHTML='<div class="fe">Failed to create record</div>';}});}catch(e){gel('tFE').innerHTML='<div class="fe">Error: '+e.message+'</div>';}}
addLoadEvent(function(){tL();});
