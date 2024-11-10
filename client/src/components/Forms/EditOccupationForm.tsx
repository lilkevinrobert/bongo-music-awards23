import { Button, Card, CardBody, CardHeader, CardFooter, Typography } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { IOccupation } from "../Settings/AdminOccupationSettings";

interface FormProps {
    closeModal: () => void;
    fetchData: () => void;
    occupation: IOccupation | null;
}

const EditOccupationForm = ({ closeModal, occupation, fetchData }: FormProps) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const [occupationData, setoccupationData] = useState(occupation)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setoccupationData((prevData) => ({
            ...prevData!,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        closeModal();
        axios
            .patch(`${BASE_URL}/admin/occupations/${occupationData?.id}`, {
                name: occupationData?.name,
                description: occupationData?.description
            })
            .then((response) => {
                if (response.status == 200) {
                    fetchData(); // Ref-fetch data after save
                    toast.success("Occupation Updated Successfully");
                    // setTimeout(() => window.location.reload(), 3000);
                } else {
                    toast.error("Failed to Update Occupation.");
                }
            })
            .catch(() => {
                toast.error("Failed to Update Occupation.");
            });
    };

    return (
        <Card className="mx-auto w-full max-w-[24rem] rounded-md">
            <form onSubmit={(e) => handleSubmit(e)}>
                <CardHeader className="shadow-none pt-4 px-2">
                    <Typography
                        variant="h4"
                        className="text-2xl capitalize font-LatoBold text-gray-900"
                    >
                        Edit Occupation
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-2 text-gray-900">
                        <Typography className="capitalize font-LatoBold">name</Typography>
                        <input
                            type="text"
                            name="name"
                            value={occupationData?.name}
                            className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
                            placeholder="Name of Sponsor"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div className="flex flex-col items-start gap-2 text-gray-900">
                        <Typography className="capitalize font-LatoBold">description</Typography>
                        <textarea
                            name="description"
                            value={occupationData?.description}
                            className="w-full h-[6rem] border-gray-300 font-LatoRegular text-sm rounded"
                            placeholder="Describe the Occupation"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                </CardBody>
                <CardFooter className="flex flex-row items-center justify-end gap-1">
                    <Button
                        size="md"
                        onClick={closeModal}
                        className="capitalize text-gray-900 shadow-none bg-transparent hover:bg-gray-200 transition ease-in-out font-LatoBold rounded-full"
                    >
                        cancel
                    </Button>
                    <Button
                        type="submit"
                        size="md"
                        className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoRegular hover:font-LatoBold rounded-full"
                    >
                        save changes
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};

export default EditOccupationForm;
