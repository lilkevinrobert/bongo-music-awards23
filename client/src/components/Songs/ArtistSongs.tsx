import { Button, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { TiArrowForward } from "react-icons/ti";
import { NavLink } from "react-router-dom";

interface ISong {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumArtist: string;
  genre: string;
  year: number;
  track: string;
  composer: string;
}

const ArtistSongs = () => {
    // search feature
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState<ISong[]>([]);

  // list of artist's songs
  //   const songs:any = [];
  const TABLE_HEAD = ["SN", "Title", "Artist(s)", "Year", "Action"];
  const songs = [
    {
      id: "dsjlsj",
      title: "Nitaubeba",
      artist: "Harmonize",
      album: "",
      albumArtist: "Harmonize",
      genre: "R&B",
      year: 2023,
      track: "",
      composer: "",
    },
    {
      id: "dsjlsj",
      title: "Dharau",
      artist: "Ibraah ft. Harmonize",
      album: "",
      albumArtist: "",
      genre: "R&B",
      year: 2024,
      track: "",
      composer: "",
    },
    {
      id: "dsjlsj",
      title: "Wote",
      artist: "Harmonize",
      album: "",
      albumArtist: "Harmonize",
      genre: "R&B",
      year: 2024,
      track: "",
      composer: "",
    },
  ];

  useEffect(() => {
    // Filter data based on the search term
    const filtered =
      songs.filter((row) => {
        return Object.values(row).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }) ?? [];
    setFilteredData(filtered);
  }, [searchTerm]);
  return (
    <div className="py-4 bg-transparent">
      {songs.length === 0 && (
        <div className="text-gray-900 text-base font-LatoRegular text-center mb-2">
          <Typography variant="small">
            You have not added any songs yet.
          </Typography>
          <Typography
            variant="small"
            className="flex items-center justify-center"
          >
            Start by adding one
            <TiArrowForward className="text-2xl -rotate-45" />{" "}
          </Typography>
        </div>
      )}
      {songs && songs.length > 0 && (
        <Card className="h-full w-auto">
            <div className="flex flex-row items-center justify-between w-fit mb-2">
        <input
          type="text"
          placeholder="Search by title or artist"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-4 border border-gray-500 rounded-full w-4/4 h-8 font-LatoRegular text-gray-900"
        />
        <Button
          size="sm"
          className="ml-2 rounded-full font-LatoRegular capitalize bg-blue-500 hover:bg-blue-700 transition-all ease-in-out flex items-center justify-center gap-2"
          onClick={() => setSearchTerm("")}
        >
          Clear
        </Button>
      </div>
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, i) => (
                <th
                  key={i}
                  className={`${(i === 0 || i === 2) && "hidden lg:table-cell"} border-b border-gray-300 px-4 py-3 bg-amber-300`}
                >
                  <Typography
                    variant="small"
                    className={`font-LatoBold leading-none opacity-90 text-gray-900`}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item: ISong, i) => {
              const isLast = i === filteredData.length - 1;
              const classes = isLast
                ? "p-2"
                : "p-2 border-b border-gray-300 text-gray-900";
              return (
                <tr key={i} className="even:bg-gray-100 text-gray-900 hover:bg-amber-50 transition ease-linear group">
                  <td className={`${classes} hidden lg:table-cell w-10 text-center bg-gray-200`}>
                    <Typography variant="small" className="font-LatoRegular">
                      {i + 1}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-LatoBold capitalize">
                      {item.title}
                    </Typography>
                  </td>
                  <td className={`${classes} hidden lg:table-cell`}>
                    <Typography variant="small" className="font-LatoRegular">
                      {item.artist}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-LatoRegular">
                      {item.year}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <NavLink to="#" className="font-LatoRegular capitalize text-amber-800 group-hover:text-gray-900 group-hover:bg-amber-300 px-4 py-2 rounded-full transition-all ease-linear">edit</NavLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </Card>
      )}
    </div>
  );
};

export default ArtistSongs;
