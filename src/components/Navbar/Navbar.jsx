"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();

  const links = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      dropdown: [
        { name: "About Us", path: "/about" },
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

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <nav className=" shadow-lg sticky top-0 z-50 transition-all duration-500">
      <div className="flex items-center justify-between px-4 py-2 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-black">Gardener</h1>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle navigation"
          >
            <span className="block w-6 h-0.5 bg-black mb-1" />
            <span className="block w-6 h-0.5 bg-black mb-1" />
            <span className="block w-6 h-0.5 bg-black" />
          </button>
        </div>
        <div
          className={`lg:flex items-center ${navbarOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col lg:flex-row lg:ml-auto space-y-4 lg:space-y-0 lg:space-x-4">
            {links.map((link, index) => (
              <div key={index} className="relative group">
                <button
                  type="button"
                  className="text-black py-2 px-4 hover:text-primary focus:outline-none"
                  onClick={() => link.path && navigate(link.path)}
                >
                  {link.name}
                </button>
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {link.dropdown.map((dropdownLink, dropdownIndex) => (
                      <button
                        key={dropdownIndex}
                        type="button"
                        className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                        onClick={() => navigate(dropdownLink.path)}
                      >
                        {dropdownLink.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="bg-primary text-black py-2 px-4 rounded-lg hidden lg:block ml-4"
            onClick={() => navigate("/get-a-quote")}
          >
            Get A Quote
            <i className="fa fa-arrow-right ml-2" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
