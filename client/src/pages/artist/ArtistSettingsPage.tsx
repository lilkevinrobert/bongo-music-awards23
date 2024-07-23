import EditArtistProfileCredentials from "../../components/Forms/EditArtistProfileCredentials";
import ArtistLayout from "../../components/Layout/ArtistLayout";

const ArtistSettingsPage = () => {
  return (
    <ArtistLayout>
      <div className="w-full flex flex-row items-center justify-center py-20">
        <EditArtistProfileCredentials />
      </div>
    </ArtistLayout>
  );
};

export default ArtistSettingsPage;
