import DateToday from "../../components/Date/DateToday.tsx";
import ArtistLayout from "../../components/Layout/ArtistLayout.tsx";

const ArtistDashboard = () => {
    return (
        <ArtistLayout>
            <div className="w-full min-h-screen text-black bg-transparent">
                <div className="w-full">
                    <DateToday />
                </div>
                
            </div>
        </ArtistLayout>
    );
};

export default ArtistDashboard;