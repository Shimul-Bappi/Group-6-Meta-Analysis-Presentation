import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SLIDES } from './data/slidesData';
import { SlideContent } from './components/SlideContent';
import { Navigation } from './components/Navigation';
import { ReportModal } from './components/ReportModal';
import { SlideOverviewModal } from './components/SlideOverviewModal';
import { PresenterMode } from './components/PresenterMode';
import { ShortcutsModal } from './components/ShortcutsModal';
import { LaserPointer } from './components/LaserPointer';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { playSlideTransitionSound, setSoundEnabled, playSuccessChime } from './utils/audio';

export function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [reportModalOpen, setReportModalOpen] = useState<boolean>(false);
  const [overviewModalOpen, setOverviewModalOpen] = useState<boolean>(false);
  const [presenterModalOpen, setPresenterModalOpen] = useState<boolean>(false);
  const [shortcutsModalOpen, setShortcutsModalOpen] = useState<boolean>(false);
  const [laserActive, setLaserActive] = useState<boolean>(false);
  const [soundActive, setSoundActive] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speakerNotesOpen, setSpeakerNotesOpen] = useState<boolean>(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const totalSlides = SLIDES.length;

  const goToSlide = useCallback((index: number) => {
    if (index >= 1 && index <= totalSlides) {
      setCurrentSlide(index);
      playSlideTransitionSound();
      if (index === totalSlides) {
        playSuccessChime();
      }
    }
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, goToSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev < totalSlides) {
            playSlideTransitionSound();
            return prev + 1;
          } else {
            setIsPlaying(false);
            playSuccessChime();
            return prev;
          }
        });
      }, 9000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, totalSlides]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const toggleSound = () => {
    const next = !soundActive;
    setSoundActive(next);
    setSoundEnabled(next);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') {
        return;
      }
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'l':
        case 'L':
          e.preventDefault();
          setLaserActive((prev) => !prev);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setPresenterModalOpen((prev) => !prev);
          break;
        case 'g':
        case 'G':
        case 'o':
        case 'O':
          e.preventDefault();
          setOverviewModalOpen((prev) => !prev);
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          setReportModalOpen((prev) => !prev);
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          toggleSound();
          break;
        case 'Escape':
          setReportModalOpen(false);
          setOverviewModalOpen(false);
          setPresenterModalOpen(false);
          setShortcutsModalOpen(false);
          setLaserActive(false);
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, soundActive]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const currentDef = SLIDES[currentSlide - 1];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50/70 to-indigo-50/70 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden relative flex flex-col justify-between"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Light Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* pastel glow blobs */}
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-cyan-200/60 via-sky-200/40 to-transparent rounded-full blur-3xl animate-floatSlow" />
        <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] bg-gradient-to-bl from-indigo-200/50 via-purple-200/30 to-transparent rounded-full blur-3xl animate-floatSlow" style={{ animationDelay: '3s' }} />
        <div className="absolute -bottom-40 left-1/4 w-[560px] h-[380px] bg-gradient-to-tr from-emerald-100/70 via-teal-100/40 to-transparent rounded-full blur-3xl animate-floatSlow" style={{ animationDelay: '1.5s' }} />
        {/* top light streak */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500" />
      </div>

      <LaserPointer enabled={laserActive} />

      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectSlide={goToSlide}
        onOpenReport={() => setReportModalOpen(true)}
        onOpenOverview={() => setOverviewModalOpen(true)}
        onTogglePresenter={() => setPresenterModalOpen(true)}
        onToggleLaser={() => setLaserActive(!laserActive)}
        laserActive={laserActive}
        onToggleSound={toggleSound}
        soundActive={soundActive}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
        isPlaying={isPlaying}
        onToggleAutoplay={() => setIsPlaying(!isPlaying)}
        onOpenHelp={() => setShortcutsModalOpen(true)}
      />

      {/* Slide Presentation Canvas */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 pt-[72px] pb-28 z-10 flex flex-col justify-start">
        {currentSlide > 1 && (
          <div className="mb-3 max-w-5xl mx-auto w-full flex items-center justify-between gap-2 text-xs animate-fadeIn">
            <div className="flex items-center gap-2 min-w-0">
              <span className="shrink-0 px-2.5 py-1 rounded-full bg-white border border-cyan-200 text-cyan-700 font-mono text-[10px] uppercase font-bold shadow-sm">
                {currentDef.category}
              </span>
              <span className="text-slate-500 font-medium hidden md:inline truncate">
                {currentDef.subtitle}
              </span>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 text-slate-500 text-[11px] font-mono bg-white/80 px-2.5 py-1 rounded-full border border-slate-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
              <span className="text-slate-700 font-semibold">Group - 6 • Slide {currentSlide}/{totalSlides}</span>
            </div>
          </div>
        )}

        <div key={currentSlide} className="w-full flex justify-center animate-fadeIn">
          <SlideContent
            slideId={currentSlide}
            onNextSlide={handleNext}
            onOpenReport={() => setReportModalOpen(true)}
          />
        </div>
      </main>

      <SpeakerNotesDrawer
        currentSlide={currentSlide}
        isOpen={speakerNotesOpen}
        onToggle={() => setSpeakerNotesOpen(!speakerNotesOpen)}
      />

      <ReportModal isOpen={reportModalOpen} onClose={() => setReportModalOpen(false)} />
      <SlideOverviewModal
        isOpen={overviewModalOpen}
        onClose={() => setOverviewModalOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
      />
      <PresenterMode
        isOpen={presenterModalOpen}
        onClose={() => setPresenterModalOpen(false)}
        currentSlide={currentSlide}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectSlide={goToSlide}
      />
      <ShortcutsModal isOpen={shortcutsModalOpen} onClose={() => setShortcutsModalOpen(false)} />
    </div>
  );
}

export default App;
