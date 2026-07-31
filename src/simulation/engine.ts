import { CRITICAL_TEMPERATURE, WARNING_TEMPERATURE } from "@/constants/system";
import { type SystemState } from "@/types/simulation";

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
const cooling = 0.4;

export function updateSystem(state: SystemState): SystemState {
  const heatFactor = HEAT_FACTORS[state.mode];

  const newTemp = state.temperature + state.load * heatFactor - cooling;

  const newAlerts = [...state.alerts];

  if (newTemp > CRITICAL_TEMPERATURE) {
    newAlerts.push({
      id: crypto.randomUUID(),
      level: "critical",
      message: "Critical temperature reached!",
      time: state.time,
      temperature: newTemp,
    });
  } else if (newTemp > WARNING_TEMPERATURE) {
    newAlerts.push({
      id: crypto.randomUUID(),
      level: "warning",
      message: "High temperature detected",
      time: state.time,
      temperature: newTemp,
    });
  }

  return {
    ...state,
    time: state.time + 1,
    temperature: newTemp,
    history: [
      ...state.history.slice(-MAX_HISTORY_POINTS),
      {
        time: state.time,
        temperature: newTemp,
      },
    ],
    alerts: newAlerts.slice(-MAX_ALERTS),
  };
}
