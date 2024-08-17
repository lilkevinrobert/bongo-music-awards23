import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Dialog,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import DeleteDialog from "../Dialog/DeleteDialog";
import EditCategoryForm from "../Forms/EditCategoryForm";
import useFetch from "../../hooks/useFetch";
import LoadingList from "../Loading/LoadingList";
import Errors from "../Errors/Errors";
import AddEmptyState from "../EmptyState/AddEmptyState";
import { GoDotFill } from "react-icons/go";

interface IconArgs {
  open: boolean;
}

interface ICategoryItem {
  id: any;
  genre_id: any;
  name: string;
}
export interface ICategory {
  id: any;
  name: string;
  categories: ICategoryItem[];
}

interface Data {
  data: [];
}

interface FetchResult {
  data: Data | null;
  loading: boolean;
  error: Error | null;
  fetchData: () => void;
}

const Icon = ({ open }: IconArgs) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        open ? "rotate-180" : ""
      } mr-2 h-5 w-5 text-gray-600 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const Categories = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // Data from API
  const {
    data: categoryData,
    loading,
    error,
    fetchData,
  }: FetchResult = useFetch(`${BASE_URL}/genres/category/all`);

  // accordion controls
  const [open, setOpen] = useState<Array<number>>([]);

  const openHandler = (value: number) => {
    setOpen((prevOpen) =>
      prevOpen.includes(value)
        ? prevOpen.filter((item) => item !== value)
        : [...prevOpen, value],
    );
  };
  // end accordion controls

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
  // console.log(categoryData?.data[0]?.categories[1]);
  const [_editId, setEditId] = useState(null);
  const [editCategoryGenre, setEditCategoryGenre] = useState<string>("");
  const [editData, setEditData] = useState<ICategory | null>(null);
  const [openEditGenre, setOpenEditGenre] = useState(false);
  const handleOpenEditGenre = () => setOpenEditGenre((cur) => !cur);
  const openEditDialogHandler = (genreName: string, category: any) => {
    setEditData(category);
    if (genreName && category) {
      setEditId(category.id);
      setEditCategoryGenre(genreName);
    }
    setOpenEditGenre((cur) => !cur);
  };

  return (
    <>
      {loading ? (
        <LoadingList />
      ) : error ? (
        <Errors errorName={error.name} message={error.message} />
      ) : categoryData?.data.length === 0 ? (
        <AddEmptyState itemName="category" />
      ) : (
        <div>
          {categoryData?.data.map((group: ICategory, i) => (
            <Accordion
              title={group.name}
              key={i}
              open={open.includes(i + 1)}
              icon={<Icon open={open.includes(i + 1)} />}
              className="bg-transparent transition ease-linear hover:bg-yellow-50"
            >
              <AccordionHeader onClick={() => openHandler(i + 1)}>
                <Typography
                  variant="h6"
                  className="border-2 border-transparent border-l-yellow-300 border-r-transparent pl-2 font-LatoBold capitalize text-gray-800"
                >
                  in - {group.name}{" "}
                  <span className="pl-2 font-LatoBold text-xs text-gray-400">
                    genre
                  </span>
                </Typography>
              </AccordionHeader>

              {/* categories */}
              <AccordionBody className="flex flex-row flex-wrap items-center gap-2 bg-white">
                {group.categories &&
                  group.categories.map((item, indx) => (
                    <div
                      key={indx}
                      className="group relative flex w-fit items-center justify-between gap-2 rounded-full bg-amber-100 px-4 py-2 font-LatoBold text-xs uppercase text-gray-800 transition ease-linear hover:bg-gray-800 hover:text-gray-50"
                    >
                      <GoDotFill className="text-lg text-gray-700 transition ease-linear group-hover:text-gray-50" />

                      {item.name}
                      <div className="invisible flex flex-row items-center gap-2 rounded-full bg-amber-50 px-2 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                        <AiFillEdit
                          onClick={() =>
                            openEditDialogHandler(group.name, item)
                          }
                          className="cursor-pointer rounded-full text-xl text-green-500 hover:border-2 hover:border-green-500"
                        />
                        <TiDelete
                          onClick={() => deleteDialogHandler(item.id)}
                          className="cursor-pointer rounded-full text-2xl text-red-500 hover:border-2 hover:border-red-500"
                        />
                      </div>
                    </div>
                  ))}
                {group.categories.length == 0 && (
                  <div className="w-full text-center font-LatoRegular text-base capitalize text-gray-900">
                    <span className="rounded-full bg-yellow-100 px-4 py-2">
                      no categories found.
                    </span>
                  </div>
                )}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      )}

      {/* Dialogs */}
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
              deleteItem="Genre"
            />
          </DialogBody>
        )}
      </Dialog>
      <Dialog
        size="md"
        open={openEditGenre}
        handler={handleOpenEditGenre}
        className="bg-transparent text-black shadow-none"
      >
        <EditCategoryForm
          closeModal={handleOpenEditGenre}
          genre={editData && editData}
          categoryGenre={editCategoryGenre && editCategoryGenre}
        />
      </Dialog>
    </>
  );
};

export default Categories;
