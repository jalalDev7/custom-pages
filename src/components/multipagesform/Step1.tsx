import React from "react";

const Step1 = () => {
  return (
    <div className="flex flex-col w-full pt-8 pl-40">
      <div className="flex flex-col">
        <h1 className="text-5xl font-semibold text-slate-900">Personal info</h1>
        <h3 className="text-xl font-sembild text-slate-400 mt-4">
          Plaese provide your name, email adress, and your phone number
        </h3>
        <h4 className="text-lg font-semibold text-slate-700 mt-10">Name</h4>
        <input
          type="text"
          placeholder="e.g. Mohamed jalal"
          className="w-[600px] border border-zinc-200 rounded-lg p-4 mt-1 font-semibold"
        />
        <h4 className="text-lg font-semibold text-slate-700 mt-2">
          Email adress
        </h4>
        <input
          type="email"
          placeholder="e.g. email@company.com"
          className="w-[600px] border border-zinc-200 rounded-lg p-4 mt-1 font-semibold"
        />
        <h4 className="text-lg font-semibold text-slate-700 mt-2">
          Phone number
        </h4>
        <input
          type="text"
          placeholder="e.g. Mohamed jalal"
          className="w-[600px] border border-zinc-200 rounded-lg p-4 mt-1 font-semibold"
        />
      </div>
      <div className="flex w-[600px] h-full items-end justify-end pb-12">
        <button className="bg-[#03295A] px-6 py-2 font-sembold text-xl rounded-lg">
          Next step
        </button>
      </div>
    </div>
  );
};

export default Step1;
