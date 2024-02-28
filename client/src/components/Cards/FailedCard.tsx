import { Button, Card, Typography } from '@material-tailwind/react';
import { RiLoopRightLine } from "react-icons/ri";
import { PiMaskSad } from "react-icons/pi";

type FailedCardProps = {
  message: string;
  onTrigger: ()=> void;
}

const FailedCard = ({ message, onTrigger }: FailedCardProps) => {
  const handleTriggerAction = () => {
    onTrigger();
  };
  return (
    <Card className='bg-white px-8 py-10 rounded-lg shadow-lg flex flex-col items-center gap-2'>
      <PiMaskSad className="text-8xl text-slate-600" />
      <Typography className='text-4xl text-red-500 capitalize font-LatoRegular'>oops!</Typography>
      <Typography className='text-md text-slate-600 font-LatoRegular capitalize'>something went wrong</Typography>
      <Typography className='text-md text-slate-500 font-LatoRegular capitalize'>{message}</Typography>
      <Button 
      onClick={handleTriggerAction}
      size='sm' className='my-4 flex flex-row items-center gap-2 bg-red-500 normal-case text-md font-LatoRegular'>
        Try again later
        <RiLoopRightLine />
      </Button>
    </Card>
  );
};

export default FailedCard;