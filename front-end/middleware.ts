// middleware.ts
import { checkAuth } from '@/lib/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    try {
        let token: any = req.headers.get("token")
        if (!(await checkAuth(token))) throw new Error("token expired!")
        return NextResponse.next();
    } catch (err: any) {
        return NextResponse.json({ message: "AuthError!" }, { status: 405 });
    }
}

export const config = {
    matcher: ['/api/branchs/:path*', '/api/employees/:path*',]
}