import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/arya-logo.png";
import { navItems } from "../utils/constants";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Arya Logo" className="h-10 w-auto" />
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-sm font-medium items-center">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <NavLink
                to={`/${
                  item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "-")
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
      </div>
    </nav>
  );
};

export default Navbar;
