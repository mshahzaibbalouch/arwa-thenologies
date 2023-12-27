const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  category: {
    type: String,
    require: true,
    unique: true,
  },
  questions: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model("Faq", questionSchema);

module.exports = Question;
