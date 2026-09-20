
const APP_MODE = "agente";
const APP_TITLE = "Smart Pro Agente";
const KEY = "smartpro_" + APP_MODE + "_v4";

const SECTIONS = {
  dashboard:"Início",
  clients:"Clientes",
  finance:"Financiamento",
  savings:"Poupança",
  agenda:"Agenda",
  stats:"Estatísticas",
  recruits:"Recrutas",
  settings:"Definições"
};

const PRODUCTS = {
  "Iogurte sólido": {home:1.01, yield:8, unit:"un", label:"8 unidades", status:"validado", periods:["dia","semana","mês"]},
  "Iogurte de soja": {home:1.95, yield:8, unit:"un", label:"8 unidades", status:"validado", periods:["dia","semana","mês"]},
  "Leite com chocolate": {home:1.31, yield:6, unit:"un", label:"6 unidades", status:"validado", periods:["dia","semana","mês"]},
  "Granola": {home:3.39, yield:500, unit:"g", label:"500 g", status:"validado", periods:["semana","mês"]},
  "Manteiga de amendoim": {home:1.19, yield:200, unit:"g", label:"200 g", status:"validado", periods:["semana","mês","2 meses","3 meses"]},
  "Pão com chocolate": {home:2.48, yield:6, unit:"un", label:"6 unidades", status:"validado", periods:["semana","mês","2 meses","3 meses"]},
  "Queijo fresco": {home:2.64, yield:6, unit:"un", label:"6 unidades", status:"validado", periods:["dia","semana","mês"]},
  "Néctar de fruta": {home:1.02, yield:200, unit:"ml", label:"200 ml", status:"validado", periods:["dia","semana","mês"]},
  "Bebida de soja": {home:0.67, yield:1200, unit:"ml", label:"1200 ml", status:"validado", periods:["dia","semana","mês"]},
  "Pão tradicional": {home:0.68, yield:1000, unit:"g", label:"1 kg", status:"validado", periods:["dia","semana","mês"]},
  "Pizza": {home:4.70, yield:1, unit:"un", label:"1 familiar", status:"validado", periods:["semana","mês"]},
  "Nuggets": {home:3.44, yield:20, unit:"un", label:"20 unidades", status:"validado", periods:["semana","mês"]},
  "Salgados": {home:0.17, yield:1, unit:"un", label:"1 unidade", status:"validado", periods:["semana","mês"]},
  "Sopa": {home:0.30, yield:250, unit:"ml", label:"250 ml", status:"validado", periods:["semana","mês"]},
  "Puré de fruta": {home:0.16, yield:1, unit:"un", label:"1 porção", status:"validado", periods:["dia","semana","mês"]},
  "Puré de maçã": {home:0.53, yield:400, unit:"g", label:"400 g", status:"validado", periods:["dia","semana","mês"]},
  "Puré de batata": {home:1.60, yield:1000, unit:"g", label:"1 kg", status:"validado", periods:["semana","mês"]},
  "Bechamel": {home:0.78, yield:500, unit:"g", label:"500 g", status:"validado", periods:["semana","mês","2 meses","3 meses"]},
  "Maionese": {home:0.62, yield:300, unit:"g", label:"300 g", status:"validado", periods:["semana","mês","2 meses","3 meses"]},
  "Massa quebrada": {home:0.97, yield:230, unit:"g", label:"230 g", status:"validado", periods:["semana","mês","2 meses","3 meses"]},
  "Massa folhada": {home:0.97, yield:230, unit:"g", label:"230 g", status:"referência a validar", periods:["semana","mês","2 meses","3 meses"]},
  "Farinha de arroz": {home:0.23, yield:500, unit:"g", label:"500 g", status:"validado", periods:["semana","mês","2 meses","3 meses"]},
  "Gelado": {home:2.07, yield:1000, unit:"g", label:"1000 g", status:"validado", periods:["semana","mês","2 meses","3 meses"]},
  "Iogurte líquido": {home:null, yield:null, unit:"ml", label:"a validar", status:"a validar", periods:["dia","semana","mês"]},
  "Requeijão": {home:null, yield:null, unit:"g", label:"a validar", status:"a validar", periods:["semana","mês"]},
  "Pão de massa mãe": {home:null, yield:null, unit:"g", label:"a validar", status:"a validar", periods:["semana","mês"]},
  "Pão de Mafra": {home:null, yield:null, unit:"g", label:"a validar", status:"a validar", periods:["semana","mês"]},
  "Pão alentejano": {home:null, yield:null, unit:"g", label:"a validar", status:"a validar", periods:["semana","mês"]}
};

