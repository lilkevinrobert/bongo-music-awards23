import { useLocation } from 'react-router-dom'
import BreadcrumbLevel1 from '../../components/Breadcrumbs/BreadcrumbLevel1'
import AddArtistProfileForm from '../../components/Forms/AddArtistProfileForm'
import Layout from '../../components/Layout/Layout'
import AddJudgeProfileForm from '../../components/Forms/AddJudgeProfileForm'

const AdminUserProfileCompletionPage = () => {
    const location = useLocation()
    const urlParams = new URLSearchParams(location.search);
    const userType = urlParams.get("user-type");
    return (
        <Layout>

            <BreadcrumbLevel1 currentPage={userType === "artist" ? 'Complete Artist Profile' : 'Complete Judge Profile'} user={'admin'} />
            <div className="bg-white text-gray-500">
                {
                    // user can be artist or judge
                    userType === "artist" ? (<AddArtistProfileForm />) : (<AddJudgeProfileForm />)
                }
            </div>
        </Layout>)
}

export default AdminUserProfileCompletionPage