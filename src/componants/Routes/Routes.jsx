import { createBrowserRouter } from "react-router-dom";
import MainLyOut from "./MainLyOut/MainLyOut";
import Home from "../Home/home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLyOut></MainLyOut>,
      children:[

        {
            path:'',
            element:<Home></Home>

        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/signUp',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);

export default router;