function defaultPrices(){
  return {
    updatedAt:"2026-09-20",
    reviewAfter:"2026-12-20",
    references:{
      "Iogurte sólido":[
        {store:"Continente",brand:"Danone Natural",price:2.09,pack:8,unit:"un",format:"8 un / 960 g",note:"Preço observado online em 20/09/2026."},
        {store:"Auchan",brand:"Auchan Natural Cremoso",price:1.09,pack:500,unit:"g",format:"500 g",note:"Preço observado online em 20/09/2026."}
      ],
      "Bebida de soja":[
        {store:"Continente",brand:"Continente",price:0.79,pack:1000,unit:"ml",format:"1 L",note:"Preço observado online."},
        {store:"Continente",brand:"Continente Bio",price:0.94,pack:1000,unit:"ml",format:"1 L",note:"Preço observado online."},
        {store:"Continente",brand:"Vive Soy",price:1.69,pack:1000,unit:"ml",format:"1 L",note:"Preço observado online."},
        {store:"Continente",brand:"Shoyce",price:1.59,pack:1000,unit:"ml",format:"1 L",note:"Preço observado online."}
      ],
      "Queijo fresco":[
        {store:"Continente",brand:"Continente Equilíbrio",price:0.59,pack:80,unit:"g",format:"80 g",note:"Preço observado online."},
        {store:"Continente",brand:"Matinal",price:2.69,pack:216,unit:"g",format:"3 × 72 g",note:"Preço observado online."}
      ],
      "Iogurte de soja":[
        {store:"Auchan",brand:"Auchan",price:1.39,pack:400,unit:"g",format:"4 × 100 g",note:"Preço observado online em 20/09/2026."},
        {store:"Auchan",brand:"Sojasun",price:2.17,pack:400,unit:"g",format:"400 g",note:"Preço observado online em 20/09/2026."},
        {store:"Auchan",brand:"Alpro",price:2.49,pack:400,unit:"g",format:"400 g",note:"Preço observado online em 20/09/2026."}
      ],
      "Manteiga de amendoim":[
        {store:"Continente",brand:"Continente Equilíbrio",price:2.49,pack:500,unit:"g",format:"500 g",note:"Preço observado online em 20/09/2026."}
      ],
      "Maionese":[
        {store:"Continente",brand:"Hellmann's",price:4.84,pack:416,unit:"g",format:"416 g",note:"Preço normal observado online em 20/09/2026; referência promocional não usada."}
      ],
      "Massa folhada":[
        {store:"Auchan",brand:"Auchan",price:1.20,pack:230,unit:"g",format:"230 g",note:"Preço observado online em 20/09/2026."},
        {store:"Auchan",brand:"Polegar",price:0.95,pack:230,unit:"g",format:"230 g",note:"Preço observado online em 20/09/2026."}
      ],
      "Massa quebrada":[
        {store:"Auchan",brand:"Auchan",price:1.19,pack:230,unit:"g",format:"230 g",note:"Preço observado online em 20/09/2026."}
      ]
    }
  };
}

let db = loadDB();

