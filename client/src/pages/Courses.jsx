import { useEffect, useState } from "react";
import axios from "../services/api";

function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        loadCourses();

    }, []);

    async function loadCourses() {

        const res = await axios.get("/courses");

        setCourses(res.data);

    }

    async function register(courseId) {

        const studentId = 1;

        try {

            const res = await axios.post("/registrations", {
                student_id: studentId,
                course_id: courseId
            });

            alert(res.data.message);

            loadCourses();

        } catch (err) {

            alert(err.response?.data?.message || "Registration Failed");

        }

    }

    return (

        <div className="container">

            <h2>Available Courses</h2>

            {

                courses.map(course => (

                    <div
                        key={course.id}
                        className="course-card"
                    >

                        <h3>{course.course_name}</h3>

                        <p><b>Code:</b> {course.course_code}</p>

                        <p><b>Instructor:</b> {course.instructor}</p>

                        <p><b>Seats:</b> {course.filled_seats}/{course.max_seats}</p>

                        <button
                            onClick={() => register(course.id)}
                        >
                            Register
                        </button>

                    </div>

                ))

            }

        </div>

    );

}

export default Courses;