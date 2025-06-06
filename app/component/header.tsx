"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkData = [
  { name: "动态路由", href: "/one" },
  { name: "平行路由", href: "/two" },
  { name: "拦截路由", href: "/three" },
  { name: "中间件1", href: "/four" },
  { name: "中间件2", href: "/five" },
  { name: "登出", href: "/six" },
  { name: "登录", href: "/login" },
];

//const accessLink =[ "/","/one","/two","/three"];

export default function Header() {
  const pathname = usePathname();
  //if (!accessLink.includes(pathname)) return null;
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8">
        <Link
          className={
            pathname === "/"
              ? "text-purple-500  text-3xl font-bold"
              : "text-3xl font-bold"
          }
          href="/"
        >
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map((link) => (
            <Link
              key={link.name}
              className={pathname === link.href ? "text-purple-500" : ""}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
