import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form fields
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left: Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-green-500 text-lg">Thank you! We'll get back to you soon.</p>
            </div>
          )}
        </div>

        {/* Right: Contact Information */}
        <div className="flex flex-col justify-center items-center text-center bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">Reach out to us for any queries or support.</p>
          
          <p className="text-lg text-gray-700 font-semibold flex items-center justify-center mb-4">
            <FaMapMarkerAlt className="mr-2" /> Address:
          </p>
          <p className="text-gray-700 text-center">Street 123, Sector 123, Mohali, 160032</p>

          <p className="text-lg text-gray-700 font-semibold flex items-center justify-center mt-4">
            <FaPhoneAlt className="mr-2" /> Phone:
          </p>
          <p className="text-gray-700">+91-9876543210</p>

          <p className="text-lg text-gray-700 font-semibold flex items-center justify-center mt-4">
            <FaEnvelope className="mr-2" /> Email:
          </p>
          <p className="text-gray-700">support@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
