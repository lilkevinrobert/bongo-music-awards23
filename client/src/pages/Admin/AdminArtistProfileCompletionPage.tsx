import BreadcrumbLevel1 from '../../components/Breadcrumbs/BreadcrumbLevel1'
import AddArtistProfileForm from '../../components/Forms/AddArtistProfileForm'
import Layout from '../../components/Layout/Layout'

const AdminArtistProfileCompletionPage = () => {
  return (
    <Layout>
        <BreadcrumbLevel1 currentPage='Complete Artist Profile' user={'admin'} />
        <div className="bg-white text-gray-500">
            <AddArtistProfileForm />
        </div>
    </Layout>  )
}

export default AdminArtistProfileCompletionPage