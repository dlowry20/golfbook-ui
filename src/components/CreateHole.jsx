import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function CreateHole() {
    const [holes, setHoles] = useState([]);
    const [error, setError] = useState(null);

    const [courseId, setCourseId] = useState(0);
    const [holeNumber, setHoleNumber] = useState(0);
    const [par, setPar] = useState(0);

    const token = localStorage.getItem("accessToken");
    useEffect(() => {
        axios.get("http://localhost:8080/holes/", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                setHoles(response.data);
                setError(null);
            })
    }, [])

    function handleClick() {

        var raw = {
            "courseId": courseId,
            "holeNumber": holeNumber,
            "par": par
        };

        axios.post("http://localhost:8080/holes/", raw, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
    return (
        <>
            <form onSubmit={handleClick} action="/courses/holes">
                    <label for="par">Par:
                    <input 
                        name="par"
                        type="number"
                        value={par}
                        onChange={(event)=> setPar(event.target.value)}
                        />
                </label>
            </form>
        </>
    )
 }