import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './Courses.css';

function Course() {
    const [error, setError] = useState(null);

    const [courses, setCourses] = useState([]);
    const token = localStorage.getItem("accessToken")

    useEffect(() => {
        axios('http://localhost:8080/courses/',
            {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
            })
            .then((response) => {
                setCourses(response.data);
                setError(null);
            })
    }, [])

    if (error) return <p>An error occurred</p>

    const fetchAnswer = (courseId) => {
        const foundCourse = courses.find((foundCourse) => foundCourse.id === courseId);
        return foundCourse ? foundCourse.text : "Course not found";
    }

    return (
        <>
        <Header/>
        <div className="course">
        <h1>COURSES</h1>
        
            {
                courses.map(({ courseId, courseName, par }) => (
                    <CourseById
                        courseId={courseId}
                        courseName={courseName}
                        par={par}
                    />
                ))
            }
           
        </div>
        <Footer/>
        </>
    );
}

export default Courses;