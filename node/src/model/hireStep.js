const mongoose = require("mongoose");

const hireStepSchema = new mongoose.Schema({
  category: {
    type: String,
    require: true,
    unique: true,
  },
  firtsTitle: {
    type: String,
    required: true,
  },
  firstDescription: {
    type: String,
    required: true,
  },
  secoundTitle: {
    type: String,
    required: true,
  },
  secoundDescription: {
    type: String,
    required: true,
  },
  therdTitle: {
    type: String,
    required: true,
  },
  therdDescription: {
    type: String,
    required: true,
  },
});

const HireStep = mongoose.model("hire-step", hireStepSchema);

module.exports = HireStep;
