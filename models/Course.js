const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "please add a valid course title"],
  },
  description: {
    type: String,
    required: [true, "please add a description"],
  },
  weeks: {
    type: String,
    required: [true, "Please add number of weeks"],
  },
  tuition: {
    type: Number,
    required: [true, "Please add a tuition cost"],
  },
  minimumSkill: {
    type: String,
    required: [true, "Please add a minimum skill"],
    enum: ["beginner", "intermediate", "advanced"],
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  mentor: {
    type: mongoose.Schema.ObjectId,
    ref: "Mentor",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});
//Static method to get avg of course tutions
CourseSchema.statics.getAverageCost = async function (mentorId) {
  const obj = await this.aggregate([
    {
      $match: { mentor: mentorId },
    },
    {
      $group: {
        _id: "$mentor",
        averageCost: { $avg: "$tuition" },
      },
    },
  ]);
  try {
    await this.model("Mentor").findByIdAndUpdate(mentorId, {
      averageCost: Math.ceil(obj[0].averageCost / 10) * 10,
    });
  } catch (err) {
    console.error(err);
  }
};

// call getAverageCost after save
CourseSchema.post("save", function () {
  this.constructor.getAverageCost(this.mentor);
});

// call getAverageCost before remove
CourseSchema.pre("remove", function () {
  this.constructor.getAverageCost(this.mentor);
});
module.exports = mongoose.model("Course", CourseSchema);
