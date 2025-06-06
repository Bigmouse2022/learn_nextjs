import React from 'react'
import twoSrc from '/public/two.png'
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata:Metadata={
  title:"Two",
  description:"Two"
}

export default function TwoDefaultPage() {
  return (
    <div className="h-screen relative">
    <div className="absolute inset-0 -z-10">
     <Image src={twoSrc} fill style={{objectFit:'cover'}} alt='two'/>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400"></div>
    </div>
    <div className="flex justify-center pt-48">
      <h1 className="text-white text-6xl">平行路由default页面</h1>
    </div>
    </div>
  );
}