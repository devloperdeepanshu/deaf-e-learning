import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">All Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow hover:shadow-xl transition">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Link
                to={`/courses/${course.id}`}
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                View Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
