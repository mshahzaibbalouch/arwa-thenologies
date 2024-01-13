const mongoose = require("mongoose");

const portflioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
});

const Portfolio = mongoose.model("portfolio", portflioSchema);

module.exports = Portfolio;
