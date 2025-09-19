import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-bold text-indigo-600">IKS Reimagined</Link>
          <div className="text-sm text-gray-500">Sanskrit • Vedic Math • Heritage</div>
        </div>
        <div className="space-x-4">
          <Link to="/lessons" className="text-gray-700 hover:text-indigo-600">Lessons</Link>
          <Link to="/register" className="text-gray-700 hover:text-indigo-600">Register</Link>
          <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
        </div>
      </div>
    </nav>
  );
}
