import React from "react";

const Blog = () => {
  return (
    <>
      <div className="container mx-auto my-16 p-1">
        <div className="pb-8">
          <h2 className="text-4xl font-bold text-blue-800 text-center pt-4">
            From Our Blog
          </h2>
          <div className="flex justify-center py-5">
            <div
              style={{
                width: "300px",
                height: "50px",
                backgroundColor: "#fb5d5e",
                transform: "skewX(-35deg)",
                margin: "10px",
                padding: "10px 25px",
              }}
            >
              <span
                style={{
                  transform: "skewX(35deg)",
                  display: "block",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Helpful Vehicle Buying
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 pt-10">
          <div className="rounded overflow-hidden bg-white shadow-lg transform duration-500 hover:-translate-y-2 cursor-pointer">
            <img
              className="w-full h-72 object-cover"
              src="/images/blog.jpg"
              alt=""
            />
            <div className="px-6 py-4 break-all">
              <div className="font-bold text-xl mb-2 text-black">
                <h3>Latest News</h3>
              </div>
              <p className="text-black text-base">
                AKIJ Motors, one of the biggest automobile companies in
                Bangladesh. It has been working since 2016 with trust &
                reputation. Akij Motors
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden bg-white shadow-lg transform duration-500 hover:-translate-y-2 cursor-pointer">
            <img
              className="w-full h-72 object-cover"
              src="/images/blog.jpg"
              alt=""
            />
            <div className="px-6 py-4 break-all">
              <div className="font-bold text-xl mb-2 text-black">
                <h3>Latest News</h3>
              </div>
              <p className="text-black text-base">
                AKIJ Motors, one of the biggest automobile companies in
                Bangladesh. It has been working since 2016 with trust &
                reputation. Akij Motors
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden bg-white shadow-lg transform duration-500 hover:-translate-y-2 cursor-pointer">
            <img
              className="w-full h-72 object-cover"
              src="/images/blog.jpg"
              alt=""
            />
            <div className="px-6 py-4 break-all">
              <div className="font-bold text-xl mb-2 text-black">
                <h3>Latest News</h3>
              </div>
              <p className="text-black text-base">
                AKIJ Motors, one of the biggest automobile companies in
                Bangladesh. It has been working since 2016 with trust &
                reputation. Akij Motors
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
