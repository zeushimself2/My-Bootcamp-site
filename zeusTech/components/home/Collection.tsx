"use client";
import Link from "next/link";

export const Collection = () => {
  return (

<div className="bg-slate-950 p-4 min-h-screen">
  <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
    <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
        <path fill-rule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          clip-rule="evenodd"></path>
      </svg>
      <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Our Work</h2>
      <p className="text-gray-300">
        Our web development and tech research team specialize in building innovative web solutions and exploring cutting-edge technologies.
      </p>
    </div>
    <div
      className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width="200" height="200"
            className="w-12 h-12 rounded-full" />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Domain Content Converter</h5>
            <p className="text-gray-300">A platform that transforms domain names into fully functional content websites.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/120853/logo.svg" loading="lazy" width="200" height="200"
            className="w-12 h-12 rounded-full" />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Dynamic Widget Builder</h5>
            <p className="text-gray-300">Create dynamic, customizable widgets to enhance website functionality.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width="200" height="200"
            className="w-12 h-12 rounded-full" />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">API SaaS Platform</h5>
            <p className="text-gray-300">A suite of APIs designed to accelerate web and software development.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/120850/logo.svg" loading="lazy" width="200" height="200"
            className="w-12 h-12 rounded-full" />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">AI Integration</h5>
            <p className="text-gray-300">Seamlessly integrate AI into any website.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
  );
};
