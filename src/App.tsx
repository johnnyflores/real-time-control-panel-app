import AlertPanel from '@/components/layout/AlertPanel';
import ChartPanel from '@/components/layout/ChartPanel';
import ControlPanel from '@/components/layout/ControlPanel';
import Header from '@/components/layout/Header';
import StatusPanel from '@/components/layout/StatusPanel';
import { useSimulation } from '@/hooks/useSimulation';
import Footer from '@/components/layout/Footer';

function App() {
  const sim = useSimulation();
  return (
    <div className="min-h-screen h-screen overflow-hidden dark:bg-gray-950 bg-gray-100 text-white p-4 grid grid-rows-[auto_1fr_auto] gap-4">
      <Header sim={sim} />
      <main className="grid grid-cols-1 md:grid-cols-12 gap-4 overflow-auto">
        <ControlPanel sim={sim} />
        <ChartPanel state={sim.state} />
        <StatusPanel sim={sim} />
      </main>
      <AlertPanel sim={sim} />
      <Footer />
    </div>
  );
}

export default App;
