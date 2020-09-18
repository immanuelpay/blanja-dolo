const mysql = require("mysql2");
require('dotenv').config();

const dbConnection = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	multipleStatements: true,
});

dbConnection.connect();

const runQuery = (query, callBack) => {
	query = `USE ${process.env.DB_DATABASE}; ${query}`;
	return dbConnection.query(query, callBack);
};

module.exports = { dbConnection, runQuery, };