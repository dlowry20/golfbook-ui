export function CourseById(
    courseId = 5,
    courseName = "Saint Paul Country Club",
    par = 72
) {
    return (
        <div>
            <div className="course">
                <h2>{courseId}</h2>
                <h1>{courseName}</h1>
                <h4>{par}</h4>
            </div>
            
        </div>
    )
}

// need to use useParams() to get the id in course.jsx
