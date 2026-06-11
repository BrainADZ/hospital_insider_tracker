/* ════════ DATA ════════ */
const ROLES = {
  doctor:     {label:'Doctor',     color:'#0d9488'},
  nurse:      {label:'Nurse',      color:'#2563eb'},
  technician: {label:'Technician', color:'#7c3aed'},
  pharmacist: {label:'Pharmacist', color:'#d97706'},
  security:   {label:'Security',   color:'#ea580c'},
  support:    {label:'Support',    color:'#65a30d'}
};
const FLOORS=[{id:'G',label:'Ground'},{id:'1',label:'Floor 1'},{id:'2',label:'Floor 2'}];
const ZONES=[
  {id:'g-rec',  floor:'G', name:'Reception',     x:2,y:3,w:20,h:28},
  {id:'g-tri',  floor:'G', name:'Triage',        x:24,y:3,w:17,h:28},
  {id:'g-er',   floor:'G', name:'Emergency Bay', x:43,y:3,w:30,h:44, cls:'emergency'},
  {id:'g-rad',  floor:'G', name:'Radiology',     x:75,y:3,w:23,h:28},
  {id:'g-opd1', floor:'G', name:'OPD 1',         x:2,y:37,w:20,h:28},
  {id:'g-opd2', floor:'G', name:'OPD 2',         x:24,y:37,w:17,h:28},
  {id:'g-pha',  floor:'G', name:'Pharmacy',      x:75,y:37,w:23,h:28},
  {id:'g-lift', floor:'G', name:'Lift Lobby',    x:44,y:78,w:12,h:18, cls:'lift'},
  {id:'f1-icu',  floor:'1', name:'ICU',            x:2,y:3,w:30,h:40, restricted:true, allowed:['doctor','nurse']},
  {id:'f1-nst',  floor:'1', name:'Nurse Station',  x:35,y:3,w:18,h:24},
  {id:'f1-wa',   floor:'1', name:'Ward A',         x:56,y:3,w:42,h:30},
  {id:'f1-wb',   floor:'1', name:'Ward B',         x:56,y:37,w:42,h:30},
  {id:'f1-store',floor:'1', name:'Pharmacy Store', x:35,y:31,w:18,h:30, restricted:true, allowed:['pharmacist','support']},
  {id:'f1-dia',  floor:'1', name:'Dialysis',       x:2,y:47,w:30,h:24},
  {id:'f1-lift', floor:'1', name:'Lift Lobby',     x:44,y:78,w:12,h:18, cls:'lift'},
  {id:'f2-ot1', floor:'2', name:'OT 1',       x:2,y:3,w:23,h:40, restricted:true, allowed:['doctor','nurse','technician']},
  {id:'f2-ot2', floor:'2', name:'OT 2',       x:27,y:3,w:23,h:40, restricted:true, allowed:['doctor','nurse','technician']},
  {id:'f2-rec', floor:'2', name:'Recovery',   x:54,y:3,w:44,h:30},
  {id:'f2-lab', floor:'2', name:'Path Lab',   x:54,y:37,w:21,h:30},
  {id:'f2-bb',  floor:'2', name:'Blood Bank', x:78,y:37,w:20,h:30},
  {id:'f2-cssd',floor:'2', name:'CSSD',       x:2,y:47,w:23,h:24},
  {id:'f2-lift',floor:'2', name:'Lift Lobby', x:44,y:78,w:12,h:18, cls:'lift'}
];
const STAFF=[
  {id:'d1',name:'Dr. Aarav Mehra',role:'doctor',dept:'Cardiology',floor:'1',zone:'f1-icu',status:'onduty',battery:86,since:'08:00',phone:'+91 98XXX 11001'},
  {id:'d2',name:'Dr. Sana Kapoor',role:'doctor',dept:'Emergency',floor:'G',zone:'g-er',status:'onduty',battery:64,since:'07:30',phone:'+91 98XXX 11002'},
  {id:'d3',name:'Dr. Nikhil Rao',role:'doctor',dept:'Surgery',floor:'2',zone:'f2-ot1',status:'onduty',battery:91,since:'09:00',phone:'+91 98XXX 11003'},
  {id:'d4',name:'Dr. Priya Iyer',role:'doctor',dept:'Medicine',floor:'1',zone:'f1-wa',status:'onduty',battery:43,since:'08:00',phone:'+91 98XXX 11004'},
  {id:'d5',name:'Dr. Rohit Bhatia',role:'doctor',dept:'Radiology',floor:'G',zone:'g-rad',status:'break',battery:77,since:'10:00',phone:'+91 98XXX 11005'},
  {id:'d6',name:'Dr. Kavya Verma',role:'doctor',dept:'Anesthesia',floor:'2',zone:'f2-ot2',status:'onduty',battery:58,since:'09:00',phone:'+91 98XXX 11006'},
  {id:'n1',name:'Sister Mary Thomas',role:'nurse',dept:'ICU',floor:'1',zone:'f1-icu',status:'onduty',battery:72,since:'07:00',phone:'+91 98XXX 22001'},
  {id:'n2',name:'Nurse Jaspreet Singh',role:'nurse',dept:'Ward A',floor:'1',zone:'f1-wa',status:'onduty',battery:39,since:'07:00',phone:'+91 98XXX 22002'},
  {id:'n3',name:'Nurse Farah Khan',role:'nurse',dept:'Emergency',floor:'G',zone:'g-er',status:'onduty',battery:81,since:'07:30',phone:'+91 98XXX 22003'},
  {id:'n4',name:"Nurse Lara D'Souza",role:'nurse',dept:'Ward B',floor:'1',zone:'f1-wb',status:'onduty',battery:66,since:'07:00',phone:'+91 98XXX 22004'},
  {id:'n5',name:'Nurse Tanvi Joshi',role:'nurse',dept:'Recovery',floor:'2',zone:'f2-rec',status:'break',battery:88,since:'11:00',phone:'+91 98XXX 22005'},
  {id:'n6',name:'Nurse Vinod Nair',role:'nurse',dept:'Triage',floor:'G',zone:'g-tri',status:'onduty',battery:14,since:'07:30',phone:'+91 98XXX 22006'},
  {id:'t1',name:'Tech Anil Kumar',role:'technician',dept:'Path Lab',floor:'2',zone:'f2-lab',status:'onduty',battery:53,since:'08:30',phone:'+91 98XXX 33001'},
  {id:'t2',name:'Tech Simran Gill',role:'technician',dept:'Radiology',floor:'G',zone:'g-rad',status:'onduty',battery:69,since:'08:30',phone:'+91 98XXX 33002'},
  {id:'t3',name:'Tech Ritwik Das',role:'technician',dept:'Dialysis',floor:'1',zone:'f1-dia',status:'offduty',battery:95,since:'—',phone:'+91 98XXX 33003'},
  {id:'p1',name:'Ph. Devang Shah',role:'pharmacist',dept:'Pharmacy',floor:'G',zone:'g-pha',status:'onduty',battery:47,since:'09:00',phone:'+91 98XXX 44001'},
  {id:'p2',name:'Ph. Gita Menon',role:'pharmacist',dept:'Store',floor:'1',zone:'f1-store',status:'onduty',battery:74,since:'09:00',phone:'+91 98XXX 44002'},
  {id:'s1',name:'Sec. Balram Yadav',role:'security',dept:'Main Gate',floor:'G',zone:'g-rec',status:'onduty',battery:62,since:'06:00',phone:'+91 98XXX 55001'},
  {id:'s2',name:'Sec. Hema Chauhan',role:'security',dept:'OT Wing',floor:'2',zone:'f2-rec',status:'onduty',battery:84,since:'06:00',phone:'+91 98XXX 55002'},
  {id:'h1',name:'Spt. Chandan Lal',role:'support',dept:'Housekeeping',floor:'1',zone:'f1-wb',status:'onduty',battery:33,since:'06:30',phone:'+91 98XXX 66001'},
  {id:'h2',name:'Spt. Meena Devi',role:'support',dept:'Housekeeping',floor:'G',zone:'g-opd1',status:'offduty',battery:90,since:'—',phone:'+91 98XXX 66002'}
];
const USERS=[
  {u:'admin',p:'admin123',name:'Vikram Sethi',role:'Admin',desc:'Full access incl. permissions'},
  {u:'supervisor',p:'super123',name:'Asha Pillai',role:'Supervisor',desc:'Operations — no permissions tab'}
];

