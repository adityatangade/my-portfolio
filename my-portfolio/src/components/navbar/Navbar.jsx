import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='bg-white border-b shadow-md text-gray-800 flex justify-between items-center p-4'>
        <div className="logo text-xl">MY-LOGO</div>
        
        {/* Menu for larger screens */}
        <ul className="menu hidden md:flex gap-10 text-lg">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
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
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
