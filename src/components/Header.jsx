import React, { useState } from 'react';
import "./Header.css";


export default function Header() {
    return (
      <>
      <nav id="navbar-custom">
      <div id="navbarNav">
            <a id="logo" role="link" aria-disabled="true">Golfbook</a>
            <a className="nav-link" href="/">Login</a>
            <a className="nav-link" href="/leaderboard">Leaderboard</a>
            <a className="nav-link" href="#">Courses</a>
            <a className="nav-link" href="/startRound">Start Round</a>
      </div>
    </nav>
    </>
    )
}