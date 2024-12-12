// ResponsiveNavbar.tsx
import React, { useState, useEffect } from "react";

const ResponsiveNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Contact Info Section */}
      {!isScrolled && (
        <div className="bg-gray-800 text-white py-2 px-4 text-sm flex justify-between items-center">
          <div>
            <span>Email: info@example.com</span>
            <span className="mx-4">|</span>
            <span>Phone: +123-456-7890</span>
          </div>
          <div>
            <span>Follow us: </span>
            <a href="#" className="mx-1 hover:underline">Facebook</a>
            <a href="#" className="mx-1 hover:underline">Twitter</a>
          </div>
        </div>
      )}

      {/* Navbar Section */}
      <nav
        className={`bg-white shadow-md py-4 px-6 transition-all duration-300 ${
          isScrolled ? "sticky top-0" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MyLogo</div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#" className="hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">Contact</a>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;