function loadDB(){
  try{
    const raw = localStorage.getItem(KEY);
    if(raw){
      const data=JSON.parse(raw);
      if(!data.prices || !data.prices.references) data.prices=defaultPrices();
      return data;
    }
  }catch(e){}
  return {clients:[], savings:[], recruits:[], prices:defaultPrices()};
}
function persist(){ localStorage.setItem(KEY, JSON.stringify(db)); renderAll(); }
function euro(n){ return (Number(n)||0).toLocaleString("pt-PT",{style:"currency",currency:"EUR"}); }
function num(v){ return Number(String(v||"").replace(",", ".")) || 0; }
function $(id){ return document.getElementById(id); }
function escapeHTML(s){ return String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }

function initNav(){
  $("nav").innerHTML = Object.entries(SECTIONS).map(([id,label]) => `<button type="button" onclick="show('${id}')">${label}</button>`).join("");
}
function show(id){
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  $(id).classList.add("active");
  renderAll();
  window.scrollTo({top:0, behavior:"smooth"});
}

/* CLIENTES */
const CLIENT_FIELDS = ["nome","tel","email","morada","nif","nasc","zona","terra","modelo","demoData","demoTipo","loja","vp","compra","valorVenda","campanha","vpv","aula","vm","estado","contactos","acordos","obs"];
function clientFromForm(){
  const c = {id: $("c_edit_id").value || String(Date.now())};
  CLIENT_FIELDS.forEach(f => c[f] = $("c_"+f).value.trim ? $("c_"+f).value.trim() : $("c_"+f).value);
  return c;
}
function saveClient(){
  const c = clientFromForm();
  if(!c.nome){ alert("Escreva o nome da cliente."); return; }
  db.clients = db.clients.filter(x => String(x.id) !== String(c.id));
  db.clients.push(c);
  persist();
  clearClient();
  alert("Cliente guardada.");
}
function clearClient(){
  $("c_edit_id").value="";
  document.querySelectorAll("#clients input,#clients textarea").forEach(e=>e.value="");
  $("c_zona").value="";
  $("c_modelo").value="Nunca teve";
  $("c_demoTipo").value="";
  $("c_loja").value="Não";
  $("c_estado").value="Pendente";
}
function removeClient(id){
  if(confirm("Apagar esta cliente?")){
    db.clients = db.clients.filter(c=>String(c.id)!==String(id));
    persist();
  }
}
function editClient(id){
  const c = db.clients.find(x=>String(x.id)===String(id));
  if(!c) return;
  $("c_edit_id").value = c.id;
  CLIENT_FIELDS.forEach(f => { if($("c_"+f)) $("c_"+f).value = c[f] || ""; });
  show("clients");
}
function quick(type){
  $("q").value="";
  $("qmodelo").value="";
  $("qmes").value="";
  $("qzona").value="";
  $("q").dataset.quick=type;
  renderClients();
}
function renderClients(){
  if(!$("clientTable")) return;
  let arr = [...db.clients];
  const text = ($("q").value||"").toLowerCase();
  const quick = $("q").dataset.quick || "";
  if(text) arr = arr.filter(c => JSON.stringify(c).toLowerCase().includes(text));
  if($("qmodelo").value) arr = arr.filter(c => c.modelo === $("qmodelo").value);
  if($("qzona").value) arr = arr.filter(c => c.zona === $("qzona").value);
  if($("qmes").value) arr = arr.filter(c => (c.nasc||"").slice(5,7) === $("qmes").value);
  if(quick==="pendentes") arr = arr.filter(c => c.demoData && !c.compra && c.estado !== "Comprou");
  if(quick==="acordos") arr = arr.filter(c => c.acordos);
  if(quick==="loja") arr = arr.filter(c => c.loja==="Sim" || c.demoTipo==="Loja");
  if(quick==="aulas") arr = arr.filter(c => c.aula);
  if(quick==="vpv") arr = arr.filter(c => c.vpv);
  if(quick==="vm") arr = arr.filter(c => c.vm);

  const sort = $("qsort").value;
  arr.sort((a,b)=>{
    if(sort==="za") return (b.nome||"").localeCompare(a.nome||"");
    if(sort==="demo") return (a.demoData||"9999").localeCompare(b.demoData||"9999");
    if(sort==="nasc") return (a.nasc||"9999").slice(5).localeCompare((b.nasc||"9999").slice(5));
    return (a.nome||"").localeCompare(b.nome||"");
  });

  $("clientTable").innerHTML = `<table>
    <tr><th>Nome</th><th>Contacto</th><th>Zona/Terra</th><th>Bimby</th><th>Demo</th><th>Venda</th><th>Ações</th></tr>
    ${arr.map(c=>`<tr>
      <td><b>${escapeHTML(c.nome||"")}</b><br><span class="small">🎂 ${escapeHTML(c.nasc||"")}</span></td>
      <td>${escapeHTML(c.tel||"")}<br><span class="small">${escapeHTML(c.email||"")}<br>NIF: ${escapeHTML(c.nif||"")}</span></td>
      <td>${escapeHTML(c.zona||"")}<br><span class="small">${escapeHTML(c.terra||"")}</span></td>
      <td>${escapeHTML(c.modelo||"")}</td>
      <td>${escapeHTML(c.demoData||"")}<br><span class="small">${escapeHTML(c.demoTipo||"")} · Loja: ${escapeHTML(c.loja||"")}</span></td>
      <td>${escapeHTML(c.compra||"—")}<br><span class="small">VP: ${escapeHTML(c.vp||"")} · ${euro(num(c.valorVenda))}</span></td>
      <td><button class="secondary" onclick="editClient('${c.id}')">Editar</button> <button class="danger" onclick="removeClient('${c.id}')">Apagar</button></td>
    </tr>`).join("")}
  </table>`;
}

