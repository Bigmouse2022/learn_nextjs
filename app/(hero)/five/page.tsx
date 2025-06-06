import React from "react";
import fiveSrc from "/public/five.png";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "中间件2",
  description: "Five",
};
export default function FourPage() {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={fiveSrc} style={{ objectFit: "fill" }} alt="three" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400"></div> */}
      </div>
      <div className="flex justify-center pt-48">
       <h1 className="text-white text-5xl">我是middleware2</h1>
      </div>
    </div>
  );
}
