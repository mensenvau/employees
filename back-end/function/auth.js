const { decode } = require("./hash");

let authStop = async (req, res, next) => {
    try {
        let token = decode(req.headers?.token)
        if (!token) return res.status(401).json({ message: "AuthError" })
        next()
    } catch (err) {
        res.status(401).json({ message: "AuthError", err: err?.message })
    }
}

module.exports = { authStop };