import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Left Side - Copyright */}
          <div className="text-center md:text-left">
            <p>&copy; 2024 MySite. All rights reserved.</p>
          </div>

          {/* Right Side - Social Media Links */}
          <div className="mt-4 md:mt-0 flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
