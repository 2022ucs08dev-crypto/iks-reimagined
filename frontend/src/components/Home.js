import React from 'react';

export default function Home(){
  return (
    <div className="text-center mt-12">
      <h1 className="text-4xl font-bold text-indigo-600">IKS Reimagined</h1>
      <p className="mt-4 text-gray-700">Building Smart Learning Solutions for Sanskrit, Vedic Math & Indian Heritage</p>
      <div className="mt-8">
        <a href="/lessons" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg">Explore Lessons</a>
      </div>
    </div>
  );
}
