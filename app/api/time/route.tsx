import { NextRequest, NextResponse } from "next/server";

// 这种会出现缓存在生产模式下 pnpm build && pnpm start
export function GET(){
    console.log('GET /api/time')
    return NextResponse.json({
        time: new Date().toLocaleTimeString()
    })

}
//退出缓存第一种方式**********
// export function GET(request:NextRequest){
//     const searchParams = request.nextUrl.searchParams
//     console.log('GET /api/time')
//     return NextResponse.json({
//         time: new Date().toLocaleTimeString(),
//         searchParams
//     })

// }
// **********
//退出缓存第二种方式**********
//直接加一个这个就可以
// export function GET(){
//     console.log('GET /api/time')
//     return NextResponse.json({
//         time: new Date().toLocaleTimeString()
//     })

// }
// export function POST(){}
//退出缓存第二种方式**********
//退出缓存第三种方式**********
//直接加一个这个就可以
// import { cookies } from "next/headers"
// export async function GET(){
//     console.log('GET /api/time')
//  const cookieStore = cookies()
//  const token = (await cookieStore).get('token')

//     return NextResponse.json({
//         time: new Date().toLocaleTimeString(),
//         token
//     })

// }

//退出缓存第三种方式**********
//退出缓存第四种方式**********
// import { cookies, headers } from "next/headers";
// export async function GET() {
//   console.log("GET /api/time");
//   const headersList = headers();
//   const referer = (await headersList).get("referer");

//   return NextResponse.json({
//     time: new Date().toLocaleTimeString(),
//     referer,
//   });
// }
//退出缓存第四种方式**********
//退出缓存第五种方式**********
// export const dynamic = 'force-dynamic'
// export function GET(){
//     console.log('GET /api/time')
//     return NextResponse.json({
//         time: new Date().toLocaleTimeString()
//     })

// }
//退出缓存第五种方式**********
//退出缓存第六种方式**********缓存的时效性处理
// export const revalidate = 10;
// export function GET() {
//   console.log("GET /api/time");
//   return NextResponse.json({
//     time: new Date().toLocaleTimeString(),
//   });
// }
//退出缓存第六种方式**********
