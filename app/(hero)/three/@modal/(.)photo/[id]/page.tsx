'use client'
import React, { useReducer } from "react";
import { photos } from "../../../../../../data/photodata";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IParams {
  params: Promise<{ id: string }>;
}

export default function page({ params }: IParams) {
  const param = React.use(params);
  const photo = photos.find((item) => item.id === param.id)!;
  // const router = useRouter()
  const router = useRouter();

  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-gray-500/[0.8]"
      onClick={router.back}
    >
      <Image
        src={photo.src}
        width={500}
        height={500}
        alt={photo.alt}
        className="rounded-lg"
        onClick={e=>e.stopPropagation()}
      />
      {/* <div className="text-center">
        <Link className="text-center" href="/three">
          回到上一页
        </Link>
      </div> */}
    </div>
  );
}
