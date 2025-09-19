require('dotenv').config();
const mongoose = require('mongoose');
const Lesson = require('./models/Lesson');
const Quiz = require('./models/Quiz');

const sampleLessons = [
  {
    title: 'Introduction to Sanskrit',
    description: 'Basics of Sanskrit language and script.',
    content: '<h3>Introduction to Sanskrit</h3><p>Sanskrit is an ancient language of India. नमस्ते (namaste) is a common greeting.</p>',
    language: 'sa',
    tags: ['sanskrit','language']
  },
  {
    title: 'Vedic Math - Multiplication Trick',
    description: 'A quick technique for multiplication.',
    content: '<h3>Vedic Math - Multiplication Trick</h3><p>Use crosswise technique for faster calculation.</p>',
    language: 'en',
    tags: ['vedic-math']
  },
  {
    title: 'Indian Heritage - Ajanta Caves',
    description: 'Short history of Ajanta paintings',
    content: '<h3>Ajanta Caves</h3><p>The Ajanta caves are rock-cut Buddhist monuments famous for their paintings.</p>',
    language: 'en',
    tags: ['heritage']
  }
];

const sampleQuizzes = [
  {
    question: 'Which script is Sanskrit traditionally written in?',
    options: ['Devanagari', 'Latin', 'Arabic', 'Tamil'],
    answer: 0
  },
  {
    question: 'Vedic math trick is primarily used for?',
    options: ['Faster calculations', 'Cooking', 'Music', 'Sewing'],
    answer: 0
  },
  {
    question: 'Which site is famous for ancient paintings?',
    options: ['Ajanta Caves', 'Eiffel Tower', 'Great Wall', 'Machu Picchu'],
    answer: 0
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected for seeding');

    await Lesson.deleteMany({});
    await Quiz.deleteMany({});

    const createdLessons = await Lesson.insertMany(sampleLessons);

    // link quizzes to lessons
    sampleQuizzes[0].lesson = createdLessons[0]._id;
    sampleQuizzes[1].lesson = createdLessons[1]._id;
    sampleQuizzes[2].lesson = createdLessons[2]._id;

    await Quiz.insertMany(sampleQuizzes);

    console.log('Seeding done');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
