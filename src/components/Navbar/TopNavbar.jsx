import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TopNavbar = () => (
  <div className="bg-dark text-light px-0 py-2">
    <div className="flex justify-between lg:flex px-5">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt />
          <span>+012 345 6789</span>
        </div>
        <div className="flex items-center space-x-2">
          <MdEmail />
          <span>info@example.com</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span>Follow Us:</span>
        <button type="button" aria-label="Facebook" className="text-light">
          <FaFacebookF />
        </button>
        <button type="button" aria-label="Twitter" className="text-light">
          <FaTwitter />
        </button>
        <button type="button" aria-label="LinkedIn" className="text-light">
          <FaLinkedinIn />
        </button>
        <button type="button" aria-label="Instagram" className="text-light">
          <FaInstagram />
        </button>
      </div>
    </div>
  </div>
);

export default TopNavbar;
