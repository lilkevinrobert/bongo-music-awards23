import { LuMenu } from "react-icons/lu";
import { RiCloseLine } from "react-icons/ri";
import ArtistSidebar from "./ArtistSidebar";
import { useState } from "react";

const ArtistMobileSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="relative transition-all ease-linear">
      <LuMenu
        className="text-xl text-gray-900"
        onClick={() => setShowSidebar(!showSidebar)}
      />
      <div
        className={`${
          showSidebar ? "block" : "hidden"
        } absolute -left-1 -top-4 z-[1038] flex gap-2`}
      >
        <ArtistSidebar />
        <RiCloseLine onClick={()=>setShowSidebar(!showSidebar)} className="text-4xl text-gray-900 bg-white rounded-md mt-2" />
      </div>
      <div
        className={`${
          showSidebar ? "block" : "hidden"
        } absolute -left-1 -top-4 bg-zinc-900 opacity-50 w-screen h-screen z-[1036]`}
      ></div>
    </div>
  );
};

export default ArtistMobileSidebar;
