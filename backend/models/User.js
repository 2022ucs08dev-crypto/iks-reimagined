const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  score: Number,
  completed: { type: Boolean, default: false },
  updatedAt: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  points: { type: Number, default: 0 },
  progress: [ProgressSchema]
});

module.exports = mongoose.model('User', UserSchema);
