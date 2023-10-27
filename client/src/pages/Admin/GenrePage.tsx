import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Layout from "../../components/Layout/Layout";
import { NavLink, useLocation } from "react-router-dom";

const AdminGenrePage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categories = searchParams.get('categories');

    if (categories) {
        const genreCategories = JSON.parse(decodeURIComponent(categories));
        
        console.log(genreCategories)
      }
    // const decodedArray = categories ? categories.split(',').map(item => decodeURIComponent(item)) : [];    
  return (
    <Layout>
      <div className="w-full text-black flex flex-row">
        <section className="w-full pt-8 px-8 min-h-screen bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 scroll-m-10">
          <div className="px-0">
            <div className="flex flex-row items-center justify-between">
              <Breadcrumbs separator=">" className="gap-2">
                <NavLink to="/admin/genres" className="opacity-60">
                  Genres
                </NavLink>
                <Typography className="opacity-60">Genre</Typography>
                <a href="#">Breadcrumbs</a>
              </Breadcrumbs>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AdminGenrePage;
