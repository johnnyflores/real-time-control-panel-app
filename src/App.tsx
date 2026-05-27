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
        <h1 className="text-2xl font-bold mb-4">
          Real-Time Simulation Dashboard
        </h1>

        <button
          onClick={() => setRunning(!running)}
          className="px-4 py-2 bg-blue-600 rounded"
        >
          {running ? "Stop" : "Start"}
        </button>

        <div className="mt-6 space-y-2">
          <p>Time: {state.time}</p>
          <p>Temperature: {state.temperature.toFixed(2)}°C</p>
          <p>Load: {state.load}%</p>
        </div>

        <div className="mt-10 h-80 bg-gray-800 p-4 rounded">
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
      </div>
    </>
  );
}

export default App;
