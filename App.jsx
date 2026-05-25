import { useState } from "react";

const PRICE_DATA = [
  { category: "ANAMNESE", specialty: "ABA", price: 308 },
  { category: "ANAMNESE", specialty: "DENVER", price: 308 },
  { category: "ANAMNESE", specialty: "ESTIMULAÇÃO TRANSCRANIANA ETCC", price: 308 },
  { category: "ANAMNESE", specialty: "FISIOTERAPIA MOTORA", price: 308 },
  { category: "ANAMNESE", specialty: "FISIOTERAPIA RESPIRATÓRIA", price: 308 },
  { category: "ANAMNESE", specialty: "FONOAUDIOLOGIA", price: 308 },
  { category: "ANAMNESE", specialty: "FISIOTERAPIA AQUÁTICA", price: 308 },
  { category: "ANAMNESE", specialty: "INTEGRAÇÃO SENSORIAL", price: 330 },
  { category: "ANAMNESE", specialty: "MUSICOTERAPIA", price: 308 },
  { category: "ANAMNESE", specialty: "NEUROPSICOLOGIA", price: 375 },
  { category: "ANAMNESE", specialty: "OZONIOTERAPIA", price: 308 },
  { category: "ANAMNESE", specialty: "PROCESSAMENTO AUDITIVO", price: 375 },
  { category: "ANAMNESE", specialty: "PSICOLOGIA", price: 308 },
  { category: "ANAMNESE", specialty: "PSICOMOTRICIDADE", price: 308 },
  { category: "ANAMNESE", specialty: "PSICOPEDAGOGIA", price: 308 },
  { category: "ANAMNESE", specialty: "TERAPIA OCUPACIONAL", price: 308 },
  { category: "ANAMNESE", specialty: "INTERDISCIPLINAR", price: 308 },
  { category: "ANAMNESE", specialty: "TERAPIA ALIMENTAR", price: 308 },
  { category: "ANAMNESE", specialty: "G.ESDM", price: 308 },
  { category: "AVALIAÇÃO", specialty: "ABA", price: 297 },
  { category: "AVALIAÇÃO", specialty: "DENVER", price: 297 },
  { category: "AVALIAÇÃO", specialty: "ESTIMULAÇÃO TRANSCRANIANA ETCC", price: 297 },
  { category: "AVALIAÇÃO", specialty: "FISIOTERAPIA MOTORA", price: 297 },
  { category: "AVALIAÇÃO", specialty: "FISIOTERAPIA RESPIRATÓRIA", price: 297 },
  { category: "AVALIAÇÃO", specialty: "FONOAUDIOLOGIA", price: 297 },
  { category: "AVALIAÇÃO", specialty: "INTEGRAÇÃO SENSORIAL", price: 308 },
  { category: "AVALIAÇÃO", specialty: "MUSICOTERAPIA", price: 297 },
  { category: "AVALIAÇÃO", specialty: "NEUROPSICOLOGIA", price: 386 },
  { category: "AVALIAÇÃO", specialty: "PSICOLOGIA", price: 297 },
  { category: "AVALIAÇÃO", specialty: "PSICOMOTRICIDADE", price: 297 },
  { category: "AVALIAÇÃO", specialty: "PSICOPEDAGOGIA", price: 297 },
  { category: "AVALIAÇÃO", specialty: "TERAPIA OCUPACIONAL", price: 297 },
  { category: "DEVOLUTIVA", specialty: "ABA", price: 286 },
  { category: "DEVOLUTIVA", specialty: "DENVER", price: 286 },
  { category: "DEVOLUTIVA", specialty: "ESTIMULAÇÃO TRANSCRANIANA ETCC", price: 286 },
  { category: "DEVOLUTIVA", specialty: "FISIOTERAPIA MOTORA", price: 286 },
  { category: "DEVOLUTIVA", specialty: "FISIOTERAPIA RESPIRATÓRIA", price: 286 },
  { category: "DEVOLUTIVA", specialty: "FONOAUDIOLOGIA", price: 286 },
  { category: "DEVOLUTIVA", specialty: "INTEGRAÇÃO SENSORIAL", price: 297 },
  { category: "DEVOLUTIVA", specialty: "MUSICOTERAPIA", price: 286 },
  { category: "DEVOLUTIVA", specialty: "NEUROPSICOLOGIA", price: 386 },
  { category: "DEVOLUTIVA", specialty: "PSICOLOGIA", price: 286 },
  { category: "DEVOLUTIVA", specialty: "PSICOMOTRICIDADE", price: 286 },
  { category: "DEVOLUTIVA", specialty: "PSICOPEDAGOGIA", price: 286 },
  { category: "DEVOLUTIVA", specialty: "TERAPIA OCUPACIONAL", price: 286 },
  { category: "TRATAMENTO", specialty: "ABA", price: 274 },
  { category: "TRATAMENTO", specialty: "DENVER", price: 274 },
  { category: "TRATAMENTO", specialty: "FISIOTERAPIA MOTORA", price: 274 },
  { category: "TRATAMENTO", specialty: "FISIOTERAPIA RESPIRATÓRIA", price: 274 },
  { category: "TRATAMENTO", specialty: "FONOAUDIOLOGIA", price: 274 },
  { category: "TRATAMENTO", specialty: "FISIOTERAPIA AQUÁTICA", price: 297 },
  { category: "TRATAMENTO", specialty: "INTEGRAÇÃO SENSORIAL", price: 297 },
  { category: "TRATAMENTO", specialty: "MUSICOTERAPIA", price: 274 },
  { category: "TRATAMENTO", specialty: "PSICOLOGIA", price: 274 },
  { category: "TRATAMENTO", specialty: "PSICOMOTRICIDADE", price: 274 },
  { category: "TRATAMENTO", specialty: "PSICOPEDAGOGIA", price: 274 },
  { category: "TRATAMENTO", specialty: "SABER", price: 274 },
  { category: "TRATAMENTO", specialty: "TERAPIA ALIMENTAR", price: 274 },
  { category: "TRATAMENTO", specialty: "TERAPIA OCUPACIONAL", price: 274 },
  { category: "TRATAMENTO", specialty: "THERASUIT", price: 353 },
  { category: "TRATAMENTO", specialty: "DMI", price: 330 },
  { category: "CONSULTA", specialty: "NUTRIÇÃO", price: 386 },
  { category: "CONSULTA", specialty: "ÓRTESE", price: 498 },
  { category: "EXAME", specialty: "PAC", price: 554 },
  { category: "OUTROS", specialty: "ANÁLISE FUNCIONAL", price: 274 },
  { category: "OUTROS", specialty: "COACHING PARENTAL", price: 274 },
  { category: "OUTROS", specialty: "COORDENAÇÃO DE CASO AT", price: 274 },
  { category: "OUTROS", specialty: "COORDENAÇÃO DE CASO ESCOLA", price: 274 },
  { category: "OUTROS", specialty: "COORDENAÇÃO DE CASO FAMÍLIA", price: 274 },
  { category: "OUTROS", specialty: "ORIENTAÇÃO À FAMÍLIA", price: 274 },
  { category: "OUTROS", specialty: "COORDENAÇÃO DE CASO", price: 274 },
  { category: "RETORNO", specialty: "NUTRIÇÃO", price: 386 },
  { category: "TREINAMENTO", specialty: "PAC", price: 274 },
];