/* FINANCEIRO */
function initFinance(){
  $("finCards").innerHTML = [1,2,3,4].map(i => `<div class="opt">
    <h3>Opção ${i}</h3>
    <label>Título</label><input id="f_t${i}" placeholder="Ex.: TM7 + Bundle">
    <label>Valor a pronto (€)</label><input id="f_pp${i}" inputmode="decimal" placeholder="Ex.: 1549">
    <label>Meses</label><input id="f_m${i}" inputmode="numeric" placeholder="Ex.: 50">
    <label>Mensalidade (€)</label><input id="f_v${i}" inputmode="decimal" placeholder="Ex.: 39,50">
    <div id="f_r${i}" class="small" style="margin-top:12px"></div>
  </div>`).join("");
}
function calcFinance(){
  let out = "";
  for(let i=1;i<=4;i++){
    const title = $("f_t"+i).value || "Opção " + i;
    const pp = num($("f_pp"+i).value);
    const months = num($("f_m"+i).value);
    const mensal = num($("f_v"+i).value);
    const total = months * mensal;
    const saving = total - pp;
    $("f_r"+i).innerHTML = `💳 Total financiado: <b>${euro(total)}</b><br>📅 ${months} × ${euro(mensal)}<br>💶 Pagamento a pronto: <b>${euro(pp)}</b><br>🎁 Poupa a pronto: <b>${euro(saving)}</b>`;
    if(total || pp) out += `${title}\nTotal financiado: ${euro(total)}\nFinanciamento: ${months} x ${euro(mensal)}\nPagamento a pronto: ${euro(pp)}\nPoupa a pronto: ${euro(saving)}\n\n`;
  }
  $("finSummary").textContent = out || "Preencha uma opção para gerar o resumo.";
}
function copyFinance(){ navigator.clipboard.writeText($("finSummary").textContent || ""); alert("Resumo copiado."); }

