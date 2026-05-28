import { type SystemMode } from "@/types";
import { MODES } from "@/constants/modes";

type Props = {
  value: SystemMode;
  onChange: (mode: SystemMode) => void;
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
              w-full p-2 rounded transition
              ${isActive ? mode.color : "bg-gray-700"}
            `}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
}
