import { MdOutlineSearch } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "@material-tailwind/react";

interface FormProps {
  closeModal: () => void;
}

const SearchDialog = ({ closeModal }: FormProps) => {
  return (
    <div className="w-full lg:w-1/2 h-auto bg-white shadow rounded-xl flex flex-row items-center justify-between gap-2">
      <div className="flex items-center justify-center p-4">
        <MdOutlineSearch className="text-2xl text-gray-700" />
      </div>
      <div className="w-full flex flex-row">
      <input
        type="search"
        placeholder="Search Award Events here..."
        className="w-full border-white pl-6 font-LatoRegular text-black rounded-l-lg bg-transparent active:border-gray-900"
      />
        <Button className="font-LatoRegular capitalize rounded-l-none rounded-r-lg">search</Button>
      </div>
      <div
        onClick={closeModal}
        className="flex items-center justify-center p-4 cursor-pointer rounded-r-lg transition ease-in-out bg-yellow-200 hover:bg-yellow-100"
      >
        <IoCloseOutline className="text-2xl text-gray-900" />
      </div>
    </div>
  );
};

export default SearchDialog;
