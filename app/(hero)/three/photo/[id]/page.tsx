import React from "react";
import { photos } from "../../../../../data/photodata";
import Image from "next/image";
import Link from "next/link";

interface IParams {
  params: Promise<{ id: string }>;
}
//动态Metadata
export async function generateMetadata({ params }: IParams) {
  const param = (await params);
  return {
    title: `用户页面 - ${param.id}`,
  };
}
export default async function page({ params }:IParams) {
  const param = await params;
  const photo = photos.find((item) => item.id === param.id)!;
  return (
    <div className="container mx-auto pt-8">
      <Image
        src={photo.src}
        width={400}
        height={400}
        alt={photo.alt}
        className="rounded-lg block mx-auto"
      />
      <div className="border-2 border-dashed border-gray-500 rounded-lg p-3 mt-6 leading-8">
        <p>
          <strong>Title:</strong>
          {photo.alt}
        </p>
        <p>
          <strong>Price:</strong>
          {photo.price}
        </p>
        <p>
          <strong>Desc:</strong>
          {photo.id}
        </p>
      </div>
      <div className="text-center">
        <Link className="text-center" href="/three">
          回到上一页
        </Link>
      </div>
    </div>
  );
}
