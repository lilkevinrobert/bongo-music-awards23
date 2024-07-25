import { Button, Typography } from "@material-tailwind/react";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";
import EditArtistProfileCredentials from "../../components/Forms/EditArtistProfileCredentials";
import ArtistLayout from "../../components/Layout/ArtistLayout";
import ArtistSocialAccounts from "../../components/Sections/ArtistSocialAccounts";
import MiniFooter from "../../components/Footer/MiniFooter";

const ArtistSettingsPage = () => {
  return (
    <ArtistLayout>
      <BreadcrumbLevel1
        currentPage="settings"
        user="artist"
        separator="arrow"
      />
      <div className="mb-4 rounded-md bg-gray-100 px-4 py-2">
        <ArtistSocialAccounts />
      </div>
      <div className="my-4 rounded-md bg-gray-100 px-4 py-2">
        <EditArtistProfileCredentials />
      </div>

      {/* delete account */}
      <form className="my-4 rounded-md bg-gray-100 px-4 py-2">
        <Typography className="mb-4 font-LatoBold text-lg capitalize text-gray-900">
          Delete your account
        </Typography>
        <Typography className="font-LatoRegular text-gray-700">
          When you delete your account, you lose access to account services.
          This action is <span className="uppercase"> not reversible</span>.
        </Typography>
        <div className="space-x-2 py-2">
          <input type="checkbox" name="confirm_delete" required />
          <label className="font-LatoRegular text-sm text-gray-700">
            Confirm that I want to delete my account
          </label>
        </div>
        <div className="flex items-center justify-end">
          <Button
            type="submit"
            size="sm"
            className="my-2 rounded-full bg-red-600 font-LatoBold capitalize text-white transition ease-linear hover:scale-110 hover:bg-amber-300 hover:text-gray-900"
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
