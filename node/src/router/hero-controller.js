const express = require("express");
const multer = require("multer");
const path = require("path");
const Hero = require("../model/hero.js");

const routerHero = express.Router();

// Set up Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../uploads/"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Serve static files
routerHero.use(express.static("uploads"));

routerHero.post("/hero", async (req, res) => {
  try {
    const herosData = req.body;
    const hero = new Hero(herosData);
    const heroData = await hero.save();

    res
      .status(200)
      .send({ message: "Hero successfully saved", data: heroData });
  } catch (error) {
    res.status(400).send(error);
  }
});

routerHero.get("/hero", async (req, res) => {
  try {
    const heros = await Hero.find();

    res.json(heros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routerHero.put("/hero/:id", async (req, res) => {
  const heroId = req.params.id;
  const updateData = req.body;

  try {
    const updatedHero = await Hero.findByIdAndUpdate(heroId, updateData, {
      new: true,
    });

    if (!updatedHero) {
      return res.status(404).json({ error: "Hero not found" });
    }
    res.json(updatedHero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = routerHero;
