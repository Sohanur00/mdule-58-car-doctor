import { createBrowserRouter } from "react-router-dom";
import MainLyOut from "./MainLyOut/MainLyOut";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLyOut></MainLyOut>,
      children:[

        {
            path:'',
            element:<></>

        }
      ]
    },
  ]);

export default router;