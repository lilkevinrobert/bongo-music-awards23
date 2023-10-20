import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import AdminDashboardPage from "./pages/Admin/DashboardPage";

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
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
