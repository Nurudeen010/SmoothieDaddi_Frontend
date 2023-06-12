import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="bg-blue-500 text-gray-300 py-6">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex items-center">
        <img src="logo.png" alt="Smoothie Store Logo" class="w-10 h-10 mr-2" />
        <span class="text-lg font-bold">SmoothieDaddi</span>
      </div>
      <ul class="flex space-x-4">
        <li>
        <Link class="text-white hover:text-gray-200" to="/">Home</Link>
        </li>
        <li>
          <Link class="text-white hover:text-gray-200" to="/about">About</Link>
          </li>
        <li>
          <Link class="text-white hover:text-gray-200" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    <hr class="my-4 border-gray-600" />
    <div class="text-center">
      <p class="text-sm">© 2023 SmoothieDaddi. All rights reserved.</p>
      <p class="text-sm">18, Cardoso Street, Along Omoniyi Road, Mushin Lagos</p>
    </div>
  </div>
</footer>

    )
}

export default Footer;