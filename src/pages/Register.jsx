import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Register = () => {
  const { login } = useAppContext();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name, username });
    navigate('/dashboard');
  };

  return (
    <motion.div
      className="max-w-md mx-auto p-8 bg-white shadow-2xl rounded-2xl mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-extrabold text-center mb-6 text-purple-700">
        Create an Account
      </h2>
      <p className="text-center text-gray-500 mb-8">Join our learning platform today</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-1 text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold mb-1 text-gray-700" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1 text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg font-semibold transition"
        >
          Register
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Register;
