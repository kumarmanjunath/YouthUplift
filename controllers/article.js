const path = require("path");
const Article = require("../models/Article");
const asyncHandler = require("../middleware/async");
const geocoder = require("../utils/geocoder");
const ErrorResponse = require("../utils/errorResponse");
//@desc   get all Articles
//@route  GET  /api/v1/articles
//@access  Public
exports.getArticles = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@desc   get single mentor
//@route  GET  /api/v1/bootcams/:id
//@access  Public
exports.getArticle = asyncHandler(async (req, res, next) => {
  const article = await Article.findById(req.params.articleId);

  if (!article) {
    return next(
      new ErrorResponse(
        `Mentor not found with id of ${req.params.articleId}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    count: article.length,
    data: article,
  });
});

//@desc  update   mentor
//@route  PUT  /api/v1/mentors/:id
//@access  Private
exports.updateArticle = asyncHandler(async (req, res, next) => {
  let article = await Article.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Mentor not found with id of ${req.params.id}`, 404)
    );
  }

  //make sure user is mentor owner
  if (article.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this mentor`,
        401
      )
    );
  }

  article = await Article.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: article });
});

//@desc  delete  mentor
//@route  DELETE /api/v1/mentors/:id
//@access  Private
exports.deleteArticle = asyncHandler(async (req, res, next) => {
  const article = await Article.findById(req.params.articleId);
  if (!article) {
    return next(
      new ErrorResponse(
        `Mentor not found with id of ${req.params.articleId}`,
        404
      )
    );
  }

  //make sure user is mentor owner
  if (article.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.articleId} is not authorized to delete this article`,
        401
      )
    );
  }

  article.remove();

  res.status(200).json({ success: true, data: {} });
});

// @desc      Upload photo for mentor
// @route     Post /api/v1/article/photo
// @access    Private
exports.articlePhotoUpload = asyncHandler(async (req, res, next) => {
  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;
  console.log(file);

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  file.mv(
    `${__dirname}/../client/public/uploads/article/${file.name}`,
    async (err) => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 500));
      }

      const files = `/uploads/${file.name}`;

      res.status(200).json({
        success: true,
        data: files,
      });
    }
  );
});

exports.addArticle = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id;

  // req.body.photo = req.body.photo;
  const article = await Article.create(req.body);
  res.status(200).json({
    success: true,
    data: article,
  });
});

// @desc      Get current logged in user
// @route     POST /api/v1/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const article = await Article.findOne({ user: req.user.id });

  res.status(200).json({
    success: true,
    data: article,
  });
});
