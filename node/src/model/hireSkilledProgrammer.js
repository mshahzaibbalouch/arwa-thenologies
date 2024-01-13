const mongoose = require("mongoose");

const hireskilledprogrammerSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    following: {
        type: String,
        required: false,
    },
    reasons: {
        type: [String],
        required: false,
    },
    categoray: {
        type: String,
        required: false,
    }
})

const HireSkilledProgrammer = mongoose.model("HireSkilledProgrammer", hireskilledprogrammerSchema)

module.exports = HireSkilledProgrammer;