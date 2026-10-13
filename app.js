/**
 * Red & Processed Meat and CRC Risk Meta-Analysis Presentation Engine
 * Comprehensive 15-Slide Presentation Deck
 * Complete SVG Renderings for Figures 1, 2, 3, 4, 5 from the Meta-Analysis Report
 */

// 17 Primary Studies Dataset
const primaryStudies = [
  { id: "Willett 1990", rr: 1.77, low: 1.09, high: 2.88, wc: 0.5, wr: 1.7, country: "USA", sex: "Female" },
  { id: "Giovannucci 1994", rr: 1.71, low: 1.15, high: 2.55, wc: 0.8, wr: 2.5, country: "USA", sex: "Male" },
  { id: "Chen 1998", rr: 1.17, low: 0.68, high: 2.02, wc: 0.4, wr: 1.4, country: "USA", sex: "Male" },
  { id: "Singh 1998", rr: 1.41, low: 0.90, high: 2.21, wc: 0.6, wr: 2.0, country: "USA", sex: "Combined" },
  { id: "Pietinen 1999", rr: 1.10, low: 0.71, high: 1.71, wc: 0.6, wr: 2.1, country: "Finland", sex: "Male" },
  { id: "Jarvinen 2001", rr: 1.50, low: 0.77, high: 2.93, wc: 0.3, wr: 1.0, country: "Finland", sex: "Combined" },
  { id: "Tiemersma 2002", rr: 1.60, low: 0.89, high: 2.87, wc: 0.4, wr: 1.2, country: "Netherlands", sex: "Combined" },
  { id: "Flood 2003", rr: 1.10, low: 0.83, high: 1.45, wc: 1.6, wr: 4.5, country: "USA", sex: "Female" },
  { id: "English 2004", rr: 1.03, low: 0.98, high: 1.08, wc: 51.2, wr: 17.8, country: "Australia", sex: "Combined" },
  { id: "Lin 2004", rr: 0.66, low: 0.40, high: 1.09, wc: 0.5, wr: 1.6, country: "USA", sex: "Female" },
  { id: "Cross 2007", rr: 1.24, low: 1.13, high: 1.37, wc: 12.8, wr: 13.9, country: "USA", sex: "Combined" },
  { id: "Kabat 2007", rr: 1.12, low: 0.86, high: 1.46, wc: 1.7, wr: 4.9, country: "Canada", sex: "Female" },
  { id: "Lee 2009", rr: 0.80, low: 0.59, high: 1.08, wc: 1.3, wr: 3.9, country: "China", sex: "Female" },
  { id: "Nöthlings 2009", rr: 0.96, low: 0.74, high: 1.24, wc: 1.9, wr: 5.2, country: "USA", sex: "Combined" },
  { id: "Cross 2010", rr: 1.20, low: 1.05, high: 1.37, wc: 7.2, wr: 11.4, country: "USA", sex: "Combined" },
  { id: "Fung 2010 (men)", rr: 1.08, low: 0.97, high: 1.21, wc: 9.9, wr: 12.8, country: "USA", sex: "Male" },
  { id: "Fung 2010 (women)", rr: 1.12, low: 0.99, high: 1.26, wc: 8.3, wr: 12.0, country: "USA", sex: "Female" }
];

// Helper: map Relative Risk to SVG Coordinate in log space
function rrToSvg(rr, xStart = 330, xEnd = 670, minVal = 0.35, maxVal = 3.2) {
  const minLog = Math.log(minVal);
  const maxLog = Math.log(maxVal);
  const valLog = Math.log(rr);
  return xStart + ((valLog - minLog) / (maxLog - minLog)) * (xEnd - xStart);
}

