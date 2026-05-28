import { useState, useRef } from "react";

const LOGO_B64 = "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";
const SIG_B64 = "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";

const PRICE_DATA = [
  { category: "Anamnese", specialty: "ABA", price: 308 },
  { category: "Anamnese", specialty: "Denver", price: 308 },
  { category: "Anamnese", specialty: "Estimulação Transcraniana ETCC", price: 308 },
  { category: "Anamnese", specialty: "Fisioterapia Motora", price: 308 },
  { category: "Anamnese", specialty: "Fisioterapia Respiratória", price: 308 },
  { category: "Anamnese", specialty: "Fonoaudiologia", price: 308 },
  { category: "Anamnese", specialty: "Fisioterapia Aquática", price: 308 },
  { category: "Anamnese", specialty: "Integração Sensorial", price: 330 },
  { category: "Anamnese", specialty: "Musicoterapia", price: 308 },
  { category: "Anamnese", specialty: "Neuropsicologia", price: 375 },
  { category: "Anamnese", specialty: "Processamento Auditivo", price: 375 },
  { category: "Anamnese", specialty: "Psicologia", price: 308 },
  { category: "Anamnese", specialty: "Psicomotricidade", price: 308 },
  { category: "Anamnese", specialty: "Psicopedagogia", price: 308 },
  { category: "Anamnese", specialty: "Equoterapia", price: 560 },
  { category: "Anamnese", specialty: "Terapia Alimentar", price: 308 },
  { category: "Anamnese", specialty: "Terapia Ocupacional", price: 308 },
  { category: "Anamnese", specialty: "Interdisciplinar", price: 308 },
  { category: "Anamnese", specialty: "G.ESDM", price: 308 },
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
  { category: "Devolutiva", specialty: "Fisioterapia Motora", price: 286 },
  { category: "Devolutiva", specialty: "Fisioterapia Respiratória", price: 286 },
  { category: "Devolutiva", specialty: "Fonoaudiologia", price: 286 },
  { category: "Devolutiva", specialty: "Integração Sensorial", price: 297 },
  { category: "Devolutiva", specialty: "Musicoterapia", price: 286 },
  { category: "Devolutiva", specialty: "Neuropsicologia", price: 386 },
  { category: "Devolutiva", specialty: "Psicologia", price: 286 },
  { category: "Devolutiva", specialty: "Psicomotricidade", price: 286 },
  { category: "Devolutiva", specialty: "Psicopedagogia", price: 286 },
  { category: "Devolutiva", specialty: "Fisioterapia Aquática", price: 286 },
  { category: "Devolutiva", specialty: "Terapia Alimentar", price: 286 },
  { category: "Devolutiva", specialty: "Terapia Ocupacional", price: 286 },
  { category: "Tratamento", specialty: "ABA", price: 274 },
  { category: "Tratamento", specialty: "Denver", price: 274 },
  { category: "Tratamento", specialty: "Fisioterapia Motora", price: 274 },
  { category: "Tratamento", specialty: "Fisioterapia Respiratória", price: 274 },
  { category: "Tratamento", specialty: "Fonoaudiologia", price: 274 },
  { category: "Tratamento", specialty: "Fisioterapia Aquática", price: 297 },
  { category: "Tratamento", specialty: "Integração Sensorial", price: 297 },
  { category: "Tratamento", specialty: "Musicoterapia", price: 274 },
  { category: "Tratamento", specialty: "Psicologia", price: 274 },
  { category: "Tratamento", specialty: "Psicomotricidade", price: 274 },
  { category: "Tratamento", specialty: "Psicopedagogia", price: 274 },
  { category: "Tratamento", specialty: "Saber", price: 274 },
  { category: "Tratamento", specialty: "Terapia Alimentar", price: 274 },
  { category: "Tratamento", specialty: "Terapia Ocupacional", price: 274 },
  { category: "Tratamento", specialty: "Therasuit", price: 353 },
  { category: "Tratamento", specialty: "DMI", price: 330 },
  { category: "Tratamento", specialty: "Equoterapia", price: 560 },
  { category: "Tratamento", specialty: "Terapia ABA", price: 274 },
  { category: "Consulta", specialty: "Nutrição", price: 386 },
  { category: "Exame", specialty: "PAC", price: 554 },
  { category: "Outros", specialty: "Coaching Parental", price: 274 },
  { category: "Outros", specialty: "Coordenação de Caso AT", price: 274 },
  { category: "Outros", specialty: "Coordenação de Caso Escola", price: 274 },
  { category: "Outros", specialty: "Coordenação de Caso Família", price: 274 },
  { category: "Outros", specialty: "Orientação à Família", price: 274 },
  { category: "Outros", specialty: "Coordenação de Caso", price: 274 },
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

const CATEGORIES = [...new Set(PRICE_DATA.map((d) => d.category))];
const fmtBRL = (v) => Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const today = () => new Date().toLocaleDateString("pt-BR");
const serviceNet = (s) => {
  const gross = s.unitPrice * s.qty;
  if (s.discountType === "pct") return gross * (1 - s.discountPct / 100);
  return Math.max(0, gross - s.discountAbs);
};
const serviceDiscount = (s) => s.unitPrice * s.qty - serviceNet(s);

export default function App() {
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState(today());
  const [nucleo, setNucleo] = useState("");
  const [services, setServices] = useState([]);

  const [selCategory, setSelCategory] = useState("");
  const [selSpecialty, setSelSpecialty] = useState("");
  const [selQty, setSelQty] = useState(1);
  const [selDiscountType, setSelDiscountType] = useState("pct");
  const [selDiscountPct, setSelDiscountPct] = useState(0);
  const [selDiscountAbs, setSelDiscountAbs] = useState(0);

  const [globalDiscountType, setGlobalDiscountType] = useState("pct");
  const [globalDiscountPct, setGlobalDiscountPct] = useState(0);
  const [globalDiscountAbs, setGlobalDiscountAbs] = useState(0);

  // Drag-and-drop state
  const dragItem = useRef(null);
  const dragOver = useRef(null);

  const handleDragStart = (index) => { dragItem.current = index; };
  const handleDragEnter = (index) => { dragOver.current = index; };
  const handleDragEnd = () => {
    if (dragItem.current === null || dragOver.current === null || dragItem.current === dragOver.current) {
      dragItem.current = null; dragOver.current = null; return;
    }
    const updated = [...services];
    const dragged = updated.splice(dragItem.current, 1)[0];
    updated.splice(dragOver.current, 0, dragged);
    setServices(updated);
    dragItem.current = null;
    dragOver.current = null;
  };

  const specialties = selCategory
    ? PRICE_DATA.filter((d) => d.category === selCategory).map((d) => d.specialty)
    : [];
  const selectedItem = PRICE_DATA.find((d) => d.category === selCategory && d.specialty === selSpecialty);

  const addService = () => {
    if (!selectedItem) return;
    setServices((prev) => [...prev, {
      id: Date.now(), category: selCategory, specialty: selSpecialty,
      qty: selQty, unitPrice: selectedItem.price,
      discountType: selDiscountType, discountPct: selDiscountPct, discountAbs: selDiscountAbs,
    }]);
    setSelCategory(""); setSelSpecialty(""); setSelQty(1); setSelDiscountPct(0); setSelDiscountAbs(0);
  };

  const removeService = (id) => setServices((prev) => prev.filter((s) => s.id !== id));

  const subtotalBruto = services.reduce((acc, s) => acc + s.unitPrice * s.qty, 0);
  const subtotalDescontos = services.reduce((acc, s) => acc + serviceDiscount(s), 0);
  const subtotalLiquido = subtotalBruto - subtotalDescontos;
  const globalDiscount = globalDiscountType === "pct"
    ? subtotalLiquido * (globalDiscountPct / 100)
    : Math.min(globalDiscountAbs, subtotalLiquido);
  const total = subtotalLiquido - globalDiscount;

  const canAdd = selCategory && selSpecialty && selQty > 0;
  const canGenerate = patient && date && services.length > 0;

  const handlePrint = () => {
    const printContent = `<!DOCTYPE html><html><head>
<meta charset="utf-8">
<title>Orçamento - ${patient}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Nunito',sans-serif;background:#fff;color:#1a1a1a}
  .page{max-width:800px;margin:0 auto;padding:44px 40px}
  .header{display:flex;align-items:center;justify-content:space-between;margin-bottom:32px;padding-bottom:18px;border-bottom:2px solid #9abb5d}
  .logo-img{height:80px;width:auto}
  .doc-title h1{font-size:20px;font-weight:700;color:#3d6b10;text-align:right}
  .doc-title p{font-size:13px;color:#888;text-align:right;margin-top:2px}
  .info-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:28px;background:#f8faf3;border-radius:10px;padding:16px;border:1px solid #d6e8b0}
  .info-cell p:first-child{font-size:10px;color:#888;text-transform:uppercase;letter-spacing:.8px}
  .info-cell p:last-child{font-size:14px;font-weight:700;color:#222;margin-top:3px}
  .subtitle-box{background:#f0f7e6;border-left:4px solid #9abb5d;border-radius:0 8px 8px 0;padding:10px 16px;margin-bottom:20px;font-size:13px;color:#3d6b10;font-style:italic}
  .sec-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#9abb5d;margin-bottom:8px}
  table{width:100%;border-collapse:collapse;margin-bottom:24px}
  thead tr{background:#3d6b10}
  thead th{color:#fff;font-size:12px;font-weight:600;text-align:left;padding:10px 12px}
  thead th.r{text-align:right}
  tbody tr:nth-child(even){background:#f8faf3}
  tbody td{padding:9px 12px;font-size:13px;color:#333;border-bottom:1px solid #edf3e4}
  tbody td.r{text-align:right;font-weight:600}
  .badge{display:inline-block;background:#e8f3d5;color:#3d6b10;font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px;margin-right:5px}
  .totals{margin-left:auto;width:300px}
  .trow{display:flex;justify-content:space-between;padding:6px 0;font-size:14px;border-bottom:1px solid #eee}
  .trow.disc{color:#b07d10}
  .trow.sub{color:#666}
  .trow.grand{font-size:18px;font-weight:800;color:#3d6b10;border:none;border-top:2px solid #9abb5d;padding-top:10px;margin-top:4px}
  .obs{margin-top:24px;background:#f8faf3;border-left:4px solid #9abb5d;border-radius:0 8px 8px 0;padding:14px 18px;font-size:12px;color:#555}
  .obs ul{margin-top:8px;padding-left:16px}.obs li{margin-bottom:3px}
  .footer{margin-top:40px;padding-top:18px;border-top:1px solid #e0e0e0;display:flex;justify-content:space-between;align-items:flex-end;font-size:12px;color:#888}
  .sig-img{height:110px;width:auto;display:block;margin-bottom:4px}
  @media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style></head><body><div class="page">
  <div class="header">
    <img class="logo-img" src="data:image/jpeg;base64,${LOGO_B64}" alt="Espaço CEL" />
    <div class="doc-title">
      <h1>Proposta de Orçamento</h1>
      <p>Válido por 30 dias &nbsp;·&nbsp; Emitido em ${date}</p>
    </div>
  </div>
  <div class="info-grid">
    <div class="info-cell"><p>Paciente</p><p>${patient}</p></div>
    <div class="info-cell"><p>Data</p><p>${date}</p></div>
    <div class="info-cell"><p>Núcleo</p><p>${nucleo || "—"}</p></div>
  </div>
  <div class="subtitle-box">Atendimentos terapêuticos especializados, conduzidos por equipe interdisciplinar em setting clínico, com cuidado humanizado e foco no desenvolvimento integral, na comunicação, na autonomia e na inclusão de cada paciente.</div>
  <div class="sec-label">Serviços</div>
  <table>
    <thead><tr>
      <th>Descrição</th>
      <th class="r" style="width:50px">Qtd</th>
      <th class="r" style="width:100px">Valor Unit.</th>
      <th class="r" style="width:90px">Desconto</th>
      <th class="r" style="width:110px">Total Líquido</th>
    </tr></thead>
    <tbody>
      ${services.map((s) => {
        const disc = serviceDiscount(s);
        const net = serviceNet(s);
        const discLabel = s.discountType === "pct" && s.discountPct > 0
          ? s.discountPct + "%"
          : s.discountType === "abs" && s.discountAbs > 0
          ? fmtBRL(s.discountAbs) : "—";
        return "<tr><td><span class=\"badge\">" + s.category + "</span>" + s.specialty + "</td><td class=\"r\">" + s.qty + "</td><td class=\"r\">" + fmtBRL(s.unitPrice) + "</td><td class=\"r\" style=\"color:" + (disc>0?"#b07d10":"#aaa") + "\">" + (disc > 0 ? "−" + discLabel : "—") + "</td><td class=\"r\">" + fmtBRL(net) + "</td></tr>";
      }).join("")}
    </tbody>
  </table>
  <div class="totals">
    <div class="trow sub"><span>Subtotal bruto</span><span>${fmtBRL(subtotalBruto)}</span></div>
    ${subtotalDescontos > 0 ? "<div class=\"trow disc\"><span>Descontos por serviço</span><span>− " + fmtBRL(subtotalDescontos) + "</span></div>" : ""}
    ${globalDiscount > 0 ? "<div class=\"trow disc\"><span>Desconto geral " + (globalDiscountType === "pct" ? "(" + globalDiscountPct + "%)" : "(R$ fixo)") + "</span><span>− " + fmtBRL(globalDiscount) + "</span></div>" : ""}
    <div class="trow grand"><span>Total</span><span>${fmtBRL(total)}</span></div>
  </div>
  <div class="obs"><strong>Observações:</strong>
    <ul>
      <li>Cada atendimento tem duração de 45 minutos.</li>
      <li>Correspondente a quatro semanas.</li>
      <li>O valor final depende da grade terapêutica de cada criança e a quantidade de dias úteis.</li>
      <li>O reajuste anual ocorre sempre no mês de janeiro.</li>
      <li>Em caso de ausência do profissional, será realizada substituição por outro profissional disponível.</li>
    </ul>
  </div>
  <div class="footer">
    <div>
      <div style="font-weight:700;color:#3d6b10;margin-bottom:4px;font-size:13px">Espaço CEL – Corpo e Linguagem</div>
      <div>CNPJ: 04.801.934/001-83</div>
      <div style="margin-top:4px">📞 +55 21 98897-6293</div>
      <div>🌐 espacocel.com.br</div>
      <div>✉ faleconosco@espacocel.com.br</div>
    </div>
    <div style="text-align:center">
      <img class="sig-img" src="data:image/png;base64,${SIG_B64}" alt="Assinatura" />
    </div>
  </div>
</div></body></html>`;

    const win = window.open("", "_blank");
    win.document.write(printContent);
    win.document.close();
    setTimeout(() => win.print(), 600);
  };

  return (
    <div style={{ fontFamily: "'Nunito','Segoe UI',sans-serif", background: "#f4f8ed", minHeight: "100vh", paddingBottom: 48 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');
        *{box-sizing:border-box}
        .ci{width:100%;padding:10px 14px;border:1.5px solid #d4e8a8;border-radius:8px;font-size:14px;background:#fff;color:#222;outline:none;transition:border-color .2s;font-family:inherit}
        .ci:focus{border-color:#9abb5d;box-shadow:0 0 0 3px rgba(154,187,93,.15)}
        .ci:disabled{background:#f5f5f5;color:#bbb}
        label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#6b9a2e;margin-bottom:4px;display:block}
        .btn{padding:10px 18px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;border:none;transition:transform .1s;font-family:inherit}
        .btn:active{transform:scale(.97)}
        .btn-green{background:#9abb5d;color:#fff}.btn-green:hover{background:#7da344}.btn-green:disabled{background:#c8dfa4;cursor:not-allowed}
        .btn-dark{background:#3d6b10;color:#fff}.btn-dark:hover{background:#2e5009}.btn-dark:disabled{background:#aaa;cursor:not-allowed}
        .btn-del{background:#fff0f0;color:#c0392b;border:1.5px solid #f5c6c6;padding:5px 10px;font-size:13px;border-radius:8px;cursor:pointer;font-family:inherit}.btn-del:hover{background:#fde8e8}
        .card{background:#fff;border-radius:14px;padding:22px;border:1px solid #ddedb8}
        .sh{font-size:13px;font-weight:700;color:#3d6b10;text-transform:uppercase;letter-spacing:.8px;margin-bottom:14px;display:flex;align-items:center;gap:8px}
        .tag{display:inline-block;background:#e8f3d5;color:#3d6b10;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px}
        .srow{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;background:#f8faf3;border-radius:8px;margin-bottom:8px;border:1px solid #e0edca;cursor:grab;transition:opacity .15s,box-shadow .15s;user-select:none}
        .srow:active{cursor:grabbing}
        .srow.dragging{opacity:.4;box-shadow:0 4px 16px rgba(0,0,0,.12)}
        .srow.dragover{border-color:#9abb5d;box-shadow:0 0 0 2px #9abb5d44}
        .trow{display:flex;justify-content:space-between;padding:6px 0;font-size:14px;border-bottom:1px solid #eee}
        .tab{padding:5px 14px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;border:1.5px solid transparent;transition:all .15s;font-family:inherit}
        .tab.on{background:#9abb5d;color:#fff;border-color:#9abb5d}
        .tab.off{background:#fff;color:#6b9a2e;border-color:#d4e8a8}
        .disc-pill{display:inline-block;background:#fff8e6;color:#b07d10;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px}
        .drag-handle{color:#ccc;font-size:16px;padding:2px 4px;cursor:grab;flex-shrink:0;margin-top:2px}
      `}</style>

      {/* Header */}
      <div style={{ background: "#fff", padding: "14px 32px", display: "flex", alignItems: "center", gap: 16, marginBottom: 28, borderBottom: "2px solid #9abb5d", boxShadow: "0 2px 8px rgba(0,0,0,.06)" }}>
        <img src={`data:image/jpeg;base64,${LOGO_B64}`} alt="Espaço CEL" style={{ height: 70, width: "auto" }} />
        <div style={{ borderLeft: "1.5px solid #e0edca", paddingLeft: 16 }}>
          <div style={{ fontWeight: 800, fontSize: 18, color: "#3d6b10", letterSpacing: -0.3 }}>Gerador de Orçamento</div>
          <div style={{ fontSize: 11, color: "#999", marginTop: 1 }}>Espaço CEL · Tabela de Preços 2026</div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div style={{ fontSize: 11, color: "#aaa" }}>Valores Reajustados</div>
          <div style={{ fontSize: 13, color: "#3d6b10", fontWeight: 700 }}>2026</div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

        {/* COLUNA ESQUERDA */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="card">
            <div className="sh">📋 Dados do Paciente</div>
            <div style={{ display: "grid", gap: 12 }}>
              <div>
                <label>Nome do Paciente *</label>
                <input className="ci" placeholder="Nome completo" value={patient} onChange={e => setPatient(e.target.value)} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div>
                  <label>Data do Orçamento</label>
                  <input className="ci" value={date} onChange={e => setDate(e.target.value)} />
                </div>
                <div>
                  <label>Núcleo</label>
                  <select className="ci" value={nucleo} onChange={e => setNucleo(e.target.value)}>
                    <option value="">Selecionar...</option>
                    {NUCLEOS.map(n => <option key={n}>{n}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="sh">➕ Adicionar Serviço</div>
            <div style={{ display: "grid", gap: 12 }}>
              <div>
                <label>1ª Seleção — Categoria</label>
                <select className="ci" value={selCategory} onChange={e => { setSelCategory(e.target.value); setSelSpecialty(""); }}>
                  <option value="">Selecionar categoria...</option>
                  {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label>2ª Seleção — Especialidade</label>
                <select className="ci" value={selSpecialty} onChange={e => setSelSpecialty(e.target.value)} disabled={!selCategory}>
                  <option value="">{selCategory ? "Selecionar especialidade..." : "Selecione uma categoria primeiro"}</option>
                  {specialties.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div>
                  <label>Qtd. de Atendimentos</label>
                  <input className="ci" type="number" min="1" value={selQty} onChange={e => setSelQty(Math.max(1, parseInt(e.target.value) || 1))} />
                </div>
                <div>
                  <label>Valor Unitário</label>
                  <input className="ci" disabled value={selectedItem ? fmtBRL(selectedItem.price) : "—"} style={{ color: selectedItem ? "#3d6b10" : "#ccc", fontWeight: 700 }} />
                </div>
              </div>

              <div style={{ background: "#fffbf0", border: "1px solid #f5e0a0", borderRadius: 10, padding: "14px 14px 10px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".8px", color: "#b07d10", marginBottom: 10 }}>
                  🏷 Desconto neste serviço (opcional)
                </div>
                <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                  <button className={`tab ${selDiscountType === "pct" ? "on" : "off"}`} onClick={() => setSelDiscountType("pct")}>% Percentual</button>
                  <button className={`tab ${selDiscountType === "abs" ? "on" : "off"}`} onClick={() => setSelDiscountType("abs")}>R$ Valor fixo</button>
                </div>
                {selDiscountType === "pct" ? (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 72px", gap: 8, alignItems: "end" }}>
                    <div>
                      <label>Desconto (%)</label>
                      <input type="range" className="ci" min={0} max={100} step={0.5} value={selDiscountPct}
                        onChange={e => setSelDiscountPct(parseFloat(e.target.value))} style={{ padding: "6px 0" }} />
                    </div>
                    <div>
                      <label>&nbsp;</label>
                      <input className="ci" type="number" min={0} max={100} step={0.5} value={selDiscountPct}
                        onChange={e => setSelDiscountPct(Math.min(100, Math.max(0, parseFloat(e.target.value) || 0)))} />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label>Desconto (R$)</label>
                    <input className="ci" type="number" min={0} step={1} value={selDiscountAbs}
                      onChange={e => setSelDiscountAbs(Math.max(0, parseFloat(e.target.value) || 0))} placeholder="0,00" />
                  </div>
                )}
                {selectedItem && (selDiscountType === "pct" ? selDiscountPct > 0 : selDiscountAbs > 0) && (
                  <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                    <span style={{ color: "#888" }}>Total com desconto ({selQty}x):</span>
                    <span style={{ fontWeight: 700, color: "#3d6b10" }}>
                      {fmtBRL(selDiscountType === "pct"
                        ? selectedItem.price * selQty * (1 - selDiscountPct / 100)
                        : Math.max(0, selectedItem.price * selQty - selDiscountAbs))}
                    </span>
                  </div>
                )}
              </div>

              {selectedItem && (
                <div style={{ background: "#f0f7e6", borderRadius: 8, padding: "10px 14px", display: "flex", justifyContent: "space-between", border: "1px solid #d4e8a8" }}>
                  <span style={{ fontSize: 13, color: "#666" }}>Total bruto ({selQty}x)</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#3d6b10" }}>{fmtBRL(selectedItem.price * selQty)}</span>
                </div>
              )}
              <button className="btn btn-green" onClick={addService} disabled={!canAdd}>+ Adicionar ao Orçamento</button>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="card" style={{ flex: 1 }}>
            <div className="sh">
              🗂 Serviços Adicionados
              {services.length > 0 && <span className="tag" style={{ marginLeft: "auto" }}>{services.length} item{services.length > 1 ? "s" : ""}</span>}
            </div>
            {services.length === 0 ? (
              <div style={{ textAlign: "center", padding: "32px 0", color: "#bbb", fontSize: 13 }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>📋</div>
                Nenhum serviço adicionado ainda.
              </div>
            ) : (
              <>
                <div style={{ fontSize: 11, color: "#aaa", marginBottom: 8, display: "flex", alignItems: "center", gap: 4 }}>
                  <span>⠿</span> Arraste para reordenar
                </div>
                {services.map((s, index) => {
                  const gross = s.unitPrice * s.qty;
                  const disc = serviceDiscount(s);
                  const net = serviceNet(s);
                  const hasDisc = disc > 0;
                  return (
                    <div
                      key={s.id}
                      className="srow"
                      draggable
                      onDragStart={() => handleDragStart(index)}
                      onDragEnter={() => handleDragEnter(index)}
                      onDragEnd={handleDragEnd}
                      onDragOver={e => e.preventDefault()}
                    >
                      <div className="drag-handle">⠿</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 3 }}>
                          <span className="tag">{s.category}</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#222" }}>{s.specialty}</span>
                        </div>
                        <div style={{ fontSize: 12, color: "#888" }}>
                          {s.qty}x {fmtBRL(s.unitPrice)}
                          {hasDisc && <span style={{ marginLeft: 6 }}><span className="disc-pill">−{s.discountType === "pct" ? `${s.discountPct}%` : fmtBRL(s.discountAbs)}</span></span>}
                        </div>
                        {hasDisc && <div style={{ fontSize: 11, color: "#b07d10", marginTop: 2 }}>Bruto: {fmtBRL(gross)} → Desc: −{fmtBRL(disc)}</div>}
                      </div>
                      <div style={{ textAlign: "right", minWidth: 90 }}>
                        {hasDisc && <div style={{ fontSize: 11, color: "#aaa", textDecoration: "line-through" }}>{fmtBRL(gross)}</div>}
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#3d6b10" }}>{fmtBRL(net)}</div>
                      </div>
                      <button className="btn-del" onClick={() => removeService(s.id)}>✕</button>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          <div className="card">
            <div className="sh">💰 Desconto Geral & Total</div>
            <div style={{ marginBottom: 14 }}>
              <label>Tipo de desconto geral</label>
              <div style={{ display: "flex", gap: 8 }}>
                <button className={`tab ${globalDiscountType === "pct" ? "on" : "off"}`} onClick={() => setGlobalDiscountType("pct")}>% Percentual</button>
                <button className={`tab ${globalDiscountType === "abs" ? "on" : "off"}`} onClick={() => setGlobalDiscountType("abs")}>R$ Valor fixo</button>
              </div>
            </div>
            {globalDiscountType === "pct" ? (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 72px", gap: 10, alignItems: "end", marginBottom: 16 }}>
                <div>
                  <label>Desconto geral (%)</label>
                  <input type="range" className="ci" min={0} max={100} step={0.5} value={globalDiscountPct}
                    onChange={e => setGlobalDiscountPct(parseFloat(e.target.value))} style={{ padding: "6px 0" }} />
                </div>
                <div>
                  <label>&nbsp;</label>
                  <input className="ci" type="number" min={0} max={100} step={0.5} value={globalDiscountPct}
                    onChange={e => setGlobalDiscountPct(Math.min(100, Math.max(0, parseFloat(e.target.value) || 0)))} />
                </div>
              </div>
            ) : (
              <div style={{ marginBottom: 16 }}>
                <label>Desconto geral (R$)</label>
                <input className="ci" type="number" min={0} step={1} value={globalDiscountAbs}
                  onChange={e => setGlobalDiscountAbs(Math.max(0, parseFloat(e.target.value) || 0))} placeholder="0,00" />
              </div>
            )}
            <div style={{ borderTop: "1.5px solid #e8f0d8", paddingTop: 12 }}>
              <div className="trow"><span style={{ color: "#888" }}>Subtotal bruto</span><span style={{ fontWeight: 600 }}>{fmtBRL(subtotalBruto)}</span></div>
              {subtotalDescontos > 0 && <div className="trow"><span style={{ color: "#b07d10" }}>Descontos por serviço</span><span style={{ color: "#b07d10", fontWeight: 600 }}>− {fmtBRL(subtotalDescontos)}</span></div>}
              {globalDiscount > 0 && (
                <div className="trow">
                  <span style={{ color: "#b07d10" }}>Desconto geral <span className="disc-pill">{globalDiscountType === "pct" ? `${globalDiscountPct}%` : "R$ fixo"}</span></span>
                  <span style={{ color: "#b07d10", fontWeight: 600 }}>− {fmtBRL(globalDiscount)}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 0", fontSize: 20, fontWeight: 800, color: "#3d6b10", borderTop: "2px solid #9abb5d", marginTop: 4 }}>
                <span>Total</span><span>{fmtBRL(total)}</span>
              </div>
            </div>
            <button className="btn btn-dark" style={{ width: "100%", marginTop: 16, padding: "13px 20px", fontSize: 15 }}
              onClick={handlePrint} disabled={!canGenerate}>
              📄 Gerar PDF do Orçamento
            </button>
            {!canGenerate && <div style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 8 }}>Preencha o nome do paciente e adicione ao menos um serviço.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
