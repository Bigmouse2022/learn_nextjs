import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import React from "react";

export function middleware(request: NextRequest) {
  // 重写，访问four页面是，路径不变，但显示得是five页面
  if (request.nextUrl.pathname.startsWith('/four')) {
    return NextResponse.rewrite(new URL('/five', request.url));
  }
}
