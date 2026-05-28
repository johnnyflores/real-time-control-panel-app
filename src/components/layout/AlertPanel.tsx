import type { useSimulation } from "../../hooks/useSimulation";
import Card from "../ui/Card";
import Title from "../ui/Title";
import AlertItem from "./AlertItem";

type Props = {
  sim: ReturnType<typeof useSimulation>;
};
const AlertPanel = ({ sim }: Props) => {
  const { state } = sim;
  return (
    <Card>
      <Title>Event Log</Title>
      <div className="space-y-2 max-h-40 overflow-auto">
        {state.alerts.length === 0 ? (
          <p className="text-green-400">No events</p>
        ) : (
          state.alerts.map((alert, index) => (
            <AlertItem key={index} alert={alert} />
          ))
        )}
      </div>
    </Card>
  );
};

export default AlertPanel;
