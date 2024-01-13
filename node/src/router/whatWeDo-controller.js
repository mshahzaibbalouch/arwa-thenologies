const express = require("express");
const router = express.Router();
const WhatWeDo = require("../model/whatWeDo");

// Create a WhatWeDo item
router.post("/whatwedo", async (req, res) => {
  try {
    const whatWeDoItem = new WhatWeDo(req.body);
    await whatWeDoItem.save();
    res.status(201).send(whatWeDoItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all WhatWeDo items
router.get("/whatwedo", async (req, res) => {
  try {
    const whatWeDoItems = await WhatWeDo.find();
    res.status(200).json({ whatWeDoItems });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific WhatWeDo item by ID
router.get("/whatwedo/:id", async (req, res) => {
  try {
    const whatWeDoItem = await WhatWeDo.findById(req.params.id);
    if (!whatWeDoItem) {
      return res.status(404).send({ error: "WhatWeDo item not found" });
    }
    res.status(200).send(whatWeDoItem);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a WhatWeDo item by ID
router.patch("/whatwedo/:id", async (req, res) => {
  try {
    const whatWeDoItem = await WhatWeDo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!whatWeDoItem) {
      return res.status(404).send({ error: "WhatWeDo item not found" });
    }
    res.status(200).send(whatWeDoItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a WhatWeDo item by ID
router.delete("/whatwedo/:id", async (req, res) => {
  try {
    const whatWeDoItem = await WhatWeDo.findByIdAndDelete(req.params.id);
    if (!whatWeDoItem) {
      return res.status(404).send({ error: "WhatWeDo item not found" });
    }
    res.status(200).send(whatWeDoItem);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
