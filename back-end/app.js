// read .env 
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require('cors')
const fileUpload = require("express-fileupload");
const { routerNotFound, routerErrorServer } = require("./function/handler");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 }, }))
app.use(cors({ origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "https://medreyting.uz"], optionsSuccessStatus: 200 }))

app.use("/api", require("./routes/main"))

app.use(routerErrorServer)
app.use(routerNotFound)

// app running here with .env PORT!
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
