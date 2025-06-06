import { Card } from "antd";
import React from "react";
import { data } from "../../../../data";
import Link from "next/link";

interface IParams {
  params: { id: string };
}

//动态Metadata
export async function generateMetadata({ params }: IParams) {
  return {
    title: `用户页面 - ${params.id}`,
  };
}

export default function page({ params }:IParams) {
  const item = data.find((item) => item.id === +params.id);
  return (
    <div>
      <div className="max-w-xl mx-auto">
        <Card title={item?.id}>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </Card>
      </div>
      <div className="text-center">
        <Link className="text-center" href="/one">
          回到上一页
        </Link>
      </div>
    </div>
  );
}
