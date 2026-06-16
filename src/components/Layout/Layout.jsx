import { Outlet } from "react-router-dom";

import HeaderHotel from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout() {
    return(
        <>
            <HeaderHotel />

            <Outlet />

            <Footer />
        </>
    )
}