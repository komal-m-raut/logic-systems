import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SocialMedia = () => (
  <div className="flex items-center space-x-2">
    <span className="text-light">Follow Us:</span>
    <Link href="https://www.facebook.com">
      <div className="p-2 text-light hover:text-secondary focus:outline-none rounded-full border border-light">
        <FaFacebookF />
      </div>
    </Link>
    <Link href="https://www.twitter.com">
      <div className="p-2 text-light hover:text-secondary focus:outline-none rounded-full border border-light">
        <FaTwitter />
      </div>
    </Link>
    <Link href="https://www.linkedin.com">
      <div className="p-2 text-light hover:text-secondary focus:outline-none rounded-full border border-light">
        <FaLinkedinIn />
      </div>
    </Link>
    <Link href="https://www.instagram.com">
      <div className="p-2 text-light hover:text-secondary focus:outline-none rounded-full border border-light">
        <FaInstagram />
      </div>
    </Link>
  </div>
);

export default SocialMedia;
