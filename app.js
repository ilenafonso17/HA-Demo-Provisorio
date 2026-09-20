
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
  "Iogurte líquido": {home:1.05, yield:1000, unit:"ml", label:"aprox. 1 L", status:"calculado por receita — a validar", source:"Base Cookidoo para iogurte líquido; leite meio-gordo + fermento/iogurte de arranque. Valor conservador provisório, a afinar por receita/sabor e rendimento final.", periods:["dia","semana","mês"]},
  "Requeijão": {home:null, yield:null, unit:"g", label:"a validar", status:"a validar — sem receita oficial de produção confirmada", source:"Não usar no cálculo até existir receita-base de produção e rendimento verificáveis.", periods:["semana","mês"]},
  "Pão de massa mãe": {home:0.45, yield:620, unit:"g", label:"620 g", status:"estimativa mínima — não usar como referência final", source:"Cookidoo · Pão de água com massa-mãe (620 g); 0,45 € cobre essencialmente a farinha T65. Falta fechar água/sal/azeite e manutenção da massa-mãe.", periods:["semana","mês"]},
  "Pão de Mafra": {home:0.43, yield:650, unit:"g", label:"650 g", status:"estimativa mínima — não usar como referência final", source:"Cookidoo · Pão de Mafra com massa-mãe (650 g): 550 g farinha T65 + 50 g farinha de centeio + 50 g isco; falta fechar centeio, isco, sal e azeite.", periods:["semana","mês"]},
  "Pão alentejano": {home:0.43, yield:750, unit:"g", label:"750 g", status:"calculado por receita — a validar", source:"Cookidoo · Pão alentejano (750 g); farinha T65 e fermento com preços de referência de 20/09/2026", periods:["semana","mês"]}
};

