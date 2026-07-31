import { useSimulation } from '@/hooks/useSimulation';
import Title from '@/components/ui/Title';
import { useTheme } from '@/hooks/useTheme';
import { getSystemStatus } from '@/utils/getSystemStatus';
import ThemeToggle from '../ui/ThemeToggle';

type Props = {
  sim: ReturnType<typeof useSimulation>;
};

const Header = ({ sim }: Props) => {
  const { theme, toggleTheme } = useTheme();
  const status = getSystemStatus(sim.state.temperature);

  const statusStyles = {
    normal: 'text-green-400',
    warning: 'text-yellow-400',
    critical: 'text-red-500',
  } as const;

  return (
    <header className="dark:bg-gray-900 bg-white transition-colors duration-300 p-4 rounded flex justify-between items-center">
      <Title className="text-xl">Real-Time Dashboard</Title>
      <div className="flex gap-4 items-center">
        <span className="dark:text-white text-gray-700 transition-colors duration-300">
          Mode: <span className="text-cyan-400">{sim.state.mode}</span>
        </span>
        <span className="dark:text-white text-gray-700 transition-colors duration-300">
          Status:{' '}
          <span className={statusStyles[status]}>{status.toUpperCase()}</span>
        </span>
      </div>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </header>
  );
};

export default Header;
