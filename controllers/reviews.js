const Review = require("../models/Review");
// const Mentor = require("../models/Mentor");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc      Get reviews
// @route     GET /api/v1/reviews
// @route     GET /api/v1/mentors/:mentorId/reviews
// @access    Public
exports.getReviews = asyncHandler(async (req, res, next) => {
  // if (req.params.mentorId) {
  //   const reviews = await Review.find({ mentor: req.params.mentorId });

  // return
  res.status(200).json(res.advancedResults);
  // } else {
  //   res.status(200).json(res.advancedResults);
  // }
});

// @desc      Get single review
// @route     GET /api/v1/reviews/:id
// @access    Public
// exports.getReview = asyncHandler(async (req, res, next) => {
//   const review = await Review.findById(req.params.id).populate({
//     path: "mentor",
//     select: "name description",
//   });

//   if (!review) {
//     return next(
//       new ErrorResponse(`No review found with the id of ${req.params.id}`, 404)
//     );
//   }

//   res.status(200).json({
//     success: true,
//     data: review,
//   });
// });

// @desc      Add review
// @route     Post /api/v1/mentors/:mentorId/reviews/
// @access    Private
exports.addReview = asyncHandler(async (req, res, next) => {
  // req.body.mentor = req.params.mentorId;
  // req.body.user = req.user.id;

  // const mentor = await Mentor.findById(req.params.mentorId);
  // const review=await Review.create(req.body)
  // if (!mentor) {
  //   return next(
  //     new ErrorResponse(`No mentor with id of ${req.params.bootcampId}`, 404)
  //   );
  // }

  const review = await Review.create(req.body);

  res.status(201).json({
    success: true,
    data: review,
  });
});

// @desc      Update review
// @route     Put /api/v1/reviews/:id
// @access    Private
// exports.updateReview = asyncHandler(async (req, res, next) => {
//   let review = await Review.findById(req.params.id);

//   if (!review) {
//     return next(
//       new ErrorResponse(`No review with id of ${req.params.id}`, 404)
//     );
//   }

//   //make sure review belongs to user or user is admin
//   if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
//     return next(new ErrorResponse(`Not authorized update review `, 401));
//   }

//   review = await Review.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   res.status(200).json({
//     success: true,
//     data: review,
//   });
// });

// @desc      Delete review
// @route     Delete /api/v1/reviews/:id
// @access    Private
exports.deleteReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(
      new ErrorResponse(`No review with id of ${req.params.id}`, 404)
    );
  }

  // //make sure review belongs to user or user is admin
  // if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
  //   return next(new ErrorResponse(`Not authorized update review `, 401));
  // }

  await review.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
