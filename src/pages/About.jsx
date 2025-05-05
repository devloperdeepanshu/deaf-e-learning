import React from 'react';
import { FaHandsHelping, FaBookOpen, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-purple-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering the Deaf and Mute community through accessible, high-quality sign language education.
        </p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-8 text-center max-w-4xl mx-auto">
          We believe that everyone deserves the right to education. Our platform is designed specifically
          to support Deaf and Mute individuals through sign language-based learning. With expert instructors,
          a supportive community, and interactive content, we are committed to creating equal learning opportunities.
        </p>
      </section>

      <section className="py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          <div className="bg-purple-100 p-6 rounded-lg text-center shadow hover:shadow-xl transition">
            <FaHandsHelping size={40} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Inclusivity First</h3>
            <p className="text-gray-600">
              We design every lesson with accessibility and user empowerment in mind.
            </p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg text-center shadow hover:shadow-xl transition">
            <FaBookOpen size={40} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Expert-Led Content</h3>
            <p className="text-gray-600">
              All our courses are built and led by professionals fluent in sign language education.
            </p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg text-center shadow hover:shadow-xl transition">
            <FaHeart size={40} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Community Support</h3>
            <p className="text-gray-600">
              Learn alongside a passionate community of students and educators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
        <p className="text-lg mb-8">
          Whether you're a learner, teacher, or supporter — there's a place for you here.
        </p>
        <a
          href="/register"
          className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Involved
        </a>
      </section>
    </div>
  );
};

export default About;

