export type AlertLevel = "normal" | "warning" | "critical";

export type Alert = {
  level: AlertLevel;
  message: string;
  time: number;
};
