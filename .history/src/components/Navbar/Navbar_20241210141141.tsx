import { useState } from "react";
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="px-14 my-10">
            <nav className="flex justify-between items-center border border-gray-30 px-4 py-4">
                <a href="#" className="text-primary text-3xl font-bold flex items-center">
                    <img src={logo} alt="" className="h-24 w-auto" />
                    GNFMUN
                </a>
                {/* Navbar Links */}
                <ul
                    className={`flex flex-col md:flex-row md:static md:space-x-8 md:w-auto items-center md:transform-none transition-transform duration-300 ${isMenuOpen
                            ? "top-16 left-0 w-full bg-white shadow-lg z-20"
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
                    className="md:hidden cursor-pointer"
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
