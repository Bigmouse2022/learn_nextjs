import React from "react";
import { Ranga } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const ranga = Ranga({
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({ children, modal }) {
  return (
    <>
      <div className={ranga.className}>
        <AntdRegistry>
          {children}
          {modal}
        </AntdRegistry>
      </div>
    </>
  );
}
