// read .env 
require("dotenv").config();

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  waitForConnections: true,
  connectTimeout: 60000,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true,
  timezone: "-05:00"
});

console.log("Creating connetion to MYSQL!");

const getRow = async (query, params) => {
  try {
    let results = await pool.query(query, params);
    return results[0];
  } catch (err) {
    throw new Error(`MYSQL has an error!, message: ${err.message}`);
  }
};

const getOneRow = async (query, params) => {
  try {
    return (await pool.query(query, params))[0][0];
  } catch (err) {
    throw new Error(`MYSQL has an error!, message: ${err.message}`);
  }
};

const insertQuery = async (query, params) => {
  try {
    return (await pool.query(query, params))[0];
  } catch (err) {
    throw new Error(`MYSQL has an error!, message: ${err.message}`);
  }
};

const updateQuery = async (query, params) => {
  try {
    return (await pool.query(query, params))[0];
  } catch (err) {
    throw new Error(`MYSQL has an error!, message: ${err.message}`);
  }
};

const deleteQuery = async (query, params) => {
  try {
    return (await pool.query(query, params))[0];
  } catch (err) {
    throw new Error(`MYSQL has an error!, message: ${err.message}`);
  }
};

let poolEnd = () => {
  pool.end();
}

module.exports = {
  getRow, getOneRow, insertQuery, updateQuery, deleteQuery, poolEnd
};
