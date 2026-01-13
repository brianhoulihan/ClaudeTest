'use client';

interface ControlPanelProps {
  red: number;
  green: number;
  blue: number;
  onRedChange: (value: number) => void;
  onGreenChange: (value: number) => void;
  onBlueChange: (value: number) => void;
}

export default function ControlPanel({
  red,
  green,
  blue,
  onRedChange,
  onGreenChange,
  onBlueChange,
}: ControlPanelProps) {
  const clamp = (value: number) => Math.max(0, Math.min(255, value));

  const handleSliderChange = (
    value: string,
    onChange: (value: number) => void
  ) => {
    onChange(parseInt(value));
  };

  const handleNumberChange = (
    value: string,
    onChange: (value: number) => void
  ) => {
    const num = parseInt(value) || 0;
    onChange(clamp(num));
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Red Channel */}
      <div className="bg-display-bg border-2 border-panel-border rounded-lg p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-phosphor-dim hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,65,0.2)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-red-alert animate-indicator-blink shadow-[0_0_10px_#ff0044]" />
          <span className="font-[family-name:var(--font-orbitron)] text-base font-bold tracking-[0.2em] uppercase">
            Red
          </span>
          <span className="ml-auto text-xs text-phosphor-dim tracking-[0.1em] font-[family-name:var(--font-orbitron)]">
            CH-R
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max="255"
              value={red}
              onChange={(e) => handleSliderChange(e.target.value, onRedChange)}
              className="w-full h-10"
            />
          </div>
          <div className="bg-black border-2 border-panel-border rounded-md p-2 px-4 min-w-[90px] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-[rgba(0,255,65,0.03)] before:to-transparent before:pointer-events-none">
            <input
              type="number"
              min="0"
              max="255"
              value={red}
              onChange={(e) => handleNumberChange(e.target.value, onRedChange)}
              className="w-full bg-transparent border-none text-phosphor-green font-[family-name:var(--font-orbitron)] text-xl font-bold text-center outline-none shadow-[0_0_8px_var(--phosphor-green)] tracking-[0.1em]"
            />
          </div>
        </div>
      </div>

      {/* Green Channel */}
      <div className="bg-display-bg border-2 border-panel-border rounded-lg p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-phosphor-dim hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,65,0.2)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00ff00] animate-indicator-blink shadow-[0_0_10px_#00ff00]" />
          <span className="font-[family-name:var(--font-orbitron)] text-base font-bold tracking-[0.2em] uppercase">
            Green
          </span>
          <span className="ml-auto text-xs text-phosphor-dim tracking-[0.1em] font-[family-name:var(--font-orbitron)]">
            CH-G
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max="255"
              value={green}
              onChange={(e) => handleSliderChange(e.target.value, onGreenChange)}
              className="w-full h-10"
            />
          </div>
          <div className="bg-black border-2 border-panel-border rounded-md p-2 px-4 min-w-[90px] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-[rgba(0,255,65,0.03)] before:to-transparent before:pointer-events-none">
            <input
              type="number"
              min="0"
              max="255"
              value={green}
              onChange={(e) => handleNumberChange(e.target.value, onGreenChange)}
              className="w-full bg-transparent border-none text-phosphor-green font-[family-name:var(--font-orbitron)] text-xl font-bold text-center outline-none shadow-[0_0_8px_var(--phosphor-green)] tracking-[0.1em]"
            />
          </div>
        </div>
      </div>

      {/* Blue Channel */}
      <div className="bg-display-bg border-2 border-panel-border rounded-lg p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-phosphor-dim hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,65,0.2)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0066ff] animate-indicator-blink shadow-[0_0_10px_#0066ff]" />
          <span className="font-[family-name:var(--font-orbitron)] text-base font-bold tracking-[0.2em] uppercase">
            Blue
          </span>
          <span className="ml-auto text-xs text-phosphor-dim tracking-[0.1em] font-[family-name:var(--font-orbitron)]">
            CH-B
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => handleSliderChange(e.target.value, onBlueChange)}
              className="w-full h-10"
            />
          </div>
          <div className="bg-black border-2 border-panel-border rounded-md p-2 px-4 min-w-[90px] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-[rgba(0,255,65,0.03)] before:to-transparent before:pointer-events-none">
            <input
              type="number"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => handleNumberChange(e.target.value, onBlueChange)}
              className="w-full bg-transparent border-none text-phosphor-green font-[family-name:var(--font-orbitron)] text-xl font-bold text-center outline-none shadow-[0_0_8px_var(--phosphor-green)] tracking-[0.1em]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
