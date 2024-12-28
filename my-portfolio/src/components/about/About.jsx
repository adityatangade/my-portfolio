import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-blue-600">About Me</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Welcome to my website! I'm a web developer with a passion for building
            beautiful and functional websites. I specialize in frontend development,
            but I also enjoy working with backend technologies. In this section, I'll
            share more about my background, skills, and what drives me.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
