const express = require("express");
const router = express.Router();
const Team = require("../model/allteam");
const { Op } = require("sequelize");

// Create a new team member
router.post("/team", async (req, res) => {
  try {
    const teamMember = await Team.create(req.body);
    res.status(201).json({ teamMember });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all team members
router.get("/team", async (req, res) => {
  try {
    const teamMembers = await Team.find();
    res.status(200).json({ teamMembers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get reqeust on the basis of skill

router.post("/team/skill", async (req, res) => {
  try {
    const { skills } = req.body;
    console.log("Catagory is: " + skills);
    const teamMember = await Team.find({
      where: {
        skills: {
          [Op.in]: [skills],
        },
      },
    });
    res.status(200).json({ teamMember });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a team member by ID
router.get("/team/:id", async (req, res) => {
  try {
    const teamMember = await Team.findById(req.params.id);

    if (!teamMember) {
      return res.status(404).json({ error: "Team member not found" });
    }

    res.status(200).json({ teamMember });
  } catch (error) {
    if (error.name === 'CastError') {
      // Handle invalid ObjectId format
      return res.status(400).json({ error: "Invalid team member ID" });
    }
    // Handle other types of errors
    res.status(500).json({ error: error.message });
  }
});


// Update a team member by ID
router.put("/team/:id", async (req, res) => {
  try {
    const teamMember = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!teamMember) {
      return res.status(404).json({ error: "Team member not found" });
    }
    res.status(200).json({ teamMember });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a team member by ID
router.delete("/team/:id", async (req, res) => {
  try {
    const teamMember = await Team.findByIdAndDelete(req.params.id);
    if (!teamMember) {
      return res.status(404).json({ error: "Team member not found" });
    }
    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
