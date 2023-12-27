const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    linkedinLink: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    skills: {
        type: [String],
        required: false,
    },
    startDate: {
        type: Date,
        required: false,
    },
    endDate: {
        type: Date,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
})

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;