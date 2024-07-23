import ArtistLayout from '../../components/Layout/ArtistLayout'
import BreadcrumbLevel1 from '../../components/Breadcrumbs/BreadcrumbLevel1'
import EditArtistProfile from '../../components/Forms/EditArtistProfile'
import EditArtistProfileCredentials from '../../components/Forms/EditArtistProfileCredentials'

const ArtistProfilePage = () => {
  return (
    <ArtistLayout>
        <div className='w-1/2 bg-rose-400'>
        <BreadcrumbLevel1 currentPage='profile' showProfileMenu='no' />
        </div>
        <div className='bg-transparent flex flex-col items-center justify-center'>
            <EditArtistProfile />
            <hr className='w-1/2 my-4' />
            <EditArtistProfileCredentials />
        </div>
    </ArtistLayout>
  )
}

export default ArtistProfilePage