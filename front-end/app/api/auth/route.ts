
import { NextRequest, NextResponse } from "next/server";
import { checkAuth, encode } from "@/lib/jwt";
import { getRow } from "@/lib/mysql";

export async function POST(req: NextRequest) {
    try {
        const { username, password }: any = await req.json();

        let arr = await getRow("SELECT * FROM users WHERE username = ? and password = md5(?) ", [username, password + ":" + process.env.KEY]);
        if (arr.length == 0) return NextResponse.json({ message: "AuthError!" }, { status: 404 });
        return NextResponse.json({ token: await encode(arr[0]) });
    } catch (err: any) {
        return NextResponse.json({ message: "AuthError!", error: err.message }, { status: 405 });
    }
}

export async function GET(req: NextRequest) {
    try {
        let token: any = req.headers.get("token")
        if (!(await checkAuth(token))) throw new Error("token expired!")
        return NextResponse.json({ message: "ok" });
    } catch (err: any) {
        return NextResponse.json({ message: "AuthError!", error: err.message }, { status: 405 });
    }
}