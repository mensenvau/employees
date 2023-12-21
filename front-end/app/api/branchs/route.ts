
import { NextRequest, NextResponse } from "next/server";
import { getRow } from "@/lib/mysql";

export async function GET(req: NextRequest) {
    try {
        let arr = await getRow("SELECT * FROM branchs", [])
        return NextResponse.json({ message: "ok", arr });
    } catch (err: any) {
        console.log(err?.message)
        return NextResponse.json({ message: "Error application!", err: err?.message }, { status: 404 });
    }
}