import Image from "next/image";
import React from "react";
import {
  FaArrowRight,
  FaArrowUp,
  FaLocationArrow,
  FaTiktok,
} from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { GrUserFemale } from "react-icons/gr";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RiAiGenerate, RiInstagramFill } from "react-icons/ri";

const page = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#F6F6F6] items-center justify-center">
      <div className="flex flex-row w-[70%] h-[70%] gap-4">
        <div className="flex flex-col w-[30%]  gap-4">
          <div className="flex flex-col w-full rounded-xl bg-[#F9EEE2] px-8 pt-16 pb-28 ">
            <h2 className="text-5xl text-black font-semibold ">
              Create and schedule content{" "}
              <span className="text-[#7651DD]">quicker</span>.
            </h2>
            <button className="flex flex-row items-center bg-[#FFCD6A] rounded-full mt-6 w-fit px-4 py-2 text-[#7651DD] font-semibold mx-auto text-xl gap-2 relative">
              Create post
              <FaArrowRight className="size-4" />
              <FaLocationArrow className="absolute size-6 -bottom-5 left-1/2 -translate-x-[70%]" />
            </button>
          </div>
          <div className="flex flex-col w-full bg-[#FFCD6A] rounded-xl h-full p-8 text-black">
            <h2 className="text-5xl ">Write your content using AI</h2>
            <div className="flex flex-col bg-white rounded-xl p-4 mt-4 gap-2 relative">
              <div className="flex flex-row w-full gap-2">
                <div className="flex w-full bg-[#FFEFED] rounded-xl p-4 text-sm">
                  Create for me a post to publish in my linkedin page.
                </div>
                <div className="flex w-fit h-fit bg-[#FFEFED] rounded-full p-4">
                  <GrUserFemale className="size-6" />
                </div>
              </div>
              <div className="flex flex-row-reverse w-full gap-2">
                <div className="flex w-full bg-[#FCECD2] rounded-xl p-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="flex w-fit h-fit bg-[#DDD1FC] text-[#7651DD] rounded-full p-4">
                  <RiAiGenerate className="size-6" />
                </div>
              </div>
              <div className="flex w-fit p-4 absolute top-1/2 -translate-y-[70%] -right-4 border-8 border-white bg-[#FFCD6A] text-[#7651DD] rounded-full">
                <FaArrowUp className="size-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[70%] h-full gap-4">
          <div className="flex flex-row w-full gap-4">
            <div className="flex flex-col w-[70%] gap-4">
              <div className="flex flex-col p-8 bg-[#7651DD] rounded-xl text-white  items-center justify-center">
                <h2 className="text-4xl font-semibold">
                  Social media <span className="text-[#FFCD6A]">10x</span>
                </h2>
                <h2 className="text-4xl font-semibold">
                  <span className="text-[#FFCD6A]">Faster</span> with ai
                </h2>
                <div className="flex flex-row w-full mt-4 text-[#FFCD6A] items-center justify-center gap-2">
                  <GoStarFill className="size-6" />
                  <GoStarFill className="size-6" />
                  <GoStarFill className="size-6" />
                  <GoStarFill className="size-6" />
                  <GoStarFill className="size-6" />
                </div>
                <h4 className="text-xs text-[#FFCD6A]/50 mt-2">
                  Over 4 000 5-Star review
                </h4>
              </div>
              <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col w-full px-4 py-12 rounded-xl bg-white items-center justify-center">
                  <div className="flex flex-row gap-4 items-center">
                    <div className="flex w-fit rounded-full p-4 bg-[#F8CA7E] text-[#7651DD]">
                      <RiInstagramFill className="size-6" />
                    </div>
                    <div className="flex w-fit rounded-full p-4 bg-[#F8CA7E] text-[#7651DD]">
                      <FaXTwitter className="size-6" />
                    </div>
                    <div className="flex w-fit rounded-full p-4 bg-[#F8CA7E] text-[#7651DD]">
                      <FaSquareFacebook className="size-6" />
                    </div>
                    <div className="flex w-fit rounded-full p-4 bg-[#F8CA7E] text-[#7651DD]">
                      <FaTiktok className="size-6" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-semibold text-black mt-4 ">
                    Manage multiple accounts and platforms
                  </h2>
                </div>
                <div className="flex flex-col w-full p-8 rounded-xl bg-[#FFCD6A] relative">
                  <h2 className="text-5xl  text-black">
                    Maintain a consistant posting schedule
                  </h2>
                  <div className="flex flex-col w-[80%] absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-xl">
                    <div className="flex flex-row justify-between bg-[#7652DD] px-4 py-1 rounded-t-xl">
                      <h3 className="text-white text-xl">August 2024</h3>
                      <h3 className="text-white text-xl">Week 2</h3>
                    </div>
                    <div className="bg-white h-16 flex flex-row gap-4 items-center justify-center">
                      <IoCheckmarkDoneCircle className="size-8 text-[#7652DD]" />
                      <IoCheckmarkDoneCircle className="size-8 text-[#7652DD]" />
                      <IoCheckmarkDoneCircle className="size-8 text-[#7652DD]" />
                      <IoCheckmarkDoneCircle className="size-8 text-[#7652DD]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[30%] h-full bg-[#DDD2FB] rounded-xl text-black pl-4 pt-12 pb-8">
              <h2 className="text-3xl pr-4">Schedule to social media</h2>
              <div className="flex flex-col bg-white p-4 rounded-l-xl mt-4">
                <h3 className="text-sm font-semibold">Best time to post</h3>
                <Image
                  src="/bento/chart-right.png"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <h3 className="text-base mt-4 pr-8">
                Optimize post to publish content at the perfect time for your
                audiance.
              </h3>
            </div>
          </div>
          <div className="flex flex-row w-full gap-4">
            <div className="flex flex-col w-[34%] bg-white text-black rounded-xl h-full p-8 pb-20">
              <h1 className="text-5xl ">+56%</h1>
              <h3 className="text-lg">Faster audiance growth</h3>
              <Image src="/bento/users.png" width={200} height={100} alt="" />
            </div>
            <div className="flex flex-row w-[66%] bg-[#7651DD] text-white rounded-xl p-8 items-center justify-center">
              <Image
                src="/bento/chart-bottom.png"
                width={200}
                height={212}
                alt=""
              />
              <h2 className="text-4xl">Grow followers with non-stop contnet</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
