
const APP_MODE = "tachinho";
const APP_TITLE = "Tachinho — Comprar ou fazer?";
const KEY = "tachinho_v1";

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
  "Massa folhada": {home:0.97, yield:230, unit:"g", label:"230 g", status:"sugerido a validar", periods:["semana","mês","2 meses","3 meses"]},
  "Farinha de arroz": {home:0.23, yield:500, unit:"g", label:"500 g", status:"validado", periods:["semana","mês","2 meses","3 meses"]},
  "Gelado": {home:2.07, yield:1000, unit:"g", label:"1000 g", status:"validado", periods:["semana","mês","2 meses","3 meses"]},
  "Iogurte líquido": {home:1.05, yield:1000, unit:"ml", label:"aprox. 1 L", status:"calculado por receita — a validar", source:"Base Cookidoo para iogurte líquido; leite meio-gordo + fermento/iogurte de arranque. Valor conservador provisório, a afinar por receita/sabor e rendimento final.", periods:["dia","semana","mês"]},
  "Requeijão": {home:null, yield:null, unit:"g", label:"a validar", status:"a validar — sem receita oficial de produção confirmada", source:"Não usar no cálculo até existir receita-base de produção e rendimento verificáveis.", periods:["semana","mês"]},
  "Pão de massa mãe": {home:0.45, yield:620, unit:"g", label:"620 g", status:"estimativa mínima — não usar como sugerido final", source:"Cookidoo · Pão de água com massa-mãe (620 g); 0,45 € cobre essencialmente a farinha T65. Falta fechar água/sal/azeite e manutenção da massa-mãe.", periods:["semana","mês"]},
  "Pão de Mafra": {home:0.43, yield:650, unit:"g", label:"650 g", status:"estimativa mínima — não usar como sugerido final", source:"Cookidoo · Pão de Mafra com massa-mãe (650 g): 550 g farinha T65 + 50 g farinha de centeio + 50 g isco; falta fechar centeio, isco, sal e azeite.", periods:["semana","mês"]},
  "Pão alentejano": {home:0.43, yield:750, unit:"g", label:"750 g", status:"calculado por receita — a validar", source:"Cookidoo · Pão alentejano (750 g); farinha T65 e fermento com preços encontrados de 20/09/2026", periods:["semana","mês"]}
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
        {store:"Continente",brand:"Hellmann's",price:4.84,pack:416,unit:"g",format:"416 g",note:"Preço normal observado online em 20/09/2026; promoção não usada."}
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
        {store:"Continente",brand:"Continente Cremoso Morango",price:1.65,pack:1000,unit:"g",format:"1 kg",note:"Preço observado online em 20/09/2026; custo de fazer em casa ainda a confirmar."},
        {store:"Continente",brand:"Continente Cremoso Morango",price:1.35,pack:640,unit:"g",format:"4 × 160 g",note:"Preço observado online em 20/09/2026; custo de fazer em casa ainda a confirmar."}
      ]
    }
  };
}

let db = loadDB();

