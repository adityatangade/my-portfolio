import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulating form submission (you can integrate with a backend service)
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 sm:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-blue-600">Contact Me</h1>
        <p className="text-lg text-gray-700 mt-2">I'm here to help you. Feel free to reach out to me with any questions or collaboration ideas!</p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-lg text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="text-lg text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="6"
            ></textarea>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              {isSubmitted ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-blue-600">Other Ways to Reach Me</h2>
        <div className="mt-6">
          <p className="text-lg text-gray-700">You can also contact me via:</p>
          <div className="flex justify-center gap-8 mt-4">
            <a href="mailto:john.doe@example.com" className="text-xl text-blue-600 hover:underline">Email</a>
            <a href="https://www.linkedin.com/in/johndoe" className="text-xl text-blue-600 hover:underline">LinkedIn</a>
            <a href="https://github.com/johndoe" className="text-xl text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
