const express = require("express")
const router = express.Router()
const path = require("path")
const fs = require("fs")
const { allEmployees } = require("../function/export")

router.get("/all_employees", async (req, res, next) => {

    try {
        await allEmployees();

        const filePath = path.join(__dirname, '../export', "all_employees.xlsx");
        const stat = fs.statSync(filePath);

        const fileSize = stat.size;
        const range = req.headers.range || 'bytes=0-';

        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        const chunkSize = end - start + 1;
        const file = fs.createReadStream(filePath, { start, end });

        const headers = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'application/octet-stream',
        };

        res.writeHead(200, headers);
        file.pipe(res);
    } catch (err) {
        next(new Error(`Router error, message: ${err.message}`))
    }
})




module.exports = router;
