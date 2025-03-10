


import React from "react";

const Navbar = () => {
  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="hidden md:flex space-x-8">
        <a href="/" className="font-medium text-[#0e0e10] hover:text-[#28b30e] transition-colors">
          Home
        </a>
        <a href="/services" className="font-medium text-[#0e0e10] hover:text-[#28b30e] transition-colors">
          Services
        </a>
        <a href="/blog" className="font-medium text-[#0e0e10] hover:text-[#28b30e] transition-colors">
          Blog
        </a>
        <a href="/about" className="font-medium text-[#0e0e10] hover:text-[#28b30e] transition-colors">
          About Us
        </a>
        <a href="/contact" className="font-medium text-[#0e0e10] hover:text-[#28b30e] transition-colors">
          Contact
        </a>
      </div>

      <div className="flex space-x-4">
        <a
          href="/login"
          className="px-6 py-2 rounded-md bg-[#d6ffd0] text-[#0e0e10] font-medium hover:bg-[#aeff9f] transition-colors"
        >
          Login
        </a>
        <a
          href="/demo"
          className="px-6 py-2 rounded-md bg-[#28b30e] text-white font-medium hover:bg-opacity-90 transition-colors"
        >
          Book Demo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;



