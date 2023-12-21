const express = require("express");
const router = express.Router();
const path = require("path");
const md5 = require('md5');
const { getOneRow, getRow, deleteQuery, insertQuery, updateQuery } = require("../database/db");

router.get("/", async (req, res, next) => {
    try {
        let arr = await getRow("SELECT * FROM vw_employees ORDER BY id DESC", [])
        res.json({ message: "ok", arr })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.post("/add", async (req, res, next) => {
    try {
        let { full_name, workplace } = req.body
        let ins = await insertQuery("INSERT INTO employees (full_name, workplace) VALUES (?, ?)", [full_name, workplace])
        res.json({ message: "ok", id: ins?.insertId })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.post("/delete", async (req, res, next) => {
    try {
        let { id } = req.body
        await deleteQuery("DELETE FROM employees WHERE id=?", [id])
        res.json({ message: "ok" })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.get("/one", async (req, res, next) => {
    try {
        let { id } = req.query;
        let arr = await getOneRow("SELECT * FROM employees WHERE id=?", [id])
        res.json({ message: "ok", arr })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.post("/one", async (req, res, next) => {
    try {
        const { id, branch_id, full_name, workplace, position_held, passport_serial, passport_number, passport_day, birth_place, birth_day, address, ins, inn, phone_number, work_experience, contract_number, contract_day, comment, employment_start_day, employment_end_day, military, passport_address, nation } = req.body;
        await updateQuery("UPDATE employees SET branch_id=?, full_name=?, workplace=?, position_held=?, passport_serial=?, passport_number=?, passport_day=?, birth_place=?, birth_day=?, address=?, ins=?, inn=?, phone_number=?, work_experience=?, contract_number=?, contract_day=?, comment=?, employment_start_day=?, employment_end_day=?, military=?,passport_address=?, nation=? WHERE id=?", [branch_id, full_name, workplace, position_held, passport_serial, passport_number, passport_day, birth_place, birth_day, address, ins, inn, phone_number, work_experience, contract_number, contract_day, comment, employment_start_day, employment_end_day, military, passport_address, nation, id])
        res.json({ message: "ok" })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.post("/img", async (req, res, next) => {
    try {
        let { id } = req.query
        req.files.img.mv(path.join(__dirname, "../public/", `${md5(id)}.png`), async (err) => {
            try {
                if (err) throw err
                await updateQuery("UPDATE employees SET photo = ? WHERE id = ?", [`${id}.png`, id])
                res.json({ message: "ok" })
            } catch (err) {
                next(new Error(`File upload error, message: ${err.message}`))
            }
        })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.get("/edu", async (req, res, next) => {
    try {
        let { id } = req.query
        let arr = await getRow("SELECT * FROM edu WHERE emp_id = ?", [id])
        res.json({ message: "ok", arr })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.post("/edu", async (req, res, next) => {
    try {
        let { emp_id, name, specialty, num, years } = req.body
        let ins = await insertQuery("INSERT INTO edu (emp_id, name, specialty, num, years) VALUES (?, ?, ?, ?, ?)", [emp_id, name, specialty, num, years])
        res.json({ message: "ok", id: ins?.insertId })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.delete("/edu", async (req, res, next) => {
    try {
        let { id } = req.query
        let ins = await insertQuery("DELETE FROM edu WHERE id = ?", [id])
        res.json({ message: "ok", })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.get("/sciens", async (req, res, next) => {
    try {
        let { id } = req.query
        let arr = await getRow("SELECT * FROM sciens WHERE emp_id = ?", [id])
        res.json({ message: "ok", arr })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.post("/sciens", async (req, res, next) => {
    try {
        let { emp_id, name, specialty, num, years } = req.body
        let ins = await insertQuery("INSERT INTO sciens (emp_id, name, specialty, num, years) VALUES (?, ?, ?, ?, ?)", [emp_id, name, specialty, num, years])
        res.json({ message: "ok", id: ins?.insertId })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.delete("/sciens", async (req, res, next) => {
    try {
        let { id } = req.query
        let ins = await insertQuery("DELETE FROM sciens WHERE id = ?", [id])
        res.json({ message: "ok", })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})

router.get("/analiz", async (req, res, next) => {
    try {
        let arr1 = await getRow("SELECT * FROM vw_analiz_1", [])
        res.json({ message: "ok", arr1 })
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})


module.exports = router;
