import type { useSimulation } from "@/hooks/useSimulation";
import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";
import { CRITICAL_TEMPERATURE, WARNING_TEMPERATURE } from "@/constants/system";

type Props = {
  sim: ReturnType<typeof useSimulation>;
};
const StatusPanel = ({ sim }: Props) => {
  const { state } = sim;
  return (
    <Card className="col-span-3">
      <Title>System Status</Title>
      <div
        className={`p-4 rounded text-center ${
          state.temperature > CRITICAL_TEMPERATURE
            ? "bg-red-600"
            : state.temperature > WARNING_TEMPERATURE
              ? "bg-yellow-600"
              : "bg-green-600"
        }`}
      >
        {state.temperature > CRITICAL_TEMPERATURE
          ? "CRITICAL"
          : state.temperature > WARNING_TEMPERATURE
            ? "WARNING"
            : "NORMAL"}
      </div>
      <div className="mt-4 text-sm space-y-2">
        <p className="dark:text-white text-gray-700 transition-colors duration-300">
          Mode: {state.mode}
        </p>
        <p className="dark:text-white text-gray-700 transition-colors duration-300">
          Alerts: {state.alerts.length}
        </p>
        <p className="dark:text-white text-gray-700 transition-colors duration-300">
          System Load: {state.load}%
        </p>
      </div>
    </Card>
  );
};

export default StatusPanel;
