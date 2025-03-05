"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!`);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10 pt-20">
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
        
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-gray-300">Name:</label>
          <input 
            type="text" name="name" onChange={handleChange} 
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name" required 
          />

          <label className="block mb-2 text-gray-300">Email:</label>
          <input 
            type="email" name="email" onChange={handleChange} 
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email" required 
          />

          <label className="block mb-2 text-gray-300">Message:</label>
          <textarea 
            name="message" rows="4" onChange={handleChange} 
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..." required 
          />

          <button 
            type="submit" 
            className="mt-6 w-full p-3 bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
