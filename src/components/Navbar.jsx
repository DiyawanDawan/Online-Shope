import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaTags, FaInfoCircle, FaPlus } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center space-x-2 text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition"
      : "flex items-center space-x-2 text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2 transition";

  return (
    <nav className="bg-green-700 border-b border-green-500 shadow-lg fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink className="flex flex-shrink-0 items-center" to="/">
            <span className="text-white text-2xl font-bold ml-2">
              Online Shope
            </span>
          </NavLink>

          {/* Hamburger Button */}
          <button
            className="inline-flex items-center p-2 text-white rounded-lg md:hidden hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-white transition"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"
            } absolute top-20 left-0 w-full bg-green-700 md:static md:w-auto md:translate-y-0 md:opacity-100 transition-all duration-300 ease-in-out md:flex md:space-x-4`}
          >
            <div className="flex flex-col md:flex-row md:space-y-0 space-y-2 px-4 py-6 md:p-0">
              <NavLink to="/" className={linkClass}>
                <FaHome />
                <span>Home</span>
              </NavLink>
              <NavLink to="/produks" className={linkClass}>
                <FaTags />
                <span>Products</span>
              </NavLink>
              <NavLink to="/abaut" className={linkClass}>
                <FaInfoCircle />
                <span>About</span>
              </NavLink>
              <NavLink to="/add-produk" className={linkClass}>
                <FaPlus />
                <span>Add Produk</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
