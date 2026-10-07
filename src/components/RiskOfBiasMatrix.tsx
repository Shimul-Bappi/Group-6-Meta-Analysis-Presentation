import React, { useState } from 'react';
import { ROB_DATA } from '../data/slidesData';
import { Check, HelpCircle, X, ShieldAlert, BarChart3, ListFilter } from 'lucide-react';

export const RiskOfBiasMatrix: React.FC = () => {
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'matrix' | 'summary'>('matrix');

  const filteredData = ROB_DATA.filter((item) => {
    if (filterLevel === 'all') return true;
    return item.overall.toLowerCase() === filterLevel.toLowerCase();
  });

  const renderBadge = (status: 'Low' | 'Some Concerns' | 'High') => {
    switch (status) {
      case 'Low':
        return (
          <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-emerald-200 text-white flex items-center justify-center shadow-md shadow-emerald-500/25" title="Low risk of bias">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        );
      case 'Some Concerns':
        return (
          <div className="w-6 h-6 rounded-full bg-amber-400 border-2 border-amber-200 text-white flex items-center justify-center shadow-md shadow-amber-500/25" title="Some concerns">
            <HelpCircle className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        );
      case 'High':
        return (
          <div className="w-6 h-6 rounded-full bg-rose-500 border-2 border-rose-200 text-white flex items-center justify-center shadow-md shadow-rose-500/25" title="High risk of bias">
            <X className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        );
    }
  };

  const domains = [
    { key: 'd1', label: 'D1: Randomization' },
    { key: 'd2', label: 'D2: Deviations' },
    { key: 'd3', label: 'D3: Missing Data' },
    { key: 'd4', label: 'D4: Measurement' },
    { key: 'd5', label: 'D5: Selective Report' },
    { key: 'overall', label: 'Overall Bias' },
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xl shadow-slate-900/5 flex flex-col justify-between">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition shadow-sm ${
              activeTab === 'matrix' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200'
            }`}
          >
            <ListFilter className="w-3.5 h-3.5" />
            Traffic-Light Matrix
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition shadow-sm ${
              activeTab === 'summary' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Domain Summary Bars
          </button>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="bg-white text-slate-700 border border-slate-200 rounded-lg px-2 py-1.5 text-xs font-semibold outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
            aria-label="Filter risk of bias by level"
          >
            <option value="all">All Overall Ratings</option>
            <option value="low">Low Risk Only</option>
            <option value="some concerns">Some Concerns Only</option>
            <option value="high">High Risk Only</option>
          </select>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-slate-600 font-semibold flex-wrap">
          <div className="flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Low (72%)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-full border border-amber-200">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span>Some (20%)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-rose-50 px-2 py-1 rounded-full border border-rose-200">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span>High (8%)</span>
          </div>
        </div>
      </div>

      {activeTab === 'matrix' ? (
        <div className="overflow-x-auto my-3 -mx-1 px-1">
          <div className="min-w-[580px]">
            <div className="grid grid-cols-12 text-slate-500 text-[11px] font-bold uppercase tracking-wider pb-2 border-b border-slate-200 bg-slate-50/70 rounded-t-lg px-1">
              <div className="col-span-4">Study / Author</div>
              <div className="col-span-1 text-center" title="D1: Randomization process">D1</div>
              <div className="col-span-1 text-center" title="D2: Deviations from intended interventions">D2</div>
              <div className="col-span-1 text-center" title="D3: Missing outcome data">D3</div>
              <div className="col-span-1 text-center" title="D4: Measurement of the outcome">D4</div>
              <div className="col-span-1 text-center" title="D5: Selection of the reported result">D5</div>
              <div className="col-span-3 text-center">Overall Risk</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              {filteredData.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 items-center py-2 hover:bg-cyan-50/50 px-1 rounded-lg transition-colors">
                  <div className="col-span-4 font-bold text-slate-800 truncate">{item.study}</div>
                  <div className="col-span-1 flex justify-center">{renderBadge(item.d1)}</div>
                  <div className="col-span-1 flex justify-center">{renderBadge(item.d2)}</div>
                  <div className="col-span-1 flex justify-center">{renderBadge(item.d3)}</div>
                  <div className="col-span-1 flex justify-center">{renderBadge(item.d4)}</div>
                  <div className="col-span-1 flex justify-center">{renderBadge(item.d5)}</div>
                  <div className="col-span-3 flex justify-center">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm ${
                      item.overall === 'Low' ? 'bg-emerald-50 text-emerald-700 border-emerald-300' :
                      item.overall === 'Some Concerns' ? 'bg-amber-50 text-amber-700 border-amber-300' :
                      'bg-rose-50 text-rose-700 border-rose-300'
                    }`}>
                      {item.overall}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="py-4 space-y-3.5">
          {domains.map((dom, i) => {
            const lowCount = ROB_DATA.filter((r) => (r as unknown as Record<string, string>)[dom.key] === 'Low').length;
            const someCount = ROB_DATA.filter((r) => (r as unknown as Record<string, string>)[dom.key] === 'Some Concerns').length;
            const highCount = ROB_DATA.filter((r) => (r as unknown as Record<string, string>)[dom.key] === 'High').length;
            const total = ROB_DATA.length;
            const lowPct = Math.round((lowCount / total) * 100);
            const somePct = Math.round((someCount / total) * 100);
            const highPct = Math.round((highCount / total) * 100);

            return (
              <div key={i} className="text-xs animate-slideUp" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-bold text-slate-700">{dom.label}</span>
                  <span className="text-slate-500 font-mono text-[11px] bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">{lowPct}% Low Risk</span>
                </div>
                <div className="h-5 w-full bg-slate-100 rounded-full flex overflow-hidden border border-slate-200 shadow-inner p-0.5 gap-0.5">
                  <div style={{ width: `${lowPct}%` }} className="bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-700 shadow-sm" title={`Low Risk: ${lowPct}%`}></div>
                  <div style={{ width: `${somePct}%` }} className="bg-gradient-to-r from-amber-300 to-amber-400 rounded-full transition-all duration-700 shadow-sm" title={`Some Concerns: ${somePct}%`}></div>
                  <div style={{ width: `${highPct}%` }} className="bg-gradient-to-r from-rose-400 to-rose-500 rounded-full transition-all duration-700 shadow-sm" title={`High Risk: ${highPct}%`}></div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between flex-wrap gap-2">
        <span className="flex items-center gap-1.5 font-semibold">
          <ShieldAlert className="w-3.5 h-3.5 text-cyan-600" />
          Cochrane Handbook for Systematic Reviews (v6.3)
        </span>
        <span className="font-mono bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">Assessed by Group 6</span>
      </div>
    </div>
  );
};
