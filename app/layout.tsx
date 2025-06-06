import "./globals.css";

import { Ranga } from "next/font/google";
import { Metadata } from "next";
import Header from "./component/header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
const ranga = Ranga({
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ranga.className}>
        <Header />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
