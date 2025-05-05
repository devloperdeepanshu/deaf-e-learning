import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-lg text-gray-600 mb-2">Total Courses</h2>
          <p className="text-3xl font-bold text-purple-700">12</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-lg text-gray-600 mb-2">Completed Lessons</h2>
          <p className="text-3xl font-bold text-purple-700">28</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-lg text-gray-600 mb-2">Enrolled Students</h2>
          <p className="text-3xl font-bold text-purple-700">98</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
  