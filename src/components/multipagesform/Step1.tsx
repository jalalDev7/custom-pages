import React, { Dispatch, SetStateAction, useState } from "react";

const Step1 = (props: { setStep: Dispatch<SetStateAction<number>> }) => {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [phone, setPhone] = useState<string | undefined>();

  const handleSubmit = () => {
    setSubmit(true);
    if (!email || email === "error") return setEmail("error");
    if (!name || name === "error") return setEmail("error");
    if (!phone || phone === "error") return setEmail("error");
    localStorage.setItem(
      "data",
      `{"name" : "${name}","email" : "${email}", "phone": "${phone}"}`
    );
    props.setStep(2);
  };
  return (
    <div className="flex flex-col w-full pt-8 pl-40">
      <div className="flex flex-col">
        <h1 className="text-5xl font-semibold text-slate-900">Personal info</h1>
        <h3 className="text-xl font-sembild text-slate-400 mt-4">
          Plaese provide your name, email adress, and your phone number
        </h3>
        <h4 className="text-base font-semibold text-slate-700 mt-10">Name</h4>
        <input
          type="text"
          placeholder="e.g. Mohamed jalal"
          className={`w-[600px] border border-zinc-200 rounded-lg p-4 mt-1 font-semibold placeholder:opacity-70 text-black ${
            submit && (!name || name === "error")
              ? "border-red-500 bg-red-100"
              : ""
          }`}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <h4 className="text-base font-semibold text-slate-700 mt-2">
          Email adress
        </h4>
        <input
          type="email"
          placeholder="e.g. email@company.com"
          className={`w-[600px] border border-zinc-200 rounded-lg p-4 mt-1 font-semibold placeholder:opacity-70 text-black ${
            submit && (!email || email === "error")
              ? "border-red-500 bg-red-100"
              : ""
          }`}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <h4 className="text-base font-semibold text-slate-700 mt-2">
          Phone number
        </h4>
        <input
          type="text"
          placeholder="e.g. 0600000000"
          className={`w-[600px] border border-zinc-200 rounded-lg p-4 mt-1 font-semibold placeholder:opacity-70 text-black ${
            submit && (!phone || phone === "error")
              ? "border-red-500 bg-red-100"
              : ""
          }`}
          onChange={(e) => setPhone(e.currentTarget.value)}
        />
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

export default Step1;
