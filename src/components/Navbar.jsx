// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import profile from './images/profile.jpg'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-pink-600 p-4 text-white flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">PassKeeper</Link>
      </div>

      {/* Nav Items */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        {/* Category Dropdown */}
        <div className="relative">
          <button className="hover:text-gray-300 flex items-center">
            Category 
          </button>
          <div className="absolute mt-2 hidden group-hover:block w-48 bg-white text-gray-700 rounded-lg shadow-lg">
            <Link to="/category1" className="block px-4 py-2 hover:bg-gray-200">Category 1</Link>
            <Link to="/category2" className="block px-4 py-2 hover:bg-gray-200">Category 2</Link>
            <Link to="/category3" className="block px-4 py-2 hover:bg-gray-200">Category 3</Link>
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={toggleDropdown}
          >
            {/* Profile Image */}
            <img
              src={profile}
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-lg z-10">
              <Link to="/profile" className="block px-4 py-2 flex items-center hover:bg-gray-200">
                <FaUserCircle className="mr-2" /> My Profile
              </Link>
              <Link to="/settings" className="block px-4 py-2 flex items-center hover:bg-gray-200">
                <AiOutlineSetting className="mr-2" /> Settings
              </Link>
              <button
                onClick={() => console.log('User logged out')}
                className="block px-4 py-2 w-full text-left flex items-center hover:bg-gray-200"
              >
                <AiOutlineLogout className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
