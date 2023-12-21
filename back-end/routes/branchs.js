const express = require("express")
const router = express.Router()
const { getOneRow, getRow, deleteQuery, insertQuery, updateQuery } = require("../database/db")

router.get("/", async (req, res, next) => {
    try {
        let arr = await getRow("SELECT * FROM branchs", [])
        res.json({ message: "ok", arr })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.post("/add", async (req, res, next) => {
    try {
        let { name } = req.body
        let ins = await insertQuery("INSERT INTO branchs (name) VALUES (?)", [name])
        res.json({ message: "ok", id: ins?.insertId })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.post("/delete", async (req, res, next) => {
    try {
        let { id } = req.body
        await deleteQuery("DELETE FROM branchs WHERE id = ?", [id])
        res.json({ message: "ok" })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.get("/one", async (req, res, next) => {
    try {
        let { id } = req.query;
        let arr = await getOneRow("SELECT * FROM branchs WHERE id = ?", [id])
        res.json({ message: "ok", arr })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.post("/one", async (req, res, next) => {
    try {
        const { id, name } = req.body;
        await updateQuery("UPDATE branchs SET name = ? WHERE id = ?", [name, id])
        res.json({ message: "ok" })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})


module.exports = router;
