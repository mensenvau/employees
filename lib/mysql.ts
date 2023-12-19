import mysql, { ResultSetHeader, RowDataPacket } from 'mysql2';

const pool = mysql.createPool({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD?.replace("~", "$"),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    multipleStatements: true,
    connectTimeout: 60000,
    timezone: "-05:00"
}).promise();

let getRow = async (query: any, params: any): Promise<RowDataPacket[]> => {
    try {
        let res = (await pool.query<RowDataPacket[]>(query, params))
        return res[0];
    } catch (err: any) {
        throw new Error("Server error, MYSQL has an error!, " + err.message);
    }
};

let insertQuery = async (query: any, params: any): Promise<ResultSetHeader> => {
    try {
        let res = (await pool.query<ResultSetHeader>(query, params))
        return res[0];
    } catch (err: any) {
        throw new Error("Server error, MYSQL has an error!, " + err.message);
    }
};

export {
    getRow, insertQuery
}