import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CurrentRound from "./CurrentRound";
import Leaderboard from "./Leaderboard";
import Login from "./containers/Login";
import Courses from './components/Courses';
import StartRound from './StartRound';
import CreateCourse from './components/CreateCourse';
function App() {
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Route path="leaderboard">
                        <Leaderboard/>
                    </Route>
                    <Route path="courses">
                        <Courses/>
                    </Route>
                    <Route path="startRound">
                        <StartRound/>
                    </Route>
                    <Route path="currentRound">
                        <CurrentRound/>
                    </Route>
                    <Route path="createCourse">
                        <CreateCourse/>
                    </Route>
                    {/*<Route path="/dashboard">*/}
                    {/*    element = {<CurrentRound />}*/}
                    {/*</Route>*/}
                    {/*<Route path="/preferences">*/}
                    {/*    element = {<Leaderboard />}*/}
                    {/*</Route>*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;