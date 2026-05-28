import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { SystemState } from "@/types";
import Title from "@/components/ui/Title";
import Card from "@/components/ui/Card";

type Props = {
  state: SystemState;
};

const ChartPanel = ({ state }: Props) => {
  return (
    <Card className="col-span-6">
      <Title>Live Temperature Analysis</Title>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={state.history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#00bcd4"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-800 p-2 rounded">
          Temp: {state.temperature.toFixed(1)}°C
        </div>
        <div className="bg-gray-800 p-2 rounded">Load: {state.load}%</div>
        <div className="bg-gray-800 p-2 rounded">Time: {state.time}</div>
      </div>
    </Card>
  );
};

export default ChartPanel;
