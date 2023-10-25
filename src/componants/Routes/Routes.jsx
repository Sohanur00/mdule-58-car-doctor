import { createBrowserRouter } from "react-router-dom";
import MainLyOut from "./MainLyOut/MainLyOut";
import Home from "../Home/home/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLyOut></MainLyOut>,
      children:[

        {
            path:'',
            element:<Home></Home>

        }
      ]
    },
  ]);

export default router;