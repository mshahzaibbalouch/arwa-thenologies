const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    secondname: {
        type: String,
        required: true,
    },
    companyname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
})

const Contact = mongoose.model("Contact", contactSchema)

module.exports = Contact;