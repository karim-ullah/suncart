"use client";
import React, { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { router } from "better-auth/api";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  // console.log(user);

  const handleLogOut = async() =>{
    await authClient.signOut()
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  // console.log(pathName);

  const links = (
    <>
      <li>
        <Link
          className={pathName === "/" ? "border-b-2 border-amber-300" : ""}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={
            pathName === "/products" ? "border-b-2 border-amber-300" : ""
          }
          href="/products"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          className={
            pathName === "/my-profile" ? "border-b-2 border-amber-300" : ""
          }
          href="/my-profile"
        >
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full shadow-sm bg-background/50 backdrop-blur-lg">
      <header className="max-w-7xl px-4 mx-auto flex h-14 items-center justify-between">
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
            <Link href={"/"} className="font-bold text-2xl">
              SunCart
            </Link>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex text-sm">{links}</ul>
        {!user && (
          <div className="flex items-center gap-3">
            <Link href="/login">Login</Link>
            <Button>
              <Link href={"/signup"}>Sign Up</Link>
            </Button>
          </div>
        )}
        {user && (
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image alt={user?.image} src={user?.image} referrerPolicy="no-referrer" />
              <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
            </Avatar>
            <Button size="sm" onClick={handleLogOut}>Logout</Button>
          </div>
        )}
      </header>
      {isMenuOpen && (
        
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