/* POUPANÇA — TACHINHO */
function initSavings(){
  $("p_prod").innerHTML = Object.keys(PRODUCTS).map(p=>`<option>${p}</option>`).join("");
  loadFormats();
}
function loadFormats(){
  const name=$("p_prod").value, p = PRODUCTS[name];
  $("p_period").innerHTML = p.periods.map(x=>`<option value="${x}">${periodLabel(x)}</option>`).join("");
  $("p_unit").value = p.unit;
  $("p_home").value = p.home==null ? "A validar" : euro(p.home)+" / "+p.label;
  const refs=db.prices?.references?.[name]||[];
  const review=db.prices?.reviewAfter||"";
  const stale=review && new Date().toISOString().slice(0,10)>=review;
  $("p_note").textContent = p.home==null ? "Este custo feito em casa ainda não está validado e não será usado no cálculo." : "Custo feito em casa: "+euro(p.home)+" por "+p.label+" · "+p.status+"."+ (refs.length?" Existem "+refs.length+" preço(s) de referência; última atualização "+(db.prices.updatedAt||"—")+(stale?" · PREÇOS A REVER":"")+".":" Introduza o preço que a pessoa paga.");
  applyReferencePrice();
}
function applyReferencePrice(){
  const name=$("p_prod").value, refs=db.prices?.references?.[name]||[];
  if(!refs.length) return;
  const store=$("p_store").value;
  const r=refs.find(x=>x.store===store)||refs[0];
  $("p_store").value=r.store;
  $("p_brand").value=r.brand||"";
  $("p_price").value=r.price;
  $("p_packqty").value=r.pack;
  $("p_unit").value=r.unit;
}
function periodLabel(p){ return p==="dia"?"1 vez por dia":p==="semana"?"1 vez por semana":p==="mês"?"1 vez por mês":p==="2 meses"?"1 vez de 2 em 2 meses":"1 vez de 3 em 3 meses"; }
function yearlyOccurrences(p){ return p==="dia"?365:p==="semana"?52:p==="mês"?12:p==="2 meses"?6:p==="3 meses"?4:0; }
function compatibleUnit(productUnit, chosen){ return productUnit===chosen; }
function addSaving(){
  const name=$("p_prod").value, p=PRODUCTS[name], price=num($("p_price").value), pack=num($("p_packqty").value), qty=num($("p_qty").value), unit=$("p_unit").value, period=$("p_period").value;
  if(p.home==null){ alert("O custo feito em casa deste produto ainda está a validar."); return; }
  if(!price||!pack||!qty){ alert("Preencha o preço, a quantidade da embalagem e a quantidade consumida."); return; }
  if(!compatibleUnit(p.unit,unit)){ alert("Para este produto use a unidade "+(p.unit==="un"?"unidades":p.unit)+"."); return; }
  const consumed=pack*qty, homeCost=(consumed/p.yield)*p.home, marketCost=price*qty, saving=Math.max(0,marketCost-homeCost), occ=yearlyOccurrences(period);
  db.savings.push({id:Date.now(),p:name,store:$("p_store").value,brand:$("p_brand").value.trim(),price,pack,unit,qty,period,homeCost,marketCost,monthly:saving*occ/12,annual:saving*occ});
  persist();
}
function removeSaving(id){ db.savings=db.savings.filter(x=>String(x.id)!==String(id)); persist(); }
function normalizedSaving(x){
  if(Number.isFinite(Number(x.monthly))&&Number.isFinite(Number(x.annual))) return x;
  const w=Number(x.saveWeek)||0;
  return {...x,monthly:w*52/12,annual:w*52};
}
function savingsTotals(){
  return db.savings.map(normalizedSaving).reduce((a,x)=>({monthly:a.monthly+(Number(x.monthly)||0),annual:a.annual+(Number(x.annual)||0)}),{monthly:0,annual:0});
}
function renderSavings(){
  if(!$("savList")) return;
  db.savings=db.savings||[];
  $("savList").innerHTML = `<table><tr><th>Produto</th><th>Compra</th><th>Hábito</th><th>Poupança/mês</th><th>Poupança/ano</th><th></th></tr>${db.savings.map(raw=>{const x=normalizedSaving(raw);return `<tr><td><b>${escapeHTML(x.p||"")}</b><br><span class="small">${escapeHTML(x.brand||"")}</span></td><td>${escapeHTML(x.store||"")} · ${euro(x.price)}</td><td>${escapeHTML(periodLabel(x.period||"semana"))}</td><td><b>${euro(x.monthly)}</b></td><td><b>${euro(x.annual)}</b></td><td><button class="danger" onclick="removeSaving('${x.id}')">Apagar</button></td></tr>`}).join("")}</table>`;
  const t=savingsTotals();
  $("savTotal").textContent=`Poupança estimada\nMês: ${euro(t.monthly)}\nAno: ${euro(t.annual)}`;
  const mensal=num($("roi_monthly")?.value), months=num($("roi_months")?.value), typedTotal=num($("roi_total")?.value), total=typedTotal||(mensal*months);
  if(!mensal&&!total){ $("roiResult").textContent="Preencha a mensalidade e o prazo para ver o impacto da poupança."; return; }
  const pct=mensal?Math.min(999,(t.monthly/mensal)*100):0, felt=Math.max(0,mensal-t.monthly), accumulated=t.monthly*months, remaining=Math.max(0,total-accumulated), breakEven=t.monthly>0&&total>0?total/t.monthly:0;
  $("roiResult").textContent=`Poupança cobre ${pct.toFixed(0)}% da mensalidade\nMensalidade sentida: ${euro(felt)}\nPoupança acumulada em ${months||0} meses: ${euro(accumulated)}\nValor ainda não compensado no fim: ${euro(remaining)}${breakEven?"\nTempo estimado para compensar o total: "+breakEven.toFixed(1)+" meses":""}`;
}
function savingsText(){
  const t=savingsTotals();
  return `Tachinho — Comprar ou fazer?\n\n${db.savings.map(raw=>{const x=normalizedSaving(raw);return `${x.p}: ${euro(x.monthly)}/mês · ${euro(x.annual)}/ano`}).join("\n")}\n\nPoupança estimada:\nMês: ${euro(t.monthly)}\nAno: ${euro(t.annual)}`;
}
function copySavings(){ navigator.clipboard.writeText(savingsText()); alert("Resumo copiado."); }
function whatsappSavings(){ window.location.href="https://wa.me/?text="+encodeURIComponent(savingsText()); }

