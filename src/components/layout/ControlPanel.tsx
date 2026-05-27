import { useSimulation } from "../../hooks/useSimulation";

type Props = {
  sim: ReturnType<typeof useSimulation>;
};

const ControlPanel = ({ sim }: Props) => {
  return (
    <div className="col-span-3 bg-gray-900 p-4 rounded">
      <h2 className="font-semibold mb-4">Control Panel</h2>
      <button
        onClick={() => sim.toggleRunning()}
        className="w-full mb-4 bg-blue-600 p-2 rounded"
      >
        {sim.running ? "Stop System" : "Start System"}
      </button>
      <label className="text-sm">Load: {sim.state.load}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={sim.state.load}
        onChange={(e) => sim.setLoad(Number(e.target.value))}
        className="w-full mb-6"
      />
      <div className="space-y-2">
        {["normal", "stress", "emergency"].map((mode) => (
          <button
            key={mode}
            onClick={() =>
              sim.setMode(mode as "normal" | "stress" | "emergency")
            }
            className={`w-full p-2 rounded ${
              sim.state.mode === mode
                ? mode === "normal"
                  ? "bg-green-600"
                  : mode === "stress"
                    ? "bg-yellow-600"
                    : "bg-red-600"
                : "bg-gray-700"
            }`}
          >
            {mode.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
