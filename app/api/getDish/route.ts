// app/api/getDish/route.ts

import { NextResponse } from "next/server";
import { getDishes } from "@/lib/data";

// 处理 GET 请求
export async function GET() {
  try {
    const dishes = await getDishes();
    return NextResponse.json(dishes);
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
