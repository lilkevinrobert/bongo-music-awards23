import { Typography } from "@material-tailwind/react";
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
  { category: "Best Song", votes: 500 },
  { category: "Best Album", votes: 450 },
  { category: "Best Male Artist", votes: 497 },
  { category: "Best Female Artist", votes: 690 },
  { category: "Best Group Artist", votes: 121 },
  { category: "Best Male Dancer", votes: 230 },
  { category: "Best Female Dancer", votes: 530 },
  { category: "Best Dance Group", votes: 170 },
  { category: "Best Artist", votes: 870 },
];

const AdminHomeBarChart: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Typography variant="h3" className="capitalize text-lg text-slate-700 my-2">
        votes by category
      </Typography>
      <ResponsiveContainer className="w-auto h-full">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" hide />
          <YAxis hide />
          <Bar dataKey="votes" fill="#808080" barSize={30} />
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
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminHomeBarChart;
