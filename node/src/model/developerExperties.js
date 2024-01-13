const mongoose = require("mongoose");

const developerExpertiseSchema = new mongoose.Schema({

category: {
    type: String,
    required: true,
},
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
            },
            description: {
                type: String,
            },
            image: {
                type: String,
            },
        }
    ],
    required: true,
  }
});

const DeveloperExpertise = mongoose.model("DeveloperExpertise", developerExpertiseSchema);

module.exports = DeveloperExpertise;
