import Image from "next/image";
import profileImg2 from "../assets/Profile2.jpg";

export const AboutMeComponent = () => {
  return (
    <div id="about">
      <div className="flex flex-col sm:flex-row items-center gap-2 mx-auto sm:mx-10 my-10">
        <div className="sm:w-1/2 w-full flex items-center justify-center">
          <Image
            src={profileImg2}
            alt="About Boubacar"
            className="w-full sm:rounded-2xl"
          />
        </div>
        <div className="sm:w-1/2 mx-2 p-4">
          <h3 className="font-bold text-xl sm:text-3xl text-black py-2">
            About Me
          </h3>
          <p className="text-gray-700 text-md text-wrap sm:text-lg">
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
    </div>
  );
};
