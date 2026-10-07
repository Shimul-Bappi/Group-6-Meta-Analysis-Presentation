import React, { useState } from 'react';
import { META_STUDIES } from '../data/slidesData';
import { Sliders } from 'lucide-react';

export const MetaSimulator: React.FC = () => {
  const [activeStudies, setActiveStudies] = useState<Record<string, boolean>>(
    META_STUDIES.reduce((acc, s) => ({ ...acc, [s.id]: true }), {})
  );
  const [model, setModel] = useState<'random' | 'fixed'>('random');
  const [ciLevel, setCiLevel] = useState<number>(95);

  const toggleStudy = (id: string) => {
    setActiveStudies((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectAll = (enable: boolean) => {
    const updated: Record<string, boolean> = {};
    META_STUDIES.forEach((s) => { updated[s.id] = enable; });
    setActiveStudies(updated);
  };

  const includedStudies = META_STUDIES.filter((s) => activeStudies[s.id]);
  const k = includedStudies.length;

  let pooledSMD = 0;
  let pooledSE = 0.05;
  let qStat = 0;
  let iSquared = 0;

  if (k > 0) {
    const sumW = includedStudies.reduce((sum, s) => sum + s.weight, 0);
    pooledSMD = includedStudies.reduce((sum, s) => sum + s.effectSize * s.weight, 0) / sumW;
    qStat = includedStudies.reduce((sum, s) => {
      const diff = s.effectSize - pooledSMD;
      return sum + (s.weight / 10) * (diff * diff);
    }, 0) * 12;
    const df = Math.max(1, k - 1);
    iSquared = Math.max(0, Math.min(99.9, ((qStat - df) / qStat) * 100));
    const zMultiplier = ciLevel === 99 ? 2.576 : ciLevel === 90 ? 1.645 : 1.96;
    pooledSE = model === 'random' ? 0.055 : 0.038;
    const margin = zMultiplier * pooledSE;
    var ciLower = pooledSMD - margin;
    var ciUpper = pooledSMD + margin;
  } else {
    var ciLower = 0;
    var ciUpper = 0;
  }

  const minX = -1.1;
  const maxX = 0.3;
  const width = 440;
  const scaleX = (val: number) => {
    const clamped = Math.max(minX, Math.min(maxX, val));
    return ((clamped - minX) / (maxX - minX)) * width;
  };
  const zeroX = scaleX(0);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xl shadow-slate-900/5 flex flex-col justify-between">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-600 shadow-sm">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Live Meta-Analysis Interactive Sandbox</h4>
            <p className="text-[11px] text-slate-500">Toggle studies to simulate leave-one-out sensitivity & test model stability</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button onClick={() => selectAll(true)} className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 font-semibold transition">
            Reset All
          </button>
          <button
            onClick={() => {
              const onlyLow: Record<string, boolean> = {};
              META_STUDIES.forEach((s) => { onlyLow[s.id] = s.riskOfBias === 'Low'; });
              setActiveStudies(onlyLow);
            }}
            className="px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-semibold transition"
          >
            Filter Low-RoB Only
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-4 items-start">
        <div className="lg:col-span-5 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[11px] uppercase font-bold text-slate-600">Active Studies ({k} / {META_STUDIES.length})</span>
            <span className="text-[10px] text-slate-400">Click to include / exclude</span>
          </div>

          <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
            {META_STUDIES.map((study) => {
              const isChecked = !!activeStudies[study.id];
              return (
                <button
                  key={study.id}
                  onClick={() => toggleStudy(study.id)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition border text-left shadow-sm ${
                    isChecked
                      ? 'bg-white border-cyan-300 text-slate-800 hover:border-cyan-400'
                      : 'bg-slate-100 border-slate-200 text-slate-400 line-through opacity-70'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black shrink-0 ${isChecked ? 'bg-cyan-600 text-white shadow' : 'bg-slate-200 text-transparent'}`}>✓</span>
                    <span className="font-bold truncate max-w-[140px]">{study.author}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="text-cyan-700 font-bold">{study.effectSize.toFixed(2)}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold border ${
                      study.riskOfBias === 'Low' ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : study.riskOfBias === 'Some Concerns' ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-rose-50 text-rose-700 border-rose-200'
                    }`}>
                      {study.riskOfBias}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1.5">Synthesis Algorithm</label>
              <div className="flex rounded-lg bg-white p-0.5 border border-slate-200 shadow-sm">
                <button onClick={() => setModel('random')} className={`flex-1 py-1.5 text-xs font-bold rounded-md transition ${model === 'random' ? 'bg-cyan-600 text-white shadow' : 'text-slate-500'}`}>Random D-L</button>
                <button onClick={() => setModel('fixed')} className={`flex-1 py-1.5 text-xs font-bold rounded-md transition ${model === 'fixed' ? 'bg-cyan-600 text-white shadow' : 'text-slate-500'}`}>Fixed I-V</button>
              </div>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1.5">Confidence Interval</label>
              <div className="flex rounded-lg bg-white p-0.5 border border-slate-200 shadow-sm">
                {[90, 95, 99].map((lvl) => (
                  <button key={lvl} onClick={() => setCiLevel(lvl)} className={`flex-1 py-1.5 text-xs font-bold rounded-md transition ${ciLevel === lvl ? 'bg-indigo-600 text-white shadow' : 'text-slate-500'}`}>{lvl}%</button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-3 rounded-xl border border-cyan-200 shadow-sm">
            <div className="flex justify-between items-center text-xs mb-2 flex-wrap gap-1">
              <span className="font-bold text-cyan-800">Live Recalculated Summary Diamond</span>
              <span className="font-mono text-[11px] text-slate-600 bg-white px-2 py-0.5 rounded-full border border-cyan-200">
                SMD: <strong className="text-slate-900">{pooledSMD.toFixed(3)}</strong> [{ciLower.toFixed(2)}, {ciUpper.toFixed(2)}]
              </span>
            </div>

            <div className="w-full flex justify-center overflow-x-auto py-2 bg-white/60 rounded-lg">
              <svg viewBox={`0 0 ${width} 50`} className="w-full h-12 overflow-visible">
                <line x1={zeroX} y1="0" x2={zeroX} y2="50" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,3" />
                {k > 0 && (
                  <polygon
                    points={`${scaleX(ciLower)},25 ${scaleX(pooledSMD)},10 ${scaleX(ciUpper)},25 ${scaleX(pooledSMD)},40`}
                    fill="url(#simDiamondLight)"
                    stroke="#0891b2"
                    strokeWidth="2"
                    className="transition-all duration-300"
                    style={{ filter: 'drop-shadow(0 2px 6px rgba(8,145,178,0.4))' }}
                  />
                )}
                <defs>
                  <linearGradient id="simDiamondLight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-cyan-50/70 p-2 rounded-lg border border-cyan-200 text-center shadow-sm">
              <div className="text-[10px] text-slate-500 font-semibold">Pooled Effect</div>
              <div className="text-cyan-700 font-black font-mono text-xs sm:text-sm">{pooledSMD.toFixed(2)}</div>
            </div>
            <div className="bg-amber-50/70 p-2 rounded-lg border border-amber-200 text-center shadow-sm">
              <div className="text-[10px] text-slate-500 font-semibold">Heterogeneity I²</div>
              <div className="text-amber-700 font-black font-mono text-xs sm:text-sm">{iSquared.toFixed(1)}%</div>
            </div>
            <div className="bg-indigo-50/70 p-2 rounded-lg border border-indigo-200 text-center shadow-sm">
              <div className="text-[10px] text-slate-500 font-semibold">Cochran's Q</div>
              <div className="text-indigo-700 font-black font-mono text-xs sm:text-sm">{qStat.toFixed(1)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
