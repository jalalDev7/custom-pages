import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-[#39384C] text-black">
      <div className="flex flex-row w-[50%] bg-white rounded-3xl h-[600px] p-8 relative">
        <div className="flex flex-col w-full h-full justify-center">
          <h1 className="text-6xl font-semibold text-black">Stay updated!</h1>
          <h3 className="text-base text-black mt-6 max-w-[80%]">
            Join +60 000 product manager recieving monthly updates on.
          </h3>
          <div className="flex flex-row gap-4 items-center mt-8">
            <Image
              src="/sign-up-form/icon-list.svg"
              width={30}
              height={30}
              className=""
              alt=""
            />
            <h3 className="text-sm text-black">
              Product discovery and building what matter
            </h3>
          </div>
          <div className="flex flex-row gap-4 items-center mt-2">
            <Image
              src="/sign-up-form/icon-list.svg"
              width={30}
              height={30}
              className=""
              alt=""
            />
            <h3 className="text-sm text-black">
              Measuring to ensure update are a success
            </h3>
          </div>
          <div className="flex flex-row gap-4 items-center mt-2">
            <Image
              src="/sign-up-form/icon-list.svg"
              width={30}
              height={30}
              className=""
              alt=""
            />
            <h3 className="text-sm text-black">And much more!</h3>
          </div>
          <h3 className="font-semibold text-sm mt-8">Email adress</h3>
          <input
            type="text"
            className="w-[90%] border border-zinc-300 p-4 mt-1"
            placeholder="exemple@exemple.com"
            required
          />
          <button className="flex w-[90%] bg-[#26263F] rounded-lg items-center justify-center py-4 text-white font-semibold mt-4 hover:bg-gradient-to-tr hover:from-[#FF527B] hover:to-[#FF6A3A]  hover:shadow-lg hover:shadow-[#FF6A3A] transition-all duration-100 ease-in-out ">
            Subscribe to monthly newsletter
          </button>
        </div>
        <div>
          <Image
            src="/sign-up-form/illustration-sign-up-desktop.svg"
            width={600}
            height={600}
            className=""
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
