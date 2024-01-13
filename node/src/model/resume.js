const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
  },
  expertise: {
    type: [
      {
        title: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  experience: {
    type: [
      {
        company: { type: String },
        position: { type: String },
        startTime: { type: String },
        endTime: { type: String },
        description: { type: String },
      },
    ],
  },
  education: {
    type: [
      {
        institute: { type: String },
        degree: { type: String },
        startTime: { type: String },
        endTime: { type: String },
        description: { type: String },
      },
    ],
  },
  projects: {
    type: [
      {
        projectName: { type: String },
        projectLink: { type: String },
        description: { type: String },
        technologiesUsed: [{ title: { type: String } }],
        role: { type: String },
      },
    ],
  },
});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
