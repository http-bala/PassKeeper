// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaTag, FaUser, FaCog, FaSignOutAlt, FaChevronRight } from 'react-icons/fa'; // Import the Chevron icon
import { BiSupport } from "react-icons/bi";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // State to manage dropdown

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <>
      <div className="lg:hidden p-4 bg-gray-900 bg-opacity-80 text-gray-300 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-semibold">Password Manager</h1>
        <button onClick={toggleSidebar} aria-label="Toggle sidebar">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div className={`lg:flex flex-col bg-purple-800 text-white fixed inset-y-0 left-0 w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="py-6">
          <h2 className="text-2xl font-bold text-white mb-6 px-4">Menu</h2>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="w-full px-4 py-2 flex items-center transition duration-300 bg-white bg-opacity-0 backdrop-blur hover:bg-opacity-30">
              <FaHome className="mr-3" /> Home
            </Link>
            <Link to="/profile" className="w-full px-4 py-2 flex items-center transition duration-300 bg-white bg-opacity-0 backdrop-blur hover:bg-opacity-30">
              <FaUser className="mr-3" /> Profile
            </Link>
            <Link to="/settings" className="w-full px-4 py-2 flex items-center transition duration-300 bg-white bg-opacity-0 backdrop-blur hover:bg-opacity-30">
              <FaCog className="mr-3" /> Settings
            </Link>
            <Link to="/Support" className="w-full px-4 py-2 flex items-center transition duration-300 bg-white bg-opacity-0 backdrop-blur hover:bg-opacity-30">
              <BiSupport  className="mr-3" /> Support
            </Link>
            <Link to="/logout" className="w-full px-4 py-2 flex items-center transition duration-300 bg-white bg-opacity-0 backdrop-blur hover:bg-opacity-30">
              <FaSignOutAlt className="mr-3" /> Logout
            </Link>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Sidebar;
