const mongoose = require("mongoose");
const slugify = require("slugify");
const geocoder = require("../utils/geocoder");

const MentorSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "please enter full name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 charcters"],
    },
    profession: {
      // Array of strings
      type: [String],
      required: true,
      enum: [
        "Doctor",
        "IAS",
        "Banker",
        "Govt Employee",
        "Engineers",
        "Army",
        "IT",
        "Other",
      ],
    },
    experience: {
      type: String,
      required: [true, "Please add number of experience"],
    },
    slug: String,
    description: {
      type: String,
      required: [true, "please add description"],
      maxlength: [500, "description can not be more than 50 charcters"],
    },
    mentor_type: {
      // Array of strings
      type: [String],
      required: true,
      enum: ["Mentorship", "Funding"],
    },
    phone: {
      type: String,
      maxlength: [10, "Phone number can not be longer than 10 digits"],
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    address: {
      type: String,
      required: [true, "Please add an address"],
    },
    location: {
      // GeoJSON Point
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String,
    },

    averageRating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [10, "Rating must can not be more than 10"],
    },
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//create mentor slug from the name
MentorSchema.pre("save", function (next) {
  this.slug = slugify(this.fname, { lower: true });
  next();
});

//Geocode & create location field
MentorSchema.pre("save", async function (next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipCode,
    country: loc[0].countryCode,
  };

  //Do not save address in DB
  this.address = undefined;
  next();
});

//Cascade delete courses when a mentor is deleted
MentorSchema.pre("remove", async function (next) {
  console.log(`Courses being removed from mentorship  ${this._id}`);
  await this.model("Course").deleteMany({ mentor: this._id });
  next();
});

//Reverse populate with virtuals
MentorSchema.virtual("courses", {
  ref: "Course",
  localField: "_id",
  foreignField: "mentor",
  justOne: false,
});

module.exports = mongoose.model("Mentor", MentorSchema);
