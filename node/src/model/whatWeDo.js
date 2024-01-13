const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const whatWeDoSchema = new Schema({
  imageSrc: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const WhatWeDo = mongoose.model("WhatWeDo", whatWeDoSchema);

module.exports = WhatWeDo;
