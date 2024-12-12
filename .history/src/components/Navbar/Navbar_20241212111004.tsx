// ResponsiveNavbar.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
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
        <div className="bg-primary text-white py-2 px-12 text-lg flex justify-between items-center font-primaryfont">
          <div>
            <span>Email: info@example.com</span>
            <span className="mx-4">|</span>
            <span>Phone: +123-456-7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Follow us:</span>
            <a href="#" className="text-white hover:text-blue-500">
              <FaFacebook className="inline-block" />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FaTwitter className="inline-block" />
            </a>
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
            <Link to='/'>
            <img src={logo} alt="gnfmun" className="h-20" />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul
            className={`md:flex space-x-6 text-gray-700 font-medium text-lg font-navfont ${
              isMenuOpen ? "block" : "hidden"
            } md:block md:static bg-white w-full md:w-auto left-0 top-full md:top-auto md:translate-x-0 transition-all duration-300`}
          >
            <li>
              <Link to="#" className="block md:inline-block px-4 py-2 hover:text-primary">Home</Link>
            </li>
            <li>
              <Link to="/about/gallery" className="block md:inline-block px-4 py-2 hover:text-primary">About</Link>
            </li>
            <li>
              <Link to="#" className="block md:inline-block px-4 py-2 hover:text-primary">Services</Link>
            </li>
            <li>
              <Link to="#" className="block md:inline-block px-4 py-2 hover:text-primary">Contact</Link>
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
