import { createBrowserRouter } from "react-router-dom";

import "./index.css";
import CONSTANTS from "./constant/Constant";
import Unauthorized from "./Pages/Unauthorized";
// import LayoutWrapper from "./components/LayoutWrapper";
import UnderDevelopment from "./Pages/UnderDevelopment"
import ErrorPage from "./Pages/ErrorPage"
import Homepage from "./Pages/HomePage"
import AboutUs from "./Pages/AboutUs";
import CoursesPage from "./Pages/CoursesPage";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <LayoutWrapper />,
    // children: [{ index: true, 
      element: <Homepage /> 
    // }],
  },
  {
    path: "/about-us",element: <AboutUs />,
  },
  {
    path: "/courses", element: <CoursesPage />,
  },
 
  {
    path:"/unauthorized", element: <Unauthorized />
  },
  {
    path:"*", element:<ErrorPage />
  },
  {
    path:"/under-development", element:<UnderDevelopment />
  }
 
]);

export default router;
