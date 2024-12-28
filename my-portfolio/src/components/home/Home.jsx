import React from "react";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Hi, I'm Aditya Tangade
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            A passionate web developer focused on creating clean, responsive,
            and dynamic web applications.
          </p>
          <div className="mt-8">
            <a
              href="#about"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold">Let's Build Something Amazing Together</h2>
          <p className="mt-4 text-lg">
            I'm always open to new opportunities and collaborations. If you have a
            project in mind, don't hesitate to reach out!
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
