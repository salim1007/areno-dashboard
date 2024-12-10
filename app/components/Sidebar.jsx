'use client'

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/animations.css';


export const Sidebar = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 p-2 bg-[#2090D0] text-white rounded-md lg:hidden ${isLoaded ? 'fade-in' : 'opacity-0'}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isLoaded ? 'fade-in' : 'opacity-0'}`}
      >
        <nav className="flex flex-col items-center mt-16">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={toggleSidebar}
              className="text-white py-2 px-4 w-full text-left hover:bg-blue-500 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

