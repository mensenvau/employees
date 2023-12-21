const { body } = require("express-validator");

let schemaSmsSend = [
  body("phone").matches(/^\d{9}$/).withMessage("phone is not valid 'matches'!")
];

let schemaSmsCode = [
  body("code").matches(/^\d{4}$/).withMessage("code is not valid 'matches'!"),
  body("token").isString().withMessage("token is not valid 'isString'!").notEmpty().withMessage("token is not valid 'notEmpty'!"),
];

let schemaPrimaryKey = [
  body("id").isNumeric().withMessage("id is not valid 'isNumeric'!").notEmpty().withMessage("id is not valid 'notEmpty'!")
]

module.exports = {
  schemaSmsSend,
  schemaSmsCode,
  schemaPrimaryKey
};
