import { MdOutlineSearch } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import SearchResultCard from "../Cards/SearchResultCard";
import useFetch from "../../hooks/useFetch";
import AddEmptyState from "../EmptyState/AddEmptyState";
import Errors from "../Errors/Errors";
import LoadingItems from "../Loading/LoadingItems";

interface FormProps {
  closeModal: () => void;
}

interface AwardsData {
  data: [];
}
interface FetchResult {
  data: AwardsData | null;
  loading: boolean;
  error: Error | null;
}

export interface IResults {
  id: string;
  title: string;
  location: string;
  status: string;
}

const SearchDialog = ({ closeModal }: FormProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // GET data
  const {
    data: awardsDataList,
    loading: awardsDataLoading,
    error: awardsDataError,
  }: FetchResult = useFetch(`${BASE_URL}/awards`);

  // search feature
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<IResults[]>([]);


  useEffect(() => {
    // Filter data based on the search term
    const filtered =
      awardsDataList?.data.filter((row:IResults) => {
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

      {
        awardsDataLoading ? (
          <LoadingItems orientation="portrait" />
        ) : awardsDataError ? (
          <Errors errorName={awardsDataError?.name} message={awardsDataError?.message} />
        ) : awardsDataList?.data.length === 0 ? (
          <AddEmptyState itemName="award" />
        ) : searchTerm == " " ? (""): (
          <div className="w-full bg-transparent px-2 md:px-16 lg:w-1/2">
          {filteredData.map((item: IResults, i) => (
            <div key={i}>
              <SearchResultCard
                id={item.id}
                title={item.title}
                location={item.location}
                status={item.status}
              />
            </div>
          ))}
        </div>
        )
      }
    </div>
  );
};

export default SearchDialog;
