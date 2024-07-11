import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "../../api/axios.ts";
import { NavLink, useNavigate } from "react-router-dom";

type Login = {
  email: string;
  password: string;
};

/*type Token = {
    "token": string;
    "refreshToken": string;
}*/

const loginFormData: Login = {
  email: "",
  password: "",
};

interface Errors {
  email: string[];
  password: string[];
}

const errorsFormData: Errors = {
  email: [],
  password: [],
};

const Login = () => {
  //const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [loginData, setLoginData] = useState(loginFormData);
  const [role, setRole] = useState("");

  const [errors] = useState<Errors>(errorsFormData);
  //const {login} = useAuthContext();
  const navigate = useNavigate();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getUser = async () => {
    const { data } = await axios.get("/user");
    console.log(data);
  };

  const handleLogin = async (event: any) => {
    event.preventDefault();
    // login(loginData)
    await axios
      .get("https://api.bongomusicawards.co.tz/sanctum/csrf-cookie")
      .then(() => {
        window.setTimeout(
          () =>
            toast.success(<p className="capitalize">{`Authenticating...`}</p>),
          1000
        );

        axios
          .post("https://api.bongomusicawards.co.tz/login", loginData)
          .then((response) => {
            console.log(response);

            // Extract the token from the response
            const token = response.data.data.token;

            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            console.log("Response:Token " + response.data.data.token);

            getUser();
            setRole(response.data.data.role);

            if (role == "admin") {
              navigate("/admin/dashboard");
            }

            if (role == "Artist") {
              navigate("/artist/dashboard");
            }
            if (role == "nominator") {
              navigate("/nominator/dashboard");
            }

            if (role == "judge") {
              navigate("/judge/dashboard");
            }
          })
          .catch((errors) => {
            if (errors.response.status === 422) {
              console.log(errors.response.data.errors);
              //setErrors(errors.response.data.errors)
            }
          });
      })
      .catch(() => {
        window.setTimeout(
          () =>
            toast.error(
              <p className="capitalize font-LatoBold">{`Failed to login...Try again`}</p>
            ),
          1000
        );
      });
  };

  return (
    <>
      <Card className="w-96 shadow-none">
        <form onSubmit={handleLogin}>
          <CardHeader className="flex flex-col items-center justify-center shadow-none">
            <Typography className="self-start pl-2 text-lg text-gray-800 font-LatoBold">
              Enter account credentials to login.
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 my-1">
            <div>
              <input
                className="pl-4 rounded-lg w-full font-LatoRegular border border-gray-500"
                placeholder="Enter your Email Address"
                type="email"
                name="email"
                onChange={inputHandler}
              />
              {errors?.email?.length > 0 && (
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.email[0]}
                </span>
              )}
            </div>

            <div>
              <input
                placeholder="Enter Your Password"
                type="password"
                name="password"
                className="pl-4 rounded-lg w-full font-LatoRegular border border-gray-500"
                onChange={inputHandler}
              />
              {errors?.password?.length > 0 && (
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.password[0]}
                </span>
              )}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              className="bg-slate-900 hover:bg-amber-600 transition ease-in-out font-LatoBold"
              onClick={handleLogin}
            >
              Log In
            </Button>
            <NavLink to="/recovery">
              <Typography
                variant="small"
                className="mt-6 flex justify-center font-LatoRegular transition-all ease-in-out hover:underline hover:underline-offset-4"
              >
                Forgot Password?
              </Typography>
            </NavLink>
          </CardFooter>
        </form>
      </Card>
      <Toaster position="top-center" />
    </>
  );
};

export default Login;
