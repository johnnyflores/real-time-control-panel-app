import type { useSimulation } from "../../hooks/useSimulation";

type Props = {
  sim: ReturnType<typeof useSimulation>;
};
const AlertPanel = ({ sim }: Props) => {
  const { state } = sim;
  return (
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
                  alert.level === "critical" ? "bg-red-600" : "bg-yellow-600"
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
  );
};

export default AlertPanel;
