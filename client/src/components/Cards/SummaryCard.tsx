import { Card, Typography } from "@material-tailwind/react";
import { LuUsers } from "react-icons/lu";
import { MdOutlineEventNote, MdOutlineCategory, MdOutlineHowToVote } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { TbUsersGroup } from "react-icons/tb";

export type summaryCardType = {
  count: number;
  title: string;
  type: string;
};

const SummaryCard = ({ count, title, type }: summaryCardType) => {
  const iconHandler = () => {
    switch(type){
      case "users":
        return <div className="bg-blue-200 p-2 rounded"><LuUsers className="text-blue-600 text-2xl" /></div>
      case "events":
        return <div className="bg-green-200 p-2 rounded"><MdOutlineEventNote className="text-green-600 text-2xl" /></div>
      case "genres":
        return <div className="bg-purple-200 p-2 rounded"><MdOutlineCategory className="text-purple-600 text-2xl" /></div>
      case "categories":
        return <div className="bg-red-200 p-2 rounded"><BiCategoryAlt className="text-red-600 text-2xl" /></div>
      case "nominators":
        return <div className="bg-yellow-200 p-2 rounded"><MdOutlineHowToVote className="text-yellow-600 text-2xl" /></div>
      default:
        return <div className="bg-cyan-200 p-2 rounded"><TbUsersGroup className="text-cyan-600 text-2xl" /></div>
    }
  }

  const colorHandler = () => {
    switch(type){
      case "users":
        return "text-blue-500 font-LatoBold text-2xl self-end"
      case "events":
        return "text-green-500 font-LatoBold text-2xl self-end"
      case "genres":
        return "text-purple-500 font-LatoBold text-2xl self-end"
      case "categories":
        return "text-red-500 font-LatoBold text-2xl self-end"
      case "nominators":
        return "text-yellow-500 font-LatoBold text-2xl self-end"
      default:
        return "text-cyan-500 font-LatoBold text-2xl self-end"
    }
  }

  const bgColorHandler = () => {
    switch(type){
      case "users":
        return "bg-blue-50"
      case "events":
        return "bg-green-50"
      case "genres":
        return "bg-purple-50"
      case "categories":
        return "bg-red-50"
      case "nominators":
        return "bg-yellow-50"
      default:
        return "bg-cyan-50"
    }
  }
  return (
    <Card className={`w-4/6 px-4 flex flex-row items-center justify-between ${bgColorHandler()} text-slate-800 shadow-md rounded-lg py-6`}>
      { iconHandler() }
      <div className="flex flex-col items-center">
        <Typography className="text-base capitalize">{title}</Typography>
        <Typography className={colorHandler()}>{count}</Typography>
      </div>
    </Card>
  );
};

export default SummaryCard;