/* ════════ STATE & HELPERS ════════ */
const state={floor:'G',roleFilter:'all',search:'',selected:new Set(),code:'custom',
  broadcasts:[],alerts:[],ackTimes:[],highlighted:null,user:null,view:'map',started:false};
let bcSeq=0, alSeq=0;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const byId=id=>STAFF.find(s=>s.id===id);
const rand=(a,b)=>a+Math.random()*(b-a), rint=(a,b)=>Math.floor(rand(a,b+1));
const now=()=>new Date().toLocaleTimeString('en-IN',{hour12:false});
const esc=t=>t.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const initials=n=>n.replace(/^(Dr\.|Sister|Nurse|Tech|Ph\.|Sec\.|Spt\.)\s*/,'').split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
const zonesOf=f=>ZONES.filter(z=>z.floor===f);
const zoneById=id=>ZONES.find(z=>z.id===id);
const liftOf=f=>zoneById((f==='G'?'g':'f'+f)+'-lift');
const floorLabel=f=>FLOORS.find(x=>x.id===f).label;
const fmtHM=min=>{min=Math.round(min);return Math.floor(min/60)+'h '+String(min%60).padStart(2,'0')+'m';};
const fmtDur=ms=>{const t=Math.round(ms/1000);return t>=60?Math.floor(t/60)+'m '+String(t%60).padStart(2,'0')+'s':t+'s';};
const zoneAgg={};
const ASSETS=[
  {id:'a1',name:'Wheelchair WC-01',icon:'🦽',floor:'G',zone:'g-rec',status:'available'},
  {id:'a2',name:'Wheelchair WC-02',icon:'🦽',floor:'1',zone:'f1-wa',status:'in use'},
  {id:'a3',name:'Infusion Pump IP-114',icon:'💉',floor:'1',zone:'f1-icu',status:'in use'},
  {id:'a4',name:'Defibrillator DF-3',icon:'⚡',floor:'G',zone:'g-er',status:'available'},
  {id:'a5',name:'ECG Cart EC-2',icon:'📈',floor:'2',zone:'f2-rec',status:'available'},
  {id:'a6',name:'Ventilator VT-7',icon:'🫁',floor:'2',zone:'f2-ot1',status:'maintenance'},
  {id:'a7',name:'Patient Bed B-12',icon:'🛏',floor:'1',zone:'f1-wb',status:'in use'}
];
function toast(msg,cls=''){const t=document.createElement('div');t.className='toast '+cls;t.textContent=msg;
  $('#toasts').appendChild(t);setTimeout(()=>{t.style.opacity=0;t.style.transition='opacity .3s';setTimeout(()=>t.remove(),320);},2600);}

/* seed positions + time-on-site counters */
function ptInZone(z,pad=2){return {x:rand(z.x+pad,z.x+z.w-pad),y:rand(z.y+pad,z.y+z.h-pad)};}
function inside(z,x,y){return x>=z.x&&x<=z.x+z.w&&y>=z.y&&y<=z.y+z.h;}
function zoneAt(f,x,y){return zonesOf(f).find(z=>inside(z,x,y));}
STAFF.forEach(s=>{
  const z=zoneById(s.zone),p=ptInZone(z);
  s.x=p.x;s.y=p.y;s.dest=ptInZone(z);s.speed=rand(0.10,0.22);s.dwell=rint(20,120);
  s.pendingFloor=null;s.inRestricted=null;
  s.curZone=s.zone;s.curZoneName=z.name;s.curFloorAt=s.floor;s.curSince=Date.now();s.visits=[];
  // today's clock: minutes since badge-in, minus a simulated off-site break
  if (s.since!=='—'){
    const [h,m]=s.since.split(':').map(Number);
    const d=new Date(); const elapsed=Math.max(0,(d.getHours()*60+d.getMinutes())-(h*60+m));
    s.offMin=s.status==='offduty'? rand(120,300): rand(15,55);   // lunch run / errand outside
    s.onMin=Math.max(10,elapsed-s.offMin);
    if (s.status==='offduty'){ s.onMin=rand(180,300); }
  } else { s.onMin=0; s.offMin=0; }
});

