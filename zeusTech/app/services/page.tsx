"use client"

import React from 'react'

const page = () => {
  return (
    <section id="features" className="container space-y-6 bg-slate-50 py-8 mx-auto md:py-12 lg:py-24">
    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Our Web Development Services</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Z-Tech brings innovative and user-centric web solutions to life. Explore the services we offer to elevate your digital presence.
        </p>
    </div>
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code">
                    <path d="M16 18l6-6-6-6"></path>
                    <path d="M8 6l-6 6 6 6"></path>
                </svg>
                <div className="space-y-2">
                    <h3 className="font-bold">Custom Website Development</h3>
                    <p className="text-sm text-muted-foreground">
                        We build tailor-made websites designed to meet your business goals and user needs.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layout">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                <div className="space-y-2">
                    <h3 className="font-bold">Responsive Design</h3>
                    <p className="text-sm text-muted-foreground">
                        Create user-friendly, mobile-optimized websites that look great on any device.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-server">
                    <rect x="3" y="4" width="18" height="8" rx="2"></rect>
                    <rect x="3" y="12" width="18" height="8" rx="2"></rect>
                </svg>
                <div className="space-y-2">
                    <h3 className="font-bold">Web Hosting & Maintenance</h3>
                    <p className="text-sm text-muted-foreground">
                        Reliable hosting solutions and ongoing maintenance to keep your site running smoothly.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-palette">
                    <circle cx="13.5" cy="6.5" r=".5"></circle>
                    <circle cx="17.5" cy="10.5" r=".5"></circle>
                    <circle cx="8.5" cy="7.5" r=".5"></circle>
                    <circle cx="6.5" cy="12.5" r=".5"></circle>
                    <path
                        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h 1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z">
                    </path>
                </svg>
                <div className="space-y-2">
                    <h3 className="font-bold">UI/UX Design</h3>
                    <p className="text-sm text-muted-foreground">
                        Crafting visually appealing and highly intuitive user interfaces.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check">
                    <path d="M12 2l7 4v6c0 5-3.6 9.3-7 10-3.4-.7-7-5-7-10V6l7-4z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                </svg>
                <div className="space-y-2">
                    <h3 className="font-bold">Security Solutions</h3>
                    <p className="text-sm text-muted-foreground">
                        Enhance site security with SSL certificates, firewalls, and secure coding practices.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-git-branch">
                    <circle cx="12" cy="5" r="3"></circle>
                    <circle cx="12" cy="19" r="3"></circle>
                    <path d="M12 8v8"></path>
                </svg>
                <div className="space-y-2">
                    <h3 className="font-bold">Version Control & Deployment</h3>
                    <p className="text-sm text-muted-foreground">
                        Manage code efficiently and deploy updates seamlessly with Git and CI/CD pipelines.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}
export default page