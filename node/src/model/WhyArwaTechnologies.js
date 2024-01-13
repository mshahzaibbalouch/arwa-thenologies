const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const whyArwaTechnologiesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    require: true,
  },
});

const WhyArwaTechnologiesModel = mongoose.model("WhyArwaTechnologies", whyArwaTechnologiesSchema);

module.exports = WhyArwaTechnologiesModel;
