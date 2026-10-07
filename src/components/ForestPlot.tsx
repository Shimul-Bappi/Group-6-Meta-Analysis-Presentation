import React, { useState } from 'react';
import { META_STUDIES } from '../data/slidesData';
import { StudyItem } from '../types/presentation';

interface ForestPlotProps {
  interactive?: boolean;
}

export const ForestPlot: React.FC<ForestPlotProps> = ({ interactive = true }) => {
  const [modelType, setModelType] = useState<'random' | 'fixed'>('random');
  const [filterSubgroup, setFilterSubgroup] = useState<string>('All');
  const [hoveredStudy, setHoveredStudy] = useState<StudyItem | null>(null);
  const [metricType, setMetricType] = useState<'SMD' | 'OR'>('SMD');

  const filteredStudies = META_STUDIES.filter(s =>
    filterSubgroup === 'All' ? true : s.subgroup === filterSubgroup
  );

  const totalWeight = filteredStudies.reduce((sum, s) => sum + s.weight, 0);
  const pooledSMD = filteredStudies.reduce((sum, s) => sum + s.effectSize * s.weight, 0) / (totalWeight || 1);
  const pooledLower = pooledSMD - (modelType === 'random' ? 0.09 : 0.06);
  const pooledUpper = pooledSMD + (modelType === 'random' ? 0.09 : 0.06);

  const minX = -1.2;
  const maxX = 0.4;
  const plotWidth = 360;

  const scaleX = (val: number) => {
    const clamped = Math.max(minX, Math.min(maxX, val));
    return ((clamped - minX) / (maxX - minX)) * plotWidth;
  };

  const zeroX = scaleX(0);

  const formatVal = (smd: number) => {
    if (metricType === 'OR') {
      const or = Math.exp(smd * 0.59);
      return or.toFixed(2);
    }
    return smd.toFixed(2);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xl shadow-slate-900/5 flex flex-col justify-between">
      {interactive && (
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 text-xs sm:text-sm">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-500 font-semibold">Model:</span>
            <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200">
              <button
                onClick={() => setModelType('random')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  modelType === 'random'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Random-Effects (D-L)
              </button>
              <button
                onClick={() => setModelType('fixed')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  modelType === 'fixed'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Fixed-Effects (I-V)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-semibold">Subgroup:</span>
            <select
              value={filterSubgroup}
              onChange={(e) => setFilterSubgroup(e.target.value)}
              aria-label="Filter studies by subgroup modality"
              className="bg-white text-cyan-700 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold focus:ring-2 focus:ring-cyan-500 outline-none shadow-sm"
            >
              <option value="All">All Modalities (10)</option>
              <option value="Digital">Digital Only (4)</option>
              <option value="In-Person">In-Person Only (3)</option>
              <option value="Hybrid">Hybrid Only (3)</option>
            </select>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-0.5 border border-slate-200">
            <button
              onClick={() => setMetricType('SMD')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition ${metricType === 'SMD' ? 'bg-indigo-600 text-white shadow' : 'text-slate-500'}`}
            >
              SMD
            </button>
            <button
              onClick={() => setMetricType('OR')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition ${metricType === 'OR' ? 'bg-indigo-600 text-white shadow' : 'text-slate-500'}`}
            >
              OR
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto my-2 -mx-1 px-1">
        <div className="min-w-[620px]">
          <div className="grid grid-cols-12 text-slate-500 text-[11px] font-bold uppercase tracking-wider pb-2 border-b border-slate-200 items-center bg-slate-50/60 rounded-t-lg px-1">
            <div className="col-span-4">Study / Author (Year)</div>
            <div className="col-span-2 text-right">Sample (N)</div>
            <div className="col-span-4 text-center">Effect Size & 95% CI</div>
            <div className="col-span-2 text-right">Weight (%)</div>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {filteredStudies.map((study) => {
              const x1 = scaleX(study.ciLower);
              const x2 = scaleX(study.ciUpper);
              const pointX = scaleX(study.effectSize);
              const boxSize = Math.max(6, Math.min(14, Math.sqrt(study.weight) * 3));
              const isHovered = hoveredStudy?.id === study.id;

              return (
                <div
                  key={study.id}
                  onMouseEnter={() => setHoveredStudy(study)}
                  onMouseLeave={() => setHoveredStudy(null)}
                  className={`grid grid-cols-12 items-center py-1.5 transition-all duration-150 cursor-pointer rounded-lg px-1 ${
                    isHovered ? 'bg-cyan-50 border-l-4 border-cyan-500 shadow-sm' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="col-span-4 flex items-center gap-2 min-w-0">
                    <span className="font-bold text-slate-800 truncate">{study.author}</span>
                    <span className="text-[10px] text-slate-500">({study.year})</span>
                    <span className={`shrink-0 text-[9px] px-1.5 py-0.5 rounded-full font-bold border ${
                      study.subgroup === 'Digital' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      study.subgroup === 'Hybrid' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                      'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {study.subgroup}
                    </span>
                  </div>

                  <div className="col-span-2 text-right font-mono text-slate-600 text-[11px] font-semibold">
                    {study.sampleSize.toLocaleString()}
                  </div>

                  <div className="col-span-4 flex items-center justify-center">
                    <svg width={plotWidth} height="24" className="overflow-visible">
                      <line x1={zeroX} y1="0" x2={zeroX} y2="24" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3,3" />
                      <line x1={x1} y1="12" x2={x2} y2="12" stroke={isHovered ? "#0891b2" : "#64748b"} strokeWidth={isHovered ? "2.5" : "2"} strokeLinecap="round" />
                      <line x1={x1} y1="7" x2={x1} y2="17" stroke={isHovered ? "#0891b2" : "#64748b"} strokeWidth="2" strokeLinecap="round" />
                      <line x1={x2} y1="7" x2={x2} y2="17" stroke={isHovered ? "#0891b2" : "#64748b"} strokeWidth="2" strokeLinecap="round" />
                      <rect x={pointX - boxSize / 2} y={12 - boxSize / 2} width={boxSize} height={boxSize} fill={isHovered ? "#0891b2" : "#0284c7"} rx="2" className="transition-all duration-200" style={{ filter: 'drop-shadow(0 1px 3px rgba(2,132,199,0.4))' }} />
                    </svg>
                  </div>

                  <div className="col-span-2 text-right font-mono text-[11px] text-slate-600">
                    <span className="font-bold text-cyan-700">{formatVal(study.effectSize)}</span>
                    <span className="text-slate-400 text-[10px] ml-1">({study.weight.toFixed(1)}%)</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-12 items-center pt-2 pb-1 text-[10px] font-mono font-semibold">
            <div className="col-span-6 flex justify-start px-2">
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">◀ Favors Intervention</span>
            </div>
            <div className="col-span-6 flex justify-end px-2 gap-2">
              <span className="text-slate-400">Null (0.0)</span>
              <span className="text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">Favors Control ▶</span>
            </div>
          </div>

          <div className="grid grid-cols-12 items-center py-2.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl mt-1 shadow-sm">
            <div className="col-span-4 pl-3">
              <span className="font-bold text-cyan-800 text-xs">
                POOLED SUMMARY ({modelType === 'random' ? 'Random D-L' : 'Fixed I-V'})
              </span>
            </div>
            <div className="col-span-2 text-right font-mono font-bold text-cyan-800 text-xs">
              {filteredStudies.reduce((sum, s) => sum + s.sampleSize, 0).toLocaleString()}
            </div>

            <div className="col-span-4 flex items-center justify-center">
              <svg width={plotWidth} height="28" className="overflow-visible">
                <line x1={zeroX} y1="0" x2={zeroX} y2="28" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" />
                {(() => {
                  const left = scaleX(pooledLower);
                  const right = scaleX(pooledUpper);
                  const center = scaleX(pooledSMD);
                  const points = `${left},14 ${center},6 ${right},14 ${center},22`;
                  return (
                    <polygon points={points} fill="url(#diamondGradient)" stroke="#0891b2" strokeWidth="2" className="transition-all duration-500" style={{ filter: 'drop-shadow(0 2px 6px rgba(8,145,178,0.4))' }} />
                  );
                })()}
                <defs>
                  <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="col-span-2 text-right font-mono font-bold text-cyan-800 text-xs pr-2">
              {formatVal(pooledSMD)} [{formatVal(pooledLower)}, {formatVal(pooledUpper)}]
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
        {[
          { label: 'Overall Effect (Z)', val: 'Z = 9.18 (p < 0.0001)', color: 'text-cyan-700', bg: 'bg-cyan-50/70 border-cyan-200' },
          { label: 'Heterogeneity (I²)', val: '46.8% (p = 0.027)', color: 'text-amber-700', bg: 'bg-amber-50/70 border-amber-200' },
          { label: 'Tau² (Between-Study)', val: 'τ² = 0.038', color: 'text-indigo-700', bg: 'bg-indigo-50/70 border-indigo-200' },
          { label: 'Odds Ratio Equivalent', val: 'OR = 0.64 [0.54, 0.76]', color: 'text-emerald-700', bg: 'bg-emerald-50/70 border-emerald-200' },
        ].map((c, i) => (
          <div key={i} className={`${c.bg} rounded-lg p-2 border shadow-sm`}>
            <div className="text-slate-500 text-[10px] font-semibold">{c.label}</div>
            <div className={`${c.color} font-bold font-mono text-[13px]`}>{c.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
