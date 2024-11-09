import React, { Dispatch, SetStateAction, useState } from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiGamepadLine } from "react-icons/ri";
import { SiApplearcade } from "react-icons/si";

const Step2 = (props: { setStep: Dispatch<SetStateAction<number>> }) => {
  const [plan, setPlan] = useState<string | undefined>();
  const handleSubmit = () => {
    if (!plan || plan === "error") return setPlan("error");
    localStorage.setItem("plan", `{"plan" : "${plan}"}`);
    props.setStep(3);
  };
  return (
    <div className="flex flex-col w-full pt-8 pl-40">
      <div className="flex flex-col">
        <h1 className="text-5xl font-semibold text-slate-900">
          Select your plan
        </h1>
        <h3 className="text-xl font-sembild text-slate-400 mt-4">
          Plaese choose the plan that you want.
        </h3>
        <div
          className={`flex flex-row w-[600px] border border-slate-500 rounded-lg p-4 items-center gap-4 mt-8 cursor-pointer ${
            plan === "starter" ? "border-2 bg-slate-100" : null
          }`}
          onClick={() => setPlan("starter")}
        >
          <div className="flex p-2 bg-[#FFAF7E] rounded-full">
            <SiApplearcade className="size-6 text-white" />
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-slate-800 font-semibold text-xl">Starter</h3>
            <h4 className="text-slate-400 ">$ 5/Mo</h4>
          </div>
        </div>
        <div
          className={`flex flex-row w-[600px] border border-slate-500 rounded-lg p-4 items-center gap-4 mt-4 cursor-pointer ${
            plan === "advanced" ? "border-2 bg-slate-100" : null
          }`}
          onClick={() => setPlan("advanced")}
        >
          <div className="flex p-2 bg-[#F9818E] rounded-full">
            <RiGamepadLine className="size-6 text-white" />
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-slate-800 font-semibold text-xl">Advanced</h3>
            <h4 className="text-slate-400 ">$ 9/Mo</h4>
          </div>
        </div>
        <div
          className={`flex flex-row w-[600px] border border-slate-500 rounded-lg p-4 items-center gap-4 mt-4 cursor-pointer ${
            plan === "pro" ? "border-2 bg-slate-100" : null
          }`}
          onClick={() => setPlan("pro")}
        >
          <div className="flex p-2 bg-[#483EFF] rounded-full">
            <IoGameControllerOutline className="size-6 text-white" />
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-slate-800 font-semibold text-xl">Pro</h3>
            <h4 className="text-slate-400 ">$ 9/Mo</h4>
          </div>
        </div>
        {plan === "error" ? (
          <h3 className="text-sm font-semibold text-red-400 mt-4">
            Please choose a plan
          </h3>
        ) : null}
      </div>
      <div className="flex w-[600px] h-full items-end justify-end pb-12">
        <button
          className="bg-[#03295A] px-6 py-2 font-sembold text-xl rounded-lg"
          onClick={() => handleSubmit()}
        >
          Next step
        </button>
      </div>
    </div>
  );
};

export default Step2;
