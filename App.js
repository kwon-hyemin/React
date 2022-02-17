import React from "react";
import Bmi from "./components/Bmi";
import Calc from "./components/Calc";
import Grade from "./components/Grade";
import Home from "./pages/Home";
import Login from "./components/Login";
import { useRoutes } from "react-router-dom";
export default function App(){
return useRoutes([
    {path: "/", element: <Home />},
    {path: "bmi", element: <Bmi />},
    {path: "calc", element: <Calc />},
    {path: "grade", element: <Grade />},
    {path: "login", element: <Login />},
]);

}


