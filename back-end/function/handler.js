let routerErrorServer = (err, req, res, next) => {
    res.status(500).json({ message: err?.message, version: process.env.VERSION, })
}

let routerNotFound = (req, res, next) => {
    res.status(404).json({ message: "Page not found :(", version: process.env.VERSION, })
}

module.exports = { routerErrorServer, routerNotFound }