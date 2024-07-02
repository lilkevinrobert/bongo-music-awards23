import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Data = {
  category: string;
  votes: number;
};

const data: Data[] = [
  { category: "Song of the Year", votes: 500 },
  { category: "Artist of the Year", votes: 400 },
  { category: "Best Album", votes: 215 },
  { category: "Best Male Artist", votes: 497 },
  { category: "Best Female Artist", votes: 690 },
  // { category: "Best Group Artist", votes: 121 },
  // { category: "Best Male Dancer", votes: 230 },
  // { category: "Best Female Dancer", votes: 530 },
  // { category: "Best Dance Group", votes: 170 },
  // { category: "Best Artist", votes: 870 },
];

const AwardsEventBarChart: React.FC = () => {
  return (
    <div className="flex flex-col bg-transparent">
      <ResponsiveContainer className="w-auto h-full">
        <BarChart data={data}>
          <CartesianGrid stroke="#36454F" strokeDasharray="5 5" />
          <XAxis dataKey="category" hide />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              color: "#0d0d0d",
              borderRadius: "8px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          />
          <Bar dataKey="votes" fill="#36454F" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AwardsEventBarChart;