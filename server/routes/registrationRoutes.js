const express = require("express");

const router = express.Router();

const registrationController = require("../controllers/registrationController");

router.post("/", registrationController.registerCourse);

router.get("/:id", registrationController.getStudentCourses);

module.exports = router;