import { useState, useRef } from "react";

const LOGO_B64 = "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";
const SIG_B64 = "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";

const PRICE_DATA = [
  { category: "Anamnese", specialty: "ABA", price: 308 },
  { category: "Anamnese", specialty: "Denver", price: 308 },
  { category: "Anamnese", specialty: "Equoterapia", price: 560 },
  { category: "Anamnese", specialty: "Estimulação Transcraniana ETCC", price: 308 },
  { category: "Anamnese", specialty: "Fisioterapia Aquática", price: 308 },
  { category: "Anamnese", specialty: "Fisioterapia Motora", price: 308 },
  { category: "Anamnese", specialty: "Fisioterapia Respiratória", price: 308 },
  { category: "Anamnese", specialty: "Fonoaudiologia", price: 308 },
  { category: "Anamnese", specialty: "G.ESDM", price: 308 },
  { category: "Anamnese", specialty: "Integração Sensorial", price: 330 },
  { category: "Anamnese", specialty: "Interdisciplinar", price: 308 },
  { category: "Anamnese", specialty: "Musicoterapia", price: 308 },
  { category: "Anamnese", specialty: "Neuropsicologia", price: 375 },
  { category: "Anamnese", specialty: "Processamento Auditivo", price: 375 },
  { category: "Anamnese", specialty: "Psicologia", price: 308 },
  { category: "Anamnese", specialty: "Psicomotricidade", price: 308 },
  { category: "Anamnese", specialty: "Psicopedagogia", price: 308 },
  { category: "Anamnese", specialty: "Terapia Alimentar", price: 308 },
  { category: "Anamnese", specialty: "Terapia Ocupacional", price: 308 },
  { category: "Avaliação", specialty: "ABA", price: 297 },
  { category: "Avaliação", specialty: "Denver", price: 297 },
  { category: "Avaliação", specialty: "Estimulação Transcraniana ETCC", price: 297 },
  { category: "Avaliação", specialty: "Fisioterapia Motora", price: 297 },
  { category: "Avaliação", specialty: "Fisioterapia Respiratória", price: 297 },
  { category: "Avaliação", specialty: "Fonoaudiologia", price: 297 },
  { category: "Avaliação", specialty: "Integração Sensorial", price: 308 },
  { category: "Avaliação", specialty: "Musicoterapia", price: 297 },
  { category: "Avaliação", specialty: "Neuropsicologia", price: 386 },
  { category: "Avaliação", specialty: "Psicologia", price: 297 },
  { category: "Avaliação", specialty: "Psicomotricidade", price: 297 },
  { category: "Avaliação", specialty: "Psicopedagogia", price: 297 },
  { category: "Avaliação", specialty: "Terapia Ocupacional", price: 297 },
  { category: "Devolutiva", specialty: "ABA", price: 286 },
  { category: "Devolutiva", specialty: "Denver", price: 286 },
  { category: "Devolutiva", specialty: "Estimulação Transcraniana ETCC", price: 286 },
  { category: "Devolutiva", specialty: "Fisioterapia Aquática", price: 286 },
  { category: "Devolutiva", specialty: "Fisioterapia Motora", price: 286 },
  { category: "Devolutiva", specialty: "Fisioterapia Respiratória", price: 286 },
  { category: "Devolutiva", specialty: "Fonoaudiologia", price: 286 },
  { category: "Devolutiva", specialty: "Integração Sensorial", price: 297 },
  { category: "Devolutiva", specialty: "Musicoterapia", price: 286 },
  { category: "Devolutiva", specialty: "Neuropsicologia", price: 386 },
  { category: "Devolutiva", specialty: "Psicologia", price: 286 },
  { category: "Devolutiva", specialty: "Psicomotricidade", price: 286 },
  { category: "Devolutiva", specialty: "Psicopedagogia", price: 286 },
  { category: "Devolutiva", specialty: "Terapia Alimentar", price: 286 },
  { category: "Devolutiva", specialty: "Terapia Ocupacional", price: 286 },
  { category: "Tratamento", specialty: "ABA", price: 274 },
  { category: "Tratamento", specialty: "Assistente Terapêutico", price: 274 },
  { category: "Tratamento", specialty: "Denver", price: 274 },
  { category: "Tratamento", specialty: "DMI", price: 330 },
  { category: "Tratamento", specialty: "Equoterapia", price: 560 },
  { category: "Tratamento", specialty: "Fisioterapia Aquática", price: 297 },
  { category: "Tratamento", specialty: "Fisioterapia Motora", price: 274 },
  { category: "Tratamento", specialty: "Fisioterapia Respiratória", price: 274 },
  { category: "Tratamento", specialty: "Fonoaudiologia", price: 274 },
  { category: "Tratamento", specialty: "Integração Sensorial", price: 297 },
  { category: "Tratamento", specialty: "Musicoterapia", price: 274 },
  { category: "Tratamento", specialty: "Psicologia", price: 274 },
  { category: "Tratamento", specialty: "Psicomotricidade", price: 274 },
  { category: "Tratamento", specialty: "Psicopedagogia", price: 274 },
  { category: "Tratamento", specialty: "Saber", price: 274 },
  { category: "Tratamento", specialty: "Terapia ABA", price: 274 },
  { category: "Tratamento", specialty: "Terapia ABA e AT", price: 274 },
  { category: "Tratamento", specialty: "Terapia Alimentar", price: 274 },
  { category: "Tratamento", specialty: "Terapia Ocupacional", price: 274 },
  { category: "Tratamento", specialty: "Therasuit", price: 353 },
  { category: "Consulta", specialty: "Nutrição", price: 386 },
  { category: "Exame", specialty: "PAC", price: 554 },
  { category: "Outros", specialty: "Coaching Parental", price: 274 },
  { category: "Outros", specialty: "Coordenação de Caso", price: 274 },
  { category: "Outros", specialty: "Coordenação de Caso AT", price: 274 },
  { category: "Outros", specialty: "Coordenação de Caso Escola", price: 274 },
  { category: "Outros", specialty: "Coordenação de Caso Família", price: 274 },
  { category: "Outros", specialty: "Orientação à Família", price: 274 },
  { category: "Retorno", specialty: "Nutrição", price: 386 },
  { category: "Treinamento", specialty: "PAC", price: 274 },
];

