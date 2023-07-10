import React from "react";
import Image from "next/image";

type Props = {
  p1: string;
  p2: string;
  p3: string;
};

function AvatarGroup({ p1, p2, p3 }: Props) {
  return (
    <div className="h-5  -ml-[2px] w-full aspect-square relative">
      <Image
        className="w-4 h-4 border-2 border-white rounded-full dark:border-gray-800 absolute top-0 left-0"
        src={p1}
        width={20}
        height={20}
        crossOrigin="anonymous"
        alt=""
      />
      <Image
        className="w-4 h-4 border-2 border-white rounded-full dark:border-gray-800 absolute top-3 -right-2"
        src={p2}
        width={20}
        height={20}
        alt=""
        crossOrigin="anonymous"
      />
      <Image
        className="w-5 h-5 border-2 border-white rounded-full dark:border-gray-800 absolute bottom-2 left-4"
        src={p3}
        width={20}
        height={20}
        crossOrigin="anonymous"
        alt=""
      />
    </div>
  );
}

export default AvatarGroup;
