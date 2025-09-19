const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');

router.get('/', async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ msg: 'Lesson not found' });
    res.json(lesson);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
