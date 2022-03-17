import React from "react";

const Product = () => {
  return (
    <div className="my-16 container mx-auto">
      <div>
        <h1 className="text-center text-blue-800 text-4xl font-bold mb-12">
          Find Best Vehicles
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 overflow-hidden">
        <div
          className="col-span-2 bg-blue-700 hidden lg:block"
          style={{ height: "40rem" }}
        >
          <div className="relative px-2 pt-3 lg:pt-0">
            <div className="">
              <div className="flex flex-col py-0 lg:py-4">
                <a
                  className="px-3 pt-10 flex items-center text-md text-white font-medium hover:text-red-400"
                  href="/"
                >
                  All CATEGORY
                </a>

                <a
                  className="px-3 pt-8 flex items-center text-sm font-medium text-white hover:text-red-400"
                  href="/"
                >
                  PICKUP/COVERED VAN DIESEL 4
                </a>
                <a
                  className="px-3 pt-5 flex items-center text-sm font-medium text-white hover:text-red-400"
                  href="/"
                >
                  Pickup Petrol/CNG/LPG 1
                </a>
                <a
                  className="px-3 pt-5 flex items-center text-sm font-medium text-white hover:text-red-400"
                  href="/"
                >
                  Human Hauler/Tempu 3
                </a>
                <a
                  className="px-3 pt-5 flex items-center text-sm font-medium text-white hover:text-red-400"
                  href="/"
                >
                  Light Duty Truck 3
                </a>
                <a
                  className="px-3 pt-5 flex items-center text-sm font-medium text-white hover:text-red-400"
                  href="/"
                >
                  Medium Duty Truck 3
                </a>
                <a
                  className="px-3 pt-5 flex items-center text-sm font-medium text-white hover:text-red-400"
                  href="/"
                >
                  Cargo Truck (6x4) 23 Ton
                </a>
                <a
                  className="px-3 pt-5 flex items-center text-sm font-medium text-white hover:text-red-400"
                  href="/"
                >
                  Cargo Truck (6x4) 45 Ton
                </a>
                <a
                  className="px-3 pt-5 flex items-center text-sm font-medium text-white hover:text-red-400"
                  href="/"
                >
                  3.5 CBM Kamla
                </a>
                <a
                  className="px-3 pt-5 flex items-center text-sm font-medium text-white hover:text-red-400"
                  href="/"
                >
                  3.5/5.0 CBM Kamla Plus
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7 p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
            <div className="text-center p-12 bg-gray-300 transition-colors duration-300 hover:bg-gray-400 rounded-md">
              <div className="break-all">
                <div className="flex justify-center">
                  <img className="h-40" src="/images/product1.png" alt="" />
                </div>
                <h5 className="text-xl uppercase font-medium pt-5">Kamla</h5>
              </div>
            </div>
            <div className="text-center p-12 bg-gray-300 transition-colors duration-300 hover:bg-gray-400 rounded-md">
              <div className="break-all">
                <div className="flex justify-center">
                  <img className="h-40" src="/images/product1.png" alt="" />
                </div>
                <h5 className="text-xl uppercase font-medium pt-5">Kamla</h5>
              </div>
            </div>
            <div className="text-center p-12 bg-gray-300 transition-colors duration-300 hover:bg-gray-400 rounded-md">
              <div className="break-all">
                <div className="flex justify-center">
                  <img className="h-40" src="/images/product1.png" alt="" />
                </div>
                <h5 className="text-xl uppercase font-medium pt-5">Kamla</h5>
              </div>
            </div>
            <div className="text-center p-12 bg-gray-300 transition-colors duration-300 hover:bg-gray-400 rounded-md">
              <div className="break-all">
                <div className="flex justify-center">
                  <img className="h-40" src="/images/product1.png" alt="" />
                </div>
                <h5 className="text-xl uppercase font-medium pt-5">Kamla</h5>
              </div>
            </div>
            <div className="text-center p-12 bg-gray-300 transition-colors duration-300 hover:bg-gray-400 rounded-md">
              <div className="break-all">
                <div className="flex justify-center">
                  <img className="h-40" src="/images/product1.png" alt="" />
                </div>
                <h5 className="text-xl uppercase font-medium pt-5">Kamla</h5>
              </div>
            </div>
            <div className="text-center p-12 bg-gray-300 transition-colors duration-300 hover:bg-gray-400 rounded-md">
              <div className="break-all">
                <div className="flex justify-center">
                  <img className="h-40" src="/images/product1.png" alt="" />
                </div>
                <h5 className="text-xl uppercase font-medium pt-5">Kamla</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Released vehicle */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-24 p-1">
        <div>
          <h1 className="text-2xl font-bold mb-12">New Released vehicle</h1>
          <div className="grid grid-cols-2">
            <div>
              <div className="flex flex-row items-center py-4">
                <img src="/images/icon1.png" alt="icon" />
                <h3 className="pl-4">Stylish Design.</h3>
              </div>
              <div className="flex flex-row items-center py-4">
                <img src="/images/icon1.png" alt="icon" />
                <h3 className="pl-4">Hydraulic-brake system.</h3>
              </div>
              <div className="flex flex-row items-center py-4">
                <img src="/images/icon1.png" alt="icon" />
                <h3 className="pl-4">No Chain sprocket.</h3>
              </div>
              <div className="flex flex-row items-center py-4">
                <img src="/images/icon1.png" alt="icon" />
                <h3 className="pl-4">No cost for fuel.</h3>
              </div>
            </div>
            <div>
              {" "}
              <div className="flex flex-row items-center py-4">
                <img src="/images/icon1.png" alt="icon" />
                <h3 className="pl-4">Eco-friendly.</h3>
              </div>
              <div className="flex flex-row items-center py-4">
                <img src="/images/icon1.png" alt="icon" />
                <h3 className="pl-4">Very effective with minimum cost.</h3>
              </div>
              <div className="flex flex-row items-center py-4">
                <img src="/images/icon1.png" alt="icon" />
                <h3 className="pl-4">Hassle free smooth driving</h3>
              </div>
              <div className="flex flex-row items-center py-4">
                <img src="/images/icon1.png" alt="icon" />
                <h3 className="pl-4">No Sound pollution.</h3>
              </div>
            </div>
          </div>
          <h1 className="text-base pt-4">
            Conditional warranty: 6-month warrenty for Battery, Motor and
            <br />
            Controller.
          </h1>
          <button className="rounded-full bg-red-500 px-8 py-3 text-white mt-6">
            Learn More
          </button>
        </div>
        <div>
          <img src="/images/product7.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Product;
