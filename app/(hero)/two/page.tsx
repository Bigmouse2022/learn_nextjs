import React from 'react'
import twoSrc from '/public/two.png'
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata:Metadata={
  title:"平行路由",
  description:"Two"
}

export default function TwoPage() {
  return (
    <div className="h-screen relative">
    <div className="absolute inset-0 -z-10">
     <Image src={twoSrc} fill style={{objectFit:'fill'}} alt='two'/>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400"></div> */}
    </div>
    <div className="flex justify-center pt-48">
      <h1 className="text-white text-6xl">平行路由初始界面</h1>
      <h1 className="text-white text-6xl">⬇</h1>
    </div>
    </div>
  );
}