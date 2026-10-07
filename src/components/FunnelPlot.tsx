import React, { useState } from 'react';
import { Sparkles, HelpCircle, Eye, Info } from 'lucide-react';

export const FunnelPlot: React.FC = () => {
  const [showTrimFill, setShowTrimFill] = useState<boolean>(false);
  const [showEggerLine, setShowEggerLine] = useState<boolean>(true);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const realStudies = [
    { id: '1', name: 'Anderson et al.', x: -0.48, se: 0.10, n: 1240 },
    { id: '2', name: 'Chen & Zhang', x: -0.36, se: 0.11, n: 890 },
    { id: '3', name: 'Davies et al.', x: -0.55, se: 0.09, n: 1450 },
    { id: '4', name: 'El-Sayed et al.', x: -0.22, se: 0.14, n: 720 },
    { id: '5', name: 'Fischer & Weber', x: -0.42, se: 0.10, n: 1110 },
    { id: '6', name: 'Gupta & Patel', x: -0.61, se: 0.15, n: 640 },
    { id: '7', name: 'Hernandez et al.', x: -0.39, se: 0.08, n: 1820 },
    { id: '8', name: 'Ibrahim et al.', x: -0.51, se: 0.11, n: 980 },
    { id: '9', name: 'Jorgensen & Holm', x: -0.31, se: 0.08, n: 1560 },
    { id: '10', name: 'Kim & Park', x: -0.67, se: 0.18, n: 520 },
  ];

  const imputedStudies = [
    { id: 'imp-1', name: 'Imputed Study 1 (Duval & Tweedie)', x: -0.21, se: 0.15, n: 600 },
    { id: 'imp-2', name: 'Imputed Study 2 (Duval & Tweedie)', x: -0.19, se: 0.18, n: 490 },
  ];

  const width = 500;
  const height = 260;
  const pooledEffect = -0.43;

  const scaleX = (val: number) => ((val - (-1.0)) / (0.2 - (-1.0))) * width;
  const scaleY = (se: number) => (se / 0.25) * (height - 30) + 15;

  const pooledX = scaleX(pooledEffect);
  const leftBoundX = scaleX(pooledEffect - 1.96 * 0.25);
  const rightBoundX = scaleX(pooledEffect + 1.96 * 0.25);
  const bottomY = scaleY(0.25);
  const topY = scaleY(0);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xl shadow-slate-900/5 flex flex-col justify-between">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setShowTrimFill(!showTrimFill)}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition shadow-sm hover:-translate-y-px ${
              showTrimFill ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25' : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {showTrimFill ? 'Hide Trim & Fill' : 'Show Trim & Fill (2 Studies)'}
          </button>

          <button
            onClick={() => setShowEggerLine(!showEggerLine)}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition shadow-sm hover:-translate-y-px ${
              showEggerLine ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25' : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Egger's Regression Fit
          </button>
        </div>

        <div className="text-[11px] text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
          Symmetrical funnel = minimal publication bias
        </div>
      </div>

      <div className="flex justify-center my-3 overflow-x-auto bg-gradient-to-b from-slate-50/80 to-white rounded-xl border border-slate-100 p-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[560px] h-auto overflow-visible select-none">
          <defs>
            <linearGradient id="funnelFillLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          <polygon
            points={`${pooledX},${topY} ${leftBoundX},${bottomY} ${rightBoundX},${bottomY}`}
            fill="url(#funnelFillLight)"
            stroke="#0891b2"
            strokeWidth="2"
            strokeDasharray="5,4"
          />

          <line x1={pooledX} y1={topY} x2={pooledX} y2={bottomY} stroke="#0891b2" strokeWidth="2.5" strokeDasharray="4,3" />

          {showEggerLine && (
            <line x1={scaleX(-0.48)} y1={scaleY(0.02)} x2={scaleX(-0.35)} y2={scaleY(0.24)} stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />
          )}

          {realStudies.map((s) => {
            const px = scaleX(s.x);
            const py = scaleY(s.se);
            const isHovered = hoveredPoint === s.id;
            return (
              <g key={s.id} onMouseEnter={() => setHoveredPoint(s.id)} onMouseLeave={() => setHoveredPoint(null)} className="cursor-pointer">
                <circle cx={px} cy={py} r={isHovered ? 9 : 6} fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" className="transition-all duration-200" style={{ filter: 'drop-shadow(0 2px 4px rgba(2,132,199,0.4))' }} />
                {isHovered && (
                  <g>
                    <rect x={px - 65} y={py - 28} width="130" height="22" rx="6" fill="#0f172a" />
                    <text x={px} y={py - 13} fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">{s.name} (SE {s.se})</text>
                  </g>
                )}
              </g>
            );
          })}

          {showTrimFill &&
            imputedStudies.map((s) => {
              const px = scaleX(s.x);
              const py = scaleY(s.se);
              const isHovered = hoveredPoint === s.id;
              return (
                <g key={s.id} onMouseEnter={() => setHoveredPoint(s.id)} onMouseLeave={() => setHoveredPoint(null)} className="cursor-pointer">
                  <circle cx={px} cy={py} r={isHovered ? 9 : 7} fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" strokeDasharray="3,2" style={{ filter: 'drop-shadow(0 2px 4px rgba(217,119,6,0.4))' }} />
                  {isHovered && (
                    <g>
                      <rect x={px - 75} y={py - 28} width="150" height="22" rx="6" fill="#92400e" />
                      <text x={px} y={py - 13} fill="#fef3c7" fontSize="9" fontWeight="bold" textAnchor="middle">{s.name}</text>
                    </g>
                  )}
                </g>
              );
            })}

          <text x={pooledX} y={bottomY + 17} fill="#0891b2" fontSize="10" fontWeight="bold" textAnchor="middle">Pooled SMD = -0.43</text>
          <text x={20} y={20} fill="#64748b" fontSize="9" fontWeight="600" textAnchor="start">▲ Small SE (High Precision)</text>
          <text x={20} y={bottomY} fill="#64748b" fontSize="9" fontWeight="600" textAnchor="start">▼ Large SE (Low Precision)</text>
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs">
        <div className="bg-cyan-50/60 p-2.5 rounded-xl border border-cyan-200">
          <div className="flex items-center justify-between text-slate-500 font-semibold mb-0.5">
            <span>Egger's Linear Regression</span>
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="text-cyan-700 font-bold font-mono">t = 1.34, p = 0.208</div>
          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">✓ No significant asymmetry</span>
        </div>

        <div className="bg-indigo-50/60 p-2.5 rounded-xl border border-indigo-200">
          <div className="flex items-center justify-between text-slate-500 font-semibold mb-0.5">
            <span>Begg's Rank Correlation</span>
            <Info className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="text-indigo-700 font-bold font-mono">Kendall's τ = 0.18, p = 0.312</div>
          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">✓ Zero bias flag</span>
        </div>

        <div className="bg-amber-50/60 p-2.5 rounded-xl border border-amber-200">
          <div className="flex items-center justify-between text-slate-500 font-semibold mb-0.5">
            <span>Trim-and-Fill Imputation</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="text-amber-700 font-bold font-mono">2 Imputed Studies</div>
          <span className="text-[10px] text-slate-600 font-semibold">Adjusted SMD: -0.40 (Robust)</span>
        </div>
      </div>
    </div>
  );
};
