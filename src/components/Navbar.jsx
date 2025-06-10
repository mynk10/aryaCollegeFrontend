import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/arya-logo.png"; // Adjust the path based on your folder structure
import { navItems } from "../utils/navItems";

const Navbar = () => {


  return (
    <nav className="bg-white shadow-sm">
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
                to={`/${item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-semibold poppins-font"
                    : "text-gray-600 hover:text-red-600 transition poppins-font"
                }
              >
                {item}
              </NavLink>
              {/* Red dot for active link */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-1 w-1.5 h-1.5 rounded-full bg-red-500 ${
                  item === "Home" ? "block" : "hidden"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
