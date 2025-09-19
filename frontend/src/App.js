import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Lessons from './components/Lessons';
import LessonDetail from './components/LessonDetail';
import Quiz from './components/Quiz';

function App(){
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:id" element={<LessonDetail />} />
            <Route path="/quiz/:lessonId" element={<Quiz />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
