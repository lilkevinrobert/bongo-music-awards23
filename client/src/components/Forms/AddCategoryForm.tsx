import { Button, Card, Typography } from "@material-tailwind/react";
import { MdClose } from "react-icons/md";

interface FormProps {
    closeModal: () => void;
  }

const AddCategoryForm = ({ closeModal }:FormProps) => {
  return (
    <Card className="mx-auto w-3/4  rounded-lg shadow-lg bg-white border border-gray-300">
        <form>
        <div className="flex flex-row items-center justify-between m-4 font-semibold">
          <Typography variant="h4" className="text-2xl capitalize">
            New Category
          </Typography>
          <MdClose
            className="w-6 h-6 cursor-pointer rounded-full transition ease-in-out hover:bg-slate-950 hover:text-white"
            onClick={closeModal}
          />
        </div>
        <Button>create</Button>
        </form>
    </Card>
  )
}

export default AddCategoryForm