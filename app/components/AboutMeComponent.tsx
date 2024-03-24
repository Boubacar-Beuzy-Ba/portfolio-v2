import Image from "next/image";
import profileImg2 from "../assets/LinkdinProfile2.jpeg";

export const AboutMeComponent = () => {
  return (
    <>
      <div className="flex items-center gap-2 mx-10 my-10">
        <div className="w-1/2 flex items-center justify-center">
          <Image src={profileImg2} alt="About Boubacar" className="w-full" />
        </div>
        <div className="w-1/2 p-4">
          <h3 className="font-bold text-2xl text-black">About Me</h3>
          <p className="text-sm text-gray-700">
            Experienced Web Developer skilled in React with a background in
            Customer Success Management, IT Customer Support, and Head of Ops
            Excellence in Logistics E-commerce. Proven track record in
            delivering web solutions, driving customer satisfaction, and
            optimizing operational processes. Strong technical and
            customer-oriented skills. Eager to take on new challenges and
            contribute to organizational success.
          </p>
        </div>
      </div>
    </>
  );
};
