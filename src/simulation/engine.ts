import { type SystemState } from "@/types/simulation";
import { getSystemStatus } from "@/utils/getSystemStatus";

export const initialState: SystemState = {
  time: 0,
  temperature: 50,
  load: 20,
  mode: "normal",
  history: [],
  alerts: [],
};

const HEAT_FACTORS = {
  normal: 0.25,
  stress: 0.6,
  emergency: 1.2,
} as const;

const MAX_HISTORY_POINTS = 30;
const MAX_ALERTS = 20;
const COOLING_FACTOR = 0.4;

function createStatusAlert(
  status: "warning" | "critical",
  time: number,
  temperature: number,
) {
  return {
    id: crypto.randomUUID(),
    level: status,
    message:
      status === "critical"
        ? "Critical temperature reached!"
        : "High temperature detected",
    time,
    temperature,
  };
}

export function updateSystem(state: SystemState): SystemState {
  const heatFactor = HEAT_FACTORS[state.mode];
  const nextTime = state.time + 1;

  const newTemp = state.temperature + state.load * heatFactor - COOLING_FACTOR;

  const newAlerts = [...state.alerts];
  const previousStatus = getSystemStatus(state.temperature);
  const nextStatus = getSystemStatus(newTemp);

  if (nextStatus !== previousStatus && nextStatus !== "normal") {
    newAlerts.push(createStatusAlert(nextStatus, nextTime, newTemp));
  }

  return {
    ...state,
    time: nextTime,
    temperature: newTemp,
    history: [
      ...state.history.slice(-(MAX_HISTORY_POINTS - 1)),
      {
        time: nextTime,
        temperature: newTemp,
      },
    ],
    alerts: newAlerts.slice(-MAX_ALERTS),
  };
}
