import { getRow } from "@/lib/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id') as string;
        let arr = await getRow("SELECT * FROM employees WHERE id = ?", [id])
        return NextResponse.json({ message: "ok", arr: arr[0] || {} });
    } catch (err: any) {
        return NextResponse.json({ message: "Error application!", err: err?.message }, { status: 404 });
    }
}

export async function POST(req: NextRequest) {
    try {
        // const { id, name }: any = await req.json()
        console.log(await req.json())
        // let arr = await getRow("UPDATE branchs SET name = ? WHERE id = ?", [name, id])
        return NextResponse.json({ message: "ok" });
    } catch (err: any) {
        return NextResponse.json({ message: "Error application!", err: err?.message }, { status: 404 });
    }
}