import React from 'react'

function Navbar() {
   return (
    <nav className="w-full bg-blue-600 p-4 shadow-md">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        {/* Logo / App Name */}
        <h1 className="text-white text-2xl font-bold">My Todo App</h1>

        {/* Links / Buttons */}
        <div className="flex space-x-4">
          <button className="text-white hover:bg-blue-500 px-3 py-1 rounded transition">
            Home
          </button>
          <button className="text-white hover:bg-blue-500 px-3 py-1 rounded transition">
            About
          </button>
          <button className="text-white hover:bg-blue-500 px-3 py-1 rounded transition">
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar