import React from "react";
import { ArtistData } from "../../pages/Admin/ArtistPage";

interface ArtistHeaderComponentProps {
  artistData: ArtistData;
}

const ArtistBody: React.FC<ArtistHeaderComponentProps> = ({ artistData }) => {
  console.log(artistData);
  return (
    <div className="border w-full h-auto flex flex-row items-center justify-center gap-2 shadow-lg py-4">
      <p>No data yet</p>
    </div>
  );
};

export default ArtistBody;
