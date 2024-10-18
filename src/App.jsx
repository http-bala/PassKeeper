// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import PasswordManager from './components/PasswordManager';

const App = () => {
  const handleLogout = () => {
    console.log('User logged out');
    // Perform any logout action here, such as clearing auth tokens or redirecting to the login page.
  };

  return (
    <Router>
      <div>
        {/* Include the Navbar */}
        {/* <Navbar onLogout={handleLogout} /> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<PasswordManager />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
