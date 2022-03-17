import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 pt-7 pb-12 px-10">
      <div className="container mx-auto mt-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          <div>
            <img className="h-24 pb-5" src="/images/logo2.png" alt="" />
            <div className="flex flex-row lg:pb-0 pb-10">
              <img
                className="w-8 h-8 rounded-full"
                src="/images/fb.png"
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full ml-5"
                src="/images/instra.png"
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full ml-5"
                src="/images/tw.png"
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full ml-5"
                src="/images/yt.png"
                alt=""
              />
            </div>
          </div>
          <div className="text-white">
            <h3 className="font-bold pb-3">SUPPORT</h3>
            <h3 className="pt-1 hover:text-red-500 cursor-pointer">Blog</h3>
            <h3 className="pt-1 hover:text-red-500 cursor-pointer">FAQ</h3>
            <h3 className="pt-1 hover:text-red-500 cursor-pointer">
              Calculator
            </h3>
            <h3 className="pt-1 hover:text-red-500 cursor-pointer">
              Powerpoint(PPTX)
            </h3>
          </div>
          <div className="text-white">
            <h3 className="font-bold pb-3">Delearship</h3>
            <h3 className="pt-1 hover:text-red-500 cursor-pointer">Apply</h3>
            <h3 className="pt-1 hover:text-red-500 cursor-pointer">
              Required Document
            </h3>
          </div>
          <div className="text-white">
            <h3 className="font-bold pb-3">LINKS</h3>
            <h3 className="pt-1 hover:text-red-500 cursor-pointer">
              Terms & Conditions
            </h3>
            <h3 className="pt-1 hover:text-red-500 cursor-pointer">
              Privacy & Policy
            </h3>
            <h3 className="pt-1 hover:text-red-500 cursor-pointer">Dealer</h3>
            <h3 className="pt-1 hover:text-red-500 cursor-pointer">Career</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
