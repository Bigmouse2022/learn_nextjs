import React from "react";
import Hero from "./component/hero";
import homeSrc from "../public/home.png";
import '@ant-design/v5-patch-for-react-19';
import { Button } from "antd";

export default function Page() {
  return (
    <div>
      <Hero imgurl={homeSrc} altText="Home" content="Home" />
    </div>
  );
}