function loadDB(){
  try{
    const raw=localStorage.getItem(KEY);
    if(raw){
      const data=JSON.parse(raw);
      if(!data.schemaVersion) data.schemaVersion=1;
      if(!data.prices || !data.prices.references) data.prices=defaultPrices();
      data.savings=Array.isArray(data.savings)?data.savings:[];
      return {schemaVersion:2,savings:data.savings,prices:data.prices,lastSavedAt:data.lastSavedAt||""};
    }
  }catch(e){}
  return {schemaVersion:2,savings:[],prices:defaultPrices()};
}
function persist(){ db.schemaVersion=2; db.lastSavedAt=new Date().toISOString(); localStorage.setItem(KEY, JSON.stringify(db)); renderAll(); }
function euro(n){ return (Number(n)||0).toLocaleString("pt-PT",{style:"currency",currency:"EUR"}); }
function parseNumber(v){
  const raw=String(v??"").trim().replace(/\s/g,"").replace(",",".");
  if(raw==="") return NaN;
  const n=Number(raw);
  return Number.isFinite(n)?n:NaN;
}
function num(v){ const n=parseNumber(v); return Number.isFinite(n)?n:0; }
function $(id){ return document.getElementById(id); }
function escapeHTML(s){ return String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }

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
  $("p_note").textContent = !canUseHomeCost(p) ? "Este custo feito em casa ainda não está suficientemente validado e não será usado no cálculo. "+(p.source||"") : "Fazer em casa custa: "+euro(p.home)+" por "+p.label+" · "+p.status+(p.source?" · Base: "+p.source:"")+"."+ (refs.length?" Existem "+refs.length+" preço(s) encontrado(s); última atualização "+(db.prices.updatedAt||"—")+(stale?" · VER PREÇOS":"")+". O preço real da cliente prevalece sempre.":" Introduza o preço que a pessoa paga.");
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
// IMPORTANTE: daqui para a frente, simplificar apenas textos visíveis ao utilizador.
 // Não alterar identificadores internos (priceSource, status, schemaVersion, chaves ou valores usados na lógica).
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
function compatibleUnit(productUnit, chosen){ return productUnit===chosen; }\nfunction calculateSavingScenario({price,pack,qty,consumedEach,period,home,yieldAmount}){
  const occ=yearlyOccurrences(period);
  const consumed=consumedEach*qty;
  const homeCost=(consumed/yieldAmount)*home;
  const marketCost=(price/pack)*consumed;
  const difference=marketCost-homeCost;
  return {
    occ,consumed,homeCost,marketCost,difference,
    monthly:Math.max(0,difference)*occ/12,
    annual:Math.max(0,difference)*occ,
    extraHomeCost:difference<0?Math.abs(difference)*occ:0
  };
}

function nearlyEqual(a,b,epsilon=1e-9){ return Math.abs(a-b)<=epsilon; }\nfunction calculatePaymentImpact({netMonthly,monthlyPayment=0,months=0,total=0}){
  const saving=Math.max(0,Number(netMonthly)||0);
  const payment=Math.max(0,Number(monthlyPayment)||0);
  const validMonths=Number.isInteger(Number(months))&&Number(months)>0;
  const period=validMonths?Number(months):0;
  const effectiveTotal=Math.max(0,Number(total)||0) || (payment>0&&period>0?payment*period:0);
  return {
    saving,payment,months:period,total:effectiveTotal,
    percent:payment>0?(saving/payment)*100:0,
    missingPerMonth:payment>0?Math.max(0,payment-saving):0,
    surplusPerMonth:payment>0?Math.max(0,saving-payment):0,
    accumulated:period>0?saving*period:0,
    remaining:period>0&&effectiveTotal>0?Math.max(0,effectiveTotal-saving*period):null,
    breakEvenMonths:saving>0&&effectiveTotal>0?effectiveTotal/saving:0
  };
}

