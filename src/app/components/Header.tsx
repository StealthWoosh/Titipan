"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-1 border-b border-gray-200 bg-white">

      <div className="flex items-center space-x-2">
        <img
          src="/tomorrologo.png"
          alt="Tomoro Coffee Logo"
          className="h-35 w-35 object-contain ml-8"
        />
        <span className="text-[#f15a29] font-bold text-lg tracking-wide">
          
        </span>
      </div>

      <nav>
        <ul className="flex space-x-8 text-sm">
          <li>
            <Link href="/" className="text-[#f15a29] font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#f15a29]">
              About
            </Link>
          </li>
          <li>
            <Link href="/download" className="hover:text-[#f15a29]">
              Download App
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-[#f15a29]">
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link href="/announcement" className="hover:text-[#f15a29]">
              Announcement
            </Link>
          </li>
          <li>
            <Link href="/lang" className="hover:text-[#f15a29]">
              English
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
