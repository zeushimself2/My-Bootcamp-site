"use client"
import Link from "next/link";
import { useEffect, useState } from "react";


export default function index() {
  const [state, setState] = useState(false)
  const navigation = [
    { title: "", path: "" },
    { title: "", path: "" },
    { title: "", path: "" },
    { title: "", path: "" },
]
useEffect(() => {
  document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
  };
}, [])
const Brand = () => (
  <div className="flex items-center justify-between py-5 md:block">
      <a href="/">
          <img src="/logo.png" width={60} height={50}/>
      </a>
      <div className="md:hidden">
          <button className="menu-btn text-gray-400 hover:text-gray-300"
              onClick={() => setState(!state)}
          >
              {
                  state ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                  ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                  )
              }
          </button>
      </div>
  </div>
)
  return (
    <div className="flex h-screen justify-center items-center bg-slate-950">
    <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
        <div className="text-center ">
            <h1
                className="text-4xl font-extrabold tracking-tight text-gray-900 text-slate-300 sm:text-5xl md:text-6xl">
                <span className="block xl:inline"><span className="mb-1 block">Innovations of the</span>
                <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                    future
                </span>
                </span>
                <div className="mt-2">brought to life
                    <span className="relative mt-3 whitespace-nowrap text-blue-600"><svg aria-hidden="true" viewBox="0 0 418 42"
                        className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                        preserveAspectRatio="none">
                        <path
                            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                        </path>
                    </svg>
                    <span className="relative"> today.</span>
                    </span>
                </div>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5">
            We are committed to delivering the best services in every aspect of modern technology with a focus on the client's needs and satisfaction
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">

                                {/* FOR FUTURE USE (button) */}

                {/* <div className="rounded-md shadow">
                  <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                        href="#">Get started for free 🚀
                    </a>
                </div> */}



            </div>
        </div>
    </div>
</div>
  );
}
