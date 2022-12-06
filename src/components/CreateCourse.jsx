import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './CreateCourse.css';

function CreateCourse(){
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);


    const [courseName, setCourseName] = useState("");
    const [par, setPar] = useState(0);

    const token = localStorage.getItem("accessToken");
    useEffect(() => {
        axios.get("http://localhost:8080/courses/createCourse", {
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
            <div id="createCourse">
            <form onSubmit={handleClick} id="createCourseForm">
                <h1 className="createCourseTitle">Create New Course</h1>
                <label for="courseName" id="courseNameLabel">Course Name:</label>
                <input 
                    name="courseName"
                    id="courseNameInput"
                    type="text" 
                    value={courseName}
                    onChange={(event)=> setCourseName(event.target.value)} 
                />
                <br/>
                <label for="par" id="parLabel">Par:</label>
                <input 
                    name="par"
                    id="parInput"
                    type="number" 
                    value={par}
                    onChange={(event)=> setPar(event.target.value)} 
                />
                <br/>
                <button type="submit" 
                        id="createCourseBtn"
                        ><Link to={"/courses"}>Create Course</Link></button>
            </form>
            </div>
            <Footer/>
        </>
    )
}

export default CreateCourse;