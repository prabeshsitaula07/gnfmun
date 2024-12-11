import { useState, useEffect } from "react";
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
                <span className="text-white font-semibold">Call us: +123 456 7890 | Email: info@example.com</span>
            </div>

            <nav className="flex justify-between items-center border border-gray-30 mt-1 px-4">
                <a href="#">
                    <img src={logo} alt="" className="h-24 w-auto mx-auto" />
                </a>
                {/* Navbar Links */}
                <ul
                    className={`flex flex-col md:flex-row md:static md:space-x-8 md:w-auto items-center md:transform-none transition-transform duration-300 font-primaryfont font ${isMenuOpen
                            ? "absolute top-16 left-0 w-full bg-white shadow-lg z-20"
                            : "hidden md:flex"
                        }`}
                >
                    <li className="my-4 md:my-0">
                        <a
                            href="#"
                            className="text-black text-2xl hover:text-primary"
                            onClick={closeMenu}
                        >
                            Home
                        </a>
                    </li>
                    <li className="my-4 md:my-0">
                        <a
                            href="#"
                            className="text-black text-2xl hover:text-primary"
                            onClick={closeMenu}
                        >
                            About
                        </a>
                    </li>
                    <li className="my-4 md:my-0">
                        <a
                            href="#"
                            className="text-black text-2xl hover:text-primary"
                            onClick={closeMenu}
                        >
                            Projects
                        </a>
                    </li>
                    <li className="my-4 md:my-0">
                        <a
                            href="#"
                            className="text-black text-2xl hover:text-primary"
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
