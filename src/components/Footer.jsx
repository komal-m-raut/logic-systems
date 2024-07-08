"use client";

import React from "react";
import Link from "next/link";
import {
  FaChevronRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import SocialMedia from "./SocialMedia";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { href: "/about-us", label: "About Us" },
      { href: "/solutions", label: "Solutions" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/contact-us", label: "Contact Us" },
    ],
  },
  {
    title: "Our Solutions",
    links: [
      { href: "/software-solutions", label: "Software Solutions" },
      { href: "/hardware-solutions", label: "Hardware Solutions" },
      { href: "/display-solutions", label: "Display Solutions" },
      { href: "/security-solutions", label: "Security Solutions" },
    ],
  },
];

const Footer = () => (
  <div>
    <div className="bg-dark text-light py-12 px-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3fr,2fr,2fr,2fr] gap-6">
          <div className="lg:px-4 mb-4">
            <h3 className="text-2xl font-bold mb-4 md:mb-6">Logic Systems</h3>
            <p className="text-light mb-4">
              Your quote about the company goes here. Inspiring and concise.
            </p>
            <SocialMedia />
          </div>
          {footerSections.map((section) => (
            <div key={section.title} className="lg:px-4 mb-4">
              <h3 className="text-2xl font-semibold mb-4 md:mb-6">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <div className="hover:text-white flex items-center gap-2">
                        <FaChevronRight className="text-sm" />
                        {link.label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-2 lg:px-4 mb-4">
            <h3 className="text-2xl font-semibold mb-4 md:mb-6">Contact Us</h3>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Street, City, Country
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              +123 456 7890
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              info@example.com
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-extraDark text-gray-300 text-center text-sm py-6">
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
