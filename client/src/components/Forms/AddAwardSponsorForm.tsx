import { CardBody, Typography, CardFooter, Card, Button } from '@material-tailwind/react'
import useFetch from '../../hooks/useFetch';
import Errors from '../Errors/Errors';
import { useForm, Controller } from "react-hook-form";
import LoadingDialog from '../Loading/LoadingDialog';

interface FormProps {
    handleOpenSponsorsDialog: () => void;
}

interface Sponsor {
    id: number;
    sponsor_name: string;
}

interface Data {
    data: [];
}
interface FormData {
    selectedItems: number[];
}
interface FetchResult {
    data: Data | null;
    loading: boolean;
    error: Error | null;
}

const AddAwardSponsorForm = ({ handleOpenSponsorsDialog }: FormProps) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    // GET data
    const {
        data: sponsorsList,
        loading: sponsorsListLoading,
        error: sponsorsListError,
    }: FetchResult = useFetch(`${BASE_URL}/sponsors`);

    const { handleSubmit, control, setValue, watch } = useForm<FormData>({
        defaultValues: {
            selectedItems: []
        }
    });
    const selectedItems = watch("selectedItems");


    const handleCheckboxChange = (id: number, isChecked: boolean) => {
        const currentSelection = selectedItems || [];
        console.log(id)

        if (isChecked) {
            // Add item to selectedItems array if checked
            setValue("selectedItems", [...currentSelection, id]);
        } else {
            // Remove item from selectedItems array if unchecked
            setValue(
                "selectedItems",
                currentSelection.filter((item) => item !== id)
            );
        }
    };

    const onSubmit = async (data: any) => {
        console.log(data)
    };
    return (
        <>
            {
                sponsorsListLoading ? (
                    <LoadingDialog />
                ) : sponsorsListError ? (
                    <Errors errorName={sponsorsListError?.name} message={sponsorsListError?.message} />
                ) : sponsorsList?.data.length === 0 ? (
                    <p>Add a sponsor please. see sponsors page NOW!</p>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Card className="mx-auto w-full max-w-[44rem] rounded-md">
                            <CardBody className="flex flex-col gap-4">
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="font-LatoBold"
                                >
                                    Add Awards Sponsor(s)
                                </Typography>
                                <Typography
                                    className="mb-3 font-LatoRegular"
                                    variant="paragraph"
                                    color="gray"
                                >
                                    Select appropriate sponsor form the list below.
                                </Typography>

                                {/* Available Sponsor's */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 bg-transparent border-none rounded p-0">
                                    {
                                        sponsorsList?.data.map((item: Sponsor, index) => (
                                            <Controller
                                                key={index}
                                                name="selectedItems"
                                                control={control}
                                                render={() => (
                                                    <div className="flex items-center space-x-2 p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition duration-300 ease-linear shadow">
                                                        <label className="flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedItems?.includes(item.id)}
                                                                onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                                                                className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded checked:bg-gray-900 focus:ring-yellow-300 transition duration-200 ease-in-out"
                                                            />
                                                            <span className="ml-3 text-gray-800 font-LatoRegular">{item.sponsor_name}</span>
                                                        </label>
                                                    </div>
                                                )}
                                            />
                                        ))
                                    }
                                </div>
                                <CardFooter className="pt-4 pb-0 px-0 flex flex-row items-center justify-end bg-transparent border-t gap-2">
                                    <Button
                                        variant="filled"
                                        onClick={handleOpenSponsorsDialog}
                                        className="rounded-full font-LatoBold bg-gray-300 hover:bg-gray-300 border-gray-300 hover:border-gray-800 text-gray-800"
                                    >
                                        cancel
                                    </Button>
                                    <Button variant="filled" type='submit'
                                        className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoRegular hover:font-LatoBold rounded-full"
                                    >
                                        Save &nbsp; Changes
                                    </Button>
                                </CardFooter>
                            </CardBody>
                        </Card>
                    </form>
                )
            }
        </>
    )
}

export default AddAwardSponsorForm