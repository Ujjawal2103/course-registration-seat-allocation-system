const express = require("express");
const cors = require("cors");
require("dotenv").config();
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);

const pool = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");

const courseRoutes = require("./routes/courseRoutes");

const registrationRoutes = require("./routes/registrationRoutes");

app.use("/api/auth", authRoutes);

app.use("/api/courses", courseRoutes);

app.use("/api/registrations", registrationRoutes);

app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({
            message: "API Running",
            database: result.rows[0]
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Database Error");
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