/* ════════ MOVEMENT + GEOFENCE ════════ */
function pickDest(s){
  if (s.pendingFloor){
    const nf=s.pendingFloor;s.pendingFloor=null;s.floor=nf;
    const lp=ptInZone(liftOf(nf));s.x=lp.x;s.y=lp.y;
    const t=zonesOf(nf).filter(z=>!z.cls);const z=t[rint(0,t.length-1)];
    s.zone=z.id;s.dest=ptInZone(z);
    addFeed('🛗',`<b>${esc(s.name)}</b> moved to ${floorLabel(nf)} via lift`,'','move');
    return;
  }
  const r=Math.random();
  if (r<0.78) s.dest=ptInZone(zoneById(s.zone));
  else if (r<0.94){const o=zonesOf(s.floor).filter(z=>z.id!==s.zone&&!z.cls);const z=o[rint(0,o.length-1)];s.zone=z.id;s.dest=ptInZone(z);}
  else {const o=FLOORS.map(f=>f.id).filter(f=>f!==s.floor);s.pendingFloor=o[rint(0,o.length-1)];s.dest=ptInZone(liftOf(s.floor),3);}
}
let frame=0;
function tick(){
  frame++;
  STAFF.forEach(s=>{
    if (s.status==='offduty') return;
    if (s.status==='break'&&Math.random()<0.97) return;
    if (s.dwell>0) s.dwell--;
    else{
      const dx=s.dest.x-s.x,dy=s.dest.y-s.y,d=Math.hypot(dx,dy);
      if (d<0.5){s.dwell=rint(15,160);pickDest(s);}
      else{s.x+=dx/d*s.speed;s.y+=dy/d*s.speed;}
    }
    const z=zoneAt(s.floor,s.x,s.y);
    if (z&&z.restricted&&!z.allowed.includes(s.role)){
      if (s.inRestricted!==z.id){
        s.inRestricted=z.id;
        raiseAlert('⛔','geofence',`Geofence breach — <b>${esc(s.name)}</b> (${ROLES[s.role].label}) entered <b>${z.name}</b>, ${floorLabel(s.floor)}`,s);
        flashZone(z.id);
      }
    } else if (s.inRestricted&&(!z||z.id!==s.inRestricted)) s.inRestricted=null;
    /* continuous room-level tracking with time-spent */
    const zid=z?z.id:'cor-'+s.floor;
    if (zid!==s.curZone){
      const t=Date.now(),dur=t-s.curSince;
      if (dur>=8000){
        s.visits.unshift({zone:s.curZoneName,floor:s.curFloorAt,inT:s.curSince,outT:t,dur});
        if (s.visits.length>40) s.visits.pop();
        const key=s.curZoneName+' · '+floorLabel(s.curFloorAt);
        if (s.curZoneName!=='Corridor') zoneAgg[key]=(zoneAgg[key]||0)+dur;
        const nz=z?z.name:'Corridor';
        addFeed('🚶',`<b>${esc(s.name)}</b> · ${esc(s.curZoneName)} → ${esc(nz)} <span style="color:var(--faint)">(${fmtDur(dur)} in ${esc(s.curZoneName)})</span>`,'','move');
      }
      s.curZone=zid;s.curZoneName=z?z.name:'Corridor';s.curFloorAt=s.floor;s.curSince=Date.now();
    }
  });
  if (frame%160===0){
    STAFF.forEach(s=>{
      if (s.status==='offduty') return;
      s.battery=Math.max(2,s.battery-(Math.random()<0.5?1:0));
      if (s.battery===14&&!s.lowWarned){s.lowWarned=true;
        raiseAlert('🔋','battery',`Low badge battery (14%) — <b>${esc(s.name)}</b>. Tracker may go offline.`,s);}
    });
    if (state.view==='employees') renderEmployees();
  }
  updateDots();
}
/* on-site minutes accumulate live */
setInterval(()=>{ if(!state.started) return;
  STAFF.forEach(s=>{ if(s.status!=='offduty') s.onMin+=1/6; });
  if (state.view==='time') renderTime();
},10000);

/* ════════ MAP ════════ */
const mapEl=()=>$('#map');
function buildZones(){
  $$('.zone').forEach(e=>e.remove());
  zonesOf(state.floor).forEach((z,i)=>{
    const d=document.createElement('div');
    d.className='zone'+(z.cls?' '+z.cls:'')+(z.restricted?' restricted':'');
    d.id='zone-'+z.id;
    d.style.cssText=`left:${z.x}%;top:${z.y}%;width:${z.w}%;height:${z.h}%`;
    const code=(z.floor==='G'?'G':'F'+z.floor)+'·'+String(i+1).padStart(2,'0');
    d.innerHTML=`<span class="zl">${z.name}${z.restricted?' 🔒':''}</span><span class="zr">${code}</span><span class="zc" data-zc="${z.id}"></span>`;
    mapEl().appendChild(d);
  });
}
const dots={},adots={};
function buildAssets(){
  ASSETS.forEach(a=>{
    const p=ptInZone(zoneById(a.zone));a.x=p.x;a.y=p.y;a.moved=now();
    const d=document.createElement('div');d.className='adot';
    d.innerHTML=`<span class="tag">${a.icon} ${a.name}</span>`;
    mapEl().appendChild(d);adots[a.id]=d;
  });
}
function updateAssets(){
  ASSETS.forEach(a=>{const d=adots[a.id];if(!d)return;
    const vis=state.showAssets&&a.floor===state.floor;
    d.style.display=vis?'block':'none';
    if (vis){d.style.left=a.x+'%';d.style.top=a.y+'%';}});
}
function buildDots(){
  STAFF.forEach(s=>{
    const d=document.createElement('div');
    d.className='sdot';d.style.background=ROLES[s.role].color;d.style.color=ROLES[s.role].color;
    d.innerHTML=`<span class="tag">${esc(s.name.split(' ').slice(0,2).join(' '))}</span>`;
    d.onclick=e=>{e.stopPropagation();openPopup(s);};
    mapEl().appendChild(d);dots[s.id]=d;
  });
}
function updateDots(){
  const counts={};
  STAFF.forEach(s=>{
    const d=dots[s.id];if(!d)return;
    const vis=s.floor===state.floor&&s.status!=='offduty';
    d.style.display=vis?'block':'none';
    if (vis){
      d.style.left=s.x+'%';d.style.top=s.y+'%';
      d.classList.toggle('break',s.status==='break');
      d.classList.toggle('hl',state.highlighted===s.id);
      d.classList.toggle('sos',!!s.sosActive);
      const z=zoneAt(s.floor,s.x,s.y);
      if (z) counts[z.id]=(counts[z.id]||0)+1;
    }
  });
  $$('[data-zc]').forEach(el=>{const c=counts[el.dataset.zc]||0;el.textContent=c?c+' staff':'';});
  updateAssets();
}
function flashZone(id){
  const el=$('#zone-'+id);
  if (el){el.classList.add('flash');setTimeout(()=>el.classList.remove('flash'),4000);}
  const z=zoneById(id);
  if (z.floor!==state.floor) $(`.floor-tab[data-floor="${z.floor}"]`)?.classList.add('has-alert');
}
function sweepAt(x,y){const sw=$('#sweep');sw.style.setProperty('--sx',x+'%');sw.style.setProperty('--sy',y+'%');
  sw.classList.remove('go');void sw.offsetWidth;sw.classList.add('go');}
