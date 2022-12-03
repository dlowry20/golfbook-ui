import React, { useState } from 'react';

import axios from 'axios';


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
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}