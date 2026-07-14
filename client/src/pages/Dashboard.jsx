import { useEffect, useState } from "react";
import axios from "../services/api";

function Dashboard() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        load();

    }, []);

    async function load() {

        const res = await axios.get("/registrations/1");

        setCourses(res.data);

    }

    return (

        <div className="container">

            <h2>My Registered Courses</h2>

            {

                courses.map((course, index) => (

                    <div
                        key={index}
                        className="course-card"
                    >

                        <h3>{course.course_name}</h3>

                        <p>{course.course_code}</p>

                        <p>{course.instructor}</p>

                        <p>{course.status}</p>

                    </div>

                ))

            }

        </div>

    );

}

export default Dashboard;