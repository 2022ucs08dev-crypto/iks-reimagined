import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../utils/api';

export default function LessonDetail(){
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  useEffect(() => {
    API.get('/api/lessons/' + id).then(r => setLesson(r.data)).catch(err => console.error(err));
  }, [id]);

  if(!lesson) return <div>Loading...</div>;
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold">{lesson.title}</h2>
      <div className="mt-4 prose" dangerouslySetInnerHTML={{ __html: lesson.content }} />
      <div className="mt-4">
        <Link to={`/quiz/${lesson._id}`} className="bg-indigo-600 text-white px-4 py-2 rounded">Start Quiz</Link>
      </div>
    </div>
  );
}
