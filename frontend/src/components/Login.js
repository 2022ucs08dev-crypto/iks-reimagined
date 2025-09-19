import React, { useState } from 'react';
import API, { setAuthToken } from '../utils/api';

export default function Login(){
  const [form, setForm] = useState({ email:'', password:'' });
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/auth/login', form);
      const { token } = res.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      alert('Logged in');
      window.location.href = '/lessons';
    } catch (err) {
      alert(err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <input name="email" onChange={handle} required placeholder="Email" type="email" className="w-full border px-3 py-2 rounded"/>
        <input name="password" onChange={handle} required placeholder="Password" type="password" className="w-full border px-3 py-2 rounded"/>
        <button className="w-full bg-indigo-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
