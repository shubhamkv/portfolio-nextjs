"use client";

import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/shubhamkv",
    icon: <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/hii_lets_code",
    icon: <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />,
    label: "Twitter",
  },
  {
    href: "https://linkedin.com/in/shubham-kumar-08",
    icon: <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/shubh.kumar_",
    icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />,
    label: "Instagram",
  },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t dark:border-gray-700 border-gray-300 py-4 sm:py-6 px-3 sm:px-4 md:px-6 lg:px-10 xl:px-16 bg-orange-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 gap-3 sm:gap-4 font-mono">
        {/* Left */}
        <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 text-center sm:text-left order-2 sm:order-1">
          Designed & Developed by{" "}
          <span className="font-semibold">Shubham Kumar</span>
        </p>

        {/* Center */}
        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-400 text-center order-3 sm:order-2 flex-shrink-0">
          &copy; {new Date().getFullYear()} Shubham Kumar. All rights reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex space-x-2 sm:space-x-3 md:space-x-4 order-1 sm:order-3">
          {socialLinks.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="p-1.5 sm:p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-300 dark:hover:bg-indigo-500 hover:text-indigo-600 dark:hover:text-white transition-all duration-200 flex-shrink-0"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
