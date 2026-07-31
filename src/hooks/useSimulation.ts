import { useCallback, useEffect, useState } from "react";
import { initialState, updateSystem } from "@/simulation/engine";
import { type SystemState } from "@/types/simulation";
import { SIMULATION_INTERVAL } from "@/constants/system";

export function useSimulation() {
  const [state, setState] = useState<SystemState>(initialState);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setState((prev) => updateSystem(prev));
    }, SIMULATION_INTERVAL);

    return () => clearInterval(interval);
  }, [running]);

  const setLoad = useCallback((load: number) => {
    const nextLoad = Math.min(100, Math.max(0, load));
    setState((prev) => ({ ...prev, load: nextLoad }));
  }, []);

  const setMode = useCallback((mode: SystemState["mode"]) => {
    setState((prev) => ({ ...prev, mode }));
  }, []);

  const toggleRunning = useCallback(() => setRunning((r) => !r), []);

  return {
    state,
    running,
    setLoad,
    setMode,
    toggleRunning,
  };
}
