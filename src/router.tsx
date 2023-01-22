import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import Register from "./components/pages/register/register";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path={"/"} />
                <Route element={<Login />} path={"/login"} />
                <Route element={<Register />} path={"/register"} />
            </Routes>
        </BrowserRouter>
    )
}

