import React, { useState, useEffect } from "react";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { GiMagicBroom } from "react-icons/gi";
import {
  MdOutlinePersonAdd,
  MdOutlineEdit,
  MdOutlineDeleteOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import AddArtistForm from "../Forms/AddArtistForm";
import axios from "../../api/axios.ts";
import EditArtist from "../Forms/EditArtist.tsx";
import useFetch from "../../hooks/useFetch.ts";
import AddEmptyState from "../EmptyState/AddEmptyState.tsx";
// import EditArtist from "../Forms/EditArtist.tsx";

interface DataRow {
  stage_name: string;
  fullname: string;
  genre: string;
  phone: string;
  email: string;
}

interface ArtistsData {
  data: []
}
interface FetchResult {
  data: ArtistsData | null;
  loading: boolean;
  error: Error | null;
}

const ArtistsDataTable: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [data, setData] = useState<DataRow[]>([]);
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Add Artist Form Handling
  const [open, setOpen] = React.useState(false);
  const [editOpen, serEditOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleEdit = () => serEditOpen((c) => !c);

  // Get data
  const {
    data: artistsData,
    loading: artistsDataLoading,
    error: artistsDataError,
  }: FetchResult = useFetch(`${BASE_URL}/artists`);

  console.log(artistsDataError);

  useEffect(() => {
    // Filter data based on the search term
    // const filtered = data.filter((row) => {
    //     return Object.values(row).some((value) =>
    //         value.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    // });
    console.log(data);
    console.log(artistsDataError);
    //setFilteredData(filtered);
  }, [searchTerm, data]);

  return (
    <>
      {artistsDataLoading ? (
        <p>Loading...</p>
      ) : artistsDataError  ? (
        <p>network error</p>
      ) : artistsData?.data.length === 0 ? (
        <AddEmptyState itemName="artist" />
        ) : (
          <AddEmptyState itemName="artist" />
        // <p>data here</p>
      )}
    </>
  );
};

export default ArtistsDataTable;
