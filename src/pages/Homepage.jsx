import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-blue-600">Zidio Task Manager</h1>
        <div className="space-x-4">
          <Link to="/auth/login">
            <button className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">
              Login
            </button>
          </Link>
          <Link to="/auth/signup">
            <button className="px-4 py-2 rounded-xl bg-gray-200 text-blue-600 hover:bg-gray-300 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-6 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Zidio Task Management
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 mb-6">
          Zidio is a leading task management company helping teams and individuals stay
          organized, productive, and ahead of deadlines. Our intuitive dashboard and
          powerful features streamline project tracking and collaboration.
        </p>
        <Link to="/auth/signup">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
            Get Started for Free
          </button>
        </Link>
      </header>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why Choose Zidio?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Task Dashboard</h4>
            <p className="text-gray-600">Visualize your tasks with a clean and organized layout.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Team Collaboration</h4>
            <p className="text-gray-600">Assign tasks, add comments, and work together efficiently.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Progress Tracking</h4>
            <p className="text-gray-600">Track project progress with intuitive charts and reports.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-50 text-center py-6 text-gray-600 text-sm">
        © 2025 Zidio Management. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
