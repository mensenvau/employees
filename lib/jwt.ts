let jwt = require('jsonwebtoken');

let encode = (data: any) => {
    return jwt.sign(data, process.env.KEY, {
        expiresIn: "1d"
    });
}

let decode = (token: any) => {
    return jwt.verify(token, process.env.KEY);
}

let checkAuth = (token: any) => {
    try {
        let verify = decode(token)
        if (!verify) throw new Error()
        return true
    } catch {
        return false
    }
}
export { encode, decode, checkAuth }