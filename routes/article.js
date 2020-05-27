const express = require("express");
const {
  getArticles,
  getArticle,
  getMe,
  addArticle,
  updateArticle,
  deleteArticle,
  articlePhotoUpload,
} = require("../controllers/article");

const Article = require("../models/Article");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router.route("/photo").post(protect, articlePhotoUpload);

router
  .route("/")
  .get(advancedResults(Article), getArticles)
  .post(protect, addArticle);

router.route("/me").get(protect, getMe);

router
  .route("/:articleId")
  .get(getArticle)
  .put(protect, updateArticle)
  .delete(protect, deleteArticle);

module.exports = router;