// 1. RENDER FIGURE 1: PRIMARY FOREST PLOT (Slide 8)
function renderFigure1() {
  const svg = document.getElementById("primaryForestSvg");
  if (!svg) return;

  const xStart = 330;
  const xEnd = 670;
  const yStart = 60;
  const rowH = 22;

  let out = `
    <rect width="940" height="540" fill="#081424" rx="10"/>
    <text x="15" y="24" fill="#94a3b8" font-size="11" font-weight="700">STUDY / ESTIMATE</text>
    <text x="500" y="24" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">RELATIVE RISK (95% CI)</text>
    <text x="700" y="24" fill="#94a3b8" font-size="11" font-weight="700">RR [95% CI]</text>
    <text x="830" y="24" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">W(COMMON)</text>
    <text x="900" y="24" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">W(RANDOM)</text>
    <line x1="15" y1="34" x2="925" y2="34" stroke="rgba(255,255,255,0.15)" stroke-width="1.2"/>
    
    <!-- Null line RR=1.00 & Summary line RR=1.12 -->
    <line x1="${rrToSvg(1.0, xStart, xEnd)}" y1="40" x2="${rrToSvg(1.0, xStart, xEnd)}" y2="440" stroke="rgba(255,255,255,0.35)" stroke-dasharray="4 4"/>
    <line x1="${rrToSvg(1.12, xStart, xEnd)}" y1="40" x2="${rrToSvg(1.12, xStart, xEnd)}" y2="440" stroke="#06b6d4" stroke-opacity="0.4" stroke-dasharray="2 3"/>
  `;

  primaryStudies.forEach((s, idx) => {
    const y = yStart + idx * rowH;
    const px = rrToSvg(s.rr, xStart, xEnd);
    const low = rrToSvg(s.low, xStart, xEnd);
    const high = rrToSvg(s.high, xStart, xEnd);
    const boxSize = Math.max(4.5, Math.sqrt(s.wr) * 2.3);
    const isSig = s.low > 1.0 || s.high < 1.0;
    const boxColor = isSig ? "#f43f5e" : "#38bdf8";

    out += `
      <g>
        <title>${s.id}: RR ${s.rr.toFixed(2)} [${s.low.toFixed(2)}, ${s.high.toFixed(2)}]</title>
        <text x="15" y="${y + 4}" fill="#cbd5e1" font-size="11.2">${s.id}</text>
        <line x1="${low}" y1="${y}" x2="${high}" y2="${y}" stroke="#38bdf8" stroke-width="1.2" opacity="0.85"/>
        <line x1="${low}" y1="${y-3}" x2="${low}" y2="${y+3}" stroke="#38bdf8" stroke-width="1.2"/>
        <line x1="${high}" y1="${y-3}" x2="${high}" y2="${y+3}" stroke="#38bdf8" stroke-width="1.2"/>
        <rect x="${px - boxSize/2}" y="${y - boxSize/2}" width="${boxSize}" height="${boxSize}" fill="${boxColor}"/>
        <text x="700" y="${y + 4}" font-family="JetBrains Mono, monospace" font-size="10.8" fill="#cbd5e1">${s.rr.toFixed(2)} [${s.low.toFixed(2)}, ${s.high.toFixed(2)}]</text>
        <text x="830" y="${y + 4}" font-family="JetBrains Mono, monospace" font-size="10.8" fill="#94a3b8" text-anchor="middle">${s.wc.toFixed(1)}%</text>
        <text x="900" y="${y + 4}" font-family="JetBrains Mono, monospace" font-size="10.8" fill="#94a3b8" text-anchor="middle">${s.wr.toFixed(1)}%</text>
      </g>
    `;
  });

  // Summary lines
  const cLow = rrToSvg(1.05, xStart, xEnd);
  const cPt = rrToSvg(1.09, xStart, xEnd);
  const cHigh = rrToSvg(1.13, xStart, xEnd);

  const rLow = rrToSvg(1.03, xStart, xEnd);
  const rPt = rrToSvg(1.12, xStart, xEnd);
  const rHigh = rrToSvg(1.22, xStart, xEnd);

  const piLow = rrToSvg(0.94, xStart, xEnd);
  const piHigh = rrToSvg(1.34, xStart, xEnd);

  out += `
    <line x1="15" y1="442" x2="925" y2="442" stroke="rgba(255,255,255,0.15)"/>
    <text x="15" y="460" font-weight="700" fill="#fff" font-size="11.5">Common effect model</text>
    <polygon points="${cLow},458 ${cPt},452 ${cHigh},458 ${cPt},464" fill="#38bdf8"/>
    <text x="700" y="460" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#38bdf8">1.09 [1.05, 1.13]</text>
    <text x="830" y="460" font-family="JetBrains Mono, monospace" font-size="11" text-anchor="middle">100.0%</text>
    <text x="900" y="460" font-family="JetBrains Mono, monospace" font-size="11" text-anchor="middle">&mdash;</text>

    <text x="15" y="484" font-weight="700" fill="#f43f5e" font-size="11.5">Random effects model (Hartung–Knapp)</text>
    <polygon points="${rLow},482 ${rPt},475 ${rHigh},482 ${rPt},489" fill="#f43f5e"/>
    <text x="700" y="484" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#f43f5e">1.12 [1.03, 1.22]</text>
    <text x="830" y="484" font-family="JetBrains Mono, monospace" font-size="11" text-anchor="middle">&mdash;</text>
    <text x="900" y="484" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="#f43f5e" text-anchor="middle">100.0%</text>

    <text x="15" y="508" font-weight="600" fill="#fb923c" font-size="11">95% prediction interval</text>
    <line x1="${piLow}" y1="505" x2="${piHigh}" y2="505" stroke="#fb923c" stroke-width="3.5" stroke-linecap="round"/>
    <text x="700" y="508" font-family="JetBrains Mono, monospace" font-size="11" fill="#fb923c">[0.94, 1.34]</text>

    <text x="15" y="532" fill="#94a3b8" font-size="10.2">
      Heterogeneity: I&sup2; = 55.3% [95% CI 22.8&ndash;74.1%], &tau;&sup2; = 0.0060, Q = 35.77, df = 16, p = 0.0031
    </text>
  `;

  svg.innerHTML = out;
}

