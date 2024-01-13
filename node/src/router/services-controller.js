const express = require("express");
const Services = require("../model/services"); // Assuming you have a Services model

const router = express.Router();

router.post("/services", async (req, res) => {
    try {
        const servicesData = req.body;
        const services = new Services(servicesData);

        const servicesDataSaved = await services.save();

        res.status(200).send({ message: "Services data saved successfully", data: servicesDataSaved });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/services', async (req, res) => {
    try {
        const servicesData = await Services.find();

        res.status(200).json(servicesData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
