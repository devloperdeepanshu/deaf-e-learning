import React from 'react';
import { FaHandsHelping, FaBookOpen, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-purple-700 text-white py-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering the Deaf and Mute community through accessible, high-quality sign language education.
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-16 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-8 text-center max-w-4xl mx-auto">
          We believe that everyone deserves the right to education. Our platform is designed specifically
          to support Deaf and Mute individuals through sign language-based learning. With expert instructors,
          a supportive community, and interactive content, we are committed to creating equal learning opportunities.
        </p>
      </motion.section>

      {/* Values Cards */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {[{
            icon: <FaHandsHelping size={40} className="text-purple-600 mx-auto mb-4" />,
            title: "Inclusivity First",
            text: "We design every lesson with accessibility and user empowerment in mind.",
          }, {
            icon: <FaBookOpen size={40} className="text-purple-600 mx-auto mb-4" />,
            title: "Expert-Led Content",
            text: "All our courses are built and led by professionals fluent in sign language education.",
          }, {
            icon: <FaHeart size={40} className="text-purple-600 mx-auto mb-4" />,
            title: "Community Support",
            text: "Learn alongside a passionate community of students and educators.",
          }].map((item, i) => (
            <motion.div
              key={i}
              className="bg-purple-100 p-6 rounded-lg text-center shadow hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.2 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-purple-700 text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
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
      </motion.section>
    </div>
  );
};

export default About;
