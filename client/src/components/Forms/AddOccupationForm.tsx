import { Button, Card, CardBody, Typography } from "@material-tailwind/react"
import { MdClose } from "react-icons/md"
import axios from "axios";
import { useForm } from "react-hook-form";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";


interface FormProps {
    closeModal: () => void;
}

export type Inputs = {
    name: string;
    description: string;
}

// Validation Schema
const schema = yup.object().shape({
    name: yup.string().required("Name of the Occupation is required."),
    description: yup.string().required("Description is required."),
})

const AddOccupationForm = ({ closeModal }: FormProps) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: any) => {
        let modified_data = {
            name: data.name,
            description: data.description
        };
        const processingToastId = toast.loading("Processing...");

        axios
            .post(`${BASE_URL}/admin/occupations`, modified_data,)
            .then((res) => {
                toast.dismiss(processingToastId);
                if (res.status == 201) {
                    const responseToastId = toast.success("Occupation created successfully.");

                    setTimeout(() => {
                        toast.dismiss(responseToastId);
                        window.location.reload();
                    }, 3000);
                }
            })
            .catch((e) => {
                const messages: any = Object.values(e.response.data.message);

                let allErrors = messages
                    .flatMap((item: any) => item) // flatten the array of messages
                    .join("\n"); // join all messages with a new line separator

                toast.error(allErrors, {
                    style: {
                        whiteSpace: "pre-line", // ensure new lines are rendered properly
                        backgroundColor: "#f56565",
                        color: "#fff",
                        fontWeight: "bold",
                        padding: "16px auto",
                        borderRadius: "8px",
                    },
                });

                toast.dismiss(processingToastId);
            });
    };
    return (
        <Card className="mx-auto w-full max-w-[24rem] rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardBody className="flex flex-col gap-4">
                    <div className="flex flex-row items-center justify-between my-4 font-semibold">
                        <Typography
                            variant="h4"
                            className="text-2xl capitalize font-LatoBold text-gray-900"
                        >
                            New Occupation
                        </Typography>
                        <div className="bg-gray-100 rounded">
                            <MdClose
                                className="w-6 h-6 cursor-pointer rounded transition ease-in-out hover:bg-slate-800 hover:text-white"
                                onClick={closeModal}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-2 text-gray-900">
                        <Typography className="capitalize font-LatoBold">name</Typography>
                        <input
                            type="text"
                            className={`w-full h-[2rem] border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                } font-LatoRegular text-sm rounded`} placeholder="Occupation name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                            <ErrorFormField message={`${errors.name?.message}`} />
                        )}
                    </div>
                    <div className="flex w-full flex-col">
                        <label className="font-LatoBold text-base capitalize text-gray-900">
                            description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            placeholder="Enter a description for the Occupation"
                            {...register("description", { required: true })}
                            className={`mt-1 w-full rounded-md border ${errors.description ? 'border-red-500' : 'border-gray-300'} p-2 font-LatoRegular`}
                        />
                        {errors.description && (
                            <ErrorFormField message={`${errors.description?.message}`} />
                        )}
                    </div>
                    <Button
                        size="md"
                        type="submit"
                        className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoBold rounded-full"
                    >
                        add occupation
                    </Button>
                </CardBody>
                {/* Toaster */}
                <Toaster position="top-center" containerClassName="font-LatoRegular" />
            </form>
        </Card>
    )
}

export default AddOccupationForm
