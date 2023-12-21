const express = require("express");
const router = express.Router();
const { getOneRow } = require("../database/db");
const { encode, decode } = require("../function/hash");

router.post("/", async (req, res, next) => {
    try {
        const { username, password } = req.body
        let arr = await getOneRow("SELECT * FROM users WHERE username = ? and password = md5(?) ", [username, password + ":" + process.env.KEY]);
        if (!arr) throw new Error("User not found!")

        // success return answer with token.
        res.json({ token: encode(arr) })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.get("/", async (req, res, next) => {
    try {
        let token = decode(req.headers?.token)
        if (!token) return res.status(401).json({ message: "AuthError" })
        res.json({ message: "ok" })
    } catch (err) {
        return res.status(401).json({ message: "AuthError", err: err?.message })
    }
})


module.exports = router;
