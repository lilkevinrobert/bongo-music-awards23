import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import Loading from "./components/Loading/Loading.tsx";
import NominatorsPage from "./pages/Admin/NominatorsPage.tsx";
import JudgesPage from "./pages/Admin/JudgesPage.tsx";
import ArtistPage from "./pages/Admin/ArtistPage.tsx";
import JudgePage from "./pages/Admin/JudgePage.tsx";
import NominatorPage from "./pages/Admin/NominatorPage.tsx";
import AdminProfilePage from "./pages/Admin/ProfilePage.tsx";
import AdminAwardsPage from "./pages/Admin/AdminAwardsPage.tsx";
import AdminAwardPage from "./pages/Admin/AdminAwardPage.tsx";
import ErrorHandler from "./components/Errors/ErrorHandler.tsx";
import ArtistNominationsPage from "./pages/Admin/ArtistNominationsPage.tsx";
import AdminAwardCategoryPage from "./pages/Admin/AdminAwardCategoryPage.tsx";
import AdminSponsorsPage from "./pages/Admin/AdminSponsorsPage.tsx";
import ArtistProfilePage from "./pages/Artist/ArtistProfilePage.tsx";
import ArtistSettingsPage from "./pages/Artist/ArtistSettingsPage.tsx";
import ArtistNominationsViewPage from "./pages/Artist/ArtistNominationsViewPage.tsx";
import ArtistSongsPage from "./pages/Artist/ArtistSongsPage.tsx";
import useNetworkStatus from "./hooks/useNetworkStatus.ts";

// Lazy-loaded components
const OfflineErrorPage = lazy(
  () => import("./components/Errors/ErrorNetworkOffline"),
);
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AdminDashboardPage = lazy(() => import("./pages/Admin/DashboardPage"));
const ArtistDashboardPage = lazy(
  () => import("./pages/Artist/ArtistDashboardPage"),
);
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AdminCategoriesPage = lazy(() => import("./pages/Admin/CategoriesPage"));
const AdminGenresPage = lazy(() => import("./pages/Admin/GenresPage"));
const AdminGenrePage = lazy(() => import("./pages/Admin/GenrePage"));
const ArtistsPage = lazy(() => import("./pages/Admin/ArtistsPage"));
const RecoveryPage = lazy(() => import("./pages/RecoveryPage"));

