import MiniFooter from "../../components/Footer/MiniFooter"
import Layout from "../../components/Layout/Layout"
import AdminArtistNominations from "../../components/Nomination/AdminArtistNominations"

const ArtistNominationsPage = () => {
  return (
    <Layout>
        {/* Nominations */}
        <div className="w-full px-1">
              <AdminArtistNominations />
            </div>

            <div className="">
              <MiniFooter />
            </div>
    </Layout>
  )
}

export default ArtistNominationsPage