/* AGENDA / ESTATÍSTICAS */
function agendaItems(){
  const arr = [];
  db.clients.forEach(c=>{
    [["Demo",c.demoData],["Aula Cozinha",c.aula],["VPV",c.vpv],["VM",c.vm],["Aniversário", c.nasc ? new Date().getFullYear()+"-"+c.nasc.slice(5) : ""]].forEach(([type,date])=>{
      if(date) arr.push({date,type,name:c.nome,tel:c.tel});
    });
  });
  return arr.sort((a,b)=>a.date.localeCompare(b.date));
}
function agendaFilter(filter){
  let arr = agendaItems();
  const today = new Date().toISOString().slice(0,10);
  if(filter==="today") arr = arr.filter(x=>x.date===today);
  if(filter==="week"){
    const end = new Date(); end.setDate(end.getDate()+7);
    arr = arr.filter(x=>x.date>=today && x.date<=end.toISOString().slice(0,10));
  }
  if(filter==="month") arr = arr.filter(x=>x.date.slice(0,7)===today.slice(0,7));
  $("agendaTable").innerHTML = `<table><tr><th>Data</th><th>Tipo</th><th>Cliente</th><th>Telefone</th></tr>${arr.map(x=>`<tr><td>${x.date}</td><td>${x.type}</td><td>${escapeHTML(x.name)}</td><td>${escapeHTML(x.tel||"")}</td></tr>`).join("")}</table>`;
}
function renderStats(){
  if(!$("statsBox")) return;
  const clients = db.clients;
  const demos = clients.filter(c=>c.demoData).length;
  const sales = clients.filter(c=>c.compra || c.estado==="Comprou").length;
  const conv = demos ? Math.round((sales/demos)*100) : 0;
  const total = clients.reduce((a,c)=>a+num(c.valorVenda),0);
  $("statsBox").innerHTML = `<div class="grid5">
    <div class="stat"><b>Clientes</b><br>${clients.length}</div>
    <div class="stat"><b>Demos</b><br>${demos}</div>
    <div class="stat"><b>Vendas</b><br>${sales}</div>
    <div class="stat"><b>Conversão</b><br>${conv}%</div>
    <div class="stat"><b>Total vendido</b><br>${euro(total)}</div>
  </div><br>${["TM31","TM5","TM6","TM7","Nunca teve"].map(m=>`<span class="pill">${m}: ${clients.filter(c=>c.modelo===m).length}</span> `).join("")}`;
}
function renderDashboard(){
  const todayMD = new Date().toISOString().slice(5,10);
  const birthdays = db.clients.filter(c=>(c.nasc||"").slice(5)===todayMD);
  const pending = db.clients.filter(c=>c.demoData && !c.compra && c.estado!=="Comprou");
  $("daily").textContent = `Hoje tem ${birthdays.length} aniversário(s) e ${pending.length} cliente(s) pendente(s).`;
  $("agendaNext").innerHTML = agendaItems().slice(0,6).map(x=>`<div>${x.date} · ${x.type} · ${escapeHTML(x.name)}</div>`).join("") || "Sem agenda.";
  $("followList").innerHTML = pending.slice(0,6).map(c=>`<div>${escapeHTML(c.nome)} · ${escapeHTML(c.tel||"")}</div>`).join("") || "Sem pendentes.";
}

