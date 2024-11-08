import Step1 from "@/components/multipagesform/Step1";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#EEF5FF] items-center justify-center">
      <div className="flex flex-row w-[70%] min-h-[700px] bg-white rounded-xl p-6">
        <div className="flex flex-col w-[400px] bg-[#483EFF] rounded-xl min-h-full relative">
          <Image
            src="/multi-pages-form/mesh.png"
            width={400}
            height={400}
            className="absolute bottom-0 left-0 rounded-b-xl object-cover"
            alt=""
          />
          <div className="flex flex-row w-full items-center  gap-4 mt-8 ml-8">
            <div className="rounded-full border border-white  py-1 px-3 font-semibold bg-[#BFE2FA] text-black">
              1
            </div>
            <div className="flex flex-col">
              <h3 className="opacity-50">Step 1</h3>
              <h4 className="font-semibold">Personal info</h4>
            </div>
          </div>
          <div className="flex flex-row w-full items-center  gap-4 mt-8 ml-8">
            <div className="rounded-full border border-white py-1 px-3 font-semibold">
              2
            </div>
            <div className="flex flex-col">
              <h3 className="opacity-50">Step 2</h3>
              <h4 className="font-semibold">Select plan</h4>
            </div>
          </div>
          <div className="flex flex-row w-full items-center  gap-4 mt-8 ml-8">
            <div className="rounded-full border border-white py-1 px-3 font-semibold">
              3
            </div>
            <div className="flex flex-col">
              <h3 className="opacity-50">Step 3</h3>
              <h4 className="font-semibold">Add-ons</h4>
            </div>
          </div>
          <div className="flex flex-row w-full items-center  gap-4 mt-8 ml-8">
            <div className="rounded-full border border-white py-1 px-3 font-semibold">
              4
            </div>
            <div className="flex flex-col">
              <h3 className="opacity-50">Step 4</h3>
              <h4 className="font-semibold">Summary</h4>
            </div>
          </div>
        </div>
        <Step1 />
      </div>
    </div>
  );
};

export default page;
