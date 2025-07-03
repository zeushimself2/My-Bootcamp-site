

"use client";
import { Banner } from "@/components/home/Banner";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className="lg:px-16 px-4 bg-slate-900 text-white flex flex-wrap items-center py-4 shadow-md relative">
      <div className="flex-1 flex justify-between items-center">
        <a href="/" className="text-xl">Zeus Technologies</a>
      </div>
      {/* Hamburger menu button for mobile */}
      <button
        className="md:hidden block text-gray-200 focus:outline-none"
        onClick={() => setState(!state)}
        aria-label="Toggle menu"
      >
        {state ? (
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>close</title>
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        )}
      </button>
      {/* Desktop menu */}
      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-200 pt-4 md:pt-0">
            <li><a className="md:p-4 py-3 px-0 block" href="/">Home</a></li>
            <li><a className="md:p-4 py-3 px-0 block" href="/about">AboutUs</a></li>
            <li><a className="md:p-4 py-3 px-0 block" href="/services">Our Services</a></li>
            <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/contact">Contact Us</a></li>
            <li><a className="md:p-4 py-3 px-0 block" href="/checkout/[id]">Register</a></li>
          </ul>
        </nav>
      </div>
      {/* Mobile dropdown menu */}
      {state && (
        <div className="absolute top-full left-0 w-full bg-slate-900 shadow-lg z-[9999] md:hidden animate-fade-in">
          <nav>
            <ul className="flex flex-col items-start text-base text-gray-200 p-4 space-y-2">
              <li><a className="py-2 px-4 block w-full" href="/">Home</a></li>
              <li><a className="py-2 px-4 block w-full" href="/about">AboutUs</a></li>
              <li><a className="py-2 px-4 block w-full" href="/services">Our Services</a></li>
              <li><a className="py-2 px-4 block w-full" href="/contact">Contact Us</a></li>
              <li><a className="py-2 px-4 block w-full" href="/checkout/[id]">Register</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