/* RECRUTAS */
function saveRecruit(){
  if(!$("r_nome").value.trim()){ alert("Escreva o nome da recruta."); return; }
  db.recruits.push({id:Date.now(), nome:$("r_nome").value.trim(), contactos:$("r_contactos").value.trim()});
  $("r_nome").value=""; $("r_contactos").value="";
  persist();
}
function removeRecruit(id){
  db.recruits = db.recruits.filter(r=>String(r.id)!==String(id));
  persist();
}
function renderRecruits(){
  if(!$("r_list")) return;
  $("r_list").innerHTML = db.recruits.map(r=>`<div class="card"><b>${escapeHTML(r.nome)}</b><pre>${escapeHTML(r.contactos)}</pre><button class="danger" onclick="removeRecruit('${r.id}')">Apagar</button></div>`).join("") || "Sem recrutas registadas.";
}

/* BACKUP / PREÇOS */
function savePrices(){
  try{
    db.prices = JSON.parse($("priceJson").value);
    persist();
    alert("Preços guardados.");
  }catch(e){ alert("A tabela tem erro. Verifique o formato JSON."); }
}
function exportBackup(){
  download(JSON.stringify(db,null,2), "backup-"+APP_MODE+".json", "application/json");
}
function importBackup(file){
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{ db = JSON.parse(reader.result); persist(); alert("Backup importado."); }
    catch(e){ alert("Ficheiro inválido."); }
  };
  reader.readAsText(file);
}
function exportCSV(){
  const cols = ["nome","tel","email","morada","nif","nasc","zona","terra","modelo","demoData","demoTipo","loja","vp","compra","valorVenda","campanha","vpv","aula","vm","estado","contactos","acordos","obs"];
  const csv = cols.join(";") + "\n" + db.clients.map(c=>cols.map(k=>`"${String(c[k]||"").replaceAll('"','""')}"`).join(";")).join("\n");
  download(csv, "clientes-"+APP_MODE+".csv", "text/csv;charset=utf-8");
}
function download(text, name, type){
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], {type}));
  a.download = name;
  a.click();
}
function renderAll(){
  renderDashboard();
  renderClients();
  renderSavings();
  agendaFilter("all");
  renderStats();
  renderRecruits();
  if($("priceJson")) $("priceJson").value = JSON.stringify(db.prices, null, 2);
}
initNav();
initFinance();
initSavings();
renderAll();
if("serviceWorker" in navigator){ navigator.serviceWorker.register("service-worker.js").catch(()=>{}); }
