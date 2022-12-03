import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import StartRound from "./StartRound"
import CurrentRound from "./CurrentRound";
import AddHoleScore from "./AddHoleScore";

import Leaderboard from "./Leaderboard";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CurrentRound/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "leaderboard",
                element: <Leaderboard />,
            },
        ],
    },
    {
        path: "/leaderboard",
        element: <Leaderboard/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/startRound",
        element: <StartRound />,
    },
    {
        path: "/addHoleScore",
        element: <AddHoleScore />,
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);