const router = require("express").Router();
const navbarAbout = require("../model/navbarAbout.js");
const navbarHireTalent = require("../model/navbarHireTalent.js");

router.get("/navbar-hire-talent", async (req, res) => {
  try {
    const hireTalent = await navbarHireTalent.find();
    res.json(hireTalent);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// Get hire talent data by ID

router.get("/navbar-hire-talent/:id", async (req, res) => {
  try {
    const hireTalent = await navbarHireTalent.findById(req.params.id);
    if (!hireTalent) {
      return res.status(404).json({ error: "Not Found" });
    }
    res.json(hireTalent);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// Create hire talent data

router.post("/navbar-hire-talent" , async (req, res) => {
    try {
      const hireTalentsData = req.body;
      const hireTalent = new navbarHireTalent(hireTalentsData);
  
      const hireTalentData = await hireTalent.save();
  
      res.status(200).send({ message: "Hire Talent successfully saved", data: hireTalentData });
    } catch (error) {
      res.status(500).send(error);
    }
  });

// Update hire talent data by ID

router.put("/navbar-hire-talent/:id", async (req, res) => {
  try {
    const hireTalent = await navbarHireTalent.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!hireTalent) {
      return res.status(404).json({ error: "Not Found" });
    }
    res.json(hireTalent);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// Delete hire talent data by ID

router.delete("/navbar-hire-talent/:id", async (req, res) => {
  try {
    const hireTalent = await navbarHireTalent.findByIdAndDelete(req.params.id);
    if (!hireTalent) {
      return res.status(404).json({ error: "Not Found" });
    }
    res.sendStatus(204);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// Get all navbar about data

router.get("/navbar/about", async (req, res) => {
  try {
    const aboutData = await navbarAbout.find({});
    if (aboutData.length === 0) {
      res.status(204).json("Data Not Avalible");
    } else {
      res.status(200).json(aboutData);
    }
  } catch (err) {}
});

// Create a new Navbar About Data

router.post("/navbar/about", async (req, res) => {
  try {
    const { name, cetagory } = req.body;
    const aboutData = await navbarAbout.create({ name, cetagory });

    res.status(200).json(aboutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a Navbar About Data by id

router.get("/navbar/about/:id", async (req, res) => {
  try {
    const aboutData = await navbarAbout.find({});
    if (aboutData.length === 0) {
      res.status(204).json("Data Not Avalible");
    } else {
      res.status(200).json(aboutData);
    }
  } catch (err) {}
});

// Update new Navbar About Data by id

router.put("/navbar/about/:id", async (req, res) => {
  try {
    const aboutData = await navbarAbout.find({});
    if (aboutData.length === 0) {
      res.status(204).json("Data Not Avalible");
    } else {
      res.status(200).json(aboutData);
    }
  } catch (err) {}
});

// Delete Navbar About Data by id
router.delete("/navbar/about/:id", async (req, res) => {
  try {
    const aboutData = await navbarAbout.find({});
    if (aboutData.length === 0) {
      res.status(204).json("Data Not Avalible");
    } else {
      res.status(200).json(aboutData);
    }
  } catch (err) {}
});

module.exports = router;