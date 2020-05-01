const path = require("path");
const Mentor = require("../models/Mentor");
const asyncHandler = require("../middleware/async");
const geocoder = require("../utils/geocoder");
const ErrorResponse = require("../utils/errorResponse");
//@desc   get all mentors
//@route  GET  /api/v1/mentors
//@access  Public
exports.getMentors = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@desc   get single mentor
//@route  GET  /api/v1/bootcams/:id
//@access  Public
exports.getMentor = asyncHandler(async (req, res, next) => {
  const mentor = await Mentor.findById(req.params.id);

  if (!mentor) {
    return next(
      new ErrorResponse(`Mentor not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: mentor });
});

//@desc  create new mentor
//@route  POST  /api/v1/mentors
//@access  Private
exports.createMentor = asyncHandler(async (req, res, next) => {
  //Add user to req.body
  req.body.user = req.user.id;

  //check for published mentorship
  const publishedMentor = await Mentor.findOne({ user: req.user.id });

  //if the user is not anadmin,they can only add one mentor
  if (publishedMentor && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `The user with ID ${req.user.id} has already published a mentor`,
        400
      )
    );
  }

  const mentor = await Mentor.create(req.body);

  res.status(201).json({
    success: true,
    data: mentor,
  });
});

//@desc  update   mentor
//@route  PUT  /api/v1/mentors/:id
//@access  Private
exports.updateMentor = asyncHandler(async (req, res, next) => {
  let mentor = await Mentor.findById(req.params.id);
  if (!mentor) {
    return next(
      new ErrorResponse(`Mentor not found with id of ${req.params.id}`, 404)
    );
  }

  //make sure user is mentor owner
  if (mentor.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this mentor`,
        401
      )
    );
  }

  mentor = await Mentor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: mentor });
});

//@desc  delete  mentor
//@route  DELETE /api/v1/mentors/:id
//@access  Private
exports.deleteMentor = asyncHandler(async (req, res, next) => {
  const mentor = await Mentor.findById(req.params.id);
  if (!mentor) {
    return next(
      new ErrorResponse(`Mentor not found with id of ${req.params.id}`, 404)
    );
  }

  //make sure user is mentor owner
  if (mentor.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to delete this mentor`,
        401
      )
    );
  }

  mentor.remove();

  res.status(200).json({ success: true, data: {} });
});

//@desc  Get  mentor within radius
//@route  GET /api/v1/mentors/radius/:zipcode/:distance
//@access  Private
exports.getMentorsInRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;

  //get lat/lan from geocoder
  const loc = await geocoder.geocode(zipcode);
  const lat = loc[0].latitude;
  const lng = loc[0].longitude;

  //Calculate radius using radians
  // divide distance by radius of earth
  //earth Radius=3,963 miles / 6,378km

  const radius = distance / 3963;

  const mentors = await Mentor.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    success: true,
    count: mentors.length,
    data: mentors,
  });
});

//@desc  upload photo for mentor
//@route  PUT /api/v1/mentors/:id/photo
//@access  Private
exports.mentorPhotoUpload = asyncHandler(async (req, res, next) => {
  const mentor = await Mentor.findById(req.params.id);
  if (!mentor) {
    return next(
      new ErrorResponse(`Mentor not found with id of ${req.params.id}`, 404)
    );
  }

  //make sure user is mentor owner
  if (mentor.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this mentor`,
        401
      )
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  //Make sure the image is a photo

  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  //check file size
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }
  // create custom filename
  file.name = `photo_${mentor._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }
    await Mentor.findByIdAndUpdate(req.params.id, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