// 2. RENDER FIGURE 2: FUNNEL PLOT (Slide 9)
function renderFigure2() {
  const svg = document.getElementById("primaryFunnelSvg");
  if (!svg) return;

  const w = 540;
  const h = 370;
  const l = 60;
  const r = 500;
  const t = 30;
  const b = 310;
  const seMax = 0.36;

  const rrMin = 0.4;
  const rrMax = 2.2;
  const pooled = 1.12;

  const xMap = (rr) => l + ((rr - rrMin) / (rrMax - rrMin)) * (r - l);
  const yMap = (se) => t + (se / seMax) * (b - t);

  // Diagonal Pseudo 95% CI limits
  const pLeft = [];
  const pRight = [];
  for (let s = 0; s <= seMax; s += 0.01) {
    pLeft.push(`${xMap(Math.max(rrMin, pooled - 1.96 * s * pooled))},${yMap(s)}`);
    pRight.push(`${xMap(Math.min(rrMax, pooled + 1.96 * s * pooled))},${yMap(s)}`);
  }

  let out = `
    <rect width="${w}" height="${h}" fill="#081424" rx="10"/>
    <polygon points="${pLeft.join(" ")} ${pRight.reverse().join(" ")}" fill="#38bdf8" fill-opacity="0.05"/>
    <polyline points="${pLeft.join(" ")}" fill="none" stroke="#38bdf8" stroke-dasharray="4 4" stroke-opacity="0.5"/>
    <polyline points="${pRight.reverse().join(" ")}" fill="none" stroke="#38bdf8" stroke-dasharray="4 4" stroke-opacity="0.5"/>

    <line x1="${l}" y1="${t}" x2="${l}" y2="${b}" stroke="#64748b" stroke-width="1.2"/>
    <line x1="${l}" y1="${b}" x2="${r}" y2="${b}" stroke="#64748b" stroke-width="1.2"/>
    <line x1="${xMap(pooled)}" y1="${t}" x2="${xMap(pooled)}" y2="${b}" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="3 3"/>

    <text x="${(l+r)/2}" y="${b + 38}" fill="#94a3b8" font-size="12" text-anchor="middle">Relative Risk (Ratio Scale)</text>
    <text x="22" y="${(t+b)/2}" fill="#94a3b8" font-size="12" transform="rotate(-90 22 ${(t+b)/2})" text-anchor="middle">Standard Error</text>
  `;

  // Ticks
  [0.5, 1.0, 1.5, 2.0].forEach((tk) => {
    out += `
      <line x1="${xMap(tk)}" y1="${b}" x2="${xMap(tk)}" y2="${b+5}" stroke="#94a3b8"/>
      <text x="${xMap(tk)}" y="${b+20}" fill="#94a3b8" font-size="11" text-anchor="middle">${tk.toFixed(1)}</text>
    `;
  });
  [0.05, 0.15, 0.25, 0.35].forEach((tk) => {
    out += `
      <line x1="${l-5}" y1="${yMap(tk)}" x2="${l}" y2="${yMap(tk)}" stroke="#94a3b8"/>
      <text x="${l-10}" y="${yMap(tk)+4}" fill="#94a3b8" font-size="10.5" text-anchor="end">${tk.toFixed(2)}</text>
    `;
  });

  // Points
  primaryStudies.forEach((s) => {
    const se = (Math.log(s.high) - Math.log(s.low)) / 3.92;
    const px = xMap(s.rr);
    const py = yMap(se);
    out += `
      <circle cx="${px}" cy="${py}" r="5" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8">
        <title>${s.id}: RR ${s.rr.toFixed(2)}, SE ${se.toFixed(3)}</title>
      </circle>
    `;
  });

  svg.innerHTML = out;
}

