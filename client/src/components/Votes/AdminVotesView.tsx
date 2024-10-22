// import { Typography } from "@material-tailwind/react";
// import AwardsEventBarChart from "../Charts/AwardsEventBarChart";
// import AwardsEventPieChart from "../Charts/AwardsEventPieChart";

interface AwardVotesViewProps {
    awardId: string | undefined;
}
const AdminVotesView = ({  }: AwardVotesViewProps) => {
    // const BASE_URL = import.meta.env.VITE_BASE_URL;

    return (
        <>
            {/* <Typography className="text-base text-gray-800 font-LatoBold uppercase py-2 border-2 border-l-amber-300 border-t-transparent border-b-transparent border-r-transparent pl-2 my-2">
                trend
            </Typography>
            <div className="bg-stone-50 h-fit lg:h-96 rounded grid grid-cols-1 lg:grid-cols-2">
                <AwardsEventBarChart />
                <div className="h-96 w-full">
                    <AwardsEventPieChart />
                </div>
            </div> */}
            <p className="text-base text-gray-700 font-LatoRegular text-center py-3 bg-gray-100">Voting NOT Started.</p>
        </>
    )
}

export default AdminVotesView
