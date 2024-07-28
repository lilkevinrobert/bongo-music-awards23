import { MdOutlineSearch } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import SearchResultCard from "../Cards/SearchResultCard";

interface FormProps {
  closeModal: () => void;
}

export interface IResults {
  id: string;
  date: string;
  time: string;
  title: string;
  location: string;
  isActive: boolean;
}

const SearchDialog = ({ closeModal }: FormProps) => {
  // search feature
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<IResults[]>([]);

  // get search data
  const data: IResults[] = [
    {
      id: "jsia3ua3z",
      date: "Sunday, 30 June",
      time: "08:00 pm",
      title: "Bongo Music Awards 2024",
      location: "Dar es Salaam, TZ",
      isActive: true,
    },
    {
      id: "jsia3ua3z",
      date: "Saturday, 16 September",
      time: "08:00 pm",
      title: "Bongo Music Awards 2023",
      location: "Dar es Salaam, TZ",
      isActive: false,
    },
  ];

  useEffect(() => {
    // Filter data based on the search term
    const filtered =
      data.filter((row) => {
        return Object.values(row).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      }) ?? [];
    setFilteredData(filtered);
  }, [searchTerm]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-auto w-full flex-row items-center justify-between gap-2 rounded-full bg-white shadow lg:w-1/2">
        <div className="hidden items-center justify-center p-4 md:flex">
          <MdOutlineSearch className="text-2xl text-gray-700" />
        </div>
        <div className="flex w-full flex-row">
          <input
            type="search"
            placeholder="Search Award Events here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-l-full border-none bg-transparent pl-6 font-LatoRegular text-black active:border-gray-900"
          />
          <Button className="rounded-l-none rounded-r-full font-LatoRegular capitalize">
            search
          </Button>
        </div>
        <div
          onClick={closeModal}
          className="group flex cursor-pointer items-center justify-center rounded-r-full bg-white p-4 transition ease-in-out"
        >
          <IoCloseOutline className="text-2xl text-gray-900 group-hover:bg-yellow-200 rounded-full transition ease-in-out" />
        </div>
      </div>
      {searchTerm == "" ? (
        ""
      ) : (
        <div className="w-full bg-transparent px-2 md:px-16 lg:w-1/2">
          {filteredData.map((item, i) => (
            <div key={i}>
              <SearchResultCard
                id={item.id}
                date={item.date}
                time={item.time}
                title={item.title}
                location={item.location}
                isActive={item.isActive}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDialog;
