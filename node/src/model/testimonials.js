const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testimnials = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Testimonial = mongoose.model("Testimonial", testimnials);

module.exports = Testimonial;
