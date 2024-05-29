import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-white mt-10">
      <div className="mx-auto w-4/6  grid gap-4 grid-cols-4 py-8">
        <div className=" p-8 flex flex-col gap-4">
          <Link href={"/"} className="flex gap-2 items-center cursor-pointer">
            <IoNewspaperOutline className="text-4xl" />
            <span className="text-3xl font-bold">BlogPost</span>
          </Link>{" "}
          <h1 className="text-lg">© 2020. All Rights Reserved.</h1>
          <h1 className="text-lg">Made by <a href="https://www.assoul.dev">assoul.dev</a></h1>
        </div>
        <div className=" flex flex-col gap-4 p-8">
          <h1 className="text-xl font-bold">Useful Links</h1>
          <div className="flex flex-col gap-1">
            <Link href={"#"}>Food Blogs</Link>
            <Link href={"#"}>Advertise with US</Link>
            <Link href={"#"}>Our Authors</Link>
            <Link href={"#"}>Get in Touch</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-4 p-8">
          <h1 className="text-xl font-bold">Categories</h1>
          <div className="flex flex-col gap-1">
            <Link href={"#"}>Beauty</Link>
            <Link href={"#"}>Fashion and Style</Link>
            <Link href={"#"}>Food and Wellness</Link>
            <Link href={"#"}>Lifestyle</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-4 p-8">
          <h1 className="text-xl font-bold">Social Media</h1>
          <div className="flex flex-col gap-1">
            <Link className="flex gap-1 items-center" href={"#"}>
              <FaFacebookF />
              Facebook
            </Link>
            <Link className="flex gap-1 items-center" href={"#"}>
              <FaXTwitter />Twitter
            </Link>
            <Link className="flex gap-1 items-center" href={"#"}>
              <FaLinkedin />
              Linkedin
            </Link>
            <Link className="flex gap-1 items-center" href={"#"}>
              <FaInstagram />
              instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
