import AlertPanel from "@/components/layout/AlertPanel";
import ChartPanel from "@/components/layout/ChartPanel";
import ControlPanel from "@/components/layout/ControlPanel";
import Header from "@/components/layout/Header";
import StatusPanel from "@/components/layout/StatusPanel";
import { useSimulation } from "@/hooks/useSimulation";

function App() {
  const sim = useSimulation();
  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 grid grid-rows-[auto_1fr_auto] gap-4">
      <Header sim={sim} />
      <main className="grid grid-cols-12 gap-4">
        <ControlPanel sim={sim} />
        <ChartPanel state={sim.state} />
        <StatusPanel sim={sim} />
      </main>
      <AlertPanel sim={sim} />
    </div>
  );
}

export default App;
