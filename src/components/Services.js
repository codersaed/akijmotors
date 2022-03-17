import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-white pt-10">
        <h2 className="text-4xl font-bold text-blue-800 text-center">
          OUR SERVICING
        </h2>
      </div>

      <div className="bg-slate-900">
        <div className="container mx-auto my-16 p-1">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 my-7 p-1 ">
            <div className="flex items-center">
              <img className="h-80" src="/images/product8.png" alt="" />
            </div>
            <div>
              <div className="grid grid-cols-2 text-white">
                <div>
                  <div className="py-4">
                    <img
                      className="h-16 w-16"
                      src="/images/icon5.png"
                      alt="icon"
                    />
                    <h3 className="pl-4">
                      Powerful engines, strong chassis We use engines which
                      follow garmany technologies. We also have original ichijo
                      engines(japan), Nishan petrol pump engines(japan), single
                      weichai engines e.t.c.
                    </h3>
                  </div>
                  <div className="py-4">
                    <img
                      className="h-16 w-16"
                      src="/images/icon6.png"
                      alt="icon"
                    />
                    <h3 className="pl-4">
                      Low maintenance cost Our vehicles costes less fuel so it
                      reduces maintenance cost. On the other hand, spare parts
                      are easily found on our site.
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="py-4">
                    <img
                      className="h-16 w-16"
                      src="/images/icon7.png"
                      alt="icon"
                    />
                    <h3 className="pl-4">
                      Fuel efficiency & eco-friendly Our products cost less fuel
                      to run the vehicle. So it burns less diesel or gas. what
                      reduces pollution and maintains a healthy environment.
                    </h3>
                  </div>
                  <div className="pt-10 pb-4">
                    <img
                      className="h-16 w-16"
                      src="/images/icon8.png"
                      alt="icon"
                    />
                    <h3 className="pl-4">
                      Easy payment plan We have facilities to provide payment at
                      a time or customer-friendly installment..
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer container mx-auto mb-16 px-8">
        <div className="transform hover:scale-95 duration-300 px-10 py-2">
          <img
            src="/images/g1.png"
            alt=""
            className="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div className="relative px-7 -mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mt-1 text-xl font-medium uppercase leading-tight truncate">
                Battery
              </h4>
            </div>
          </div>
        </div>
        <div className="transform hover:scale-95 duration-300 px-10 py-2">
          <img
            src="/images/g2.jpg"
            alt=""
            className="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div className="relative px-7 -mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mt-1 text-xl font-medium uppercase leading-tight truncate">
                AIR CONDITIONING
              </h4>
            </div>
          </div>
        </div>
        <div className="transform hover:scale-95 duration-300 px-10 py-2">
          <img
            src="/images/g3.jpg"
            alt=""
            className="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div className="relative px-7 -mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mt-1 text-xl font-medium uppercase leading-tight truncate">
                STEEGING
              </h4>
            </div>
          </div>
        </div>
        <div className="transform hover:scale-95 duration-300 px-10 py-2">
          <img
            src="/images/g4.jpg"
            alt=""
            className="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div className="relative px-7 -mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mt-1 text-xl font-medium uppercase leading-tight truncate">
                ENGINE MANAGEMENT
              </h4>
            </div>
          </div>
        </div>
        <div className="transform hover:scale-95 duration-300 px-10 py-2">
          <img
            src="/images/g5.jpg"
            alt=""
            className="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div className="relative px-7 -mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mt-1 text-xl font-medium uppercase leading-tight truncate">
                SUSPENSION
              </h4>
            </div>
          </div>
        </div>
        <div className="transform hover:scale-95 duration-300 px-10 py-2">
          <img
            src="/images/g4.jpg"
            alt=""
            className="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div className="relative px-7 -mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mt-1 text-xl font-medium uppercase leading-tight truncate">
                WHEEL
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
