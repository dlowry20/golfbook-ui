import React from 'react'
import SingleCourseDisplay from './SingleCourseDisplay';
import { useParams } from 'react-router-dom';

function SingleCourseCard() {
    // const [error, setError] = useState(null);
    // const [courses, setCourses] = useState([]);
    // const {courseId} = useParams();

    // const token = localStorage.getItem("accessToken");

    // useEffect(() => {
    //     axios('http://localhost:8080/courses/',
    //         {
    //                 headers: {
    //                     'Authorization': `Bearer ${token}`
    //                 }
    //         })
    //         .then((response) => {
    //             setCourses(response.data);
    //             setError(null);
    //         })
    // }, [])

    // if (error) return <p>An error occurred</p>
  return (
    <>
    {/* <SingleCourseDisplay ({courses}, courseId) /> */}
    <div>Hello</div>
    </>
  )
}
export default SingleCourseCard;
