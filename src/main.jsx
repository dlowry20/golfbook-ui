import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from "react-router-dom";
import "./index.css";

import StartRound from "./components/StartRound"
import CurrentRound from "./CurrentRound";
import AddHoleScore from "./components/AddHoleScore";
import CreateCourse from "./components/CreateCourse";
import Leaderboard from "./Leaderboard";
import ErrorPage from "./ErrorPage";
import Login from "./containers/Login";
import Courses from "./components/Courses";


const loggedIn = localStorage.getItem("accessToken")

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement: <ErrorPage />,
        // children: [
        //     {
        //         path: "leaderboard",
        //         element: <Leaderboard />,
        //     },
        // ],
    },
    {
        path: "/leaderboard",
        element: <Leaderboard/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/startRound",
        element: <StartRound />,
        errorElement: <ErrorPage />
    },
    {
        path: "/currentRound",
        element: <CurrentRound />,
        errorElement: <ErrorPage />
    },
    {
        path: "/addHoleScore",
        element: <AddHoleScore />,
        errorElement: <ErrorPage />
    },
    {
        path:"/courses",
        element: <Courses/>,
        errorElement: <ErrorPage />
    },
    {
        path:"/courses/createCourse",
        element: <CreateCourse/>,
        errorElement: <ErrorPage />
    },
    // {
    //     path:"/courses/id",
    //     element: <Course/> //need to fix path to individual course
    // },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);