function defaultPrices(){
  return {
    updatedAt:"2026-09-20",
    reviewAfter:"2026-12-20",
    references:{
      "Iogurte sólido":[
        {store:"Continente",brand:"Continente Natural",price:1.39,pack:1000,unit:"g",format:"8 × 125 g",note:"Preço normal observado online em 20/09/2026."},
        {store:"Continente",brand:"Mimosa Natural Super Poupança",price:1.89,pack:960,unit:"g",format:"8 × 120 g",note:"Preço normal observado online em 20/09/2026."},
        {store:"Continente",brand:"Danone Natural",price:2.09,pack:960,unit:"g",format:"8 un / 960 g",note:"Preço observado online em 20/09/2026; PVPR indicado 2,72 €."},
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
        {store:"Auchan",brand:"Auchan",price:1.19,pack:230,unit:"g",format:"230 g",note:"Preço observado online em 20/09/2026."},
        {store:"Auchan",brand:"Pasta do Dia",price:2.09,pack:230,unit:"g",format:"230 g",note:"Preço observado online em 20/09/2026."}
      ],
      "Bechamel":[
        {store:"Continente",brand:"Continente",price:1.69,pack:500,unit:"ml",format:"500 ml",note:"Preço observado online em 20/09/2026."},
        {store:"Continente",brand:"Mimosa",price:1.99,pack:500,unit:"ml",format:"500 ml",note:"Preço observado online em 20/09/2026."},
        {store:"Continente",brand:"Parmalat",price:2.38,pack:500,unit:"ml",format:"500 ml",note:"Preço observado online em 20/09/2026."}
      ],
      "Farinha de arroz":[
        {store:"Continente",brand:"Espiga",price:1.32,pack:500,unit:"g",format:"500 g",note:"Preço observado online em 20/09/2026."},
        {store:"Continente",brand:"Continente Bio Integral",price:2.29,pack:500,unit:"g",format:"500 g",note:"Preço observado online em 20/09/2026."}
      ],
      "Granola":[
        {store:"Continente",brand:"Continente Triplo Chocolate",price:2.99,pack:500,unit:"g",format:"500 g",note:"Preço observado online em 20/09/2026."}
      ],
      "Iogurte líquido":[
        {store:"Continente",brand:"Continente Cremoso Morango",price:1.65,pack:1000,unit:"g",format:"1 kg",note:"Preço observado online em 20/09/2026; custo caseiro ainda a validar."},
        {store:"Continente",brand:"Continente Cremoso Morango",price:1.35,pack:640,unit:"g",format:"4 × 160 g",note:"Preço observado online em 20/09/2026; custo caseiro ainda a validar."}
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
      if(!data.schemaVersion) data.schemaVersion=1;
      if(!data.prices || !data.prices.references){
        if(data.prices) data.legacyPricesBackup={savedAt:new Date().toISOString(),data:data.prices};
        data.prices=defaultPrices();
      }
      data.clients=data.clients||[];
      data.savings=data.savings||[];
      data.recruits=data.recruits||[];
      return data;
    }
  }catch(e){}
  return {schemaVersion:2,clients:[], savings:[], recruits:[], prices:defaultPrices()};
}
function persist(){ db.schemaVersion=2; db.lastSavedAt=new Date().toISOString(); localStorage.setItem(KEY, JSON.stringify(db)); renderAll(); }
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
  $("p_prod").innerHTML = Object.keys(PRODUCTS).sort((a,b)=>a.localeCompare(b,"pt",{sensitivity:"base"})).map(p=>`<option>${p}</option>`).join("");
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
  $("p_note").textContent = !canUseHomeCost(p) ? "Este custo feito em casa ainda não está suficientemente validado e não será usado no cálculo. "+(p.source||"") : "Custo feito em casa: "+euro(p.home)+" por "+p.label+" · "+p.status+(p.source?" · Base: "+p.source:"")+"."+ (refs.length?" Existem "+refs.length+" preço(s) de referência; última atualização "+(db.prices.updatedAt||"—")+(stale?" · PREÇOS A REVER":"")+". O preço real da cliente prevalece sempre.":" Introduza o preço que a pessoa paga.");
  loadReferenceOptions();
}
function sortReferences(refs){
  return [...refs].sort((a,b)=>{
    const ua=String(a.unit||""), ub=String(b.unit||"");
    if(ua===ub){
      const d=(Number(a.pack)||0)-(Number(b.pack)||0);
      if(d) return d;
      return String(a.brand||"").localeCompare(String(b.brand||""),"pt",{sensitivity:"base"});
    }
    const order={un:0,g:1,ml:2};
    return (order[ua]??9)-(order[ub]??9);
  });
}
function loadReferenceOptions(){
  const name=$("p_prod").value, all=db.prices?.references?.[name]||[], store=$("p_store").value;
  const refs=sortReferences(all.filter(x=>x.store===store));
  $("p_ref").innerHTML='<option value="">Preço manual / da cliente</option>'+refs.map((r,i)=>'<option value="'+i+'">'+escapeHTML(r.brand||r.store)+' · '+euro(r.price)+' · '+escapeHTML(r.format||"")+'</option>').join("");
  if(refs.length){ $("p_ref").value="0"; applySelectedReference(); }
  else { $("p_ref").value=""; $("p_brand").value=""; $("p_price").value=""; }
}
function markManualPrice(){
  if($("p_ref")) $("p_ref").value="";
  if($("p_brand") && !$("p_brand").value.trim()) $("p_brand").placeholder="Opcional — pode indicar a marca da cliente";
}
function applySelectedReference(){
  const name=$("p_prod").value, store=$("p_store").value, refs=sortReferences((db.prices?.references?.[name]||[]).filter(x=>x.store===store));
  const idx=$("p_ref").value;
  if(idx==="") return;
  const r=refs[Number(idx)];
  if(!r) return;
  $("p_brand").value=r.brand||"";
  $("p_price").value=r.price;
  $("p_packqty").value=r.pack;
  $("p_unit").value=r.unit;
}
function periodLabel(p){ return p==="dia"?"1 vez por dia":p==="semana"?"1 vez por semana":p==="mês"?"1 vez por mês":p==="2 meses"?"1 vez de 2 em 2 meses":"1 vez de 3 em 3 meses"; }
function yearlyOccurrences(p){ return p==="dia"?365:p==="semana"?52:p==="mês"?12:p==="2 meses"?6:p==="3 meses"?4:0; }
function compatibleUnit(productUnit, chosen){ return productUnit===chosen; }
function calculationConfidence(p, priceSource){
  if(!canUseHomeCost(p)) return {level:"bloqueado",label:"🔴 Não utilizar"};
  if(p.status==="validado" && priceSource==="cliente/manual") return {level:"alta",label:"🟢 Alta · custo caseiro validado + preço real"};
  if(p.status==="validado" && priceSource==="referência") return {level:"boa",label:"🟢 Boa · custo caseiro validado + preço de referência"};
  return {level:"provisoria",label:"🟡 Provisória · custo por receita ainda a validar"};
}
function validationState(p){
  if(!p || p.home==null) return "blocked";
  if(p.status==="validado") return "validated";
  return "provisional";
}
function canUseHomeCost(p){ return validationState(p)==="validated"; }
function addSaving(){
  const name=$("p_prod").value, p=PRODUCTS[name], price=num($("p_price").value), pack=num($("p_packqty").value), qty=num($("p_qty").value), unit=$("p_unit").value, period=$("p_period").value;
  const consumedEach=num($("p_consumed")?.value)||pack;
  const refIdx=$("p_ref") ? $("p_ref").value : "";
  const matchingRefs=sortReferences((db.prices?.references?.[name]||[]).filter(x=>x.store===$("p_store").value));
  const selectedRef=refIdx!=="" ? matchingRefs[Number(refIdx)] : null;
  const priceSource=selectedRef && Math.abs(price-Number(selectedRef.price))<0.001 ? "referência" : "cliente/manual";
  if((db.savings||[]).some(x=>x.p===name)){
    if(!confirm(name+" já está nesta simulação. Quer adicionar outra comparação do mesmo produto?")) return;
  }
  if(!canUseHomeCost(p)){ alert("O custo feito em casa deste produto ainda não está suficientemente validado para ser usado numa comparação com a cliente."); return; }
  if(!price||!pack||!qty){ alert("Preencha o preço, a quantidade da embalagem e a quantidade consumida."); return; }
  if(price<=0 || pack<=0 || qty<=0){ alert("Preço, embalagem e quantidade têm de ser superiores a zero."); return; }
  if(!Number.isFinite(price)||!Number.isFinite(pack)||!Number.isFinite(qty)||!Number.isFinite(consumedEach)){ alert("Existe um valor inválido. Reveja os números introduzidos."); return; }
  if(consumedEach>pack){ alert("O consumo por embalagem não pode ser superior à quantidade da embalagem."); return; }
  if(consumedEach<=0){ alert("Indique uma quantidade consumida válida."); return; }
  if(!compatibleUnit(p.unit,unit)){ alert("Para este produto use a unidade "+(p.unit==="un"?"unidades":p.unit)+"."); return; }
  const consumed=consumedEach*qty, homeCost=(consumed/p.yield)*p.home, marketCost=(price/pack)*consumed, difference=marketCost-homeCost, saving=Math.max(0,difference), occ=yearlyOccurrences(period);
  const confidence=calculationConfidence(p,priceSource);
  db.savings.push({id:Date.now(),p:name,store:$("p_store").value,brand:$("p_brand").value.trim(),price,priceSource,confidence:confidence.label,referenceUpdatedAt:priceSource==="referência"?(db.prices?.updatedAt||""):"",pack,consumedEach,unit,qty,period,homeCost,marketCost,difference,monthly:saving*occ/12,annual:saving*occ,extraHomeCost:difference<0?Math.abs(difference)*occ:0});
  persist();
  if($("p_consumed")) $("p_consumed").value="";
  if($("p_qty")) $("p_qty").value="1";
  if($("p_prod")) $("p_prod").focus();
  const added=(db.savings||[]).length;
  if(added===1 && !sessionStorage.getItem("tachinho_first_add_tip")){
    sessionStorage.setItem("tachinho_first_add_tip","1");
    alert("Produto adicionado. Pode escolher outro produto ou consultar o resumo.");
  }
}
function removeSaving(id){
  const item=(db.savings||[]).find(x=>String(x.id)===String(id));
  if(!item) return;
  if(!confirm("Apagar "+(item.p||"este produto")+" desta simulação?")) return;
  db.savings=db.savings.filter(x=>String(x.id)!==String(id));
  persist();
}
function newSavingsSimulation(){
  if((db.savings||[]).length && !confirm("Começar uma nova simulação? O resumo atual será limpo deste dispositivo.")) return;
  db.savings=[];
  if($("sim_name")) $("sim_name").value="";
  if($("roi_monthly")) $("roi_monthly").value="";
  if($("roi_months")) $("roi_months").value="";
  if($("roi_total")) $("roi_total").value="";
  ["p_brand","p_price","p_pack","p_consumed"].forEach(id=>{if($(id)) $(id).value="";});
  if($("p_qty")) $("p_qty").value="1";
  if($("p_unit")) $("p_unit").value="g";
  if($("p_store")) $("p_store").value="";
  if($("p_ref")) $("p_ref").innerHTML='<option value="">— escolha uma referência —</option>';
  if($("p_product")) $("p_product").selectedIndex=0;
  if($("p_freq")) $("p_freq").selectedIndex=0;
  persist();
  show("savings");
}
function normalizedSaving(x){
  if(Number.isFinite(Number(x.monthly))&&Number.isFinite(Number(x.annual))) return x;
  const w=Number(x.saveWeek)||0;
  return {...x,monthly:w*52/12,annual:w*52};
}
function savingsTotals(){
  return db.savings.map(normalizedSaving).reduce((a,x)=>({
    monthly:a.monthly+(Number(x.monthly)||0),
    annual:a.annual+(Number(x.annual)||0),
    extraMonthly:a.extraMonthly+(Number(x.extraHomeCost)||0)/12,
    extraAnnual:a.extraAnnual+(Number(x.extraHomeCost)||0)
  }),{monthly:0,annual:0,extraMonthly:0,extraAnnual:0});
}
function topSavings(){ return (db.savings||[]).map(normalizedSaving).sort((a,b)=>(b.annual||0)-(a.annual||0)); }
function renderSavings(){
  if(!$("savList")) return;
  db.savings=db.savings||[];
  $("savList").innerHTML = `<table><tr><th>Produto</th><th>Compra</th><th>Hábito</th><th>Confiança</th><th>Poupança/mês</th><th>Poupança/ano</th><th></th></tr>${db.savings.map(raw=>{const x=normalizedSaving(raw);const src=x.priceSource==="cliente/manual"?"Preço real/manual":x.priceSource==="referência"?"Preço de referência":"Origem não registada";return `<tr><td><b>${escapeHTML(x.p||"")}</b><br><span class="small">${escapeHTML(x.brand||"")}</span></td><td>${escapeHTML(x.store||"")} · ${euro(x.price)}<br><span class="small">${escapeHTML(src)}${x.referenceUpdatedAt?" · "+escapeHTML(x.referenceUpdatedAt):""}</span></td><td>${escapeHTML(periodLabel(x.period||"semana"))}</td><td><span class="small">${escapeHTML(x.confidence||"—")}</span></td><td><b>${Number(x.annual)>0?euro(x.monthly):Number(x.extraHomeCost)>0?"+"+euro(Number(x.extraHomeCost)/12)+" mais":"Sem diferença"}</b></td><td><b>${Number(x.annual)>0?euro(x.annual):Number(x.extraHomeCost)>0?"+"+euro(Number(x.extraHomeCost))+" mais":"Sem diferença"}</b></td><td><button class="danger" onclick="removeSaving('${x.id}')">Apagar</button></td></tr>`}).join("")}</table>`;
  const t=savingsTotals();
  const netAnnual=t.annual-t.extraAnnual, netMonthly=t.monthly-t.extraMonthly;
  const day=netAnnual/365, week=netAnnual/52;
  const count=(db.savings||[]).length;
  const positiveItems=topSavings().filter(x=>(Number(x.annual)||0)>0);
  const top=positiveItems.slice(0,3);
  const highlights=top.length?"\n\nMaior impacto:\n"+top.map((x,i)=>(i+1)+". "+x.p+" · "+euro(x.monthly)+"/mês").join("\n"):"";
  const zeroItems=topSavings().filter(x=>(Number(x.annual)||0)<=0);
  const noSaving=zeroItems.length?"\n\nSem poupança nesta comparação: "+zeroItems.map(x=>x.p).join(", ")+".":"";
  const extra=t.extraAnnual>0?"\nCusto adicional dos produtos que ficam mais caros em casa: "+euro(t.extraMonthly)+"/mês · "+euro(t.extraAnnual)+"/ano\nSaldo líquido da comparação: "+(netAnnual>0?euro(netMonthly)+"/mês · "+euro(netAnnual)+"/ano de poupança":netAnnual<0?euro(Math.abs(netMonthly))+"/mês · "+euro(Math.abs(netAnnual))+"/ano de custo adicional":"sem diferença global"):"";
  $("savTotal").textContent=count?`Poupança estimada · ${count} produto${count===1?"":"s"}\nDia: ${euro(day)}\nSemana: ${euro(week)}\nMês: ${euro(t.monthly)}\nAno: ${euro(t.annual)}${extra}${highlights}${noSaving}`:"Ainda não adicionou produtos a esta simulação.";
  const mensalRaw=($("roi_monthly")?.value||"").trim(), monthsRaw=($("roi_months")?.value||"").trim(), totalRaw=($("roi_total")?.value||"").trim();
  const mensal=mensalRaw===""?0:Number(mensalRaw.replace(",", ".")), months=monthsRaw===""?0:Number(monthsRaw.replace(",", ".")), typedTotal=totalRaw===""?0:Number(totalRaw.replace(",", "."));
  if(!Number.isFinite(mensal)||!Number.isFinite(months)||!Number.isFinite(typedTotal)){ $("roiResult").textContent="Existe um valor financeiro inválido. Reveja os números introduzidos."; return; }
  const calculatedTotal=mensal>0&&Number.isInteger(months)&&months>0?mensal*months:0, total=typedTotal||calculatedTotal;
  if(mensal<0||months<0||typedTotal<0){ $("roiResult").textContent="Mensalidade, prazo e valor total não podem ser negativos."; return; }
  if(!mensal&&!total){ $("roiResult").textContent="Preencha a mensalidade e o prazo para ver o impacto da poupança."; return; }
  const roiMonthly=Math.max(0,netMonthly), pct=mensal?(roiMonthly/mensal)*100:0, felt=Math.max(0,mensal-roiMonthly), accumulated=roiMonthly*months, remaining=Math.max(0,total-accumulated), breakEven=roiMonthly>0&&total>0?total/roiMonthly:0;
  const validMonths=Number.isInteger(months)&&months>0;
  const coverText=mensal?(roiMonthly>0?`O saldo líquido mensal estimado equivale a ${pct.toFixed(0)}% da mensalidade indicada.`:`O saldo líquido desta simulação não representa poupança disponível para comparar com a mensalidade.`):"";
  const periodText=validMonths?`\nSaldo líquido acumulado em ${months} meses: ${euro(accumulated)}\nValor ainda não compensado no fim: ${euro(remaining)}`:"\nIndique um prazo válido em meses para calcular o acumulado.";
  $("roiResult").textContent=`${coverText}${mensal?"\nValor mensal não coberto pelo saldo líquido: "+euro(felt):""}${periodText}${breakEven?"\nTempo estimado para equivaler ao valor total: "+breakEven.toFixed(1)+" meses":""}`;
}
function savingsText(){
  const t=savingsTotals();
  if(!(db.savings||[]).length) return "Tachinho — ainda não existem produtos nesta simulação.";
  const lines=db.savings.map(raw=>{const x=normalizedSaving(raw);const src=x.priceSource==="cliente/manual"?"preço indicado":x.priceSource==="referência"?"preço de referência":"preço registado";const result=(Number(x.annual)||0)>0?`${euro(x.monthly)}/mês · ${euro(x.annual)}/ano`:Number(x.extraHomeCost)>0?`feito em casa fica ${euro(Number(x.extraHomeCost)/12)}/mês mais caro`:"sem diferença nesta comparação";return `${x.p}: ${result} (${src})`;}).join("\n");
  const who=$("sim_name")?.value.trim();
  const netAnnual=t.annual-(t.extraAnnual||0), netMonthly=t.monthly-(t.extraMonthly||0);
  const day=netAnnual/365, week=netAnnual/52;
  const balance=t.extraAnnual>0?`\nCustos adicionais: ${euro(t.extraMonthly)}/mês · ${euro(t.extraAnnual)}/ano\nSaldo líquido: ${netAnnual>0?euro(netMonthly)+"/mês · "+euro(netAnnual)+"/ano de poupança":netAnnual<0?euro(Math.abs(netMonthly))+"/mês · "+euro(Math.abs(netAnnual))+"/ano de custo adicional":"sem diferença global"}`:"";
  return `Tachinho — Comprar ou fazer?${who?" · "+who:""}\n\n${lines}\n\nPoupança estimada com os hábitos indicados:\nDia: ${euro(day)}\nSemana: ${euro(week)}\nMês: ${euro(t.monthly)}\nAno: ${euro(t.annual)}${balance}\n\nOs valores são uma estimativa baseada nos preços, quantidades e frequência considerados. O preço real e os custos dos ingredientes podem variar.`;
}
async function copySavings(){
  if(!(db.savings||[]).length){ alert("Adicione pelo menos um produto antes de copiar a simulação."); return; }
  const txt=savingsText();
  try{
    if(navigator.clipboard?.writeText) await navigator.clipboard.writeText(txt);
    else throw new Error("clipboard unavailable");
    alert("Resumo copiado.");
  }catch(e){
    const area=document.createElement("textarea");
    area.value=txt; area.setAttribute("readonly",""); area.style.position="fixed"; area.style.opacity="0";
    document.body.appendChild(area); area.select();
    const ok=document.execCommand("copy"); document.body.removeChild(area);
    alert(ok?"Resumo copiado.":"Não foi possível copiar automaticamente. Pode selecionar e copiar o resumo manualmente.");
  }
}
function whatsappSavings(){
  if(!(db.savings||[]).length){ alert("Adicione pelo menos um produto antes de enviar a simulação por WhatsApp."); return; }
  window.location.href="https://wa.me/?text="+encodeURIComponent(savingsText());
}

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
  const stamp=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");
  const payload={...db,backupMeta:{createdAt:new Date().toISOString(),schemaVersion:db.schemaVersion||2,app:"Tachinho"}};
  download(JSON.stringify(payload,null,2), "backup-tachinho-"+stamp+".json", "application/json");
}
function importBackup(file){
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const imported=JSON.parse(reader.result);
      if(!imported || typeof imported!=="object" || !Array.isArray(imported.clients) || !Array.isArray(imported.savings)){
        alert("Este ficheiro não parece ser um backup válido do Tachinho.");
        return;
      }
      const version=Number(imported.schemaVersion||imported.backupMeta?.schemaVersion||1);
      if(version>2){
        alert("Este backup foi criado numa versão mais recente do Tachinho. Não será importado para evitar perda de dados.");
        return;
      }
      if(!confirm("Importar este backup? Os dados atuais deste dispositivo serão substituídos.")) return;
      db=imported;
      persist();
      alert("Backup importado com sucesso.");
    }catch(e){ alert("Ficheiro inválido. Nenhum dado foi alterado."); }
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
