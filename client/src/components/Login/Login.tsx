import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";

const Login = () => {
  return (
    <Card className="w-96 shadow-none">
        <form action="#">
      <CardHeader className="flex flex-col items-center justify-center shadow-none">
        <Typography className="self-start pl-2">Enter account credentials to login.</Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4 my-2">
        <Input color="black" crossOrigin={undefined} className="my-1 rounded-md" placeholder="Enter Your Email Address" />
        <Input color="black" crossOrigin={undefined} className="my-1 rounded-md" placeholder="Enter Your Password" type="password" />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth className="bg-slate-900 hover:bg-yellow-400 transition ease-in-out">
          Log In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Forgot Password?
        </Typography>
      </CardFooter>
      </form>
    </Card>
  );
};

export default Login;
