import React, { useEffect, useState } from 'react';
import { SLIDES } from '../data/slidesData';
import { Play, Pause, RotateCcw, X, ChevronLeft, ChevronRight, Clock, BookOpen } from 'lucide-react';

interface PresenterModeProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (id: number) => void;
}

export const PresenterMode: React.FC<PresenterModeProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onPrev,
  onNext,
  onSelectSlide,
}) => {
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning && isOpen) {
      interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, isOpen]);

  if (!isOpen) return null;

  const currentDef = SLIDES.find((s) => s.id === currentSlide) || SLIDES[0];
  const nextDef = SLIDES.find((s) => s.id === currentSlide + 1);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-50 text-slate-900 animate-fadeIn select-none overflow-hidden">
      <div className="min-h-14 px-4 sm:px-6 py-3 border-b border-slate-200 bg-white/90 backdrop-blur flex items-center justify-between gap-3 flex-wrap shadow-sm">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
          </span>
          <span className="font-bold text-sm tracking-wide">PRESENTER CONSOLE — GROUP 6</span>
          <span className="bg-cyan-50 border border-cyan-200 text-cyan-700 font-mono text-xs px-2.5 py-0.5 rounded-full font-bold">
            Slide {currentSlide} / {SLIDES.length}
          </span>
        </div>

        <div className="flex items-center gap-3 bg-slate-50 px-4 py-1.5 rounded-xl border border-slate-200 shadow-sm">
          <Clock className="w-4 h-4 text-cyan-600" />
          <span className="font-mono text-lg font-black tracking-wider">{formatTime(seconds)}</span>
          <button onClick={() => setTimerRunning(!timerRunning)} className="p-1.5 hover:bg-white rounded-lg text-slate-500 hover:text-slate-900 border border-transparent hover:border-slate-200 transition" title={timerRunning ? 'Pause' : 'Resume'}>
            {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button onClick={() => setSeconds(0)} className="p-1.5 hover:bg-white rounded-lg text-slate-500 hover:text-slate-900 border border-transparent hover:border-slate-200 transition" title="Reset timer">
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition" aria-label="Exit Presenter Mode">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-4 p-4 sm:p-6 overflow-y-auto">
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md">
            <div className="text-cyan-700 text-xs font-bold uppercase tracking-wider mb-1">{currentDef.category}</div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">{currentDef.title}</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">{currentDef.subtitle}</p>
          </div>

          <div className="flex-1 bg-white p-5 rounded-2xl border border-cyan-200 flex flex-col shadow-md min-h-[280px]">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3 flex-wrap gap-2">
              <span className="text-xs uppercase font-bold text-cyan-700 tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Slide Key Talking Points & Methodology
              </span>
              <span className="text-[11px] text-slate-400 font-mono">Prompt Notes</span>
            </div>
            <div className="flex-1 overflow-y-auto pr-1 text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
              <p className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-200 text-slate-800 italic">"{currentDef.notes}"</p>
              <div className="text-xs text-slate-500 space-y-1.5 pt-1">
                <p>• Emphasize statistical significance (p &lt; 0.0001) and clinical effect magnitude.</p>
                <p>• Reference PRISMA 2020 protocol and Cochrane RoB 2.0 validity when addressing methodology questions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <div className="flex-1 bg-white p-4 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between min-h-[280px]">
            <div>
              <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block mb-2">Up Next:</span>
              {nextDef ? (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-mono text-cyan-600 font-bold">Slide {nextDef.id}</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1 line-clamp-2">{nextDef.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{nextDef.subtitle}</p>
                </div>
              ) : (
                <div className="p-8 text-center text-slate-400 font-medium">End of Presentation</div>
              )}
            </div>
            <div className="space-y-3 pt-4 border-t border-slate-100 mt-4">
              <div className="grid grid-cols-2 gap-2">
                <button onClick={onPrev} disabled={currentSlide === 1} className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 font-bold text-xs flex items-center justify-center gap-1 transition border border-slate-200">
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button onClick={onNext} disabled={currentSlide === SLIDES.length} className="py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-1 transition shadow-md">
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <select value={currentSlide} onChange={(e) => onSelectSlide(Number(e.target.value))} aria-label="Jump to slide" className="w-full bg-slate-50 text-slate-700 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:ring-2 focus:ring-cyan-500 outline-none font-semibold">
                {SLIDES.map((s) => (
                  <option key={s.id} value={s.id}>Slide {s.id}: {s.title}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
