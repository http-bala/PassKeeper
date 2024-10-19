// src/components/PasswordManager.jsx
import React, { useState } from 'react';
import PasswordList from './PasswordList';
import PasswordDetail from './PasswordDetail';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PasswordManager = () => {
  const [passwords] = useState([
    { site: 'github.com', username: 'http-bala', password: 'Mahesh7600@', accounts: 1 },
    { site: 'google.com', username: 'example@gmail.com', password: 'ExamplePass123', accounts: 5 },
    { site: 'heroku.com', username: 'heroku_user', password: 'Heroku123@', accounts: 2 },
    // Add more sites as needed
  ]);

  const [selectedPassword, setSelectedPassword] = useState(null);

  const handleView = (password) => {
    setSelectedPassword(password);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow lg:ml-64 bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Password Manager Content */}
        <div className="p-6">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            {!selectedPassword ? (
              <PasswordList passwords={passwords} onView={handleView} />
            ) : (
              <PasswordDetail password={selectedPassword} goBack={() => setSelectedPassword(null)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordManager;
