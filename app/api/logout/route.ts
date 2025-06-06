import { NextResponse } from "next/server";

export async function DELETE() {
  // 设置过期时间为 0 来删除 cookie
  // cookies().set('token', '', { maxAge: 0 });

  const responses = NextResponse.json({
    success: true,
    msg: "登出成功",
  });
  responses.cookies.set("token", "", { maxAge: 0 });
  return responses;
}