import type { Alert } from '@/types/alert';

export type SimulationMode = 'normal' | 'stress' | 'emergency';

export type HistoryPoint = {
  time: number;
  temperature: number;
};

export type SystemState = {
  temperature: number;
  load: number;
  time: number;
  mode: SimulationMode;
  alerts: Alert[];
  history: HistoryPoint[];
};
