import Image from "next/image";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <div className="flex w-full min-h-screen relative overflow-x-hidden bg-white items-center justify-center">
      <div className="flex absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 bg-gradient-to-bl from-[#CC42FD] to-[#903CFE] h-full rounded-b-full w-[500px] z-0" />
      <div className="flex absolute bottom-0 right-0 translate-x-1/4  bg-slate-100 h-[80%] rounded-t-full w-[500px] z-0" />
      <div className="flex flex-row w-[70%] z-10 gap-20 items-center">
        <div className="flex flex-col w-[380px] h-fit rounded-[40px] bg-white shadow-2xl relative p-4 overflow-hidden">
          <div className="flex bg-white rounded-b-3xl absolute left-1/2 -top-0 -translate-x-1/2 z-20 w-[50%] h-[50px]" />
          <div className="flex flex-row w-full h-[120px] bg-gradient-to-bl from-[#CC42FD] to-[#903CFE] rounded-t-3xl z-10">
            <div className="flex flex-row w-full items-center mt-6 justify-between gap-2 p-2">
              <IoIosArrowBack className="size-8 text-white" />
              <div className="flex flex-row w-full gap-2 items-center">
                <Image
                  src="/profile-picture.jpg"
                  width={50}
                  height={50}
                  alt="avatar"
                  className="rounded-full aspect-square object-cover"
                />
                <div className="flex flex-col w-full">
                  <h3 className="text-base font-semibold text-white">
                    Mohamed jalal
                  </h3>
                  <h4 className="text-xs font-medium text-white/50">
                    Founder & Designer
                  </h4>
                </div>
              </div>
              <IoIosArrowForward className="size-8 text-white" />
            </div>
          </div>
          <div className="flex flex-col w-full h-full bg-slate-100 rounded-b-3xl gap-2 p-2">
            <div className="flex rounded-lg bg-[#EEE6F3] text-[#a36bc5] p-2 text-sm max-w-[70%] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="flex rounded-lg bg-[#EEE6F3] text-[#a36bc5] p-2 text-sm max-w-[70%] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="flex rounded-lg w-full items-end justify-end mt-2">
              <div className="flex flex-row max-w-[70%] gap-2">
                <Image
                  src="/image-show.jpg"
                  width={70}
                  height={70}
                  alt="avatar"
                  className="rounded-lg aspect-square object-cover"
                />
                <Image
                  src="/image-show3.jpg"
                  width={70}
                  height={70}
                  alt="avatar"
                  className="rounded-lg aspect-square object-cover"
                />
                <Image
                  src="/image-show2.jpg"
                  width={70}
                  height={70}
                  alt="avatar"
                  className="rounded-lg aspect-square object-cover"
                />
              </div>
            </div>
            <div className="flex rounded-lg w-full items-end justify-end">
              <div className="flex flex-col max-w-[70%] bg-white rounded-lg p-2 text-sm text-black/50 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="flex rounded-lg bg-[#EEE6F3] text-[#a36bc5] p-2 text-sm max-w-[70%] font-normal mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum dicta ipsum voluptatem expedita.
            </div>
            <div className="flex flex-row max-w-[70%] items-center justify-between bg-gradient-to-bl from-[#CC42FD] to-[#903CFE] rounded-lg h-[50px] gap-4">
              <Image
                src="/audio-signal.png"
                width={100}
                height={10}
                alt="avatar"
                className=" object-cover ml-6"
              />
              <h3 className="text-lg font-semibold text-white mr-4">1:37</h3>
            </div>
            <div className="flex flex-row max-w-[70%] items-center justify-between bg-gradient-to-bl from-[#CC42FD] to-[#903CFE] rounded-lg h-[50px] gap-4">
              <Image
                src="/audio-signal.png"
                width={100}
                height={10}
                alt="avatar"
                className=" object-cover ml-6 scale-x-125"
              />
              <h3 className="text-lg font-semibold text-white mr-4">2:18</h3>
            </div>
            <div className="flex items-end justify-end bg-white rounded-2xl p-2 mt-2 mb-1">
              <div className="flex p-2 bg-[#3B3053] rounded-full ">
                <IoIosArrowForward className="size-6 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[900px] text-black">
          <h1 className="text-5xl font-semibold">Chat application</h1>
          <p className="mt-8 text-slate-400 font-semibold leading-loose">
            Our web chat application provides a seamless, real-time
            communication experience designed to keep users connected. With an
            intuitive interface and fast message delivery, users can chat
            individually or in groups, share multimedia files, and engage in
            meaningful conversations. Built with robust security protocols, the
            app ensures that every message remains private and secure. Whether
            used for personal chats, business discussions, or community
            interactions, our web chat application is optimized for both desktop
            and mobile devices, offering a reliable, engaging, and accessible
            platform for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
