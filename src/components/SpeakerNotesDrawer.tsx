import React from 'react';
import { SLIDES } from '../data/slidesData';
import { MessageSquareText, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

interface SpeakerNotesDrawerProps {
  currentSlide: number;
  isOpen: boolean;
  onToggle: () => void;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({
  currentSlide,
  isOpen,
  onToggle,
}) => {
  const currentDef = SLIDES.find((s) => s.id === currentSlide) || SLIDES[0];

  return (
    <div className="fixed bottom-[68px] left-1/2 -translate-x-1/2 z-30 w-full max-w-4xl px-4 pointer-events-none">
      <div className="pointer-events-auto">
        <div className="flex justify-center -mb-2">
          <button
            onClick={onToggle}
            className="px-3.5 py-1.5 rounded-t-xl bg-white border-t border-x border-slate-200 text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1.5 shadow-lg transition font-semibold"
          >
            <MessageSquareText className="w-3.5 h-3.5 text-cyan-600" />
            <span>Slide Notes & Insights</span>
            {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-slate-400" /> : <ChevronUp className="w-3.5 h-3.5 text-slate-400" />}
          </button>
        </div>

        {isOpen && (
          <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-2xl text-xs text-slate-700 animate-slideUp">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2 flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-cyan-700 font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{currentDef.category} — Key Takeaway</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Slide {currentDef.id} / {SLIDES.length}</span>
            </div>
            <p className="text-slate-600 leading-relaxed italic bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-xl border border-cyan-100">
              "{currentDef.notes}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
