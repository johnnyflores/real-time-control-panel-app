export type SystemMode = "normal" | "stress" | "emergency";
export type SystemState = {
  time: number;
  temperature: number;
  load: number;
  mode: SystemMode;
  history: { time: number; temperature: number }[];
};

export const initialState: SystemState = {
  time: 0,
  temperature: 50,
  load: 20,
  mode: "normal",
  history: [],
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
  };
}
