"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  console.log(pathName);

  const links = (
    <>
      <li>
        <Link className={pathName === '/' ? 'border-b-2 border-amber-300' : ''} href="/">Home</Link>
      </li>
      <li>
        <Link className={pathName === '/products' ? 'border-b-2 border-amber-300' : ''} href="/products">Products</Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full shadow-sm bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-11/12 items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <p className="font-bold text-3xl">SunCart</p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="#">Login</Link>
          <Button>Sign Up</Button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="#" className="block py-2">
                Login
              </Link>
              <Button className="w-full">Sign Up</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
