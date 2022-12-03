import React, { useState } from 'react';
import "./Header.css";


export default function Header() {
    return (
      <>
      <nav id="navbar-custom">
      <p id="logo">Golfbook</p>
      <div id="navbarNav">
        <ul id="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/leaderboard">Leaderboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/startRound">Start Round</a>
          </li>

        </ul>
      </div>
    </nav>
    </>
    )
}