function runMathSelfTests(){
  const cases=[
    ["embalagem inteira", {price:2,pack:1000,qty:1,consumedEach:1000,period:"mês",home:1,yieldAmount:1000}, {consumed:1000,monthly:1,annual:12,extraHomeCost:0}],
    ["meia embalagem", {price:2,pack:1000,qty:0.5,consumedEach:1000,period:"mês",home:1,yieldAmount:1000}, {consumed:500,monthly:0.5,annual:6,extraHomeCost:0}],
    ["consumo parcial", {price:4,pack:1000,qty:1,consumedEach:250,period:"semana",home:2,yieldAmount:1000}, {consumed:250,monthly:6.5,annual:78,extraHomeCost:0}],
    ["duas embalagens", {price:2,pack:1000,qty:2,consumedEach:1000,period:"mês",home:1,yieldAmount:1000}, {consumed:2000,monthly:2,annual:24,extraHomeCost:0}],
    ["sem diferença", {price:1,pack:1000,qty:1,consumedEach:1000,period:"mês",home:1,yieldAmount:1000}, {monthly:0,annual:0,extraHomeCost:0}],
    ["fazer em casa mais caro", {price:1,pack:1000,qty:1,consumedEach:1000,period:"mês",home:2,yieldAmount:1000}, {monthly:0,annual:0,extraHomeCost:12}],
    ["2 em 2 meses", {price:2,pack:1000,qty:1,consumedEach:1000,period:"2 meses",home:1,yieldAmount:1000}, {monthly:0.5,annual:6,extraHomeCost:0}],
    ["3 em 3 meses", {price:2,pack:1000,qty:1,consumedEach:1000,period:"3 meses",home:1,yieldAmount:1000}, {monthly:1/3,annual:4,extraHomeCost:0}]
  ];
  const failures=[];
  for(const [name,input,expected] of cases){
    const got=calculateSavingScenario(input);
    for(const [key,value] of Object.entries(expected)){
      if(!nearlyEqual(Number(got[key]),Number(value))) failures.push(name+" · "+key);
    }
  }
  const paymentCases=[
    ["mensalidade parcial",{netMonthly:30,monthlyPayment:50,months:12,total:600},{percent:60,missingPerMonth:20,surplusPerMonth:0,accumulated:360,remaining:240,breakEvenMonths:20}],
    ["mensalidade 100%",{netMonthly:50,monthlyPayment:50,months:12,total:600},{percent:100,missingPerMonth:0,surplusPerMonth:0,accumulated:600,remaining:0,breakEvenMonths:12}],
    ["poupança excede mensalidade",{netMonthly:70,monthlyPayment:50,months:12,total:600},{percent:140,missingPerMonth:0,surplusPerMonth:20,accumulated:840,remaining:0,breakEvenMonths:600/70}],
    ["sem poupança líquida",{netMonthly:-10,monthlyPayment:50,months:12,total:600},{percent:0,missingPerMonth:50,surplusPerMonth:0,accumulated:0,remaining:600,breakEvenMonths:0}],
    ["total calculado pela mensalidade",{netMonthly:25,monthlyPayment:50,months:10,total:0},{total:500,accumulated:250,remaining:250,breakEvenMonths:20}]
  ];
  for(const [name,input,expected] of paymentCases){
    const got=calculatePaymentImpact(input);
    for(const [key,value] of Object.entries(expected)){
      if(!nearlyEqual(Number(got[key]),Number(value))) failures.push(name+" · "+key);
    }
  }
  if(failures.length) console.error("Tachinho: falharam testes matemáticos:",failures);
  else console.info("Tachinho: testes matemáticos essenciais OK ("+cases.length+").");
  return failures;
}

