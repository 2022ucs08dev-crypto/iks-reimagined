const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

router.get('/:lessonId', async (req, res) => {
  try {
    const quizzes = await Quiz.find({ lesson: req.params.lessonId });
    res.json(quizzes);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
