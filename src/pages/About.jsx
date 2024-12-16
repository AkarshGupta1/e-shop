import React from 'react';
// import Customers from '../assets/images/customer.webp'
// import Qualitys from '../assets/images/quality.webp'
// import ecommerce from '../assets/images/e-commerce.avif'

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold">ShopEase</span>, your one-stop destination for an unparalleled online shopping experience. 
          We aim to redefine convenience and quality by offering a vast array of products that cater to your every need, 
          all at the click of a button.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          At <span className="font-semibold">ShopEase</span>, customer satisfaction is at the heart of everything we do. From fashion to electronics, 
          from groceries to home decor, we are committed to delivering the best quality at unbeatable prices.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To create a seamless shopping experience by bringing top-notch products right to your doorstep. 
            We believe in empowering customers with choice, quality, and trust.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the most trusted and loved online shopping platform by continuously innovating 
            and enhancing the customer experience through cutting-edge technology and exceptional service.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Core Values Section */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <img src="/images/customer-first.jpg" alt="Customer First" className="mb-4 w-full h-32 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Customer First</h3>
          <p className="text-gray-700">
            Your satisfaction drives us. We prioritize your needs and strive to exceed expectations.
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <img src="/images/quality-assurance.jpg" alt="Quality Assurance" className="mb-4 w-full h-32 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Quality Assurance</h3>
          <p className="text-gray-700">
            Our rigorous quality checks ensure you receive only the best products every time.
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <img src="/images/innovation.jpg" alt="Innovation" className="mb-4 w-full h-32 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Innovation</h3>
          <p className="text-gray-700">
            We embrace change and constantly evolve to provide cutting-edge solutions for your shopping needs.
          </p>
        </div>
      </div>

      <div className="mt-10 bg-purple-100 p-6 rounded-lg shadow-md text-center">
        <img src="/images/join-us.jpg" alt="Join Us" className="mb-6 w-full h-48 object-cover rounded-lg" />
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Join Our Journey</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Experience the joy of effortless shopping with <span className="font-semibold">e-Shop</span>. 
          Discover, explore, and enjoy exclusive deals curated just for you. 
          Together, let’s make online shopping more exciting and fulfilling.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
