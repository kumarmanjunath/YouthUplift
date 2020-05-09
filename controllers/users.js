const User = require("../models/User");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

//@desc   Get all users
//@route  Get /api/v1/auth/users
//@access  Private/Admin

exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@desc   Get single user
//@route  Get /api/v1/auth/users/:id
//@access  Private/Admin

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

//@desc   Create user
//@route  Post /api/v1/auth/users
//@access  Private/Admin

exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

//@desc   Update user
//@route  Put /api/v1/auth/users/:id
//@access  Private/Admin

exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

//@desc   delete user
//@route  Delete /api/v1/auth/users/:id
//@access  Private/Admin

exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      Get  user
// @route     GET /api/v1/auth/users/user
// @access    Private/Admin
exports.getAllUser = asyncHandler(async (req, res, next) => {
  const user = await User.find({ role: "user" });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc      Get  user
// @route     GET /api/v1/auth/users/vendors
// @access    Private/Admin
exports.getMentors = asyncHandler(async (req, res, next) => {
  const user = await User.find({ role: "mentor" });

  res.status(200).json({
    success: true,
    data: user,
  });
});
