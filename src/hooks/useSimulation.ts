import { useEffect, useState } from "react";
import { initialState, updateSystem } from "@/simulation/engine";
import { type SystemState } from "@/types";
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

  const setLoad = (load: number) => {
    setState((prev) => ({ ...prev, load }));
  };

  const setMode = (mode: SystemState["mode"]) => {
    setState((prev) => ({ ...prev, mode }));
  };

  const toggleRunning = () => setRunning((r) => !r);

  return {
    state,
    running,
    setLoad,
    setMode,
    toggleRunning,
  };
}
