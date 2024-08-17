import { Typography, Button } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosWarning } from "react-icons/io";

interface DeleteDialogProps {
  closeModal: () => void;
  fetchData: () => void;
  deleteId: string;
  deleteItem: "Sponsor" | "User" | "Award" | "Genre";
}

const DeleteDialog = ({
  closeModal,
  fetchData,
  deleteId,
  deleteItem,
}: DeleteDialogProps) => {
  const [delId] = useState(deleteId);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  function deleteItemHandler(item: string) {
    switch (item) {
      case "Sponsor":
        return `sponsors`;
      case "Genre":
        return `genres`;
      default:
        break;
    }
  }

  const deleteHandler = () => {
    axios
      .delete(`${BASE_URL}/v1/${deleteItemHandler(deleteItem)}/${delId}`)
      .then(() => {
        closeModal();
        fetchData(); // re-fetch data
        toast.success(`${deleteItem} Deleted Successfully.`);
      })
      .catch(() => {
        closeModal();
        toast.error(`Failed to delete ${deleteItem}.`)});
  };
  return (
    <div className="h-full border-red-400 flex items-center">
      <div className="bg-white p-8 rounded-md shadow-md">
        <Typography className="text-gray-900 text-sm md:text-md lg:text-lg font-LatoBold text-center">
          Are you sure you want to Delete?
        </Typography>
        <div className="flex flex-col items-center justify-center py-4">
          <IoIosWarning className="text-4xl text-yellow-300" />
          <div className="flex flex-col items-center justify-center">
            <Typography className="text-gray-900 text-sm md:text-md lg:text-lg font-LatoBold">
              This action is irreversible
            </Typography>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 bg-transparent">
          <Button
            size="sm"
            type="button"
            onClick={() => closeModal()}
            className="bg-gray-100 hover:bg-gray-200 shadow-none text-gray-800 text-sm md:text-md lg:text-md font-LatoBold py-2 px-4 rounded-full mr-2 transition ease-in-out"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            type="button"
            onClick={deleteHandler}
            className="bg-red-500 hover:bg-red-700 text-sm md:text-md lg:text-md text-white font-LatoBold py-2 px-4 rounded-full"
          >
            Confirm Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
