import {Button, Card, Typography} from "@material-tailwind/react";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { MdClose, MdOutlineInfo } from "react-icons/md";

interface FormData {
    firstName: string;
    middleName: string;
    lastName: string;
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

const AddJudgeForm: React.FC<FormProps> = ({ closeModal }) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        event_id: "",
        organization: "",
        position: "",
        expertise: "",
        role: "",
        phone: "",
        bio: "",
    });


    const handleChange = <T extends HTMLInputElement | HTMLTextAreaElement>(e: ChangeEvent<T>) => {
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
        <Card className="mx-auto w-3/4  rounded-lg shadow-lg bg-white border border-gray-300">
            <form className="w-full px-8 mx-auto my-4" onSubmit={handleSubmit}>
                <div className="flex flex-row items-center justify-between mb-4  uppercase font-semibold">
                    <Typography variant="h4" className="text-2xl">New Judge</Typography>
                    <MdClose
                        className="w-6 h-6 cursor-pointer rounded-full transition ease-in-out hover:bg-slate-950 hover:text-white"
                        onClick={closeModal}
                    />
                </div>

                <div className="mb-4 flex items-center gap-12 justify-between ">
                    <div className="w-1/2">
                        <label htmlFor="firstname" className="block text-sm font-LatoBold text-gray-700"> First Name</label>
                        <input type="text" id="firstName" name="firstName" required  value={formData.firstName}
                         onChange={handleChange} className="h-10 mt-1 p-2 pl-4 border-gray-400 rounded-md w-full font-LatoRegular"/>
                    </div>

                    <div className="w-1/2">
                        <label htmlFor="input2" className="block text-sm font-LatoBold text-gray-600">Middle Name</label>
                        <input type="text" id="middleName" name="middleName" value={formData.middleName} 
                        onChange={handleChange} className="h-10 mt-1 p-2 pl-4 border-gray-400 rounded-md  w-full font-LatoRegular"/>
                    </div>
                </div>



                <div className="flex items-center gap-12 justify-between">
                    <div className="mb-4 w-1/2">
                        <label
                            htmlFor="lastname"
                            className="block text-sm font-LatoBold text-gray-700"
                        >
                            Lastname
                        </label>
                        <input
                            type="tel"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="h-10 mt-1 p-2 pl-4 w-full border-gray-400 rounded-md bg-transparent font-LatoRegular"
                        />
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
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="h-10 mt-1 p-2 pl-4 w-full border-gray-400 rounded-md bg-transparent font-LatoRegular"
                        />
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
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-10 mt-1 p-2 pl-4 w-full border-gray-400 rounded-md bg-transparent font-LatoRegular"
                        />
                    </div>

                    <div className="mb-4 w-1/2">
                        <label
                            htmlFor="organization"
                            className="block text-sm font-LatoBold text-gray-700"
                        >
                            Organization
                        </label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            required
                            value={formData.organization}
                            onChange={handleChange}
                            className="h-10 mt-1 p-2 pl-4 w-full border-gray-400 rounded-md bg-transparent font-LatoRegular"
                        />
                    </div>
                </div>


                <div className="flex items-center gap-12 justify-between">
                    <div className="mb-4 w-1/2">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-LatoBold text-gray-700"
                        >
                            Position
                        </label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            required
                            value={formData.position}
                            onChange={handleChange}
                            className="h-10 mt-1 p-2 pl-4 w-full border-gray-400 rounded-md bg-transparent font-LatoRegular"
                        />
                    </div>

                    <div className="mb-4 w-1/2">
                        <label
                            htmlFor="expertise"
                            className="block text-sm font-LatoBold text-gray-700"
                        >
                            Expertise
                        </label>
                        <input
                            type="text"
                            id="expertise"
                            name="expertise"
                            required
                            value={formData.expertise}
                            onChange={handleChange}
                            className="h-10 mt-1 p-2 pl-4 w-full border-gray-400 rounded-md bg-transparent font-LatoRegular"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-12 justify-between">
                    <div className="mb-4 w-1/2">
                        <label htmlFor="event" className="block text-sm font-LatoBold text-gray-700">
                            Event
                        </label>
                        <select
                            id="event"
                            name="event_id"
                            required
                            value={formData.event_id}
  //
                            className="h-10 mt-1 p-2 pl-4 w-full border-gray-400 rounded-md bg-transparent font-LatoRegular"
                        >
                            <option value="">Select an event</option>
                            <option className="py-8"  value="1">Bongo Music Award 2024 </option>
                            <option className="" value="1">Bongo Music Award 2023 </option>
                            <option className="" value="1">Bongo Music Award 2022 </option>
                        </select>
                    </div>



                    <div className="mb-4 w-1/2">
                        <label
                            htmlFor="role"
                            className="block text-sm font-LatoBold text-gray-700"
                        >
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            required
                            value={formData.role}

                            className="mt-1 p-2 pl-4 w-full border-gray-400 rounded-md bg-transparent font-LatoRegular"
                        >
                            <option value="">Select an role</option>
                            <option className="py-8"  value="1">Judge </option>
                            <option className="py-8"  value="1">Coordinator </option>

                        </select>
                    </div>
                </div>

                <div className="mb-4 w-full">
                    <label
                        htmlFor="bio"
                        className="block text-sm font-LatoBold text-gray-700"
                    >
                        Biography
                    </label>
                    <textarea value={formData.bio}
                              onChange={handleChange}
                              id="bio"
                              name="bio"
                              required
                              className="mt-1 p-2 pl-4 w-full border-gray-400 rounded-md bg-transparent font-LatoRegular"
                    />
                </div>


                <div className="mt-4">
                    <div className="flex items-center gap-12 justify-between">
                        <div className="flex items-center gap-2">
                            <MdOutlineInfo className="w-5 h-5 text-red-500" />
                            <Typography className="font-LatoRegular text-red-500">
                                All fields are required
                            </Typography>
                        </div>

                        <div className="flex flex-row items-center gap-4">
                        <Button
                                type="button"
                                variant="outlined"
                                onClick={closeModal}
                                className="px-4 py-2 border border-transparent bg-yellow-100 text-yellow-500 font-LatoBold rounded-md hover:bg-slate-900 hover:text-yellow-300 transition-all ease-in-out"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="px-4 py-2 bg-yellow-300 text-slate-950 font-LatoBold rounded-md hover:bg-slate-900 hover:text-yellow-300 transition-all ease-in-out"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>

                </div>
            </form>
        </Card>
    );
}


export default AddJudgeForm;