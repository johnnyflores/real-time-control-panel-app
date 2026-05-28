import { useSimulation } from "../../hooks/useSimulation";
import Title from "../ui/Title";

type Props = {
  sim: ReturnType<typeof useSimulation>;
};

const Header = ({ sim }: Props) => {
  return (
    <header className="bg-gray-900 p-4 rounded flex justify-between items-center">
      <Title className="text-xl">Real-Time Dashboard</Title>
      <div className="flex gap-4 items-center">
        <span>
          Mode: <span className="text-cyan-400">{sim.state.mode}</span>
        </span>
        <span>
          Status:{" "}
          {sim.state.temperature > 90 ? (
            <span className="text-red-500">CRITICAL</span>
          ) : sim.state.temperature > 75 ? (
            <span className="text-yellow-400">WARNING</span>
          ) : (
            <span className="text-green-400">NORMAL</span>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
