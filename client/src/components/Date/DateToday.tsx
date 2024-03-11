import { Card, Typography } from "@material-tailwind/react";

const DateToday = () => {
  const date = new Date();
  const today = date.toLocaleDateString();
  const day = date.getDay();

  function resolveDay(day: number){
    switch(day){
      case 1:
        return "monday";
      case 2:
        return "tuesday";
      case 3:
        return "wednesday";
      case 4:
        return "thursday";
      case 5:
        return "friday";
      case 6:
        return "saturday";
      default:
        return "sunday";
    }
  }
  return (
    <Card className="py-4 px-2 my-2 flex flex-col-reverse md:flex-row-reverse items-center justify-between rounded-md">
      <div className="flex flex-col">
        <Typography className="text-base font-LatoRegular">
          Today is <span className="font-LatoBold capitalize">{ resolveDay(day) }</span>
        </Typography>
        <Typography className="text-gray-400 font-LatoRegular self-center md:self-end">
          {today}
        </Typography>
      </div>
      <div className="flex flex-col items-center justify-center md:block">
        <Typography className="font-LatoRegular">Welcome <span className="font-LatoBold">Diamond Platnumz</span></Typography>
        <Typography className="font-LatoRegular text-gray-500 text-center">To your <span>Bongo Music Awards </span> dashboard</Typography>
      </div>
    </Card>
  );
};

export default DateToday;
