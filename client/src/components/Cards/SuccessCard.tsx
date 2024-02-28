import { Button, Card, Typography } from '@material-tailwind/react';
import { RiArrowGoForwardLine } from "react-icons/ri";
import { PiMaskHappy } from "react-icons/pi";

type SuccessCardProps = {
  message: string;
  onTrigger: ()=> void;
}

const SuccessCard = ({ message, onTrigger }: SuccessCardProps) => {
  const handleTriggerAction = () => {
    onTrigger();
  };
  return (
    <Card className='bg-white px-8 py-10 rounded-lg shadow-lg flex flex-col items-center gap-2'>
      <PiMaskHappy className="text-8xl text-slate-600" />
      <Typography className='text-4xl text-green-500 capitalize font-LatoRegular'>success!</Typography>
      <Typography className='text-md text-slate-500 font-LatoRegular capitalize'>{message}</Typography>
      <Button 
      onClick={handleTriggerAction}
      size='sm' className='my-4 flex flex-row items-center gap-2 bg-green-500 normal-case text-md font-LatoRegular'>
        Continue
        <RiArrowGoForwardLine />
      </Button>
    </Card>
  );
};

export default SuccessCard;