import { createBrowserRouter } from "react-router-dom";
import Real from "../Layout/Real";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Shared/Footer/Footer";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Real></Real>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        
      ]
    },
  ]);

  export default router ;