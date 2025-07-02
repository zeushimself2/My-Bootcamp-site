import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/layout/Navbar";
import { Footer } from "@/components/shared/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z-Tek - Google Search",
  description:
    "We bring future innovations to life today. If interested. Click on the 'Contact Us' button below.",

  // Open Graph
  openGraph: {
    title: "Z-Tek -Google Search",
    description:
      "We bring future innovations to life today. If interested. Click on the 'Contact Us' button below.",
    images:
      "https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LBT4WVEKG6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LBT4WVEKG6');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/></body>

    </html>
  );
}