// 3. RENDER FIGURE 3: 8 INFLUENCE DIAGNOSTICS SUBPLOTS (Slide 10)
function renderFigure3() {
  const container = document.getElementById("influencePlotsGrid");
  if (!container) return;

  const panels = [
    { name: "rstudent", values: [1.7, 1.8, 0.2, 0.9, 0.0, 0.8, 1.1, -0.1, -1.1, -2.01, 1.4, 0.1, -2.02, -0.9, 0.65, -0.5, -0.1], thresh: 1.96, mid: 0 },
    { name: "dffits", values: [0.10, 0.15, -0.08, 0.05, -0.11, 0.02, 0.10, -0.12, -0.71, -0.22, 0.754, -0.12, -0.36, -0.27, 0.20, -0.18, -0.07], thresh: 0.48, mid: 0 },
    { name: "cook.d", values: [0.04, 0.08, 0.01, 0.03, 0.00, 0.02, 0.01, 0.03, 0.325, 0.05, 0.398, 0.04, 0.10, 0.05, 0.03, 0.02, 0.00], thresh: 0.23, mid: 0 },
    { name: "cov.r", values: [0.92, 0.86, 1.01, 0.98, 1.04, 0.97, 0.95, 1.11, 0.94, 0.93, 0.85, 1.10, 0.90, 1.01, 1.18, 1.33, 1.37], thresh: 1.0, mid: 1.0 },
    { name: "tau2.del", values: [0.0051, 0.0044, 0.0059, 0.0053, 0.0061, 0.0054, 0.0052, 0.0068, 0.0030, 0.0056, 0.0039, 0.0067, 0.0045, 0.0058, 0.0064, 0.0082, 0.0084], thresh: 0.006, mid: 0.006 },
    { name: "QE.del", values: [31.4, 30.0, 34.6, 33.0, 34.9, 33.5, 32.4, 34.8, 25.8, 31.3, 27.8, 34.7, 31.0, 33.2, 32.0, 34.5, 34.0], thresh: 35.77, mid: 35.77 },
    { name: "hat", values: [0.02, 0.03, 0.01, 0.03, 0.02, 0.00, 0.01, 0.05, 0.178, 0.02, 0.139, 0.05, 0.04, 0.06, 0.11, 0.12, 0.11], thresh: 0.118, mid: 0.059 },
    { name: "weight", values: [1.7, 2.5, 1.4, 2.0, 2.1, 1.0, 1.2, 4.5, 17.8, 1.6, 13.9, 4.9, 3.9, 5.2, 11.4, 12.8, 12.0], thresh: 11.76, mid: 5.88 }
  ];

  container.innerHTML = panels.map((p) => {
    const pw = 280;
    const ph = 110;
    const l = 25;
    const r = 265;
    const t = 22;
    const b = 88;

    const all = [...p.values, p.thresh, p.mid];
    const mn = Math.min(...all);
    const mx = Math.max(...all);
    const span = Math.max(mx - mn, 0.001);

    const xPos = (i) => l + (i / 16) * (r - l);
    const yPos = (v) => b - ((v - mn) / span) * (b - t);

    const poly = p.values.map((v, i) => `${xPos(i)},${yPos(v)}`).join(" ");
    const pts = p.values.map((v, i) => {
      const red = (i === 8 || i === 10);
      return `<circle cx="${xPos(i)}" cy="${yPos(v)}" r="${red ? 3.5 : 2.5}" fill="${red ? '#f43f5e' : '#94a3b8'}"/>`;
    }).join("");

    return `
      <div class="diag-panel">
        <svg viewBox="0 0 ${pw} ${ph}">
          <text x="${pw/2}" y="14" fill="#e2e8f0" font-size="10.5" font-weight="700" text-anchor="middle">${p.name}</text>
          <line x1="${l}" y1="${yPos(p.thresh)}" x2="${r}" y2="${yPos(p.thresh)}" stroke="#f59e0b" stroke-dasharray="3 3" opacity="0.65"/>
          <line x1="${l}" y1="${yPos(p.mid)}" x2="${r}" y2="${yPos(p.mid)}" stroke="#64748b" stroke-dasharray="2 2" opacity="0.5"/>
          <polyline points="${poly}" fill="none" stroke="#38bdf8" stroke-width="1.2"/>
          ${pts}
          <text x="${l}" y="103" fill="#64748b" font-size="7.5">1</text>
          <text x="${xPos(8)}" y="103" fill="#64748b" font-size="7.5" text-anchor="middle">9</text>
          <text x="${r}" y="103" fill="#64748b" font-size="7.5" text-anchor="end">17</text>
        </svg>
      </div>
    `;
  }).join("");
}

