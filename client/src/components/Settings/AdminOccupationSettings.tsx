import { Button, Dialog, DialogBody, Typography } from "@material-tailwind/react"
import { IoMdAdd } from "react-icons/io"
import useFetch from "../../hooks/useFetch";
import { AiFillEdit } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";
import AddOccupationForm from "../Forms/AddOccupationForm";
import LoadingList from "../Loading/LoadingList";
import Errors from "../Errors/Errors";
import DeleteDialog from "../Dialog/DeleteDialog";
import EditOccupationForm from "../Forms/EditOccupationForm";
import { Toaster } from "react-hot-toast";

interface Data {
    data: [];
}

interface FetchResult {
    data: Data | null;
    loading: boolean;
    error: Error | null;
    fetchData: () => void;
}
export interface IOccupation {
    id: any;
    name: string;
    description: string;
}

const AdminOccupationSettings = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    // Delete Dialog handling
    const [deleteId, setDeleteId] = useState("");
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const closeDeleteDialog = () => setOpenDeleteDialog((cur) => !cur);
    const deleteDialogHandler = (id: any) => {
        if (id) {
            setDeleteId(id);
        }
        setOpenDeleteDialog((cur) => !cur);
    };

    // Edit dialog handling
    const [_editId, setEditId] = useState(null);
    const [_editCategoryGenre, setEditCategoryGenre] = useState<string>("");
    const [editData, setEditData] = useState<IOccupation | null>(null);
    const [openEditOccupation, setopenEditOccupation] = useState(false);
    const handleopenEditOccupation = () => setopenEditOccupation((cur) => !cur);
    const openEditDialogHandler = (genreName: string, category: any) => {
        setEditData(category);
        if (genreName && category) {
            setEditId(category.id);
            setEditCategoryGenre(genreName);
        }
        setopenEditOccupation((cur) => !cur);
    };
    // Data from API
    const {
        data: occupationData,
        loading,
        error,
        fetchData
    }: FetchResult = useFetch(`${BASE_URL}/admin/occupations`);

    return (
        <>
            <Typography variant="h5" className="text-base text-gray-800 font-LatoBold capitalize">occupation</Typography>
            <p className="font-LatoRegular text-sm text-gray-700">Add a job or profession</p>
            <div className="mt-4">
                <div >
                    {loading ? (
                        <LoadingList />
                    ) : error ? (
                        <Errors errorName={error.name} message={error.message} />
                    ) : occupationData?.data.length === 0 ? (
                        <p className="font-LatoRegular">Start adding by clicking the button below</p>
                    ) : (
                        <div className="flex flex-row flex-wrap items-center gap-2 mb-4">
                            {
                                occupationData?.data.map((occupation: any, i) => (
                                    <div
                                        key={i}
                                        className="group relative flex w-fit items-center justify-between gap-2 rounded-full bg-amber-100 px-4 py-2 font-LatoBold text-xs uppercase text-gray-800 transition ease-linear hover:bg-gray-800 hover:text-gray-50"
                                    >
                                        <GoDotFill className="text-lg text-gray-700 transition ease-linear group-hover:text-gray-50" />

                                        {occupation.name}
                                        <div className="invisible flex flex-row items-center gap-2 rounded-full bg-amber-50 px-2 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                                            <AiFillEdit
                                                onClick={() => openEditDialogHandler(occupation.name, occupation)}
                                                className="cursor-pointer rounded-full text-xl text-green-500 hover:border-2 hover:border-green-500"
                                            />
                                            <TiDelete
                                                onClick={() => deleteDialogHandler(occupation.id)}
                                                className="cursor-pointer rounded-full text-2xl text-red-500 hover:border-2 hover:border-red-500"
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>)}
                </div>
                <Button variant="filled" size="md" onClick={handleOpen} className="rounded-md bg-gray-800 hover:bg-gray-500 transition ease-linear duration-300 text-gray-100 normal-case font-LatoRegular flex flex-row items-center gap-2"> <IoMdAdd className="text-base" /> Add another occupation</Button>
            </div>
            {/* Toaster */}
            <Toaster position="top-center" containerClassName="font-LatoRegular" toastOptions={{
                duration: 5000,
                style: {
                    background: '#333',
                    color: '#fff',
                },
            }} />

            {/* Dialogs */}
            <Dialog open={open} handler={handleOpen} size="md" className="bg-transparent text-black shadow-none">
                <DialogBody className="flex items-center justify-center">
                    <AddOccupationForm closeModal={handleOpen} />
                </DialogBody>
            </Dialog>
            <Dialog
                size="md"
                open={openEditOccupation}
                handler={handleopenEditOccupation}
                className="bg-transparent text-black shadow-none"
            >
                <EditOccupationForm
                    closeModal={handleopenEditOccupation}
                    fetchData={fetchData}
                    occupation={editData && editData}
                />
            </Dialog>
            <Dialog
                size="md"
                open={openDeleteDialog}
                handler={deleteDialogHandler}
                className="bg-transparent text-black shadow-none"
            >
                {deleteId && (
                    <DialogBody className="flex items-center justify-center">
                        <DeleteDialog
                            closeModal={closeDeleteDialog}
                            fetchData={fetchData}
                            deleteId={deleteId}
                            deleteItem="Occupation"
                        />
                    </DialogBody>
                )}
            </Dialog>
        </>
    )
}

export default AdminOccupationSettings
