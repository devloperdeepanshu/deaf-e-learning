import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const stats = [
    { label: 'Total Courses', value: 12 },
    { label: 'Completed Lessons', value: 28 },
    { label: 'Enrolled Students', value: 98 },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-50 to-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-purple-700 mb-10 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        Dashboard Overview
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold text-gray-500 mb-2">{stat.label}</h2>
            <p className="text-4xl font-bold text-purple-700">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Dashboard;
