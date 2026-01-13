'use client';

import { useState } from 'react';
import ColorBars from './ColorBars';

interface CRTMonitorProps {
  red: number;
  green: number;
  blue: number;
  onColorLoad: (r: number, g: number, b: number) => void;
  onColorSave: () => void;
}

export default function CRTMonitor({
  red,
  green,
  blue,
  onColorLoad,
  onColorSave,
}: CRTMonitorProps) {
  const [isSaving, setIsSaving] = useState(false);

  const brightness = (red + green + blue) / 3;
  const glowIntensity = brightness / 255;
  const glowSize = 20 + glowIntensity * 30;
  const glowOpacity = 0.3 + glowIntensity * 0.4;

  const handleSaveColor = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/colors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ red, green, blue }),
      });

      if (!response.ok) {
        throw new Error('Failed to save color');
      }

      onColorSave();
    } catch (error) {
      console.error('Error saving color:', error);
      alert('Failed to save color. Please check your Supabase configuration.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {/* CRT Monitor */}
      <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border-4 border-metal rounded-[20px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.9),inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-2px_0_rgba(0,0,0,0.5)]">
        {/* Screen Bezel */}
        <div className="bg-black border-[3px] border-black rounded-xl p-5 shadow-[inset_0_0_20px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(0,0,0,0.5)]">
          {/* CRT Screen */}
          <div
            className="relative w-full h-[350px] rounded-lg overflow-hidden transition-shadow duration-300"
            style={{
              boxShadow: `0 0 ${glowSize}px rgba(${red}, ${green}, ${blue}, ${glowOpacity}), inset 0 0 30px rgba(0, 0, 0, 0.8)`,
            }}
          >
            {/* Color Display */}
            <div
              className="w-full h-full transition-colors duration-100"
              style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
            />

            {/* Scanlines */}
            <div className="scanlines absolute inset-0 z-[2]" />

            {/* Scanline Sweep */}
            <div className="absolute inset-0 z-[3] bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scanline" />

            {/* CRT Glow */}
            <div className="crt-glow absolute inset-0" />
          </div>
        </div>

        {/* Color Bars */}
        <ColorBars onColorSelect={onColorLoad} />
      </div>

      {/* RGB Readout */}
      <div className="bg-display-bg border-2 border-panel-border rounded-lg p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)]">
        <div className="font-[family-name:var(--font-orbitron)] text-xs tracking-[0.3em] text-phosphor-dim mb-2.5 uppercase">
          Output Signal
        </div>
        <div className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-phosphor-green shadow-[0_0_10px_var(--phosphor-green)] tracking-[0.15em] text-center">
          RGB({red}, {green}, {blue})
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSaveColor}
        disabled={isSaving}
        className="bg-gradient-to-br from-phosphor-dim to-[#008820] hover:from-phosphor-green hover:to-phosphor-dim active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-phosphor-green rounded-lg p-4 font-[family-name:var(--font-orbitron)] font-bold text-black text-lg tracking-[0.2em] uppercase transition-all duration-200 shadow-[0_4px_15px_rgba(0,255,65,0.3)] hover:shadow-[0_6px_20px_rgba(0,255,65,0.5)]"
      >
        {isSaving ? 'Saving...' : 'Save Color'}
      </button>
    </div>
  );
}
