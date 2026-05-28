import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Alert } from "@/types/alert";
import { getSystemStatus } from "@/utils/getSystemStatus";
import { formatTemperature } from "@/utils/formatTemperature";
import { formatTime } from "@/utils/formatTime";

type Props = {
  alert: Alert;
};

export default function AlertItem({ alert }: Props) {
  return (
    <Card className="p-2 animate-fade-in">
      <div className="flex justify-between items-center">
        <p className="font-semibold flex items-center gap-2 dark:text-white text-gray-700">
          {alert.message}
        </p>
        <Badge status={getSystemStatus(alert.temperature)}>
          <span className="text-xs uppercase">
            {getSystemStatus(alert.temperature)}
          </span>
        </Badge>
      </div>
      <p className="text-xs opacity-80 mt-1 dark:text-gray-300 text-gray-700">
        Time: {formatTime(alert.time)} • Temp:{" "}
        {formatTemperature(alert.temperature)}
      </p>
    </Card>
  );
}
