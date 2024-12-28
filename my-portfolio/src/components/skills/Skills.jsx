import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">My Skills</h2>
        <p className="mt-4 text-lg text-gray-700">
          I am proficient in a wide range of technologies that enable me to create robust and scalable web applications.
        </p>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Skill 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <i className="fab fa-html5 text-4xl text-orange-500"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">HTML5</h3>
          </div>

          {/* Skill 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <i className="fab fa-css3-alt text-4xl text-blue-500"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">CSS3</h3>
          </div>

          {/* Skill 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <i className="fab fa-js-square text-4xl text-yellow-500"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">JavaScript</h3>
          </div>

          {/* Skill 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <i className="fab fa-react text-4xl text-blue-600"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">React</h3>
          </div>

          {/* Skill 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <i className="fab fa-node text-4xl text-green-600"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">Node.js</h3>
          </div>

          {/* Skill 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <i className="fab fa-git-alt text-4xl text-red-500"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">Git</h3>
          </div>

          {/* Skill 7 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <i className="fab fa-sass text-4xl text-pink-500"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">Sass</h3>
          </div>

          {/* Skill 8 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <i className="fab fa-docker text-4xl text-blue-500"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">Docker</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
