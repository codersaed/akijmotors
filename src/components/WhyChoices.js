import React from "react";

const WhyChoices = () => {
  return (
    <div>
      <div className="container mx-auto my-16 p-1">
        <div className="pb-16">
          <h2 className="text-4xl font-bold text-blue-800 text-center">
            Why People Love Us So Much
          </h2>
          <p className="text-center text-lg py-3">
            AKIJ Motors solely believes in total customer satisfaction with
            "Trust & Mutual Benefit". With this particular view.
          </p>
        </div>
        <div className="px-12 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer bg-gray-200">
          <div className="text-center p-8 bg-white rounded-lg mx-10">
            <div className="break-all">
              <div className="p-3 flex justify-center">
                <img className="h-16" src="/images/icon3.png" alt="" />
              </div>
              <h5 className="text-xl text-red-400 font-bold p-3">1000+</h5>
              <p className="text-gray-600 font-bold">Vehicle in Stock</p>
            </div>
          </div>
          <div className="text-center p-8 bg-white rounded-lg mx-10 relative lg:top-8 ">
            <div className="break-all">
              <div className="p-3 flex justify-center">
                <img className="h-16" src="/images/icon4.png" alt="" />
              </div>
              <h5 className="text-xl text-red-400 font-bold p-3">20k</h5>
              <p className="text-gray-600 font-bold">Happy Customer</p>
            </div>
          </div>
          <div className="text-center p-8 bg-white rounded-lg mx-10">
            <div className="break-all">
              <div className="p-3 flex justify-center">
                <img className="h-16" src="/images/icon3.png" alt="" />
              </div>
              <h5 className="text-xl text-red-400 font-bold p-3">10000+</h5>
              <p className="text-gray-600 font-bold">Dealer</p>
            </div>
          </div>
          <div className="text-center p-8 bg-white rounded-lg mx-10 relative lg:top-8">
            <div className="break-all">
              <div className="p-3 flex justify-center">
                <img className="h-16" src="/images/icon2.png" alt="" />
              </div>
              <h5 className="text-xl text-red-400 font-bold p-3">30</h5>
              <p className="text-gray-600 font-bold">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoices;
