"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import "@ant-design/v5-patch-for-react-19";
import Image from "next/image";
import sixSrc from "/public/five.png";
type FieldType = {
  login?: string;
  password?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Page: React.FC = () => {
  const router = useRouter();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const r = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await r.json();
    console.log(data);
    if (data.success === true) {
      router.push("/six");
    }
  };
  return (
    <div className="container flex justify-center mx-auto pt-48">
      <div className="absolute inset-0 -z-10">
        <Image src={sixSrc} style={{ objectFit: "fill" }} alt="three" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400"></div> */}
      </div>
      <Form
        className="w-96"
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        style={{ maxWidth: 600 }}
        initialValues={{ login: "admin", password: "123123" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="用户名"
          name="login"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Page;
