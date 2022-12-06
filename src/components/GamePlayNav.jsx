import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import "./GamePlayNav.css";


export default function Header() {
    return (
    <>
    <div id="gameNavContainer">
      <nav id="gameNav">
        <p id="gamePlay">Game Play Navigation</p>
        <div className="gameNavBar">
            <Link to="/leaderboard"><p className="game-nav-link">Leaderboard</p></Link>
            <Link to="/currentRound"><p className="game-nav-link">Current Round</p></Link>
            <Link to="/addHoleScore"><p className="game-nav-link">Add Hole Score</p></Link>
          </div>
      </nav>
      </div>
    </>
    )
}