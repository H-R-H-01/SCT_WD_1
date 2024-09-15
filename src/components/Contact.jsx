import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-sky-600 mb-8">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
        />
        <button type="submit" className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition-colors duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
