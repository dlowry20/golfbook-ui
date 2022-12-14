import { Link } from "react-router-dom";

export function CourseRow({
    courseId = 5,
    courseName = "Saint Paul Country Club",
    par = 72
}) {
return (
<tr className="courses">
<td className="courses__courseId">{courseId}</td>
<td className="courses__courseName">{courseName}</td>
<td className="courses__par">{par}</td>
<td className="courses__holes"><Link to={`/courses/${courseId}`}>See Holes</Link>
</td>
</tr>
);
}