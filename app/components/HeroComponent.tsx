"use client";
import Image from "next/image";
import profileImg from "../assets/ProfilePicLinkdn.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export const HeroComponent = () => {
  return (
    <div className="w-auto bg-[#f6f7f9]">
      <div className="flex flex-col md:flex-row justify-between gap-2 items-center mx-2 md:mx-auto w-auto md:w-[75%]">
        <Image
          src={profileImg}
          alt="Boubacar"
          className="object-cover w-36 md:hidden"
        />
        <div className="mx-4 md:p-2 w-auto md:w-1/2">
          <h5 className="text-md md:text-lg font-semibold my-2">
            Hey, I am Boubacar
          </h5>
          <h2 className="text-md md:text-3xl font-semibold my-2">
            <TypeAnimation
              sequence={[
                "I create website and web app experience using JS Frameworks and libraries",
                1000,
                "I create website and web app experience using Content Management System like Wordpress",
                1000,
                "I create website and web app experience using JamStack",
                1000,
                "I create website and web app experience using Figma",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-md md:text-lg my-2 text-justify">
            Experienced React Developer with expertise in customer success, IT
            support, and logistics e-commerce operations. Proven in web
            solutions delivery, customer satisfaction, and process optimization.
          </p>
          <div className="flex items-center justify-around gap-1 mt-5">
            <button className="transition duration-700 ease-in-out my-2 shadow-xl p-4 rounded-md text-gray-800 text-md hover:ring-2 ring-black drop-shadow-2xl">
              <Link href="#contact">Get In Touch</Link>
            </button>
          </div>
        </div>
        <div className="hidden md:w-1/2 md:flex md:items-center md:justify-end bg-blend-multiply">
          <Image
            src={profileImg}
            alt="Boubacar"
            className="object-cover w-1/2"
          />
        </div>
      </div>
    </div>
  );
};