const NUCLEOS = [
  "Núcleo de Autismo - ABA",
  "Núcleo de Autismo - Denver",
  "Núcleo de Autismo - Projeto Interdisciplinar",
  "Núcleo de Neuroaprendizagem",
  "Núcleo de Desenvolvimento Neuropsicomotor",
];

const CATS = [...new Set(PRICE_DATA.map(d => d.category))];
const fmt = v => Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const today = () => new Date().toLocaleDateString("pt-BR");
const net = s => { const g = s.unitPrice * s.qty; return s.discountType === "pct" ? g * (1 - s.discountPct / 100) : Math.max(0, g - s.discountAbs); };
const disc = s => s.unitPrice * s.qty - net(s);

export default function App() {
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState(today());
  const [nucleo, setNucleo] = useState("");
  const [services, setServices] = useState([]);
  const [cat, setCat] = useState("");
  const [spec, setSpec] = useState("");
  const [qty, setQty] = useState(1);
  const [sdType, setSdType] = useState("pct");
  const [sdPct, setSdPct] = useState(0);
  const [sdAbs, setSdAbs] = useState(0);
  const [gdType, setGdType] = useState("pct");
  const [gdPct, setGdPct] = useState(0);
  const [gdAbs, setGdAbs] = useState(0);
  const dragItem = useRef(null);
  const dragOver = useRef(null);

  const specs = cat ? PRICE_DATA.filter(d => d.category === cat).map(d => d.specialty) : [];
  const selItem = PRICE_DATA.find(d => d.category === cat && d.specialty === spec);

  const addSvc = () => {
    if (!selItem) return;
    setServices(p => [...p, { id: Date.now(), category: cat, specialty: spec, qty, unitPrice: selItem.price, discountType: sdType, discountPct: sdPct, discountAbs: sdAbs }]);
    setCat(""); setSpec(""); setQty(1); setSdPct(0); setSdAbs(0);
  };

  const dragStart = i => { dragItem.current = i; };
  const dragEnter = i => { dragOver.current = i; };
  const dragEnd = () => {
    if (dragItem.current === null || dragOver.current === null || dragItem.current === dragOver.current) { dragItem.current = null; dragOver.current = null; return; }
    const arr = [...services];
    arr.splice(dragOver.current, 0, arr.splice(dragItem.current, 1)[0]);
    setServices(arr); dragItem.current = null; dragOver.current = null;
  };

  const subBruto = services.reduce((a, s) => a + s.unitPrice * s.qty, 0);
  const subDisc = services.reduce((a, s) => a + disc(s), 0);
  const subLiq = subBruto - subDisc;
  const gDisc = gdType === "pct" ? subLiq * gdPct / 100 : Math.min(gdAbs, subLiq);
  const total = subLiq - gDisc;

  const handlePrint = () => {
    const sigSrc = `data:image/jpeg;base64,${SIG_B64}`;
    const logoSrc = `data:image/jpeg;base64,${LOGO_B64}`;

    const rows = services.map(s => {
      const d = disc(s); const n = net(s);
      const dl = s.discountType === "pct" && s.discountPct > 0 ? s.discountPct + "%" : s.discountType === "abs" && s.discountAbs > 0 ? fmt(s.discountAbs) : "—";
      return `<tr><td><span class="badge">${s.category}</span>${s.specialty}</td><td class="r">${s.qty}</td><td class="r">${fmt(s.unitPrice)}</td><td class="r" style="color:${d>0?"#b07d10":"#999"}">${d>0?"−"+dl:"—"}</td><td class="r">${fmt(n)}</td></tr>`;
    }).join("");

    const discRows = [
      subDisc > 0 ? `<div class="tr disc"><span>Descontos por serviço</span><span>− ${fmt(subDisc)}</span></div>` : "",
      gDisc > 0 ? `<div class="tr disc"><span>Desconto geral ${gdType==="pct"?"("+gdPct+"%)":"(R$ fixo)"}</span><span>− ${fmt(gDisc)}</span></div>` : "",
    ].join("");

    const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8">
<title>Orçamento - ${patient}</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
@page { size: A4; margin: 12mm 10mm; }
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Nunito',sans-serif; color:#1a1a1a; background:#fff; }
.page { max-width:780px; margin:0 auto; padding:0; }
.hdr { display:flex; align-items:center; justify-content:space-between; padding-bottom:14px; border-bottom:2.5px solid #9abb5d; margin-bottom:24px; }
.logo { height:64px; width:auto; }
.title h1 { font-size:19px; font-weight:800; color:#3d6b10; text-align:right; }
.title p { font-size:12px; color:#999; text-align:right; margin-top:2px; }
.info { display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; background:#f8faf3; border-radius:8px; padding:14px; border:1px solid #d6e8b0; margin-bottom:20px; }
.ic p:first-child { font-size:9px; color:#999; text-transform:uppercase; letter-spacing:.8px; }
.ic p:last-child { font-size:13px; font-weight:700; color:#222; margin-top:2px; }
.sub { background:#f0f7e6; border-left:3px solid #9abb5d; border-radius:0 6px 6px 0; padding:9px 14px; margin-bottom:18px; font-size:12px; color:#3d6b10; font-style:italic; }
.slbl { font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#9abb5d; margin-bottom:6px; }
table { width:100%; border-collapse:collapse; margin-bottom:20px; }
thead tr { background:#3d6b10; }
thead th { color:#fff; font-size:11px; font-weight:600; padding:9px 10px; text-align:left; }
.r { text-align:right!important; }
tbody tr:nth-child(even) { background:#f8faf3; }
tbody td { padding:8px 10px; font-size:12px; color:#333; border-bottom:1px solid #edf3e4; }
.badge { display:inline-block; background:#e8f3d5; color:#3d6b10; font-size:9px; font-weight:700; padding:1px 6px; border-radius:3px; margin-right:4px; }
.totals { float:right; width:280px; margin-bottom:20px; }
.tr { display:flex; justify-content:space-between; padding:5px 0; font-size:13px; border-bottom:1px solid #eee; color:#666; }
.disc { color:#b07d10; }
.grand { display:flex; justify-content:space-between; font-size:17px; font-weight:800; color:#3d6b10; border-top:2px solid #9abb5d; padding-top:8px; margin-top:3px; }
.obs { clear:both; background:#f8faf3; border-left:3px solid #9abb5d; border-radius:0 6px 6px 0; padding:12px 16px; font-size:11px; color:#555; margin-bottom:28px; }
.obs ul { margin-top:6px; padding-left:14px; }
.obs li { margin-bottom:2px; }
.ftr { display:flex; justify-content:space-between; align-items:flex-end; padding-top:16px; border-top:1px solid #ddd; }
.ftr-info { font-size:11px; color:#888; }
.ftr-info strong { font-size:12px; color:#3d6b10; display:block; margin-bottom:3px; }
.sig-wrap { text-align:center; background:#ffffff; padding:4px; }
.sig-img { height:70px; width:auto; display:block; margin:0 auto; background:#ffffff; }
</style></head><body><div class="page">
<div class="hdr">
  <img class="logo" src="${logoSrc}">
  <div class="title"><h1>Proposta de Orçamento</h1><p>Válido por 30 dias · Emitido em ${date}</p></div>
</div>
<div class="info">
  <div class="ic"><p>Paciente</p><p>${patient}</p></div>
  <div class="ic"><p>Data</p><p>${date}</p></div>
  <div class="ic"><p>Núcleo</p><p>${nucleo||"—"}</p></div>
</div>
<div class="sub">Atendimentos terapêuticos especializados, conduzidos por equipe interdisciplinar em setting clínico, com cuidado humanizado e foco no desenvolvimento integral, na comunicação, na autonomia e na inclusão de cada paciente.</div>
<div class="slbl">Serviços</div>
<table>
  <thead><tr>
    <th>Descrição</th>
    <th class="r" style="width:40px">Qtd</th>
    <th class="r" style="width:90px">Valor Unit.</th>
    <th class="r" style="width:80px">Desconto</th>
    <th class="r" style="width:100px">Total Líquido</th>
  </tr></thead>
  <tbody>${rows}</tbody>
</table>
<div class="totals">
  <div class="tr"><span>Subtotal bruto</span><span>${fmt(subBruto)}</span></div>
  ${discRows}
  <div class="grand"><span>Total</span><span>${fmt(total)}</span></div>
</div>
<div class="obs"><strong>Observações:</strong><ul>
  <li>Orçamento elaborado conforme indicações do laudo médico e considerando quatro semanas no mês.</li>
  <li>A apresentação deste orçamento não garante disponibilidade imediata de agenda.</li>
  <li>A grade terapêutica será construída de acordo com a avaliação clínica, a necessidade da criança e a disponibilidade da família, podendo alterar o valor final.</li>
  <li>A coordenação de caso é fundamental para a condução dos protocolos DENVER e ABA.</li>
  <li>Os valores seguem a tabela vigente de atendimentos da clínica e estão sujeitos a reajuste anual, sempre no mês de janeiro.</li>
  <li>Todo desconto ou negociação baseada na intensidade do tratamento deverá ser avaliado e aprovado pela gestão da clínica.</li>
</ul></div>
<div class="ftr">
  <div class="ftr-info">
    <strong>Espaço CEL – Corpo e Linguagem</strong>
    CNPJ: 04.801.934/001-83<br>
    📞 +55 21 98897-6293 &nbsp; 🌐 espacocel.com.br<br>
    ✉ faleconosco@espacocel.com.br
  </div>
  <div class="sig-wrap">
    <img class="sig-img" src="${sigSrc}">
    <div style="font-size:11px;color:#1a3a8f;text-align:center;margin-top:4px;line-height:1.6">
      <strong style="font-size:12px">Jane F A Wanderley</strong><br>
      Gerente ADM e de Relacionamento<br>
      Espaço CEL - Corpo e Linguagem<br>
      CNPJ: 04.801.934/0001-83
    </div>
  </div>
</div>
</div></body></html>`;

    const w = window.open("", "_blank");
    w.document.open();
    w.document.write(html);
    w.document.close();
    w.document.title = "Orçamento - " + patient;
    w.focus();
    setTimeout(() => w.print(), 800);
  };

  const G = ({ ch }) => <div style={{display:"grid",gap:12}}>{ch}</div>;
  const canAdd = cat && spec && qty > 0;
  const canGen = patient && date && services.length > 0;

  return (
    <div style={{fontFamily:"'Nunito',sans-serif",background:"#f4f8ed",minHeight:"100vh",paddingBottom:48}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        *{box-sizing:border-box}
        .ci{width:100%;padding:10px 14px;border:1.5px solid #d4e8a8;border-radius:8px;font-size:14px;background:#fff;color:#222;outline:none;font-family:inherit;transition:border-color .2s}
        .ci:focus{border-color:#9abb5d;box-shadow:0 0 0 3px rgba(154,187,93,.15)}
        .ci:disabled{background:#f5f5f5;color:#bbb}
        label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#6b9a2e;margin-bottom:4px;display:block}
        .card{background:#fff;border-radius:14px;padding:22px;border:1px solid #ddedb8}
        .sh{font-size:13px;font-weight:700;color:#3d6b10;text-transform:uppercase;letter-spacing:.8px;margin-bottom:14px;display:flex;align-items:center;gap:8px}
        .tag{display:inline-block;background:#e8f3d5;color:#3d6b10;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px}
        .dpill{display:inline-block;background:#fff8e6;color:#b07d10;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px}
        .srow{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;background:#f8faf3;border-radius:8px;margin-bottom:8px;border:1px solid #e0edca;cursor:grab;user-select:none}
        .srow:active{cursor:grabbing;opacity:.5}
        .trow{display:flex;justify-content:space-between;padding:6px 0;font-size:14px;border-bottom:1px solid #eee}
        .tab{padding:5px 14px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;border:1.5px solid transparent;font-family:inherit}
        .tab.on{background:#9abb5d;color:#fff;border-color:#9abb5d}
        .tab.off{background:#fff;color:#6b9a2e;border-color:#d4e8a8}
        .btn-g{background:#9abb5d;color:#fff;border:none;border-radius:8px;padding:10px 18px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;width:100%}
        .btn-g:disabled{background:#c8dfa4;cursor:not-allowed}
        .btn-d{background:#3d6b10;color:#fff;border:none;border-radius:8px;padding:13px 20px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;width:100%}
        .btn-d:disabled{background:#aaa;cursor:not-allowed}
        .btn-x{background:#fff0f0;color:#c0392b;border:1.5px solid #f5c6c6;border-radius:8px;padding:5px 10px;font-size:13px;cursor:pointer;font-family:inherit}
        .drag{color:#ccc;font-size:16px;margin-top:2px;flex-shrink:0}
      `}</style>

      <div style={{background:"#fff",padding:"14px 32px",display:"flex",alignItems:"center",gap:16,borderBottom:"2px solid #9abb5d",boxShadow:"0 2px 8px rgba(0,0,0,.06)",marginBottom:28}}>
        <img src={`data:image/jpeg;base64,${LOGO_B64}`} style={{height:64,width:"auto"}} alt="CEL" />
        <div style={{borderLeft:"1.5px solid #e0edca",paddingLeft:16}}>
          <div style={{fontWeight:800,fontSize:18,color:"#3d6b10"}}>Gerador de Orçamento</div>
          <div style={{fontSize:11,color:"#999",marginTop:1}}>Espaço CEL · Tabela de Preços 2026</div>
        </div>
        <div style={{marginLeft:"auto",textAlign:"right"}}>
          <div style={{fontSize:11,color:"#aaa"}}>Valores Reajustados</div>
          <div style={{fontSize:13,color:"#3d6b10",fontWeight:700}}>2026</div>
        </div>
      </div>

      <div style={{maxWidth:960,margin:"0 auto",padding:"0 20px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
        <div style={{display:"flex",flexDirection:"column",gap:20}}>
          <div className="card">
            <div className="sh">📋 Dados do Paciente</div>
            <div style={{display:"grid",gap:12}}>
              <div><label>Nome do Paciente *</label><input className="ci" placeholder="Nome completo" value={patient} onChange={e=>setPatient(e.target.value)}/></div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <div><label>Data</label><input className="ci" value={date} onChange={e=>setDate(e.target.value)}/></div>
                <div><label>Núcleo</label>
                  <select className="ci" value={nucleo} onChange={e=>setNucleo(e.target.value)}>
                    <option value="">Selecionar...</option>
                    {NUCLEOS.map(n=><option key={n}>{n}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="sh">➕ Adicionar Serviço</div>
            <div style={{display:"grid",gap:12}}>
              <div><label>1ª Seleção — Categoria</label>
                <select className="ci" value={cat} onChange={e=>{setCat(e.target.value);setSpec("");}}>
                  <option value="">Selecionar categoria...</option>
                  {CATS.map(c=><option key={c}>{c}</option>)}
                </select>
              </div>
              <div><label>2ª Seleção — Especialidade</label>
                <select className="ci" value={spec} onChange={e=>setSpec(e.target.value)} disabled={!cat}>
                  <option value="">{cat?"Selecionar especialidade...":"Selecione uma categoria primeiro"}</option>
                  {specs.map(s=><option key={s}>{s}</option>)}
                </select>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <div><label>Qtd. Atendimentos</label><input className="ci" type="number" min="1" value={qty} onChange={e=>setQty(Math.max(1,parseInt(e.target.value)||1))}/></div>
                <div><label>Valor Unitário</label><input className="ci" disabled value={selItem?fmt(selItem.price):"—"} style={{color:selItem?"#3d6b10":"#ccc",fontWeight:700}}/></div>
              </div>
              <div style={{background:"#fffbf0",border:"1px solid #f5e0a0",borderRadius:10,padding:"14px 14px 10px"}}>
                <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",color:"#b07d10",marginBottom:10}}>🏷 Desconto neste serviço (opcional)</div>
                <div style={{display:"flex",gap:8,marginBottom:10}}>
                  <button className={`tab ${sdType==="pct"?"on":"off"}`} onClick={()=>setSdType("pct")}>% Percentual</button>
                  <button className={`tab ${sdType==="abs"?"on":"off"}`} onClick={()=>setSdType("abs")}>R$ Fixo</button>
                </div>
                {sdType==="pct"?(
                  <div style={{display:"grid",gridTemplateColumns:"1fr 72px",gap:8,alignItems:"end"}}>
                    <div><label>%</label><input type="range" className="ci" min={0} max={100} step={0.5} value={sdPct} onChange={e=>setSdPct(parseFloat(e.target.value))} style={{padding:"6px 0"}}/></div>
                    <div><label>&nbsp;</label><input className="ci" type="number" min={0} max={100} value={sdPct} onChange={e=>setSdPct(Math.min(100,Math.max(0,parseFloat(e.target.value)||0)))}/></div>
                  </div>
                ):(
                  <div><label>R$</label><input className="ci" type="number" min={0} value={sdAbs} onChange={e=>setSdAbs(Math.max(0,parseFloat(e.target.value)||0))}/></div>
                )}
                {selItem&&(sdType==="pct"?sdPct>0:sdAbs>0)&&(
                  <div style={{marginTop:10,display:"flex",justifyContent:"space-between",fontSize:13}}>
                    <span style={{color:"#888"}}>Com desconto ({qty}x):</span>
                    <span style={{fontWeight:700,color:"#3d6b10"}}>{fmt(sdType==="pct"?selItem.price*qty*(1-sdPct/100):Math.max(0,selItem.price*qty-sdAbs))}</span>
                  </div>
                )}
              </div>
              {selItem&&<div style={{background:"#f0f7e6",borderRadius:8,padding:"10px 14px",display:"flex",justifyContent:"space-between",border:"1px solid #d4e8a8"}}>
                <span style={{fontSize:13,color:"#666"}}>Total bruto ({qty}x)</span>
                <span style={{fontSize:15,fontWeight:700,color:"#3d6b10"}}>{fmt(selItem.price*qty)}</span>
              </div>}
              <button className="btn-g" onClick={addSvc} disabled={!canAdd}>+ Adicionar ao Orçamento</button>
            </div>
          </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:20}}>
          <div className="card" style={{flex:1}}>
            <div className="sh">🗂 Serviços Adicionados
              {services.length>0&&<span className="tag" style={{marginLeft:"auto"}}>{services.length} item{services.length>1?"s":""}</span>}
            </div>
            {services.length===0?(
              <div style={{textAlign:"center",padding:"32px 0",color:"#bbb",fontSize:13}}>
                <div style={{fontSize:36,marginBottom:8}}>📋</div>Nenhum serviço adicionado ainda.
              </div>
            ):(
              <>
                <div style={{fontSize:11,color:"#aaa",marginBottom:8}}>⠿ Arraste para reordenar</div>
                {services.map((s,i)=>{
                  const d=disc(s),n=net(s),g=s.unitPrice*s.qty,hd=d>0;
                  return <div key={s.id} className="srow" draggable onDragStart={()=>dragStart(i)} onDragEnter={()=>dragEnter(i)} onDragEnd={dragEnd} onDragOver={e=>e.preventDefault()}>
                    <div className="drag">⠿</div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",gap:6,alignItems:"center",marginBottom:3}}>
                        <span className="tag">{s.category}</span>
                        <span style={{fontSize:13,fontWeight:700,color:"#222"}}>{s.specialty}</span>
                      </div>
                      <div style={{fontSize:12,color:"#888"}}>{s.qty}x {fmt(s.unitPrice)}{hd&&<span style={{marginLeft:6}}><span className="dpill">−{s.discountType==="pct"?s.discountPct+"%":fmt(s.discountAbs)}</span></span>}</div>
                      {hd&&<div style={{fontSize:11,color:"#b07d10",marginTop:2}}>Bruto: {fmt(g)} → −{fmt(d)}</div>}
                    </div>
                    <div style={{textAlign:"right",minWidth:90}}>
                      {hd&&<div style={{fontSize:11,color:"#aaa",textDecoration:"line-through"}}>{fmt(g)}</div>}
                      <div style={{fontSize:14,fontWeight:700,color:"#3d6b10"}}>{fmt(n)}</div>
                    </div>
                    <button className="btn-x" onClick={()=>setServices(p=>p.filter(x=>x.id!==s.id))}>✕</button>
                  </div>;
                })}
              </>
            )}
          </div>

          <div className="card">
            <div className="sh">💰 Desconto Geral & Total</div>
            <div style={{marginBottom:14}}>
              <label>Tipo de desconto geral</label>
              <div style={{display:"flex",gap:8}}>
                <button className={`tab ${gdType==="pct"?"on":"off"}`} onClick={()=>setGdType("pct")}>% Percentual</button>
                <button className={`tab ${gdType==="abs"?"on":"off"}`} onClick={()=>setGdType("abs")}>R$ Fixo</button>
              </div>
            </div>
            {gdType==="pct"?(
              <div style={{display:"grid",gridTemplateColumns:"1fr 72px",gap:10,alignItems:"end",marginBottom:16}}>
                <div><label>Desconto geral (%)</label><input type="range" className="ci" min={0} max={100} step={0.5} value={gdPct} onChange={e=>setGdPct(parseFloat(e.target.value))} style={{padding:"6px 0"}}/></div>
                <div><label>&nbsp;</label><input className="ci" type="number" min={0} max={100} value={gdPct} onChange={e=>setGdPct(Math.min(100,Math.max(0,parseFloat(e.target.value)||0)))}/></div>
              </div>
            ):(
              <div style={{marginBottom:16}}><label>Desconto geral (R$)</label><input className="ci" type="number" min={0} value={gdAbs} onChange={e=>setGdAbs(Math.max(0,parseFloat(e.target.value)||0))}/></div>
            )}
            <div style={{borderTop:"1.5px solid #e8f0d8",paddingTop:12}}>
              <div className="trow"><span style={{color:"#888"}}>Subtotal bruto</span><span style={{fontWeight:600}}>{fmt(subBruto)}</span></div>
              {subDisc>0&&<div className="trow"><span style={{color:"#b07d10"}}>Descontos por serviço</span><span style={{color:"#b07d10",fontWeight:600}}>− {fmt(subDisc)}</span></div>}
              {gDisc>0&&<div className="trow"><span style={{color:"#b07d10"}}>Desconto geral <span className="dpill">{gdType==="pct"?gdPct+"%":"R$ fixo"}</span></span><span style={{color:"#b07d10",fontWeight:600}}>− {fmt(gDisc)}</span></div>}
              <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0 0",fontSize:20,fontWeight:800,color:"#3d6b10",borderTop:"2px solid #9abb5d",marginTop:4}}>
                <span>Total</span><span>{fmt(total)}</span>
              </div>
            </div>
            <button className="btn-d" style={{marginTop:16}} onClick={handlePrint} disabled={!canGen}>📄 Gerar PDF do Orçamento</button>
            {!canGen&&<div style={{fontSize:11,color:"#bbb",textAlign:"center",marginTop:8}}>Preencha o nome e adicione ao menos um serviço.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

<area shape="" coords="" href="" alt="" />