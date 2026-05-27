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
      <div className="p-6 bg-gray-900 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-6">
          Real-Time Simulation Dashboard
        </h1>

        <div className="bg-gray-800 p-4 rounded mb-6">
          <h2 className="font-semibold mb-4">Control Panel</h2>

          <button
            onClick={() => setRunning(!running)}
            className="px-4 py-2 bg-blue-600 rounded mb-4"
          >
            {running ? "Stop Simulation" : "Start Simulation"}
          </button>

          <div className="mt-4">
            <label className="block mb-2">System Load: {state.load}</label>

            <input
              type="range"
              min="0"
              max="100"
              value={state.load}
              onChange={(e) => handleLoadChange(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 font-semibold">
              System Mode: {state.mode}
            </label>

            <div className="flex gap-2">
              <button
                onClick={() => handleModeChange("normal")}
                className={`px-3 py-1 rounded ${
                  state.mode === "normal" ? "bg-green-600" : "bg-gray-700"
                }`}
              >
                Normal
              </button>

              <button
                onClick={() => handleModeChange("stress")}
                className={`px-3 py-1 rounded ${
                  state.mode === "stress" ? "bg-yellow-600" : "bg-gray-700"
                }`}
              >
                Stress
              </button>

              <button
                onClick={() => handleModeChange("emergency")}
                className={`px-3 py-1 rounded ${
                  state.mode === "emergency" ? "bg-red-600" : "bg-gray-700"
                }`}
              >
                Emergency
              </button>
            </div>
          </div>

          <div className="mb-6">
            <p>Time: {state.time}</p>
            <p>Temperature: {state.temperature.toFixed(2)}°C</p>
            <p>Load: {state.load}%</p>
            <p>Mode: {state.mode}</p>
          </div>

          <div className="mb-4">
            <span className="font-semibold">System Status: </span>

            {state.temperature > 90 ? (
              <span className="text-red-500">CRITICAL</span>
            ) : state.temperature > 75 ? (
              <span className="text-yellow-400">WARNING</span>
            ) : (
              <span className="text-green-400">NORMAL</span>
            )}
          </div>

          <div className="h-80 bg-gray-800 p-4 rounded">
            <h2 className="mb-2 font-semibold">Temperature Trend</h2>

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
          <div className="mt-6 bg-gray-800 p-4 rounded">
            <h2 className="font-semibold mb-3">System Alerts</h2>

            {state.alerts.length === 0 ? (
              <p className="text-green-400">No alerts — system stable</p>
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
