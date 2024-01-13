const express = require("express");
const HowWeWork = require("../model/howWeWork.js"); // Assuming you have a HowWeWork model

const router = express.Router();

router.post("/howwework", async (req, res) => {
    try {
        const howWeWorkData = req.body;
        const howWeWork = new HowWeWork(howWeWorkData);

        const howWeWorkDataSaved = await howWeWork.save();

        res.status(200).send({ message: "How we work data saved successfully", data: howWeWorkDataSaved });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/howwework', async (req, res) => {
    try {
        const howWeWorkData = await HowWeWork.find();

        res.status(200).json(howWeWorkData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

