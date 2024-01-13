const mongoose = require("mongoose");

const howweworkSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: false,
    },
    text1: {
        type: String,
        required: false,
    },
    text2: {
        type: String,
        required: false,
    },
    text3: {
        type: String,
        required: false,
    }
})

const HowWeWork = mongoose.model("HowWeWork", howweworkSchema)

module.exports = HowWeWork;