import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import GamePlayNav from './GamePlayNav';
import './StartRound.css';


export default function StartRound() {

    var todaysDate = new Date();
    const token = localStorage.getItem("accessToken")
    var todaysDateString = todaysDate.toISOString().substr(0, 10);
    const [golfCourse, setCourseName] = useState("River Oaks Golf Course")
    const [datePlayed, setDatePlayed] = useState(todaysDateString)
    const [tournamentId, setTournamentId] = useState("")
    const [holesPlayed, setHolesPlayed] = useState("")
    const [courseName, setName] = useState(null);
    const [coursePar, setCoursePar] = useState(null);
    const [courseId, setCourseId] = useState(null);
    const [error, setError] = useState(null);
    const handleSubmit = e => {
        e.preventDefault()

        const token = localStorage.getItem("accessToken")
        axios.get("http://localhost:8080/courses/name/" + golfCourse, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
                console.log(response.data);
                setName(response.data.courseName);
                setCoursePar(response.data.par);
                setCourseId(response.data.courseId);
                setError(null);
            })
        var raw = {
            "courseId": courseId,
            "courseName": courseName,
            "datePlayed": datePlayed,
            "score": "0",
            "coursePar": coursePar,
            "tournamentId": tournamentId
        }

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
        <div id="startRound">
            <form onSubmit={handleSubmit} className="startRoundForm">
                <h1 className="startRoundTitle">Start a Round</h1>
                <label id="startRoundLabel">Golf Course:</label>
                <input
                    name="courseName"
                    id="courseNameInput"
                    type="text"
                    value={golfCourse}
                    onChange={(event) => setCourseName(event.target.value)}
                />
            <br/>
                <label id="roundDateLabel">Date:</label>
            <input
                name="roundDate"
                id="roundDateInput"
                type="date"
                defaultValue={todaysDateString}
                onChange={(event) => setDatePlayed(event.target.value)}
            />
            {/*</label>*/}
                <br/>
            <label id="tournamentIdLabel">Tournament Id:</label>
                <input
                    name="tournamentId"
                    id="tournamentIdInput"
                    type="text"
                    value={tournamentId}
                    onChange={(event) => setTournamentId(event.target.value)}
                />

            {/*<label>Back 9*/}
            {/*    <input*/}
            {/*        type="number"*/}
            {/*        name="backNine"*/}
            {/*        value={score.backNine}*/}
            {/*        onChange={handleChange}*/}
            {/*    />*/}
            {/*</label>*/}
            {/*<label>Total Score*/}
            {/*    <input*/}
            {/*        type="number"*/}
            {/*        name="totalScore"*/}
            {/*        value={score.totalScore}*/}
            {/*        onChange={handleChange}*/}
            {/*    />*/}
            {/*</label>*/}
            {/*<label>Holes Played*/}
            {/*    <input*/}
            {/*        type="number"*/}
            {/*        name="holesPlayed"*/}
            {/*        value={holesPlayed}*/}
            {/*        onChange={(event) => setHolesPlayed(event.target.value)}*/}
            {/*    />*/}
            {/*</label>*/}
                <br/>
                <button type="submit"
                id="startRoundBtn">
                    <Link to={"/addHoleScore"}>Start Round</Link>
                </button>
            </form>
        </div>
        <GamePlayNav />
        <Footer/>
        </>
    )
}

// function handleChange(event) {
//     const value = event.target.value;
//     setScores({
//         [event.target.name]: value
//     });
// }