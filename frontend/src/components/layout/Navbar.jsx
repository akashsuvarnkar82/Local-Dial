import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
// import logo from "../../assets/logo2.png";


const Navbar = ({ onCategoryChange, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (onCategoryChange) {
      onCategoryChange(category); // Call only if the function is provided
    } else {
      console.warn("onCategoryChange is not provided as a prop.");
    }
  };

  const handleSearch = () => {
    if (onFilter) {
      onFilter({ searchQuery, selectedCategory }); // Call only if the function is provided
    } else {
      console.warn("onFilter is not provided as a prop.");
    }
  };

  return (
    <nav className="bg-black text-white text-wh shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0 border-2 border-gray-300 p-2 rounded-lg cursor-pointer hover:scale-105 hover:border-blue-500 transition-all duration-200 ease-in-out">
          <span className="text-3xl font-bold font-serif">Local</span>
          <span className="text-3xl font-bold text-blue-400 font-sans sm:font-serif md:font-mono lg:font-sans xl:font-serif">Dial</span>
        </div>

        {/* Spacer for separation */}
        <div className="flex-grow"></div> {/* Ensures spacing between Logo and Search Bar */}

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 text-black py-2 w-48 md:w-64 border border-blue-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className=" bg-blue-400 text-white px-4 py-2 rounded-r-lg hover:bg-blue-400 transition duration-400"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Category Dropdown */}
        <select
          className="ml-4 px-4 py-2 bg-blue-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All Categories</option>
          <option value="Grocery Shops">Grocery Shops</option>
          <option value="Hospitals">Hospitals</option>
          <option value="Gyms">Gyms</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Hotels">Hotels</option>
          <option value="Pharmacies">Pharmacies</option>
        </select>

        {/* Spacer between Dropdown and Navigation Links */}
        <div className="ml-6"></div> {/* Add a margin for spacing */}

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/home"
            className="hover:text-white transition duration-400 no-underline"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="hover:text-white transition duration-400 no-underline"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="hover:text-white transition duration-400 no-underline"
          >
            Services
          </Link>
          <Link
            to="/addform"
            className="hover:text-white transition duration-400 no-underline"
          >
            AddYourServices
          </Link>
        </div>

        {/* Sign Up Button */}
        <div className="ml-4">
          <Link
            to="/register"
            className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-400 transition duration-400 shadow-md no-underline"
          >
            Login/Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
