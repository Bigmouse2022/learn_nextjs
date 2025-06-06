import { NextRequest, NextResponse } from "next/server";

//随便看下，不用很仔细，太拉了

// const api = "https://api.zhihur.com/admin";
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { login, password } = body;
  const response = await fetch(`https://api.zhihur.com/admin/auth/sign_in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      login,
      password,
    }),
  });
  const data = await response.json();
  if (!data.status) {
    return NextResponse.json(
      { success: true, msg: data.message,data:data },
      { status: response.status || 500 }
    );
  }
  const token = data.data.token;
  /* return NextResponse.json(
    { success: true, msg: data.message },
    {
      // 3600 * 24
      headers: { "Set-Cookie": `token=${token};path=/;max-age=86400;HttpOnly` },
    }
  ); */
  const responses = NextResponse.json({ success: true, msg: data.message });
  responses.cookies.set("token", token, {
    path: "/",
    maxAge: 86400,
    httpOnly: true,
  });
  return responses;
}