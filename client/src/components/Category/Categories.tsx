import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Dialog,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import { IoIosArrowForward } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import DeleteDialog from "../Dialog/DeleteDialog";
import EditCategoryForm from "../Forms/EditCategoryForm";

interface IconArgs {
  open: boolean;
}
export interface ICategory {
  id: any;
  name: string;
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
      } h-5 w-5 transition-transform mr-2 text-gray-600`}
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
  // const BASE_URL = import.meta.env.VITE_BASE_URL;
  // accordion controls
  const [open, setOpen] = useState<Array<number>>([]);

  // Data from API
  const categoryListByGenre = [
    {
      genre: "hip-hop",
      categories: [
        {
          id: "dsjjta",
          name: "best song of the year",
        },
        {
          id: "mnerews",
          name: "upcoming artist of the year",
        },
        {
          id: "emrys",
          name: "best album of the year",
        },
      ],
    },
    {
      genre: "bongo flava",
      categories: [
        {
          id: "mnerews",
          name: "upcoming artist of the year",
        },
        {
          id: "dsjjta",
          name: "best song of the year",
        },
        {
          id: "morgana",
          name: "best video of the year",
        },
        {
          id: "emrys",
          name: "best album of the year",
        },
      ],
    },
    {
      genre: "singeli",
      categories: [],
    },
    {
      genre: "taarabu",
      categories: [],
    },
  ];
  
  const openHandler = (value: number) => {
    setOpen((prevOpen) =>
      prevOpen.includes(value)
        ? prevOpen.filter((item) => item !== value)
        : [...prevOpen, value]
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
  const [_editId, setEditId] = useState(null);
  const [editData, setEditData] = useState<ICategory | null>(null);
  const [openEditGenre, setOpenEditGenre] = useState(false);
  const handleOpenEditGenre = () => setOpenEditGenre((cur) => !cur);
  const openEditDialogHandler = (genreId: any, categoryId: any) => {
    setEditData(categoryListByGenre[genreId].categories[categoryId]);
    if (genreId && categoryId) {
      setEditId(categoryId);
    }
    setOpenEditGenre((cur) => !cur);
  };

  return (
    <>
      {categoryListByGenre.map((group, i) => (
        <Accordion
          title={group.genre}
          key={i}
          open={open.includes(i + 1)}
          icon={<Icon open={open.includes(i + 1)} />}
          className="bg-transparent hover:bg-yellow-50 transition ease-linear"
        >
          <AccordionHeader onClick={() => openHandler(i + 1)}>
            <Typography
              variant="h6"
              className="text-gray-800 font-LatoBold capitalize pl-2 border-2 border-transparent border-l-yellow-300 border-r-transparent"
            >
              in - {group.genre}{" "}
              <span className="text-xs text-gray-400 font-LatoBold pl-2">
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
                  className="group flex items-center justify-between gap-2 font-LatoBold text-xs text-gray-800 uppercase bg-amber-100 w-fit px-4 py-2 rounded-full"
                >
                  {item.name}
                  <IoIosArrowForward className="text-lg text-gray-500 group-hover:hidden transition ease-linear" />
                  <div className="hidden group-hover:flex flex-row items-center gap-2 transition ease-linear bg-amber-50 px-2 rounded-full">
                    <AiFillEdit onClick={() => openEditDialogHandler(i, indx)} className="text-lg text-green-500 cursor-pointer hover:border-2 hover:border-green-500 rounded-full" />
                    <TiDelete
                      onClick={() => deleteDialogHandler(item.id)}
                      className="text-xl text-red-500 cursor-pointer hover:border-2 hover:border-red-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            {group.categories.length == 0 && (
              <div className="text-center text-base w-full text-gray-900 font-LatoRegular capitalize">
                <span className="px-4 py-2 rounded-full bg-yellow-100">
                  no categories found.
                </span>
              </div>
            )}
          </AccordionBody>
        </Accordion>
      ))}

      {/* Dialogs */}
      <Dialog
        size="md"
        open={openDeleteDialog}
        handler={deleteDialogHandler}
        className="bg-transparent shadow-none text-black"
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
        className="bg-transparent shadow-none text-black"
      >
        <EditCategoryForm
          closeModal={handleOpenEditGenre}
          genre={editData && editData}
        />
      </Dialog>
    </>
  );
};

export default Categories;
