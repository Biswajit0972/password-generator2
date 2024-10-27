import React from "react";

interface AlertProps {
  password: string;
}

const Alert: React.FC<AlertProps> = ({ password }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full sm:max-w-md transition-transform duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Generated Password:</h2>
      <p className="text-xl font-mono text-blue-600 bg-gray-100 p-2 rounded-md shadow-inner mb-6">{password}</p>
      <p className="text-lg text-gray-700 mb-4">Thank you for using our password generator!</p>
      <p className="text-lg font-semibold text-gray-700 mb-4">- CEO Biswajit Das</p>
      <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 mt-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline transition duration-200"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline transition duration-200"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Alert;
