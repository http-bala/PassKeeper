// src/components/PasswordList.jsx
import React, { useState } from "react";
import { MdOutlineViewList } from "react-icons/md"; // Keep the existing icon
import { IoEarth } from "react-icons/io5"; // Import the IoEarth icon
import { CiSearch } from "react-icons/ci"; // Import the CiSearch icon

const PasswordList = ({ passwords, onView, onAdd }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  // Filter passwords based on the search query
  const filteredPasswords = passwords.filter((password) =>
    password.site.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">PASSWORD</h2>
        <button 
          onClick={onAdd} 
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span className="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add
          </span>
        </button>
      </div>
      
      {/* Search Bar */}
      <div className="mb-4 relative">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} /> {/* Search icon */}
        <input
          type="text"
          placeholder="Search by site..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
          style={{
            backgroundColor: 'white', // Keep the background white
            boxShadow: '0 0 0 2px transparent', // Prevent any default focus ring
            transition: 'box-shadow 0.2s ease-in-out',
          }}
          onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 3px transparent, 0 0 0 5px rgba(255, 0, 255, 0.5)')}
          onBlur={(e) => (e.currentTarget.style.boxShadow = '0 0 0 2px transparent')}
        />
      </div>

      <div className="space-y-2">
        {filteredPasswords.map((password, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 border-b border-gray-300 hover:bg-[#e3e3e8] transition duration-200"
            style={{ margin: 0 }}
          >
            <div className="flex items-center">
              <IoEarth className="mr-2 text-gray-500" size={20} /> {/* Earth icon */}
              <span className="text-lg font-medium">{password.site}</span>
              {password.accounts > 1 && (
                <span className="ml-2 text-sm text-gray-500">
                  ({password.accounts} accounts)
                </span>
              )}
            </div>
            <button
              onClick={() => onView(password)} // Icon click still triggers view action
              className="flex items-center justify-center p-1 text-indigo-500 hover:text-indigo-600 transition duration-200"
            >
              <MdOutlineViewList size={24} /> {/* Displaying the view icon */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordList;
