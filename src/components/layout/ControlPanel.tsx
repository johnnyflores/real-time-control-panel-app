import { useSimulation } from "@/hooks/useSimulation";
import ModeSelector from "@/components/ModeSelector";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Slider from "@/components/ui/Slider";
import Title from "@/components/ui/Title";

type Props = {
  sim: ReturnType<typeof useSimulation>;
};

const ControlPanel = ({ sim }: Props) => {
  return (
    <Card className="col-span-3">
      <Title>Control Panel</Title>
      <Button
        fullWidth
        variant={sim.running ? "success" : "danger"}
        onClick={sim.toggleRunning}
      >
        {sim.running ? "System Running" : "System Stopped"}
      </Button>
      <Slider
        label={`Load: ${sim.state.load}`}
        min={0}
        max={100}
        value={sim.state.load}
        onChange={(e) => sim.setLoad(Number(e.target.value))}
      />
      <div className="space-y-2">
        <ModeSelector value={sim.state.mode} onChange={sim.setMode} />
      </div>
    </Card>
  );
};

export default ControlPanel;
