
// lib/db.ts
import mysql, { Connection, Pool } from 'mysql2/promise';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

const connectionConfig = {
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD?.replace("~", "$"),
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0,
    connectTimeout: 6000,
    timezone: "-05:00"
};

let connection: Connection;

async function createConnection() {
    console.log("connected")
    connection = await mysql.createConnection(connectionConfig);
}

export async function getRow(query: any, params: any): Promise<RowDataPacket[]> {
    try {
        if (!connection) { await createConnection(); }
        let res = (await connection.query<RowDataPacket[]>(query, params))
        return res[0];
    } catch (err: any) {
        if (connection) await connection.end();
        throw new Error(`'MySQL Query Error:', ${err?.message}`);
    } finally {
        // if (connection) await connection.end();
    }
}

export async function insertQuery(query: any, params: any): Promise<ResultSetHeader> {
    try {
        if (!connection) { await createConnection(); }
        let res = (await connection.query<ResultSetHeader>(query, params))
        return res[0];
    } catch (err: any) {
        if (connection) await connection.end();
        throw new Error(`'MySQL Query Error:', ${err?.message}`);
    } finally {
        // if (connection) await connection.end();
    }
} 
