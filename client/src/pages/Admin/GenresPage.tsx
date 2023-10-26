import { Typography } from "@material-tailwind/react"
import Layout from "../../components/Layout/Layout"

const AdminGenresPage = () => {
  return (
    <Layout>
    <div className="w-full text-black flex flex-row">
      <section className="w-full pt-8 px-8 min-h-screen bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 scroll-m-10">
        <Typography variant="h5">Genres</Typography>
      </section>
    </div>
  </Layout>
  )
}

export default AdminGenresPage