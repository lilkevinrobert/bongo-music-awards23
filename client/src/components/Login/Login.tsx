import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Login = {
  email: string;
  password: string;
};

type Token = {
  "token": string;
  "refreshToken": string;
}

const loginFormData: Login = {
  email: "",
  password: "",
};

const Login = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [loginData, setLoginData] = useState(loginFormData);
  const navigate = useNavigate();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginFormHandler = () => {
    fetch(`${BASE_URL}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        window.setTimeout(()=> toast.success(<p className="capitalize">{`Authenticating...`}</p>), 1000)
        const {token} = data;
        console.log(token)
        if (token) {
          saveDataToLocalStorage(token)
          window.setTimeout(()=> toast.success(<p className="capitalize">{`Getting things ready...🎶`}</p>), 3000);
          
          // if(data){
          // }
          window.setTimeout(()=> toast.success(<p className="capitalize">{`Your are being redirected.`}</p>), 5000);
          window.setTimeout(() => {
            navigate("/admin/dashboard");
            window.location.reload();
          }, 7000);
        } else {
          toast.error(<p className="capitalize">{`${data.message}`}</p>);
        }
      });
  };

  const saveDataToLocalStorage = (token: Token) => {
    const data = token;
    localStorage.setItem("bmawards", JSON.stringify(data));
  };

  return (
  <>
    <Card className="w-96 shadow-none">
      <form onSubmit={loginFormHandler}>
        <CardHeader className="flex flex-col items-center justify-center shadow-none">
          <Typography className="self-start pl-2">
            Enter account credentials to login.
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 my-2">
          <Input
            color="black"
            crossOrigin={undefined}
            className="my-1 rounded-md"
            placeholder="Enter Your Email Address"
            type="email"
            name="email"
            onChange={inputHandler}
          />
          <Input
            color="black"
            crossOrigin={undefined}
            className="my-1 rounded-md"
            placeholder="Enter Your Password"
            type="password"
            name="password"
            onChange={inputHandler}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            className="bg-slate-900 hover:bg-yellow-400 transition ease-in-out"
            onClick={loginFormHandler}
          >
            Log In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Forgot Password?
          </Typography>
        </CardFooter>
      </form>
    </Card>
    <Toaster position="top-center" />
    </>
  );
};

export default Login;
