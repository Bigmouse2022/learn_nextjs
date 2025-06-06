"use client";
import React from "react";
import sixSrc from "/public/five.png";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { Button } from "antd";
export default function Page() {
  const router = useRouter();
  const handleLogout = async () => {
    const r = await fetch("/api/logout", {
      method: "DELETE",
    });
    const data = await r.json();
    if (data.success === true) {
      router.push("/login");
    }
  };
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={sixSrc} style={{ objectFit: "fill" }} alt="three" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400"></div> */}
      </div>
      <div className="flex justify-center pt-48">
        <Button type="primary" onClick={handleLogout}>
          退出
        </Button>
      </div>
    </div>
  );
}
