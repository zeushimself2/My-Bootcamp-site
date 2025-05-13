"use client"
import React from 'react'

export const Footer = () => { 
  return (
    <footer className="bg-slate-900">
    <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-200 sm:text-5xl">Register for the upcoming Web Bootcamp</h2>
  
        <p className="mx-auto mt-4 max-w-sm text-gray-500">
        "Join Our Web Development Bootcamp!"
 Learn to Code, Build Websites, and Launch Your Career
 Hands-On Training | Beginner Friendly | 100% Practical |100% Online


        </p>
  
        <a
          href="/checkout\[id]"
          className="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        >
          Register
        </a>
      </div>
  
      <div
        className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24"
      >
        <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
          <li>
            <a href="/services" className="text-gray-500 transition hover:opacity-75"> Our services </a>
          </li>
  
          <li>
            <a href="/about" className="text-gray-500 transition hover:opacity-75"> About Us </a>
          </li>
  
          <li>
            <a href="contact" className="text-gray-500 transition hover:opacity-75"> Contact Us </a>
          </li>
        </ul>
  
        <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
          <li>
          <a
  href="https://wa.me/qr/KOD2YY2MYLWNC1"
  rel="noreferrer"
  target="_blank"
  className="text-gray-700 transition hover:opacity-75"
>
  <span className="sr-only">WhatsApp</span>
  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12.065 2C6.502 2 2 6.468 2 11.982c0 2.068.548 4.078 1.596 5.85L2 22l4.258-1.407a10.055 10.055 0 0 0 5.807 1.378C17.6 21.97 22 17.535 22 11.982 22 6.468 17.565 2 12.065 2zm5.67 15.237c-.234.658-1.376 1.25-1.89 1.314-.503.064-1.095.063-1.776-.078a9.01 9.01 0 0 1-4.492-2.357c-1.13-1.075-1.882-2.327-2.385-3.423-.56-1.21-.47-2.224-.31-2.42.175-.213.47-.306.774-.407.214-.073.459-.15.725-.276.272-.132.54-.275.8-.428.246-.14.45-.043.612.11.162.153.713.91.828 1.083.102.153.175.265.091.423-.085.157-.128.242-.235.376-.108.136-.245.301-.347.45-.102.147-.208.208-.053.433.153.224.675 1.108 1.447 1.691.795.59 1.462.774 1.67.853.21.08.338.068.48-.055.14-.122.596-.625.756-.837.16-.213.32-.182.534-.11.213.073 1.352.64 1.58.755.229.115.38.174.436.273.058.1.058.614-.176 1.273z"
      clipRule="evenodd"
    />
  </svg>
</a>
          </li>
  
          <li>
          <a
  href="#"
  rel="noreferrer"
  target="_blank"
  className="text-gray-700 transition hover:opacity-75"
>
  <span className="sr-only">X</span>
  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M20.083 3H15.5l-3.5 5-3.5-5H3.917L9.5 12 3 21h4.583L12 15.083 16.417 21H21l-6.5-9 5.583-9z"
      clipRule="evenodd"
    />
  </svg>
</a>

          </li>
  
          <li>
          <a
  href="#"
  rel="noreferrer"
  target="_blank"
  className="text-gray-700 transition hover:opacity-75"
>
  <span className="sr-only">Gmail</span>
  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 12.713l-8.485-6.36A1 1 0 003 7.23v9.54c0 .553.447 1 1 1h16a1 1 0 001-1V7.23a1 1 0 00-1.515-.877L12 12.713z"
    />
    <path
      d="M21 6.27a1 1 0 00-1.515-.877L12 10.713 4.515 5.393A1 1 0 003 6.27v.46l9 6.75 9-6.75v-.46z"
    />
  </svg>
</a>

          </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer
// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Footer
