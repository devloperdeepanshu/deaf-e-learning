import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const CourseDetail = () => {
  const { id } = useParams();

  // This would usually come from a backend or context API
  const course = {
    title: 'Intro to Sign Language',
    description:
      'This course helps you understand the basics of sign language, including letters, greetings, and common words.',
    lessons: [
      'Lesson 1: Alphabet Signs',
      'Lesson 2: Greetings',
      'Lesson 3: Everyday Phrases',
      'Lesson 4: Numbers',
    ],
    image: 'https://via.placeholder.com/800x300',
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.h1
          className="text-4xl font-extrabold text-purple-700 mb-4"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {course.title}
        </motion.h1>

        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {course.description}
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Lessons:
        </motion.h2>

        <motion.ul
          className="list-disc list-inside text-gray-800 space-y-2 pl-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {course.lessons.map((lesson, index) => (
            <motion.li
              key={index}
              className="text-base"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {lesson}
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          className="mt-6 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Learning
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CourseDetail;
