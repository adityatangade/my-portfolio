import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='bg-white border-b shadow-md text-gray-800 flex justify-between items-center p-4'>
        <div className="logo text-xl rounded-2xl overflow-hidden rotate-45">
          <img src={logo} width="50" alt="Aditya"/>
        </div>
        
        {/* Menu for larger screens */}
        <ul className="menu hidden md:flex gap-10 text-lg">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Burger icon for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? (
              <span className="text-4xl">×</span> // Cross icon
            ) : (
              <span className="text-3xl">☰</span> // Burger icon
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu (hidden by default) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <ul className="flex flex-col gap-4 p-5 text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
