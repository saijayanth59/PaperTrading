import React from "react";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-lg font-bold text-gray-700">PaperTrading</div>

      {/* Centered Search Bar */}
      <div className="flex-grow max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
        />
      </div>

      {/* Links on the right */}
      <div className="flex space-x-4">
        <a
          href="/positions"
          className="text-gray-700 hover:text-blue-500 transition duration-300"
        >
          Positions
        </a>
        <a
          href="/performance"
          className="text-gray-700 hover:text-blue-500 transition duration-300"
        >
          Performance
        </a>
      </div>
    </nav>
  );
}
