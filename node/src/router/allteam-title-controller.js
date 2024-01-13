const express = require("express");
const AllTeamTitle = require("../model/allteamTitle"); // Assuming you have a AllTeamTitle model

const router = express.Router();

router.post("/allteamtitle", async (req, res) => {
    try {
        const allteamTitleData = req.body;
        const allteamTitle = new AllTeamTitle(allteamTitleData);

        const allteamTitleDataSaved = await allteamTitle.save();

        res.status(200).send({ message: "All team title data saved successfully", data: allteamTitleDataSaved });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/allteamtitle', async (req, res) => {
    try {
        const allteamTitleData = await AllTeamTitle.find();

        res.status(200).json(allteamTitleData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
