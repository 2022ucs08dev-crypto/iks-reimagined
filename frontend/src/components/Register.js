import React, { useState } from 'react';
import API, { setAuthToken } from '../utils/api';

export default function Register(){
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/auth/register', form);
      const { token } = res.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      alert('Registered & logged in');
      window.location.href = '/lessons';
    } catch (err) {
      alert(err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={submit} className="space-y-3">
        <input name="name" onChange={handle} required placeholder="Name" className="w-full border px-3 py-2 rounded"/>
        <input name="email" onChange={handle} required placeholder="Email" type="email" className="w-full border px-3 py-2 rounded"/>
        <input name="password" onChange={handle} required placeholder="Password" type="password" className="w-full border px-3 py-2 rounded"/>
        <button className="w-full bg-indigo-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
}
