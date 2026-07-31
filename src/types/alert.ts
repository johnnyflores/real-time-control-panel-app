export type AlertLevel = "normal" | "warning" | "critical";

export type Alert = {
  id: string;
  level: AlertLevel;
  message: string;
  time: number;
  temperature: number;
};
