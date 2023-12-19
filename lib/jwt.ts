import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

export async function encode(payload: any): Promise<string> {
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60 * 60; // one hour

    return new SignJWT({ ...payload })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(process.env.KEY));
}

export async function decode(token: string): Promise<any> {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.KEY));
    return payload;
}

export async function checkAuth(token: any) {
    try {
        let verify = await decode(token)
        if (!verify) throw new Error()
        // console.log("part 1:", token, verify)
        return true
    } catch (err: any) {
        return false
    }
}
