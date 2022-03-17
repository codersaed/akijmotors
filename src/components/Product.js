import React from "react";

const Product = () => {
  return (
    <div className="my-16 container mx-auto">
      <div>
        <h1 className="text-center text-4xl font-bold mb-12">
          Find Best Vehicles
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
        <div className="col-span-2 bg-green-500">hello1</div>
        <div className="col-span-7 bg-red-500">hello2</div>
      </div>
    </div>
  );
};

export default Product;
