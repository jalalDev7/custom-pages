import Image from "next/image";
import React from "react";

const page = () => {
  const row1 = [
    {
      id: 1,
      svg: null,
    },
    {
      id: 2,
      svg: null,
    },
    {
      id: 3,
      svg: null,
    },
    {
      id: 4,
      svg: null,
    },
    {
      id: 5,
      svg: null,
    },
    {
      id: 6,
      svg: null,
    },
    {
      id: 7,
      svg: null,
    },
    {
      id: 8,
      svg: null,
    },
    {
      id: 9,
      svg: null,
    },
    {
      id: 10,
      svg: null,
    },
    {
      id: 11,
      svg: null,
    },
    {
      id: 12,
      svg: null,
    },
    {
      id: 13,
      svg: null,
    },
    {
      id: 14,
      svg: null,
    },
    {
      id: 15,
      svg: null,
    },
    {
      id: 16,
      svg: null,
    },
    {
      id: 17,
      svg: null,
    },
    {
      id: 18,
      svg: null,
    },
    {
      id: 19,
      svg: null,
    },
    {
      id: 20,
      svg: null,
    },
  ];
  const row2 = [
    {
      id: 1,
      svg: null,
    },
    {
      id: 2,
      svg: null,
    },
    {
      id: 3,
      svg: null,
    },
    {
      id: 4,
      svg: null,
    },
    {
      id: 5,
      svg: null,
    },

    {
      id: 7,
      svg: "/icons-grid/javascript-svgrepo-com.svg",
    },
    {
      id: 8,
      svg: "/icons-grid/typescript-svgrepo-com.svg",
    },
    {
      id: 9,
      svg: "/icons-grid/node-js-svgrepo-com.svg",
    },
    {
      id: 10,
      svg: "/icons-grid/react-svgrepo-com.svg",
    },
    {
      id: 11,
      svg: "/icons-grid/next-js-svgrepo-com.svg",
    },
    {
      id: 12,
      svg: "/icons-grid/tailwind-svgrepo-com.svg",
    },
    {
      id: 13,
      svg: "/icons-grid/html-5-svgrepo-com.svg",
    },
    {
      id: 14,
      svg: "/icons-grid/css-svgrepo-com.svg",
    },
    {
      id: 6,
      svg: null,
    },
    {
      id: 15,
      svg: null,
    },
    {
      id: 16,
      svg: null,
    },
    {
      id: 17,
      svg: null,
    },
    {
      id: 18,
      svg: null,
    },
    {
      id: 19,
      svg: null,
    },
    {
      id: 20,
      svg: null,
    },
  ];
  const row3 = [
    {
      id: 1,
      svg: null,
    },
    {
      id: 2,
      svg: null,
    },
    {
      id: 3,
      svg: null,
    },
    {
      id: 4,
      svg: null,
    },
    {
      id: 5,
      svg: null,
    },

    {
      id: 7,
      svg: "/icons-grid/angular-icon-svgrepo-com.svg",
    },
    {
      id: 8,
      svg: "/icons-grid/vs-code-svgrepo-com.svg",
    },
    {
      id: 9,
      svg: "/icons-grid/laravel-svgrepo-com.svg",
    },
    {
      id: 10,
      svg: "/icons-grid/google-cloud-svgrepo-com.svg",
    },
    {
      id: 11,
      svg: "/icons-grid/aws-svgrepo-com.svg",
    },
    {
      id: 12,
      svg: "/icons-grid/docker-icon-svgrepo-com.svg",
    },
    {
      id: 13,
      svg: "/icons-grid/figma-svgrepo-com.svg",
    },
    {
      id: 14,
      svg: "/icons-grid/es6-svgrepo-com.svg",
    },
    {
      id: 6,
      svg: null,
    },
    {
      id: 15,
      svg: null,
    },
    {
      id: 16,
      svg: null,
    },
    {
      id: 17,
      svg: null,
    },
    {
      id: 18,
      svg: null,
    },
    {
      id: 19,
      svg: null,
    },
    {
      id: 20,
      svg: null,
    },
  ];
  const row4 = [
    {
      id: 1,
      svg: null,
    },
    {
      id: 2,
      svg: null,
    },
    {
      id: 3,
      svg: null,
    },
    {
      id: 4,
      svg: null,
    },
    {
      id: 5,
      svg: null,
    },

    {
      id: 7,
      svg: "/icons-grid/kubernetes-svgrepo-com.svg",
    },
    {
      id: 8,
      svg: "/icons-grid/git-icon-svgrepo-com.svg",
    },
    {
      id: 9,
      svg: "/icons-grid/linux-tux-svgrepo-com.svg",
    },
    {
      id: 10,
      svg: "/icons-grid/node-sass-svgrepo-com.svg",
    },
    {
      id: 11,
      svg: "/icons-grid/nestjs-svgrepo-com.svg",
    },
    {
      id: 12,
      svg: "/icons-grid/npm-svgrepo-com.svg",
    },
    {
      id: 13,
      svg: "/icons-grid/postgresql-svgrepo-com.svg",
    },
    {
      id: 14,
      svg: "/icons-grid/mongo-svgrepo-com.svg",
    },
    {
      id: 6,
      svg: null,
    },
    {
      id: 15,
      svg: null,
    },
    {
      id: 16,
      svg: null,
    },
    {
      id: 17,
      svg: null,
    },
    {
      id: 18,
      svg: null,
    },
    {
      id: 19,
      svg: null,
    },
    {
      id: 20,
      svg: null,
    },
  ];
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-[#101010]">
      <h1 className="flex max-w-[600px] text-5xl text-white text-center">
        Powering your favorite frameworks and tools
      </h1>
      <div className="flex flex-col w-fit relative overflow-hidden ">
        <div className="flex w-full bg-gradient-to-b from-[#101010] to-transparent h-16 absolute top-0 left-0 z-10" />
        <div className="flex w-full bg-gradient-to-t from-[#101010] to-transparent h-16 absolute bottom-0 left-0 z-10" />
        <div className="flex w-96 bg-gradient-to-r from-[#101010] to-transparent h-full absolute top-0 left-0 z-10" />
        <div className="flex w-96 bg-gradient-to-l from-[#101010] to-transparent h-full absolute top-0 right-0 z-10" />
        <div className="flex flex-col w-full overflow-hidden items-center justify-center gap-4 z-0">
          <div className="flex flex-row w-full gap-4 items-center justify-center">
            {row1.map((item) => (
              <div
                key={`row-1-${item.id}`}
                className="flex flex-initial size-20 rounded-lg bg-[#181818] border border-[#3d3d3d]/25"
              >
                {item.svg ? (
                  <Image src={item.svg} width={30} height={30} alt="" />
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex flex-row w-full gap-4 items-center justify-center">
            {row2.map((item) => (
              <div
                key={`row-2-${item.id}`}
                className="flex items-center justify-center size-20 rounded-lg bg-[#181818] border border-[#3d3d3d]/25 translate-x-20"
              >
                {item.svg ? (
                  <Image
                    src={item.svg}
                    width={50}
                    height={50}
                    alt=""
                    className="drop-shadow-md"
                  />
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex flex-row w-full gap-4 items-center justify-center">
            {row3.map((item) => (
              <div
                key={`row-3-${item.id}`}
                className="flex items-center justify-center size-20 rounded-lg bg-[#181818] border border-[#3d3d3d]/25"
              >
                {item.svg ? (
                  <Image
                    src={item.svg}
                    width={50}
                    height={50}
                    alt=""
                    className="drop-shadow-md"
                  />
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex flex-row w-full gap-4 items-center justify-center">
            {row4.map((item) => (
              <div
                key={`row-4-${item.id}`}
                className="flex items-center justify-center size-20 rounded-lg bg-[#181818] border border-[#3d3d3d]/25 translate-x-20"
              >
                {item.svg ? (
                  <Image
                    src={item.svg}
                    width={50}
                    height={50}
                    alt=""
                    className="drop-shadow-md"
                  />
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex flex-row w-full gap-4 items-center justify-center">
            {row1.map((item) => (
              <div
                key={`row-5-${item.id}`}
                className="flex flex-initial size-20 rounded-lg bg-[#181818] border border-[#3d3d3d]/25"
              >
                {item.svg ? (
                  <Image src={item.svg} width={30} height={30} alt="" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
