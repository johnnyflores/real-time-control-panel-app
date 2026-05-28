import Card from "../ui/Card";
import Badge from "../ui/Badge";
import type { Alert } from "../../simulation/types";

type Props = {
  alert: Alert;
};

export default function AlertItem({ alert }: Props) {
  return (
    <Card className="p-2">
      <div className="flex justify-between items-center">
        <p className="font-semibold">{alert.message}</p>

        <Badge status={alert.level === "critical" ? "critical" : "warning"}>
          {alert.level.toUpperCase()}
        </Badge>
      </div>

      <p className="text-xs opacity-80 mt-1">Time: {alert.time}</p>
    </Card>
  );
}
