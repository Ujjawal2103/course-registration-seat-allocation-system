const pool = require("../config/db");

exports.registerCourse = async (req, res) => {
    try {

        const { student_id, course_id } = req.body;

        const courseResult = await pool.query(
            "SELECT * FROM courses WHERE id=$1",
            [course_id]
        );

        if (courseResult.rows.length === 0) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        const course = courseResult.rows[0];

        if (course.filled_seats >= course.max_seats) {
            return res.status(400).json({
                message: "No seats available"
            });
        }

        const alreadyRegistered = await pool.query(
            "SELECT * FROM registrations WHERE student_id=$1 AND course_id=$2",
            [student_id, course_id]
        );

        if (alreadyRegistered.rows.length > 0) {
            return res.status(400).json({
                message: "Already registered"
            });
        }

        await pool.query(
            `INSERT INTO registrations(student_id,course_id)
            VALUES($1,$2)`,
            [student_id, course_id]
        );

        await pool.query(
            `UPDATE courses
             SET filled_seats=filled_seats+1
             WHERE id=$1`,
            [course_id]
        );

        res.json({
            message: "Course Registered Successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }
};

exports.getStudentCourses = async (req, res) => {

    try {

        const studentId = req.params.id;

        const result = await pool.query(

            `SELECT
                courses.course_code,
                courses.course_name,
                courses.instructor,
                registrations.status
            FROM registrations
            JOIN courses
            ON registrations.course_id=courses.id
            WHERE registrations.student_id=$1`,

            [studentId]

        );

        res.json(result.rows);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

};