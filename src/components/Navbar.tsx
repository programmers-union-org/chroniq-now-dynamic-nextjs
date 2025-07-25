"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [dateString, setDateString] = useState("");
  // const [menuOpen, setMenuOpen] = useState(false);

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
    "home",
    "business",
    "health",
    "politics",
    "science",
    "sports",
    "technology",
  ];

  // const bottomLinks = [
  //   "ABOUT US",
  //   "ADVERTISE WITH US",
  //   "CONTACT US",
  //   "PRIVACY POLICY",
  // ];

  return (
    <header className="border-b border-red-100 sticky top-0 z-50 bg-white">
      {/* desktop top bar */}
      <div className="hidden md:flex items-center justify-between p-8 px-20 ">
        <div className="md:text-sm text-gray-800 font-medium ">
          {dateString}
        </div>
        <Link className="cursor-pointer" href={"/"} title="Chroniq Now">
          <div className="text-5xl font-bold text-red-600 uppercase">
            chroniq now
          </div>
        </Link>
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
      <div className="flex md:hidden items-center justify-between px-2 py-2 ">
        <Link className="cursor-pointer" href={"/"} title="Chroniq Now">
          <div className="text-2xl font-bold text-red-600 uppercase">
            chroniq now
          </div>
        </Link>
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
          {/* <button onClick={() => setMenuOpen(!menuOpen)}>
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
          </button> */}
        </div>
      </div>

      {/* desktop nav */}
      <div className="hidden md:flex items-center justify-between px-20 py-3 border-t border-red-100">
        <ul className="flex space-x-8 text-sm font-medium text-gray-900">
          {navItems.map((item, i) => (
            <li key={i} className="relative">
              {item === "home" ? (
                <Link
                  href={"/"}
                  className="flex items-center"
                  title={item.toUpperCase()}
                >
                  {item.toUpperCase()}
                </Link>
              ) : (
                <Link
                  href={`/${item.toLowerCase()}/`}
                  className="flex items-center"
                  title={item.toUpperCase()}
                >
                  {item.toUpperCase()}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* <button
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
        </button> */}
      </div>

      {/* mobile scrollable nav */}
      <div className="md:hidden scrollbar-hide overflow-x-auto border-t border-red-100">
        <ul className="flex text-xs p-1 pl-2 space-x-6  font-medium text-gray-900">
          {navItems.map((item, i) => (
            <li key={i} className="relative pr-1">
              {item === "home" ? (
                <Link
                  href={"/"}
                  className="flex items-center"
                  title={item.toUpperCase()}
                >
                  {item.toUpperCase()}
                </Link>
              ) : (
                <Link
                  href={`/${item.toLowerCase()}/`}
                  className="flex items-center"
                  title={item.toUpperCase()}
                >
                  {item.toUpperCase()}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* bottom links on toggle */}
      {/* {menuOpen && (
        <div className="border-t border-red-100 p-2 md:px-20 md:py-3 ">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xs md:text-sm font-medium text-gray-900">
            {bottomLinks.map((item, i) => (
              <li key={i}>
                <Link href="#" title={item}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </header>
  );
}
