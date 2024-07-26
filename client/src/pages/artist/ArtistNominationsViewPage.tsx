import { Typography } from "@material-tailwind/react"
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1"
import ArtistLayout from "../../components/Layout/ArtistLayout"
import AdminArtistNominations from "../../components/Nomination/AdminArtistNominations"

const ArtistNominationsViewPage = () => {
  return (
    <ArtistLayout>
      <BreadcrumbLevel1 currentPage="nominations" user="artist" separator="arrow" />
      <div className='px-2 md:px-4 py-2 bg-transparent'>
         {/* Nominations */}
        <Typography variant="h4" className="text-lg text-gray-900 font-LatoBold capitalize">
          nominations
        </Typography>
        <Typography variant="h4" className="text-xs text-gray-900 font-LatoRegular normal-case">
          Only the Events you participated on are shown.
        </Typography>

        <div className="my-2">
          <AdminArtistNominations />
        </div>
      </div>
    </ArtistLayout>
  )
}

export default ArtistNominationsViewPage