import { Button, Card, Typography } from "@material-tailwind/react";
import React, { useState, ChangeEvent } from "react";
import { MdClose, MdOutlineInfo } from "react-icons/md";
import { PropagateLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  first_name: string;
  middle_name: string;
  last_name: string;
  stage_name: string;
  phone_number: string;
  email: string;
  bio: string;
}

interface FormProps {
  closeModal: () => void;
}

const AddArtistForm: React.FC<FormProps> = ({ closeModal }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    middle_name: "",
    last_name: "",
    stage_name: "",
    phone_number: "",
    email: "",
    bio: "",
  });

  const handleChange = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: ChangeEvent<T>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true); // Start the loading indicator
    console.log(data);
    // e.preventDefault();
    // await axios
    //   .get("https://api.bongomusicawards.co.tz/sanctum/csrf-cookie")
    //   .then(() => {
    //     axios
    //       .post("https://api.bongomusicawards.co.tz/api/artists", formData)
    //       .then((response) => {
    //         console.log(response);
    //         closeModal();
    //         window.setTimeout(
    //           () =>
    //             toast.success(
    //               <p className="capitalize">{`Artist Created successful...`}</p>
    //             ),
    //           2000
    //         );
    //         setLoading(false);
    //         // Close the modal

    //         //Stop spinner or progress indicator with the success message.
    //       })
    //       .catch((errors) => {
    //         console.log(errors);
    //         window.setTimeout(
    //           () =>
    //             toast.error(
    //               <p className="capitalize">{`Failed to Create artist...`}</p>
    //             ),
    //           1000
    //         );
    //         setLoading(false);
    //       });
    //   })
    //   .catch((errors) => {
    //     console.log(errors);
    //     window.setTimeout(
    //       () =>
    //         toast.error(
    //           <p className="capitalize">{`Failed to Create artist...`}</p>
    //         ),
    //       1000
    //     );

    //     //stop the spinner or progress indicator with the error message.
    //     setLoading(false);
    //   });

    // console.log("Form submitted:", formData);
  };
  return (
    <Card className="mx-auto w-3/4  rounded-md shadow-lg bg-white border border-gray-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-8 mx-auto my-8"
      >
        <div className="flex flex-row items-center justify-between mb-4 uppercase font-semibold">
          <Typography variant="h4" className="text-2xl">
            New Artist
          </Typography>
          <MdClose
            className="text-2xl cursor-pointer rounded-full transition ease-in-out hover:bg-slate-950 hover:text-white"
            onClick={closeModal}
          />
        </div>

        <div className="mb-4 flex items-center gap-12 justify-between ">
          <div className="w-1/2">
            <label
              htmlFor="firstname"
              className="block text-sm font-LatoBold text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              {...register("first_name", {
                required: "* Firstname is required",
              })}
              className="h-10 mt-1 p-2 pl-4 border border-gray-400 font-LatoRegular rounded-md w-full"
            />
            {errors.first_name && (
              <p className="text-md font-LatoRegular text-red-500">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div className="w-1/2">
            <label
              htmlFor="input2"
              className="block text-sm font-LatoBold text-gray-600"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="middle_name"
              {...register("middle_name", { required: false })}
              className="h-10 mt-1 p-2 pl-4 border border-gray-400 font-LatoRegular rounded-md  w-full"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center gap-12 justify-between ">
          <div className=" w-1/2">
            <label
              htmlFor="last_name"
              className="block text-sm font-LatoBold text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              {...register("last_name", { required: "* Lastname is required" })}
              className="h-10 mt-1 p-2 pl-4 w-full border border-gray-400 font-LatoRegular rounded-md bg-transparent"
            />
            {errors.last_name && (
              <p className="text-md font-LatoRegular text-red-500">
                {errors.last_name.message}
              </p>
            )}
          </div>
          <div className="w-1/2">
            <label
              htmlFor="stage_name"
              className="block text-sm font-LatoBold text-gray-700"
            >
              Stage Name
            </label>
            <input
              type="text"
              id="stage_name"
              {...register("stage_name", {
                required: "* Stage name is required",
              })}
              className="h-10 mt-1 p-2 pl-4 w-full border border-gray-400 font-LatoRegular rounded-md bg-transparent"
            />
            {errors.stage_name && (
              <p className="text-md font-LatoRegular text-red-500">
                {errors.stage_name.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-12 justify-between">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="phone"
              className="block text-sm font-LatoBold text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone_number"
              {...register("phone_number", {
                required: "* Phone number is required",
              })}
              className="h-10 mt-1 p-2 pl-4 w-full border border-gray-400 font-LatoRegular rounded-md bg-transparent"
            />
            {errors.phone_number && (
              <p className="text-md font-LatoRegular text-red-500">
                {errors.phone_number.message}
              </p>
            )}
          </div>

          <div className="mb-4 w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-LatoBold text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "* Email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
              })}
              className="h-10 mt-1 p-2 pl-4 w-full border border-gray-400 font-LatoRegular rounded-md bg-transparent"
            />
            {errors.email && (
              <p className="text-md font-LatoRegular text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="bio"
            className="block text-sm font-LatoBold text-gray-700"
          >
            Biography
          </label>
          <textarea
            value={formData.bio}
            id="bio"
            {...register("bio", { required: "* Biography is required" })}
            className="mt-1 p-2 pl-4 w-full border border-gray-400 font-LatoRegular rounded-md bg-transparent"
          />
          {errors.bio && (
            <p className="text-md font-LatoRegular text-red-500">
              {errors.bio.message}
            </p>
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-12 justify-between">
            <div className="flex items-center gap-2">
              <MdOutlineInfo className="w-5 h-5 text-red-500" />
              <Typography className="text-red-500 font-LatoRegular">
                All fields are required
              </Typography>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Button
                type="button"
                variant="outlined"
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 border-none text-gray-800 font-LatoBold py-2 px-4 rounded transition ease-in-out"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-4 py-2 bg-yellow-300 text-slate-950 font-LatoBold rounded-md hover:bg-slate-800 hover:text-yellow-300 transition-all ease-in-out"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <Toaster position="top-center" />

        {loading && (
          <div className="flex items-center justify-center  mt-4">
            <PropagateLoader color="#36d7b7" />
          </div>
        )}
      </form>
    </Card>
  );
};

export default AddArtistForm;
