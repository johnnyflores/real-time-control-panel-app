import type { useSimulation } from "../../hooks/useSimulation";
import Title from "../ui/Title";

type Props = {
  sim: ReturnType<typeof useSimulation>;
};
const StatusPanel = ({ sim }: Props) => {
  const { state } = sim;
  return (
    <div className="col-span-3 bg-gray-900 p-4 rounded">
      <Title>System Status</Title>
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
  );
};

export default StatusPanel;
