const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  language: { type: String, default: 'en' },
  tags: [String],
  mediaUrl: String
});

module.exports = mongoose.model('Lesson', LessonSchema);
