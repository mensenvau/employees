
import { insertQuery } from "@/lib/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name }: any = await req.json();

        let ins = await insertQuery("INSERT INTO branchs (name) VALUES (?)", [name]);

        return NextResponse.json({ id: ins?.insertId });
    } catch (err: any) {
        return NextResponse.json({ message: "User not found!", err: err.message }, { status: 405 });
    }
}
