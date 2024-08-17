import { useForm } from "react-hook-form";
import { Button, Typography } from "@material-tailwind/react";
import { BounceLoader } from "react-spinners";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

type Inputs = {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const schema = yup.object().shape({
  username: yup.string().trim().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  password_confirmation: yup
    .string()
    .required("Please Confirm your Password")
    .oneOf([yup.ref("password")], `Passwords do not match`),
});

const RegistrationForm = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: Inputs) => {
    setLoading(true);
    axios
      .post(`${BASE_URL}/v1/register`, data)
      .then((res) => {
        if (res.status == 201) {
          setLoading(false);
          const responseToastId = toast.success("Registration successful.");
          setTimeout(() => {
            toast.dismiss(responseToastId);
            window.location.reload();
          }, 3000);
        } else {
          setLoading(false);
          toast.error("Registration Failed. Try again later!");
        }
      })
      .catch(() => {
        setLoading(false);
        toast.error("Registration Failed. Try again later!");
      });
  };
  return (
    <>
      {loading ? (
        <div className="mt-4 flex flex-col items-center justify-center">
          <BounceLoader color="#0d0d0d" />
          <Typography className="font-LatoRegular text-sm capitalize text-gray-900">
            setting things up. please wait a few seconds.
          </Typography>
        </div>
      ) : (
        <>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-auto mb-auto mt-0 flex w-full max-w-screen-lg flex-col gap-2 sm:w-96"
          >
            <Typography variant="paragraph" className="font-LatoBold text-base">
              Fill in the form below to create an account
            </Typography>
            <div className="w-full">
              <input
                {...register("username", { required: true })}
                placeholder="Enter your username"
                className="h-10 w-full rounded-lg border border-gray-400 pl-4 font-LatoRegular text-gray-900"
              />
              {errors.username && (
                <ErrorFormField message={`${errors.username?.message}`} />
              )}
            </div>
            <div className="w-full">
              <input
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="h-10 w-full rounded-lg border border-gray-400 pl-4 font-LatoRegular text-gray-900"
              />
              {errors.email && (
                <ErrorFormField message={`${errors.email?.message}`} />
              )}
            </div>
            <div className="w-full">
              <input
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Enter your password"
                type="password"
                className="h-10 w-full rounded-lg border border-gray-400 pl-4 font-LatoRegular text-gray-900"
              />
              {errors.password && (
                <ErrorFormField message={`${errors.password?.message}`} />
              )}
            </div>
            <div className="w-full">
              <input
                {...register("password_confirmation", { required: true })}
                placeholder="Confirm your password"
                type="password"
                className="h-10 w-full rounded-lg border border-gray-400 pl-4 font-LatoRegular text-gray-900"
              />
              {errors.password_confirmation && (
                <ErrorFormField
                  message={`${errors.password_confirmation?.message}`}
                />
              )}
            </div>
            <Button
              type="submit"
              className="bg-gray-950 font-LatoBold text-white transition ease-in-out hover:bg-yellow-300 hover:text-gray-950"
            >
              submit
            </Button>
          </form>
        </>
      )}
    </>
  );
};

export default RegistrationForm;
