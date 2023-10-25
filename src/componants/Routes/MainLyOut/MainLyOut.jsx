import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navber from "../../shared/Navber/Navber";


const MainLyOut = () => {
    return (
        <div>

            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLyOut;