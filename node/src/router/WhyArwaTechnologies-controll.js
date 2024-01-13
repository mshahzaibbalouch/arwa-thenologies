// Import necessary modules
const express = require("express");
const router = express.Router();
const WhyArwaTechnologiesModel = require("../model/WhyArwaTechnologies"); 

// Create a WhyArwaTechnologies entry
router.post("/whyArwaTechnologies", async (req, res) => {
  try {
    const entry = new WhyArwaTechnologiesModel(req.body);
    await entry.save();
    res.status(201).send(entry);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all WhyArwaTechnologies entries
router.get("/whyArwaTechnologies", async (req, res) => {
  try {
    const entries = await WhyArwaTechnologiesModel.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific WhyArwaTechnologies entry by ID
router.get("/whyArwaTechnologies/:id", async (req, res) => {
  try {
    const entry = await WhyArwaTechnologiesModel.findById(req.params.id);
    if (!entry) {
      return res.status(404).send({ error: "Entry not found" });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a WhyArwaTechnologies entry by ID
router.patch("/whyArwaTechnologies/:id", async (req, res) => {
  try {
    const entry = await WhyArwaTechnologiesModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!entry) {
      return res.status(404).send({ error: "Entry not found" });
    }
    res.status(200).send(entry);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a WhyArwaTechnologies entry by ID
router.delete("/whyArwaTechnologies/:id", async (req, res) => {
  try {
    const entry = await WhyArwaTechnologiesModel.findByIdAndDelete(req.params.id);
    if (!entry) {
      return res.status(404).send({ error: "Entry not found" });
    }
    res.status(200).send(entry);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
