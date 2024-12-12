// ResponsiveNavbar.tsx
import { useState, useEffect } from "react";
import logo from '../../assets/logo.png'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Contact Info Section */}
      {!isScrolled && (
        <div className="bg-gray-800 text-white py-2 px-12 text-sm flex justify-between items-center">
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
        className={`bg-white shadow-md py-4 px-12 transition-all duration-300 ${
          isScrolled ? "sticky top-0" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 block">
            <Link to='/'></Link>
          </div>

          {/* Navigation Links */}
          <ul
            className={`md:flex space-x-6 text-gray-700 font-medium ${
              isMenuOpen ? "block" : "hidden"
            } md:block md:static bg-white w-full md:w-auto left-0 top-full md:top-auto md:translate-x-0 transition-all duration-300`}
          >
            <li>
              <a href="#" className="block md:inline-block px-4 py-2 hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="#" className="block md:inline-block px-4 py-2 hover:text-blue-600">About</a>
            </li>
            <li>
              <a href="#" className="block md:inline-block px-4 py-2 hover:text-blue-600">Services</a>
            </li>
            <li>
              <a href="#" className="block md:inline-block px-4 py-2 hover:text-blue-600">Contact</a>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
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