// 4. RENDER FIGURE 4: BY COUNTRY FOREST PLOT (Slide 11)
function renderFigure4() {
  const svg = document.getElementById("countryForestSvg");
  if (!svg) return;

  const rows = [
    { type: "header", label: "Country = USA" },
    ...primaryStudies.filter(s => s.country === "USA"),
    { type: "subgroup", label: "Random effects model (USA)", rr: 1.16, low: 1.09, high: 1.24 },
    { type: "header", label: "Country = Finland" },
    ...primaryStudies.filter(s => s.country === "Finland"),
    { type: "subgroup", label: "Random effects model (Finland)", rr: 1.21, low: 0.84, high: 1.75 },
    { type: "header", label: "Country = Netherlands" },
    ...primaryStudies.filter(s => s.country === "Netherlands"),
    { type: "header", label: "Country = Australia" },
    ...primaryStudies.filter(s => s.country === "Australia"),
    { type: "header", label: "Country = Canada" },
    ...primaryStudies.filter(s => s.country === "Canada"),
    { type: "header", label: "Country = China" },
    ...primaryStudies.filter(s => s.country === "China")
  ];

  let out = `
    <rect width="920" height="460" fill="#081424" rx="10"/>
    <text x="15" y="22" fill="#94a3b8" font-size="10.5" font-weight="700">SUBGROUP / STUDY</text>
    <text x="490" y="22" fill="#94a3b8" font-size="10.5" font-weight="700" text-anchor="middle">RELATIVE RISK (95% CI)</text>
    <text x="730" y="22" fill="#94a3b8" font-size="10.5" font-weight="700">RR [95% CI]</text>
    <line x1="15" y1="30" x2="905" y2="30" stroke="rgba(255,255,255,0.15)"/>
    <line x1="${rrToSvg(1.0, 320, 660)}" y1="35" x2="${rrToSvg(1.0, 320, 660)}" y2="425" stroke="rgba(255,255,255,0.3)" stroke-dasharray="3 3"/>
  `;

  let y = 48;
  rows.forEach((r) => {
    if (r.type === "header") {
      out += `<text x="15" y="${y}" fill="#38bdf8" font-size="10.5" font-weight="700">${r.label}</text>`;
      y += 16;
    } else if (r.type === "subgroup") {
      const pl = rrToSvg(r.low, 320, 660);
      const pm = rrToSvg(r.rr, 320, 660);
      const pr = rrToSvg(r.high, 320, 660);
      out += `
        <text x="25" y="${y}" fill="#f43f5e" font-size="10" font-weight="700">${r.label}</text>
        <polygon points="${pl},${y-2} ${pm},${y-7} ${pr},${y-2} ${pm},${y+3}" fill="#f43f5e"/>
        <text x="730" y="${y}" fill="#f43f5e" font-family="JetBrains Mono" font-size="10" font-weight="700">${r.rr.toFixed(2)} [${r.low.toFixed(2)}, ${r.high.toFixed(2)}]</text>
      `;
      y += 18;
    } else {
      const px = rrToSvg(r.rr, 320, 660);
      const low = rrToSvg(r.low, 320, 660);
      const high = rrToSvg(r.high, 320, 660);
      out += `
        <text x="28" y="${y}" fill="#cbd5e1" font-size="10">${r.id}</text>
        <line x1="${low}" y1="${y-3}" x2="${high}" y2="${y-3}" stroke="#38bdf8" stroke-width="1"/>
        <rect x="${px-2.5}" y="${y-5.5}" width="5" height="5" fill="#38bdf8"/>
        <text x="730" y="${y}" fill="#94a3b8" font-family="JetBrains Mono" font-size="9.8">${r.rr.toFixed(2)} [${r.low.toFixed(2)}, ${r.high.toFixed(2)}]</text>
      `;
      y += 15;
    }
  });

  out += `<text x="15" y="445" fill="#94a3b8" font-size="9.8">Test for subgroup differences: Q = 13.88, df = 5, p = 0.0164</text>`;
  svg.innerHTML = out;
}

