
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
  "Iogurtes": {bimby:1.01, bformat:"pack 8", formats:["125ml","150ml","200ml","400ml","500ml","1000ml","pack 4","pack 6","pack 8"], periods:["dia","semana"]},
  "Iogurtes soja": {bimby:1.95, bformat:"pack 8", formats:["125ml","pack 4","pack 8"], periods:["dia","semana"]},
  "Leite com chocolate": {bimby:1.31, bformat:"pack 6", formats:["200ml","250ml","pack 6"], periods:["dia","semana"]},
  "Granola": {bimby:3.39, bformat:"500g", formats:["150g","250g","300g","375g","400g","500g"], periods:["semana","mês"]},
  "Manteiga amendoim": {bimby:1.19, bformat:"200g", formats:["180g","200g","balde 15kg"], periods:["semana","mês"]},
  "Pão com chocolate": {bimby:2.48, bformat:"6 unidades", formats:["1 unidade","4 unidades","6 unidades","8 unidades"], periods:["dia","semana"]},
  "Queijo fresco": {bimby:2.64, bformat:"pack 6", formats:["72g","85g","200g","250g","pack 4","pack 6"], periods:["dia","semana"]},
  "Néctar de fruta": {bimby:1.02, bformat:"200ml", formats:["200ml","250ml","330ml","1000ml"], periods:["dia","semana"]},
  "Bebida de soja": {bimby:0.67, bformat:"1200ml", formats:["pack 3 (250ml/cada)","250ml","1000ml","1200ml"], periods:["dia","semana"]},
  "Pão": {bimby:0.68, bformat:"1kg", formats:["1kg","unidade bolinha"], periods:["dia","semana"]},
  "Pizza": {bimby:4.70, bformat:"familiar", formats:["pequena supermercado","média supermercado","grande supermercado","familiar supermercado","pequena pizzaria","média pizzaria","grande pizzaria","familiar pizzaria"], periods:["semana"]},
  "Nuggets": {bimby:3.44, bformat:"20 unidades", formats:["4 unidades","6 unidades","10 unidades","20 unidades","50 unidades"], periods:["semana","mês"]},
  "Salgados": {bimby:4.20, bformat:"12 unidades", formats:["1 unidade","10 unidades","12 unidades"], periods:["semana","mês"]},
  "Puré batata": {bimby:1.60, bformat:"1kg", formats:["200g","250g","1kg"], periods:["semana","mês"]},
  "Bechamel": {bimby:0.78, bformat:"500g", formats:["200g","500g"], periods:["semana","mês"]},
  "Maionese": {bimby:0.62, bformat:"300g", formats:["200g","300g","500g","550g"], periods:["semana","mês"]},
  "Massa quebrada/folhada": {bimby:0.97, bformat:"230g", formats:["massa quebrada","massa folhada","230g"], periods:["semana","mês"]},
  "Farinha arroz": {bimby:0.23, bformat:"500g", formats:["200g","500g"], periods:["semana","mês"]},
  "Gelado": {bimby:2.07, bformat:"1000g", formats:["400g","500g","750g","1000g"], periods:["semana","mês"]},
  "Puré maçã": {bimby:0.53, bformat:"400g", formats:["100g","200g","400g","700g"], periods:["dia","semana"]}
};

function defaultPrices(){
  const stores=["Continente","Pingo Doce","Lidl","Aldi","Auchan","Mercadona","Intermarché","Outro"];
  const out={};
  Object.keys(PRODUCTS).forEach((p,pi)=>{
    out[p]={};
    PRODUCTS[p].formats.forEach((f,fi)=>{
      out[p][f]={};
      stores.forEach((s,si)=>{
        const mult = 1.85 + (si%4)*0.14 + (fi%3)*0.12 + (pi%5)*0.03;
        out[p][f][s]= Number((PRODUCTS[p].bimby * mult).toFixed(2));
      });
    });
  });
  return out;
}

let db = loadDB();

function loadDB(){
  try{
    const raw = localStorage.getItem(KEY);
    if(raw) return JSON.parse(raw);
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

/* POUPANÇA */
function initSavings(){
  $("p_prod").innerHTML = Object.keys(PRODUCTS).map(p=>`<option>${p}</option>`).join("");
  loadFormats();
}
function loadFormats(){
  const p = $("p_prod").value;
  $("p_format").innerHTML = PRODUCTS[p].formats.map(f=>`<option>${f}</option>`).join("");
  $("p_period").innerHTML = PRODUCTS[p].periods.map(f=>`<option>${f}</option>`).join("");
  estimatePrice();
}
function estimatePrice(){
  const p = $("p_prod").value, f = $("p_format").value, s = $("p_store").value;
  const val = db.prices?.[p]?.[f]?.[s];
  $("p_price").value = val ?? "";
}
function weeklyFactor(period){ return period==="dia" ? 7 : period==="semana" ? 1 : 1/4.333; }
function addSaving(){
  const p = $("p_prod").value, fmt = $("p_format").value, store = $("p_store").value, period = $("p_period").value;
  const price = num($("p_price").value), qty = num($("p_qty").value);
  const bimbyWeek = PRODUCTS[p].bimby * qty * weeklyFactor(period);
  const marketWeek = price * qty * weeklyFactor(period);
  const saveWeek = marketWeek - bimbyWeek;
  db.savings.push({id:Date.now(), p, fmt, store, period, price, qty, bimbyWeek, marketWeek, saveWeek});
  persist();
}
function removeSaving(id){
  db.savings = db.savings.filter(x=>String(x.id)!==String(id));
  persist();
}
function renderSavings(){
  if(!$("savList")) return;
  $("savList").innerHTML = `<table><tr><th>Produto</th><th>Formato</th><th>Supermercado</th><th>Qtd.</th><th>Poupança/semana</th><th></th></tr>
    ${db.savings.map(x=>`<tr><td>${escapeHTML(x.p)}</td><td>${escapeHTML(x.fmt)}</td><td>${escapeHTML(x.store)} · ${euro(x.price)}</td><td>${x.qty}/${escapeHTML(x.period)}</td><td><b>${euro(x.saveWeek)}</b></td><td><button class="danger" onclick="removeSaving('${x.id}')">Apagar</button></td></tr>`).join("")}</table>`;
  const w = db.savings.reduce((a,x)=>a + (Number(x.saveWeek)||0), 0);
  $("savTotal").textContent = `Poupança total estimada:\nSemana: ${euro(w)}\nMês: ${euro(w*4.333)}\nAno: ${euro(w*52)}`;
}
function savingsText(){
  const w = db.savings.reduce((a,x)=>a + (Number(x.saveWeek)||0), 0);
  return `Resumo de poupança Bimby\n\n${db.savings.map(x=>`${x.p} (${x.fmt}) - ${x.store}: poupa ${euro(x.saveWeek)}/semana`).join("\n")}\n\nTotal estimado:\nSemana: ${euro(w)}\nMês: ${euro(w*4.333)}\nAno: ${euro(w*52)}`;
}
function copySavings(){ navigator.clipboard.writeText(savingsText()); alert("Resumo copiado."); }
function whatsappSavings(){ window.location.href = "https://wa.me/?text=" + encodeURIComponent(savingsText()); }

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
