import React from 'react';
import { X, Keyboard, Sparkles } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / Space', desc: 'Next slide' },
    { key: '←', desc: 'Previous slide' },
    { key: 'F', desc: 'Toggle Fullscreen' },
    { key: 'L', desc: 'Toggle Laser Pointer mode' },
    { key: 'P', desc: 'Toggle Presenter Console with Notes' },
    { key: 'G or O', desc: 'All Slides Visual Grid' },
    { key: 'R', desc: 'Open Recommended Text File & Full Report' },
    { key: 'M', desc: 'Mute / Unmute audio sound effects' },
    { key: 'Esc', desc: 'Close any active modal or laser pointer' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-cyan-50 to-blue-50">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-white border border-cyan-200 shadow-sm">
              <Keyboard className="w-5 h-5 text-cyan-600" />
            </span>
            <h3 className="text-sm font-bold text-slate-900">Keyboard Shortcuts</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-white transition" aria-label="Close shortcuts">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-2.5 bg-slate-50/50">
          {shortcuts.map((sc, i) => (
            <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm text-xs">
              <span className="text-slate-600 font-medium">{sc.desc}</span>
              <kbd className="px-2 py-1 rounded-md bg-slate-100 text-cyan-700 font-mono font-bold text-[11px] border border-slate-200 shadow-sm">{sc.key}</kbd>
            </div>
          ))}
          <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
            <span>Swipe gestures enabled on touchscreens & mobile devices.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
