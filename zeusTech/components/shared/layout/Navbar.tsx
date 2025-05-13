

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
    // <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
    //   <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
    //     <div className="flex items-center justify-between py-3 md:py-5 md:block">
    //       <Link href="/">
    //         <Image src="/logo.png" width={50} alt="logo" height={50} className="w-15 h-15 sm:w-08 sm:h-08" />
    //       </Link>
    //       <div className="md:hidden">
    //         <button
    //           className="text-gray-500 hover:text-gray-800"
    //           onClick={() => setState(!state)}
    //         >
    //           {state ? (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-6 w-6"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-6 h-6"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //               />
    //             </svg>
    //           )}
    //         </button>
    //       </div>
    //     </div>
    //     <div
    //       className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
    //         state ? "block" : "hidden"
    //       }`}
    //     >
    //       <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
    //         {navigation.map((item, idx) => {
    //           return (
    //             <li key={idx} className="text-gray-700 hover:text-indigo-600">
    //               <a href={item.path} className="block">
    //                 {item.title}
    //               </a>
    //             </li>
    //           );
    //         })}
    //         <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
    //       </ul>
    //     </div>
    //   </div>

    //   <Banner />
    // </nav>
    <header className="lg:px-16 px-4 bg-slate-900 text-white flex flex-wrap items-center py-4 shadow-md">
    <div className="flex-1 flex justify-between items-center">
        <a href="/" className="text-xl">Zeus Technologies</a>
    </div>

    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
      <svg className="fill-current text-gray-200"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    {/* <input className="hidden" type="checkbox" id="menu-toggle" /> */}

    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-200 pt-4 md:pt-0">
            <li><a className="md:p-4 py-3 px-0 block" href="/">Home</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="/about">AboutUs</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="/services">Our Services</a></li>
                <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/contact">Contact Us</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="/checkout\[id]">Register</a></li>
                {/* <li><a className="md:p-4 py-3 px-0 block" href="/register">Register</a></li> */}



            </ul>
        </nav>
    </div>
</header>
  );
};