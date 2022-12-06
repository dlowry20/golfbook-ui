import React, { useState } from 'react';

import axios from 'axios';
import Footer from '../components/Footer';
import './Login.css';
import { Link } from "react-router-dom";

async function loginUser(credentials) {

    const response = await axios.post("http://localhost:8080/authenticate", credentials)
        .catch(error => console.log('error', error));
    return response.data

}

export default function Login() {

    const [username, setUserName] = useState();

    const [password, setPassword] = useState();

    const handleSubmit = async e => {

        e.preventDefault();
        const tokenResponse = await loginUser({
            username,
            password
        });
        localStorage.setItem("accessToken", tokenResponse.token)

    }

    return(
        <div className="login-wrapper">
            <h1>Welcome to <span id="golfbookLogo">G</span>olfbook</h1>
            <h3 className="loginStartText">Please Log In to get Started</h3>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>
                    <p id="userName">Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p id="passWord">Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button className="loginBtn" type="submit">Submit</button>
                </div>
            </form>
            <Footer/>
        </div>
    )
}