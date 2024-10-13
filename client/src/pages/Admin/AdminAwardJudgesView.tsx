import { useEffect, useState } from "react";
import AddEmptyState from "../../components/EmptyState/AddEmptyState";
import Errors from "../../components/Errors/Errors";
import LoadingTable from "../../components/Loading/LoadingTable";
import useFetch from "../../hooks/useFetch";
import { MdOutlineDeleteOutline, MdOutlinePersonAdd, MdOutlineRemoveRedEye } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { GiMagicBroom } from "react-icons/gi";

interface AwardEventDetailsProps {
    awardId: string | undefined;
}

type DataRow = {
    id: number;
    organization: string;
    position: string;
    expertise: string;
}

interface JudgesData {
    data: {
        judges: []
    };
}
interface FetchResult {
    data: JudgesData | null;
    loading: boolean;
    error: Error | null;
}

const AdminAwardJudgesView = ({ awardId }: AwardEventDetailsProps) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    // const HOME_URL = import.meta.env.VITE_HOME_URL;
    const [filteredData, setFilteredData] = useState<DataRow[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    // dialogs logic
    const [openAddAwardJudge, setOpenAddAwardJudge] = useState(false)
    const handleOpenAddAwardJudge = () => setOpenAddAwardJudge((cur) => !cur);

    // GET data - award judges
    const {
        data: judgesData,
        loading: judgesDataLoading,
        error: judgesDataError,
    }: FetchResult = useFetch(`${BASE_URL}/awards/${awardId}/judges`);

    useEffect(() => {
        // Filter data based on the search term
        const filtered =
            judgesData?.data.judges.filter((row) => {
                return Object.values(row).some(
                    (value) =>
                        typeof value === "string" &&
                        value.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }) ?? [];
        setFilteredData(filtered);
    }, [searchTerm, judgesData]);
    return (
        <div>
            {
                judgesDataLoading ? (
                    <LoadingTable />
                ) : judgesDataError ? (
                    <Errors errorName={judgesDataError?.name} message={judgesDataError?.message} />
                ) : judgesData?.data.judges.length === 0 ? (
                    <AddEmptyState itemName="judge" />
                ) : (
                    <div className="mx-auto py-4">
                        {/* controls section */}
                        <div className="flex flex-row items-center justify-between mb-4 w-full">
                            <div className="flex flex-row items-center justify-between w-auto">
                                <input
                                    type="text"
                                    placeholder="Search artist..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="p-4 border border-gray-500 rounded-full w-4/4 h-8 font-LatoRegular"
                                />
                                <Button
                                    size="sm"
                                    className="ml-2 rounded-full bg-blue-500 hover:bg-blue-700 transition-all ease-in-out flex items-center justify-center gap-2"
                                    onClick={() => setSearchTerm("")}
                                >
                                    <GiMagicBroom className="text-lg font-LatoRegular" />
                                    Clear
                                </Button>
                            </div>
                            <Button
                                size="sm"
                                onClick={handleOpenAddAwardJudge}
                                className="capitalize rounded-full flex flex-row items-center gap-3 font-LatoRegular bg-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition ease-in-out"
                            >
                                <MdOutlinePersonAdd className="text-lg" />
                                <Typography className=" font-LatoRegular">Add</Typography>
                            </Button>

                            {/* Dialogs */}
                            <Dialog
                                size="xs"
                                open={openAddAwardJudge}
                                handler={handleOpenAddAwardJudge}
                                className="bg-transparent shadow-none"
                            >
                                <div className="h-full border-red-400 flex items-center justify-center">
                                    <p className="text-gray-900 text-center font-LatoBold text-lg capitalize bg-amber-300 px-4 py-4">add award judge, coming soon!</p>
                                </div>
                            </Dialog>



                            {/* <Dialog
                                size="xs"
                                open={confirmDeleteOpen}
                                handler={handleConfirmDelete}
                                className="bg-transparent shadow-none flex flex-row items-center justify-center"
                            >
                                <div className="h-full border-red-400 flex items-center">
                                    <div className="bg-white p-8 rounded-md shadow-md">
                                        <Typography className="text-slate-900 font-LatoBold text-center">
                                            Are you sure you want to Delete?
                                        </Typography>
                                        <div className="flex flex-col items-center justify-center py-4">
                                            <IoIosWarning className="text-4xl text-yellow-400" />
                                            <div className="flex flex-col items-center justify-center">
                                                <Typography className="text-slate-900 font-LatoRegular">
                                                    This action is irreversible
                                                </Typography>
                                                <Typography className="text-slate-900 font-LatoRegular">
                                                    You are about to delete an acount for
                                                </Typography>
                                                <span className="text-slate-900 uppercase font-LatoBold">
                                                    {deleteItem && deleteItem?.stage_name}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center mt-4 bg-transparent">
                                            <Button
                                                size="sm"
                                                type="button"
                                                onClick={() => handleConfirmDelete(undefined)}
                                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-LatoBold py-2 px-4 rounded mr-2 transition ease-in-out"
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                size="sm"
                                                type="button"
                                                // onClick={handleDelete}
                                                className="bg-red-500 hover:bg-red-600 text-white font-LatoBold py-2 px-4 rounded"
                                            >
                                                Confirm Delete
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Dialog> */}
                        </div>
                        <table className="table-auto w-full bg-white border shadow">
                            <thead>
                                <tr className="bg-gray-200 text-left font-LatoBold">
                                    <th className="px-4 py-1">Organization</th>
                                    <th className="px-4 py-1">Position</th>
                                    <th className="px-4 py-1">Expertise</th>
                                    <th className="px-4 py-1 text-center w-40"></th>
                                </tr>
                            </thead>
                            <tbody className="font-LatoRegular text-sm">
                                {
                                    filteredData.map((row, index) => (
                                        <tr
                                            key={index}
                                            className={`${index % 2 === 0 ? "bg-gray-100" : ""
                                                } group/actions`}
                                        >
                                            {/* <td className="border px-4 py-1 capitalize font-normal">
                                                {`${row.first_name} ${row.middle_name != null ? row.middle_name : ""
                                                    } ${row.last_name}`}
                                            </td> */}
                                            <td className="border px-4 py-1 capitalize">{row.organization}</td>
                                            <td className="border px-4 py-1 capitalize">{row.position}</td>
                                            <td className="border px-4 py-1 capitalize">{row.expertise}</td>
                                            <td className="border px-4 py-1 opacity-80 flex flex-row items-center justify-center transition-all ease-linear duration-300 group-hover/actions:flex">
                                                <NavLink to={`../judges/${row.id}`}>
                                                    <button className="bg-transparent px-2 py-1 rounded mr-1 hover:bg-blue-700 transition ease-linear duration-300 group">
                                                        <MdOutlineRemoveRedEye className="w-5 h-5 text-blue-500 group-hover:text-white transition ease-in-out" />
                                                    </button>
                                                </NavLink>
                                                <button
                                                    //   onClick={() => handleConfirmDelete(row)}
                                                    className="bg-transparent px-2 py-1 rounded hover:bg-red-700 transition ease-linear duration-300 group"
                                                >
                                                    <MdOutlineDeleteOutline className="w-5 h-5 text-red-500 group-hover:text-white transition ease-in-out" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    )
}

export default AdminAwardJudgesView
