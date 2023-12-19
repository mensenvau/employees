import { insertQuery } from "@/lib/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { id }: any = await req.json();

        let dlt = await insertQuery("DELETE FROM branchs WHERE id = ?", [id]);

        return NextResponse.json({ dlt });
    } catch (err: any) {
        return NextResponse.json({ message: "User not found!", err: err.message }, { status: 405 });
    }
}
