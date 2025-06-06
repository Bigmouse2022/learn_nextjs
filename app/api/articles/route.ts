import { NextRequest, NextResponse } from "next/server";
import db from "../../../data/db";


// GET => /api/articles
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const pagenum = Number(searchParams.get("pagenum")) || 1;
  const pagesize = Number(searchParams.get("pagesize")) || 2;
  const query = searchParams.get("query") || "";

  const data = db.data.posts;
  let filteredData = query
    ? data.filter((item) => {
        const { id, ...rest } = item; //把item排除，下面的...rest包含title和content
        //遍历的那一次，return为true的时候，会把item放到一个精数组里面，最后给到filterData里面
        //不区分大小写toLowerCase()
        return Object.values(rest).some((value) =>
          String(value).toLowerCase().includes(query.toLowerCase())
        );
      })
    : data;

  const total = filteredData.length;

  const startIndex = (pagenum - 1) * pagesize;
  const endIndex = Math.min(startIndex + pagesize, total);

  filteredData =
    startIndex >= total ? [] : filteredData.slice(startIndex, endIndex);

  return NextResponse.json({
    code: 0,
    message: "获取成功",
    data: {
      total,
      list: filteredData,
    },
  });
}
// POST => /api/articles 添加

export async function POST(request: Request) {
  const data = await request.json();
  await db.update(({ posts }) =>
    posts.unshift({
      id: Math.random().toString(36).slice(-8),
      ...data,
    })
  );
  return NextResponse.json({
    code: 0,
    message: "添加成功",
    data,
  });
}
