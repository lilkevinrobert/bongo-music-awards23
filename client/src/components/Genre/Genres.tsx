import { IoIosArrowForward } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";

const Genres = () => {
  const genreList = [
    {
      id: "dkslds",
      name: "hip-hop",
    },
    {
      id: "dkslds",
      name: "bongo flava",
    },
    {
      id: "dkslds",
      name: "singeli",
    },
    {
      id: "dkslds",
      name: "taarabu",
    },
  ];
  return (
    <div className="py-2 flex flex-row flex-wrap gap-2">
      {genreList.map((item, i) => (
        <div
          key={i}
          className="group flex items-center justify-between gap-2 font-LatoBold text-xs text-gray-800 uppercase bg-amber-100 w-fit px-4 py-2 rounded-full"
        >
          {item.name}
          <IoIosArrowForward className="text-lg text-gray-500 group-hover:hidden transition ease-linear" />
          <div className="hidden group-hover:flex flex-row items-center gap-2 transition ease-linear bg-amber-50 px-2 rounded-full">
            <AiFillEdit className="text-lg text-green-500 cursor-pointer hover:border-2 hover:border-green-500 rounded-full" />
            <TiDelete className="text-xl text-red-500 cursor-pointer hover:border-2 hover:border-red-500 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Genres;
