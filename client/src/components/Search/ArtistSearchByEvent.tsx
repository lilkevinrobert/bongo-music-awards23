import { Button } from "@material-tailwind/react";

const ArtistSearchByEvent = () => {
  return (
    <>
      <input
        type="search"
        name="artist_nominations"
        className="w-full h-[2rem] pl-6 border-gray-300 rounded-full font-LatoRegular text-sm"
        placeholder="Search by Award event or Year"
      />
      <Button
        size="sm"
        className="rounded-full font-LatoBold capitalize text-white hover:text-gray-900 bg-gray-900 hover:bg-amber-300 transition ease-linear"
      >
        search
      </Button>
    </>
  );
};

export default ArtistSearchByEvent;
