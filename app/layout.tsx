import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PiScribbleLoopBold } from "react-icons/pi";

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
      <body className={inter.className}>
        <nav className="w-full py-2 border-b  ">
          <div className="max-w-xs pl-12 w-full mx-auto">
            <div className="  gap-2 flex items-center text-3xl">
              <PiScribbleLoopBold size={30} className="" /> Strings
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
