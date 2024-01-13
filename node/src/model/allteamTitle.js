const mongoose = require("mongoose");

const allteamTitleSchema = new mongoose.Schema({
  category: {
    type: String,
    require: true,
    unique: true,
  },
  title : {
    type: String,
    required: true,
  },
  description : {
    type: String,
    required: true,
  }
});

const AllteamTitle = mongoose.model("allteamTitle", allteamTitleSchema);

module.exports = AllteamTitle;
