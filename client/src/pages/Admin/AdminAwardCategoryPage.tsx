import { Card, Typography } from "@material-tailwind/react";
import BreadcrumbLevel3 from "../../components/Breadcrumbs/BreadcrumbLevel3";
import Layout from "../../components/Layout/Layout";
import { NavLink, useLocation, useParams } from "react-router-dom";
import AwardsEventCategoryPieChart from "../../components/Charts/AwardsEventCategoryPieChart";
import useFetch from "../../hooks/useFetch";

interface NominationData {
  data: [];
}

interface NomineesFetchResult {
  data: NominationData | null;
  loading: boolean;
  error: Error | null;
  fetchData: () => void;
}

const AdminAwardCategoryPage = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const HOME_URL = import.meta.env.VITE_HOME_URL;

  const nav = useParams();
  const location = useLocation();
  const queryGenre = location.state.genre_id
  const queryCategory = location.state.category_type_id

  // GET nominations by category
  const {
    data: nomineesData,
    loading: nomineesDataLoading,
    error: nomineesDataError
  }: NomineesFetchResult = useFetch(`${BASE_URL}/nominations/${nav.awardId}/categories/${nav.categoryId}?genre_id=${queryGenre}&category_type_id=${queryCategory}`);

  console.log('nominees: ',nomineesData?.data)
  console.log('/GET', `${BASE_URL}/nominations/${nav.awardId}/categories/${nav.categoryId}?genre_id=${queryGenre}&category_type_id=${queryCategory}`)
  // Category Title
  const lastItem: any = nomineesData?.data.pop();

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
          {lastItem && lastItem.name} <span className="hidden text-base text-gray-700 font-LatoRegular"> - {nominees.awards}</span>
        </Typography>
        <div className="py-4 flex flex-col-reverse">
          {/* Show Chart */}
          <div className="h-[30rem] w-full">
            <AwardsEventCategoryPieChart />
          </div>
          {/* Show Nominees */}
          <div>
            <Typography
              variant="h6"
              className="text-base text-gray-900 font-LatoBold capitalize"
            >
              nominees
            </Typography>
            {
              nomineesDataLoading ? <>loading</>: nomineesDataError ? <>not activated</> : <>haha</>
            }
            {
              nomineesDataLoading ? <p className="text-base text-gray-900 font-LatoRegular py-3 text-center">Processing nomination data...</p> : nomineesDataError ? <p className="text-base text-gray-700 font-LatoRegular text-center py-3 bg-gray-100">Award Nominationations not activated</p> : nomineesData?.data.length == 0 ? <p>No Data found.</p> : nomineesData ? (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {nomineesData.data.map((nominee: any, ind) => (
                      <Card
                        key={ind}
                        className="h-fit w-full flex flex-row items-center justify-between bg-stone-50 p-2 my-2 shadow rounded-none border-2 border-stone-100 border-l-amber-300"
                      >
                        <div className="bg-transparent w-3/4">
                          <Typography className="font-LatoBold text-base text-gray-950 text-pretty normal-case">
                            "{nominee.title}"
                          </Typography>
                          <Typography className="font-LatoRegular text-sm text-gray-900 text-pretty normal-case">
                            ~ {nominee.stage_name}
                          </Typography>
                          <Typography className="font-LatoRegular text-xs text-gray-900 text-pretty uppercase">
                            {nominee.record_label}
                          </Typography>
                          <p className="font-LatoBold text-amber-600">{nominee.release_date} <span className="font-LatoRegular text-sm hidden">votes</span></p>
                        </div>
                        <NavLink to={`/admin/artists/${nominee.id}/nominations`} className="w-1/4 h-20 border border-l-transparent border-gray-900 rounded-r-md shadow-inner">
                          <img
                            src={`${HOME_URL}/${nominee.track_artwork_url}`} alt={`${nominee.stage_name}'s DP`}
                            loading="lazy"
                            className="bg-gray-200 w-full h-full object-cover group-hover:object-scale-down text-sm font-LatoRegular text-gray-900 rounded transition ease-in-out duration-300"
                          />
                        </NavLink>
                      </Card>
                    ))}
                  </div>
                </>
              ) : <p>Nominationations not activated</p>
            }
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default AdminAwardCategoryPage;
