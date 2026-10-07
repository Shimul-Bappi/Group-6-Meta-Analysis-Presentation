import React, { useEffect, useState } from 'react';

interface LaserPointerProps {
  enabled: boolean;
}

export const LaserPointer: React.FC<LaserPointerProps> = ({ enabled }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    >
      <div className="relative">
        {/* Outer glowing pulsing halo */}
        <div className="w-8 h-8 rounded-full bg-rose-500/30 animate-ping absolute -top-2 -left-2"></div>
        {/* Medium intense glow */}
        <div className="w-5 h-5 rounded-full bg-rose-500/60 blur-xs absolute -top-0.5 -left-0.5"></div>
        {/* Core red laser dot */}
        <div className="w-4 h-4 rounded-full bg-rose-500 border-2 border-white shadow-[0_0_15px_#f43f5e]"></div>
      </div>
    </div>
  );
};
