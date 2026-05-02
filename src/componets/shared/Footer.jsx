import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import appStoreImg from "@/assets/app-store.png";
import playStoeImg from "@/assets/play-store.png";
import { Separator } from "@heroui/react";

const Footer = () => {
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/products"}>Products</Link>
      </li>
      <li>
        <Link href={"/"}>Privacy Policy</Link>
      </li>
    </>
  );
  return (
    <div className="max-w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between py-10 gap-5">
        <div className="space-y-4">
        <Link href={"/"} className="font-bold text-3xl">
          SunCart
        </Link>
        <p className="text-sm text-gray-500">60, 29th Street #343, Shahbag, <br /> Dhaka, Bangladesh</p>

        <div className="flex items-center gap-2 text-2xl">
          <Link href={"/"}>
            <FaFacebook />
          </Link>
          <Link href={"/"}>
            <FaInstagramSquare />
          </Link>
          <Link href={"/"}>
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-2xl">Links</h2>
        <ul className="text-gray-500">{links}</ul>
      </div>
      <div className="space-y-3">
        <h2 className="font-semibold text-2xl">Download</h2>
        <Image src={appStoreImg}></Image>
        <Image src={playStoeImg}></Image>
      </div>
      </div>
        <Separator></Separator>
      <div className="text-center text-gray-400 py-4">
        <small>Powered By SunCart Your Store © 2026</small>
      </div>
    </div>
  );
};

export default Footer;
