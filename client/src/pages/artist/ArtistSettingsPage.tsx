import { Button, Typography } from "@material-tailwind/react";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";
import EditArtistProfileCredentials from "../../components/Forms/EditArtistProfileCredentials";
import ArtistLayout from "../../components/Layout/ArtistLayout";
import ArtistSocialAccounts from "../../components/Sections/ArtistSocialAccounts";
import MiniFooter from "../../components/Footer/MiniFooter";

const ArtistSettingsPage = () => {
  return (
    <ArtistLayout>
      <BreadcrumbLevel1 currentPage="settings" user="artist" />
      <div className="px-4 py-2 mb-4 rounded-md bg-gray-100">
        <ArtistSocialAccounts />
      </div>
      <div className="px-4 py-2 my-4 rounded-md bg-gray-100">
        <EditArtistProfileCredentials />
      </div>

      {/* delete account */}
      <form className="px-4 py-2 my-4 rounded-md bg-gray-100">
        <Typography className="text-lg text-gray-900 font-LatoBold mb-4 capitalize">
          Delete your account
        </Typography>
        <Typography className="text-gray-700 font-LatoRegular">
          When you delete your account, you lose access to account services.
          This action is <span className="uppercase"> not reversible</span>.
        </Typography>
        <div className="space-x-2 py-2">
          <input type="checkbox" name="confirm_delete" required />
          <label className="text-gray-700 text-sm font-LatoRegular">
            Confirm that I want to delete my account
          </label>
        </div>
        <div className="flex items-center justify-end">
          <Button
            type="submit"
            size="sm"
            className="my-2 rounded-full capitalize font-LatoBold bg-red-600 hover:bg-amber-300 transition ease-linear text-white hover:text-gray-900 hover:scale-110"
          >
            delete account
          </Button>
        </div>
      </form>
      <MiniFooter />
    </ArtistLayout>
  );
};

export default ArtistSettingsPage;
