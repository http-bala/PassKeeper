// src/components/Login.jsx
import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode';

// Note: Replace `YOUR_CLIENT_ID` with your Google OAuth client ID

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    onLogin(); // Call login handler
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle Google OAuth success
  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);
    console.log('Google user:', decoded);
    onLogin(); // Simulate successful login after OAuth
  };

  // Function to handle Google OAuth failure
  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed', error);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="text-center">
          {/* Logo */}
          {/* <img
            className="w-20 mx-auto mb-6"
            src="/path-to-your-logo/logo.png"
            alt="Logo"
          /> */}

          <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">PassKeeper</h1>

          {/* Form for username/password login */}
          <form onSubmit={handleLogin}>
            {/* Username Field */}
            <div className="mb-4">
              <label className="block text-left text-gray-600 font-medium mb-2">Username</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password Field with Toggle */}
            <div className="mb-6 relative">
              <label className="block text-left text-gray-600 font-medium mb-2">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute inset-y-0 right-0 top-8 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="text-gray-500 h-5 w-5" />
                ) : (
                  <AiFillEye className="text-gray-500 h-5 w-5" />
                )}
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-700 to-pink-600 text-white w-full py-2 rounded-lg hover:bg-gradient-to-l from-pink-600 to-purple-700 flex justify-center items-center"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center mt-6 mb-6">
            <span className="text-gray-400">OR</span>
          </div>

          {/* Google OAuth Login Button */}
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
