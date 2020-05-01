const express = require("express");
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");

const Course = require("../models/Course");
const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(
    advancedResults(Course, {
      path: "mentor",
      select: "name description",
    }),
    getCourses
  )
  .post(protect, authorize("mentor", "admin"), addCourse);

router
  .route("/:id")
  .get(getCourse)
  .put(protect, authorize("mentor", "admin"), updateCourse)
  .delete(protect, authorize("mentor", "admin"), deleteCourse);

module.exports = router;
