import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


export default function Header() {
    return (
    <>
      <nav id="navbar-custom">
        <div className="navbar-Nav">
            <p id="logo">Golfbook</p>
            <Link to="/"><p className="nav-link">Login</p></Link>
            <Link to="/leaderboard"><p className="nav-link">Leaderboard</p></Link>
            <Link to="/courses"><p className="nav-link">Courses</p></Link>
            <Link to="/startRound"><p className="nav-link">Start Round</p></Link>
          </div>
      </nav>
    </>
    )
}