function calculationConfidence(p, priceSource){
  if(!canUseHomeCost(p)) return {level:"bloqueado",label:"🔴 Não usar"};
  if(p.status==="validado" && priceSource==="cliente/manual") return {level:"alta",label:"🟢 Confirmado"};
  if(p.status==="validado" && priceSource==="referência") return {level:"boa",label:"🟢 Atual"};
  return {level:"provisoria",label:"🟡 A confirmar · custo por receita ainda a validar"};
}
function validationState(p){
  if(!p || p.home==null) return "blocked";
  if(p.status==="validado") return "validated";
  return "provisional";
}
function canUseHomeCost(p){ return validationState(p)==="validated"; }
function addSaving(){
  const name=$("p_prod").value, p=PRODUCTS[name], price=parseNumber($("p_price").value), pack=parseNumber($("p_packqty").value), qty=parseNumber($("p_qty").value), unit=$("p_unit").value, period=$("p_period").value;
  const partialRaw=String($("p_consumed")?.value||"").trim();
  const consumedEach=partialRaw==="" ? pack : parseNumber(partialRaw);
  const refIdx=$("p_ref") ? $("p_ref").value : "";
  const matchingRefs=sortReferences((db.prices?.references?.[name]||[]).filter(x=>x.store===$("p_store").value));
  const selectedRef=refIdx!=="" ? matchingRefs[Number(refIdx)] : null;
  const priceSource=selectedRef && Math.abs(price-Number(selectedRef.price))<0.001 ? "referência" : "cliente/manual";
  // Validar primeiro; só depois procurar duplicados, para não mostrar avisos confusos com campos incompletos.
  if(!p){ alert("Escolha um produto."); return; }
  // Distinguir campos vazios de números inválidos/zero para dar uma mensagem certa.
  const priceRaw=String($("p_price").value||"").trim(), packRaw=String($("p_packqty").value||"").trim(), qtyRaw=String($("p_qty").value||"").trim();
  if(priceRaw==="" || packRaw==="" || qtyRaw===""){ alert("Preencha o preço, o tamanho da embalagem e quantas embalagens usa."); return; }
  if(!Number.isFinite(price)||!Number.isFinite(pack)||!Number.isFinite(qty)||!Number.isFinite(consumedEach)){ alert("Há um valor que não está certo. Confirme os números."); return; }
  if(consumedEach>pack){ alert("Não pode usar mais do que a embalagem traz."); return; }
  if(consumedEach<=0){ alert("Indique quanto usa."); return; }
  if(!compatibleUnit(p.unit,unit)){ alert("Para este produto use "+(p.unit==="un"?"unidades":p.unit)+"."); return; }
  if(!canUseHomeCost(p)){ alert("Ainda estamos a confirmar quanto custa fazer este produto em casa. Por enquanto, não o vamos usar."); return; }
  const duplicate=(db.savings||[]).find(x=>x.p===name && x.store===$("p_store").value && String(x.brand||"").trim().toLocaleLowerCase("pt")===String($("p_brand").value||"").trim().toLocaleLowerCase("pt") && Math.abs(Number(x.price)-price)<0.001 && Number(x.pack)===pack && x.unit===$("p_unit").value && Number(x.qty)===qty && x.period===period && Number(x.consumedEach||x.pack)===Number(consumedEach));
  if(duplicate){
    if(!confirm("Já adicionou esta comparação de "+name+".\n\nOK = manter as duas\nCancelar = não duplicar")) return;
  }else if((db.savings||[]).some(x=>x.p===name)){
    const anteriores=(db.savings||[]).filter(x=>x.p===name);
    const resumo=anteriores.slice(0,3).map(x=>{
      const origem=[x.store,x.brand].filter(Boolean).join(" · ")||"sem origem/marca";
      return "• "+origem+" · "+euro(Number(x.price)||0)+" / "+(Number(x.pack)||0)+" "+(x.unit||"")+" · usa "+(Number(x.qty)||0)+" embalagem(ns)";
    }).join("\n");
    const restantes=Math.max(0,anteriores.length-3);
    const mais=restantes ? "\n• + "+restantes+" comparação"+(restantes===1?"":"ões")+" anterior"+(restantes===1?"":"es") : "";
    if(!confirm(name+" já está nesta conta com outros dados:\n\n"+resumo+mais+"\n\nQuer adicionar esta também?")) return;
  }
  if(price<=0 || pack<=0 || qty<=0){ alert("Preço, embalagem e quantidade têm de ser superiores a zero."); return; }
  const occ=yearlyOccurrences(period);
  if(!occ){ alert("Escolha com que frequência usa este produto."); return; }
  const consumed=consumedEach*qty;
  if(!Number.isFinite(consumed) || consumed<=0){ alert("Indique uma quantidade que usa."); return; }
  const homeCost=(consumed/p.yield)*p.home, marketCost=(price/pack)*consumed, difference=marketCost-homeCost, saving=Math.max(0,difference);
  const confidence=calculationConfidence(p,priceSource);
  db.savings.push({id:Date.now(),p:name,store:$("p_store").value,brand:$("p_brand").value.trim(),price,priceSource,confidence:confidence.label,confidenceLevel:confidence.level,referenceUpdatedAt:priceSource==="referência"?(db.prices?.updatedAt||""):"",pack,consumedEach,consumed,unit,qty,period,homeCost,marketCost,difference,monthly:calc.monthly,annual:calc.annual,extraHomeCost:calc.extraHomeCost});
  persist();
  if($("p_consumed")) $("p_consumed").value="";
  if($("p_qty")) $("p_qty").value="1";
  if($("p_prod")) $("p_prod").focus();
  const added=(db.savings||[]).length;
  if(added===1 && !sessionStorage.getItem("tachinho_first_add_tip")){
    sessionStorage.setItem("tachinho_first_add_tip","1");
    alert("Produto adicionado. Agora pode escolher outro ou ver o resumo.");
  }
}
function removeSaving(id){
  const item=(db.savings||[]).find(x=>String(x.id)===String(id));
  if(!item) return;
  if(!confirm("Retirar "+(item.p||"este produto")+" desta conta?")) return;
  db.savings=db.savings.filter(x=>String(x.id)!==String(id));
  persist();
}
function newSavingsSimulation(){
  if((db.savings||[]).length && !confirm("Quer começar de novo? O resumo atual será apagado deste dispositivo.")) return;
  db.savings=[];
  if($("sim_name")) $("sim_name").value="";
  if($("roi_monthly")) $("roi_monthly").value="";
  if($("roi_months")) $("roi_months").value="";
  if($("roi_total")) $("roi_total").value="";
  ["p_brand","p_price","p_consumed"].forEach(id=>{if($(id)) $(id).value="";});
  if($("p_qty")) $("p_qty").value="1";
  if($("p_store")) $("p_store").value="";
  if($("p_prod")) $("p_prod").selectedIndex=0;
  loadFormats();
  if($("p_ref")) $("p_ref").innerHTML='<option value="">Escolher o preço</option>';
  persist();
  window.scrollTo({top:0,behavior:"smooth"});
}
function simpleConfidenceLabel(x){
  if(x.confidenceLevel==="alta") return "🟢 Confirmado";
  if(x.confidenceLevel==="boa") return "🟢 Atual";
  if(x.confidenceLevel==="provisoria") return "🟡 A confirmar";
  if(x.confidenceLevel==="bloqueada") return "🔴 Não usar";
  const legacy=String(x.confidence||"");
  if(legacy.includes("Confirmado") || legacy.includes("Alta")) return "🟢 Confirmado";
  if(legacy.includes("Atual") || legacy.includes("Boa")) return "🟢 Atual";
  if(legacy.includes("confirmar") || legacy.includes("Provis")) return "🟡 A confirmar";
  if(legacy.includes("Não usar") || legacy.includes("Não utilizar")) return "🔴 Não usar";
  return legacy || "—";
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
  $("savList").innerHTML = `<table><tr><th>Produto</th><th>Compra</th><th>Hábito</th><th>Este valor está</th><th>Poupa por mês</th><th>Poupa por ano</th><th></th></tr>${db.savings.map(raw=>{const x=normalizedSaving(raw);const src=x.priceSource==="cliente/manual"?"Preço que paga":x.priceSource==="referência"?"Preço encontrado":"Preço que paga";return `<tr><td><b>${escapeHTML(x.p||"")}</b><br><span class="small">${escapeHTML(x.brand||"")}</span></td><td>${escapeHTML(x.store||"")} · ${euro(x.price)}<br><span class="small">${escapeHTML(src)}${x.referenceUpdatedAt?" · "+escapeHTML(x.referenceUpdatedAt):""}</span></td><td>${escapeHTML(periodLabel(x.period||"semana"))}<br><span class="small">Usa ${escapeHTML(String(x.qty||1))} embalagem(ns)${Number(x.consumedEach||x.pack)!==Number(x.pack)?" · "+escapeHTML(String(x.consumedEach||""))+" "+escapeHTML(x.unit||"")+" de cada":""}</span></td><td><span class="small">${escapeHTML(simpleConfidenceLabel(x))}</span></td><td><b>${Number(x.annual)>0?euro(x.monthly):Number(x.extraHomeCost)>0?"+"+euro(Number(x.extraHomeCost)/12)+" mais":"Sem diferença"}</b></td><td><b>${Number(x.annual)>0?euro(x.annual):Number(x.extraHomeCost)>0?"+"+euro(Number(x.extraHomeCost))+" mais":"Sem diferença"}</b></td><td><button class="danger" onclick="removeSaving('${x.id}')">Retirar</button></td></tr>`}).join("")}</table>`;
  const t=savingsTotals();
  const netAnnual=t.annual-t.extraAnnual, netMonthly=t.monthly-t.extraMonthly;
  const day=Math.abs(netAnnual/365), week=Math.abs(netAnnual/52);
  const count=(db.savings||[]).length;
  const positiveItems=topSavings().filter(x=>(Number(x.annual)||0)>0);
  const top=positiveItems.slice(0,3);
  const highlights=top.length?"\n\nOnde poupa mais:\n"+top.map((x,i)=>(i+1)+". "+x.p+" · "+euro(x.monthly)+"/mês").join("\n"):"";
  const extraItems=(db.savings||[]).map(normalizedSaving).filter(x=>(Number(x.extraHomeCost)||0)>0);
  const zeroItems=topSavings().filter(x=>(Number(x.annual)||0)<=0 && !(Number(x.extraHomeCost)>0));
  const extraItemsNote=extraItems.length?"\n\nFazer em casa fica a mais: "+extraItems.map(x=>x.p).join(", ")+".":"";
  const noSaving=zeroItems.length?"\n\nFica ao mesmo preço: "+zeroItems.map(x=>x.p).join(", ")+".":"";
  const extra=t.extraAnnual>0?"\nFica mais caro fazer em casa: "+euro(t.extraMonthly)+"/mês · "+euro(t.extraAnnual)+"/ano\nNo total: "+(netAnnual>0?"poupa "+euro(netMonthly)+"/mês · "+euro(netAnnual)+"/ano":netAnnual<0?"fica "+euro(Math.abs(netMonthly))+"/mês · "+euro(Math.abs(netAnnual))+"/ano mais caro":"fica igual"):"";
  const balanceLines=t.extraAnnual>0?`Poupa: ${euro(t.monthly)}/mês · ${euro(t.annual)}/ano\nFica mais caro: ${euro(t.extraMonthly)}/mês · ${euro(t.extraAnnual)}/ano\nNo total: ${netAnnual>0?"poupa "+euro(netMonthly)+"/mês · "+euro(netAnnual)+"/ano":netAnnual<0?"fica "+euro(Math.abs(netMonthly))+"/mês · "+euro(Math.abs(netAnnual))+"/ano mais caro":"fica igual"}${netAnnual!==0?"\nPor dia e por semana: "+euro(day)+"/dia · "+euro(week)+"/semana":""}`:`Poupa: ${euro(t.monthly)}/mês · ${euro(t.annual)}/ano${netAnnual!==0?"\nPor dia e por semana: "+euro(day)+"/dia · "+euro(week)+"/semana":""}`;
  $("savTotal").textContent=count?`Resumo · ${count} produto${count===1?"":"s"}\n${balanceLines}${highlights}${extraItemsNote}${noSaving}`:"Ainda não adicionou nenhum produto.";
  const mensalRaw=($("roi_monthly")?.value||"").trim(), monthsRaw=($("roi_months")?.value||"").trim(), totalRaw=($("roi_total")?.value||"").trim();
  const mensal=mensalRaw===""?0:Number(mensalRaw.replace(",", ".")), months=monthsRaw===""?0:Number(monthsRaw.replace(",", ".")), typedTotal=totalRaw===""?0:Number(totalRaw.replace(",", "."));
  if(!Number.isFinite(mensal)||!Number.isFinite(months)||!Number.isFinite(typedTotal)){ $("roiResult").textContent="Há um valor que não está certo. Confirme os números."; return; }
  if(mensal<0||months<0||typedTotal<0){ $("roiResult").textContent="Os valores não podem ser negativos."; return; }
  if(months>0 && !Number.isInteger(months)){ $("roiResult").textContent="O número de meses tem de ser um número inteiro."; return; }
  if(!mensal&&!typedTotal){ $("roiResult").textContent="Indique a mensalidade e o número de meses para ver quanto a poupança ajuda."; return; }
  const impact=calculatePaymentImpact({netMonthly,monthlyPayment:mensal,months,total:typedTotal});
  const roiMonthly=impact.saving, pct=impact.percent, felt=impact.missingPerMonth, validMonths=impact.months>0;
  const accumulated=impact.accumulated, remaining=impact.remaining, breakEven=impact.breakEvenMonths, total=impact.total;
  const coverText=mensal?(roiMonthly>0?(roiMonthly>=mensal?`A poupança cobre 100% da mensalidade.`:`A poupança ajuda a pagar cerca de ${pct.toFixed(0)}% da mensalidade.`):`Aqui não há poupança para ajudar a pagar a mensalidade.`):"";
  const monthlyText=mensal?(roiMonthly>mensal?`\nA poupança cobre a mensalidade e ainda sobram ${euro(roiMonthly-mensal)} por mês.`:roiMonthly===mensal&&roiMonthly>0?`\nA poupança cobre exatamente a mensalidade.`:`\nDepois da poupança, faltam ${euro(felt)} por mês.`):"";
  const periodText=validMonths?`\nAo fim de ${months} meses, a poupança acumulada é ${euro(accumulated)}.${total?"\nNesse momento, ficam por compensar "+euro(remaining)+".":""}`:"";
  $("roiResult").textContent=`${coverText}${monthlyText}${periodText}${breakEven?"\nAo fim de cerca de "+breakEven.toFixed(1)+" meses, a poupança acumulada atinge o valor total.":""}`;
}
function savingsText(){
  const t=savingsTotals();
  if(!(db.savings||[]).length) return "Tachinho — ainda não adicionou nenhum produto.";
  const lines=db.savings.map(raw=>{const x=normalizedSaving(raw);const src=x.priceSource==="cliente/manual"?"preço que paga":x.priceSource==="referência"?"preço encontrado":"preço usado";const result=(Number(x.annual)||0)>0?`${euro(x.monthly)}/mês · ${euro(x.annual)}/ano`:Number(x.extraHomeCost)>0?`fazer em casa fica ${euro(Number(x.extraHomeCost)/12)}/mês a mais`:"sem diferença nesta comparação";return `${x.p}: ${result} (${src})`;}).join("\n");
  const who=$("sim_name")?.value.trim();
  const netAnnual=t.annual-(t.extraAnnual||0), netMonthly=t.monthly-(t.extraMonthly||0);
  const netDay=netAnnual/365, netWeek=netAnnual/52;
  const gross=t.extraAnnual>0?`Poupa: ${euro(t.monthly)}/mês · ${euro(t.annual)}/ano\nFica a mais: ${euro(t.extraMonthly)}/mês · ${euro(t.extraAnnual)}/ano\n`:"";
  const saldoLabel=t.extraAnnual>0?"No total":"Poupa";
  const equivalenciaLabel="Por dia e por semana";
  const equivalencia=netAnnual===0?"":`\n${equivalenciaLabel}: ${euro(Math.abs(netDay))}/dia · ${euro(Math.abs(netWeek))}/semana`;
  return `Tachinho — Comprar ou fazer?${who?" · "+who:""}\n\n${lines}\n\n${gross}${saldoLabel}: ${netAnnual>0?euro(netMonthly)+"/mês · "+euro(netAnnual)+"/ano de poupança":netAnnual<0?euro(Math.abs(netMonthly))+"/mês · "+euro(Math.abs(netAnnual))+"/ano a mais":"fica igual"}${equivalencia}\n\nEstes valores são uma estimativa. Podem mudar conforme os preços, as quantidades e a frequência de compra.`;
}
async function copySavings(){
  if(!(db.savings||[]).length){ alert("Adicione pelo menos um produto antes de copiar o resumo."); return; }
  const txt=savingsText();
  try{
    if(navigator.clipboard?.writeText) await navigator.clipboard.writeText(txt);
    else throw new Error("clipboard unavailable");
    alert("Resumo copiado. Já pode colar onde quiser.");
  }catch(e){
    const area=document.createElement("textarea");
    area.value=txt; area.setAttribute("readonly",""); area.style.position="fixed"; area.style.opacity="0";
    document.body.appendChild(area); area.select();
    const ok=document.execCommand("copy"); document.body.removeChild(area);
    alert(ok?"Resumo copiado. Já pode colar onde quiser.":"Não foi possível copiar automaticamente. Pode selecionar e copiar o resumo manualmente.");
  }
}
function whatsappSavings(){
  if(!(db.savings||[]).length){ alert("Adicione pelo menos um produto antes de enviar a conta por WhatsApp."); return; }
  window.location.href="https://wa.me/?text="+encodeURIComponent(savingsText());
}

function renderAll(){
  renderSavings();
}
initSavings();
runMathSelfTests();
renderAll();
if("serviceWorker" in navigator){ navigator.serviceWorker.register("service-worker.js").catch(()=>{}); }
