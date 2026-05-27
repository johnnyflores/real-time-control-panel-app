export type SystemMode = "normal" | "stress" | "emergency";
export type AlertLevel = "normal" | "warning" | "critical";

export type Alert = {
  level: AlertLevel;
  message: string;
  time: number;
};

export type SystemState = {
  time: number;
  temperature: number;
  load: number;
  mode: SystemMode;
  history: { time: number; temperature: number }[];
  alerts: Alert[];
};
