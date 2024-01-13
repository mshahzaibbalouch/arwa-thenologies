const mongoose = require("mongoose");

const rescueSchema = new mongoose.Schema({
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

const Rescue = mongoose.model("rescue", rescueSchema);

module.exports = Rescue;
