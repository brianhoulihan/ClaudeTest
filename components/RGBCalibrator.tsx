'use client';

import { useState } from 'react';
import ControlPanel from './ControlPanel';
import CRTMonitor from './CRTMonitor';
import ColorHistory from './ColorHistory';

export default function RGBCalibrator() {
  const [red, setRed] = useState(128);
  const [green, setGreen] = useState(128);
  const [blue, setBlue] = useState(128);
  const [refreshHistory, setRefreshHistory] = useState(0);

  const handleColorLoad = (r: number, g: number, b: number) => {
    setRed(r);
    setGreen(g);
    setBlue(b);
  };

  const handleColorSaved = () => {
    // Trigger refresh of color history
    setRefreshHistory(prev => prev + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-10 px-5">
      {/* Header */}
      <div className="text-center mb-10 animate-slide-in">
        <h1
          className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black tracking-[0.3em] text-phosphor-green animate-glow-pulse mb-2.5"
        >
          CHROMATIC
        </h1>
        <div className="text-sm tracking-[0.5em] text-phosphor-dim uppercase">
          RGB Calibrator v2.1
        </div>
      </div>

      {/* Main Equipment Panel */}
      <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] border-[3px] border-metal rounded-[20px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.5)] relative max-w-[1000px] w-full animate-slide-in-delayed">
        {/* Decorative screws */}
        <div className="decorative-screw absolute top-5 left-5" />
        <div className="decorative-screw absolute top-5 right-5" />
        <div className="decorative-screw absolute bottom-5 left-5" />
        <div className="decorative-screw absolute bottom-5 right-5" />

        {/* Main container */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <ControlPanel
            red={red}
            green={green}
            blue={blue}
            onRedChange={setRed}
            onGreenChange={setGreen}
            onBlueChange={setBlue}
          />

          <CRTMonitor
            red={red}
            green={green}
            blue={blue}
            onColorLoad={handleColorLoad}
            onColorSave={handleColorSaved}
          />
        </div>
      </div>

      {/* Color History */}
      <ColorHistory
        currentColor={{ red, green, blue }}
        onColorLoad={handleColorLoad}
        refreshTrigger={refreshHistory}
      />
    </div>
  );
}
