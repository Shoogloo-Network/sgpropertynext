import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";
import Navbar from "./_components/header/NavBar";
import Footer from "./_components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: "Shoogloo property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha384-2eJLfjN1Q7UAn+FYXkwyRnMZkwveAnRNO9w+TwEvKdeXa/mbwKMSvOykA1+XmEHC"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" strategy="lazyOnload"/>
    </html>
  );
}
