"use client";
import oneSrc from "/public/one.png";
import React from "react";
import Image from "next/image";
import { Avatar, List } from "antd";
import Link from "next/link";
import { data } from "../../data";

//因为Metadata不能使用client组件，所以要分开

export default function Onelist() {
  return (
    <div>
      <div className="h-screen relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={oneSrc}
            fill
            style={{ objectFit: "cover" }}
            alt="onepage"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400"></div>
        </div>
        <div className="flex justify-center pt-48">
          <h1 className="text-white text-6xl">动态路由</h1>
        </div>
        <div className="max-w-xl mx-auto">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  className="!items-center"
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<Link href={`/one/${item.id}`}>{item.title}</Link>}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}
