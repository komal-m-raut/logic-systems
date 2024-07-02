"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // ? About Routing in Next.js
  // TODO: fix animation for dropdown And make it responsive😡

  const links = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      dropdown: [
        { name: "About Us", path: "/about-us" },
        { name: "Gallery", path: "/gallery" },
      ],
    },
    {
      name: "Solutions",
      dropdown: [
        { name: "Software Solutions", path: "/software-solutions" },
        { name: "Hardware Solutions", path: "/hardware-solutions" },
        { name: "Display Solutions", path: "/display-solutions" },
        { name: "Security Solutions", path: "/security-solutions" },
      ],
    },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-500">
      <div className="flex items-center justify-between w-full h-20">
        <div className="flex items-center pl-4 lg:pl-8">
          <h1 className="text-3xl font-bold text-dark">Logic Systems</h1>
        </div>
        <button
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="lg:hidden pr-4"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu className="text-3xl font-bold text-dark" />
        </button>
        <div
          className={`lg:flex items-center ${navbarOpen ? "block" : "hidden"} w-full lg:w-auto`}
        >
          <div className="flex flex-col lg:flex-row lg:ml-auto space-y-4 lg:space-y-0 lg:space-x-4">
            {links.map((link, index) => (
              <div key={index} className="relative group">
                {link.path ? (
                  <Link href={link.path}>
                    <div className="text-black py-2 px-4 hover:text-primary focus:outline-none flex items-center cursor-pointer">
                      {link.name}
                      {link.dropdown && <FaChevronDown className="ml-2" />}
                    </div>
                  </Link>
                ) : (
                  <div className="text-black py-2 px-4 hover:text-primary focus:outline-none flex items-center cursor-pointer">
                    {link.name}
                    {link.dropdown && <FaChevronDown className="ml-2" />}
                  </div>
                )}
                {link.dropdown && (
                  <div className="absolute left-0 mt-4 w-48 py-1 bg-soft rounded-md shadow-lg opacity-0 lg:translate-y-8 lg:group-hover:translate-y-1 lg:group-hover:opacity-100 transform transition-all duration-300 lg:duration-500">
                    {link.dropdown.map((dropdownLink, i) => (
                      <Link key={i} href={dropdownLink.path}>
                        <div className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
                          {dropdownLink.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex items-center lg:pl-4">
            <Link href="/get-a-quote">
              <div className="h-20 bg-primary text-white py-2 px-4 cursor-pointer flex items-center justify-center">
                Get A Quote
                <FaArrowRight className="ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
