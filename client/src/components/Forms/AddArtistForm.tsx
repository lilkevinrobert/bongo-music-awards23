import { Card, Typography } from "@material-tailwind/react";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { MdClose, MdOutlineInfo } from "react-icons/md";

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  stageName: string;
  phone: string;
  email: string;
}

interface FormProps {
  closeModal: () => void;
}

const AddArtistForm: React.FC<FormProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    stageName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <Card className="mx-auto w-full max-w-[24rem] rounded-lg shadow-lg">
      <form className="w-full px-8 mx-auto my-6" onSubmit={handleSubmit}>
        <div className="flex flex-row items-center justify-between my-4">
          <Typography variant="h4">New Artist</Typography>
          <MdClose
            className="w-6 h-6 cursor-pointer rounded-full transition ease-in-out hover:bg-slate-950 hover:text-white"
            onClick={closeModal}
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-transparent"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="middleName"
            className="block text-sm font-medium text-gray-700"
          >
            Middle Name
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            required
            value={formData.middleName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-transparent"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-transparent"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="stageName"
            className="block text-sm font-medium text-gray-700"
          >
            Stage Name
          </label>
          <input
            type="text"
            id="stageName"
            name="stageName"
            required
            value={formData.stageName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-transparent"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-transparent"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-transparent"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2 mb-4">
            <MdOutlineInfo className="w-5 h-5 text-red-500" />
            <Typography className="text-red-500">
              All fields are required
            </Typography>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-300 text-slate-950 font-LatoBold rounded-md hover:bg-slate-900 hover:text-yellow-300 transition-all ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddArtistForm;