function openPopup(s){
  const p=$('#spop'),z=zoneAt(s.floor,s.x,s.y);
  p.innerHTML=`
    <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">
      <div class="avatar" style="background:${ROLES[s.role].color}">${initials(s.name)}</div>
      <div><div style="font-weight:800;font-size:13.5px">${esc(s.name)}</div>
      <div style="font-size:11px;color:var(--dim)">${ROLES[s.role].label} · ${esc(s.dept)}</div></div>
    </div>
    <div class="row"><span>Location</span><b>${z?z.name:'Corridor'}, ${floorLabel(s.floor)}</b></div>
    <div class="row"><span>Status</span><b>${s.status==='onduty'?'On duty':s.status==='break'?'On break':'Off duty'}</b></div>
    <div class="row"><span>Badge in</span><b>${s.since}</b></div>
    <div class="row"><span>On site today</span><b>${fmtHM(s.onMin)}</b></div>
    <div class="row"><span>Battery</span><b>${s.battery}%</b></div>
    <div class="actions" style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
      <button class="btn sm primary" onclick="msgStaff('${s.id}')">✉ Page</button>
      <button class="btn sm" onclick="locateStaff('${s.id}');closePopup()">◎ Track</button>
      <button class="btn sm" onclick="openHistory('${s.id}');closePopup()">🕘 History</button>
      <button class="btn sm" onclick="closePopup()">✕</button>
    </div>`;
  p.style.left=Math.min(Math.max(s.x,2),70)+'%';p.style.top=Math.max(s.y-4,2)+'%';
  p.classList.add('open');
}
function closePopup(){$('#spop').classList.remove('open');}
function msgStaff(id){state.selected.add(id);closePopup();navTo('alerts');renderRecipients();updateSelCount();
  toast(`${byId(id).name} added to recipients`,'ok');}
function locateStaff(id){
  const s=byId(id);
  if (s.status==='offduty'){toast(`${s.name} is off duty — last seen ${floorLabel(s.floor)}`,'err');return;}
  navTo('map');
  if (s.floor!==state.floor) setFloor(s.floor);
  state.highlighted=id;
  setTimeout(()=>{if(state.highlighted===id)state.highlighted=null;},6000);
}
function setFloor(f){
  state.floor=f;
  $$('.floor-tab').forEach(t=>{t.classList.toggle('on',t.dataset.floor===f);if(t.dataset.floor===f)t.classList.remove('has-alert');});
  closePopup();buildZones();updateDots();
}
function buildFloorTabs(){
  $('#floorTabs').innerHTML=FLOORS.map(f=>`<button class="floor-tab${f.id===state.floor?' on':''}" data-floor="${f.id}">${f.label}<span class="fb"></span></button>`).join('');
  $$('.floor-tab').forEach(t=>t.onclick=()=>setFloor(t.dataset.floor));
}
function buildLegend(){$('#legend').innerHTML=Object.values(ROLES).map(r=>`<span><i style="background:${r.color}"></i>${r.label}</span>`).join('');}

/* ════════ EMPLOYEES VIEW ════════ */
function buildFilters(){
  const all=[['all','All'],...Object.entries(ROLES).map(([k,v])=>[k,v.label+'s'])];
  $('#roleFilters').innerHTML=all.map(([k,l])=>`<button class="fchip${k===state.roleFilter?' on':''}" data-f="${k}">${l}</button>`).join('');
  $$('.fchip').forEach(c=>c.onclick=()=>{state.roleFilter=c.dataset.f;buildFilters();renderEmployees();});
}
function statusBadge(s){
  return s.status==='onduty'?'<span class="badge green">● On duty</span>'
    : s.status==='break'?'<span class="badge amber">◐ On break</span>'
    : '<span class="badge gray">○ Off duty</span>';
}
function renderEmployees(){
  const q=state.search.toLowerCase();
  const list=STAFF.filter(s=>(state.roleFilter==='all'||s.role===state.roleFilter)&&(!q||(s.name+s.role+s.dept).toLowerCase().includes(q)));
  $('#empCount').textContent=list.length+' of '+STAFF.length+' people';
  $('#empTable').innerHTML=`
    <tr><th>Employee</th><th>Status</th><th>Live location</th><th>Badge in</th><th>Battery</th><th>Contact</th><th></th></tr>`+
    list.map(s=>{
      const z=s.status!=='offduty'?zoneAt(s.floor,s.x,s.y):null;
      return `<tr>
        <td><div class="cell-name"><div class="avatar" style="background:${ROLES[s.role].color}">${initials(s.name)}</div>
          <div><div class="nm">${esc(s.name)}</div><div class="dp">${ROLES[s.role].label} · ${esc(s.dept)}</div></div></div></td>
        <td>${statusBadge(s)}</td>
        <td class="mono">${s.status==='offduty'?'<span style="color:var(--faint)">off site</span>':(z?z.name:'Corridor')+', '+floorLabel(s.floor)}</td>
        <td class="mono">${s.since}</td>
        <td class="mono" style="color:${s.battery<=15?'var(--red)':'inherit'}">${s.battery}%</td>
        <td class="mono" style="font-size:11px">${s.phone}</td>
        <td style="white-space:nowrap"><button class="btn sm" onclick="locateStaff('${s.id}')">◎ Track</button>
            <button class="btn sm" onclick="msgStaff('${s.id}')">✉ Page</button>
            <button class="btn sm" onclick="openHistory('${s.id}')" title="Location history">🕘</button></td>
      </tr>`;}).join('');
}

