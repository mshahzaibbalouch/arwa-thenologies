const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  
  category: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  questions: {
    type: [{
      question: {
        type: String,
        require: true,
      },
      answer: {
        type: String,
        require: true,
      }
    }],
    required: true,
  },
});

const Question = mongoose.model("Faq", questionSchema);

module.exports = Question;
