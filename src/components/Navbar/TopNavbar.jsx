import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const TopNavbar = () => (
  <div className="bg-dark text-light px-0 py-4">
    {/* This div remains visible but its content is hidden on small and medium screens */}
    <div className="hidden md:hidden lg:flex justify-between px-5">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt />
          <span className="text-light">+012 345 6789</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaEnvelope />
          <span className="text-light">info@example.com</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-light">Follow Us:</span>
        <Link href="https://www.facebook.com">
          <div className="p-1 text-light hover:text-secondary focus:outline-none">
            <FaFacebookF />
          </div>
        </Link>
        <Link href="https://www.twitter.com">
          <div className="p-1 text-light hover:text-secondary focus:outline-none">
            <FaTwitter />
          </div>
        </Link>
        <Link href="https://www.linkedin.com">
          <div className="p-1 text-light hover:text-secondary focus:outline-none">
            <FaLinkedinIn />
          </div>
        </Link>
        <Link href="https://www.instagram.com">
          <div className="p-1 text-light hover:text-secondary focus:outline-none">
            <FaInstagram />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default TopNavbar;
