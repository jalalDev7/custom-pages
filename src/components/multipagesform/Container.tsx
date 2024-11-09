"use client";
import Step1 from "@/components/multipagesform/Step1";
import Step2 from "@/components/multipagesform/Step2";
import Step3 from "@/components/multipagesform/Step3";
import Image from "next/image";
import React, { useState } from "react";

const Container = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="flex w-full min-h-screen bg-[#EEF5FF] items-center justify-center">
      <div className="flex flex-row w-fit min-h-[700px] bg-white rounded-xl p-6 drop-shadow-xl">
        <div className="flex flex-col  w-[400px] max-w-[400px] bg-[#483EFF] rounded-xl min-h-full relative">
          <Image
            src="/multi-pages-form/mesh.png"
            width={400}
            height={400}
            className="absolute bottom-0 left-0 rounded-b-xl object-cover"
            alt=""
          />
          <div className="flex flex-row w-full items-center  gap-4 mt-8 ml-8">
            <div
              className={`rounded-full border border-white  py-1 px-3 font-semibold ${
                step === 1 ? "bg-[#BFE2FA] text-black" : null
              }`}
            >
              1
            </div>
            <div className="flex flex-col">
              <h3 className="opacity-50">Step 1</h3>
              <h4 className="font-semibold">Personal info</h4>
            </div>
          </div>
          <div className="flex flex-row w-full items-center  gap-4 mt-8 ml-8">
            <div
              className={`rounded-full border border-white  py-1 px-3 font-semibold ${
                step === 2 ? "bg-[#BFE2FA] text-black" : null
              }`}
            >
              2
            </div>
            <div className="flex flex-col">
              <h3 className="opacity-50">Step 2</h3>
              <h4 className="font-semibold">Select plan</h4>
            </div>
          </div>

          <div className="flex flex-row w-full items-center  gap-4 mt-8 ml-8">
            <div
              className={`rounded-full border border-white  py-1 px-3 font-semibold ${
                step === 3 ? "bg-[#BFE2FA] text-black" : null
              }`}
            >
              3
            </div>
            <div className="flex flex-col">
              <h3 className="opacity-50">Step 3</h3>
              <h4 className="font-semibold">Show data</h4>
            </div>
          </div>
        </div>
        {step === 1 ? (
          <Step1 setStep={setStep} />
        ) : step === 2 ? (
          <Step2 setStep={setStep} />
        ) : step === 3 ? (
          <Step3 setStep={setStep} />
        ) : null}
      </div>
    </div>
  );
};

export default Container;
