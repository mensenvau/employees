
import { checkAuth, encode } from "@/lib/jwt";
import { getRow } from "@/lib/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        let arr = await getRow("SELECT * FROM branchs", [])
        return NextResponse.json({ message: "ok", arr });
    } catch {
        return NextResponse.json({ message: "User not found!" }, { status: 405 });
    }
}