import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function HolesByCourse() {
    const [error, setError] = useState(null);
    const [courses, setCourses] = useState([]);
    const {courseId} = useParams();

    const token = localStorage.getItem("accessToken");

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
            {
                courses.filter((courses) => courses.courseId === courseId)
                    .map((courseId, courseName, coursePar) => (
                        <div key={courseId}>
                            <h1>{courseName}</h1>
                            <h3>{coursePar}</h3>
                        </div>
                    ))
            }
        </>
  )
}

export default HolesByCourse;

