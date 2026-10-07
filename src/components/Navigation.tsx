import React from 'react';
import { SLIDES, GROUP_NAME } from '../data/slidesData';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  Grid,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Tv2,
  Flame,
  HelpCircle,
} from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
  onOpenReport: () => void;
  onOpenOverview: () => void;
  onTogglePresenter: () => void;
  onToggleLaser: () => void;
  laserActive: boolean;
  onToggleSound: () => void;
  soundActive: boolean;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  isPlaying: boolean;
  onToggleAutoplay: () => void;
  onOpenHelp: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide,
  onOpenReport,
  onOpenOverview,
  onTogglePresenter,
  onToggleLaser,
  laserActive,
  onToggleSound,
  soundActive,
  onToggleFullscreen,
  isFullscreen,
  isPlaying,
  onToggleAutoplay,
  onOpenHelp,
}) => {
  const currentDef = SLIDES[currentSlide - 1];
  const progressPercent = (currentSlide / totalSlides) * 100;

  return (
    <>
      {/* Top Header Bar - LIGHT */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-xl border-b border-slate-200 px-3 sm:px-6 h-14 flex items-center justify-between select-none shadow-[0_1px_12px_rgba(15,23,42,0.06)]">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-slate-900 hidden sm:inline">
              Meta-Analysis Report
            </span>
          </div>

          <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold font-mono bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm">
            {GROUP_NAME}
          </span>

          <span className="text-[11px] text-slate-500 hidden md:inline truncate max-w-[220px] lg:max-w-xs">
            • {currentDef?.category}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={onOpenReport}
            className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 transition shadow-md shadow-cyan-600/20 hover:shadow-lg hover:-translate-y-px"
            title="Download / View Recommended Text File & Full Report"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden min-[420px]:inline">Report File</span>
          </button>

          <button
            onClick={onToggleLaser}
            className={`p-1.5 sm:p-2 rounded-lg text-xs transition border shadow-sm ${
              laserActive
                ? 'bg-rose-50 text-rose-600 border-rose-300 ring-1 ring-rose-400'
                : 'bg-white text-slate-500 hover:text-slate-900 border-slate-200 hover:border-slate-300'
            }`}
            title="Toggle Laser Pointer (Key: L)"
            aria-label="Toggle Laser Pointer"
          >
            <Flame className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onTogglePresenter}
            className="p-1.5 sm:p-2 rounded-lg bg-white text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition shadow-sm"
            title="Presenter Mode (Key: P)"
            aria-label="Presenter Mode"
          >
            <Tv2 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenOverview}
            className="p-1.5 sm:p-2 rounded-lg bg-white text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition shadow-sm"
            title="All Slides Grid (Key: G)"
            aria-label="All Slides Grid"
          >
            <Grid className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onToggleSound}
            className="p-1.5 sm:p-2 rounded-lg bg-white text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition shadow-sm"
            title={soundActive ? 'Mute Sounds' : 'Unmute Sounds'}
            aria-label="Toggle Audio Sound"
          >
            {soundActive ? <Volume2 className="w-3.5 h-3.5 text-cyan-600" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={onToggleFullscreen}
            className="p-1.5 sm:p-2 rounded-lg bg-white text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition hidden sm:flex shadow-sm"
            title={isFullscreen ? 'Exit Fullscreen (F)' : 'Fullscreen (F)'}
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={onOpenHelp}
            className="p-1.5 sm:p-2 rounded-lg bg-white text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition shadow-sm"
            title="Keyboard Shortcuts & Guide"
            aria-label="Keyboard Shortcuts"
          >
            <HelpCircle className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 transition-all duration-300 rounded-r-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* Bottom Floating Navigation Dock - LIGHT */}
      <footer className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 shadow-xl shadow-slate-900/10 select-none max-w-[95vw]">
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 hover:text-slate-900 border border-slate-200 transition"
          aria-label="Previous Slide (Arrow Left)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5 px-2 font-mono text-xs">
          <span className="font-bold text-cyan-600">
            {String(currentSlide).padStart(2, '0')}
          </span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500">
            {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className="p-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold transition shadow-md shadow-cyan-600/25"
          aria-label="Next Slide (Arrow Right / Space)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="h-4 w-[1px] bg-slate-200 mx-1 hidden sm:block"></div>

        <div className="hidden lg:flex items-center gap-1 px-1">
          {SLIDES.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelectSlide(s.id)}
              className={`h-2 rounded-full transition-all duration-200 ${
                s.id === currentSlide
                  ? 'w-6 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]'
                  : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              title={`Slide ${s.id}: ${s.title}`}
            />
          ))}
        </div>

        <div className="h-4 w-[1px] bg-slate-200 mx-1 hidden sm:block"></div>

        <button
          onClick={onToggleAutoplay}
          className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition border ${
            isPlaying
              ? 'bg-amber-50 text-amber-700 border-amber-300 animate-pulse'
              : 'bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200'
          }`}
          title={isPlaying ? 'Pause Autoplay' : 'Start Autoplay Slideshow'}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span className="hidden sm:inline">{isPlaying ? 'Playing' : 'Autoplay'}</span>
        </button>
      </footer>
    </>
  );
};
