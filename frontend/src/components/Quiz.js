import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/api';

export default function Quiz(){
  const { lessonId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    API.get(`/api/quizzes/${lessonId}`).then(r => setQuestions(r.data)).catch(err => console.error(err));
  }, [lessonId]);

  if (!questions.length) return <div>Loading quiz...</div>;

  const q = questions[idx];

  const choose = (optionIndex) => {
    if (optionIndex === q.answer) setScore(s => s + 1);
    if (idx + 1 < questions.length) setIdx(i => i + 1);
    else finish();
  };

  const finish = async () => {
    // final score already set
    alert(`Quiz finished. Score: ${score}/${questions.length}`);
    const token = localStorage.getItem('token');
    if (token) {
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      try {
        await API.post('/api/progress', { lessonId, score, completed: true });
        alert('Progress saved');
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Login to save progress');
    }
    window.location.href = '/lessons';
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold">Question {idx+1} / {questions.length}</h3>
      <p className="mt-2">{q.question}</p>
      <div className="mt-4 space-y-2">
        {q.options.map((opt, i) => (
          <button key={i} onClick={() => choose(i)} className="w-full text-left border px-3 py-2 rounded">{opt}</button>
        ))}
      </div>
    </div>
  );
}
