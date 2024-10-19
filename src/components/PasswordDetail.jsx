import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { MdContentCopy } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordDetail = ({ password, goBack }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(false); // State for editable mode
  const [editedPassword, setEditedPassword] = useState(password); // State to hold edited password details

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const handleEdit = () => {
    setIsEditable(true); // Enable editing mode
    toast.info('You can now edit the password details!'); // Show toast notification
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPassword((prev) => ({ ...prev, [name]: value })); // Update edited password details
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
      <h3 className="text-2xl font-bold mb-4">{editedPassword.site}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <div className="mt-1 relative">
            <input
              type="text"
              name="username"
              readOnly={!isEditable}
              value={editedPassword.username}
              onChange={handleChange} // Handle change for username
              className={`w-full px-3 py-2 border rounded-md pr-10 ${!isEditable ? 'border-gray-300' : 'border-blue-500'}`}
            />
            <button
              onClick={() => copyToClipboard(editedPassword.username, 'Username')}
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
              name="password"
              readOnly={!isEditable}
              value={editedPassword.password}
              onChange={handleChange} // Handle change for password
              className={`w-full px-3 py-2 border rounded-md pr-10 ${!isEditable ? 'border-gray-300' : 'border-blue-500'}`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
            >
              {isPasswordVisible ? <HiEyeOff /> : <HiEye />}
            </button>
            <button
              onClick={() => copyToClipboard(editedPassword.password, 'Password')}
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
              name="site"
              readOnly={!isEditable}
              value={editedPassword.site}
              onChange={handleChange} // Handle change for site
              className={`w-full px-3 py-2 border rounded-md pr-10 ${!isEditable ? 'border-gray-300' : 'border-blue-500'}`}
            />
            <button
              onClick={() => copyToClipboard(editedPassword.site, 'Site')}
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
              name="notes"
              readOnly={!isEditable}
              value={editedPassword.notes || ''} // Assuming notes can be empty
              onChange={handleChange} // Handle change for notes
              className={`w-full px-3 py-2 border rounded-md pr-10 ${!isEditable ? 'border-gray-300' : 'border-blue-500'}`}
            />
            <button
              onClick={() => copyToClipboard(editedPassword.notes || '', 'Notes')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
            >
              <MdContentCopy />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 space-x-4">
        <button 
          onClick={handleEdit} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Edit
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Delete</button>
      </div>
    </div>
  );
};

export default PasswordDetail;
