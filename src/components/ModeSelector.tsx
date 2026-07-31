import { type SimulationMode } from '@/types/simulation';
import { MODES } from '@/constants/modes';

type Props = {
  value: SimulationMode;
  onChange: (mode: SimulationMode) => void;
};

export default function ModeSelector({ value, onChange }: Props) {
  return (
    <div className="space-y-2">
      {MODES.map((mode) => {
        const isActive = value === mode.value;
        return (
          <button
            key={mode.value}
            onClick={() => onChange(mode.value)}
            className={`
              w-full p-2 rounded transition-colors duration-200
              hover:opacity-90
              ${isActive ? mode.color : 'bg-gray-700'}
            `}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
}
