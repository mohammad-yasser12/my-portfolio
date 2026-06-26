// components/Contact.tsx
'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) alert('Message sent!');
    else alert('Error sending message.');
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
        <input type="email" placeholder="Your Email" className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
        <textarea placeholder="Message" rows={5} className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} required />
        <button type="submit" className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Send</button>
      </form>
    </section>
  );
}