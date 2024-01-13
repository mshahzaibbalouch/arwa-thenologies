const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cards: {
    type: [{
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    }],
    required: true,
  }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
