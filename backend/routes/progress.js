const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// save/update progress { lessonId, score, completed }
router.post('/', auth, async (req, res) => {
  try {
    const { lessonId, score, completed } = req.body;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const idx = user.progress.findIndex(p => String(p.lessonId) === String(lessonId));
    if (idx >= 0) {
      user.progress[idx].score = score;
      user.progress[idx].completed = completed;
      user.progress[idx].updatedAt = new Date();
    } else {
      user.progress.push({ lessonId, score, completed });
    }

    user.points = user.points + (score || 0);
    await user.save();
    res.json({ msg: 'Progress saved', progress: user.progress });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
