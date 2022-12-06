import React from 'react'
import { useParams } from 'react-router-dom';

function SingleCourseDisplay({courses}, courseId) {
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

export default SingleCourseDisplay;
