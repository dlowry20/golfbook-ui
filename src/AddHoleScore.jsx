import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddHoleScore() {

    const [scores, setScores] = useState([]);
    const [error, setError] = useState(null);
    const [holeNumber, setHoleNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [par, setPar] = useState(0);
    const [putts, setPutts] = useState(0);
    const [gir, setGir] = useState(false);
    const [fairway, setFairway] = useState(false);

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

    function handleSubmit() {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic dXNlcjE6cGFzc3dvcmQ=");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "SESSION=N2U5M2Q1MDgtMzQ0OS00NDAxLTk4ZDEtZmM3ZDZmNjNkZGEz; XSRF-TOKEN=aea13f6f-ae04-41e8-97b4-a58514f396cc");

        var raw = JSON.stringify({
            "courseId": 1,
            "holeNumber": holeNumber,
            "score": score,
            "par": par,
            "gir": false,
            "fairway": false,
            "putts": putts
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/hole_score/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    return (
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
    )
}

export default AddHoleScore;