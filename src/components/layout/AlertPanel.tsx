import { useEffect, useRef } from 'react';
import type { useSimulation } from '@/hooks/useSimulation';
import Card from '@/components/ui/Card';
import Title from '@/components/ui/Title';
import AlertItem from '@/components/layout/AlertItem';

type Props = {
  sim: ReturnType<typeof useSimulation>;
};
const AlertPanel = ({ sim }: Props) => {
  const { state } = sim;
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.alerts]);
  return (
    <Card>
      <Title>Event Log</Title>
      <div className="space-y-2 max-h-40 overflow-auto">
        {state.alerts.length === 0 ? (
          <p className="text-green-400">No events</p>
        ) : (
          state.alerts.map((alert) => (
            <AlertItem key={alert.id} alert={alert} />
          ))
        )}
        <div ref={bottomRef} />
      </div>
    </Card>
  );
};

export default AlertPanel;
