const express = require("express");
const DeveloperExpertise = require("../model/developerExperties"); // Assuming you have a DeveloperExpertise model

const router = express.Router();

router.post("/developerexpertise", async (req, res) => {
    try {
        const developerExpertiseData = req.body;
        const developerExpertise = new DeveloperExpertise(developerExpertiseData);

        const developerExpertiseDataSaved = await developerExpertise.save();

        res.status(200).send({ message: "Developer expertise data saved successfully", data: developerExpertiseDataSaved });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/developerexpertise', async (req, res) => {
    try {
        const developerExpertiseData = await DeveloperExpertise.find();

        res.status(200).json(developerExpertiseData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
