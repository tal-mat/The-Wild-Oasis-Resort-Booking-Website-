"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

// Navigation links for the sidebar
const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when path changes (user navigates)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <div className="sm:hidden fixed top-4 left-4 z-40">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-800 text-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-lg"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Navigation sidebar */}
      <nav
        className={`
          border-r border-primary-900 
          sm:block sm:w-auto sm:static
          fixed inset-y-0 left-0 z-30
          w-64 bg-primary-950 sm:bg-transparent
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        `}
      >
        <div className="h-16 sm:hidden" />
        <ul className="flex flex-col gap-2 h-full text-base sm:text-lg p-4 sm:p-0">
          {/* Generate navigation list items dynamically from navLinks */}
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={`py-2 sm:py-3 px-4 sm:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-3 sm:gap-4 font-semibold text-primary-200 ${
                  pathname === link.href ? "bg-primary-900" : ""
                }`}
                href={link.href}
              >
                {link.icon}
                <span className="text-sm sm:text-base">{link.name}</span>
              </Link>
            </li>
          ))}

          <li className="mt-auto">
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideNavigation;
