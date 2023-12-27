const express = require("express");
const HireStep = require("../model/hireStep");

const router = express.Router();

// Create
router.post("/hire-step", async (req, res) => {
  try {
    const hireStep = new HireStep(req.body);
    await hireStep.save();
    res.status(201).json(hireStep);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read
router.get("/hire-step", async (req, res) => {
  try {
    const hireSteps = await HireStep.find();
    res.json(hireSteps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
router.put("/hire-step/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const hireStep = await HireStep.findByIdAndUpdate(id, req.body, { new: true });
    if (!hireStep) {
      return res.status(404).json({ message: "Hire step not found" });
    }
    res.json(hireStep);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete
router.delete("/hire-step/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const hireStep = await HireStep.findByIdAndDelete(id);
    if (!hireStep) {
      return res.status(404).json({ message: "Hire step not found" });
    }
    res.json({ message: "Hire step deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
