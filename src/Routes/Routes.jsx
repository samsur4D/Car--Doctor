import { createBrowserRouter } from "react-router-dom";
import Real from "../Layout/Real";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Shared/Footer/Footer";
import Login from "../Pages/Login";
import Register from "../Pages/Shared/Navber/Register";
import Checkout from "../Pages/Checkout";
import Bookingss from "../Pages/Bookingss";
import Protectroute from "../Protectroute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Real></Real>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/checkout/:id",
          element: <Protectroute> <Checkout></Checkout></Protectroute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "/bookingss",
          element:   <Protectroute> <Bookingss></Bookingss> </Protectroute>
        }
        
      ]
    },
  ]);

  export default router ;