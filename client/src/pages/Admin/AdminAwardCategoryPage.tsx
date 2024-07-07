import { Card, Typography } from "@material-tailwind/react";
import BreadcrumbLevel3 from "../../components/Breadcrumbs/BreadcrumbLevel3";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import { RxDotsVertical } from "react-icons/rx";
import AwardsEventCategoryPieChart from "../../components/Charts/AwardsEventCategoryPieChart";

const AdminAwardCategoryPage = () => {
  // Data from API - nominees by Category
  const nominees = {
    awards: "Bongo Music Awards 2024",
    nominees: [
        {
          id: "123",
          song: "some song",
          artist: "stage name",
          votes: 900,
        },
        {
          id: "1234",
          song: "some other song",
          artist: "stage name",
          votes: 324,
        },
        {
          id: "12345",
          song: "some other competing song",
          artist: "stage name",
          votes: 843,
        },
        {
          id: "12345",
          song: "some other competing song",
          artist: "stage name",
          votes: 1200,
        },
        {
          id: "12345",
          song: "some other competing song",
          artist: "stage name",
          votes: 690,
        },
        {
          id: "12345",
          song: "some competing song",
          artist: "stage name",
          votes: 480,
        },
      ]
  }
  return (
    <Layout>
      <BreadcrumbLevel3
        initialPage="awards"
        previousPage="award"
        currentPage="category"
      />
      <div className="text-gray-900 px-4">
        <Typography
          variant="h5"
          className="text-lg text-gray-900 font-LatoBold capitalize"
        >
          song of the year - <span className="text-base text-gray-700 font-LatoRegular">{nominees.awards}</span>
        </Typography>
        <div className="py-4">
          <div>
            <Typography
              variant="h6"
              className="text-base text-gray-900 font-LatoBold capitalize"
            >
              nominees
            </Typography>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {nominees.nominees.map((nominee, ind) => (
                <Card
                  key={ind}
                  className="h-fit w-full flex flex-row items-center justify-between bg-stone-50 p-2 my-2 shadow rounded-none border-2 border-stone-100 border-l-amber-300"
                >
                  <div>
                    <Typography className="font-LatoBold text-base text-gray-950 text-pretty normal-case">
                      "{nominee.song}"
                    </Typography>
                    <Typography className="font-LatoRegular text-sm text-gray-900 text-pretty normal-case">
                      ~ {nominee.artist}
                    </Typography>
                    <p className="font-LatoBold text-amber-600">{nominee.votes} <span className="font-LatoRegular text-sm">votes</span></p>
                  </div>
                  <NavLink to={`/admin/artists/${nominee.id}/nominations`}>
                    <RxDotsVertical />
                  </NavLink>
                </Card>
              ))}
            </div>
          </div>
          <div className="h-[30rem] w-full">
          <AwardsEventCategoryPieChart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminAwardCategoryPage;