// 5. RENDER FIGURE 5: BY SEX FOREST PLOT (Slide 11)
function renderFigure5() {
  const svg = document.getElementById("sexForestSvg");
  if (!svg) return;

  const rows = [
    { type: "header", label: "Sex = Female" },
    ...primaryStudies.filter(s => s.sex === "Female"),
    { type: "subgroup", label: "Random effects model (Female)", rr: 1.05, low: 0.87, high: 1.26 },
    { type: "header", label: "Sex = Male" },
    ...primaryStudies.filter(s => s.sex === "Male"),
    { type: "subgroup", label: "Random effects model (Male)", rr: 1.20, low: 0.97, high: 1.48 },
    { type: "header", label: "Sex = Male + Female" },
    ...primaryStudies.filter(s => s.sex === "Combined"),
    { type: "subgroup", label: "Random effects model (Combined)", rr: 1.15, low: 1.03, high: 1.28 }
  ];

  let out = `
    <rect width="920" height="440" fill="#081424" rx="10"/>
    <text x="15" y="22" fill="#94a3b8" font-size="10.5" font-weight="700">SUBGROUP / STUDY</text>
    <text x="490" y="22" fill="#94a3b8" font-size="10.5" font-weight="700" text-anchor="middle">RELATIVE RISK (95% CI)</text>
    <text x="730" y="22" fill="#94a3b8" font-size="10.5" font-weight="700">RR [95% CI]</text>
    <line x1="15" y1="30" x2="905" y2="30" stroke="rgba(255,255,255,0.15)"/>
    <line x1="${rrToSvg(1.0, 320, 660)}" y1="35" x2="${rrToSvg(1.0, 320, 660)}" y2="405" stroke="rgba(255,255,255,0.3)" stroke-dasharray="3 3"/>
  `;

  let y = 48;
  rows.forEach((r) => {
    if (r.type === "header") {
      out += `<text x="15" y="${y}" fill="#38bdf8" font-size="10.5" font-weight="700">${r.label}</text>`;
      y += 16;
    } else if (r.type === "subgroup") {
      const pl = rrToSvg(r.low, 320, 660);
      const pm = rrToSvg(r.rr, 320, 660);
      const pr = rrToSvg(r.high, 320, 660);
      out += `
        <text x="25" y="${y}" fill="#f43f5e" font-size="10" font-weight="700">${r.label}</text>
        <polygon points="${pl},${y-2} ${pm},${y-7} ${pr},${y-2} ${pm},${y+3}" fill="#f43f5e"/>
        <text x="730" y="${y}" fill="#f43f5e" font-family="JetBrains Mono" font-size="10" font-weight="700">${r.rr.toFixed(2)} [${r.low.toFixed(2)}, ${r.high.toFixed(2)}]</text>
      `;
      y += 18;
    } else {
      const px = rrToSvg(r.rr, 320, 660);
      const low = rrToSvg(r.low, 320, 660);
      const high = rrToSvg(r.high, 320, 660);
      out += `
        <text x="28" y="${y}" fill="#cbd5e1" font-size="10">${r.id}</text>
        <line x1="${low}" y1="${y-3}" x2="${high}" y2="${y-3}" stroke="#38bdf8" stroke-width="1"/>
        <rect x="${px-2.5}" y="${y-5.5}" width="5" height="5" fill="#38bdf8"/>
        <text x="730" y="${y}" fill="#94a3b8" font-family="JetBrains Mono" font-size="9.8">${r.rr.toFixed(2)} [${r.low.toFixed(2)}, ${r.high.toFixed(2)}]</text>
      `;
      y += 15;
    }
  });

  out += `<text x="15" y="425" fill="#94a3b8" font-size="9.8">Test for subgroup differences: Q = 0.99, df = 2, p = 0.610</text>`;
  svg.innerHTML = out;
}

