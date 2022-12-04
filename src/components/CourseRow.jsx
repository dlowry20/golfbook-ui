export function CourseRow({
    courseId = 5,
    courseName = "Saint Paul Country Club",
    par = 72,
}) {
return (
<tr className="courses">
<td className="courses__courseId">{courseId}</td>
<td className="courses__courseName">{courseName}</td>
<td className="courses__par">{par}</td>
</tr>
);
}