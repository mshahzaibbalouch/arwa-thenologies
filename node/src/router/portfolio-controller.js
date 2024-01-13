const express = require("express");
const Portfolio = require("../model/portfolio");

const router = express.Router();

// Create a new portfolio item
router.post("/portfolio", async (req, res) => {
  try {
    const newPortfolio = await Portfolio.create(req.body);
    res.status(201).json(newPortfolio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all portfolio items
router.get("/portfolio", async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific portfolio item by ID
router.get("/portfolio/:id", async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (portfolio) {
      res.json(portfolio);
    } else {
      res.status(404).json({ message: "Portfolio not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a specific portfolio item by ID
router.put("/portfolio/:id", async (req, res) => {
  try {
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedPortfolio) {
      res.json(updatedPortfolio);
    } else {
      res.status(404).json({ message: "Portfolio not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a specific portfolio item by ID
router.delete("/portfolio/:id", async (req, res) => {
  try {
    const deletedPortfolio = await Portfolio.findByIdAndDelete(req.params.id);
    if (deletedPortfolio) {
      res.json({ message: "Portfolio deleted successfully" });
    } else {
      res.status(404).json({ message: "Portfolio not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
