import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import AdminDashboardPage from "./pages/Admin/DashboardPage";
import ContactPage from "./pages/ContactPage";

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

export default App;
