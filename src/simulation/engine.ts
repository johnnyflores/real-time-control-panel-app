import { type SystemState } from "./types";

export const initialState: SystemState = {
  time: 0,
  temperature: 50,
  load: 20,
  mode: "normal",
  history: [],
  alerts: [],
};

export function updateSystem(state: SystemState): SystemState {
  let heatFactor = 0.25;

  switch (state.mode) {
    case "normal":
      heatFactor = 0.25;
      break;
    case "stress":
      heatFactor = 0.6;
      break;
    case "emergency":
      heatFactor = 1.2;
      break;
  }

  const cooling = 0.4;

  const newTemp = state.temperature + state.load * heatFactor - cooling;

  const newAlerts = [...state.alerts];

  if (newTemp > 90) {
    newAlerts.push({
      level: "critical",
      message: `Critical Alert: Temperature reached ${newTemp.toFixed(2)}°C!`,
      time: state.time,
    });
  } else if (newTemp > 75) {
    newAlerts.push({
      level: "warning",
      message: `Warning: Temperature is high at ${newTemp.toFixed(2)}°C.`,
      time: state.time,
    });
  }

  return {
    ...state,
    time: state.time + 1,
    temperature: newTemp,
    history: [
      ...state.history.slice(-30),
      {
        time: state.time,
        temperature: newTemp,
      },
    ],
    alerts: newAlerts.slice(-10),
  };
}
