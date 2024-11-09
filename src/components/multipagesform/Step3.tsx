import React, { Dispatch, SetStateAction } from "react";

const Step3 = (props: { setStep: Dispatch<SetStateAction<number>> }) => {
  const data = JSON.parse(localStorage.getItem("data")!);
  const plan = JSON.parse(localStorage.getItem("plan")!);
  console.log(data, plan);
  return (
    <div className="flex flex-col w-full pt-8 pl-40">
      <div className="flex flex-col w-[600px]">
        <h1 className="text-5xl font-semibold text-slate-900">Final data</h1>
        <h3 className="text-xl font-sembild text-slate-400 mt-4 mb-8">
          Plaese confirm you personal data and plan.
        </h3>
        <div className="flex flex-row w-[600px] items-center text-slate-800 gap-2 mb-2">
          <h3 className="text-xl font-semibold">Name :</h3>
          <h3 className="text-xl ">{data.name}</h3>
        </div>
        <div className="flex flex-row w-[600px] items-center text-slate-800 gap-2 mb-2">
          <h3 className="text-xl font-semibold">Email :</h3>
          <h3 className="text-xl ">{data.email}</h3>
        </div>
        <div className="flex flex-row w-[600px] items-center text-slate-800 gap-2 mb-2">
          <h3 className="text-xl font-semibold">Phone :</h3>
          <h3 className="text-xl ">{data.phone}</h3>
        </div>
        <div className="flex flex-row w-[600px] items-center text-slate-800 gap-2 mb-2">
          <h3 className="text-xl font-semibold">Plan :</h3>
          <h3 className="text-xl ">{plan.plan}</h3>
        </div>
      </div>
      <div className="flex w-[600px] h-full items-end justify-end pb-12">
        <button
          className="bg-[#03295A] px-6 py-2 font-sembold text-xl rounded-lg"
          onClick={() => props.setStep(1)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step3;
