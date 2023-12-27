const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: false, // Updated to false
    },
    category: {
        type: String,
        required: false, // Updated to false
    },
    heroTittle: {
        type: String,
        required: false, // Updated to false
    },
    heroDescription: {
        type: String,
        required: false, // Updated to false
    },
    customerIcons: {
        type: String,
        required: false, // Updated to false
    },
    allProcessTittle: {
        type: String,
        required: false, // Updated to false
    },
    allProcessDescription: {
        type: String,
        required: false, // Updated to false
    },
    process3Steps: {
        type: [
            {
                header: {
                    type: String,
                    required: false, // Updated to false
                },
                body: {
                    type: String,
                    required: false, // Updated to false
                },
            },
        ],
        required: false, // Updated to false
    },
    allEmployeesTittle: {
        type: String,
        required: false, // Updated to false
    },
    allEmployeesDescription: {
        type: String,
        required: false, // Updated to false
    },
    hireSkillTittle: {
        type: String,
        required: false, // Updated to false
    },
    hireSkillDescription: {
        type: String,
        required: false, // Updated to false
    },
    hireSkillImage: {
        type: String,
        required: false, // Updated to false
    },
    allExpertiseTittle: {
        type: String,
        required: false, // Updated to false
    },
    allExpertiseDescription: {
        type: String,
        required: false, // Updated to false
    },
    sixExpertiseTittle: {
        type: [
            {
                header: {
                    type: String,
                    required: false, // Updated to false
                },
                body: {
                    type: String,
                    required: false, // Updated to false
                },
            },
        ],
        required: false, // Updated to false
    },
    reasonTittle: {
        type: String,
        required: false, // Updated to false
    },
    reasonDescription: {
        type: String,
        required: false, // Updated to false
    },
    reasonImage: {
        type: String,
        required: false, // Updated to false
    }

})

const Field = mongoose.model("Field", fieldSchema)

module.exports = Field;
