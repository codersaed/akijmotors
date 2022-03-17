import React, { useState } from "react";
import {
  MdPermPhoneMsg,
  MdOutlineMenu,
  MdMarkEmailUnread,
  MdLocationOn,
} from "react-icons/md";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <div className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-slate-900">
        <div className="container px-4 py-3 mx-auto flex flex-wrap items-center justify-between ">
          <div className="text-lg uppercase font-medium text-white leading-relaxed inline-block mr-4 py-2">
            <div>
              <img src="images/logo.png" className="h-11" alt="Logo" />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="text-sm font-bold flex justify-between mr-4 py-2 text-white">
              <div className="text-4xl flex items-center mr-2">
                <MdMarkEmailUnread />
              </div>
              <div className="leading-relaxed">
                <div className="text-md font-medium text-gray-400">
                  Send Email
                </div>
                <div className="text-md font-medium text-white">
                  info@example.com
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="text-sm font-bold flex justify-between mr-4 py-2 text-white ">
              <div className="text-4xl flex items-center mr-2">
                <MdLocationOn />
              </div>
              <div className="leading-relaxed">
                <div className="text-md font-medium text-gray-400">
                  Location
                </div>
                <div className="text-md font-medium text-white">
                  Akij Center, 97, Shaheed Tajuddin Ahmed Sarani, Tejgaon I/A,
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="text-sm font-bold flex justify-between mr-4 py-2 text-white ">
              <div className="text-4xl flex items-center mr-2">
                <MdPermPhoneMsg />
              </div>
              <div className="leading-relaxed">
                <div className="text-md font-medium text-gray-400">
                  Have any Questions?
                </div>
                <div className="text-md font-medium text-white">
                  +88 01755-662545
                </div>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer text-3xl block lg:hidden ml-auto text-white"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <MdOutlineMenu />
          </button>
        </div>
      </div>

      <nav className="relative px-2 bg-white shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
          >
            <div className="flex flex-col lg:flex-row py-0 lg:py-4">
              <a
                className="px-3 py-2 flex items-center text-md uppercase font-medium border-t-4 border-slate-900 lg:border-none hover:text-blue-400"
                href="/"
              >
                Home
              </a>

              <a
                className="px-3 py-2 flex items-center text-md uppercase font-medium text-black hover:text-blue-400"
                href="/"
              >
                About Us
              </a>
              <a
                className="px-3 py-2 flex items-center text-md uppercase font-medium text-black hover:text-blue-400"
                href="/"
              >
                Projects
              </a>
              <a
                className="px-3 py-2 flex items-center text-md uppercase font-medium text-black hover:text-blue-400"
                href="/"
              >
                Services
              </a>
              <a
                className="px-3 py-2 flex items-center text-md uppercase font-medium text-black hover:text-blue-400"
                href="/"
              >
                Blog
              </a>
              <a
                className="px-3 py-2 flex items-center text-md uppercase font-medium text-black hover:text-blue-400"
                href="/"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav className="relative px-2 bg-slate-900 shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
          >
            <div className="flex flex-col lg:flex-row py-0 lg:py-4">
              <a
                className="px-3 py-2 flex items-center text-sm uppercase text-white font-medium border-t-4 border-slate-900 lg:border-none hover:text-blue-400"
                href="/"
              >
                COMMERCIAL VEHICLE
              </a>

              <a
                className="px-3 py-2 flex items-center text-sm uppercase font-medium text-white hover:text-blue-400"
                href="/"
              >
                PRIVATE VEHICLE
              </a>
              <a
                className="px-3 py-2 flex items-center text-sm uppercase font-medium text-white hover:text-blue-400"
                href="/"
              >
                MOTOR SERVICING
              </a>
              <a
                className="px-3 py-2 flex items-center text-sm uppercase font-medium text-white hover:text-blue-400"
                href="/"
              >
                GARAGE EQUIPMENTS
              </a>
              <a
                className="px-3 py-2 flex items-center text-sm uppercase font-medium text-white hover:text-blue-400"
                href="/"
              >
                SPARE PARTS
              </a>
              <a
                className="px-3 py-2 flex items-center text-sm uppercase font-medium text-white hover:text-blue-400"
                href="/"
              >
                ELECTRIC MOTORCYCLE
              </a>
              <a
                className="px-3 py-2 flex items-center text-sm uppercase font-medium text-white hover:text-blue-400"
                href="/"
              >
                FORKLIFT/STACKER
              </a>
              <a
                className="px-3 py-2 flex items-center text-sm uppercase font-medium text-white hover:text-blue-400"
                href="/"
              >
                CONSTRUCTION MACHINERY
              </a>
              <a
                className="px-3 py-2 flex items-center text-sm uppercase font-medium text-white hover:text-blue-400"
                href="/"
              >
                SPECIAL VEHICLE
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
