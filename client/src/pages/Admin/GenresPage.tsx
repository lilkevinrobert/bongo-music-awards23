import { Button, Typography } from "@material-tailwind/react";
import Layout from "../../components/Layout/Layout";
import { MdOutlineAdd } from "react-icons/md";

const AdminGenresPage = () => {
  return (
    <Layout>
      <div className="w-full text-black flex flex-row">
        <section className="w-full pt-8 px-8 min-h-screen bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 scroll-m-10">
          <div className="px-0">
            <div className="flex flex-row items-center justify-between">
              <Typography variant="h5" className="">
                Genres
              </Typography>
              <Button className="flex items-center gap-2 bg-yellow-400">
                <MdOutlineAdd className="w-4 h-4 text-slate-50" />
                <Typography className="text-sm font-LatoRegular">Add Genre</Typography>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AdminGenresPage;
