import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Intro to Sign Language',
      description: 'Perfect for beginners to learn basic signs.',
      image: 'https://via.placeholder.com/400',
    },
    {
      id: 2,
      title: 'Intermediate Sign Practice',
      description: 'Improve your fluency and sentence building.',
      image: 'https://via.placeholder.com/400',
    },
    {
      id: 3,
      title: 'Advanced Communication',
      description: 'Master sign language for professional use.',
      image: 'https://via.placeholder.com/400',
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold text-purple-700 mb-8 text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        All Courses
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2 }}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Link
                to={`/courses/${course.id}`}
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-all"
              >
                View Course
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;