/* ════════ TIME VIEW ════════ */
function renderTime(){
  const sorted=[...STAFF].sort((a,b)=>b.onMin-a.onMin);
  const maxMin=Math.max(...STAFF.map(s=>s.onMin+s.offMin),1);
  $('#timeTable').innerHTML=`
    <tr><th>Employee</th><th>Status</th><th>Badge in</th><th>On site</th><th>Off site</th><th>Today</th></tr>`+
    sorted.map(s=>`<tr>
      <td><div class="cell-name"><div class="avatar" style="background:${ROLES[s.role].color}">${initials(s.name)}</div>
        <div><div class="nm">${esc(s.name)}</div><div class="dp">${ROLES[s.role].label}</div></div></div></td>
      <td>${statusBadge(s)}</td>
      <td class="mono">${s.since}</td>
      <td class="mono" style="color:var(--green);font-weight:600">${fmtHM(s.onMin)}</td>
      <td class="mono" style="color:var(--faint)">${fmtHM(s.offMin)}</td>
      <td><div class="timebar"><i style="width:${Math.min(100,(s.onMin/maxMin)*100)}%"></i></div></td>
    </tr>`).join('');
}

/* ════════ PAGER / BROADCAST ════════ */
const CODE_PRESETS={
  blue:'CODE BLUE — Cardiac arrest. Respond immediately to the marked location.',
  red:'CODE RED — Fire reported. Follow evacuation protocol for your wing.',
  pink:'CODE PINK — Infant security alert. Secure all exits and stairwells.',
  custom:''};
function bindComposer(){
  $$('.code-btn').forEach(b=>b.onclick=()=>{
    state.code=b.dataset.code;
    $$('.code-btn').forEach(x=>x.classList.toggle('on',x===b));
    $('#msgText').value=CODE_PRESETS[state.code]||'';
  });
  $$('.qchip').forEach(q=>q.onclick=()=>{
    const t=q.dataset.q;
    if (t==='clear') state.selected.clear();
    else STAFF.forEach(s=>{
      if (t==='doctors'&&s.role==='doctor') state.selected.add(s.id);
      if (t==='nurses'&&s.role==='nurse') state.selected.add(s.id);
      if (t==='onduty'&&s.status==='onduty') state.selected.add(s.id);
    });
    updateSelCount();renderRecipients();
  });
  $('#btnSend').onclick=()=>{
    const b=sendBroadcast($('#msgText').value,[...state.selected],state.code);
    if (b){state.selected.clear();updateSelCount();renderRecipients();if(state.code==='custom')$('#msgText').value='';}
  };
}
function renderRecipients(){
  const groups={};STAFF.forEach(s=>{(groups[s.role]??=[]).push(s);});
  $('#recipList').innerHTML=Object.entries(groups).map(([role,list])=>
    `<div class="recip-head" style="color:${ROLES[role].color}">${ROLES[role].label}s</div>`+
    list.map(s=>`<label class="recip-row${s.status==='offduty'?' off':''}">
      <input type="checkbox" data-rid="${s.id}" ${state.selected.has(s.id)?'checked':''}>
      <span class="nm">${esc(s.name)}</span>
      <span class="zn">${s.status==='offduty'?'off duty':floorLabel(s.floor)}</span></label>`).join('')).join('');
  $$('#recipList input').forEach(cb=>cb.onchange=()=>{
    cb.checked?state.selected.add(cb.dataset.rid):state.selected.delete(cb.dataset.rid);
    updateSelCount();
  });
}
function updateSelCount(){$('#selCount').textContent=state.selected.size;}
function sendBroadcast(msg,ids,code,opts={}){
  if (!ids.length){toast('Select at least one recipient','err');return null;}
  if (!msg.trim()){toast('Message is empty','err');return null;}
  const b={id:++bcSeq,code,msg:msg.trim(),at:now(),recipients:ids.map(id=>({id,status:'sent'}))};
  state.broadcasts.unshift(b);if(state.broadcasts.length>8)state.broadcasts.pop();
  b.recipients.forEach(r=>scheduleDelivery(b,r,opts));
  renderBroadcasts();
  addFeed('📣',`Page <b>#${b.id}</b> out to <b>${b.recipients.length}</b> staff: “${esc(b.msg.slice(0,60))}${b.msg.length>60?'…':''}”`,code!=='custom'?'crit':'','page');
  toast(`Page out to ${b.recipients.length} pager(s)`,'ok');
  return b;
}
function scheduleDelivery(b,r,opts={}){
  const s=byId(r.id);
  setTimeout(()=>{if(r.status==='sent'){r.status='delivered';renderBroadcasts();}},rand(400,1600));
  const base=s.status==='onduty'?0.9:s.status==='break'?0.65:0.25;
  const p=opts.repage?Math.min(base+0.25,0.98):base;
  if (Math.random()<p){
    const t=rand(2000,9000);
    setTimeout(()=>{
      r.status='acked';r.ackMs=t;state.ackTimes.push(t);
      const d=dots[s.id];if(d){d.style.boxShadow='0 0 0 4px rgba(22,163,74,.35)';setTimeout(()=>d.style.boxShadow='',2200);}
      addFeed('✅',`<b>${esc(s.name)}</b> acknowledged page #${b.id} <span style="color:var(--faint)">(${(t/1000).toFixed(1)}s)</span>`,'','page');
      renderBroadcasts();updateKPIs();
    },t);
  }
  setTimeout(()=>{if(r.status!=='acked'){r.status='noack';renderBroadcasts();}},12000);
}
function repage(bid){
  const b=state.broadcasts.find(x=>x.id===bid);if(!b)return;
  const missed=b.recipients.filter(r=>r.status==='noack');
  missed.forEach(r=>{r.status='sent';scheduleDelivery(b,r,{repage:true});});
  addFeed('🔁',`Re-paged <b>${missed.length}</b> unacknowledged staff on page #${bid}`,'','page');
  renderBroadcasts();
}
function renderBroadcasts(){
  $('#bcLog').innerHTML=state.broadcasts.length?state.broadcasts.map(b=>{
    const acked=b.recipients.filter(r=>r.status==='acked').length;
    const noack=b.recipients.filter(r=>r.status==='noack').length;
    const pct=Math.round(acked/b.recipients.length*100);
    return `<div class="bc-card">
      <div class="bc-head"><span class="bc-code ${b.code}">${b.code==='custom'?'PAGE':'CODE '+b.code}</span><span class="bc-time">#${b.id} · ${b.at}</span></div>
      <div class="bc-msg">${esc(b.msg)}</div>
      <div class="bc-prog"><div class="bc-bar"><i style="width:${pct}%"></i></div><span>${acked}/${b.recipients.length} acked</span></div>
      <div class="bc-recips">${b.recipients.map(r=>{const s=byId(r.id);
        const lbl={sent:'sending…',delivered:'delivered',acked:'ACK '+(r.ackMs/1000).toFixed(1)+'s',noack:'NO ACK'}[r.status];
        return `<span class="rpill ${r.status}" title="${esc(s.name)}"><i></i>${esc(s.name.split(' ').pop())} · ${lbl}</span>`;}).join('')}</div>
      ${noack?`<div class="bc-foot"><button class="btn sm ghost-danger" onclick="repage(${b.id})">🔁 Re-page ${noack} unacknowledged</button></div>`:''}
    </div>`;}).join('')
  :'<div style="color:var(--faint);font-size:12px">Nothing paged yet. Pick a code or write your own, tick who gets it, hit send — then watch the ACKs land here one by one.</div>';
}

