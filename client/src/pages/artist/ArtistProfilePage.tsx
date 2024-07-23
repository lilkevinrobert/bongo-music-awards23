import ArtistLayout from '../../components/Layout/ArtistLayout'
import EditArtistProfile from '../../components/Forms/EditArtistProfile'
import BreadcrumbLevel1 from '../../components/Breadcrumbs/BreadcrumbLevel1'

const ArtistProfilePage = () => {
  return (
    <ArtistLayout>
      <BreadcrumbLevel1 currentPage='profile' />
        <div className='px-4 py-2 bg-transparent'>
            <EditArtistProfile />
        </div>
    </ArtistLayout>
  )
}

export default ArtistProfilePage