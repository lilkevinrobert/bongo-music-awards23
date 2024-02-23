import { Card, Typography } from "@material-tailwind/react";

const LoadingSummaryCard = () => {
  return (
    <Card className="w-6/6 h-24 py-6 flex animate-pulse flex-wrap items-center gap-8 bg-slate-200 rounded-lg shadow-sm">
      <Typography className="hidden">Loading</Typography>
    </Card>
  );
};

export default LoadingSummaryCard;
