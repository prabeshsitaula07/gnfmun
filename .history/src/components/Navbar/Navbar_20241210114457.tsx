import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-gray-300 bg-gray-800">
      <nav className="flex justify-between items-center px-6 py-4">
        <a href="#" className="text-white text-3xl font-bold">
          CuriousAman
        </a>
        <ul
          className={`fixed top-16 left-0 w-full bg-gray-800 shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } flex flex-col items-center md:static md:flex-row md:transform-none md:shadow-none md:bg-transparent md:space-x-8 md:w-auto`}
        >
          <li className="my-4 md:my-0">
            <a
              href="#"
              className="text-white text-2xl hover:text-indigo-500"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li className="my-4 md:my-0">
            <a
              href="#"
              className="text-white text-2xl hover:text-indigo-500"
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li className="my-4 md:my-0">
            <a
              href="#"
              className="text-white text-2xl hover:text-indigo-500"
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li className="my-4 md:my-0">
            <a
              href="#"
              className="text-white text-2xl hover:text-indigo-500"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          className="hamburger md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-1 bg-white transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-white my-1 transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-white transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
