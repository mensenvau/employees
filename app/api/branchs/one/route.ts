import { getRow } from "@/lib/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id') as string;
        let arr = await getRow("SELECT * FROM branchs WHERE id = ?", [id])
        return NextResponse.json({ message: "ok", arr: arr[0] || {} });
    } catch {
        return NextResponse.json({ message: "User not found!" }, { status: 405 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { id, name }: any = await req.json()
        let arr = await getRow("UPDATE branchs SET name = ? WHERE id = ?", [name, id])
        console.log(arr, id, name)
        return NextResponse.json({ message: "ok" });
    } catch {
        return NextResponse.json({ message: "User not found!" }, { status: 405 });
    }
}