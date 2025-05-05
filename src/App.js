import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import "./index.css"
const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
         </Routes>
      </main>
    </Router>
  );
};

export default App;
