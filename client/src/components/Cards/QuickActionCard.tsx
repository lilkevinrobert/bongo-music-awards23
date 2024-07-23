import { Card, Typography } from "@material-tailwind/react";
import { LuCircle, LuMusic2, LuSettings, LuTrophy, LuUser2 } from "react-icons/lu";
import { NavLink } from "react-router-dom";

interface IQuickActionCardProps {
  title: string;
}

const QuickActionCard = ({ title }: IQuickActionCardProps) => {
  const cardTitleHandler = (cardTitle: string) => {
    switch (cardTitle) {
      case "profile":
        return <LuUser2 className="text-3xl text-gray-800" />;
      case "songs":
        return <LuMusic2 className="text-3xl text-gray-800" />;
      case "nominations":
        return <LuTrophy className="text-3xl text-gray-800" />;
      case "settings":
        return <LuSettings className="text-3xl text-gray-800" />;
      default:
        return <LuCircle className="text-3xl text-gray-800" />;
    }
  };
  return (
    <NavLink to={`/artist/${title}`}>
      <Card className="w-fit px-10 py-5 rounded-md flex flex-col items-center justify-center gap-2 hover:scale-110 bg-white hover:bg-amber-200 transition-all ease-linear">
        {cardTitleHandler(title)}
        <Typography className="font-LatoBold text-base text-gray-900 capitalize">
          {title}
        </Typography>
      </Card>
    </NavLink>
  );
};

export default QuickActionCard;
