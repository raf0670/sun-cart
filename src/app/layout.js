import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'animate.css';
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sun Cart | Home",
  description: "Sun-Cart homepage",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col">
        <Navbar></Navbar>
        <main className="">
          {children}
          <ToastContainer></ToastContainer>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
