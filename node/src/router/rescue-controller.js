const express = require("express");
const Rescue = require("../model/rescue"); // Assuming you have a Rescue model

const router = express.Router();

router.post("/rescue", async (req, res) => {
    try {
        const rescueData = req.body;
        const rescue = new Rescue(rescueData);

        const rescueDataSaved = await rescue.save();

        res.status(200).send({ message: "Rescue data saved successfully", data: rescueDataSaved });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/rescue', async (req, res) => {
    try {
        const rescueData = await Rescue.find();

        res.status(200).json(rescueData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
