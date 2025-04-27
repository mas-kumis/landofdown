import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#090b1a] w-screen h-screen px-[30px] md:px-[100px] lg:px-[150px] flex justify-center items-center">
      {/* Card */}
      <div className="bg-[#1b1938]  md:w-[1200px] rounded-md  grid grid-row-2 md:grid-cols-2">
        <div className=" px-8 py-8 order-2 md:order-1 flex flex-col">
          <h1 className="text-white text-[32px] font-bold lg:w-[450px]">
            Get Insight that help your business grow.
          </h1>
          <p className="text-[15px] lg:w-[400px] text-white opacity-75 mt-4 ">
            Discover the benefits of data analytics and make better dicisions
            regardioing revenue, customer experience, and overall efficiency.
          </p>
          <div className="grid grid-cols-3 mt-[50px]">
            <div className="gap-0 flex flex-col text-white">
              <h6 className="font-bold text-[30px]">10k +</h6>
              <p className="text-[15px] opacity-75">COMPANIES</p>
            </div>
            <div className="gap-0 flex flex-col text-white">
              <h6 className="font-bold text-[30px]">314</h6>
              <p className="text-[15px] opacity-75">TEMPLATE</p>
            </div>
            <div className="gap-0 flex flex-col text-white">
              <h6 className="font-bold text-[30px]">12M +</h6>
              <p className="text-[15px] opacity-75">QUERIES</p>
            </div>
          </div>
        </div>
        <div className="h-[300px] md:h-full w-full relative order-1 md:order-2">
          <Image
            src="/image.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="100%"
            className="rounded-r-md"
          />
          <div className="absolute bg-purple-800 opacity-50 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
