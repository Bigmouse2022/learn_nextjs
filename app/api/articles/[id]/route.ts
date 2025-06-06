import { NextResponse } from "next/server";
import db from "../../../../data/db";

interface IParams {
  params: { id: string };
}
// DELETE => /api/articles/:id

export async function DELETE(request: Request, { params }: IParams) {
await db.update(({ posts }) =>{
   const idx= posts.findIndex(post=>post.id ===params.id)
    posts.splice(idx,1)
} )
    return NextResponse.json({
    code:0,
    message:"删除成功",
    })
}

// PATCH => /api/articles/:id
export async function PATCH(request: Request, { params }: IParams) {
    const data =await request.json()
    let idx = -1;
  await db.update(({ posts }) =>{
   idx= posts.findIndex(post=>post.id ===params.id)
   posts[idx]={...posts[idx],...data}//...data是前端传过来的数据，..posts[idx]是原来的数据，data会把前面的覆盖掉
} )
    return NextResponse.json({
    code:0,
    message:"修改成功",
    data: db.data.posts[idx],
    })
    //失败的情况先不考虑
}

// GET => /api/articles/:id
export async function GET(request: Request, { params }: IParams) {
     const data = db.data.posts.find(post=> post.id===params.id)
         return NextResponse.json({
    code:0,
    message:"查找成功",
    data,
    })
}
