import { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Measurements {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const data = [
  { name: "some song", value: 980 },
  { name: "some other song", value: 324 },
  { name: "some other competing song", value: 843 },
  { name: "some other competing song", value: 1200 },
  { name: "some other competing song", value: 690 },
  { name: "some competing song", value: 480 },
];

function generateDistinctColor(index: number, totalItems: number): string {
  const hue = (index * (360 / totalItems)) % 360; // Distribute hues evenly
  const saturation = 70; // Keep saturation constant for vibrancy
  const lightness = 50; // Keep lightness constant for readability
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

const COLORS = Array.from({ length: data.length }, (_, index) =>
  generateDistinctColor(index, data.length)
);

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: Measurements) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      key={index}
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class AwardsEventCategoryPieChart extends PureComponent {
  render() {
    return (
      <>
        <ResponsiveContainer width="100%" height="70%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Labels for the colors */}
        <div className="bg-transparent flex flex-row items-center justify-center flex-wrap">
          {data.map((entry, index) => (
            <div className="w-fit flex items-center gap-1 px-2 bg-transparent">
              <div
                style={{
                  backgroundColor: COLORS[index],
                  padding: "10px",
                  margin: "2px",
                  borderRadius: "5px",
                }}
              ></div>
              <p key={index} className="text-gray-800 text-xs font-LatoBold">
                {entry.name}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
}