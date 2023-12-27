// Import necessary modules
const express = require("express");
const router = express.Router();
const Testimonial = require("../model/testimonials");

// Create a testimonial
router.post("/testimonial", async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).send(testimonial);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all testimonials
router.get("/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json({testimonials});
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific testimonial by ID
router.get("/testimonials/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).send({ error: "Testimonial not found" });
    }
    res.status(200).send(testimonial);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a testimonial by ID
router.patch("/testimonials/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!testimonial) {
      return res.status(404).send({ error: "Testimonial not found" });
    }
    res.status(200).send(testimonial);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a testimonial by ID
router.delete("/testimonials/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return res.status(404).send({ error: "Testimonial not found" });
    }
    res.status(200).send(testimonial);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
