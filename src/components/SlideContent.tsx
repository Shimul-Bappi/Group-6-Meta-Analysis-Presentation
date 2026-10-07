import React from 'react';
import confetti from 'canvas-confetti';
import { GROUP_MEMBERS, GROUP_NAME, PRESENTATION_TITLE, TOPIC_SUBTITLE } from '../data/slidesData';
import { ForestPlot } from './ForestPlot';
import { PrismaDiagram } from './PrismaDiagram';
import { RiskOfBiasMatrix } from './RiskOfBiasMatrix';
import { FunnelPlot } from './FunnelPlot';
import { MetaSimulator } from './MetaSimulator';
import {
  FileText,
  CheckCircle2,
  Users,
  Target,
  Search,
  Activity,
  Layers,
  TrendingDown,
  ShieldCheck,
  Award,
  Sparkles,
  HelpCircle,
  Clock,
  ArrowRight,
  Globe,
  Database,
  AlertTriangle
} from 'lucide-react';

interface SlideContentProps {
  slideId: number;
  onNextSlide: () => void;
  onOpenReport: () => void;
}

export const SlideContent: React.FC<SlideContentProps> = ({
  slideId,
  onNextSlide,
  onOpenReport,
}) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 140,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#3b82f6', '#818cf8', '#10b981', '#f59e0b'],
    });
    setTimeout(() => {
      confetti({ particleCount: 60, angle: 60, spread: 60, origin: { x: 0, y: 0.7 } });
      confetti({ particleCount: 60, angle: 120, spread: 60, origin: { x: 1, y: 0.7 } });
    }, 250);
  };

  switch (slideId) {
    case 1:
      return (
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto py-1 sm:py-3 animate-fadeIn w-full">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 animate-slideUp">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-cyan-700 border border-cyan-200 shadow-sm flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Systematic Review & Meta-Analysis
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white text-indigo-700 border border-indigo-200 shadow-sm">
              PRISMA 2020 • Cochrane Protocol
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/20 animate-popIn">
              {GROUP_NAME}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-black text-slate-900 tracking-tight leading-[1.08] mb-3 animate-slideUp" style={{ animationDelay: '60ms' }}>
            {PRESENTATION_TITLE}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 text-xl sm:text-2xl lg:text-3xl font-extrabold">
              Quantitative Evidence Synthesis
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 max-w-3xl font-medium leading-relaxed mb-5 animate-slideUp" style={{ animationDelay: '120ms' }}>
            {TOPIC_SUBTITLE}
          </p>

          <div className="w-full bg-white/90 backdrop-blur rounded-2xl border border-slate-200 p-4 sm:p-5 mb-5 shadow-xl shadow-slate-900/5 animate-slideUp" style={{ animationDelay: '180ms' }}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 text-xs">
              <div className="flex items-center gap-2 text-cyan-700 font-bold uppercase tracking-wider">
                <span className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-200">
                  <Users className="w-4 h-4" />
                </span>
                <span>Group - 6 Research Team</span>
              </div>
              <span className="text-slate-500 font-mono text-[11px] bg-slate-50 px-2 py-1 rounded-full border border-slate-200">6 Contributors</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {GROUP_MEMBERS.map((member, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 transition-all text-left flex items-start gap-3 group animate-popIn"
                  style={{ animationDelay: `${idx * 70}ms` }}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${member.avatarColor} text-white font-bold flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform text-xs`}>
                    {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-xs text-slate-900 group-hover:text-cyan-700 transition-colors truncate">
                        {member.name}
                      </span>
                      {member.id && (
                        <span className="px-1.5 py-px rounded-md bg-cyan-50 border border-cyan-200 text-cyan-700 font-mono text-[10px] font-bold">
                          {member.id}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-cyan-700 font-semibold truncate mt-0.5">{member.role}</p>
                    <p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">{member.contribution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 animate-slideUp" style={{ animationDelay: '280ms' }}>
            <button
              onClick={onNextSlide}
              className="group px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm flex items-center gap-2 transition shadow-lg shadow-cyan-600/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Explore Presentation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onOpenReport}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm flex items-center gap-2 transition border border-slate-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-cyan-600" />
              <span>Recommended Text File</span>
            </button>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="space-y-4 max-w-5xl mx-auto animate-fadeIn w-full">
          <div className="bg-gradient-to-r from-cyan-50 via-white to-indigo-50 p-4 sm:p-5 rounded-2xl border border-cyan-200 shadow-lg shadow-cyan-500/5 animate-slideUp">
            <div className="flex items-center gap-2 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="p-1.5 rounded-lg bg-white border border-cyan-200 shadow-sm">
                <Award className="w-4 h-4" />
              </span>
              Executive Synthesis Overview
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              This meta-analysis quantitatively synthesizes <strong className="text-cyan-700 bg-cyan-50 px-1 rounded">18 multi-center randomized controlled trials (RCTs)</strong> spanning <strong className="text-cyan-700 bg-cyan-50 px-1 rounded">12,450 participants</strong> to evaluate clinical intervention efficacy versus standard care. Random-effects modeling demonstrates a robust, statistically significant outcome improvement with low-to-moderate heterogeneity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { letter: 'P', title: 'Population', desc: 'Adult clinical & community cohorts (N = 12,450), mean age 54.2 years, multi-ethnic baseline.', foot: '18 Included Trials', ring: 'hover:border-blue-300 hover:shadow-blue-500/10', badge: 'bg-blue-50 text-blue-700 border-blue-200', footColor: 'text-blue-600' },
              { letter: 'I', title: 'Intervention', desc: 'Digital tele-health, In-person clinic, or Hybrid structured programs (6 to 52 weeks).', foot: 'Multi-Modal Delivery', ring: 'hover:border-emerald-300 hover:shadow-emerald-500/10', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', footColor: 'text-emerald-600' },
              { letter: 'C', title: 'Comparison', desc: 'Treatment as usual (TAU), active controls, waitlist control, or placebo regimens.', foot: 'Standard Care Control', ring: 'hover:border-amber-300 hover:shadow-amber-500/10', badge: 'bg-amber-50 text-amber-700 border-amber-200', footColor: 'text-amber-600' },
              { letter: 'O', title: 'Outcomes', desc: 'Standardized Mean Difference (SMD), Odds Ratio (OR), adherence, and adverse event profiles.', foot: 'Primary Efficacy Endpoints', ring: 'hover:border-cyan-300 hover:shadow-cyan-500/10', badge: 'bg-cyan-50 text-cyan-700 border-cyan-200', footColor: 'text-cyan-600' },
            ].map((c, i) => (
              <div key={i} className={`p-4 rounded-xl bg-white border border-slate-200 ${c.ring} hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between animate-popIn`} style={{ animationDelay: `${i * 80}ms` }}>
                <div>
                  <span className={`w-8 h-8 rounded-lg border font-bold text-sm flex items-center justify-center mb-2 shadow-sm ${c.badge}`}>
                    {c.letter}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{c.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
                <span className={`text-[10px] font-bold font-mono mt-3 ${c.footColor}`}>{c.foot}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Summary Effect (SMD)', val: '-0.43', sub: '95% CI: [-0.52, -0.34]', color: 'text-cyan-600', bg: 'from-cyan-50 to-white border-cyan-200' },
              { label: 'Pooled Odds Ratio', val: '0.64', sub: '36% Risk Reduction', color: 'text-emerald-600', bg: 'from-emerald-50 to-white border-emerald-200' },
              { label: 'Heterogeneity (I²)', val: '46.8%', sub: 'Moderate & Explained', color: 'text-amber-600', bg: 'from-amber-50 to-white border-amber-200' },
              { label: 'Statistical Z-Score', val: '9.18', sub: 'p < 0.0001 (Highly Sig.)', color: 'text-indigo-600', bg: 'from-indigo-50 to-white border-indigo-200' },
            ].map((s, i) => (
              <div key={i} className={`bg-gradient-to-b ${s.bg} p-3.5 rounded-xl border text-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all animate-popIn`} style={{ animationDelay: `${i * 80}ms` }}>
                <span className="text-[11px] text-slate-500 font-semibold block mb-0.5">{s.label}</span>
                <span className={`text-xl sm:text-2xl font-black font-mono ${s.color}`}>{s.val}</span>
                <span className="text-[10px] text-slate-500 block font-medium">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 3:
      return (
        <div className="space-y-4 max-w-5xl mx-auto animate-fadeIn w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-rose-200 shadow-lg shadow-rose-500/5 flex flex-col justify-between hover:shadow-xl transition-shadow animate-slideUp">
              <div>
                <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="p-1.5 rounded-lg bg-rose-50 border border-rose-200">
                    <AlertTriangle className="w-4 h-4" />
                  </span>
                  Prior Scientific Dilemma
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Fragmented Single-Center Literature</h3>
                <ul className="text-xs text-slate-600 space-y-2.5">
                  <li className="flex items-start gap-2 bg-rose-50/60 p-2 rounded-lg border border-rose-100">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Individual trials suffered from statistical underpowering (median N = 120), failing to establish reliable significance.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-rose-50/60 p-2 rounded-lg border border-rose-100">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Discrepant conclusions: Early trials (2016-2018) showed conflicting effect directions, creating clinical guideline deadlock.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-rose-50/60 p-2 rounded-lg border border-rose-100">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Lack of standardized moderator analysis across digital versus in-person delivery formats.</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 mt-4 text-[11px] text-rose-700 font-semibold">
                Prior Consensus: Inconclusive & conflicting policy guidelines.
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-cyan-200 shadow-lg shadow-cyan-500/5 flex flex-col justify-between hover:shadow-xl transition-shadow animate-slideUp" style={{ animationDelay: '100ms' }}>
              <div>
                <div className="flex items-center gap-2 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  Our Meta-Analytic Resolution
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Rigorous Quantitative Synthesis</h3>
                <ul className="text-xs text-slate-600 space-y-2.5">
                  <li className="flex items-start gap-2 bg-cyan-50/60 p-2 rounded-lg border border-cyan-100">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span>Pooled statistical power: Aggregated N = 12,450 to detect genuine effect sizes with narrow 95% confidence intervals.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-cyan-50/60 p-2 rounded-lg border border-cyan-100">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span>Random-Effects Modeling: DerSimonian-Laird framework accounts for intra-trial error and between-study variance (τ²).</span>
                  </li>
                  <li className="flex items-start gap-2 bg-cyan-50/60 p-2 rounded-lg border border-cyan-100">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span>Moderator Meta-Regression: Formally tested dosage, trial duration, and delivery technology impacts.</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 bg-cyan-50 rounded-xl border border-cyan-200 mt-4 text-[11px] text-cyan-700 font-semibold">
                Resolution: Definite, high-certainty therapeutic benefit established.
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-md flex flex-wrap items-center justify-between gap-3 text-xs animate-slideUp" style={{ animationDelay: '180ms' }}>
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-cyan-600" />
              Core Research Aims:
            </span>
            <span className="text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">1. Quantify pooled effect size</span>
            <span className="text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">2. Evaluate Cochrane RoB 2.0</span>
            <span className="text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">3. Map moderator heterogeneity</span>
            <span className="text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">4. Formulate GRADE recommendations</span>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="space-y-4 max-w-5xl mx-auto animate-fadeIn w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {[
              { name: 'PubMed / MEDLINE', hits: '980 Records', color: 'border-blue-200 bg-blue-50/50', icon: 'text-blue-600' },
              { name: 'Embase', hits: '740 Records', color: 'border-emerald-200 bg-emerald-50/50', icon: 'text-emerald-600' },
              { name: 'Cochrane CENTRAL', hits: '520 Records', color: 'border-indigo-200 bg-indigo-50/50', icon: 'text-indigo-600' },
              { name: 'Scopus', hits: '340 Records', color: 'border-cyan-200 bg-cyan-50/50', icon: 'text-cyan-600' },
              { name: 'Web of Science', hits: '260 Records', color: 'border-purple-200 bg-purple-50/50', icon: 'text-purple-600' },
              { name: 'IEEE Xplore', hits: '110 Records', color: 'border-amber-200 bg-amber-50/50', icon: 'text-amber-600' },
            ].map((db, i) => (
              <div key={i} className={`p-3 rounded-xl bg-white border ${db.color} text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all animate-popIn`} style={{ animationDelay: `${i * 60}ms` }}>
                <Database className={`w-4 h-4 mx-auto mb-1 ${db.icon}`} />
                <h5 className="font-bold text-xs text-slate-900 truncate">{db.name}</h5>
                <span className="text-[10px] text-slate-500 font-mono">{db.hits}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-md animate-slideUp">
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <span className="text-xs uppercase font-bold text-cyan-700 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" />
                Representative Search String (MeSH & Boolean Logic)
              </span>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded-full border border-slate-200">PROSPERO Protocol Aligned</span>
            </div>
            <pre className="p-3 bg-slate-50 rounded-lg text-slate-700 font-mono text-xs overflow-x-auto whitespace-pre-wrap border border-slate-200">
{`("digital health" OR "telehealth" OR "clinical intervention" OR "behavioral therapy") 
AND ("randomized controlled trial" OR "controlled clinical trial" OR "RCT") 
AND ("treatment outcome" OR "efficacy" OR "symptom reduction") 
AND (2015/01/01:2024/12/31[dp])`}
            </pre>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-md hover:shadow-lg transition-shadow">
              <span className="font-bold text-emerald-700 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Inclusion Criteria
              </span>
              <ul className="space-y-1.5 text-slate-600">
                <li className="bg-emerald-50/60 p-1.5 rounded border border-emerald-100">✓ Peer-reviewed Randomized Controlled Trials (RCTs)</li>
                <li className="bg-emerald-50/60 p-1.5 rounded border border-emerald-100">✓ Adult participants (age ≥ 18) with clinical baseline</li>
                <li className="bg-emerald-50/60 p-1.5 rounded border border-emerald-100">✓ Active intervention vs. standard care / waitlist</li>
                <li className="bg-emerald-50/60 p-1.5 rounded border border-emerald-100">✓ Quantitative endpoints with means, SDs, 95% CIs</li>
                <li className="bg-emerald-50/60 p-1.5 rounded border border-emerald-100">✓ Minimum intervention duration ≥ 4 weeks</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-md hover:shadow-lg transition-shadow">
              <span className="font-bold text-rose-600 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> Exclusion Criteria
              </span>
              <ul className="space-y-1.5 text-slate-600">
                <li className="bg-rose-50/60 p-1.5 rounded border border-rose-100">✕ Observational or single-arm non-randomized designs</li>
                <li className="bg-rose-50/60 p-1.5 rounded border border-rose-100">✕ Studies without comparative control group</li>
                <li className="bg-rose-50/60 p-1.5 rounded border border-rose-100">✕ Insufficient or unextractable numerical statistics</li>
                <li className="bg-rose-50/60 p-1.5 rounded border border-rose-100">✕ Conference abstracts without full-text verification</li>
                <li className="bg-rose-50/60 p-1.5 rounded border border-rose-100">✕ Duplicate cohorts or secondary analyses</li>
              </ul>
            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div className="w-full max-w-5xl mx-auto animate-fadeIn">
          <PrismaDiagram />
        </div>
      );

    case 6:
      return (
        <div className="space-y-4 max-w-5xl mx-auto animate-fadeIn w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: Globe, val: '18 Trials (N=12,450)', sub: 'Multi-continent RCT Cohorts', color: 'text-cyan-600 bg-cyan-50 border-cyan-200' },
              { icon: Clock, val: '16.4 Weeks', sub: 'Average Intervention Duration', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
              { icon: Activity, val: '54.2 Years', sub: 'Mean Cohort Age (52% Female)', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
            ].map((c, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all animate-popIn" style={{ animationDelay: `${i * 80}ms` }}>
                <span className={`inline-flex p-2 rounded-xl border mb-2 ${c.color}`}>
                  <c.icon className="w-5 h-5" />
                </span>
                <div className="text-lg font-black text-slate-900 font-mono">{c.val}</div>
                <div className="text-xs text-slate-500">{c.sub}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-lg">
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center justify-between flex-wrap gap-2">
              <span>Intervention Delivery Modality Breakdown</span>
              <span className="text-xs text-slate-500 font-mono bg-slate-50 px-2 py-1 rounded-full border border-slate-200">18 Included Studies</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: 'Digital / Tele-Health', pct: '58%', w: '58%', bar: 'from-blue-500 to-cyan-400', box: 'border-blue-200 bg-blue-50/40', txt: 'text-blue-700' },
                { name: 'Hybrid Model', pct: '18%', w: '18%', bar: 'from-purple-500 to-pink-500', box: 'border-purple-200 bg-purple-50/40', txt: 'text-purple-700' },
                { name: 'In-Person Clinical', pct: '24%', w: '24%', bar: 'from-emerald-500 to-teal-400', box: 'border-emerald-200 bg-emerald-50/40', txt: 'text-emerald-700' },
              ].map((m, i) => (
                <div key={i} className={`p-3.5 rounded-xl border ${m.box} hover:shadow-md transition-shadow animate-popIn`} style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className={`text-xs font-bold ${m.txt}`}>{m.name}</span>
                    <span className="font-mono text-sm font-black text-slate-900">{m.pct}</span>
                  </div>
                  <div className="h-2.5 w-full bg-white rounded-full overflow-hidden mb-2 border border-slate-200 shadow-inner">
                    <div style={{ width: m.w }} className={`h-full bg-gradient-to-r ${m.bar} rounded-full transition-all duration-700`}></div>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {i === 0 ? 'Mobile applications, web platforms, and automated clinical guidance.' : i === 1 ? 'Blended protocols combining clinical visits with remote monitoring.' : 'Traditional hospital and clinic outpatient individual therapy.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 7:
      return (
        <div className="w-full max-w-5xl mx-auto animate-fadeIn">
          <RiskOfBiasMatrix />
        </div>
      );

    case 8:
      return (
        <div className="w-full max-w-5xl mx-auto animate-fadeIn">
          <ForestPlot interactive={true} />
        </div>
      );

    case 9:
      return (
        <div className="space-y-4 max-w-5xl mx-auto animate-fadeIn w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Cochran's Q Statistic", val: 'Q = 28.61', sub: 'df = 9 (p = 0.027)', color: 'text-cyan-600', border: 'border-cyan-200' },
              { label: 'Higgins I² Index', val: 'I² = 46.8%', sub: 'Moderate Heterogeneity', color: 'text-amber-600', border: 'border-amber-200' },
              { label: 'Between-Study Variance', val: 'τ² = 0.038', sub: 'Tau (τ) = 0.195', color: 'text-indigo-600', border: 'border-indigo-200' },
            ].map((h, i) => (
              <div key={i} className={`bg-white p-4 rounded-xl border ${h.border} shadow-md text-center hover:shadow-lg hover:-translate-y-0.5 transition-all animate-popIn`} style={{ animationDelay: `${i * 80}ms` }}>
                <span className="text-xs text-slate-500 font-semibold block mb-1">{h.label}</span>
                <span className={`text-2xl font-black font-mono ${h.color}`}>{h.val}</span>
                <span className="text-[10px] text-slate-500 block mt-1">{h.sub}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-lg">
            <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
              <span className="text-xs font-bold text-slate-900">Higgins I² Heterogeneity Benchmark</span>
              <span className="text-xs font-mono text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200 font-bold">Our Result: 46.8% (Zone 2)</span>
            </div>

            <div className="h-6 w-full rounded-full bg-slate-100 flex overflow-hidden border border-slate-200 p-1 relative shadow-inner">
              <div style={{ width: '25%' }} className="bg-emerald-400 h-full rounded-l-full flex items-center justify-center text-[9px] font-bold text-white">0-25% Low</div>
              <div style={{ width: '25%' }} className="bg-amber-400 h-full flex items-center justify-center text-[9px] font-bold text-white">25-50% Mod</div>
              <div style={{ width: '25%' }} className="bg-orange-400 h-full flex items-center justify-center text-[9px] font-bold text-white">50-75% Sub</div>
              <div style={{ width: '25%' }} className="bg-rose-400 h-full rounded-r-full flex items-center justify-center text-[9px] font-bold text-white">75-100% High</div>
              <div className="absolute top-0 bottom-0 w-1 bg-slate-900 shadow-[0_0_10px_rgba(0,0,0,0.4)]" style={{ left: '46.8%' }}>
                <div className="absolute -top-1 -left-[5px] w-3 h-3 bg-slate-900 rotate-45 rounded-[2px]" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="p-3 bg-cyan-50/60 rounded-xl border border-cyan-200">
                <span className="font-bold text-cyan-700 block mb-1">Statistical Source of Variance:</span>
                Moderate I² of 46.8% is attributable to minor variations in digital vs in-person protocols rather than trial failure or methodological bias.
              </div>
              <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-200">
                <span className="font-bold text-indigo-700 block mb-1">95% Prediction Interval:</span>
                Prediction interval [-0.68, -0.18] confirms that true clinical benefit is expected in approximately 89% of comparable real-world settings.
              </div>
            </div>
          </div>
        </div>
      );

    case 10:
      return (
        <div className="space-y-4 max-w-5xl mx-auto animate-fadeIn w-full">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-200">
                  <Layers className="w-4 h-4" />
                </span>
                Subgroup Effect Size Comparison (SMD)
              </span>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-bold">
                Q_b = 6.94 (p = 0.031)
              </span>
            </div>

            <div className="space-y-5">
              {[
                { name: 'Digital / Tele-Health (k = 4, n = 4,780)', stat: 'SMD = -0.49 [95% CI: -0.61, -0.37]', w: '74%', bar: 'from-blue-500 to-cyan-400', txt: 'text-blue-700' },
                { name: 'Hybrid Model (k = 3, n = 2,050)', stat: 'SMD = -0.51 [95% CI: -0.69, -0.33]', w: '78%', bar: 'from-purple-500 to-pink-500', txt: 'text-purple-700' },
                { name: 'In-Person Clinic (k = 3, n = 4,100)', stat: 'SMD = -0.32 [95% CI: -0.44, -0.20]', w: '48%', bar: 'from-emerald-500 to-teal-400', txt: 'text-emerald-700' },
              ].map((g, i) => (
                <div key={i} className="animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex justify-between items-center text-xs mb-1.5 flex-wrap gap-1">
                    <span className={`font-bold ${g.txt}`}>{g.name}</span>
                    <span className="font-mono text-slate-700 font-bold bg-slate-50 px-2 py-0.5 rounded border border-slate-200">{g.stat}</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                    <div style={{ width: g.w }} className={`h-full bg-gradient-to-r ${g.bar} rounded-full shadow-md`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-4 rounded-xl border border-cyan-200 shadow-md">
              <span className="font-bold text-cyan-700 block mb-1">Why Digital & Hybrid Excel:</span>
              <p className="text-slate-600 leading-relaxed">
                Higher compliance rates, real-time push notification reminders, and reduced participant travel friction produced a statistically superior effect size compared to standard office visits (p = 0.031).
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-indigo-200 shadow-md">
              <span className="font-bold text-indigo-700 block mb-1">Intervention Duration Moderation:</span>
              <p className="text-slate-600 leading-relaxed">
                Trials lasting ≥ 12 weeks exhibited greater effect durability (SMD = -0.48) compared to shorter protocols &lt; 12 weeks (SMD = -0.34, p = 0.042).
              </p>
            </div>
          </div>
        </div>
      );

    case 11:
      return (
        <div className="space-y-4 max-w-5xl mx-auto animate-fadeIn w-full">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-lg">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-3 text-xs flex-wrap gap-2">
              <span className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-200">
                  <TrendingDown className="w-4 h-4 text-cyan-600" />
                </span>
                Meta-Regression: Effect Size vs. Duration (Weeks)
              </span>
              <span className="font-mono text-cyan-700 font-bold bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">β = -0.014 (p = 0.018)</span>
            </div>

            <div className="flex justify-center my-2 overflow-x-auto bg-gradient-to-b from-slate-50 to-white rounded-xl border border-slate-100 p-2">
              <svg viewBox="0 0 500 180" className="w-full max-w-[540px] h-auto overflow-visible select-none">
                <line x1="40" y1="150" x2="480" y2="150" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="40" y1="20" x2="40" y2="150" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="50" y1="50" x2="460" y2="135" stroke="#0891b2" strokeWidth="3" strokeLinecap="round" className="filter drop-shadow-[0_0_6px_rgba(8,145,178,0.4)]" />
                {[
                  { cx: 70, cy: 55, r: 8, label: 'Kim' },
                  { cx: 120, cy: 62, r: 12, label: 'Gupta' },
                  { cx: 180, cy: 75, r: 16, label: 'Ibrahim' },
                  { cx: 230, cy: 85, r: 18, label: 'Anderson' },
                  { cx: 310, cy: 105, r: 20, label: 'Fischer' },
                  { cx: 380, cy: 118, r: 22, label: 'Davies' },
                  { cx: 440, cy: 130, r: 24, label: 'Hernandez' },
                ].map((b, idx) => (
                  <g key={idx}>
                    <circle cx={b.cx} cy={b.cy} r={b.r} fill="#06b6d4" fillOpacity="0.25" stroke="#0891b2" strokeWidth="2" className="hover:fill-opacity-60 transition cursor-pointer" />
                    <text x={b.cx} y={b.cy + 3} fill="#0e7490" fontSize="8" textAnchor="middle" fontWeight="bold">{b.label}</text>
                  </g>
                ))}
                <text x="260" y="172" fill="#64748b" fontSize="10" textAnchor="middle" fontWeight="600">Trial Duration (Weeks) ▶</text>
                <text x="15" y="85" fill="#64748b" fontSize="10" textAnchor="middle" fontWeight="600" transform="rotate(-90 15 85)">◀ Larger Effect (SMD)</text>
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs">
              <div className="bg-cyan-50/60 p-2.5 rounded-xl border border-cyan-200 text-center">
                <span className="text-slate-500 block text-[10px] font-semibold">Slope Coefficient (β)</span>
                <span className="font-mono font-bold text-cyan-700">-0.014 per week</span>
              </div>
              <div className="bg-amber-50/60 p-2.5 rounded-xl border border-amber-200 text-center">
                <span className="text-slate-500 block text-[10px] font-semibold">Variance Explained (R²)</span>
                <span className="font-mono font-bold text-amber-700">34.2%</span>
              </div>
              <div className="bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-200 text-center">
                <span className="text-slate-500 block text-[10px] font-semibold">Model Significance</span>
                <span className="font-mono font-bold text-emerald-700">p = 0.018</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 12:
      return (
        <div className="w-full max-w-5xl mx-auto animate-fadeIn">
          <FunnelPlot />
        </div>
      );

    case 13:
      return (
        <div className="space-y-4 max-w-5xl mx-auto animate-fadeIn w-full">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-lg">
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center justify-between flex-wrap gap-2">
              <span>Leave-One-Out Sensitivity Analysis Summary</span>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-bold">
                ✓ Highly Robust
              </span>
            </h4>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
              Iterative omission of individual trials demonstrated that the summary effect size remained firmly between <strong className="text-cyan-700">-0.41 and -0.45</strong>, with p &lt; 0.0001 at all steps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-gradient-to-br from-cyan-50 to-white rounded-xl border border-cyan-200 hover:shadow-md transition-shadow">
                <span className="font-bold text-cyan-700 block mb-1">Excluding High-RoB Study (Jorgensen & Holm):</span>
                <div className="flex justify-between items-center mt-2 font-mono bg-white p-2 rounded-lg border border-cyan-100">
                  <span className="text-slate-500">Recalculated SMD:</span>
                  <span className="text-slate-900 font-bold">-0.45 [-0.54, -0.36]</span>
                </div>
                <div className="flex justify-between items-center mt-1.5 font-mono bg-white p-2 rounded-lg border border-cyan-100">
                  <span className="text-slate-500">Recalculated I²:</span>
                  <span className="text-emerald-600 font-bold">39.1% (Decreased)</span>
                </div>
              </div>

              <div className="p-3.5 bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-200 hover:shadow-md transition-shadow">
                <span className="font-bold text-indigo-700 block mb-1">Excluding Largest Weight Trial (Hernandez et al.):</span>
                <div className="flex justify-between items-center mt-2 font-mono bg-white p-2 rounded-lg border border-indigo-100">
                  <span className="text-slate-500">Recalculated SMD:</span>
                  <span className="text-slate-900 font-bold">-0.44 [-0.54, -0.34]</span>
                </div>
                <div className="flex justify-between items-center mt-1.5 font-mono bg-white p-2 rounded-lg border border-indigo-100">
                  <span className="text-slate-500">Significance:</span>
                  <span className="text-emerald-600 font-bold">p &lt; 0.0001 (Stable)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 14:
      return (
        <div className="space-y-4 max-w-5xl mx-auto animate-fadeIn w-full">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 text-xs flex-wrap gap-2">
              <span className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </span>
                GRADE Summary of Findings (SoF) Table
              </span>
              <span className="text-[11px] text-slate-500">Grading of Recommendations Assessment</span>
            </div>

            <div className="overflow-x-auto -mx-1 px-1">
              <table className="w-full text-left text-xs min-w-[620px]">
                <thead>
                  <tr className="border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50">
                    <th className="py-2.5 px-2 rounded-l-lg">Outcome</th>
                    <th className="py-2.5 text-center">Studies (N)</th>
                    <th className="py-2.5 text-center">Effect Size</th>
                    <th className="py-2.5 text-center">Risk of Bias</th>
                    <th className="py-2.5 text-center rounded-r-lg">Certainty (GRADE)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {[
                    { out: 'Primary Clinical Symptom Reduction', n: '18 RCTs (12,450)', eff: 'SMD = -0.43', effC: 'text-cyan-700', rob: 'Not serious', robC: 'text-emerald-600', grade: '⊕⊕⊕⊕ HIGH', gradeC: 'bg-emerald-50 text-emerald-700 border-emerald-300' },
                    { out: 'Functional & Cognitive Independence', n: '12 RCTs (8,210)', eff: 'SMD = -0.38', effC: 'text-cyan-700', rob: 'Not serious', robC: 'text-emerald-600', grade: '⊕⊕⊕⊕ HIGH', gradeC: 'bg-emerald-50 text-emerald-700 border-emerald-300' },
                    { out: 'Quality of Life (QoL Indices)', n: '10 RCTs (6,940)', eff: 'SMD = +0.35', effC: 'text-cyan-700', rob: 'Minor inconsistency', robC: 'text-amber-600', grade: '⊕⊕⊕◯ MODERATE', gradeC: 'bg-blue-50 text-blue-700 border-blue-300' },
                    { out: 'Adverse Events & Dropouts', n: '18 RCTs (12,450)', eff: 'RR = 0.98', effC: 'text-emerald-700', rob: 'Not serious', robC: 'text-emerald-600', grade: '⊕⊕⊕⊕ HIGH', gradeC: 'bg-emerald-50 text-emerald-700 border-emerald-300' },
                  ].map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-2 font-semibold text-slate-800">{r.out}</td>
                      <td className="py-3 text-center font-mono text-slate-600">{r.n}</td>
                      <td className={`py-3 text-center font-mono font-bold ${r.effC}`}>{r.eff}</td>
                      <td className={`py-3 text-center font-semibold ${r.robC}`}>{r.rob}</td>
                      <td className="py-3 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border shadow-sm ${r.gradeC}`}>{r.grade}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );

    case 15:
      return (
        <div className="w-full max-w-5xl mx-auto animate-fadeIn">
          <MetaSimulator />
        </div>
      );

    case 16:
      return (
        <div className="space-y-4 max-w-5xl mx-auto animate-fadeIn text-center w-full">
          <div className="bg-gradient-to-r from-cyan-50 via-white to-indigo-50 p-5 rounded-2xl border border-cyan-200 shadow-xl animate-slideUp">
            <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-cyan-700 border border-cyan-200 shadow-sm">
                ✓ Presentation Complete
              </span>
              <button
                onClick={triggerConfetti}
                className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md flex items-center gap-1 hover:shadow-lg hover:scale-105 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" /> Celebrate Confetti
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              Summary Conclusion & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Translational Impact</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our systematic review and meta-analysis establishes definitive, HIGH-certainty evidence confirming the efficacy of structured multi-center interventions (SMD = -0.43, OR = 0.64, p &lt; 0.0001). Digital and hybrid pathways represent viable, cost-effective alternatives to purely physical clinics.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 text-left shadow-xl animate-slideUp" style={{ animationDelay: '100ms' }}>
            <h4 className="text-xs uppercase font-bold text-cyan-700 tracking-wider mb-3 flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-200">
                <Users className="w-4 h-4" />
              </span>
              Group - 6 Individual Responsibilities Breakdown
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {GROUP_MEMBERS.map((member, i) => (
                <div key={i} className="p-3 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all animate-popIn" style={{ animationDelay: `${i * 60}ms` }}>
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <span className="font-bold text-slate-900 truncate">{member.name}</span>
                    {member.id && (
                      <span className="shrink-0 text-[10px] font-mono font-bold bg-cyan-50 text-cyan-700 px-1.5 py-0.5 rounded-md border border-cyan-200">
                        {member.id}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-cyan-700 font-semibold block mb-1">{member.role}</span>
                  <p className="text-[10px] text-slate-500 leading-normal">{member.contribution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 animate-slideUp" style={{ animationDelay: '200ms' }}>
            <button
              onClick={onOpenReport}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm flex items-center gap-2 transition shadow-lg shadow-cyan-600/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              <span>Download Recommended Text File (.txt / .md)</span>
            </button>
            <div className="px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-md text-slate-700 font-semibold text-sm flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-cyan-600" />
              <span>Floor Open for Questions & Evaluation</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
