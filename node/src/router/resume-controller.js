const express = require("express");
const Resume = require("../model/resume");

const router = express.Router();

router.get("/resumes", async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/resume", async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const savedResume = await newResume.save();
    res.json(savedResume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/resume/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put("/resume/:id", async (req, res) => {
  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.json(updatedResume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete("/resume/:id", async (req, res) => {
  try {
    const deletedResume = await Resume.findByIdAndDelete(req.params.id);
    if (!deletedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.json({ message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
