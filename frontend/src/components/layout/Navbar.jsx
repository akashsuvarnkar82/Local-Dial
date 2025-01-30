import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ onCategoryChange, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "All Categories",
    "Grocery Shops",
    "Hospitals",
    "Gyms",
    "Restaurants",
    "Hotels",
    "Pharmacies",
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);

    if (category !== "All Categories") {
      navigate(`/category/${category.toLowerCase().replace(/\s+/g, "-")}`);
    }

    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const handleSearch = () => {
    if (onFilter) {
      onFilter({ searchQuery, selectedCategory });
    }
  };

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0 border-2 border-gray-300 p-2 rounded-lg cursor-pointer hover:scale-105 hover:border-blue-500 transition-all duration-200 ease-in-out">
          <span className="text-3xl font-bold font-serif">Local</span>
          <span className="text-3xl font-bold text-blue-400 font-sans">Dial</span>
        </div>

        <div className="flex-grow"></div>

        {/* Dropdown Input */}
        <div className="relative w-64">
          <input
            type="text"
            className="w-full px-4 py-3 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 cursor-pointer"
            placeholder="Select Category"
            value={selectedCategory}
            readOnly
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          />
          {isDropdownOpen && (
            <div className="absolute z-20 bg-white border text-black rounded-lg mt-1 w-full shadow-xl overflow-hidden transition-all duration-300">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-200"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="ml-6"></div>

        {/* Navigation Links */}
        <div className="text-lg hidden md:flex items-center space-x-6">
          <Link to="/home" className="hover:text-orange-200 transition duration-300">Home</Link>
          <Link to="/aboutus" className="hover:text-orange-200 transition duration-300">About Us</Link>
          <Link to="/services" className="hover:text-orange-200 transition duration-300">Services</Link>
          <Link to="/login" className="hover:text-orange-200 transition duration-300">Add Your Services</Link>
        </div>

        {/* Sign Up Button */}
        <div className="ml-4">
          <Link to="/register" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-orange-400 transition duration-300 shadow-md">
            Sign Up/Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;