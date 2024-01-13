const express = require("express");
const PortfolioTitle = require("../model/portfolioTitle"); // Assuming you have a PortfolioTitle model

const router = express.Router();

router.post("/portfoliotitle", async (req, res) => {
    try {
        const portfolioTitleData = req.body;
        const portfolioTitle = new PortfolioTitle(portfolioTitleData);

        const portfolioTitleDataSaved = await portfolioTitle.save();

        res.status(200).send({ message: "Portfolio title data saved successfully", data: portfolioTitleDataSaved });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/portfoliotitle', async (req, res) => {
    try {
        const portfolioTitleData = await PortfolioTitle.find();

        res.status(200).json(portfolioTitleData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
