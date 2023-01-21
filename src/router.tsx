import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path={"/"} />
                <Route element={<Login />} path={"/login"} />
            </Routes>
        </BrowserRouter>
    )
}

