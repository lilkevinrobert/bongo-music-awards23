import React, { useState, useEffect } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import { GiMagicBroom } from "react-icons/gi";
import { MdOutlinePersonAdd } from "react-icons/md";

interface DataRow {
  stageName: string;
  fullName: string;
  genre: string;
  phone: string;
  email: string;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const testData: DataRow[] = [
    {
      stageName: "marioo",
      fullName: "Omary Ally Mwanga",
      genre: "Bongo Flava",
      phone: "+255 762 223 093",
      email: "marioo@gmail.com",
    },
    {
      stageName: "ali kiba",
      fullName: "Ali Kiba",
      genre: "Bongo Flava",
      phone: "+255 762 523 393",
      email: "alikiba@gmail.com",
    },
    {
      stageName: "diamond_platnumz",
      fullName: "Naseeb Abdul Juma",
      genre: "Bongo Flava",
      phone: "+255 754 123 456",
      email: "diamond_platnumz@gmail.com",
    },
    {
      stageName: "rayvanny",
      fullName: "Raymond Shaban Mwakyusa",
      genre: "Bongo Flava",
      phone: "+255 762 987 654",
      email: "rayvanny@gmail.com",
    },
    {
      stageName: "lava lava",
      fullName: "Amani Mussa",
      genre: "Bongo Flava",
      phone: "+255 788 456 123",
      email: "lava_lava@gmail.com",
    },
    {
      stageName: "harmonize",
      fullName: "Rajab Abdul Kahali",
      genre: "Bongo Flava",
      phone: "+255 755 789 123",
      email: "harmonize@gmail.com",
    },
    {
      stageName: "vanessa_mdee",
      fullName: "Vanessa Hau Mdee",
      genre: "Bongo Flava",
      phone: "+255 712 345 678",
      email: "vanessa_mdee@gmail.com",
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
          <Typography>Add</Typography></Button>
      </div>

      <table className="table-auto w-full bg-white border shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">Stage Name</th>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">{row.stageName}</td>
              <td className="border px-4 py-2">{row.fullName}</td>
              <td className="border px-4 py-2">{row.genre}</td>
              <td className="border px-4 py-2">{row.phone}</td>
              <td className="border px-4 py-2">{row.email}</td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded mr-1 hover:bg-green-700">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
