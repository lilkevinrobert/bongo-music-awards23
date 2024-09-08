import Layout from '../../components/Layout/Layout'
import BreadcrumbLevel2 from '../../components/Breadcrumbs/BreadcrumbLevel2'
import AddArtistFormAdmin from '../../components/Forms/AddUserFormAdmin'

const AddArtistPage = () => {
  return (
    <Layout>
        <BreadcrumbLevel2 previousPage='users' currentPage='Add User' />
        <div className="bg-white text-gray-500">
          <AddArtistFormAdmin />
        </div>
    </Layout>
  )
}

export default AddArtistPage