/* ════════ ALERTS ════════ */
function raiseAlert(icon,type,html,staff){
  state.alerts.unshift({id:++alSeq,icon,type,html,at:now(),resolved:false,staffId:staff?.id});
  if (state.alerts.length>30) state.alerts.pop();
  addFeed(icon,html,'crit','alert');
  renderAlerts();updateKPIs();
  if (state.view!=='alerts'){const p=$('#alertPip');p.textContent=activeAlerts();p.classList.add('show');}
}
const activeAlerts=()=>state.alerts.filter(a=>!a.resolved).length;
function resolveAlert(id){
  const a=state.alerts.find(x=>x.id===id);if(!a||a.resolved)return;
  a.resolved=true;
  if (a.type==='sos'&&a.staffId) byId(a.staffId).sosActive=false;
  addFeed('✔',`Alert #${id} marked resolved by ${state.user?esc(state.user.name):'control room'}`);
  renderAlerts();updateKPIs();
}
function renderAlerts(){
  const list=state.alerts;
  $('#alertCountSub').textContent=activeAlerts()+' active · '+list.filter(a=>a.resolved).length+' resolved';
  $('#alertList').innerHTML=list.length?list.map(a=>`
    <div class="alert-item${a.resolved?' resolved':' crit'}">
      <div class="ico">${a.icon}</div>
      <div style="flex:1"><div class="at">${a.html}</div><div class="ft">#${a.id} · ${a.at}</div>
        <div class="fa">
          ${a.staffId&&!a.resolved?`<button class="btn sm" onclick="locateStaff('${a.staffId}')">◎ Locate</button>`:''}
          ${a.type==='sos'&&!a.resolved?`<button class="btn sm danger" onclick="dispatchTo('${a.staffId}')">🚑 Dispatch nearest</button>`:''}
          ${!a.resolved?`<button class="btn sm" onclick="resolveAlert(${a.id})">✔ Resolve</button>`:'<span class="badge green">Resolved</span>'}
        </div></div>
    </div>`).join('')
  :'<div style="color:var(--faint);font-size:12px">No alerts. SOS presses, geofence breaches and low batteries will appear here the moment they happen.</div>';
}
function nearestResponders(t,n,roles){
  return STAFF.filter(s=>s.status==='onduty'&&roles.includes(s.role)&&s.id!==(t.staffId||''))
    .map(s=>({s,d:(s.floor===t.floor?0:1000)+Math.hypot(s.x-t.x,s.y-t.y)}))
    .sort((a,b)=>a.d-b.d).slice(0,n).map(o=>o.s);
}
function triggerSOS(s){
  if (s.sosActive) return;
  s.sosActive=true;
  const z=zoneAt(s.floor,s.x,s.y);
  flashZone((z||liftOf(s.floor)).id);
  if (s.floor===state.floor) sweepAt(s.x,s.y);
  raiseAlert('🆘','sos',`<b>SOS</b> raised by <b>${esc(s.name)}</b> — ${z?z.name:'Corridor'}, ${floorLabel(s.floor)}`,s);
  navTo('alerts');
}
function dispatchTo(id){
  const s=byId(id);
  const team=nearestResponders({floor:s.floor,x:s.x,y:s.y,staffId:id},3,['doctor','nurse','security']);
  const z=zoneAt(s.floor,s.x,s.y);
  sendBroadcast(`SOS RESPONSE — Assist ${s.name} at ${z?z.name:'corridor'}, ${floorLabel(s.floor)}. Acknowledge and proceed now.`,team.map(t=>t.id),'red');
}

/* ════════ LOGBOOK (continuous, filterable) ════════ */
const FEEDLOG=[];
const LOGCATS=[['all','Everything'],['move','Movement'],['alert','Alerts & SOS'],['page','Pages'],['system','System']];
const logState={cat:'all',q:''};
function addFeed(icon,html,cls='',cat='system'){
  FEEDLOG.unshift({icon,html,cls,cat,at:now()});
  if (FEEDLOG.length>400) FEEDLOG.pop();
  if (state.view==='logbook') renderFeed();
  else if (state.started){const p=$('#logPip');p.textContent='•';p.classList.add('show');}
}
function buildLogFilters(){
  $('#logFilters').innerHTML=LOGCATS.map(([k,l])=>`<button class="fchip${k===logState.cat?' on':''}" data-lc="${k}">${l}</button>`).join('');
  $$('#logFilters .fchip').forEach(c=>c.onclick=()=>{logState.cat=c.dataset.lc;buildLogFilters();renderFeed();});
}
function renderFeed(){
  const q=logState.q.toLowerCase();
  const list=FEEDLOG.filter(e=>(logState.cat==='all'||e.cat===logState.cat)&&(!q||e.html.toLowerCase().includes(q))).slice(0,150);
  $('#feed').innerHTML=list.length?list.map(e=>`<div class="fitem ${e.cls}"><div class="ico">${e.icon}</div><div style="flex:1">${e.html}<div class="ft">${e.at} · ${e.cat}</div></div></div>`).join('')
  :'<div style="color:var(--faint);font-size:12px;padding:8px 0">Nothing here yet for this filter — it fills up as people move.</div>';
}
/* per-employee location history with time spent */
function openHistory(id){
  const s=byId(id);
  const z=s.status!=='offduty'?zoneAt(s.floor,s.x,s.y):null;
  const cur=s.status!=='offduty'
    ?`<div style="padding:12px 18px;background:var(--soft);font-size:12px">Right now: <b>${z?z.name:'Corridor'}, ${floorLabel(s.floor)}</b> — since ${new Date(s.curSince).toLocaleTimeString('en-IN',{hour12:false})} <span style="color:var(--dim)">(${fmtDur(Date.now()-s.curSince)} and counting)</span></div>`
    :'<div style="padding:12px 18px;background:var(--soft);font-size:12px;color:var(--dim)">Currently off site.</div>';
  $('#histTitle').textContent=s.name+' — location history';
  $('#histBody').innerHTML=cur+(s.visits.length
    ?`<table class="tbl"><tr><th>In</th><th>Out</th><th>Location</th><th>Time spent</th></tr>`+s.visits.map(v=>
      `<tr><td class="mono">${new Date(v.inT).toLocaleTimeString('en-IN',{hour12:false})}</td>
      <td class="mono">${new Date(v.outT).toLocaleTimeString('en-IN',{hour12:false})}</td>
      <td style="font-weight:600">${esc(v.zone)}<span style="color:var(--faint);font-weight:400"> · ${floorLabel(v.floor)}</span></td>
      <td class="mono" style="color:var(--blue);font-weight:600">${fmtDur(v.dur)}</td></tr>`).join('')+'</table>'
    :'<div style="padding:16px 18px;color:var(--faint);font-size:12px">No completed stays yet — the trail builds as they move between rooms. Stays under 8 seconds are dropped as sensor noise.</div>');
  $('#histModal').classList.add('on');
}

