import { Button, Card, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { MdClose, MdOutlineInfo } from "react-icons/md";
import { Controller, useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  event_id: string;
  organization: string;
  position: string;
  expertise: string;
  role: string;
  phone: string;
  bio: string;
}

interface FormProps {
  closeModal: () => void;
}

const AddNominatorForm: React.FC<FormProps> = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    event_id: "",
    organization: "",
    position: "",
    expertise: "",
    role: "",
    phone: "",
    bio: "",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Add form submission logic here
    setFormData(data);
    console.log("Form submitted:", data);
  };

  return (
    <Card className="mx-auto w-3/4 rounded-lg shadow-lg bg-white border border-gray-300">
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-12 mx-auto my-6" 
      >
        <div className="flex flex-row items-center justify-between my-4  uppercase font-semibold">
          <Typography variant="h4" className="text-2xl capitalize font-LatoBold text-gray-900">
            New Nominator
          </Typography>
          <div className="bg-gray-100 rounded">
            <MdClose
              className="w-6 h-6 cursor-pointer rounded transition ease-in-out hover:bg-slate-800 hover:text-white"
              onClick={closeModal}
            />
            </div>
        </div>

        <div className="mb-4 flex items-center gap-12 justify-between ">
          <div className="w-1/2">
            <label
              htmlFor="first_name"
              className="block text-sm font-LatoBold text-gray-900 font-LatoBold"
            >First Name
            </label>
            <input
              type="text"
              id="first_name"
              {...register("first_name", {
                required: "* Firstname is required",
              })}
              className="h-8 mt-1 p-2 pl-4 border border-gray-300 rounded-md w-full font-LatoRegular"
            />
              {errors.first_name && (
              <p className="text-md font-LatoRegular text-red-500">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div className="w-1/2">
            <label
              htmlFor="middle_name"
              className="block text-sm font-LatoBold text-gray-900"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="middle_name"
              {...register("middle_name", {
                required: false,
              })}
              className="h-8 mt-1 p-2 pl-4 border border-gray-300 rounded-md  w-full font-LatoRegular"
            />
          </div>
        </div>

        <div className="flex items-center gap-12 justify-between">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="last_name"
              className="block text-sm font-LatoBold text-gray-900"
            >
              Lastname
            </label>
            <input
              type="tel"
              id="last_name"
              {...register("last_name", {
                required: "* Lastname is required",
              })}
              className="h-8 mt-1 p-2 pl-4 w-full border border-gray-300 rounded-md bg-transparent font-LatoRegular"
            />
                  {errors.last_name && (
              <p className="text-md font-LatoRegular text-red-500">
                {errors.last_name.message}
              </p>
            )}
          </div>

          <div className="mb-4 w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-LatoBold text-gray-900"
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
              className="h-8 mt-1 p-2 pl-4 w-full border border-gray-300 rounded-md bg-transparent font-LatoRegular"
            />
                 {errors.email && (
              <p className="text-md font-LatoRegular text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-12 justify-between">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="phone"
              className="block text-sm font-LatoBold text-gray-900"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: "* Phone is required" })}
              className="h-8 mt-1 p-2 pl-4 w-full border border-gray-300 rounded-md bg-transparent font-LatoRegular"
            />
            {errors.phone && (
                <p className="text-md font-LatoRegular text-red-500">
                  {errors.phone.message}
                </p>
              )}
          </div>

          <div className="mb-4 w-1/2">
            <label
              htmlFor="organization"
              className="block text-sm font-LatoBold text-gray-900"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              {...register("organization", { required: "* Organization is required" })}
              className="h-8 mt-1 p-2 pl-4 w-full border border-gray-300 rounded-md bg-transparent font-LatoRegular"
            />
            {errors.organization && (
                <p className="text-md font-LatoRegular text-red-500">
                  {errors.organization.message}
                </p>
              )}
          </div>
        </div>

        <div className="flex items-center gap-12 justify-between">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="phone"
              className="block text-sm font-LatoBold text-gray-900"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              {...register("position", { required: "* Position is required" })}
              className="h-8 mt-1 p-2 pl-4 w-full border border-gray-300 rounded-md bg-transparent font-LatoRegular"
            />
            {errors.position && (
                <p className="text-md font-LatoRegular text-red-500">
                  {errors.position.message}
                </p>
              )}
          </div>

          <div className="mb-4 w-1/2">
            <label
              htmlFor="expertise"
              className="block text-sm font-LatoBold text-gray-900"
            >
              Expertise
            </label>
            <input
              type="text"
              id="expertise"
              {...register("expertise", { required: "* Expertise is required" })}
              className="h-8 mt-1 p-2 pl-4 w-full border border-gray-300 rounded-md bg-transparent font-LatoRegular"
            />
            {errors.expertise && (
                <p className="text-md font-LatoRegular text-red-500">
                  {errors.expertise.message}
                </p>
              )}
          </div>
        </div>

        <div className="flex items-center gap-12 justify-between">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="event_id"
              className="block text-sm font-LatoBold text-gray-900"
            >
              Event
            </label>
            <Controller
              name="event_id"
              control={control}
              render={({ field }) => (
                <select {...field}
                className="h-10 mt-1 p-2 pl-4 w-full border border-gray-300 rounded-md bg-transparent font-LatoRegular"
                >
                  <option value="">Select Event</option>
                  <option value="bma2023">Bongo Music Awards 2024</option>
                  <option value="bmakids2024">Bongo Music Kids Awards 2024</option>
                </select>
              )}
              />
          </div>

          <div className="mb-4 w-1/2">
            <label
              htmlFor="role"
              className="block text-sm font-LatoBold text-gray-900"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              className="h-10 mt-1 p-2 pl-4 w-full border border-gray-300 rounded-md bg-transparent font-LatoRegular"
            >
              <option value="">Select a role</option>
              <option className="py-8" value="1">
                Judge{" "}
              </option>
              <option className="py-8" value="1">
                Coordinator{" "}
              </option>
            </select>
          </div>
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="bio"
            className="block text-sm font-LatoBold text-gray-900"
          >
            Biography
          </label>
          <textarea
            id="bio"
            {...register("bio", { required: "A bio is required" })}
            className="mt-1 p-2 pl-4 w-full border-gray-300 rounded-md bg-transparent font-LatoRegular"
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

            <div className="flex flex-row items-center gap-1">
              <Button
                type="button"
                variant="outlined"
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-300 border-gray-300 hover:border-gray-800 text-gray-800 font-LatoBold py-2 px-4 rounded transition ease-in-out"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-4 py-2 bg-gray-900 border text-white font-LatoBold rounded-md hover:bg-yellow-400 hover:text-gray-900 transition-all ease-in-out"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddNominatorForm;
