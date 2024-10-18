// src/components/PasswordDetail.jsx
import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { MdContentCopy } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordDetail = ({ password, goBack }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <button
        onClick={goBack}
        className="mb-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
      >
        Back
      </button>
      <h3 className="text-2xl font-bold mb-4">{password.site}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <div className="mt-1 relative">
            <input
              type="text"
              readOnly
              value={password.username}
              className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
            />
            <button
              onClick={() => copyToClipboard(password.username, 'Username')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
            >
              <MdContentCopy />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1 relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              readOnly
              value={password.password}
              className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
            >
              {isPasswordVisible ? <HiEyeOff /> : <HiEye />}
            </button>
            <button
              onClick={() => copyToClipboard(password.password, 'Password')}
              className="absolute inset-y-0 right-10 flex items-center pr-3 text-gray-600"
            >
              <MdContentCopy />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Site</label>
          <div className="mt-1 relative">
            <input
              type="text"
              readOnly
              value={password.site}
              className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
            />
            <button
              onClick={() => copyToClipboard(password.site, 'Site')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
            >
              <MdContentCopy />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <div className="mt-1 relative">
            <input
              type="text"
              readOnly
              value={password.notes || ''} // Assuming notes can be empty
              className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
            />
            <button
              onClick={() => copyToClipboard(password.notes || '', 'Notes')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
            >
              <MdContentCopy />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Edit</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Delete</button>
      </div>
    </div>
  );
};

export default PasswordDetail;
