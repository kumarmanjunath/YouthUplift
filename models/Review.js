const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add a name"],
    maxlength: 100,
  },
  message: {
    type: String,
    required: [true, "please add a some mesage"],
  },
  subject: {
    type: String,
    required: [true, "please add a subject"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    // unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },

  // title: {
  //   type: String,
  //   trim: true,
  //   required: [true, "please add a  title for the Review"],
  //   maxlength: 100,
  // },
  // text: {
  //   type: String,
  //   required: [true, "please add some text"],
  // },
  // rating: {
  //   type: Number,
  //   min: 1,
  //   max: 10,
  //   required: [true, "Please give a rating between 1 and 10"],
  // },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  // mentor: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "Mentor",
  //   required: true,
  // },
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

//Prevent user from submitting more than one review per mentor
// ReviewSchema.index({ mentor: 1, user: 1 }, { unique: true });

// //Static method to get avg rating and save
// ReviewSchema.statics.getAverageRating = async function (mentorId) {
//   const obj = await this.aggregate([
//     {
//       $match: { mentor: mentorId },
//     },
//     {
//       $group: {
//         _id: "$mentor",
//         averageRating: { $avg: "$rating" },
//       },
//     },
//   ]);
//   try {
//     await this.model("Mentor").findByIdAndUpdate(mentorId, {
//       averageRating: obj[0].averageRating,
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// // call getAverageCost after save
// ReviewSchema.post("save", function () {
//   this.constructor.getAverageRating(this.mentor);
// });

// // call getAverageCost before remove
// ReviewSchema.pre("remove", function () {
//   this.constructor.getAverageRating(this.mentor);
// });

module.exports = mongoose.model("Review", ReviewSchema);
