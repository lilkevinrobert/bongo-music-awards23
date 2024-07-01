import {lazy, Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext.tsx";
import Loading from "./components/Loading/Loading.tsx";
import NominatorsPage from "./pages/Admin/NominatorsPage.tsx";
import JudgesPage from "./pages/Admin/JudgesPage.tsx";
import ArtistPage from "./pages/Admin/ArtistPage.tsx";
import ArtistDashboardPage from "./pages/artist/ArtistDashboardPage.tsx";
import JudgePage from "./pages/Admin/JudgePage.tsx";
import NominatorPage from "./pages/Admin/NominatorPage.tsx";
import AdminProfilePage from "./pages/Admin/ProfilePage.tsx";
import AdminAwardsPage from "./pages/Admin/AdminAwardsPage.tsx";
import AdminAwardPage from "./pages/Admin/AdminAwardPage.tsx";


// Lazy-loaded components
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AdminDashboardPage = lazy(() => import("./pages/Admin/DashboardPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AdminCategoriesPage = lazy(() => import("./pages/Admin/CategoriesPage"));
const AdminGenresPage = lazy(() => import("./pages/Admin/GenresPage"));
const AdminGenrePage = lazy(() => import("./pages/Admin/GenrePage"));
const ArtistsPage = lazy(() => import("./pages/Admin/ArtistsPage"));
const RecoveryPage = lazy(() => import("./pages/RecoveryPage"));

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
                    path: "nominators/:nominatorId",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <NominatorPage />
                        </Suspense>
                    )
                },
                {
                    path: "judges/",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <JudgesPage />
                        </Suspense>
                    )
                },
                {
                    path: "judges/:judgeId",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <JudgePage />
                        </Suspense>
                    )
                },
                {
                    path: "profile",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <AdminProfilePage />
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

    return (
        <AuthProvider>
            <>
                <RouterProvider router={router}/>
            </>
        </AuthProvider>
    );
}

export default App;