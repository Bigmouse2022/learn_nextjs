import React from "react";
import { Ranga } from "next/font/google";
import Link from "next/link";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const ranga = Ranga({
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({ children, team, analytics }) {
  return (
    <>
      <div className={ranga.className}>
        <AntdRegistry>
          {children}
          <div className="container mx-auto">
            <div className="flex justify-center text-5xl text-red-500 p-6 gap-6">
              <Link href="/two">平行路由界面</Link>
              <Link href="/two/visitors">Visitors</Link>
            </div>
            <div className="flex gap-6">
            {team}
            {analytics}
            </div>
          </div>
        </AntdRegistry>
      </div>
    </>
  );
}
