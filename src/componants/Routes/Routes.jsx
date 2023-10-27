import { createBrowserRouter } from "react-router-dom";
import MainLyOut from "./MainLyOut/MainLyOut";
import Home from "../Home/home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import CheackOut from "../CheackOut/CheackOut";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLyOut></MainLyOut>,
    children: [

      {
        path: '',
        element: <Home></Home>

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      
      {
        path: '/checkout/:id',
        element: <CheackOut></CheackOut>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      }
    ]
  },
]);

export default router;