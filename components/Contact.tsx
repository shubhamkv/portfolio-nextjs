"use client";

import {
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: <FaEnvelope size={18} />,
    label: "Email",
    value: "shubh082002@gmail.com",
    href: "mailto:shubh082002@gmail.com",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    value: "github.com/shubhamkv",
    href: "https://github.com/shubhamkv",
  },
  {
    icon: <FaTwitter size={18} />,
    label: "X",
    value: "@hii_lets_code",
    href: "https://twitter.com/hii_lets_code",
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/shubham-kumar-08",
    href: "https://linkedin.com/in/shubham-kumar-08",
  },
  {
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    value: "@shubh.kumar_",
    href: "https://instagram.com/shubh.kumar_",
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 py-16 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-300"
    >
      <div className="w-full max-w-5xl text-center space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 dark:text-white">
          Get in Touch With{" "}
          <span className="text-cyan-600 dark:text-cyan-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 text-white shadow-md dark:from-cyan-600 dark:to-indigo-600">
                {item.icon}
              </div>
              <div className="text-left w-full overflow-hidden">
                <div className="text-sm font-semibold font-serif text-gray-600 dark:text-gray-300">
                  {item.label}
                </div>
                <div className="text-base font-medium font-mono text-gray-900 dark:text-white break-all">
                  {item.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
