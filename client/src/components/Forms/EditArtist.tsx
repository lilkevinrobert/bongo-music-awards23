import {Button, Card, Typography} from "@material-tailwind/react";
import React, {useState, ChangeEvent, FormEvent} from "react";
import {MdClose, MdOutlineInfo} from "react-icons/md";
import axios from "../../api/axios.ts";
import {PropagateLoader} from "react-spinners";
import toast, {Toaster} from "react-hot-toast";

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

const EditArtist: React.FC<FormProps> = ({closeModal}) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        first_name: "",
        middle_name: "",
        last_name: "",
        stage_name: "",
        phone_number: "",
        email: "",
        bio: "",
    });

    const handleChange = <T extends HTMLInputElement | HTMLTextAreaElement>(e: ChangeEvent<T>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        setLoading(true); // Start the loading indicator
        e.preventDefault();
        await axios.get('https://api.bongomusicawards.co.tz/sanctum/csrf-cookie')
            .then(() => {
                axios.post(`https://api.bongomusicawards.co.tz/api/artists/${1}`, formData)
                    .then((response) => {
                        console.log(response);
                        closeModal();
                        window.setTimeout(() => toast.success(<p
                            className="capitalize">{`Artist Created successful...`}</p>), 2000)
                        setLoading(false);
                        // Close the modal


                        //Stop spinner or progress indicator with the success message.
                    }).catch((errors) => {
                    console.log(errors);
                    window.setTimeout(() => toast.error(<p className="capitalize">{`Failed to Create artist...`}</p>), 1000)
                    setLoading(false);
                })
            })
            .catch((errors) => {
                console.log(errors)
                window.setTimeout(() => toast.error(<p
                    className="capitalize">{`Failed to Create artist...`}</p>), 1000)

                //stop the spinner or progress indicator with the error message.
                setLoading(false);
            })
        console.log("Form submitted:", formData);
    };
    return (
        <Card className="mx-auto w-3/4 rounded-lg shadow-lg bg-white border border-gray-100 px-4">
            <form className="w-full px-8 mx-auto my-6" onSubmit={handleSubmit}>
                <div className="flex flex-row items-center justify-between my-4  uppercase font-semibold">
                    <Typography variant="h4">Edit Artist</Typography>
                    <MdClose
                        className="text-xl cursor-pointer rounded-full transition ease-in-out hover:bg-slate-900 hover:text-white"
                        onClick={closeModal}
                    />
                </div>
                <div className="mb-4 flex items-center gap-12 justify-between ">
                    <div className="w-1/2">
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700"> First
                            Name</label>
                        <input type="text" id="first_name" name="first_name" required value={formData.first_name}
                               onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
                    </div>

                    <div className="w-1/2">
                        <label htmlFor="input2" className="block text-sm font-medium text-gray-600">Middle Name</label>
                        <input type="text" id="middle_name" name="middle_name" value={formData.middle_name}
                               onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md  w-full"/>
                    </div>
                </div>

                <div className="mb-4 flex items-center gap-12 justify-between ">
                    <div className=" w-1/2">
                        <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            required
                            value={formData.last_name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-transparent"
                        />
                    </div>
                    <div className="w-1/2">
                        <label
                            htmlFor="stage_name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Stage Name
                        </label>
                        <input
                            type="text"
                            id="stage_name"
                            name="stage_name"
                            required
                            value={formData.stage_name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-transparent"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-12 justify-between">
                    <div className="mb-4 w-1/2">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone_number"
                            name="phone_number"
                            required
                            value={formData.phone_number}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-transparent"
                        />
                    </div>


                    <div className="mb-4 w-1/2">
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
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-transparent"
                        />
                    </div>
                </div>

                <div className="mb-4 w-full">
                    <label
                        htmlFor="bio"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Biography
                    </label>
                    <textarea value={formData.bio}
                              onChange={handleChange}
                              id="bio"
                              name="bio"
                              required
                              className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-transparent"
                    />
                </div>

                <div className="mt-4">
                    <div className="flex items-center gap-12 justify-between">
                        <div className="flex items-center gap-2">
                            <MdOutlineInfo className="w-5 h-5 text-transparent md:text-red-500"/>
                            <Typography className="text-transparent md:text-red-500 font-LatoRegular">
                                All fields are required
                            </Typography>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-2">
                            <Button
                                size="sm"
                                type="button"
                                onClick={closeModal}
                                className="px-4 py-2 bg-yellow-50 capitalize text-sm text-yellow-600 font-LatoBold rounded-md hover:bg-slate-900 hover:text-yellow-300 transition-all ease-in-out"
                            >
                                cancel
                            </Button>
                            <Button
                                size="sm"
                                type="submit"
                                className="px-4 py-2 bg-yellow-300 capitalize text-sm text-slate-950 font-LatoBold rounded-md hover:bg-slate-900 hover:text-yellow-300 transition-all ease-in-out"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>

                </div>
                <Toaster position="top-center"/>

                {loading && (
                    <div className="flex items-center justify-center mt-4">
                        <PropagateLoader color="#36d7b7"/>
                    </div>
                )}
            </form>
        </Card>
    );
};

export default EditArtist;
