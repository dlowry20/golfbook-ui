import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import GamePlayNav from "./components/GamePlayNav";

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
        <form onSubmit={handleSubmit}>
            <label>Hole Number:
                <input
                    name="holeNumber"
                    type="number"
                    value={holeNumber}
                    onChange={(event) => setHoleNumber(event.target.value)}
                />
            </label>
            <label>Par:
                <input
                    name="par"
                    type="number"
                    value={par}
                    onChange={(event) => setPar(event.target.value)}
                />
            </label>
            <label>Score:
                <input
                    name="score"
                    type="number"
                    value={score}
                    onChange={(event) => setScore(event.target.value)}
                />
            </label>
            <label>Putts:
                <input
                    type="number"
                    name="putts"
                    value={putts}
                    onChange={(event) => setPutts(event.target.value)}
                />
            </label>
            <label>GIR:
                <input
                    type="checkbox"
                    name="gir"
                    checked={gir}
                    onChange={(event) => setGir(event.target.value)}
                />
            </label>
            <label>Fairway
                <input
                    type="checkbox"
                    name="fairway"
                    value={fairway}
                    onChange={(event) => setFairway(event.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
        <GamePlayNav/>
        <Footer/>
        </>
    )
}

export default AddHoleScore;