const NUCLEOS = [
  "Núcleo de Autismo",
  "Núcleo de Desenvolvimento Neuropsicomotor",
  "Núcleo de Neuroaprendizagem",
  "Avaliação Neuropsicológica",
  "Terapias Específicas",
  "Esporte Adaptado",
];

const CATEGORIES = [...new Set(PRICE_DATA.map((d) => d.category))];

const fmtBRL = (v) =>
  Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const today = () => new Date().toLocaleDateString("pt-BR");

// Calcula o total líquido de um serviço
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

  // form de adição
  const [selCategory, setSelCategory] = useState("");
  const [selSpecialty, setSelSpecialty] = useState("");
  const [selQty, setSelQty] = useState(1);
  const [selDiscountType, setSelDiscountType] = useState("pct");
  const [selDiscountPct, setSelDiscountPct] = useState(0);
  const [selDiscountAbs, setSelDiscountAbs] = useState(0);

  // desconto global
  const [globalDiscountType, setGlobalDiscountType] = useState("pct");
  const [globalDiscountPct, setGlobalDiscountPct] = useState(0);
  const [globalDiscountAbs, setGlobalDiscountAbs] = useState(0);

  const specialties = selCategory
    ? PRICE_DATA.filter((d) => d.category === selCategory).map((d) => d.specialty)
    : [];

  const selectedItem = PRICE_DATA.find(
    (d) => d.category === selCategory && d.specialty === selSpecialty
  );

  const addService = () => {
    if (!selectedItem) return;
    setServices((prev) => [
      ...prev,
      {
        id: Date.now(),
        category: selCategory,
        specialty: selSpecialty,
        qty: selQty,
        unitPrice: selectedItem.price,
        discountType: selDiscountType,
        discountPct: selDiscountPct,
        discountAbs: selDiscountAbs,
      },
    ]);
    setSelCategory("");
    setSelSpecialty("");
    setSelQty(1);
    setSelDiscountPct(0);
    setSelDiscountAbs(0);
  };

  const removeService = (id) => setServices((prev) => prev.filter((s) => s.id !== id));

  const subtotalBruto = services.reduce((acc, s) => acc + s.unitPrice * s.qty, 0);
  const subtotalDescontos = services.reduce((acc, s) => acc + serviceDiscount(s), 0);
  const subtotalLiquido = subtotalBruto - subtotalDescontos;

  const globalDiscount =
    globalDiscountType === "pct"
      ? subtotalLiquido * (globalDiscountPct / 100)
      : Math.min(globalDiscountAbs, subtotalLiquido);

  const total = subtotalLiquido - globalDiscount;

  const canAdd = selCategory && selSpecialty && selQty > 0;
  const canGenerate = patient && date && services.length > 0;

  const handlePrint = () => {
    const win = window.open("", "_blank");
    win.document.write(`<!DOCTYPE html><html><head>
<meta charset="utf-8">
<title>Orçamento - ${patient}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Nunito',sans-serif;background:#fff;color:#1a1a1a}
  .page{max-width:800px;margin:0 auto;padding:48px 40px}
  .header{display:flex;align-items:center;justify-content:space-between;margin-bottom:36px;padding-bottom:20px;border-bottom:2px solid #9abb5d}
  .brand{font-size:22px;font-weight:800;color:#3d6b10}.brand span{color:#c49a2e}
  .doc-title h1{font-size:20px;font-weight:700;color:#3d6b10;text-align:right}
  .doc-title p{font-size:13px;color:#888;text-align:right;margin-top:2px}
  .info-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:32px;background:#f8faf3;border-radius:10px;padding:18px;border:1px solid #d6e8b0}
  .info-cell p:first-child{font-size:11px;color:#888;text-transform:uppercase;letter-spacing:.8px}
  .info-cell p:last-child{font-size:15px;font-weight:700;color:#222;margin-top:3px}
  .sec-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#9abb5d;margin-bottom:8px}
  table{width:100%;border-collapse:collapse;margin-bottom:28px}
  thead tr{background:#3d6b10}
  thead th{color:#fff;font-size:12px;font-weight:600;text-align:left;padding:10px 12px}
  thead th.r{text-align:right}
  tbody tr:nth-child(even){background:#f8faf3}
  tbody td{padding:9px 12px;font-size:13px;color:#333;border-bottom:1px solid #edf3e4}
  tbody td.r{text-align:right;font-weight:600}
  tbody td.disc{color:#b07d10;font-size:12px}
  .badge{display:inline-block;background:#e8f3d5;color:#3d6b10;font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px;margin-right:5px}
  .totals{margin-left:auto;width:300px}
  .trow{display:flex;justify-content:space-between;padding:6px 0;font-size:14px;border-bottom:1px solid #eee}
  .trow.disc{color:#b07d10}
  .trow.sub{color:#666}
  .trow.grand{font-size:18px;font-weight:800;color:#3d6b10;border:none;border-top:2px solid #9abb5d;padding-top:10px;margin-top:4px}
  .obs{margin-top:28px;background:#f8faf3;border-left:4px solid #9abb5d;border-radius:0 8px 8px 0;padding:14px 18px;font-size:12px;color:#555}
  .obs ul{margin-top:8px;padding-left:16px}.obs li{margin-bottom:3px}
  .footer{margin-top:44px;padding-top:20px;border-top:1px solid #e0e0e0;display:flex;justify-content:space-between;font-size:12px;color:#888}
  .sig-line{width:200px;border-top:1px solid #999;margin:0 auto 6px;padding-top:6px;text-align:center}
  @media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style></head><body><div class="page">
  <div class="header">
    <div>
      <div class="brand">espaço <span>cel</span></div>
      <div style="font-size:11px;color:#888;margin-top:2px">Corpo e Linguagem · CNPJ 04.801.934/001-83</div>
    </div>
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
  <div class="sec-label">Serviços</div>
  <table>
    <thead><tr>
      <th>Descrição</th>
      <th class="r" style="width:50px">Qtd</th>
      <th class="r" style="width:100px">Valor Unit.</th>
      <th class="r" style="width:80px">Desconto</th>
      <th class="r" style="width:110px">Total Líquido</th>
    </tr></thead>
    <tbody>
      ${services.map((s) => {
        const gross = s.unitPrice * s.qty;
        const disc = serviceDiscount(s);
        const net = serviceNet(s);
        const discLabel = s.discountType === "pct" && s.discountPct > 0
          ? `${s.discountPct}%`
          : s.discountType === "abs" && s.discountAbs > 0
          ? fmtBRL(s.discountAbs)
          : "—";
        return `<tr>
          <td><span class="badge">${s.category}</span>${s.specialty}</td>
          <td class="r">${s.qty}</td>
          <td class="r">${fmtBRL(s.unitPrice)}</td>
          <td class="r disc">${disc > 0 ? `−${discLabel}` : "—"}</td>
          <td class="r">${fmtBRL(net)}</td>
        </tr>`;
      }).join("")}
    </tbody>
  </table>
  <div class="totals">
    <div class="trow sub"><span>Subtotal bruto</span><span>${fmtBRL(subtotalBruto)}</span></div>
    ${subtotalDescontos > 0 ? `<div class="trow disc"><span>Descontos por serviço</span><span>− ${fmtBRL(subtotalDescontos)}</span></div>` : ""}
    ${globalDiscount > 0 ? `<div class="trow disc"><span>Desconto geral ${globalDiscountType === "pct" ? `(${globalDiscountPct}%)` : "(R$ fixo)"}</span><span>− ${fmtBRL(globalDiscount)}</span></div>` : ""}
    <div class="trow grand"><span>TOTAL</span><span>${fmtBRL(total)}</span></div>
  </div>
  <div class="obs"><strong>Observações:</strong>
    <ul>
      <li>Cada atendimento tem duração de 45 minutos.</li>
      <li>O valor final depende da grade terapêutica de cada criança e a quantidade de dias úteis.</li>
      <li>O reajuste anual ocorre sempre no mês de janeiro.</li>
      <li>Em caso de ausência do profissional, será realizada substituição por outro profissional disponível.</li>
    </ul>
  </div>
  <div class="footer">
    <div>
      <div style="font-weight:600;color:#3d6b10;margin-bottom:4px">Espaço CEL – Corpo e Linguagem</div>
      <div>📞 +55 21 98897-6293</div>
      <div>🌐 espacocel.com.br</div>
      <div>✉ faleconosco@espacocel.com.br</div>
    </div>
    <div style="text-align:center">
      <div class="sig-line"></div>
      <div style="font-weight:600">Jane Wanderley</div>
      <div style="font-size:11px;color:#aaa">Gerente Geral e de Relacionamento</div>
    </div>
  </div>
</div></body></html>`);
    win.document.close();
    setTimeout(() => win.print(), 500);
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
        .btn{padding:10px 18px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;border:none;transition:transform .1s,opacity .15s;font-family:inherit}
        .btn:active{transform:scale(.97)}
        .btn-green{background:#9abb5d;color:#fff}.btn-green:hover{background:#7da344}.btn-green:disabled{background:#c8dfa4;cursor:not-allowed}
        .btn-dark{background:#3d6b10;color:#fff}.btn-dark:hover{background:#2e5009}.btn-dark:disabled{background:#aaa;cursor:not-allowed}
        .btn-outline{background:#fff;color:#3d6b10;border:1.5px solid #9abb5d}.btn-outline:hover{background:#f0f7e6}
        .btn-del{background:#fff0f0;color:#c0392b;border:1.5px solid #f5c6c6;padding:5px 10px;font-size:13px}.btn-del:hover{background:#fde8e8}
        .card{background:#fff;border-radius:14px;padding:22px;border:1px solid #ddedb8}
        .sh{font-size:13px;font-weight:700;color:#3d6b10;text-transform:uppercase;letter-spacing:.8px;margin-bottom:14px;display:flex;align-items:center;gap:8px}
        .tag{display:inline-block;background:#e8f3d5;color:#3d6b10;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px}
        .srow{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;background:#f8faf3;border-radius:8px;margin-bottom:8px;border:1px solid #e0edca}
        .trow{display:flex;justify-content:space-between;padding:6px 0;font-size:14px;border-bottom:1px solid #eee}
        .tab{padding:5px 14px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;border:1.5px solid transparent;transition:all .15s;font-family:inherit}
        .tab.on{background:#9abb5d;color:#fff;border-color:#9abb5d}
        .tab.off{background:#fff;color:#6b9a2e;border-color:#d4e8a8}
        .disc-pill{display:inline-block;background:#fff8e6;color:#b07d10;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px}
      `}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#3d6b10,#5a8f1e)", padding: "18px 32px", display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
        <svg width="48" height="48" viewBox="0 0 52 52">
          <circle cx="26" cy="26" r="26" fill="rgba(255,255,255,.12)"/>
          <ellipse cx="20" cy="30" rx="6" ry="9" fill="#c49a2e" transform="rotate(-10 20 30)"/>
          <ellipse cx="30" cy="22" rx="9" ry="13" fill="#9abb5d" transform="rotate(-10 30 22)"/>
          <circle cx="37" cy="14" r="4.5" fill="rgba(255,255,255,.8)"/>
        </svg>
        <div>
          <div style={{ fontWeight: 800, fontSize: 22, color: "#fff", letterSpacing: -0.5 }}>espaço <span style={{ color: "#f0d080" }}>cel</span></div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.65)", marginTop: 1 }}>Gerador de Orçamento · 2026</div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)" }}>Tabela de Preços</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 600 }}>Valores Reajustados 2026</div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

        {/* ── COLUNA ESQUERDA ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Dados do paciente */}
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

          {/* Adicionar serviço */}
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

              {/* ── DESCONTO POR SERVIÇO ── */}
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
                        onChange={e => setSelDiscountPct(parseFloat(e.target.value))}
                        style={{ padding: "6px 0" }} />
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
                      onChange={e => setSelDiscountAbs(Math.max(0, parseFloat(e.target.value) || 0))}
                      placeholder="0,00" />
                  </div>
                )}
                {selectedItem && (selDiscountType === "pct" ? selDiscountPct > 0 : selDiscountAbs > 0) && (
                  <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                    <span style={{ color: "#888" }}>Total com desconto ({selQty}x):</span>
                    <span style={{ fontWeight: 700, color: "#3d6b10" }}>
                      {fmtBRL(selDiscountType === "pct"
                        ? selectedItem.price * selQty * (1 - selDiscountPct / 100)
                        : Math.max(0, selectedItem.price * selQty - selDiscountAbs)
                      )}
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

              <button className="btn btn-green" onClick={addService} disabled={!canAdd}>
                + Adicionar ao Orçamento
              </button>
            </div>
          </div>
        </div>

        {/* ── COLUNA DIREITA ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Lista de serviços */}
          <div className="card" style={{ flex: 1 }}>
            <div className="sh">
              🗂 Serviços Adicionados
              {services.length > 0 && (
                <span className="tag" style={{ marginLeft: "auto" }}>{services.length} item{services.length > 1 ? "s" : ""}</span>
              )}
            </div>
            {services.length === 0 ? (
              <div style={{ textAlign: "center", padding: "32px 0", color: "#bbb", fontSize: 13 }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>📋</div>
                Nenhum serviço adicionado ainda.
              </div>
            ) : (
              services.map((s) => {
                const gross = s.unitPrice * s.qty;
                const disc = serviceDiscount(s);
                const net = serviceNet(s);
                const hasDisc = disc > 0;
                return (
                  <div key={s.id} className="srow">
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 3 }}>
                        <span className="tag">{s.category}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#222" }}>{s.specialty}</span>
                      </div>
                      <div style={{ fontSize: 12, color: "#888" }}>
                        {s.qty}x {fmtBRL(s.unitPrice)}
                        {hasDisc && (
                          <span style={{ marginLeft: 6 }}>
                            <span className="disc-pill">
                              −{s.discountType === "pct" ? `${s.discountPct}%` : fmtBRL(s.discountAbs)}
                            </span>
                          </span>
                        )}
                      </div>
                      {hasDisc && (
                        <div style={{ fontSize: 11, color: "#b07d10", marginTop: 2 }}>
                          Bruto: {fmtBRL(gross)} → Desc: −{fmtBRL(disc)}
                        </div>
                      )}
                    </div>
                    <div style={{ textAlign: "right", minWidth: 90 }}>
                      {hasDisc && (
                        <div style={{ fontSize: 11, color: "#aaa", textDecoration: "line-through" }}>{fmtBRL(gross)}</div>
                      )}
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#3d6b10" }}>{fmtBRL(net)}</div>
                    </div>
                    <button className="btn btn-del" onClick={() => removeService(s.id)}>✕</button>
                  </div>
                );
              })
            )}
          </div>

          {/* Desconto global & Total */}
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
                    onChange={e => setGlobalDiscountPct(parseFloat(e.target.value))}
                    style={{ padding: "6px 0" }} />
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
                  onChange={e => setGlobalDiscountAbs(Math.max(0, parseFloat(e.target.value) || 0))}
                  placeholder="0,00" />
              </div>
            )}

            <div style={{ borderTop: "1.5px solid #e8f0d8", paddingTop: 12 }}>
              <div className="trow">
                <span style={{ color: "#888" }}>Subtotal bruto</span>
                <span style={{ fontWeight: 600 }}>{fmtBRL(subtotalBruto)}</span>
              </div>
              {subtotalDescontos > 0 && (
                <div className="trow">
                  <span style={{ color: "#b07d10" }}>Descontos por serviço</span>
                  <span style={{ color: "#b07d10", fontWeight: 600 }}>− {fmtBRL(subtotalDescontos)}</span>
                </div>
              )}
              {globalDiscount > 0 && (
                <div className="trow">
                  <span style={{ color: "#b07d10" }}>
                    Desconto geral <span className="disc-pill">{globalDiscountType === "pct" ? `${globalDiscountPct}%` : "R$ fixo"}</span>
                  </span>
                  <span style={{ color: "#b07d10", fontWeight: 600 }}>− {fmtBRL(globalDiscount)}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 0", fontSize: 20, fontWeight: 800, color: "#3d6b10", borderTop: "2px solid #9abb5d", marginTop: 4 }}>
                <span>TOTAL</span>
                <span>{fmtBRL(total)}</span>
              </div>
            </div>

            <button
              className="btn btn-dark"
              style={{ width: "100%", marginTop: 16, padding: "13px 20px", fontSize: 15 }}
              onClick={handlePrint}
              disabled={!canGenerate}
            >
              📄 Gerar PDF do Orçamento
            </button>
            {!canGenerate && (
              <div style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 8 }}>
                Preencha o nome do paciente e adicione ao menos um serviço.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
