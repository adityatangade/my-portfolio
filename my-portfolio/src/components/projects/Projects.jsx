import React from 'react';
import docker from '../../assets/images/docker.jpeg';
import blockchain from '../../assets/images/blockchain.png';
import web3 from '../../assets/images/web3.webp';

function Projects() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      {/* Project Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600 animate__animated animate__fadeIn animate__delay-1s">
          My Amazing Projects
        </h1>
        <p className="mt-4 text-lg text-gray-700 animate__animated animate__fadeIn animate__delay-2s">
          Explore the projects I've worked on, showcasing my skills and creativity.
        </p>
      </header>

      {/* Project Overview */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 bg-white rounded-lg shadow-md mb-16">
        <h2 className="text-3xl font-semibold text-blue-600 text-center py-4">Project Overview</h2>
        <p className="text-lg text-gray-700 text-center">
          These projects solve real-world problems using the latest technologies and innovative design principles.
        </p>
      </section>

      {/* Project Gallery */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        <h2 className="text-3xl font-semibold text-blue-600 text-center py-4">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="gallery-item rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300">
          <img src={docker} className="w-full h-48 object-cover"/>
          </div>
          <div className="gallery-item rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300">
            <img src={blockchain} alt="Project Screenshot" className="w-full h-48 object-cover"/>
          </div>
          <div className="gallery-item rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300">
            <img src={web3} alt="Project Screenshot" className="w-full h-48 object-cover"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
