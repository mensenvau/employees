import { insertQuery } from "@/lib/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { id }: any = await req.json();

        let dlt = await insertQuery("DELETE FROM employees WHERE id = ?", [id]);

        return NextResponse.json({ dlt });
    } catch (err: any) {
        return NextResponse.json({ message: "Error application!", err: err.message }, { status: 404 });
    }
}
