import React from "react";

const Ads = () => {
  return (
    <div className="bg-red-600">
      <div className="container mx-auto my-16 px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="text-white flex items-center py-16">
            <div>
              <h1 className="text-3xl font-bold pb-2">
                Start today, Drive Today
              </h1>
              <p>Best Private Vehicle</p>
              <button className="rounded-full bg-white px-16 py-3 text-black mt-16">
                More
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <img className="h-96" src="/images/ads.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
