import React from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaStar, FaHandsHelping } from "react-icons/fa";
import img1 from "../assets/Copy+of+Digital+marketing+flyer.jpg";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Home = () => {
  return (
    <PageWrapper>
    <motion.div initial="hidden" animate="visible" className="bg-gray-50 cur">
      <motion.section
        variants={fadeUp}
        custom={0}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-24"
      >
        <div className="w-full px-6 text-center">
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6"
          >
            Empowering Deaf & Mute Learning with Sign Language
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl mb-6"
          >
            Learn through interactive lessons and immersive sign language tutorials.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex justify-center gap-8">
            <Link
              to="/register"
              className="bg-purple-700 px-6 py-3 rounded-lg text-white font-semibold hover:bg-purple-800 transition"
            >
              Get Started
            </Link>
            <Link
              to="/courses"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition"
            >
              Browse Courses
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 bg-white">
        <div className="w-full px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.05 }}
                className="bg-purple-100 p-8 rounded-lg shadow-lg transition hover:shadow-xl"
              >
                {[FaPlay, FaStar, FaHandsHelping][i]({
                  size: 48,
                  className: "text-purple-700 mb-6",
                })}
                <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                  {["Interactive Lessons", "Certified Instructors", "Supportive Community"][i]}
                </h3>
                <p className="text-gray-600">
                  {
                    [
                      "Engage with visually rich lessons and sign language demonstrations.",
                      "Learn from experts with years of experience in Deaf Education and Sign Language.",
                      "Join a community of learners and instructors who are passionate about helping each other grow.",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-24">
        <div className="w-full px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Our Popular Courses</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3].map((id, index) => (
              <motion.div
                key={id}
                variants={fadeUp}
                custom={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white text-purple-700 w-64 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={img1}
                  alt={`Course ${id}`}
                  className="w-full h-36 object-cover rounded-md mb-6"
                />
                <h3 className="text-xl font-semibold mb-4">
                  {["Introduction to Sign Language", "Advanced Sign Language", "Sign Language for Kids"][index]}
                </h3>
                <p className="text-gray-600 mb-4">
                  {
                    [
                      "Start your journey into learning sign language from scratch!",
                      "For those who already know the basics and want to dive deeper.",
                      "Fun and engaging way to teach young learners sign language.",
                    ][index]
                  }
                </p>
                <Link to={`/courses/${id}`} className="text-purple-700 font-semibold hover:underline">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
    </PageWrapper>
  );
};

export default Home;
