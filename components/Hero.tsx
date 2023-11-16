import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <main className="lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">GBG</span>{" "}
            <span className="block text-indigo-600 xl:inline">
              Pest Control
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Your one stop shop for all your pest control needs
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="about"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                About Us
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="pricing"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <Image
          alt="image"
          src="/headerImage.png"
          width={1920}
          height={1374}
          className="h-full object-cover inset-0 absolute w-full"
        />
      </div>
    </main>
  );
};

export default Hero;
