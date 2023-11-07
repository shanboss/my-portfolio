// Navbar.js

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800 py-5">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">
          Manu Shanbhog
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#projects" className="text-slate-500 hover:text-white">
            Projects
          </a>
          <a href="#contact" className="text-slate-500 hover:text-white">
            Contact
          </a>
          <a href="#" className="text-slate-500   hover:text-white">
            Services
          </a>
          <a href="#" className="text-slate-500  hover:text-white">
            About
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="mobile-menu-button p-2 focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 md:mt-0`}
        >
          <a href="#" className="block text-white mb-2">
            Home
          </a>
          <a href="#" className="block text-white mb-2">
            About
          </a>
          <a href="#" className="block text-white mb-2">
            Services
          </a>
          <a href="#" className="block text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
