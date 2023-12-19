
import { checkAuth, encode } from "@/lib/jwt";
import { getRow } from "@/lib/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { username, password }: any = await req.json();

        let arr = await getRow("SELECT * FROM users WHERE username = ? and password = md5(?) ", [username, password + ":" + process.env.KEY]);
        if (arr.length == 0) {
            return NextResponse.json({ message: "user not found!" }, { status: 404 });
        }

        return NextResponse.json({ token: encode(arr[0]) });
    } catch {
        return NextResponse.json({ message: "User not found!" }, { status: 405 });
    }
}

export async function GET(req: NextRequest) {
    try {
        let token: any = req.headers.get("token")
        if (!checkAuth(token)) throw new Error("token expired!")
        return NextResponse.json({ message: "ok" });
    } catch {
        return NextResponse.json({ message: "User not found!" }, { status: 405 });
    }
}