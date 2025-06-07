"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useThemeStore } from "../store/themeStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block lg:inline px-3 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? `underline underline-offset-8 dark:text-cyan-500 text-cyan-600`
          : `dark:text-gray-300 dark:hover:text-indigo-400 text-gray-700 hover:text-indigo-600`
      }`}
    >
      {label}
    </Link>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-serif font-lg transition-all duration-300 ${
        isScrolled
          ? "dark:bg-gray-900/95 dark:backdrop-blur-md dark:shadow-lg bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold hover:bg-gradient-to-r hover:from-indigo-500 hover:via-fuchsia-500 hover:to-orange-500 bg-gradient-to-r from-cyan-500  to-indigo-500 bg-clip-text text-transparent ">
              Shubham Kumar
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/skills" label="Skills" />
              <NavLink href="/projects" label="Projects" />
              <NavLink href="/contact" label="Contact" />
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors cursor-pointer
             dark:text-gray-300 dark:hover:text-cyan-400 dark:hover:bg-gray-800
              text-gray-700 hover:text-cyan-600 hover:bg-cyan-50
          `}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2
            dark:text-gray-300 dark:hover:text-cyan-400
              text-gray-700 hover:text-cyan-600 cursor-pointer
          `}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t dark:bg-gray-900/95 dark:backdrop-blur-md dark:border-gray-700 bg-white/95 backdrop-blur-md border-gray-200
        `}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/skills" label="Skills" />
              <NavLink href="/projects" label="Projects" />
              <NavLink href="/contact" label="Contact" />
              <div
                className={`pt-2 border-t dark:border-gray-700 border-gray-200`}
              >
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-colors dark:text-gray-300 dark:hover:text-cyan-400 dark:hover:bg-gray-800 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 cursor-pointer`}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
