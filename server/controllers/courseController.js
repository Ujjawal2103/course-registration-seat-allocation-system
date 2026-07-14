const pool = require("../config/db");

exports.createCourse = async (req, res) => {
    try {
        const {
            course_code,
            course_name,
            instructor,
            credits,
            max_seats,
            schedule
        } = req.body;

        await pool.query(
            `INSERT INTO courses
            (course_code, course_name, instructor, credits, max_seats, schedule)
            VALUES ($1,$2,$3,$4,$5,$6)`,
            [
                course_code,
                course_name,
                instructor,
                credits,
                max_seats,
                schedule
            ]
        );

        res.status(201).json({
            message: "Course Created Successfully"
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

exports.getCourses = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM courses ORDER BY id"
        );

        res.json(result.rows);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server Error"
        });
    }
};