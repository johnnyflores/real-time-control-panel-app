import type { useSimulation } from "@/hooks/useSimulation";
import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";
import { getSystemStatus } from "@/utils/getSystemStatus";

type Props = {
  sim: ReturnType<typeof useSimulation>;
};
const StatusPanel = ({ sim }: Props) => {
  const { state } = sim;
  const status = getSystemStatus(state.temperature);

  const statusBackground = {
    normal: "bg-green-600",
    warning: "bg-yellow-600",
    critical: "bg-red-600",
  } as const;

  return (
    <Card className="md:col-span-3 col-span-12">
      <Title>System Status</Title>
      <div className={`p-4 rounded text-center ${statusBackground[status]}`}>
        {status.toUpperCase()}
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
