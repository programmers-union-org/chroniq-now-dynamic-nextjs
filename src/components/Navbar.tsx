"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [dateString, setDateString] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    setDateString(today.toLocaleDateString("en-GB", options));
  }, []);

  const navItems = [
    "HOME",
    "NEWS",
    "E-EDITIONS",
    "POLITICS",
    "METRO",
    "BUSINESS",
    "SPORTS",
    "EDITORIAL",
    "COLUMNS",
    "ALLURE",
  ];

  const bottomLinks = [
    "ABOUT US",
    "ADVERTISE WITH US",
    "CONTACT US",
    "PRIVACY POLICY",
  ];

  return (
    <header className="border-b border-red-100 sticky top-0 z-50 bg-white">
      {/* desktop top bar */}
      <div className="hidden md:flex items-center justify-between p-8 px-22 ">
        <div className="md:text-sm text-gray-800 font-medium ">
          {dateString}
        </div>
        <div className="text-5xl font-bold text-red-600">Vanguard</div>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-1.5 pr-10 rounded bg-gray-100 text-sm  text-gray-800 focus:outline-none"
          />
          <button className="absolute top-0 bottom-0 right-0 px-3 bg-red-600 rounded-r flex items-center justify-center">
            <FiSearch className="text-white text-sm" />
          </button>
        </div>
      </div>

      {/* mobile top row */}
      <div className="flex md:hidden items-center justify-between px-4 py-2 ">
        <div className="text-3xl font-bold text-red-600">Vanguard</div>
        <div className="flex items-center space-x-2">
          <div className="relative w-32">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-1.5 pr-10 rounded bg-gray-100 text-xs text-gray-800 focus:outline-none"
            />
            <button className="absolute top-0 bottom-0 right-0 px-3 bg-red-600 rounded-r flex items-center justify-center">
              <FiSearch className="text-white text-sm" />
            </button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* desktop nav */}
      <div className="hidden md:flex items-center justify-between px-22 py-3 border-t border-red-100">
        <ul className="flex space-x-8 text-sm font-medium text-gray-900">
          {navItems.map((item, i) => (
            <li key={i} className="relative">
              <Link
                href={`/${item.toLowerCase()}`}
                className="flex items-center"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* mobile scrollable nav */}
      <div className="md:hidden scrollbar-hide overflow-x-auto border-t border-red-100">
        <ul className="flex p-1 space-x-6 text-sm font-medium text-gray-900">
          {navItems.map((item, i) => (
            <li key={i} className="flex-shrink-0 ">
              <Link
                href={`/${item.toLowerCase()}`}
                className="flex items-center whitespace-nowrap text-xs"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* bottom links on toggle */}
      {menuOpen && (
        <div className="border-t border-red-100 p-1 md:px-22 md:py-3 ">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xs md:text-sm font-medium text-gray-900">
            {bottomLinks.map((item, i) => (
              <li key={i}>
                <Link href="#">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
