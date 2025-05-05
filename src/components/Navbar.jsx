import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="bg-purple-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold tracking-wide hover:text-purple-300 transition">
              Deaf E-Learning
            </Link>
            <div className="hidden md:flex space-x-6 ml-6 text-sm font-medium">
              <Link to="/" className="hover:text-purple-300 transition">Home</Link>
              <Link to="/courses" className="hover:text-purple-300 transition">Courses</Link>
              <Link to="/dashboard" className="hover:text-purple-300 transition">Dashboard</Link>
              <Link to="/about" className="hover:text-purple-300 transition">About</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm">Welcome, <strong>{user.name}</strong></span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-gray-200 transition">Login</Link>
                <Link
                  to="/register"
                  className="bg-white text-purple-700 px-4 py-1 rounded hover:bg-gray-100 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

        
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-purple-800"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-purple-300">Home</Link>
            <Link to="/courses" onClick={() => setIsOpen(false)} className="block hover:text-purple-300">Courses</Link>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block hover:text-purple-300">Dashboard</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-purple-300">About</Link>
            {user ? (
              <>
                <span className="block text-sm mt-2">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-red-300 hover:text-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="block hover:text-purple-300">Login</Link>
                <Link to="/register" onClick={() => setIsOpen(false)} className="block hover:text-purple-300">Register</Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
