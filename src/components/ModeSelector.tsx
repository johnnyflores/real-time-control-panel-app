import { type SystemMode } from "../simulation/types";

type Props = {
  value: SystemMode;
  onChange: (mode: SystemMode) => void;
};

const MODES = [
  { value: "normal", label: "NORMAL", color: "bg-green-600" },
  { value: "stress", label: "STRESS", color: "bg-yellow-600" },
  { value: "emergency", label: "EMERGENCY", color: "bg-red-600" },
] as const;

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
