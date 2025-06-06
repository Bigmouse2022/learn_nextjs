import Header from "../component/header";

import React from "react";
import { Ranga } from "next/font/google";

const ranga = Ranga({
  subsets: ["latin"],
  weight:'400'
});
export default function RootLayout({ children }) {
  return (
    <>
      <div className={ranga.className}>
        <Header />
        {children}
      </div>
    </>
  );
}
