import React, { ReactNode } from "react";
import ArtistSidebar from "../navbar/ArtistSidebar.tsx";
interface LayoutProps {
    children: ReactNode;
}
const ArtistLayout:React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-screen w-full bg-slate-50 flex flex-row">
            <ArtistSidebar />
            <section className="w-full bg-transparent">{children}</section>
        </div>
    );
};

export default ArtistLayout;
