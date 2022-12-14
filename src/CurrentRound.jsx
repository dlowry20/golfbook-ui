import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrentRoundHole from "./CurrentRoundHole"
import { Outlet } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import GamePlayNav from "./components/GamePlayNav";


function CurrentRound() {

    const [error, setError] = useState(null);

    const [scores, setScores] = useState([]);

    const token = localStorage.getItem("accessToken")
    useEffect(() => {
        axios.get("http://localhost:8080/hole_score/current_round",  {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
                setScores(response.data);
                setError(null);
            })
    }, [])

    if (error) return <p>An error occurred</p>

    return (
        <>
        <Header/>
        <table>
            <thead>
            <tr>
                <th>holeNumber</th>
                <th>par</th>
                <th>score</th>
                <th>gir</th>
                <th>fairway</th>
                <th>putts</th>
            </tr>
            </thead>
            <tbody>
            {
                scores.map(({ holeNumber, score, par, gir, fairway, putts }) => (
                    <CurrentRoundHole
                        holeNumber={holeNumber}
                        score={score}
                        par={par}
                        gir={gir}
                        fairway={fairway}
                        putts={putts}
                    />
                ))
            }
            </tbody>
        </table>
            <div id="detail">
                <Outlet />
            </div>
            <GamePlayNav/>
            <Footer/>
        </>
    );

}

export default CurrentRound;