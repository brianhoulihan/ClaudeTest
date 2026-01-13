'use client';

import { useState, useEffect } from 'react';
import type { RGBColor } from '@/lib/supabase';

interface ColorHistoryProps {
  currentColor: { red: number; green: number; blue: number };
  onColorLoad: (r: number, g: number, b: number) => void;
  refreshTrigger: number;
}

export default function ColorHistory({
  currentColor,
  onColorLoad,
  refreshTrigger,
}: ColorHistoryProps) {
  const [colors, setColors] = useState<RGBColor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchColors = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/colors');

      if (!response.ok) {
        throw new Error('Failed to fetch colors');
      }

      const data = await response.json();
      setColors(data);
    } catch (err) {
      console.error('Error fetching colors:', err);
      setError('Failed to load saved colors');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchColors();
  }, [refreshTrigger]);

  if (isLoading) {
    return (
      <div className="mt-10 max-w-[1000px] w-full">
        <div className="text-center text-phosphor-dim">Loading saved colors...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-10 max-w-[1000px] w-full">
        <div className="text-center text-red-alert">{error}</div>
      </div>
    );
  }

  if (colors.length === 0) {
    return (
      <div className="mt-10 max-w-[1000px] w-full">
        <div className="text-center text-phosphor-dim text-sm">
          No saved colors yet. Save your first color above!
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-[1000px] w-full">
      <div className="mb-5">
        <h2 className="font-[family-name:var(--font-orbitron)] text-xl font-bold tracking-[0.2em] text-phosphor-green uppercase text-center">
          Saved Colors
        </h2>
        <div className="text-center text-xs text-phosphor-dim mt-1">
          Click any color to load it
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-4 px-2">
        {colors.map((color) => (
          <div
            key={color.id}
            className="flex-shrink-0 group cursor-pointer"
            onClick={() => onColorLoad(color.red, color.green, color.blue)}
          >
            <div
              className="w-24 h-24 rounded-lg border-2 border-panel-border transition-all duration-300 group-hover:border-phosphor-green group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
              style={{
                backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
              }}
            />
            <div className="mt-2 text-center text-xs font-[family-name:var(--font-orbitron)] text-phosphor-dim group-hover:text-phosphor-green transition-colors">
              {color.red}, {color.green}, {color.blue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
