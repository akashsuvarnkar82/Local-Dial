import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black  text-white py-3 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
        {/* Logo */}
        <div className="flex flex-col items-start justify-center mb-4 md:mb-0 p-2 rounded-lg cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          <div className="flex items-center">
            <span className="text-2xl font-bold font-serif">Local</span>
            <span className="text-2xl font-bold text-blue-400 font-sans sm:font-serif md:font-mono lg:font-sans xl:font-serif">Dial</span>
          </div>
          <p className="text-sm text-gray-400 mt-1 text-center">Connecting your needs with the right local services.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-sm">
          <a
            href="/home"
            className="hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="/aboutus"
            className="hover:text-white transition duration-300"
          >
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-white transition duration-300"
          >
            Services
          </a>
          <a
            href="/contact"
            className="hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 text-sm">
          <a
            href="https://facebook.com"
            className="text-white hover:text-blue-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="text-white hover:text-blue-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="text-white hover:text-blue-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-4">
        <p className="text-xs text-white">
          &copy; {new Date().getFullYear()} LocalDial. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
