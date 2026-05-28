import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Alert } from "@/simulation/types";

type Props = {
  alert: Alert;
};

export default function AlertItem({ alert }: Props) {
  return (
    <Card className="p-2 animate-fade-in">
      <div className="flex justify-between items-center">
        <p className="font-semibold flex items-center gap-2">{alert.message}</p>
        <Badge status={alert.level}>{alert.level.toUpperCase()}</Badge>
      </div>
      <p className="text-xs opacity-80 mt-1">Time: {alert.time}</p>
    </Card>
  );
}
