"use client"
import { useState } from "react";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const menuItems = ['Home', 'About', 'Services', 'Contact'];
  
    return (
      <nav className="flex justify-between items-center bg-blue-500 p-4">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          /> */}
          <span className="text-white font-semibold text-xl">Your Logo</span>
        </div>
  
        {/* Menu for Small Devices */}
        <div
          className="cursor-pointer text-white text-xl p-2 rounded-md md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </div>
  
        {/* Menu for Medium and Larger Devices */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer text-white hover:bg-blue-600 p-2 rounded-md"
              onClick={() => console.log(`Clicked: ${item}`)} // Replace with your desired click action
            >
              {item}
            </div>
          ))}
        </div>
  
        {/* Dropdown Menu for Small Devices */}
        {isMenuOpen && (
          <div className="md:hidden absolute right-4 top-16 bg-white border border-gray-300 p-2 rounded-md">
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => console.log(`Clicked: ${item}`)} // Replace with your desired click action
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    );
  };
  
  export default Navbar;