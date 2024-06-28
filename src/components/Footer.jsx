import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-2">Email: contact@ochi.com</p>
            <p className="text-gray-300">Phone: +1234567890</p>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-white text-lg font-semibold mb-4">®️ ochi</h2>
            <p className="text-gray-300">The finest in the world.</p>
          </div>
          <div className="text-center lg:text-right">
            <h2 className="text-white text-lg font-semibold mb-4">Newsletter</h2>
            <div className="flex justify-center lg:justify-end">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-2 rounded-r-lg text-white font-semibold shadow-md transition-all duration-300 ease-in-out"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