/* ════════ PERMISSIONS ════════ */
function renderPermissions(){
  const rz=ZONES.filter(z=>z.restricted);
  $('#zonePerms').innerHTML=rz.map(z=>`
    <div class="pz-row">
      <div class="pz-name">${z.name} 🔒<span>${floorLabel(z.floor)}</span></div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">${Object.entries(ROLES).map(([k,v])=>
        `<button class="ptoggle${z.allowed.includes(k)?' on':''}" onclick="togglePerm('${z.id}','${k}')">${v.label}s</button>`).join('')}</div>
    </div>`).join('');
  $('#userList').innerHTML=USERS.map(u=>`
    <div class="user-row">
      <div class="av" style="width:34px;height:34px;border-radius:50%;background:var(--soft);color:var(--blue);display:grid;place-items:center;font-weight:800;font-size:12px">${u.name.split(' ').map(w=>w[0]).join('')}</div>
      <div style="flex:1"><div style="font-weight:700;font-size:13px">${u.name} ${state.user&&state.user.u===u.u?'<span class="badge blue">you</span>':''}</div>
      <div style="font-size:11px;color:var(--dim)">${u.desc}</div></div>
      <span class="badge ${u.role==='Admin'?'red':'amber'}">${u.role}</span>
    </div>`).join('');
}
function togglePerm(zid,role){
  const z=zoneById(zid);
  const i=z.allowed.indexOf(role);
  if (i>=0){z.allowed.splice(i,1);addFeed('🔐',`<b>${ROLES[role].label}s</b> access to <b>${z.name}</b> revoked by ${esc(state.user.name)}`);}
  else{z.allowed.push(role);addFeed('🔐',`<b>${ROLES[role].label}s</b> granted access to <b>${z.name}</b> by ${esc(state.user.name)}`);}
  renderPermissions();
  toast(`${z.name}: ${ROLES[role].label}s ${i>=0?'blocked':'allowed'}`,'ok');
}

/* ════════ REPORTS ════════ */
function statBox(l,v){return `<div class="statbox"><b>${v}</b><span>${l}</span></div>`;}
function renderReports(){
  const entries=Object.entries(zoneAgg).sort((a,b)=>b[1]-a[1]).slice(0,9);
  const max=entries.length?entries[0][1]:1;
  $('#repZones').innerHTML=entries.length?entries.map(([k,v])=>`
    <div style="display:flex;align-items:center;gap:10px;padding:7px 0">
      <div style="width:165px;font-size:12px;font-weight:600">${esc(k)}</div>
      <div class="timebar" style="flex:1;width:auto"><i style="width:${(v/max*100).toFixed(0)}%"></i></div>
      <div class="mono" style="width:68px;text-align:right;font-size:11.5px">${fmtDur(v)}</div></div>`).join('')
  :'<div style="color:var(--faint);font-size:12px">Accumulating live from badge movement — give it a couple of minutes after sign-in and the busiest rooms surface here.</div>';
  const sent=state.broadcasts.reduce((a,b)=>a+b.recipients.length,0);
  const acked=state.broadcasts.reduce((a,b)=>a+b.recipients.filter(r=>r.status==='acked').length,0);
  $('#repStats').innerHTML=`<div class="row3">
    ${statBox('Pages sent',sent)}${statBox('ACK rate',sent?Math.round(acked/sent*100)+'%':'—')}${statBox('Avg ACK',$('#kAck').textContent)}
    ${statBox('On duty',STAFF.filter(s=>s.status==='onduty').length)}${statBox('On break',STAFF.filter(s=>s.status==='break').length)}${statBox('Alerts today',state.alerts.length)}
  </div>`;
  $('#assetTable').innerHTML=`<tr><th>Asset</th><th>Location</th><th>Status</th><th>Last moved</th></tr>`+
    ASSETS.map(a=>`<tr><td style="font-weight:600;white-space:nowrap">${a.icon} ${a.name}</td>
      <td class="mono" style="font-size:11.5px">${zoneById(a.zone).name}, ${floorLabel(a.floor)}</td>
      <td><span class="badge ${a.status==='available'?'green':a.status==='in use'?'blue':'amber'}">${a.status}</span></td>
      <td class="mono" style="font-size:11px">${a.moved}</td></tr>`).join('');
}

/* ════════ NAV / KPI / CLOCK / AUTH ════════ */
const TITLES={map:['Live Map','every badge, every floor, right now'],
  employees:['Employees','full roster with live positions'],
  time:['Time on Site','today\u2019s on-site vs off-site hours'],
  reports:['Reports','zone utilisation, response times, assets'],
  alerts:['SOS & Alerts','page staff and handle what comes back'],
  logbook:['Logbook','a running record of everything'],
  permissions:['Permissions','zone access and panel users']};
