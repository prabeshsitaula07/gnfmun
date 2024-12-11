import { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Detect scroll position to toggle visibility of contact info
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <header className="px-6 md:px-14 my-10 fixed w-full bg-white z-50">
            {/* Contact Info */}
            <div
                className={`fixed top-0 left-0 w-full bg-primary px-6 py-3 text-center text-sm transition-transform duration-300 ${isScrolled ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="flex items-center justify-center text-white font-semibold gap-4">
                    <span className="flex items-center"><FaPhoneAlt className="mr-2" /> +977 014502020</span>|<span className="flex items-center"><FaEnvelope className="mr-2" /> info@gnfmun.com</span>
                </div>
            </div>
            {/* navlinks */}
            <nav className="flex justify-between items-center px-4 border-b fixed bg">
                <Link to="/">
                    <img src={logo} alt="" className="h-24 w-auto mx-auto" />
                </Link>
                {/* Navbar Links */}
                <ul
                    className={`flex flex-col md:flex-row md:space-x-8 md:w-auto items-center md:transform-none transition-transform duration-300 font-primaryfont text-xl font-semibold ${isMenuOpen
                        ? "absolute top-[6rem] left-0 w-full bg-white shadow-lg z-20"
                        : "hidden md:flex"
                        }`}
                >
                    <li className="my-4 md:my-0">
                        <Link
                            to="/"
                            className="text-black hover:text-primary"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="my-4 md:my-0">
                        <Link
                            to="/about/gallery"
                            className="text-black hover:text-primary"
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li className="my-4 md:my-0">
                        <a
                            href="#"
                            className="text-black hover:text-primary"
                            onClick={closeMenu}
                        >
                            Projects
                        </a>
                    </li>
                    <li className="my-4 md:my-0">
                        <a
                            href="#"
                            className="text-black hover:text-primary"
                            onClick={closeMenu}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                {/* Hamburger Menu */}
                <div
                    className="md:hidden cursor-pointer z-30"
                    onClick={toggleMenu}
                >
                    <span
                        className={`block w-6 h-1 bg-black transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-6 h-1 bg-black my-1 transition-opacity ${isMenuOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-6 h-1 bg-black transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </div>
            </nav>


        </header>
    );
};

export default Navbar;
