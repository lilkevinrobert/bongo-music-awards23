/*
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import AdminDashboardPage from "./pages/Admin/DashboardPage";
import ContactPage from "./pages/ContactPage";
import AdminCategoriesPage from "./pages/Admin/CategoriesPage";
import AdminGenresPage from "./pages/Admin/GenresPage";
import AdminGenrePage from "./pages/Admin/GenrePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/admin",
      children: [
        {
          path: "dashboard/",
          element: <AdminDashboardPage />
        },
        {
          path: "categories/",
          element: <AdminCategoriesPage />
        },
        {
          path: "genres/",
          element: <AdminGenresPage />
        },
        {
          path: "genre/",
          element: <AdminGenrePage />
        }
      ]
    },
    {
      path: "/artist",
      element: <p>Artist route</p>
    },
    {
      path: "/about",
      element: <AboutPage />
    },
    {
      path: "/contact",
      element: <ContactPage />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;*/


import {lazy, Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext.tsx";
import Loading from "./components/Loading/Loading.tsx";
import NominatorsPage from "./pages/Admin/NominatorsPage.tsx";
import JudgesPage from "./pages/Admin/JudgesPage.tsx";
import ArtistPage from "./pages/Admin/ArtistPage.tsx";
import ArtistDashboardPage from "./pages/artist/ArtistDashboardPage.tsx";


// Lazy-loaded components
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AdminDashboardPage = lazy(() => import("./pages/Admin/DashboardPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AdminCategoriesPage = lazy(() => import("./pages/Admin/CategoriesPage"));
const AdminGenresPage = lazy(() => import("./pages/Admin/GenresPage"));
const AdminGenrePage = lazy(() => import("./pages/Admin/GenrePage"));
const ArtistsPage = lazy(() => import("./pages/Admin/ArtistsPage.tsx"));
const RecoveryPage = lazy(() => import("./pages/RecoveryPage.tsx"));

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Suspense fallback={<Loading />}>
                    <HomePage/>
                </Suspense>
            ),
        },
        {
            path: "/login",
            element: (
                <Suspense fallback={<Loading />}>
                    <LoginPage/>
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
                    path: "dashboard/",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <AdminDashboardPage/>
                        </Suspense>
                    ),
                },{
                    path: "awards/",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <p>awards</p>
                        </Suspense>
                    ),
                },
                {
                    path: "categories/",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <AdminCategoriesPage/>
                        </Suspense>
                    ),
                },
                {
                    path: "genres/",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <AdminGenresPage/>
                        </Suspense>
                    ),
                },
                {
                    path: "genre/",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <AdminGenrePage/>
                        </Suspense>
                    ),
                },
                {
                    path: "artists/",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <ArtistsPage/>
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
                    path: "nominators/",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <NominatorsPage />
                        </Suspense>
                    ),
                },
                {
                    path: "judges/",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <JudgesPage />
                        </Suspense>
                    )
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
                            <ArtistDashboardPage/>
                        </Suspense>
                    ),
                },
                {
                    path: "artists/",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <ArtistsPage/>
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
                    <AboutPage/>
                </Suspense>
            ),
        },
        {
            path: "/contact",
            element: (
                <Suspense fallback={<Loading />}>
                    <ContactPage/>
                </Suspense>
            ),
        },
    ]);

    // return (
    //     <>
    //       <RouterProvider router={router} />
    //     </>
    // );


    return (
        <AuthProvider>
            <>
                <RouterProvider router={router}/>
            </>
        </AuthProvider>
    );
}

export default App;