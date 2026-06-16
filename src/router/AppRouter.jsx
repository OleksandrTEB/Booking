import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout.jsx";
import Main from "../pages/Main/Main.jsx";
import Hotels from "../pages/Hotels/Hotels.jsx";
import About from "../pages/About/About.jsx";

export default function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />}/>
                <Route path="/Hotels" element={<Hotels />}/>
                <Route path="/About" element={<About />}/>
            </Route>
        </Routes>
    )
}