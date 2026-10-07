import React, { useState } from 'react';
import { Database, Filter, FileText, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const PrismaDiagram: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>('included');

  const nodeDetails: Record<string, { title: string; desc: string; stats: { label: string; val: string }[] }> = {
    databases: {
      title: 'Database Identification Phase',
      desc: 'Systematic electronic search across 6 leading databases with Boolean strings and MeSH descriptors (2015-2024).',
      stats: [
        { label: 'PubMed / MEDLINE', val: '980' },
        { label: 'Cochrane Library', val: '520' },
        { label: 'Embase (Elsevier)', val: '740' },
        { label: 'Scopus & Web of Science', val: '600' }
      ]
    },
    dedup: {
      title: 'Deduplication & Pre-Screening',
      desc: 'Automated DOI matching and manual bibliographic verification via EndNote and Rayyan software.',
      stats: [
        { label: 'Duplicates Removed', val: '920' },
        { label: 'Screening Cohort Left', val: '1,920' },
        { label: 'Deduplication Precision', val: '100%' }
      ]
    },
    screening: {
      title: 'Title & Abstract Screening',
      desc: 'Independent double-blind title/abstract evaluation by two reviewers with third-party referee consensus.',
      stats: [
        { label: 'Abstracts Screened', val: '1,920' },
        { label: 'Irrelevant Excluded', val: '1,778' },
        { label: 'Inter-rater Agreement (κ)', val: '0.88' }
      ]
    },
    eligibility: {
      title: 'Full-Text Eligibility Assessment',
      desc: 'Full-text retrieval and detailed examination against rigorous PICO inclusion and exclusion criteria.',
      stats: [
        { label: 'Full Texts Retrieved', val: '142' },
        { label: 'Full Texts Excluded', val: '124' },
        { label: 'Retrieval Success Rate', val: '100%' }
      ]
    },
    exclusions: {
      title: 'Exclusion Reasons Breakdown (n = 124)',
      desc: 'Systematic documentation of all criteria failed during full-text audit according to PRISMA 2020 item 16b.',
      stats: [
        { label: 'Incompatible Comparator', val: 'n = 48' },
        { label: 'Non-Randomized Study Design', val: 'n = 36' },
        { label: 'Missing Outcome Statistics', val: 'n = 24' },
        { label: 'Duration < 4 Weeks', val: 'n = 16' }
      ]
    },
    included: {
      title: 'Final Included Quantitative Dataset',
      desc: '18 high-fidelity randomized controlled trials incorporated into statistical synthesis and meta-regression.',
      stats: [
        { label: 'Included RCTs', val: '18 Trials' },
        { label: 'Pooled Sample Size', val: 'N = 12,450' },
        { label: 'Digital / Hybrid / In-Person', val: '58% / 18% / 24%' },
        { label: 'Median Study Duration', val: '16 Weeks' }
      ]
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 items-stretch">
      <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xl shadow-slate-900/5 relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">PRISMA 2020 Flow Funnel</span>
          </div>
          <span className="text-[11px] text-slate-500 bg-slate-50 px-2 py-1 rounded-full border border-slate-200">Click any box to inspect</span>
        </div>

        <div className="flex flex-col gap-3 relative z-10">
          <div className="relative">
            <div className="text-[10px] uppercase font-bold text-slate-500 mb-1.5 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-md bg-cyan-100 text-cyan-700 flex items-center justify-center text-[10px] font-black">1</span>
              Identification
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedNode('databases')}
                className={`text-left p-3 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  selectedNode === 'databases'
                    ? 'bg-cyan-50 border-cyan-400 ring-2 ring-cyan-200 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-cyan-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-cyan-700 font-bold text-xs">
                    <Database className="w-3.5 h-3.5" />
                    Database Records
                  </div>
                  <span className="text-xs font-black text-white font-mono bg-cyan-600 px-2 py-0.5 rounded-full shadow-sm">n = 2,840</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">PubMed, Cochrane, Embase, Scopus, WOS</p>
              </button>

              <button
                onClick={() => setSelectedNode('dedup')}
                className={`text-left p-3 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  selectedNode === 'dedup'
                    ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-200 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-rose-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
                    <Filter className="w-3.5 h-3.5" />
                    Duplicates Removed
                  </div>
                  <span className="text-xs font-black text-white font-mono bg-rose-500 px-2 py-0.5 rounded-full shadow-sm">n = 920</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">DOI & bibliographic deduplication</p>
              </button>
            </div>
          </div>

          <div className="flex justify-center -my-1.5">
            <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-400 text-xs flex items-center justify-center font-bold">↓</span>
          </div>

          <div className="relative">
            <div className="text-[10px] uppercase font-bold text-slate-500 mb-1.5 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-black">2</span>
              Screening
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedNode('screening')}
                className={`text-left p-3 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  selectedNode === 'screening'
                    ? 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-200 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs">
                    <FileText className="w-3.5 h-3.5" />
                    Abstracts Screened
                  </div>
                  <span className="text-xs font-black text-white font-mono bg-indigo-500 px-2 py-0.5 rounded-full shadow-sm">n = 1,920</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">Title & abstract blind screening</p>
              </button>

              <button
                onClick={() => setSelectedNode('exclusions')}
                className={`text-left p-3 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  selectedNode === 'exclusions'
                    ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-200 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-amber-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Excluded Records
                  </div>
                  <span className="text-xs font-black text-white font-mono bg-amber-500 px-2 py-0.5 rounded-full shadow-sm">n = 1,778</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">Irrelevant topics or non-clinical</p>
              </button>
            </div>
          </div>

          <div className="flex justify-center -my-1.5">
            <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-400 text-xs flex items-center justify-center font-bold">↓</span>
          </div>

          <div className="relative">
            <div className="text-[10px] uppercase font-bold text-slate-500 mb-1.5 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-black">3&4</span>
              Eligibility & Final Synthesis
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedNode('eligibility')}
                className={`text-left p-3 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  selectedNode === 'eligibility'
                    ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-200 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-blue-700 font-bold text-xs">Full Texts Audited</div>
                  <span className="text-xs font-black text-white font-mono bg-blue-500 px-2 py-0.5 rounded-full shadow-sm">n = 142</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">124 excluded with documented reasons</p>
              </button>

              <button
                onClick={() => setSelectedNode('included')}
                className={`text-left p-3 rounded-xl border transition-all relative overflow-hidden hover:-translate-y-0.5 ${
                  selectedNode === 'included'
                    ? 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-400 ring-2 ring-emerald-300 shadow-lg shadow-emerald-500/15'
                    : 'bg-slate-50 border-emerald-300 hover:border-emerald-400 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    Final Included RCTs
                  </div>
                  <span className="text-xs font-black text-white font-mono bg-gradient-to-r from-emerald-500 to-teal-500 px-2.5 py-0.5 rounded-full shadow-md">
                    18 Studies
                  </span>
                </div>
                <p className="text-[10px] text-emerald-700 font-semibold mt-1">N = 12,450 enrolled patients</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedNode && (
        <div className="w-full lg:w-72 bg-gradient-to-b from-white to-cyan-50/50 rounded-2xl border border-cyan-200 p-4 sm:p-5 flex flex-col justify-between shadow-xl shadow-cyan-500/5 animate-popIn" key={selectedNode}>
          <div>
            <div className="flex items-center gap-2 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="p-1.5 rounded-lg bg-cyan-100 border border-cyan-200">
                <Info className="w-3.5 h-3.5" />
              </span>
              Node Audit Inspector
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">{nodeDetails[selectedNode].title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">{nodeDetails[selectedNode].desc}</p>
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Metrics</span>
              {nodeDetails[selectedNode].stats.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 shadow-sm text-xs animate-slideUp" style={{ animationDelay: `${idx * 60}ms` }}>
                  <span className="text-slate-600 font-medium">{s.label}</span>
                  <span className="font-bold text-cyan-700 font-mono bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-100">{s.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] text-slate-500 flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            PRISMA 2020 Compliant
          </div>
        </div>
      )}
    </div>
  );
};
