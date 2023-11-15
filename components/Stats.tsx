import React from "react";
import { UsersIcon } from "@heroicons/react/outline";

const Stats = () => {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose us?
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            At GBG Pest Control we offer the highest level of service to all of
            our appreciated customers. Our specialists are highly qualified with
            experience in all fields of pest control to treat your homes safely.
            Our specialists are also ministry certified and licensed. Our team
            is very friendly and are thrilled to help you. We provide quality
            service with affordable pricing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
