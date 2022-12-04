import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function CreateCourse(){
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);


    const [courseName, setCourseName] = useState("");
    const [par, setPar] = useState(0);

    const token = localStorage.getItem("accessToken");
    useEffect(() => {
        axios.get("http://localhost:8080/courses/createCourse", {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                setCourses(response.data);
                setError(null);
            })
    }, [])

    function handleClick() {

        var raw = {
            "courseName": courseName,
            "par": par
        };

        axios.post("http://localhost:8080/courses/", raw, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
    return (
        <>
            <Header/>
            <form onSubmit={handleClick} action="/courses">
                <label for="courseName">Course Name:
                <input 
                    name="courseName"
                    type="text" 
                    value={courseName}
                    onChange={(event)=> setCourseName(event.target.value)} 
                />
                </label>
                <label for="par">Par:
                <input 
                    name="par"
                    type="number" 
                    value={par}
                    onChange={(event)=> setPar(event.target.value)} 
                />
                </label>
                <input type="submit" />
            </form>
            <Footer/>
        </>
    )
}

export default CreateCourse;