import logotest from "/logo-safari-2.png";
import testimagebg from "/testimage.jpg";
import {
  MdOutlineSchool,
  MdOutlineScience,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import AdminAddArtistPage from "./pages/Admin/AdminAddUserPage.tsx";
import AdminArtistProfileCompletionPage from "./pages/Admin/AdminArtistProfileCompletionPage.tsx";

function App() {
  const { isOnline } = useNetworkStatus();

  const router = createBrowserRouter([
    {
      path: "/testing",
      errorElement: <ErrorHandler />,
      element: (
        <Suspense fallback={<Loading />}>
          <div className="h-screen w-full flex items-center bg-gray-900">
            <div className="relative mx-auto h-72 w-72 rounded-full border-2 border-dashed border-gray-50/40 bg-transparent shadow-lg">
              {/* Logo Container */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white p-1 shadow-lg border-2 border-blue-700">
                  <img src={logotest} alt="Logo" className="h-fit w-fit" />
                </div>
              </div>

              <div className="relative h-16 w-8 bg-gray-100"></div>

              {/* Top Menu Item */}
              {/* <div className="group absolute -top-5 left-1/2 -translate-x-1/2 transform cursor-pointer rounded-full transition ease-linear hover:scale-110">
                <div className="relative flex h-12 w-fit items-center justify-center rounded-full bg-gray-200 px-3 py-2 font-bold capitalize text-gray-900 shadow-md group-hover:bg-white">
                  <div className="absolute left-1/2 top-full h-10 w-0.5 -translate-x-1/2 transform bg-gray-300 group-hover:bg-white"></div>
                  <HiMiniArrowTrendingUp className="mr-2 text-2xl text-gray-700" />
                  <p className="font-LatoBold">startups</p>
                </div>
              </div> */}
              <div className="group absolute -top-10 left-1/2 -translate-x-1/2 transform cursor-pointer rounded-full transition ease-linear shadow-lg shadow-gray-500/50 hover:shadow-blue-500/40 hover:scale-110">
                <div className="relative flex flex-col h-20 w-20 items-center justify-center rounded-full bg-gray-200 px-3 py-2 font-bold capitalize text-gray-900 shadow-md group-hover:bg-white">
                  <div className="absolute left-1/2 top-full h-10 w-0.5 -translate-x-1/2 transform bg-gray-300 group-hover:bg-white"></div>
                  <HiMiniArrowTrendingUp className="text-2xl text-gray-700 group-hover:text-blue-700 transition ease-linear" />
                  <p className="font-LatoBold group-hover:text-blue-700 text-sm transition ease-linear">startups</p>
                </div>
              </div>

              {/* Bottom Menu Item */}
              {/* <div className="group absolute -bottom-5 left-1/2 -translate-x-1/2 transform cursor-pointer rounded-full transition ease-linear hover:scale-110">
                <div className="relative flex h-12 w-fit items-center justify-center rounded-full bg-gray-200 group-hover:bg-white px-4 py-2 font-bold capitalize text-gray-900 shadow-md">
                  <div className="absolute bottom-full left-1/2 h-10 w-0.5 -translate-x-1/2 transform bg-gray-300 group-hover:bg-white"></div>
                  <MdOutlineSchool className="mr-2 text-5xl text-gray-700" />
                  <p className="font-LatoBold">higher learning</p>
                </div>
              </div> */}
              <div className="group absolute -bottom-10 left-1/2 -translate-x-1/2 transform cursor-pointer rounded-full transition ease-linear shadow-lg shadow-gray-500/50 hover:shadow-blue-500/40 hover:scale-110">
                <div className="relative flex flex-col h-20 w-20 items-center justify-center rounded-full bg-gray-200 group-hover:bg-white px-4 py-2 font-bold capitalize text-gray-900 shadow-md">
                  <div className="absolute bottom-full left-1/2 h-10 w-0.5 -translate-x-1/2 transform bg-gray-300 group-hover:bg-white"></div>
                  <MdOutlineSchool className="text-5xl text-gray-700 group-hover:text-blue-700 transition ease-linear" />
                  <p className="font-LatoBold group-hover:text-blue-700 text-sm transition ease-linear text-center">higher learning</p>
                </div>
              </div>

              {/* Left Menu Item */}
              {/* <div className="group absolute -left-24 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full transition ease-linear hover:scale-110">
                <div className="relative flex h-12 w-fit items-center justify-center rounded-full bg-gray-200 px-3 py-2 font-bold capitalize text-gray-900 shadow-md group-hover:bg-white">
                  <div className="absolute left-full top-1/2 h-0.5 w-14 -translate-y-1/2 transform bg-gray-300 group-hover:bg-white"></div>
                  <MdOutlineAttachMoney className="mr-2 text-2xl text-gray-700" />
                  <p className="font-LatoBold">investor</p>
                </div>
              </div> */}
               <div className="group absolute -left-14 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full transition ease-linear shadow-lg shadow-gray-500/50 hover:shadow-blue-500/40 hover:scale-110">
                <div className="relative flex flex-col h-20 w-20 items-center justify-center rounded-full bg-gray-200 px-3 py-2 font-bold capitalize text-gray-900 shadow-md group-hover:bg-white">
                  <div className="absolute left-full top-1/2 h-0.5 w-14 -translate-y-1/2 transform bg-gray-300 group-hover:bg-white"></div>
                  <MdOutlineAttachMoney className="text-2xl text-gray-700 group-hover:text-blue-700 transition ease-linear" />
                  <p className="font-LatoBold text-center group-hover:text-blue-700 text-sm transition ease-linear">investor</p>
                </div>
              </div>

              {/* Right Menu Item */}
              {/* <div className="group absolute -right-24 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full transition ease-linear hover:scale-110">
                <div className="relative flex h-12 w-fit items-center justify-center rounded-full bg-gray-200 px-3 py-2 font-bold capitalize text-gray-900 shadow-md group-hover:bg-white">
                  <div className="absolute right-full top-1/2 h-0.5 w-12 -translate-y-1/2 transform bg-gray-300 group-hover:bg-white"></div>
                  <MdOutlineScience className="mr-2 text-2xl text-gray-700" />
                  <p className="font-LatoBold">research</p>
                </div>
              </div> */}
               <div className="group absolute -right-12 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full transition ease-linear shadow-lg shadow-gray-500/50 hover:shadow-blue-500/40 hover:scale-110">
                <div className="relative flex flex-col h-20 w-20 items-center justify-center rounded-full bg-gray-200 px-3 py-2 font-bold capitalize text-gray-900 shadow-md group-hover:bg-white">
                  <div className="absolute right-full top-1/2 h-0.5 w-12 -translate-y-1/2 transform bg-gray-300 group-hover:bg-white"></div>
                  <MdOutlineScience className="text-2xl text-gray-700 group-hover:text-blue-700 transition ease-linear" />
                  <p className="font-LatoBold text-center group-hover:text-blue-700 text-sm transition ease-linear">research</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full bg-red-300">
                <img src={testimagebg} alt="some image" className="w-full h-full" />
            </div>
          </div>
        </Suspense>
      ),
    },
    {
      path: "/",
      index: true,
      errorElement: <ErrorHandler />,
      element: (
        <Suspense fallback={<Loading />}>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loading />}>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: "/recovery",
      element: (
        <Suspense fallback={<Loading />}>
          <RecoveryPage />
        </Suspense>
      ),
    },
    {
      path: "/admin",
      children: [
        {
          path: "add-user-form/",
          element: (
            <Suspense fallback={<Loading />}>
                <AdminAddArtistPage />
            </Suspense>
          ),
        },
        {
          path: "artist-profile-completion/",
          element: (
            <Suspense fallback={<Loading />}>
                <AdminArtistProfileCompletionPage />
            </Suspense>
          ),
        },
        {
          path: "dashboard/",
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <AdminDashboardPage />
            </Suspense>
          ),
        },
        {
          path: "sponsors/",
          element: (
            <Suspense fallback={<Loading />}>
              <AdminSponsorsPage />
            </Suspense>
          ),
        },
        {
          path: "awards/",
          element: (
            <Suspense fallback={<Loading />}>
              <AdminAwardsPage />
            </Suspense>
          ),
        },
        {
          path: "awards/:awardId",
          element: (
            <Suspense fallback={<Loading />}>
              <AdminAwardPage />
            </Suspense>
          ),
        },
        {
          path: "awards/:awardId/categories/:categoryId",
          element: (
            <Suspense fallback={<Loading />}>
              <AdminAwardCategoryPage />
            </Suspense>
          ),
        },
        {
          path: "categories/",
          element: (
            <Suspense fallback={<Loading />}>
              <AdminCategoriesPage />
            </Suspense>
          ),
        },
        {
          path: "genres/",
          element: (
            <Suspense fallback={<Loading />}>
              <AdminGenresPage />
            </Suspense>
          ),
        },
        {
          path: "genre/",
          element: (
            <Suspense fallback={<Loading />}>
              <AdminGenrePage />
            </Suspense>
          ),
        },
        {
          path: "artists/",
          element: (
            <Suspense fallback={<Loading />}>
              <ArtistsPage />
            </Suspense>
          ),
        },
        {
          path: "artists/:artistId",
          element: (
            <Suspense fallback={<Loading />}>
              <ArtistPage />
            </Suspense>
          ),
        },
        {
          path: "artists/:artistId/nominations",
          element: (
            <Suspense fallback={<Loading />}>
              <ArtistNominationsPage />
            </Suspense>
          ),
        },
        {
          path: "nominators/",
          element: (
            <Suspense fallback={<Loading />}>
              <NominatorsPage />
            </Suspense>
          ),
        },
        {
          path: "nominators/:nominatorId",
          element: (
            <Suspense fallback={<Loading />}>
              <NominatorPage />
            </Suspense>
          ),
        },
        {
          path: "judges/",
          element: (
            <Suspense fallback={<Loading />}>
              <JudgesPage />
            </Suspense>
          ),
        },
        {
          path: "judges/:judgeId",
          element: (
            <Suspense fallback={<Loading />}>
              <JudgePage />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: (
            <Suspense fallback={<Loading />}>
              <AdminProfilePage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/artist",
      children: [
        {
          path: "dashboard/",
          element: (
            <Suspense fallback={<Loading />}>
              <ArtistDashboardPage />
            </Suspense>
          ),
        },
        {
          path: "nominations/",
          element: (
            <Suspense fallback={<Loading />}>
              <ArtistNominationsViewPage />
            </Suspense>
          ),
        },
        {
          path: "profile/",
          element: (
            <Suspense fallback={<Loading />}>
              <ArtistProfilePage />
            </Suspense>
          ),
        },
        {
          path: "settings/",
          element: (
            <Suspense fallback={<Loading />}>
              <ArtistSettingsPage />
            </Suspense>
          ),
        },
        {
          path: "songs/",
          element: (
            <Suspense fallback={<Loading />}>
              <ArtistSongsPage />
            </Suspense>
          ),
        },
        // {
        //     path: "artists/:artistId",
        //     element: (
        //         <Suspense fallback={<div>Loading...</div>}>
        //             <ArtistPage />
        //         </Suspense>
        //     ),
        // },
      ],
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={<Loading />}>
          <AboutPage />
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense fallback={<Loading />}>
          <ContactPage />
        </Suspense>
      ),
    },
  ]);

  return (
    <AuthProvider>
      <>
        {isOnline ? <RouterProvider router={router} /> : <OfflineErrorPage />}
        {/* <RouterProvider router={router}/> */}
      </>
    </AuthProvider>
  );
}

export default App;