function navTo(v){
  state.view=v;
  $$('.nav-item').forEach(n=>n.classList.toggle('on',n.dataset.view===v));
  $$('.view').forEach(p=>p.classList.toggle('on',p.dataset.pane===v));
  $('#pageTitle').textContent=TITLES[v][0];$('#pageSub').textContent=TITLES[v][1];
  if (v==='alerts'){$('#alertPip').classList.remove('show');renderAlerts();renderRecipients();renderBroadcasts();}
  if (v==='logbook'){$('#logPip').classList.remove('show');renderFeed();}
  if (v==='reports') renderReports();
  if (v==='employees') renderEmployees();
  if (v==='time') renderTime();
  if (v==='permissions') renderPermissions();
  $('#sidebar').classList.remove('open');$('#scrim').classList.remove('on');
  if (v==='map') setTimeout(updateDots,50);
}
function updateKPIs(){
  $('#kOnDuty').textContent=STAFF.filter(s=>s.status==='onduty').length;
  $('#kDocs').textContent=STAFF.filter(s=>s.role==='doctor'&&s.status==='onduty').length;
  $('#kAlerts').textContent=activeAlerts();
  $('#kAck').textContent=state.ackTimes.length?(state.ackTimes.reduce((a,b)=>a+b,0)/state.ackTimes.length/1000).toFixed(1)+'s':'—';
}
function tickClock(){
  const d=new Date();
  $('#clockTime').textContent=d.toLocaleTimeString('en-IN',{hour12:false});
  $('#clockDate').textContent=d.toLocaleDateString('en-IN',{day:'2-digit',month:'short'});
}
function tryLogin(){
  const u=$('#loginUser').value.trim(),p=$('#loginPass').value;
  const acc=USERS.find(x=>x.u===u&&x.p===p);
  if (!acc){
    $('#loginErr').textContent='Wrong username or password. Try a demo account below.';
    const c=$('#loginCard');c.classList.remove('shake');void c.offsetWidth;c.classList.add('shake');
    return;
  }
  state.user=acc;
  $('#userName').textContent=acc.name;$('#userRole').textContent=acc.role;
  $('#userAv').textContent=acc.name.split(' ').map(w=>w[0]).join('');
  $('#navPerm').style.display=acc.role==='Admin'?'flex':'none';
  $('#loginView').style.display='none';$('#appView').classList.add('on');
  startApp();
  addFeed('🔓',`<b>${esc(acc.name)}</b> (${acc.role}) signed in to the control room`);
  toast(`Welcome back, ${acc.name.split(' ')[0]}`,'ok');
}
function startApp(){
  if (state.started){updateDots();return;}
  state.started=true;
  buildFloorTabs();buildLegend();buildZones();buildDots();buildAssets();buildFilters();buildLogFilters();
  renderEmployees();renderRecipients();renderBroadcasts();renderAlerts();renderTime();bindComposer();
  updateKPIs();tickClock();setInterval(tickClock,1000);setInterval(tick,60);
  addFeed('🟢','Control room is up. <b>'+STAFF.filter(s=>s.status!=='offduty').length+'</b> badges reporting in across 3 floors. All quiet so far.');
  /* ambient status changes */
  setInterval(()=>{
    if (Math.random()<0.30){
      const pool=STAFF.filter(s=>s.status!=='offduty');
      const s=pool[rint(0,pool.length-1)];
      if (s.status==='onduty'){s.status='break';addFeed('☕',`<b>${esc(s.name)}</b> started a break`);}
      else{s.status='onduty';addFeed('🟢',`<b>${esc(s.name)}</b> is back on duty`);}
      updateKPIs();if(state.view==='employees')renderEmployees();
    }
  },25000);
  /* porters move tagged assets around */
  setInterval(()=>{
    if (Math.random()<0.55){
      const a=ASSETS[rint(0,ASSETS.length-1)];
      const opts=zonesOf(a.floor).filter(z=>!z.cls&&z.id!==a.zone);
      const z=opts[rint(0,opts.length-1)];
      const from=zoneById(a.zone).name;
      a.zone=z.id;const p=ptInZone(z);a.x=p.x;a.y=p.y;a.moved=now();
      addFeed(a.icon,`Asset <b>${a.name}</b> moved ${from} → ${z.name} (${floorLabel(a.floor)})`,'','move');
      if (state.view==='reports') renderReports();
      updateAssets();
    }
  },40000);
}
/* bindings */
$('#btnLogin').onclick=tryLogin;
$('#loginPass').addEventListener('keydown',e=>{if(e.key==='Enter')tryLogin();});
$('#loginUser').addEventListener('keydown',e=>{if(e.key==='Enter')tryLogin();});
$$('.cred').forEach(c=>c.onclick=()=>{$('#loginUser').value=c.dataset.u;$('#loginPass').value=c.dataset.p;$('#loginErr').textContent='';});
$('#btnLogout').onclick=()=>{
  addFeed('🔒',`<b>${esc(state.user.name)}</b> signed out`);
  state.user=null;$('#appView').classList.remove('on');$('#loginView').style.display='grid';
  $('#loginPass').value='';$('#loginErr').textContent='';
};
$$('.nav-item').forEach(n=>n.onclick=()=>navTo(n.dataset.view));
$('#burger').onclick=()=>{$('#sidebar').classList.add('open');$('#scrim').classList.add('on');};
$('#scrim').onclick=()=>{$('#sidebar').classList.remove('open');$('#scrim').classList.remove('on');};
$('#empSearch').oninput=e=>{state.search=e.target.value;renderEmployees();};
$('#logSearch').oninput=e=>{logState.q=e.target.value;renderFeed();};
$('#btnAssets').onclick=()=>{state.showAssets=!state.showAssets;
  $('#btnAssets').textContent='🦽 Assets: '+(state.showAssets?'on':'off');updateAssets();};
$('#shiftNote').onclick=e=>e.currentTarget.remove();
$('#histClose').onclick=()=>$('#histModal').classList.remove('on');
$('#histModal').addEventListener('click',e=>{if(e.target.id==='histModal')e.target.classList.remove('on');});
$('#map').addEventListener('click',closePopup);
$('#btnSos').onclick=()=>{const pool=STAFF.filter(s=>s.status!=='offduty'&&!s.sosActive);triggerSOS(pool[rint(0,pool.length-1)]);};
window.MT={STAFF,FEEDLOG:null,zoneAgg,state,ASSETS,getFeed:()=>FEEDLOG};
$('#btnDrill').onclick=()=>{
  const icu=zoneById('f1-icu');
  const spot={floor:'1',x:icu.x+icu.w/2,y:icu.y+icu.h/2};
  setFloor('1');flashZone('f1-icu');sweepAt(spot.x,spot.y);
  const team=nearestResponders(spot,4,['doctor','nurse']);
  raiseAlert('🚨','drill',`<b>CODE BLUE drill</b> at <b>ICU, Floor 1</b>. Nearest team auto-paged: ${team.map(t=>'<b>'+esc(t.name.split(' ').slice(0,2).join(' '))+'</b>').join(', ')}`);
  sendBroadcast('CODE BLUE — ICU Floor 1, Bed 4. Cardiac arrest. Nearest team respond immediately.',team.map(t=>t.id),'blue');
};
