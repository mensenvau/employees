
import { insertQuery } from "@/lib/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { full_name, workplace }: any = await req.json();

        let ins = await insertQuery("INSERT INTO employees (full_name, workplace) VALUES (?, ?)", [full_name, workplace]);

        return NextResponse.json({ id: ins?.insertId });
    } catch (err: any) {
        return NextResponse.json({ message: "Error application!", err: err.message }, { status: 404 });
    }
}
