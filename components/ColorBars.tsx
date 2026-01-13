'use client';

interface ColorBarsProps {
  onColorSelect: (r: number, g: number, b: number) => void;
}

interface ColorBar {
  color: string;
  r: number;
  g: number;
  b: number;
}

export default function ColorBars({ onColorSelect }: ColorBarsProps) {
  const colors: ColorBar[] = [
    { color: '#fff', r: 255, g: 255, b: 255 },
    { color: '#ff0', r: 255, g: 255, b: 0 },
    { color: '#0ff', r: 0, g: 255, b: 255 },
    { color: '#0f0', r: 0, g: 255, b: 0 },
    { color: '#f0f', r: 255, g: 0, b: 255 },
    { color: '#f00', r: 255, g: 0, b: 0 },
    { color: '#00f', r: 0, g: 0, b: 255 },
    { color: '#000', r: 0, g: 0, b: 0 },
  ];

  return (
    <div className="grid grid-cols-8 gap-0.5 mt-4 h-[30px] rounded overflow-hidden shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)]">
      {colors.map((bar, index) => (
        <div
          key={index}
          className="h-full transition-all duration-300 cursor-pointer hover:opacity-80 hover:scale-105"
          style={{ backgroundColor: bar.color }}
          onClick={() => onColorSelect(bar.r, bar.g, bar.b)}
          title={`RGB(${bar.r}, ${bar.g}, ${bar.b})`}
        />
      ))}
    </div>
  );
}
