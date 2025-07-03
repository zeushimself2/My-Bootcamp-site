"use client"
// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default () => {
    return (
        <section id="testimonies" className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
    
    
            <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                    <div
                        className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                        Words from Others
                    </div>
                    <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                        It's not just us.
                    </h1>
                    <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                        Here's what others have to say about us.
                    </p>
                </div>
            </div>
    
    
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {/* Show all testimonials in all views */}
                {/* Each testimonial is a grid item for proper alignment */}
                {/* Kakari Obed */}
                <div className="relative group w-full">
                    <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-800 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div className="flex items-center space-x-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white">Kakari Obed</h3>
                                <p className="text-gray-500 text-md">Student Entrepreneur</p>
                            </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">Zeus technologies helped me start my programming career with their beginner friendly and hands on web bootcamp. Now, I'm a confident web developer</p>
                    </div>
                </div>
                {/* Mr. Nat */}
                <div className="relative group w-full">
                    <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div className="flex items-center space-x-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white">Mr. Nat</h3>
                                <p className="text-gray-500 text-md">Reni Stores</p>
                            </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">Now my sales are boosted thanks to Zeus Technologies for providing me with a reliable website that gave my business a place on the internet</p>
                    </div>
                </div>
                {/* Stephen Kakari */}
                <div className="relative group w-full">
                    <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div className="flex items-center space-x-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white">Stephen Kakari</h3>
                                <p className="text-gray-500 text-md">Student (UMAT)</p>
                            </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">Thanks to Zeus Techologies, my programming skills are now boosted as I enrolled in their bootcamp and equipped myself with an in depth knowledge in javascript, typescript and react</p>
                    </div>
                </div>
                {/* Isaac Duplan */}
                <div className="relative group w-full">
                    <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div className="flex items-center space-x-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white">Isaac Duplan</h3>
                                <p className="text-gray-500 text-md">Student (KNUST)</p>
                            </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">Zeus Technologies has really helped me in my web development career.</p>
                    </div>
                </div>
                {/* Miss Vivian */}
                <div className="relative group w-full">
                    <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div className="flex items-center space-x-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white">Miss Vivian</h3>
                                <p className="text-gray-500 text-md">Ezens stores</p>
                            </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">Zeus Technologies gave me a name on the internet to widen my business to the extent of attracting foreign customers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

