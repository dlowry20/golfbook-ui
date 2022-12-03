import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';


export default function StartRound() {

    var todaysDate = new Date();
    const token = localStorage.getItem("accessToken")
    var todaysDateString = todaysDate.toISOString().substr(0, 10);
    const [golfCourse, setCourseName] = useState("River Oaks Golf Course")
    const [datePlayed, setDatePlayed] = useState(todaysDateString)
    const [holesPlayed, setHolesPlayed] = useState("")
    const [score, setScores] = React.useState({
        frontNine: 0,
        backNine: 0,
        totalScore: 0
    })
    const handleSubmit = async e => {
        e.preventDefault()

        const token = localStorage.getItem("accessToken")
        var myHeaders = new Headers();

        myHeaders.append('Authorization', `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "SESSION=N2U5M2Q1MDgtMzQ0OS00NDAxLTk4ZDEtZmM3ZDZmNjNkZGEz; XSRF-TOKEN=aea13f6f-ae04-41e8-97b4-a58514f396cc");

        var raw = {
            "courseId": 1,
            "courseName": golfCourse,
            "datePlayed": datePlayed,
            "score": "0",
            "coursePar": 71,
            "userId": "user1",
            "tournamentId": 1
        }

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        axios.post("http://localhost:8080/round_score/", raw, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        // fetch("http://localhost:8080/round_score/", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

    }

    return (
        <>
        <Header />
        <form onSubmit={handleSubmit}>
            <label>Golf Course:
            <input
                type="text"
                value={golfCourse}
                onChange={(event) => setCourseName(event.target.value)}
            />
            </label>
            <label>Date:
            <input
                type="date"
                defaultValue={todaysDateString}
                onChange={(event) => setDatePlayed(event.target.value)}
            />
            </label>
            <label>Front 9
                <input
                    type="number"
                    name="frontNine"
                    value={score.frontNine}
                    onChange={handleChange}
                />
            </label>
            <label>Back 9
                <input
                    type="number"
                    name="backNine"
                    value={score.backNine}
                    onChange={handleChange}
                />
            </label>
            <label>Total Score
                <input
                    type="number"
                    name="totalScore"
                    value={score.totalScore}
                    onChange={handleChange}
                />
            </label>
            <label>Holes Played
                <input
                    type="number"
                    name="holesPlayed"
                    value={holesPlayed}
                    onChange={(event) => setHolesPlayed(event.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
        </>
    )
}

function handleChange(event) {
    const value = event.target.value;
    setScores({
        [event.target.name]: value
    });
}