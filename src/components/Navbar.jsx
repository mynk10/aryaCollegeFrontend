import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/arya-logo.png";
import { navItems } from "../utils/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Arya Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Nav Links  */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <NavLink
                  to={`/${
                    item === "Home"
                      ? ""
                      : item.toLowerCase().replace(/\s+/g, "-")
                  }`}
                  className={({ isActive }) =>
                    `block text-sm font-medium poppins-font ${
                      isActive
                        ? "text-red-600 font-semibold"
                        : "text-gray-600 hover:text-red-600 transition"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item}
                      {isActive && (
                        <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-1.5 h-1.5 rounded-full bg-red-500" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-red-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Hidden by default */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="pt-4 pb-2 space-y-3">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <NavLink
                  to={`/${
                    item === "Home"
                      ? ""
                      : item.toLowerCase().replace(/\s+/g, "-")
                  }`}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium poppins-font ${
                      isActive
                        ? "text-red-600 font-semibold bg-red-50"
                        : "text-gray-600 hover:text-red-600 hover:bg-red-50 transition"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      {item}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-500" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
