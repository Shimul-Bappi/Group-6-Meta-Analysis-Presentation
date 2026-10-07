import React, { useState } from 'react';
import { FULL_RECOMMENDED_REPORT_TEXT } from '../data/reportText';
import { X, Copy, Check, Download, FileText, Search } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(FULL_RECOMMENDED_REPORT_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (format: 'txt' | 'md') => {
    const blob = new Blob([FULL_RECOMMENDED_REPORT_TEXT], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `meta_analysis_report_group6.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const lines = FULL_RECOMMENDED_REPORT_TEXT.split('\n');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-cyan-50 to-blue-50">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-xl bg-white text-cyan-600 border border-cyan-200 shadow-sm shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 flex-wrap">
                Recommended Text File & Full Report
                <span className="text-[10px] bg-cyan-600 text-white font-mono px-2 py-0.5 rounded-full font-bold">Group - 6</span>
              </h3>
              <p className="text-xs text-slate-500 truncate">Complete statistical report, PRISMA protocol, forest table & member contributions</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-white transition shrink-0" aria-label="Close report modal">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search keyword in report..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-slate-800 border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-xs focus:ring-2 focus:ring-cyan-500 outline-none shadow-sm"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={handleCopy} className="px-3 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-semibold flex items-center gap-1.5 transition border border-slate-200 shadow-sm">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
            <button onClick={() => handleDownload('txt')} className="px-3 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold flex items-center gap-1.5 transition shadow-md">
              <Download className="w-3.5 h-3.5" />
              <span>.txt</span>
            </button>
            <button onClick={() => handleDownload('md')} className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-1.5 transition shadow-md">
              <Download className="w-3.5 h-3.5" />
              <span>.md</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-5 bg-slate-50 font-mono text-xs text-slate-700 leading-relaxed select-text">
          <div className="space-y-0.5 bg-white rounded-xl border border-slate-200 p-2 shadow-sm">
            {lines.map((line, idx) => {
              const isMatch = searchQuery && line.toLowerCase().includes(searchQuery.toLowerCase());
              return (
                <div key={idx} className={`flex items-start hover:bg-slate-50 rounded px-1 ${isMatch ? 'bg-cyan-50 border-l-2 border-cyan-500 text-slate-900 font-semibold' : ''}`}>
                  <span className="w-10 select-none text-slate-300 text-right pr-4 text-[10px] shrink-0 pt-0.5">{idx + 1}</span>
                  <pre className="font-mono whitespace-pre-wrap flex-1 break-words">{line}</pre>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-5 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
          <div>Total: <span className="text-cyan-600 font-mono font-bold">{lines.length} lines</span> | 6 Group Members Documented</div>
          <button onClick={onClose} className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition">Close View</button>
        </div>
      </div>
    </div>
  );
};
