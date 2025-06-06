import Image, { StaticImageData } from "next/image";
import React from "react";

interface IPros {
  imgurl: StaticImageData;
  altText: string;
  content: string;
}

export default function Hero(props: IPros) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgurl}
          fill
          style={{ objectFit: "cover" }}
          alt={props.altText}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-6xl">{props.content}</h1>
      </div>
    </div>
  );
}
