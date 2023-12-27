const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NavbarAboutSchema = new Schema({
  name: {
    type: String,
  },
  cetagory: {
    type: [Object],
    required: true,
  },
});

module.exports = mongoose.model("navbar-about", NavbarAboutSchema);
