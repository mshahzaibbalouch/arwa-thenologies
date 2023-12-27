const express = require("express");
const Questions = require("../model/questions.js");

const router = express.Router();

router.post("/faq" , async (req, res) => {
    try {
      const questionsData = req.body;
      const question = new Questions(questionsData);
  
      const questionData = await question.save();
  
      res.status(200).send({ data: questionData });
    } catch (error) {
      res.status(500).send(error);
    }
  });

router.get('/faq', async (req, res) => {
    try {
      const questions = await Questions.find();
  
      res.status(200).send({ data: questions });
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;