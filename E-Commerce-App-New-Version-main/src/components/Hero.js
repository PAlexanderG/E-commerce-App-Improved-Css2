import React from "react";
// import image
import WomanImg from "../img/woman_hero.png";
// import lin
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="h-[800px] bg-hero 
      bg-no-repeat bg-cover bg-center py-24"
    >
      <div
        className="container mx-auto flex justify-around
      h-full"
      >
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* subtitle */}
          <div
            className="font-semibold flex items-center
          uppercase"
          >
            <div className="w-10 h-[2px] bg-black mr-3"></div>
          </div>
          {/* title */}
          <h1
            className="text-[70px] leading-[1.1] font-light
          mb-4 text-black"
          >
            AUTUMNAL EQUINOX <br />
            <span className="font-semibold text-red-600">
              Your Online Store
            </span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold text-red-600
          border-b-2 border-primary"
          >
            More Details!
          </Link>
        </div>
        {/* image */}
        {/* use "hidden lg:block to hidde the image for smaller devices size" */}
      </div>
    </section>
  );
};

export default Hero;
