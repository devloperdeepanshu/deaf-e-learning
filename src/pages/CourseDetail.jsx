import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();

  // This would usually come from a backend or context API
  const course = {
    title: 'Intro to Sign Language',
    description: 'This course helps you understand the basics of sign language, including letters, greetings, and common words.',
    lessons: [
      'Lesson 1: Alphabet Signs',
      'Lesson 2: Greetings',
      'Lesson 3: Everyday Phrases',
      'Lesson 4: Numbers',
    ],
    image: 'https://via.placeholder.com/800x300',
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded shadow-lg p-6">
        <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded mb-6" />
        <h1 className="text-3xl font-bold text-purple-700 mb-4">{course.title}</h1>
        <p className="text-gray-700 mb-6">{course.description}</p>

        <h2 className="text-xl font-semibold text-purple-600 mb-2">Lessons:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {course.lessons.map((lesson, index) => (
            <li key={index}>{lesson}</li>
          ))}
        </ul>

        <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
