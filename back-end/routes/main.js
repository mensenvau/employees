const express = require("express")
const { authStop } = require("../function/auth")
const app = express()

app.use("/auth", require("./auth"))

app.use(authStop)

app.use("/branchs", require("./branchs"))
app.use("/employees", require("./employees"))
app.use("/download", require("./download"))

module.exports = app;
