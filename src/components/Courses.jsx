import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { CourseRow } from './CourseRow';
import './Courses.css';

function Courses() {
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

    return (
        <>
        <Header/>
        <div className="courses">
        <h1>COURSES</h1>
        <table>
            <thead>
            <tr  id="rowHeader">
                <th>Course Id</th>
                <th>Course Name</th>
                <th>Par</th>
            </tr>
            </thead>
            <tbody>
            {
                courses.map(({ courseId, courseName, par }) => (
                    <CourseRow
                        courseId={courseId}
                        courseName={courseName}
                        par={par}
                    />
                ))
            }
            </tbody>
        </table>
        </div>
        </>
    );
}

export default Courses;
