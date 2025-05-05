import React from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaStar, FaHandsHelping } from "react-icons/fa";
import img1 from "../assets/Copy+of+Digital+marketing+flyer.jpg";
const Home = () => {
  return (
    <div className="bg-gray-50 cursor-pointer">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-24">
        <div className="w-full px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Empowering Deaf & Mute Learning with Sign Language
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Learn through interactive lessons and immersive sign language tutorials.
          </p>
          <div className="flex justify-center gap-8">
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="w-full px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-purple-100 p-8 rounded-lg shadow-lg transition hover:shadow-xl">
              <FaPlay size={48} className="text-purple-700 mb-6" />
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Interactive Lessons</h3>
              <p className="text-gray-600">
                Engage with visually rich lessons and sign language demonstrations.
              </p>
            </div>

            <div className="bg-purple-100 p-8 rounded-lg shadow-lg transition hover:shadow-xl">
              <FaStar size={48} className="text-purple-700 mb-6" />
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Certified Instructors</h3>
              <p className="text-gray-600">
                Learn from experts with years of experience in Deaf Education and Sign Language.
              </p>
            </div>

            <div className="bg-purple-100 p-8 rounded-lg shadow-lg transition hover:shadow-xl">
              <FaHandsHelping size={48} className="text-purple-700 mb-6" />
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Supportive Community</h3>
              <p className="text-gray-600">
                Join a community of learners and instructors who are passionate about helping each other grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-24">
        <div className="w-full px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Our Popular Courses
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white text-purple-700 w-64 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={img1}
                alt="Course 1"
                className="w-full h-36 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Introduction to Sign Language</h3>
              <p className="text-gray-600 mb-4">Start your journey into learning sign language from scratch!</p>
              <Link to="/courses/1" className="text-purple-700 font-semibold hover:underline">
                Learn More
              </Link>
            </div>

            <div className="bg-white text-purple-700 w-64 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={img1}
                alt="Course 2"
                className="w-full h-36 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Advanced Sign Language</h3>
              <p className="text-gray-600 mb-4">For those who already know the basics and want to dive deeper.</p>
              <Link to="/courses/2" className="text-purple-700 font-semibold hover:underline">
                Learn More
              </Link>
            </div>

            <div className="bg-white text-purple-700 w-64 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={img1}
                alt="Course 3"
                className="w-full h-36 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Sign Language for Kids</h3>
              <p className="text-gray-600 mb-4">Fun and engaging way to teach young learners sign language.</p>
              <Link to="/courses/3" className="text-purple-700 font-semibold hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-10">
            What Our Students Say
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-lg text-gray-600 mb-4">
                "This platform has been a life-changer. I learned Sign Language at my own pace, and the instructors are amazing!"
              </p>
              <h4 className="text-purple-700 font-semibold">Sarah J.</h4>
              <p className="text-gray-500">Student</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-lg text-gray-600 mb-4">
                "I never thought learning sign language could be this easy and fun. The community is so supportive!"
              </p>
              <h4 className="text-purple-700 font-semibold">John W.</h4>
              <p className="text-gray-500">Student</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-lg text-gray-600 mb-4">
                "I was able to learn Sign Language and improve my communication skills thanks to this wonderful platform."
              </p>
              <h4 className="text-purple-700 font-semibold">Emily R.</h4>
              <p className="text-gray-500">Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-purple-700 text-white py-20 text-center">
        <div className="w-full px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-lg mb-8">
            Join thousands of students and start your learning journey with us today. Learn Sign Language at your own pace.
          </p>
          <div className="flex justify-center gap-8">
            <Link
              to="/register"
              className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Create Account
            </Link>
            <Link
              to="/courses"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="w-full px-6 text-center">
          <p>&copy; 2025 Deaf & Dumb E-Learning Platform. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
