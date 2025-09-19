const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  question: String,
  options: [String],
  answer: Number
});

module.exports = mongoose.model('Quiz', QuizSchema);
