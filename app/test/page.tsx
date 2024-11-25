'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GreetPage() {
  const [name, setName] = useState('Guest');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName(inputValue || 'Guest');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-blue-100 to-pink-200">
      <form
        onSubmit={handleSubmit}
        className="p-10 bg-white rounded-2xl shadow-2xl border border-gray-300 text-center max-w-lg w-full"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Welcome to the Greeting App
        </h1>
        <h2 className="text-lg font-medium text-gray-600 mb-4">
          Enter your name to get started:
        </h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Your name"
          className="px-4 py-3 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6"
        />
        <button
          type="submit"
          className="px-6 py-3 w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-md hover:from-blue-600 hover:to-purple-500 transition-all"
        >
          Submit
        </button>
        <p className="mt-6 text-sm text-gray-500">
          Hello <span className="font-bold text-gray-800">{name}</span>, welcome!
        </p>
      </form>
    </div>
  );
}
