import SummaryCard from "../../components/Cards/SummaryCard";
import {Typography} from "@material-tailwind/react";
import {MdNotifications} from "react-icons/md";
import ArtistLayout from "../../components/Layout/ArtistLayout.tsx";

const ArtistDashboard = () => {
    return (
        <ArtistLayout>
            <div className="w-full text-black flex flex-row">
                <section className="w-8/12 pt-8 px-8 min-h-screen bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 scroll-m-10">
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <Typography variant="h3">Artist Dashboard</Typography>
                            <Typography>Oct 16, Monday</Typography>
                        </div>
                        <MdNotifications className="w-6 h-6 self-baseline text-slate-500" />
                    </div>
                    <div className="flex flex-row gap-2 py-6">
                        <SummaryCard count={4} event="Categories" />
                        <SummaryCard count={4} event="Categories" />
                        <SummaryCard count={4} event="Categories" />
                    </div>
                </section>
                {/*<section className="w-4/12 min-h-screen p-8 bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">*/}
                {/*    <input*/}
                {/*        type="search"*/}
                {/*        name="search"*/}
                {/*        className="w-full border border-slate-100 rounded-lg shadow-sm pl-10 font-LatoRegular capitalize"*/}
                {/*        placeholder="search here ..."*/}
                {/*    />*/}
                {/*    /!*<div className="py-4">*!/*/}
                {/*    /!*    <UpcomingEvent />*!/*/}
                {/*    /!*    <div>*!/*/}
                {/*    /!*        Profile Summary*!/*/}
                {/*    /!*    </div>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</section>*/}
            </div>
        </ArtistLayout>
    );
};

export default ArtistDashboard;