import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PiScribbleLoopBold } from "react-icons/pi";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strings",
  description: "Strings by Nainish is a frontend for Threads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="h-screen">
        <nav className="w-full  py-2 border-b  ">
          <div className="max-w-xs lg:pl-12 w-full mx-auto">
            <div>
              <Link className=" items-center  gap-2 flex text-3xl" href={"/"}>
                <PiScribbleLoopBold size={30} className="" /> Strings
              </Link>
            </div>
            <div className=" text-[10px] text-gray-400 -mt-1  ml-10">
              By Nainish
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
