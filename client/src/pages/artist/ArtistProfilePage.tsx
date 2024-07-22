import ArtistLayout from '../../components/Layout/ArtistLayout'
import BreadcrumbLevel1 from '../../components/Breadcrumbs/BreadcrumbLevel1'

const ArtistProfilePage = () => {
  return (
    <ArtistLayout>
        <BreadcrumbLevel1 currentPage='profile' showProfileMenu='no' />
    </ArtistLayout>
  )
}

export default ArtistProfilePage