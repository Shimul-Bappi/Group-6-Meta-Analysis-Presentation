import React, { useState } from 'react';
import { SLIDES } from '../data/slidesData';
import { X, Search, MonitorPlay, Layers } from 'lucide-react';

interface SlideOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideId: number) => void;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
}) => {
  const [filter, setFilter] = useState('');

  if (!isOpen) return null;

  const filtered = SLIDES.filter(
    (s) =>
      s.title.toLowerCase().includes(filter.toLowerCase()) ||
      s.category.toLowerCase().includes(filter.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-5xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-cyan-50 to-blue-50 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-white border border-cyan-200 shadow-sm">
              <MonitorPlay className="w-5 h-5 text-cyan-600" />
            </span>
            <h3 className="text-base font-bold text-slate-900">All Slides Overview (16 Slides)</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search slides..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-white text-slate-800 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs focus:ring-2 focus:ring-cyan-500 outline-none w-44 sm:w-48 shadow-sm"
              />
            </div>
            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-white transition border border-transparent hover:border-slate-200" aria-label="Close overview">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-50">
          {filtered.map((slide) => {
            const isCurrent = slide.id === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => { onSelectSlide(slide.id); onClose(); }}
                className={`flex flex-col text-left p-3.5 rounded-xl border transition-all duration-200 group hover:-translate-y-1 ${
                  isCurrent
                    ? 'bg-cyan-50 border-cyan-400 ring-2 ring-cyan-200 shadow-lg shadow-cyan-500/10'
                    : 'bg-white border-slate-200 hover:border-cyan-300 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2 gap-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border ${isCurrent ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-slate-100 border-slate-200 text-cyan-700'}`}>
                    Slide {String(slide.id).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-slate-400 truncate">{slide.category}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2 mb-1.5 flex-1">
                  {slide.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pt-2 border-t border-slate-100">
                  <Layers className="w-3 h-3 text-cyan-500 shrink-0" />
                  <span className="truncate">{slide.category}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="p-3 bg-white border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 flex-wrap gap-2">
          <span>Click any card to jump immediately</span>
          <span className="font-mono text-cyan-600 font-semibold">Tip: Press 'G' anytime for quick overview</span>
        </div>
      </div>
    </div>
  );
};
