
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CurrentRound from "./CurrentRound";
import Leaderboard from "./Leaderboard";
import Login from "./containers/Login";
function App() {
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login">
                        <Login />
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