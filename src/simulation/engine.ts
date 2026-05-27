export type SystemState = {
  time: number;
  temperature: number;
  load: number;
};

export const initialState: SystemState = {
  time: 0,
  temperature: 50,
  load: 20,
};

export function updateSystem(state: SystemState): SystemState {
  const loadEffect = state.load * 0.2;

  return {
    time: state.time + 1,
    temperature: state.temperature + loadEffect - 0.3,
    load: state.load,
  };
}
