import {
  Button,
  Card,
  Typography,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "../../api/axios.ts";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    await axios
      .get("https://api.bongomusicawards.co.tz/sanctum/csrf-cookie")
      .then(() => {
        axios
          .post("https://api.bongomusicawards.co.tz/api/artists/register", {
            first_name,
            last_name,
            email,
            password,
          })
          .then((response) => {
            console.log(response);
            window.setTimeout(
              () =>
                toast.success(<p className="capitalize">{`Registering...`}</p>),
              2000
            );
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");

            window.setTimeout(
              () =>
                toast.success(
                  <p className="capitalize">{`Account Created successful...`}</p>
                ),
              2000
            );
            setLoading(false);
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
            window.setTimeout(
              () =>
                toast.error(
                  <p className="capitalize">{`Failed to create Account...`}</p>
                ),
              1000
            );
            setLoading(false);
          });
      })
      .catch((errors) => {
        console.log(errors);
        window.setTimeout(
          () =>
            toast.error(
              <p className="capitalize font-LatoBold">{`Failed to Create artist...`}</p>
            ),
          1000
        );
        //stop the spinner or progress indicator with the error message.
        setLoading(false);
      });
  };

  return (
    <Card className="w-96 shadow-none">
      <form
        onSubmit={handleRegister}
        className="mt-0 mb-2 w-full max-w-screen-lg sm:w-96"
      >
        <CardHeader className="shadow-none pl-2">
          <Typography className="text-lg text-gray-800 font-LatoBold">
            Enter your details to register.
          </Typography>
        </CardHeader>
        <CardBody className="mb-4 flex flex-col gap-4">
          <input
          type="text"
            value={first_name}
            onChange={(e) => setFirstname(e.target.value)}
            className="pl-4 rounded-lg w-full font-LatoRegular text-gray-900 border border-gray-400"
            placeholder="Enter Your firstname"
          />
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastname(e.target.value)}
            className="pl-4 rounded-lg w-full font-LatoRegular text-gray-900 border border-gray-400"
            placeholder="Enter Your lastname"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-4 rounded-lg w-full font-LatoRegular text-gray-900 border border-gray-400"
            placeholder="Enter Your Email Address"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-4 rounded-lg w-full font-LatoRegular text-gray-900 border border-gray-400"
            placeholder="Enter Your Password"
            type="password"
          />
          <Button className="font-LatoBold hover:bg-amber-600 transition ease-in-out" fullWidth onClick={handleRegister}>
            Register
          </Button>
        </CardBody>

        <Toaster position="top-center" />
        {loading && (
          <div className="flex items-center justify-center mt-4">
            <PropagateLoader color="#36d7b7" />
          </div>
        )}
      </form>
    </Card>
  );
};

export default Register;
