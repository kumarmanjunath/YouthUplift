const express = require("express");
const {
  getMentors,
  getMentor,
  getMe,
  addmentor,
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

router.route("/photo").post(protect, mentorPhotoUpload);

router
  .route("/")
  .get(advancedResults(Mentor, { path: "category" }), getMentors)
  .post(protect, addmentor);

router.route("/me").get(protect, getMe);

router
  .route("/:id")
  .get(protect, getMentor)
  .put(protect, authorize("mentor", "admin"), updateMentor)
  .delete(protect, authorize("mentor", "admin"), deleteMentor);

module.exports = router;
