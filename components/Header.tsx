/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import { NavItems } from "../assets/NavItems";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  GBG Pest control
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {NavItems.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href={item.url}
                        className={` ${
                          router && router.pathname === item.url
                            ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        }
                        `}
                      >
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="tel:+1-519-222-7709">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <PlusIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>Contact Us</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {NavItems.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.url}
                    className={` ${
                      router && router.pathname === item.url
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                    }
                  `}
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
