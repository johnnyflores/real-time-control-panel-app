import { useEffect, useState } from "react";
import {
  initialState,
  updateSystem,
  type SystemState,
} from "./simulation/engine";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function App() {
  const [state, setState] = useState<SystemState>(initialState);
  const [running, setRunning] = useState(false);

  const handleLoadChange = (value: number) => {
    setState((prev) => ({
      ...prev,
      load: value,
    }));
  };

  const handleModeChange = (mode: "normal" | "stress" | "emergency") => {
    setState((prev) => ({
      ...prev,
      mode,
    }));
  };

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setState((prev) => updateSystem(prev));
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white p-4 grid grid-rows-[auto_1fr_auto] gap-4">
        <header className="bg-gray-900 p-4 rounded flex justify-between items-center">
          <h1 className="text-xl font-bold">RT Simulation Control System</h1>
          <div className="flex gap-4 items-center">
            <span>
              Mode: <span className="text-cyan-400">{state.mode}</span>
            </span>
            <span>
              Status:{" "}
              {state.temperature > 90 ? (
                <span className="text-red-500">CRITICAL</span>
              ) : state.temperature > 75 ? (
                <span className="text-yellow-400">WARNING</span>
              ) : (
                <span className="text-green-400">NORMAL</span>
              )}
            </span>
          </div>
        </header>
        <main className="grid grid-cols-12 gap-4">
          <div className="col-span-3 bg-gray-900 p-4 rounded">
            <h2 className="font-semibold mb-4">Control Panel</h2>
            <button
              onClick={() => setRunning(!running)}
              className="w-full mb-4 bg-blue-600 p-2 rounded"
            >
              {running ? "Stop System" : "Start System"}
            </button>
            <label className="text-sm">Load: {state.load}</label>
            <input
              type="range"
              min="0"
              max="100"
              value={state.load}
              onChange={(e) => handleLoadChange(Number(e.target.value))}
              className="w-full mb-6"
            />
            <div className="space-y-2">
              {["normal", "stress", "emergency"].map((mode) => (
                <button
                  key={mode}
                  onClick={() =>
                    handleModeChange(mode as "normal" | "stress" | "emergency")
                  }
                  className={`w-full p-2 rounded ${
                    state.mode === mode
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
          <div className="col-span-6 bg-gray-900 p-4 rounded">
            <h2 className="font-semibold mb-4">Live Temperature Analysis</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={state.history}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#00bcd4"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-800 p-2 rounded">
                Temp: {state.temperature.toFixed(1)}°C
              </div>
              <div className="bg-gray-800 p-2 rounded">Load: {state.load}%</div>
              <div className="bg-gray-800 p-2 rounded">Time: {state.time}</div>
            </div>
          </div>
          <div className="col-span-3 bg-gray-900 p-4 rounded">
            <h2 className="font-semibold mb-4">System Status</h2>
            <div
              className={`p-4 rounded text-center ${
                state.temperature > 90
                  ? "bg-red-600"
                  : state.temperature > 75
                    ? "bg-yellow-600"
                    : "bg-green-600"
              }`}
            >
              {state.temperature > 90
                ? "CRITICAL"
                : state.temperature > 75
                  ? "WARNING"
                  : "NORMAL"}
            </div>
            <div className="mt-4 text-sm space-y-2">
              <p>Mode: {state.mode}</p>
              <p>Alerts: {state.alerts.length}</p>
              <p>System Load: {state.load}%</p>
            </div>
          </div>
        </main>
        <div className="bg-gray-900 p-4 rounded mt-4">
          <h2 className="font-semibold mb-3">Event Log</h2>

          <div className="space-y-2 max-h-40 overflow-auto">
            {state.alerts.length === 0 ? (
              <p className="text-green-400">No events</p>
            ) : (
              <div className="space-y-2">
                {state.alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded ${
                      alert.level === "critical"
                        ? "bg-red-600"
                        : "bg-yellow-600"
                    }`}
                  >
                    <p className="font-semibold">{alert.message}</p>
                    <p className="text-xs opacity-80">Time: {alert.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
