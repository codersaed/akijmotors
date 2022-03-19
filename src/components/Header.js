import React from "react";
import Sidebar from "../common/Sidebar";

const Header = () => {
  // const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <div className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-white">
        <div className="container px-4 py-3 mx-auto flex flex-wrap items-center justify-between ">
          <div className="text-lg uppercase font-medium text-white leading-relaxed inline-block mr-4 py-2">
            <div>
              <img src="images/logo.png" className="h-12" alt="Logo" />
            </div>
          </div>
          <nav className="relative px-2 pt-3 lg:pt-0">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div>
                <div className="flex flex-row py-0 lg:py-4">
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase font-medium hover:text-red-400"
                    href="/"
                  >
                    Home
                  </a>

                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase font-medium text-black hover:text-red-400"
                    href="/"
                  >
                    About Us
                  </a>
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase font-medium text-black hover:text-red-400"
                    href="/"
                  >
                    Projects
                  </a>
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase font-medium text-black hover:text-red-400"
                    href="/"
                  >
                    Services
                  </a>
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase font-medium text-black hover:text-red-400"
                    href="/"
                  >
                    Blog
                  </a>
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase font-medium text-black hover:text-red-400"
                    href="/"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <nav className="relative px-2 bg-slate-900 shadow-md overflow-x-auto no-scrollbar">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div>
            <div className="flex flex-row py-0 lg:py-4">
              <Sidebar />
              <a
                className="pr-36 lg:py-0 py-3 flex items-center text-base uppercase text-white font-medium border-slate-900 "
                href="/"
              >
                CATEGORIES
              </a>
              <a
                className="px-3 lg:py-0 py-3 flex items-center text-xs uppercase text-white font-medium border-t-4 border-slate-900 lg:border-none hover:text-red-400"
                href="/"
              >
                COMMERCIAL VEHICLE
              </a>

              <a
                className="px-3 lg:py-0 py-3 flex items-center text-xs uppercase font-medium text-white hover:text-red-400"
                href="/"
              >
                PRIVATE VEHICLE
              </a>
              <a
                className="px-3 lg:py-0 py-3 flex items-center text-xs uppercase font-medium text-white hover:text-red-400"
                href="/"
              >
                MOTOR SERVICING
              </a>
              <a
                className="px-3 lg:py-0 py-3 flex items-center text-xs uppercase font-medium text-white hover:text-red-400"
                href="/"
              >
                GARAGE EQUIPMENTS
              </a>
              <a
                className="px-3 lg:py-0 py-3 flex items-center text-xs uppercase font-medium text-white hover:text-red-400"
                href="/"
              >
                SPARE PARTS
              </a>
              <a
                className="px-3 lg:py-0 py-3 flex items-center text-xs uppercase font-medium text-white hover:text-red-400"
                href="/"
              >
                ELECTRIC MOTORCYCLE
              </a>
              <a
                className="px-3 lg:py-0 py-3 flex items-center text-xs uppercase font-medium text-white hover:text-red-400"
                href="/"
              >
                FORKLIFT/STACKER
              </a>
              <a
                className="px-3 lg:py-0 py-3 flex items-center text-xs uppercase font-medium text-white hover:text-red-400"
                href="/"
              >
                CONSTRUCTION MACHINERY
              </a>
              <a
                className="px-3 lg:py-0 py-3 flex items-center text-xs uppercase font-medium text-white hover:text-red-400"
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