// PRESENTATION CONTROLLER CLASS
class PresentationDeck {
  constructor() {
    this.slides = Array.from(document.querySelectorAll('.slide'));
    this.currentIndex = 0;
    this.totalSlides = this.slides.length; // Exactly 15
    
    this.progressFill = document.getElementById('progressFill');
    this.slideCounter = document.getElementById('slideCounter');
    this.hudSlideTitle = document.getElementById('hudSlideTitle');
    this.dotsContainer = document.getElementById('dotsContainer');
    this.overviewModal = document.getElementById('overviewModal');
    this.overviewGrid = document.getElementById('overviewGrid');

    this.touchStartX = 0;
    this.touchStartY = 0;

    this.init();
  }

  init() {
    this.buildDots();
    this.buildOverview();
    this.bindEvents();
    this.bindTabs();
    this.readHash();
    this.updateSlide(this.currentIndex, false);

    // Render All SVG Visualizations
    renderFigure1();
    renderFigure2();
    renderFigure3();
    renderFigure4();
    renderFigure5();
  }

  buildDots() {
    this.dotsContainer.innerHTML = '';
    this.slides.forEach((slide, idx) => {
      const dot = document.createElement('div');
      dot.className = `dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('title', `Go to slide ${idx + 1}: ${slide.dataset.title}`);
      dot.addEventListener('click', () => this.goTo(idx));
      this.dotsContainer.appendChild(dot);
    });
  }

  buildOverview() {
    this.overviewGrid.innerHTML = '';
    this.slides.forEach((slide, idx) => {
      const card = document.createElement('div');
      card.className = `overview-card ${idx === 0 ? 'active' : ''}`;
      const title = slide.dataset.title || `Slide ${idx + 1}`;
      card.innerHTML = `
        <div class="num">SLIDE ${String(idx + 1).padStart(2, '0')}</div>
        <div class="title">${title}</div>
      `;
      card.addEventListener('click', () => {
        this.goTo(idx);
        this.toggleOverview(false);
      });
      this.overviewGrid.appendChild(card);
    });
  }

  bindTabs() {
    // Slide 10 Switcher
    const tabSvgDiag = document.getElementById('tabSvgDiag');
    const tabImgDiag = document.getElementById('tabImgDiag');
    const viewSvgDiag = document.getElementById('viewSvgDiag');
    const viewImgDiag = document.getElementById('viewImgDiag');

    if (tabSvgDiag && tabImgDiag) {
      tabSvgDiag.addEventListener('click', () => {
        tabSvgDiag.classList.add('active');
        tabImgDiag.classList.remove('active');
        viewSvgDiag.classList.add('active');
        viewImgDiag.classList.remove('active');
      });
      tabImgDiag.addEventListener('click', () => {
        tabImgDiag.classList.add('active');
        tabSvgDiag.classList.remove('active');
        viewImgDiag.classList.add('active');
        viewSvgDiag.classList.remove('active');
      });
    }

    // Slide 11 Switcher
    const tabFigCountry = document.getElementById('tabFigCountry');
    const tabFigSex = document.getElementById('tabFigSex');
    const tabSubTable = document.getElementById('tabSubTable');
    const viewFigCountry = document.getElementById('viewFigCountry');
    const viewFigSex = document.getElementById('viewFigSex');
    const viewSubTable = document.getElementById('viewSubTable');

    if (tabFigCountry && tabFigSex && tabSubTable) {
      tabFigCountry.addEventListener('click', () => {
        [tabFigCountry, tabFigSex, tabSubTable].forEach(b => b.classList.remove('active'));
        [viewFigCountry, viewFigSex, viewSubTable].forEach(v => v.classList.remove('active'));
        tabFigCountry.classList.add('active');
        viewFigCountry.classList.add('active');
      });
      tabFigSex.addEventListener('click', () => {
        [tabFigCountry, tabFigSex, tabSubTable].forEach(b => b.classList.remove('active'));
        [viewFigCountry, viewFigSex, viewSubTable].forEach(v => v.classList.remove('active'));
        tabFigSex.classList.add('active');
        viewFigSex.classList.add('active');
      });
      tabSubTable.addEventListener('click', () => {
        [tabFigCountry, tabFigSex, tabSubTable].forEach(b => b.classList.remove('active'));
        [viewFigCountry, viewFigSex, viewSubTable].forEach(v => v.classList.remove('active'));
        tabSubTable.classList.add('active');
        viewSubTable.classList.add('active');
      });
    }
  }

  readHash() {
    const match = /^#slide-(\d+)$/i.exec(window.location.hash);
    if (match) {
      const parsed = parseInt(match[1], 10) - 1;
      if (parsed >= 0 && parsed < this.totalSlides) {
        this.currentIndex = parsed;
      }
    }
  }

  updateSlide(newIdx, updateHistory = true) {
    if (newIdx < 0 || newIdx >= this.totalSlides) return;

    this.slides.forEach((slide, idx) => {
      slide.classList.remove('active', 'prev');
      if (idx < newIdx) {
        slide.classList.add('prev');
      } else if (idx === newIdx) {
        slide.classList.add('active');
        const scrollArea = slide.querySelector('.slide-scroll');
        if (scrollArea) scrollArea.scrollTop = 0;
      }
    });

    this.currentIndex = newIdx;
    const activeSlide = this.slides[newIdx];
    const currentTitle = activeSlide.dataset.title || `Slide ${newIdx + 1}`;

    const pct = ((newIdx + 1) / this.totalSlides) * 100;
    this.progressFill.style.width = `${pct}%`;
    this.slideCounter.textContent = `${String(newIdx + 1).padStart(2, '0')} / ${String(this.totalSlides).padStart(2, '0')}`;
    this.hudSlideTitle.textContent = currentTitle;

    const dots = this.dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === newIdx);
    });

    const cards = this.overviewGrid.querySelectorAll('.overview-card');
    cards.forEach((c, idx) => {
      c.classList.toggle('active', idx === newIdx);
    });

    if (updateHistory) {
      history.replaceState(null, '', `#slide-${newIdx + 1}`);
    }
  }

  next() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.updateSlide(this.currentIndex + 1);
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.updateSlide(this.currentIndex - 1);
    }
  }

  goTo(idx) {
    this.updateSlide(idx);
  }

  toggleOverview(force) {
    const isOpen = typeof force === 'boolean' ? force : !this.overviewModal.classList.contains('open');
    this.overviewModal.classList.toggle('open', isOpen);
    this.overviewModal.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  bindEvents() {
    document.getElementById('btnNext').addEventListener('click', () => this.next());
    document.getElementById('btnPrev').addEventListener('click', () => this.prev());
    document.getElementById('btnOverview').addEventListener('click', () => this.toggleOverview());
    document.getElementById('btnCloseOverview').addEventListener('click', () => this.toggleOverview(false));
    document.getElementById('btnFullscreen').addEventListener('click', () => this.toggleFullscreen());

    this.overviewModal.addEventListener('click', (e) => {
      if (e.target === this.overviewModal) this.toggleOverview(false);
    });

    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const isModalOpen = this.overviewModal.classList.contains('open');
      if (e.code === 'Escape' && isModalOpen) {
        this.toggleOverview(false);
        return;
      }
      if (isModalOpen) return;

      switch (e.code) {
        case 'ArrowRight':
        case 'Space':
        case 'PageDown':
          e.preventDefault();
          this.next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          this.prev();
          break;
        case 'Home':
          e.preventDefault();
          this.goTo(0);
          break;
        case 'End':
          e.preventDefault();
          this.goTo(this.totalSlides - 1);
          break;
        case 'KeyO':
          e.preventDefault();
          this.toggleOverview();
          break;
        case 'KeyF':
          e.preventDefault();
          this.toggleFullscreen();
          break;
      }
    });

    const deck = document.getElementById('presentationDeck');
    deck.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    deck.addEventListener('touchend', (e) => {
      const deltaX = e.changedTouches[0].screenX - this.touchStartX;
      const deltaY = e.changedTouches[0].screenY - this.touchStartY;

      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) this.next();
        else this.prev();
      }
    }, { passive: true });

    window.addEventListener('hashchange', () => {
      this.readHash();
      this.updateSlide(this.currentIndex, false);
    });
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.presentation = new PresentationDeck();
});