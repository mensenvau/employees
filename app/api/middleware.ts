// middleware.ts
import { checkAuth } from '@/lib/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    console.log("sadfg")
    try {
        console.log(req.headers)

        let token: any = req.headers.get("token")
        console.log(req.headers)

        if (!checkAuth(token)) throw new Error("token expired!")
        return NextResponse.next();
    } catch {
        console.log("sadfg")
        return NextResponse.json({ message: "User not found!" }, { status: 405 });
    }
}