import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/api';

export default function Lessons(){
  const [list, setList] = useState([]);
  useEffect(() => {
    API.get('/api/lessons').then(r => setList(r.data)).catch(err => console.error(err));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {list.map(l => (
          <div key={l._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-lg">{l.title}</h3>
            <p className="text-sm text-gray-600">{l.description}</p>
            <div className="mt-3">
              <Link to={`/lessons/${l._id}`} className="text-indigo-600">Open</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
