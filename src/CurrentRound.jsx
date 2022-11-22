import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrentRoundHole from "./CurrentRoundHole"

function CurrentRound() {

    const [error, setError] = useState(null);

    const [scores, setScores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/hole_score/current_round", {}, {
            auth: {
                username: "user1",
                password: "password"
            }
        })
            .then((response) => {
                setScores(response.data);
                setError(null);
            })
    }, [])

    if (error) return <p>An error occurred</p>

    return (
        <table>
            <thead>
            <tr>
                <th>holeNumber</th>
                <th>score</th>
                <th>par</th>
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
    );

}

export default CurrentRound;