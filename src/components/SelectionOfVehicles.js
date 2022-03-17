import React from "react";

const SelectionOfVehicles = () => {
  return (
    <>
      <div className="container mx-auto my-16 p-1">
        <div className="py-16">
          <h2 className="text-4xl font-bold text-blue-800 text-center">
            Largest Selection of Vehicles
          </h2>
          <p className="text-center text-lg py-3 px-0 lg:px-32">
            AKIJ Motors, one of the biggest auto mobile companies in Bangladesh.
            It has been working since 2016 with trust & reputation. Akij Motors
            solely believes in total customer satisfaction with "Trust & Mutual
            Benefit".
          </p>
        </div>
        <div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-16">
            <div className="shadow-lg py-16 px-6 rounded-md bg-gray-200 cursor-pointer">
              <img class="mx-auto h-40" src="/images/product6.png" alt="" />
              <div class="flex justify-between pt-10">
                <h3 class="font-semibold text-2xl">Find Bikes</h3>
                <button class="bg-red-500 rounded-full text-white text-sm font-bold px-7 py-3 leading-none flex items-center">
                  56000
                </button>
              </div>
            </div>
            <div className="shadow-lg py-16 px-6 rounded-md bg-gray-200 cursor-pointer">
              <img class="mx-auto h-40" src="/images/product1.png" alt="" />
              <div class="flex justify-between pt-10">
                <h3 class="font-semibold text-2xl">Find Pickup</h3>
                <button class="bg-red-500 rounded-full text-white text-sm font-bold px-7 py-3 leading-none flex items-center">
                  56000
                </button>
              </div>
            </div>
            <div className="shadow-lg py-16 px-6 rounded-md bg-gray-200 cursor-pointer">
              <img class="mx-auto h-40" src="/images/product2.png" alt="" />
              <div class="flex justify-between pt-10">
                <h3 class="font-semibold text-2xl">Find Microbus</h3>
                <button class="bg-red-500 rounded-full text-white text-sm font-bold px-7 py-3 leading-none flex items-center">
                  56000
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectionOfVehicles;
