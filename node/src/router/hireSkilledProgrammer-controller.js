const express = require("express");
const SkilledProgrammer = require("../model/hireSkilledProgrammer.js"); // Assuming you have a SkilledProgrammer model

const router = express.Router();

router.post("/hireskilled", async (req, res) => {
    try {
        const programmerData = req.body;
        const skilledProgrammer = new SkilledProgrammer(programmerData);

        const programmerDataSaved = await skilledProgrammer.save();

        res.status(200).send({ message: "Programmer data saved successfully", data: programmerDataSaved });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/hireskilled', async (req, res) => {
    try {
        const programmerData = await SkilledProgrammer.find();

        res.status(200).send(programmerData);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
