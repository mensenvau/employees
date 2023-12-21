let jwt = require('jsonwebtoken');

let encode = (data) => { return jwt.sign(data, process.env.KEY, { expiresIn: "1d" }) }
let decode = (token) => { return jwt.verify(token, process.env.KEY) }

module.exports = {
    encode, decode
}