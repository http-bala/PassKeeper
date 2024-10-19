import React, { useState } from 'react';
import { CiCircleInfo } from 'react-icons/ci'; // Import the info icon

const AddPasswordModal = ({ isOpen, onClose, onSave }) => {
  const [site, setSite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notes, setNotes] = useState('');
  
  // State to track input errors
  const [errors, setErrors] = useState({
    site: false,
    username: false,
    password: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = { site: false, username: false, password: false };
    
    // Validate fields
    if (!site) validationErrors.site = true;
    if (!username) validationErrors.username = true;
    if (!password) validationErrors.password = true;

    setErrors(validationErrors);

    // Only save if there are no validation errors
    if (!validationErrors.site && !validationErrors.username && !validationErrors.password) {
      onSave({ site, username, password, notes });
      clearFields();
      onClose();
    }
  };

  const clearFields = () => {
    setSite('');
    setUsername('');
    setPassword('');
    setNotes('');
    setErrors({ site: false, username: false, password: false }); // Reset errors
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 shadow-lg animate-slide-down" style={{ width: '35%', maxWidth: '80%' }}>
          <h2 className="text-2xl mb-4 font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent ">Add Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1" htmlFor="site">Site</label>
              <input
                id="site"
                type="text"
                value={site}
                onChange={(e) => setSite(e.target.value)}
                className={`border rounded-md p-2 w-full ${errors.site ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.site && (
                <CiCircleInfo className="absolute right-3 top-11 transform -translate-y-1/2 text-red-500" size={20} />
              )}
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1" htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`border rounded-md p-2 w-full ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.username && (
                <CiCircleInfo className="absolute right-3 top-11 transform -translate-y-1/2 text-red-500" size={20} />
              )}
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`border rounded-md p-2 w-full ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.password && (
                <CiCircleInfo className="absolute right-3  top-11 transform -translate-y-1/2 text-red-500" size={20} />
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="border rounded-md p-2 w-full border-gray-300"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-purple-700 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddPasswordModal;
