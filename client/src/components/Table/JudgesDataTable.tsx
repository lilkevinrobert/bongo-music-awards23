import React, { useState, useEffect } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import { GiMagicBroom } from "react-icons/gi";
import {
  MdOutlinePersonAdd,
  MdOutlineEdit,
  MdOutlineDeleteOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

interface DataRow {
  fullName: string;
  event: string;
  organization: string;
  position: string;
  expertise: string;
  role: string;
  phone: string;
  email: string;
}

const JudgesDataTable: React.FC = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const testData: DataRow[] = [
    {
      fullName: "Omary Ally Mwanga",
      event: "marioo",
      organization: "Bongo Music Awards",
      position: "Consultant",
      expertise: "some expertise",
      role: "Consultant",
      phone: "+255 762 223 093",
      email: "marioo@gmail.com",
    },
    {
        fullName: "Omary Ally Mwanga",
        event: "marioo",
        organization: "Bongo Music Awards",
        position: "Consultant",
        expertise: "some expertise",
        role: "Consultant",
        phone: "+255 762 223 093",
        email: "marioo@gmail.com",
    },
    {
        fullName: "Omary Ally Mwanga",
        event: "marioo",
        organization: "Bongo Music Awards",
        position: "Consultant",
        expertise: "some expertise",
        role: "Consultant",
        phone: "+255 762 223 093",
        email: "marioo@gmail.com",
    },
  ];

  useEffect(() => {
    // Assuming fetchData is an async function fetching data from the API - USE THIS APPROACH!!
    // const fetchData = async () => {
    //   try {
    //     // Replace with actual API endpoint
    //     const response = await fetch('https://api.example.com/data');
    //     const result = await response.json();
    //     setData(result);
    //     setFilteredData(result);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
    const fetchData = () => {
      setData(testData);
    };

    fetchData();
  }, []); // Fetch data on component mount

  useEffect(() => {
    // Filter data based on the search term
    const filtered = data.filter((row) => {
      return Object.values(row).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [searchTerm, data]);

  return (
    <div className="mx-auto py-4">
      <div className="flex flex-row items-center justify-between mb-4 w-full">
        <div className="flex flex-row items-center justify-center w-1/4">
          <Input
            type="text"
            placeholder="Search artists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded w-4/4"
            crossOrigin={undefined}
          />
          <Button
            className="ml-2 bg-blue-500 hover:bg-blue-700 transition-all ease-in-out flex items-center justify-center gap-2"
            onClick={() => setSearchTerm("")}
          >
            <GiMagicBroom className="w-5 h-5" />
            Clear
          </Button>
        </div>
        <Button className="flex items-center justify-center gap-2 bg-yellow-300 hover:bg-yellow-400 transition ease-in-out text-slate-950">
          <MdOutlinePersonAdd className="w-5 h-5" />
          <Typography>Add</Typography>
        </Button>
      </div>

      <table className="table-auto w-full bg-white border shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Event</th>
            <th className="px-4 py-2">Organization</th>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Expertise</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2 capitalize">{row.fullName}</td>
              <td className="border px-4 py-2 capitalize">{row.event}</td>
              <td className="border px-4 py-2 capitalize">{row.organization}</td>
              <td className="border px-4 py-2 capitalize">{row.position}</td>
              <td className="border px-4 py-2 capitalize">{row.expertise}</td>
              <td className="border px-4 py-2 capitalize">{row.role}</td>
              <td className="border px-4 py-2 capitalize">{row.phone}</td>
              <td className="border px-4 py-2 lowercase">{row.email}</td>
              <td className="border px-4 py-2">
                <button className="bg-transparent px-2 py-1 rounded mr-1 hover:bg-blue-700 group">
                  <MdOutlineRemoveRedEye className="w-5 h-5 text-blue-500 group-hover:text-white transition ease-in-out" />
                </button>
                <button className="bg-transparent px-2 py-1 rounded mr-1 hover:bg-green-700 group">
                  <MdOutlineEdit className="w-5 h-5 text-green-500 group-hover:text-white transition ease-in-out" />
                </button>
                <button className="bg-transparent px-2 py-1 rounded hover:bg-red-700 group">
                  <MdOutlineDeleteOutline className="w-5 h-5 text-red-500 group-hover:text-white transition ease-in-out" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JudgesDataTable;
