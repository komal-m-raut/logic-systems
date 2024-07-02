import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import SocialMedia from "../SocialMedia";

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
      {/* Can display about offers here */}
      <SocialMedia />
    </div>
  </div>
);

export default TopNavbar;
