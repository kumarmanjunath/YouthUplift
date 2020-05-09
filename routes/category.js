const express = require("express");

const router = express.Router();

const { check, validationResult } = require("express-validator");
const {
  getCategories,
  addCategory,
  deleteCategory,
  getCategoryTutor,
  updateCategory,
} = require("../controllers/category");
const { protect, authorize } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

const Category = require("../models/Category");

router
  .route("/")
  .get(advancedResults(Category), getCategories)
  .post(protect, authorize("admin"), addCategory);

router
  .route("/:categoryId")
  .get(getCategoryTutor)
  .put(protect, authorize("admin"), updateCategory)
  .delete(protect, authorize("admin"), deleteCategory);

router.route("/:categoryId/mentors").get(getCategoryTutor);

module.exports = router;
