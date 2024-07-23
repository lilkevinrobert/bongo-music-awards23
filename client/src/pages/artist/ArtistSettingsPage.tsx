import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";
import EditArtistProfileCredentials from "../../components/Forms/EditArtistProfileCredentials";
import ArtistLayout from "../../components/Layout/ArtistLayout";

const ArtistSettingsPage = () => {
  return (
    <ArtistLayout>
      <BreadcrumbLevel1 currentPage="settings" user="artist" />
      <div className="px-4 py-2 rounded-md bg-zinc-100">
        <EditArtistProfileCredentials />
      </div>
    </ArtistLayout>
  );
};

export default ArtistSettingsPage;
