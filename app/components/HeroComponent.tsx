import Image from "next/image";
import profileImg from "../assets/ProfilePicLinkdn.png";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroComponent = () => {
  return (
    <div className="w-full bg-[#f6f7f9]">
      <div className="flex justify-between gap-2 items-center mx-auto w-[75%]">
        <div className="p-2 w-1/2">
          <h5 className="text-lg font-semibold my-2">Hey, I am Boubacar</h5>
          <h2 className="text-3xl font-semibold my-2">
            I create website and web app experience
          </h2>
          <p className="text-lg my-2">
            Experienced React Developer with expertise in customer success, IT
            support, and logistics e-commerce operations. Proven in web
            solutions delivery, customer satisfaction, and process optimization.
          </p>
          <div className="flex items-center mt-5">
            <button className="transition duration-700 ease-in-out my-2 shadow-xl p-4 rounded-md text-gray-800 text-sm hover:ring-2 ring-black drop-shadow-2xl">
              <Link href="#contact">Get In Touch</Link>
            </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end bg-blend-multiply">
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
