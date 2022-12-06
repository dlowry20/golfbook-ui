import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import GamePlayNav from "./GamePlayNav";
import './AddHoleScore.css';
function AddHoleScore() {

    const [scores, setScores] = useState([]);
    const [error, setError] = useState(null);
    const [holeNumber, setHoleNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [par, setPar] = useState(0);
    const [putts, setPutts] = useState(0);
    const [gir, setGir] = useState(false);
    const [fairway, setFairway] = useState(false);
    const token = localStorage.getItem("accessToken")
    useEffect(() => {
        axios.get("http://localhost:8080/hole_score/current_round", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                setScores(response.data);
                setError(null);
            })
    }, [])

    function handleSubmit() {

        var raw = {
            "courseId": 1,
            "holeNumber": holeNumber,
            "score": score,
            "par": par,
            "gir": false,
            "fairway": false,
            "putts": putts
        };

        axios.post("http://localhost:8080/hole_score/", raw, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

    }

    return (
        <>
        <Header />
        <div id="addHoleScore">
        <form onSubmit={handleSubmit} className="addHoleScoreForm">
            <h1 className="addHoleScoreTitle">Add Score</h1>
            <label id="holeNumberLabel">Hole Number:
                <input
                    name="holeNumber"
                    id="holeNumberInput"
                    type="number"
                    value={holeNumber}
                    onChange={(event) => setHoleNumber(event.target.value)}
                />
            </label>
            <br/>
            <label id="roundDateLabel">Par:
                <input
                    name="par"
                    type="number"
                    value={par}
                    onChange={(event) => setPar(event.target.value)}
                />
            </label>
            <br/>
            <label id="holeScoreLabel">Score:
                <input
                    name="score"
                    id="holeScoreInput"
                    type="number"
                    value={score}
                    onChange={(event) => setScore(event.target.value)}
                />
            </label>
            <br/>
            <label id="holePuttsLabel">Putts:
                <input
                    id="holePuttsInput"
                    type="number"
                    name="putts"
                    value={putts}
                    onChange={(event) => setPutts(event.target.value)}
                />
            </label>
            <br/>
            <label id="holeGirLabel">GIR:
                <input
                    id="holeGirInput"
                    type="checkbox"
                    name="gir"
                    value={gir}
                    onChange={(event) => setGir(event.target.value)}
                />
            </label>
            <br/>
            <label id="holeFairwayLabel">Fairway
                <input
                    id="holeFairwayInput"
                    type="checkbox"
                    name="fairway"
                    value={fairway}
                    onChange={(event) => setFairway(event.target.value)}
                />
            </label>
            <br/>
            <button type="submit"
                    id="addHoleScoreBtn">
                Add Score
            </button>
        </form>
        </div>
        <GamePlayNav/>
        <Footer/>
        </>
    )
}

export default AddHoleScore;