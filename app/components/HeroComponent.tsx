import Image from "next/image";
import profileImg from "../assets/profile.jpg";

export const HeroComponent = () => {
  return (
    <div className="w-full bg-[#F5FCFF]">
      <div className="flex justify-between gap-2 items-center mx-10">
        <div className="p-2 w-1/2">
          <h5 className="text-base font-semibold my-2">Hey, I am Boubacar</h5>
          <h2 className="text-2xl font-semibold my-2">
            I create website and web app experience
          </h2>
          <p className="text-sm my-2">
            Experienced React Developer with expertise in customer success, IT
            support, and logistics e-commerce operations. Proven in web
            solutions delivery, customer satisfaction, and process optimization.
          </p>
          <div className="flex items-center">
            <button className="my-2 bg-black p-4 rounded-md text-gray-200 text-sm">
              Get In Touch
            </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src={profileImg}
            alt="Boubacar"
            className="object-cover w-1/2 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
