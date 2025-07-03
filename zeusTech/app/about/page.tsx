"use client"

import { Core } from '@/components/about/Core'
import { CoreValues } from '@/components/about/CoreValues'
import FAQ from '@/components/about/FAQ'
import OurStory from '@/components/about/OurStory'
import { ChartBarIcon, CpuChipIcon, UsersIcon, CogIcon } from '@heroicons/react/24/outline';

import React from 'react'

const page = () => {
  return (
    <section className="">
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
                <div className="lg:text-center">
                    <h2
                        className="font-heading mb-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
                        Why Choose Us?
                    </h2>
                    <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        Innovating the Future with Data, Technology, and Expertise
                    </p>
                    <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                        At Zeus Technologies, we blend cutting-edge research with advanced technology solutions to address complex
                        challenges. Together, we drive innovation, build robust systems, and push the boundaries of modern
                        development.
                    </p>
                </div>
    
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <ChartBarIcon className="w-6 h-6" />
                                </div>
                                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Data-Driven Insights</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Leverage our expertise in data science and analytics to uncover patterns, make predictions,
                                and inform key decisions with precision.
                            </dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <CpuChipIcon className="w-6 h-6" />
                                </div>
                                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">AI-Powered Solutions</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Harness the power of artificial intelligence to build scalable, smart systems for your
                                business needs and research goals.
                            </dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <UsersIcon className="w-6 h-6" />
                                </div>
                                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Collaborative Research</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Collaborate with our multidisciplinary team to solve challenging problems and produce impactful
                                research that matters.
                            </dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <CogIcon className="w-6 h-6" />
                                </div>
                                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Innovative Tools</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Develop and utilize state-of-the-art tools, platforms, and methodologies for a seamless
                                research and development experience.
                            </dd>
                        </div>
                    </dl>
                </div>
    
            </div>
        </div>
    </section>
    
    
  );
}

export default page
