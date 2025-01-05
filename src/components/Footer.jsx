

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigate</h4>
          <ul>
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition duration-300"
              >
               Home Page
              </Link>
            </li>
            <li>
              <Link
                to="/produk"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                to="/abaut"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Abaut
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul>
            <li>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Event Planning
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Vendor Rentals
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Custom Design
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Awan Shope. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
