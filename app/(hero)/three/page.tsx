import React from "react";
import threeSrc from "/public/three.png";
import { Metadata } from "next";
import Image from "next/image";
import { photos } from "../../../data/photodata";

export const metadata: Metadata = {
  title: "Three",
  description: "Three",
};
export default function ThreePage() {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={threeSrc} fill style={{ objectFit: "cover" }} alt="three" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400"></div>
      </div>
      <div className="flex justify-center pt-48">
        <div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {photos.map((item) => (
                <a href="#" className="group" key={item.id}>
                  <Image
                    src={item.src}
                    width={200}
                    height={200}
                    alt={item.alt}
                  />
                  <h3 className="mt-4 text-sm text-gray-700">{item.alt}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {item.price}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
