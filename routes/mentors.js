const express = require("express");
const {
  getMentors,
  getMentor,
  createMentor,
  updateMentor,
  deleteMentor,
  getMentorsInRadius,
  mentorPhotoUpload,
} = require("../controllers/mentors");

const Mentor = require("../models/Mentor");

//Include other resources routers
const courseRouter = require("./courses");
const reviewRouter = require("./reviews");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");
//Re-route into other resource routers
router.use("/:mentorId/courses", courseRouter);
router.use("/:mentorId/reviews", reviewRouter);

router.route("/radius/:zipcode/:distance").get(getMentorsInRadius);

router
  .route("/:id/photo")
  .put(protect, authorize("mentor", "admin"), mentorPhotoUpload);

router
  .route("/")
  .get(advancedResults(Mentor, "course"), getMentors)
  .post(protect, authorize("mentor", "admin"), createMentor);

router
  .route("/:id")
  .get(getMentor)
  .put(protect, authorize("mentor", "admin"), updateMentor)
  .delete(protect, authorize("mentor", "admin"), deleteMentor);

module.exports = router;
