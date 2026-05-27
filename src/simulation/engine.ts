export type SystemState = {
  time: number;
  temperature: number;
  load: number;
  history: { time: number; temperature: number }[];
};

export const initialState: SystemState = {
  time: 0,
  temperature: 50,
  load: 20,
  history: [],
};

export function updateSystem(state: SystemState): SystemState {
  const loadEffect = state.load * 0.2;

  const newTemp = state.temperature + loadEffect - 0.3;

  const newPoint = {
    time: state.time,
    temperature: newTemp,
  };

  return {
    time: state.time + 1,
    temperature: newTemp,
    load: state.load,
    history: [...state.history.slice(-20), newPoint], // keep last 20 points
  };
}
