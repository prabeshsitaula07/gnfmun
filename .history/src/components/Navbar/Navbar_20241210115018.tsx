import { useState } from "react";

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
          Great Nepal H
        </a>
        {/* Navbar Links */}
        <ul
          className={`flex flex-col md:flex-row md:static md:space-x-8 md:w-auto items-center md:transform-none transition-transform duration-300 ${
            isMenuOpen
              ? "fixed top-16 left-0 w-full bg-gray-800 shadow-lg"
              : "hidden md:flex"
          }`}
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
        {/* Hamburger Menu */}
        <div
          className="md:hidden cursor-pointer"
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
