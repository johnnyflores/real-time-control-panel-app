import { useSimulation } from "@/hooks/useSimulation";
import Title from "@/components/ui/Title";
import { useTheme } from "@/hooks/useTheme";
import ThemeToggle from "../ui/ThemeToggle";

type Props = {
  sim: ReturnType<typeof useSimulation>;
};

const Header = ({ sim }: Props) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="dark:bg-gray-900 bg-white p-4 rounded flex justify-between items-center">
      <Title className="text-xl">Real-Time Dashboard</Title>
      <div className="flex gap-4 items-center">
        <span className="dark:text-white text-gray-700">
          Mode: <span className="text-cyan-400">{sim.state.mode}</span>
        </span>
        <span className="dark:text-white text-gray-700">
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
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </header>
  );
};

export default Header;
