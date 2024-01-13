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

  router.put("/faq/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const questionsData = req.body;
  
      // Assuming Questions is the model you are using
      const question = await Questions.findByIdAndUpdate(id, questionsData, { new: true });
  
      if (!question) {
        return res.status(404).send({ error: 'Question not found' });
      }
  
      res.status(200).send({ data: question });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
router.get('/faq', async (req, res) => {
    try {
      const questions = await Questions.find();
  
      res.status(200).json({ data: questions });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  router.get('/faq/:id', async (req, res) => {
    try {
        const question = await Questions.findById(req.params.id);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        res.status(200).json({ data: question });
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;